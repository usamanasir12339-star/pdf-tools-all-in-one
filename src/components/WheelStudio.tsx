import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, 
  Download, 
  Sliders, 
  RotateCw, 
  Crop as CropIcon, 
  Sparkles, 
  Check, 
  X, 
  Undo, 
  Image as ImageIcon,
  Palette,
  FileCheck
} from 'lucide-react';

interface WheelItem {
  l: string;
  k: string;
  ext?: string;
}

const MENU_LISTS: Record<'convert' | 'tools', WheelItem[]> = {
  convert: [
    { l: 'PNG', k: 'png', ext: 'png' },
    { l: 'JPG', k: 'jpg', ext: 'jpg' },
    { l: 'WEBP', k: 'webp', ext: 'webp' },
    { l: 'AVIF', k: 'avif', ext: 'avif' },
    { l: 'TIFF', k: 'tiff', ext: 'tiff' },
    { l: 'BMP', k: 'bmp', ext: 'bmp' },
    { l: 'PDF', k: 'pdf', ext: 'pdf' },
    { l: 'SVG', k: 'svg', ext: 'svg' }
  ],
  tools: [
    { l: 'COMPRESS', k: 'compress' },
    { l: 'METADATA', k: 'strip' },
    { l: 'EDIT', k: 'edit' },
    { l: 'ANNOTATE', k: 'annotate' },
    { l: 'ADD BG', k: 'bg' },
    { l: 'CROP', k: 'crop' },
    { l: 'REDACT', k: 'redact' }
  ]
};

export const WheelStudio: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [bmp, setBmp] = useState<ImageBitmap | null>(null);
  const [mode, setMode] = useState<'convert' | 'tools'>('convert');
  const [cur, setCur] = useState<number>(-1);
  const [floating, setFloating] = useState<boolean>(false);
  const [floatPos, setFloatPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [busy, setBusy] = useState<boolean>(false);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [resUrl, setResUrl] = useState<string | null>(null);
  const [resData, setResData] = useState<{ blob: Blob; name: string; engine: string } | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Modal Editor state
  const [edState, setEdState] = useState<{
    k: string;
    ratio: number;
    box: { x: number; y: number; w: number; h: number };
    f: [number, number, number]; // brightness, contrast, saturate
    pad: number;
    bg: number;
    q: number;
    col: string;
    mode: 'pen' | 'text';
    textInput: string;
    strokes: { c: string; w: number; p: [number, number][] }[];
    texts: { t: string; x: number; y: number; sz: number; c: string }[];
    rects: { x: number; y: number; w: number; h: number }[];
    hist: string[];
    scale: number;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDraggingEditor = useRef<{ t: string; a?: [number, number]; dx?: number; dy?: number } | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const formatBytes = (b: number) => {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(1) + ' MB';
  };

  // Load image
  const loadFile = async (f: File) => {
    if (!f) return false;
    if (!f.type.startsWith('image/')) {
      showToast('Shiftwheel studio handles images (PNG, JPG, WEBP, GIF, TIFF, etc.)');
      return false;
    }
    try {
      const bitmap = await createImageBitmap(f);
      setBmp(bitmap);
      setFile(f);
      if (thumbUrl) URL.revokeObjectURL(thumbUrl);
      const url = URL.createObjectURL(f);
      setThumbUrl(url);
      setCur(-1);
      showToast(`Loaded: ${f.name} (${bitmap.width}×${bitmap.height})`);
      return true;
    } catch (e) {
      showToast('Could not load that image into canvas');
      return false;
    }
  };

  // Shift Drag & Drop float listener
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      if (e.shiftKey) {
        setFloating(true);
        setFloatPos({ x: e.clientX, y: e.clientY });
        if (e.altKey && mode !== 'tools') setMode('tools');
        else if (!e.altKey && mode !== 'convert') setMode('convert');
      } else if (floating) {
        setFloating(false);
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      if (!e.relatedTarget) setFloating(false);
    };

    const handleDrop = async (e: DragEvent) => {
      e.preventDefault();
      setFloating(false);
      if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
        await loadFile(e.dataTransfer.files[0]);
      }
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);
    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, [floating, mode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (edState || !file) return;
      const list = MENU_LISTS[mode];
      const n = list.length;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setCur((cur + 1) % n);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setCur((cur - 1 + n) % n);
      } else if (e.key === 'Enter' && cur >= 0) {
        e.preventDefault();
        handleApplyItem(list[cur]);
      } else if (e.key === 'Escape') {
        setCur(-1);
        setFloating(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cur, mode, file, edState]);

  // Build Radial SVG Slices
  const arcPath = (a0: number, a1: number, r0: number, r1: number) => {
    const p = (r: number, a: number): [string, string] => [
      (170 + r * Math.sin(a)).toFixed(1),
      (170 - r * Math.cos(a)).toFixed(1)
    ];
    const A = p(r1, a0), B = p(r1, a1), C = p(r0, a1), D = p(r0, a0);
    return `M${A}A${r1} ${r1} 0 0 1 ${B}L${C}A${r0} ${r0} 0 0 0 ${D}Z`;
  };

  const list = MENU_LISTS[mode];
  const n = list.length;
  const step = (2 * Math.PI) / n;
  const gap = 0.045;

  // Handle Apply Action
  const handleApplyItem = async (item: WheelItem) => {
    if (!file || !bmp) {
      showToast('Please choose an image first');
      return;
    }
    if (busy) return;

    if (MENU_LISTS.tools.some(t => t.k === item.k)) {
      openEditor(item.k);
      return;
    }

    setBusy(true);
    showToast(`Converting to ${item.l}...`);

    try {
      // Send to real backend conversion engine
      const formData = new FormData();
      formData.append('file', file);
      formData.append('targetFormat', item.k);
      formData.append('options', JSON.stringify({ quality: 90 }));

      const resp = await fetch('/api/convert', {
        method: 'POST',
        body: formData
      });

      if (!resp.ok) {
        const errJson = await resp.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(errJson.error || 'Backend conversion failed');
      }

      const engine = resp.headers.get('x-engine-used') || 'Shiftwheel Engine';
      const blob = await resp.blob();
      const base = file.name.replace(/\.[^.]+$/, '');
      const outName = `${base}.${item.k}`;

      if (resUrl) URL.revokeObjectURL(resUrl);
      const url = URL.createObjectURL(blob);
      setResUrl(url);
      setResData({ blob, name: outName, engine });
      showToast(`Done! Converted to ${item.l} (${formatBytes(blob.size)})`);
    } catch (err: any) {
      showToast(`Conversion failed: ${err.message}`);
    } finally {
      setBusy(false);
    }
  };

  // Open Canvas Editor Modal
  const openEditor = (k: string) => {
    if (!bmp) return;
    const w = bmp.width;
    const h = bmp.height;
    const s = Math.min(Math.min(500, window.innerWidth - 64) / w, 400 / h);

    setEdState({
      k,
      ratio: 0,
      box: { x: 0, y: 0, w, h },
      f: [100, 100, 100],
      pad: 8,
      bg: 0,
      q: 85,
      col: '#e8532b',
      mode: 'pen',
      textInput: '',
      strokes: [],
      texts: [],
      rects: [],
      hist: [],
      scale: s
    });
  };

  // Redraw Canvas Editor
  useEffect(() => {
    if (!edState || !canvasRef.current || !bmp) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = bmp.width;
    const h = bmp.height;
    const s = edState.scale;

    if (edState.k === 'bg') {
      const p = (edState.pad / 100) * Math.max(w, h);
      const sc = Math.min(Math.min(480, window.innerWidth - 64) / (w + 2 * p), 400 / (h + 2 * p));
      canvas.width = Math.round((w + 2 * p) * sc);
      canvas.height = Math.round((h + 2 * p) * sc);

      if (edState.bg === 0) {
        const gr = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gr.addColorStop(0, '#e8a93a');
        gr.addColorStop(0.6, '#e8743b');
        gr.addColorStop(1, '#9a84c9');
        ctx.fillStyle = gr;
      } else {
        const bgColors = ['#e8743b', '#ffffff', '#111111', '#9a84c9'];
        ctx.fillStyle = bgColors[edState.bg];
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bmp, p * sc, p * sc, w * sc, h * sc);
      return;
    }

    canvas.width = Math.round(w * s);
    canvas.height = Math.round(h * s);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (edState.k === 'edit') {
      ctx.filter = `brightness(${edState.f[0]}%) contrast(${edState.f[1]}%) saturate(${edState.f[2]}%)`;
    }
    ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height);
    ctx.filter = 'none';

    // Rectangles (Redaction)
    ctx.fillStyle = '#000000';
    edState.rects.forEach(r => {
      ctx.fillRect(r.x * s, r.y * s, r.w * s, r.h * s);
    });

    // Strokes (Annotation)
    edState.strokes.forEach(st => {
      ctx.strokeStyle = st.c;
      ctx.lineWidth = st.w * s;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      st.p.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt[0] * s, pt[1] * s);
        else ctx.lineTo(pt[0] * s, pt[1] * s);
      });
      ctx.stroke();
    });

    // Texts (Annotation)
    edState.texts.forEach(t => {
      ctx.fillStyle = t.c;
      ctx.font = `700 ${t.sz * s}px system-ui, sans-serif`;
      ctx.fillText(t.t, t.x * s, t.y * s);
    });

    // Crop box overlay
    if (edState.k === 'crop') {
      const b = edState.box;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.fillRect(0, 0, canvas.width, b.y * s);
      ctx.fillRect(0, (b.y + b.h) * s, canvas.width, canvas.height);
      ctx.fillRect(0, b.y * s, b.x * s, b.h * s);
      ctx.fillRect((b.x + b.w) * s, b.y * s, canvas.width, b.h * s);

      ctx.strokeStyle = '#e8532b';
      ctx.lineWidth = 2;
      ctx.strokeRect(b.x * s, b.y * s, b.w * s, b.h * s);
      ctx.fillStyle = '#e8532b';
      const corners = [
        [b.x, b.y],
        [b.x + b.w, b.y],
        [b.x, b.y + b.h],
        [b.x + b.w, b.y + b.h]
      ];
      corners.forEach(([cx, cy]) => {
        ctx.fillRect(cx * s - 5, cy * s - 5, 10, 10);
      });
    }
  }, [edState, bmp]);

  // Pointer interaction for canvas editor
  const getCanvasPt = (e: React.PointerEvent<HTMLCanvasElement>): [number, number] => {
    if (!canvasRef.current || !bmp || !edState) return [0, 0];
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(bmp.width, ((e.clientX - rect.left) * canvasRef.current.width) / rect.width / edState.scale));
    const y = Math.max(0, Math.min(bmp.height, ((e.clientY - rect.top) * canvasRef.current.height) / rect.height / edState.scale));
    return [x, y];
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!edState || !bmp || edState.k === 'bg') return;
    const pt = getCanvasPt(e);
    const m = Math.max(bmp.width, bmp.height);

    if (edState.k === 'crop') {
      const b = edState.box;
      const corners: [number, number][] = [
        [b.x, b.y],
        [b.x + b.w, b.y],
        [b.x, b.y + b.h],
        [b.x + b.w, b.y + b.h]
      ];
      const cornerIdx = corners.findIndex(c => Math.hypot(c[0] - pt[0], c[1] - pt[1]) < 24 / edState.scale);
      if (cornerIdx >= 0) {
        isDraggingEditor.current = { t: 'corner', a: corners[3 - cornerIdx] };
      } else if (pt[0] > b.x && pt[0] < b.x + b.w && pt[1] > b.y && pt[1] < b.y + b.h) {
        isDraggingEditor.current = { t: 'move', dx: pt[0] - b.x, dy: pt[1] - b.y };
      } else {
        isDraggingEditor.current = { t: 'corner', a: pt };
      }
    } else if (edState.k === 'annotate') {
      if (edState.mode === 'pen') {
        const nextStrokes = [...edState.strokes, { c: edState.col, w: m / 120, p: [pt] }];
        setEdState({ ...edState, strokes: nextStrokes, hist: [...edState.hist, 'strokes'] });
        isDraggingEditor.current = { t: 'pen' };
      } else if (edState.textInput.trim()) {
        const nextTexts = [...edState.texts, { t: edState.textInput.trim(), x: pt[0], y: pt[1], sz: m / 20, c: edState.col }];
        setEdState({ ...edState, texts: nextTexts, hist: [...edState.hist, 'texts'] });
      }
    } else if (edState.k === 'redact') {
      const nextRects = [...edState.rects, { x: pt[0], y: pt[1], w: 0, h: 0 }];
      setEdState({ ...edState, rects: nextRects, hist: [...edState.hist, 'rects'] });
      isDraggingEditor.current = { t: 'rect', a: pt };
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!edState || !isDraggingEditor.current || !bmp) return;
    const pt = getCanvasPt(e);
    const drag = isDraggingEditor.current;
    const W = bmp.width;
    const H = bmp.height;

    if (drag.t === 'pen') {
      const strokes = [...edState.strokes];
      strokes[strokes.length - 1].p.push(pt);
      setEdState({ ...edState, strokes });
    } else if (drag.t === 'rect' && drag.a) {
      const rects = [...edState.rects];
      const curRect = rects[rects.length - 1];
      curRect.x = Math.min(drag.a[0], pt[0]);
      curRect.y = Math.min(drag.a[1], pt[1]);
      curRect.w = Math.abs(pt[0] - drag.a[0]);
      curRect.h = Math.abs(pt[1] - drag.a[1]);
      setEdState({ ...edState, rects });
    } else if (drag.t === 'move' && drag.dx !== undefined && drag.dy !== undefined) {
      const b = { ...edState.box };
      b.x = Math.max(0, Math.min(W - b.w, pt[0] - drag.dx));
      b.y = Math.max(0, Math.min(H - b.h, pt[1] - drag.dy));
      setEdState({ ...edState, box: b });
    } else if (drag.t === 'corner' && drag.a) {
      let w = Math.abs(pt[0] - drag.a[0]);
      let h = Math.abs(pt[1] - drag.a[1]);
      if (edState.ratio) h = w / edState.ratio;
      let x = pt[0] < drag.a[0] ? drag.a[0] - w : drag.a[0];
      let y = pt[1] < drag.a[1] ? drag.a[1] - h : drag.a[1];
      x = Math.max(0, x);
      y = Math.max(0, y);
      w = Math.min(w, W - x);
      h = Math.min(h, H - y);
      setEdState({ ...edState, box: { x, y, w: Math.max(10, w), h: Math.max(10, h) } });
    }
  };

  const handlePointerUp = () => {
    isDraggingEditor.current = null;
  };

  // Apply Modal Editor changes
  const applyEditorChanges = async () => {
    if (!edState || !bmp || !file) return;
    setBusy(true);
    showToast('Applying image edits...');

    try {
      const c = document.createElement('canvas');
      const w = bmp.width;
      const h = bmp.height;
      const base = file.name.replace(/\.[^.]+$/, '');

      if (edState.k === 'crop') {
        const b = edState.box;
        c.width = Math.round(b.w);
        c.height = Math.round(b.h);
        const ctx = c.getContext('2d')!;
        ctx.drawImage(bmp, b.x, b.y, b.w, b.h, 0, 0, c.width, c.height);
      } else if (edState.k === 'bg') {
        const p = Math.round((edState.pad / 100) * Math.max(w, h));
        c.width = w + 2 * p;
        c.height = h + 2 * p;
        const ctx = c.getContext('2d')!;
        if (edState.bg === 0) {
          const gr = ctx.createLinearGradient(0, 0, c.width, c.height);
          gr.addColorStop(0, '#e8a93a');
          gr.addColorStop(0.6, '#e8743b');
          gr.addColorStop(1, '#9a84c9');
          ctx.fillStyle = gr;
        } else {
          ctx.fillStyle = ['#e8743b', '#ffffff', '#111111', '#9a84c9'][edState.bg];
        }
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(bmp, p, p);
      } else {
        c.width = w;
        c.height = h;
        const ctx = c.getContext('2d')!;
        if (edState.k === 'edit') {
          ctx.filter = `brightness(${edState.f[0]}%) contrast(${edState.f[1]}%) saturate(${edState.f[2]}%)`;
        }
        ctx.drawImage(bmp, 0, 0);
        ctx.filter = 'none';

        ctx.fillStyle = '#000000';
        edState.rects.forEach(r => ctx.fillRect(r.x, r.y, r.w, r.h));
        edState.strokes.forEach(st => {
          ctx.strokeStyle = st.c;
          ctx.lineWidth = st.w;
          ctx.lineCap = 'round';
          ctx.beginPath();
          st.p.forEach((pt, i) => i === 0 ? ctx.moveTo(pt[0], pt[1]) : ctx.lineTo(pt[0], pt[1]));
          ctx.stroke();
        });
        edState.texts.forEach(t => {
          ctx.fillStyle = t.c;
          ctx.font = `700 ${t.sz}px system-ui, sans-serif`;
          ctx.fillText(t.t, t.x, t.y);
        });
      }

      const blob: Blob = await new Promise(res => {
        if (edState.k === 'compress') {
          c.toBlob(b => res(b!), 'image/jpeg', edState.q / 100);
        } else {
          c.toBlob(b => res(b!), 'image/png');
        }
      });

      const outName = `${base}-${edState.k}.${edState.k === 'compress' ? 'jpg' : 'png'}`;
      if (resUrl) URL.revokeObjectURL(resUrl);
      const url = URL.createObjectURL(blob);
      setResUrl(url);
      setResData({ blob, name: outName, engine: 'Shiftwheel Studio Engine' });
      setEdState(null);
      showToast(`Saved: ${outName} (${formatBytes(blob.size)})`);
    } catch (err: any) {
      showToast(`Failed to apply changes: ${err.message}`);
    } finally {
      setBusy(false);
    }
  };

  // Download converted file
  const handleSaveResult = () => {
    if (!resData || !resUrl) return;
    const a = document.createElement('a');
    a.href = resUrl;
    a.download = resData.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`Downloaded ${resData.name}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col items-center gap-6">
      {/* Intro Header */}
      <div className="text-center max-w-xl">
        <h2 className="text-3xl font-black tracking-tight text-[#2a150c] dark:text-[#fff1e3]">
          Radial Wheel Studio
        </h2>
        <p className="text-sm opacity-80 mt-1 font-medium">
          Drag and drop an image anywhere or hold <kbd className="px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/20 font-mono text-xs">Shift</kbd> on desktop to summon the radial menu right at your cursor.
        </p>
      </div>

      {/* Drop Zone */}
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="liquid-glass w-full max-w-lg p-6 rounded-3xl flex flex-col items-center justify-center gap-3 cursor-pointer text-center hover:scale-[1.01] transition-transform border border-white/40 shadow-xl"
      >
        <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-[#e8532b] dark:text-orange-300 flex items-center justify-center">
          <Upload className="w-6 h-6 animate-bounce" />
        </div>
        {file ? (
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#e8532b] text-white">
              {file.name}
            </span>
            <p className="text-xs opacity-75 mt-1 font-medium">
              {formatBytes(file.size)} · Click or drop to change image
            </p>
          </div>
        ) : (
          <div>
            <p className="font-bold text-base text-[#2a150c] dark:text-white">
              Drop an image anywhere on this page
            </p>
            <p className="text-xs opacity-70 mt-0.5">
              Supports PNG, JPG, WEBP, AVIF, TIFF, BMP, SVG, and Camera RAW
            </p>
          </div>
        )}
        <button 
          type="button"
          className="px-5 py-2 rounded-full bg-[#e8532b] text-white font-bold text-xs shadow-md shadow-orange-500/30 hover:brightness-110 cursor-pointer"
        >
          {file ? 'Change Image' : 'Choose Image'}
        </button>
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          onChange={e => e.target.files?.[0] && loadFile(e.target.files[0])}
          className="hidden" 
        />
      </div>

      {/* Mode Segmented Controls */}
      <div className="liquid-glass p-1 rounded-full flex gap-1 shadow-md">
        <button
          onClick={() => setMode('convert')}
          className={`px-5 py-2 rounded-full font-bold text-xs transition-all ${
            mode === 'convert'
              ? 'bg-white text-[#2a150c] shadow-md dark:bg-white/90'
              : 'opacity-70 hover:opacity-100'
          }`}
        >
          Convert Formats
        </button>
        <button
          onClick={() => setMode('tools')}
          className={`px-5 py-2 rounded-full font-bold text-xs transition-all ${
            mode === 'tools'
              ? 'bg-white text-[#2a150c] shadow-md dark:bg-white/90'
              : 'opacity-70 hover:opacity-100'
          }`}
        >
          Image Tools
        </button>
      </div>

      {/* The Liquid-Glass Radial Wheel */}
      <div className="relative w-[340px] h-[340px] my-2 select-none animate-pop">
        {/* Disc Background */}
        <div className="absolute inset-[2%] rounded-full liquid-glass shadow-2xl" />

        {/* Center Thumbnail Hole */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square rounded-full overflow-hidden bg-orange-500/20 shadow-inner flex items-center justify-center border-2 border-white/60">
          {thumbUrl ? (
            <img src={thumbUrl} alt="Input thumbnail" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon className="w-10 h-10 opacity-30 text-[#e8532b]" />
          )}
        </div>

        {/* SVG Pie Slices */}
        <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full">
          {list.map((item, idx) => {
            const angle = idx * step;
            const pathD = arcPath(angle - step / 2 + gap, angle + step / 2 - gap, 86, 156);
            const textX = 170 + 121 * Math.sin(angle);
            const textY = 170 - 121 * Math.cos(angle);
            const isHovered = cur === idx;

            return (
              <g
                key={item.k}
                className={`sl ${isHovered ? 'on' : ''}`}
                onPointerOver={() => setCur(idx)}
                onPointerLeave={() => setCur(-1)}
                onClick={() => handleApplyItem(item)}
              >
                <path d={pathD} />
                <text
                  x={textX.toFixed(1)}
                  y={textY.toFixed(1)}
                  style={{ fontSize: n > 6 ? '10.5px' : '12px' }}
                >
                  {item.l}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Central Pill Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-[var(--pill)] text-[var(--lab)] font-black text-xs tracking-wider shadow-lg pointer-events-none whitespace-nowrap border border-white/50">
          {cur >= 0 ? list[cur].l : file ? formatBytes(file.size) : 'DROP'}
        </div>
      </div>

      {/* Result Card */}
      {resData && (
        <div className="liquid-glass w-full max-w-lg p-4 rounded-3xl flex items-center gap-4 animate-pop border border-white/40 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-white/40 overflow-hidden flex items-center justify-center font-black text-xs flex-none shadow-sm">
            {resData.blob.type.startsWith('image/') && resUrl ? (
              <img src={resUrl} alt="Result preview" className="w-full h-full object-cover" />
            ) : (
              <span className="uppercase text-orange-950 font-extrabold">PDF</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-blue-600 text-white truncate max-w-full">
              {resData.name}
            </span>
            <p className="text-xs opacity-80 mt-1 font-semibold">
              {formatBytes(resData.blob.size)} {file ? `(orig: ${formatBytes(file.size)})` : ''}
            </p>
            <p className="text-[10px] opacity-65">{resData.engine}</p>
          </div>
          <button
            onClick={handleSaveResult}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e8532b] text-white font-bold text-xs shadow-md shadow-orange-500/30 hover:brightness-110 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Save</span>
          </button>
        </div>
      )}

      {/* Floating Wheel for Shift-Drag */}
      {floating && (
        <div 
          style={{ left: Math.max(10, floatPos.x - 170), top: Math.max(10, floatPos.y - 170) }}
          className="fixed z-50 pointer-events-none w-[340px] h-[340px] animate-pop"
        >
          <div className="absolute inset-[2%] rounded-full liquid-glass shadow-2xl" />
          <svg viewBox="0 0 340 340" className="absolute inset-0 w-full h-full">
            {list.map((item, idx) => {
              const angle = idx * step;
              const pathD = arcPath(angle - step / 2 + gap, angle + step / 2 - gap, 86, 156);
              const textX = 170 + 121 * Math.sin(angle);
              const textY = 170 - 121 * Math.cos(angle);
              return (
                <g key={item.k} className="sl">
                  <path d={pathD} />
                  <text x={textX.toFixed(1)} y={textY.toFixed(1)}>{item.l}</text>
                </g>
              );
            })}
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-[var(--pill)] text-[var(--lab)] font-black text-xs">
            DROP HERE
          </div>
        </div>
      )}

      {/* Modal Canvas Editor for Tools */}
      {edState && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto">
          <div className="liquid-card w-full max-w-xl p-5 rounded-3xl flex flex-col gap-4 max-h-[92vh] overflow-y-auto text-[#2a150c] dark:text-white border border-white/30 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base capitalize flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#e8532b]" />
                <span>Tool: {edState.k}</span>
              </h3>
              <button
                onClick={() => setEdState(null)}
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Canvas Preview Area */}
            <div className="w-full flex items-center justify-center bg-black/10 dark:bg-black/30 rounded-2xl p-2 overflow-hidden">
              <canvas
                ref={canvasRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="max-w-full rounded-lg cursor-crosshair touch-none shadow-md"
              />
            </div>

            {/* Dynamic Tool Controls */}
            <div className="flex flex-col gap-3 text-xs">
              {edState.k === 'crop' && (
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Aspect Ratio:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { l: 'Free', r: 0 },
                      { l: '1:1', r: 1 },
                      { l: '16:9', r: 16 / 9 },
                      { l: '9:16', r: 9 / 16 },
                      { l: '4:3', r: 4 / 3 },
                      { l: '3:4', r: 3 / 4 }
                    ].map(preset => (
                      <button
                        key={preset.l}
                        onClick={() => {
                          const b = { ...edState.box };
                          if (preset.r > 0) {
                            b.h = Math.min(b.w / preset.r, (bmp?.height || 0) - b.y);
                            b.w = b.h * preset.r;
                          }
                          setEdState({ ...edState, ratio: preset.r, box: b });
                        }}
                        className={`px-3 py-1.5 rounded-full font-bold transition-all ${
                          edState.ratio === preset.r
                            ? 'bg-[#e8532b] text-white shadow'
                            : 'bg-black/10 hover:bg-black/20'
                        }`}
                      >
                        {preset.l}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span>Width: {Math.round(edState.box.w)}px</span>
                    <span>Height: {Math.round(edState.box.h)}px</span>
                  </div>
                </div>
              )}

              {edState.k === 'edit' && (
                <div className="flex flex-col gap-3">
                  <label className="flex items-center justify-between gap-4">
                    <span className="font-bold">Brightness ({edState.f[0]}%):</span>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value={edState.f[0]}
                      onChange={e => {
                        const f = [...edState.f] as [number, number, number];
                        f[0] = parseInt(e.target.value);
                        setEdState({ ...edState, f });
                      }}
                      className="flex-1"
                    />
                  </label>
                  <label className="flex items-center justify-between gap-4">
                    <span className="font-bold">Contrast ({edState.f[1]}%):</span>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      value={edState.f[1]}
                      onChange={e => {
                        const f = [...edState.f] as [number, number, number];
                        f[1] = parseInt(e.target.value);
                        setEdState({ ...edState, f });
                      }}
                      className="flex-1"
                    />
                  </label>
                  <label className="flex items-center justify-between gap-4">
                    <span className="font-bold">Saturation ({edState.f[2]}%):</span>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={edState.f[2]}
                      onChange={e => {
                        const f = [...edState.f] as [number, number, number];
                        f[2] = parseInt(e.target.value);
                        setEdState({ ...edState, f });
                      }}
                      className="flex-1"
                    />
                  </label>
                </div>
              )}

              {edState.k === 'annotate' && (
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setEdState({ ...edState, mode: 'pen' })}
                    className={`px-3 py-1.5 rounded-full font-bold ${
                      edState.mode === 'pen' ? 'bg-[#e8532b] text-white' : 'bg-black/10'
                    }`}
                  >
                    Pen
                  </button>
                  <button
                    onClick={() => setEdState({ ...edState, mode: 'text' })}
                    className={`px-3 py-1.5 rounded-full font-bold ${
                      edState.mode === 'text' ? 'bg-[#e8532b] text-white' : 'bg-black/10'
                    }`}
                  >
                    Text
                  </button>
                  <input
                    type="color"
                    value={edState.col}
                    onChange={e => setEdState({ ...edState, col: e.target.value })}
                    className="w-8 h-8 rounded-full cursor-pointer border-0"
                  />
                  {edState.mode === 'text' && (
                    <input
                      type="text"
                      placeholder="Type text, then click image"
                      value={edState.textInput}
                      onChange={e => setEdState({ ...edState, textInput: e.target.value })}
                      className="px-3 py-1.5 rounded-xl border border-black/20 bg-white/50 flex-1 min-w-[120px]"
                    />
                  )}
                  <button
                    onClick={() => {
                      const hist = [...edState.hist];
                      const last = hist.pop();
                      if (last === 'strokes') {
                        setEdState({ ...edState, strokes: edState.strokes.slice(0, -1), hist });
                      } else if (last === 'texts') {
                        setEdState({ ...edState, texts: edState.texts.slice(0, -1), hist });
                      }
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 font-bold ml-auto"
                  >
                    <Undo className="w-3.5 h-3.5" />
                    <span>Undo</span>
                  </button>
                </div>
              )}

              {edState.k === 'bg' && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">Palette:</span>
                    {['Sunset', 'White', 'Black', 'Purple'].map((bgName, i) => (
                      <button
                        key={bgName}
                        onClick={() => setEdState({ ...edState, bg: i })}
                        className={`px-3 py-1.5 rounded-full font-bold ${
                          edState.bg === i ? 'bg-[#e8532b] text-white' : 'bg-black/10'
                        }`}
                      >
                        {bgName}
                      </button>
                    ))}
                  </div>
                  <label className="flex items-center justify-between gap-4">
                    <span className="font-bold">Padding ({edState.pad}%):</span>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={edState.pad}
                      onChange={e => setEdState({ ...edState, pad: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                  </label>
                </div>
              )}

              {edState.k === 'compress' && (
                <div className="flex flex-col gap-3">
                  <label className="flex items-center justify-between gap-4">
                    <span className="font-bold">JPEG Quality ({edState.q}%):</span>
                    <input
                      type="range"
                      min="10"
                      max="95"
                      value={edState.q}
                      onChange={e => setEdState({ ...edState, q: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                  </label>
                  <p className="text-xs opacity-75 font-semibold">
                    Original: {file ? formatBytes(file.size) : '0 B'} · Higher compression lowers file size while maintaining visual clarity.
                  </p>
                </div>
              )}

              {edState.k === 'strip' && (
                <div className="p-3 rounded-2xl bg-black/5 flex flex-col gap-1">
                  <span className="font-bold">Metadata Information:</span>
                  <p className="opacity-80">
                    File: {file?.name} ({file?.type || 'image'}) · Dimensions: {bmp?.width}×{bmp?.height}
                  </p>
                  <p className="opacity-80">
                    Applying will re-save the image with EXIF, GPS location coordinates, camera profiles, and device stamps stripped out for privacy.
                  </p>
                </div>
              )}

              {edState.k === 'redact' && (
                <div className="flex items-center justify-between">
                  <span>Drag over sensitive areas to create blackout rectangles.</span>
                  <button
                    onClick={() => {
                      const rects = edState.rects.slice(0, -1);
                      setEdState({ ...edState, rects });
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/10 hover:bg-black/20 font-bold"
                  >
                    <Undo className="w-3.5 h-3.5" />
                    <span>Undo</span>
                  </button>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-black/10">
              <button
                onClick={() => openEditor(edState.k)}
                className="px-4 py-2 rounded-full bg-black/10 hover:bg-black/20 font-bold text-xs"
              >
                Reset
              </button>
              <button
                onClick={applyEditorChanges}
                disabled={busy}
                className="px-5 py-2 rounded-full bg-[#e8532b] text-white font-bold text-xs shadow-md shadow-orange-500/30 hover:brightness-110 flex items-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Apply Edits</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-black/85 text-white text-xs font-bold shadow-2xl backdrop-blur-md animate-pop z-50 pointer-events-none border border-white/20">
          {toastMsg}
        </div>
      )}
    </div>
  );
};

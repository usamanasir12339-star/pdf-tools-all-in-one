import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Download, 
  Trash2, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Sliders, 
  FileCheck, 
  FolderArchive, 
  X,
  Play
} from 'lucide-react';
import { findFormatByExtension, getCompatibleTargets, ALL_FORMATS } from '../data/formatCatalogue';

export interface BatchItem {
  id: string;
  file: File;
  sourceFormat: string;
  targetFormat: string;
  status: 'queued' | 'converting' | 'completed' | 'error';
  progress: number;
  outputBlob?: Blob;
  outputName?: string;
  error?: string;
  durationMs?: number;
  engineUsed?: string;
}

interface BatchConverterProps {
  onQueueCountChange?: (count: number) => void;
  initialTargetFormat?: string;
}

export const BatchConverter: React.FC<BatchConverterProps> = ({
  onQueueCountChange,
  initialTargetFormat
}) => {
  const [items, setItems] = useState<BatchItem[]>([]);
  const [globalTarget, setGlobalTarget] = useState<string>(initialTargetFormat || 'pdf');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [isConvertingAll, setIsConvertingAll] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Conversion options
  const [options, setOptions] = useState({
    quality: 90,
    resizePreset: 'original',
    rotateDegrees: 0,
    stripMetadata: false,
    videoScale: 'original',
    fps: 0,
    audioBitrate: '192k',
    audioExtractOnly: false
  });

  const formatBytes = (b: number) => {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(1) + ' MB';
  };

  const handleAddFiles = (fileList: FileList | File[]) => {
    const newItems: BatchItem[] = [];
    Array.from(fileList).forEach(file => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      const compatible = getCompatibleTargets(ext);
      const defaultTarget = compatible.length > 0 ? compatible[0].exts[0].replace('.', '') : globalTarget;

      newItems.push({
        id: `batch_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        file,
        sourceFormat: ext.toUpperCase() || 'UNKNOWN',
        targetFormat: defaultTarget,
        status: 'queued',
        progress: 0
      });
    });

    const updated = [...items, ...newItems];
    setItems(updated);
    onQueueCountChange?.(updated.filter(i => i.status !== 'completed').length);
  };

  const removeItem = (id: string) => {
    const updated = items.filter(i => i.id !== id);
    setItems(updated);
    onQueueCountChange?.(updated.filter(i => i.status !== 'completed').length);
  };

  const clearCompleted = () => {
    const updated = items.filter(i => i.status !== 'completed');
    setItems(updated);
    onQueueCountChange?.(updated.length);
  };

  const clearAll = () => {
    setItems([]);
    onQueueCountChange?.(0);
  };

  // Convert a single item
  const convertSingle = async (item: BatchItem) => {
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, status: 'converting', progress: 30 } : i));
    const t0 = Date.now();

    try {
      const formData = new FormData();
      formData.append('file', item.file);
      formData.append('targetFormat', item.targetFormat.toLowerCase());

      // Prepare options
      const optPayload: any = { quality: options.quality, stripMetadata: options.stripMetadata };
      if (options.rotateDegrees) optPayload.rotateDegrees = options.rotateDegrees;
      if (options.resizePreset === '1920') optPayload.resizeWidth = 1920;
      if (options.resizePreset === '1280') optPayload.resizeWidth = 1280;
      if (options.resizePreset === '800') optPayload.resizeWidth = 800;
      if (options.videoScale !== 'original') optPayload.videoScale = options.videoScale;
      if (options.fps > 0) optPayload.fps = options.fps;
      if (options.audioBitrate) optPayload.audioBitrate = options.audioBitrate;
      if (options.audioExtractOnly) optPayload.audioExtractOnly = true;

      formData.append('options', JSON.stringify(optPayload));

      const resp = await fetch('/api/convert', { method: 'POST', body: formData });
      if (!resp.ok) {
        const errJson = await resp.json().catch(() => ({ error: 'Conversion failed' }));
        throw new Error(errJson.error || 'Server error during conversion');
      }

      const engine = resp.headers.get('x-engine-used') || 'Built-in Engine';
      const blob = await resp.blob();
      const base = item.file.name.replace(/\.[^.]+$/, '');
      const outName = `${base}.${item.targetFormat.toLowerCase()}`;

      setItems(prev => prev.map(i => i.id === item.id ? {
        ...i,
        status: 'completed',
        progress: 100,
        outputBlob: blob,
        outputName: outName,
        durationMs: Date.now() - t0,
        engineUsed: engine
      } : i));
    } catch (err: any) {
      setItems(prev => prev.map(i => i.id === item.id ? {
        ...i,
        status: 'error',
        progress: 0,
        error: err.message
      } : i));
    }
  };

  // Convert all queued items
  const convertAll = async () => {
    setIsConvertingAll(true);
    for (const item of items) {
      if (item.status === 'queued' || item.status === 'error') {
        await convertSingle(item);
      }
    }
    setIsConvertingAll(false);
  };

  // Download all completed files as ZIP bundle
  const downloadAllAsZip = async () => {
    const completed = items.filter(i => i.status === 'completed' && i.outputBlob && i.outputName);
    if (completed.length === 0) return;

    // Use backend batch endpoint or direct zip
    const formData = new FormData();
    completed.forEach(c => {
      formData.append('files', new File([c.outputBlob!], c.outputName!));
    });

    const resp = await fetch('/api/archive/create', { method: 'POST', body: formData });
    if (resp.ok) {
      const zipBlob = await resp.blob();
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Shiftwheel_Batch_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const completedCount = items.filter(i => i.status === 'completed').length;
  const queuedCount = items.filter(i => i.status === 'queued').length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-6">
      {/* Title & Stats */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-[#2a150c] dark:text-[#fff1e3]">
            Multi-File Batch Converter
          </h2>
          <p className="text-sm opacity-80 mt-1 font-medium">
            Queue dozens of files across any of the 17 categories. Convert simultaneously with genuine processing engines.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold text-xs transition-all border ${
              showSettings 
                ? 'bg-[#e8532b] text-white border-transparent shadow' 
                : 'liquid-glass border-white/30 hover:bg-white/20'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Advanced Settings</span>
          </button>
        </div>
      </div>

      {/* Advanced Settings Accordion */}
      {showSettings && (
        <div className="liquid-card p-5 rounded-3xl border border-white/40 shadow-xl flex flex-col gap-4 animate-pop">
          <div className="flex items-center justify-between pb-2 border-b border-black/10 dark:border-white/10">
            <h3 className="font-extrabold text-sm flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#e8532b]" />
              <span>Conversion Tuning & Processing Options</span>
            </h3>
            <button onClick={() => setShowSettings(false)} className="opacity-60 hover:opacity-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* Image Options */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xs uppercase tracking-wider text-[#e8532b]">Image Tuning</span>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Quality ({options.quality}%):</span>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={options.quality}
                  onChange={e => setOptions({ ...options, quality: parseInt(e.target.value) })}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Resize Preset:</span>
                <select
                  value={options.resizePreset}
                  onChange={e => setOptions({ ...options, resizePreset: e.target.value })}
                  className="p-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/20"
                >
                  <option value="original">Original Dimensions</option>
                  <option value="1920">Full HD (Max 1920px)</option>
                  <option value="1280">HD (Max 1280px)</option>
                  <option value="800">Web Thumb (Max 800px)</option>
                </select>
              </label>
              <label className="flex items-center gap-2 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={options.stripMetadata}
                  onChange={e => setOptions({ ...options, stripMetadata: e.target.checked })}
                  className="rounded"
                />
                <span className="font-semibold">Strip EXIF / Privacy Metadata</span>
              </label>
            </div>

            {/* Video Options */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xs uppercase tracking-wider text-[#e8532b]">Video Options</span>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Resolution Scale:</span>
                <select
                  value={options.videoScale}
                  onChange={e => setOptions({ ...options, videoScale: e.target.value })}
                  className="p-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/20"
                >
                  <option value="original">Match Original</option>
                  <option value="1920:-1">1080p (1920w)</option>
                  <option value="1280:-1">720p (1280w)</option>
                  <option value="854:-1">480p (854w)</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Framerate (FPS):</span>
                <select
                  value={options.fps}
                  onChange={e => setOptions({ ...options, fps: parseInt(e.target.value) })}
                  className="p-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/20"
                >
                  <option value="0">Keep Native FPS</option>
                  <option value="24">24 FPS (Cinematic)</option>
                  <option value="30">30 FPS (Standard)</option>
                  <option value="60">60 FPS (Smooth)</option>
                </select>
              </label>
            </div>

            {/* Audio Options */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xs uppercase tracking-wider text-[#e8532b]">Audio & Extraction</span>
              <label className="flex flex-col gap-1">
                <span className="font-semibold">Audio Bitrate:</span>
                <select
                  value={options.audioBitrate}
                  onChange={e => setOptions({ ...options, audioBitrate: e.target.value })}
                  className="p-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/20"
                >
                  <option value="128k">128 kbps (Good)</option>
                  <option value="192k">192 kbps (High Quality)</option>
                  <option value="320k">320 kbps (Studio Audio)</option>
                </select>
              </label>
              <label className="flex items-center gap-2 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={options.audioExtractOnly}
                  onChange={e => setOptions({ ...options, audioExtractOnly: e.target.checked })}
                  className="rounded"
                />
                <span className="font-semibold">Extract Audio Only (Strip Video)</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Upload Drop Zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          e.preventDefault();
          if (e.dataTransfer.files) handleAddFiles(e.dataTransfer.files);
        }}
        className="liquid-glass p-8 rounded-3xl border-2 border-dashed border-white/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:scale-[1.008] transition-transform text-center shadow-xl group"
      >
        <div className="w-14 h-14 rounded-2xl bg-[#e8532b]/20 text-[#e8532b] flex items-center justify-center group-hover:scale-110 transition-transform">
          <Upload className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-base font-extrabold text-[#2a150c] dark:text-white">
            Drag and drop multiple files here, or click to browse
          </h3>
          <p className="text-xs opacity-75 mt-1 font-medium">
            Supports all 244 formats across images, videos, audio, PDF, documents, spreadsheets, data, CAD, 3D, and archives.
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={e => e.target.files && handleAddFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {/* Queue Toolbar */}
      {items.length > 0 && (
        <div className="liquid-glass p-4 rounded-3xl flex flex-wrap items-center justify-between gap-4 border border-white/40 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="font-black text-sm">
              {items.length} Files in Queue
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-500/20 text-[#e8532b] dark:text-orange-300">
              {completedCount} Completed
            </span>
            {queuedCount > 0 && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300">
                {queuedCount} Ready
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={convertAll}
              disabled={isConvertingAll || queuedCount === 0}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#e8532b] text-white font-extrabold text-xs shadow-md shadow-orange-500/30 hover:brightness-110 disabled:opacity-50 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isConvertingAll ? 'Converting Queue...' : 'Convert All Queued'}</span>
            </button>

            {completedCount > 0 && (
              <button
                onClick={downloadAllAsZip}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-emerald-600/30 hover:brightness-110 cursor-pointer"
              >
                <FolderArchive className="w-4 h-4" />
                <span>Download All as ZIP</span>
              </button>
            )}

            <button
              onClick={clearCompleted}
              className="px-3 py-2 rounded-full bg-black/10 hover:bg-black/20 text-xs font-bold"
            >
              Clear Done
            </button>
            <button
              onClick={clearAll}
              className="px-3 py-2 rounded-full bg-red-500/15 text-red-700 dark:text-red-300 hover:bg-red-500/25 text-xs font-bold"
            >
              Clear All
            </button>
          </div>
        </div>
      )}

      {/* Queue List */}
      <div className="flex flex-col gap-3">
        {items.map(item => {
          const compatibleTargets = getCompatibleTargets(item.sourceFormat);
          return (
            <div
              key={item.id}
              className="liquid-card p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/30 shadow-md transition-all hover:scale-[1.004]"
            >
              {/* File Info */}
              <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center font-black text-xs text-[#e8532b] flex-none">
                  {item.sourceFormat}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate max-w-xs sm:max-w-md">
                    {item.file.name}
                  </p>
                  <p className="text-xs opacity-75 mt-0.5">
                    {formatBytes(item.file.size)}
                    {item.engineUsed && ` · ${item.engineUsed}`}
                    {item.durationMs && ` · ${(item.durationMs / 1000).toFixed(1)}s`}
                  </p>
                </div>
              </div>

              {/* Target Format Selector & Status */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                {/* Format Dropdown */}
                {item.status !== 'completed' ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs opacity-75 font-semibold">To:</span>
                    <select
                      value={item.targetFormat.toLowerCase()}
                      onChange={e => {
                        const tgt = e.target.value;
                        setItems(prev => prev.map(i => i.id === item.id ? { ...i, targetFormat: tgt } : i));
                      }}
                      className="px-3 py-1.5 rounded-xl bg-white/70 dark:bg-black/40 border border-black/15 text-xs font-bold uppercase cursor-pointer"
                    >
                      {compatibleTargets.length > 0 ? (
                        compatibleTargets.map((t, tIdx) => (
                          <option key={`${t.name}-${tIdx}`} value={t.exts[0]?.replace('.', '') || t.name.toLowerCase()}>
                            {t.name}
                          </option>
                        ))
                      ) : (
                        ['pdf', 'png', 'jpg', 'webp', 'mp4', 'mp3', 'zip'].map(def => (
                          <option key={def} value={def}>{def.toUpperCase()}</option>
                        ))
                      )}
                    </select>
                  </div>
                ) : (
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 font-extrabold text-xs">
                    {item.targetFormat.toUpperCase()}
                  </span>
                )}

                {/* Status Indicator / Actions */}
                <div className="flex items-center gap-2">
                  {item.status === 'queued' && (
                    <button
                      onClick={() => convertSingle(item)}
                      className="px-3.5 py-1.5 rounded-full bg-[#e8532b] text-white font-bold text-xs shadow hover:brightness-110 cursor-pointer"
                    >
                      Convert
                    </button>
                  )}

                  {item.status === 'converting' && (
                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-orange-600 animate-pulse">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </div>
                  )}

                  {item.status === 'completed' && item.outputBlob && item.outputName && (
                    <button
                      onClick={() => {
                        const url = URL.createObjectURL(item.outputBlob!);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = item.outputName!;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow hover:brightness-110 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  )}

                  {item.status === 'error' && (
                    <div className="flex items-center gap-1.5 text-red-600 text-xs font-bold" title={item.error}>
                      <AlertCircle className="w-4 h-4" />
                      <button
                        onClick={() => convertSingle(item)}
                        className="underline hover:opacity-80"
                      >
                        Retry
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 rounded-full bg-black/10 hover:bg-black/20 text-neutral-600 dark:text-neutral-300"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

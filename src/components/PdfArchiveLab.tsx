import React, { useState, useRef } from 'react';
import { 
  FileText, 
  FolderArchive, 
  Layers, 
  Scissors, 
  RotateCw, 
  Download, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  Archive,
  Search
} from 'lucide-react';

export const PdfArchiveLab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'merge' | 'split' | 'extract' | 'rotate' | 'archive_create' | 'archive_inspect'>('merge');
  const [busy, setBusy] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // PDF Merge state
  const [mergeFiles, setMergeFiles] = useState<File[]>([]);
  // PDF Split / Extract / Rotate state
  const [singlePdf, setSinglePdf] = useState<File | null>(null);
  const [extractPages, setExtractPages] = useState<string>('1');
  const [rotateDeg, setRotateDeg] = useState<number>(90);

  // Archive files state
  const [archiveFiles, setArchiveFiles] = useState<File[]>([]);
  const [inspectFile, setInspectFile] = useState<File | null>(null);
  const [archiveEntries, setArchiveEntries] = useState<{ filename: string; size: number }[]>([]);

  const formatBytes = (b: number) => {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(1) + ' MB';
  };

  const handleDownloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 1. PDF Merge
  const executeMerge = async () => {
    if (mergeFiles.length < 2) {
      setStatusMsg({ type: 'error', text: 'Please select at least 2 PDF files to merge.' });
      return;
    }
    setBusy(true);
    setStatusMsg(null);
    try {
      const formData = new FormData();
      mergeFiles.forEach(f => formData.append('files', f));
      const resp = await fetch('/api/pdf/merge', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Merge failed');
      const blob = await resp.blob();
      handleDownloadBlob(blob, 'Shiftwheel_Merged.pdf');
      setStatusMsg({ type: 'success', text: `Successfully merged ${mergeFiles.length} PDF documents!` });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  // 2. PDF Split
  const executeSplit = async () => {
    if (!singlePdf) return;
    setBusy(true);
    setStatusMsg(null);
    try {
      const formData = new FormData();
      formData.append('file', singlePdf);
      const resp = await fetch('/api/pdf/split', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Split failed');
      const blob = await resp.blob();
      handleDownloadBlob(blob, `${singlePdf.name.replace(/\.pdf$/i, '')}_split_pages.zip`);
      setStatusMsg({ type: 'success', text: 'PDF successfully split into individual pages bundle!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  // 3. PDF Page Extract
  const executeExtract = async () => {
    if (!singlePdf) return;
    setBusy(true);
    setStatusMsg(null);
    try {
      const formData = new FormData();
      formData.append('file', singlePdf);
      formData.append('pages', extractPages);
      const resp = await fetch('/api/pdf/extract', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Page extraction failed');
      const blob = await resp.blob();
      handleDownloadBlob(blob, `${singlePdf.name.replace(/\.pdf$/i, '')}_extracted.pdf`);
      setStatusMsg({ type: 'success', text: `Extracted pages "${extractPages}" successfully!` });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  // 4. PDF Rotate
  const executeRotate = async () => {
    if (!singlePdf) return;
    setBusy(true);
    setStatusMsg(null);
    try {
      const formData = new FormData();
      formData.append('file', singlePdf);
      formData.append('angle', String(rotateDeg));
      const resp = await fetch('/api/pdf/rotate', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Rotation failed');
      const blob = await resp.blob();
      handleDownloadBlob(blob, `${singlePdf.name.replace(/\.pdf$/i, '')}_rotated_${rotateDeg}deg.pdf`);
      setStatusMsg({ type: 'success', text: `Rotated pages by ${rotateDeg}°!` });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  // 5. Create Archive
  const executeCreateArchive = async () => {
    if (archiveFiles.length === 0) return;
    setBusy(true);
    setStatusMsg(null);
    try {
      const formData = new FormData();
      archiveFiles.forEach(f => formData.append('files', f));
      const resp = await fetch('/api/archive/create', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Archive creation failed');
      const blob = await resp.blob();
      handleDownloadBlob(blob, `Shiftwheel_Archive_${Date.now()}.zip`);
      setStatusMsg({ type: 'success', text: `Created ZIP archive with ${archiveFiles.length} files!` });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  // 6. Inspect Archive
  const handleInspectArchive = async (f: File) => {
    setInspectFile(f);
    setBusy(true);
    setStatusMsg(null);
    try {
      const formData = new FormData();
      formData.append('file', f);
      const resp = await fetch('/api/archive/inspect', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Inspection failed');
      const data = await resp.json();
      setArchiveEntries(data.entries || []);
      setStatusMsg({ type: 'success', text: `Discovered ${data.entries?.length || 0} entries inside archive.` });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const handleExtractAllFromArchive = async () => {
    if (!inspectFile) return;
    setBusy(true);
    try {
      const formData = new FormData();
      formData.append('file', inspectFile);
      const resp = await fetch('/api/archive/extract', { method: 'POST', body: formData });
      if (!resp.ok) throw new Error((await resp.json()).error || 'Extraction failed');
      const blob = await resp.blob();
      handleDownloadBlob(blob, `extracted_${inspectFile.name}.zip`);
      setStatusMsg({ type: 'success', text: 'All files unpacked and saved safely!' });
    } catch (err: any) {
      setStatusMsg({ type: 'error', text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-black tracking-tight text-[#2a150c] dark:text-[#fff1e3]">
          PDF & Archive Lab
        </h2>
        <p className="text-sm opacity-80 mt-1 font-medium">
          Professional PDF page manipulation, document assembly, and archive packing / unpacking utilities.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="liquid-glass p-1.5 rounded-2xl flex flex-wrap gap-1.5 shadow-md">
        {[
          { id: 'merge', label: 'PDF Merge', icon: Layers },
          { id: 'split', label: 'PDF Split', icon: Scissors },
          { id: 'extract', label: 'Page Extract', icon: FileText },
          { id: 'rotate', label: 'Rotate Pages', icon: RotateCw },
          { id: 'archive_create', label: 'Create ZIP', icon: FolderArchive },
          { id: 'archive_inspect', label: 'Unpack Archive', icon: Archive }
        ].map(sub => {
          const Icon = sub.icon;
          const isActive = activeSubTab === sub.id;
          return (
            <button
              key={sub.id}
              onClick={() => {
                setActiveSubTab(sub.id as any);
                setStatusMsg(null);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-white dark:bg-white/90 text-[#2a150c] shadow-md scale-[1.02]'
                  : 'opacity-70 hover:opacity-100 hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{sub.label}</span>
            </button>
          );
        })}
      </div>

      {/* Status Message */}
      {statusMsg && (
        <div className={`p-4 rounded-2xl flex items-center gap-3 text-xs font-bold ${
          statusMsg.type === 'success'
            ? 'bg-emerald-500/20 text-emerald-900 dark:text-emerald-200 border border-emerald-500/30'
            : 'bg-red-500/20 text-red-900 dark:text-red-200 border border-red-500/30'
        }`}>
          {statusMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
          <span>{statusMsg.text}</span>
        </div>
      )}

      {/* Tool Content Area */}
      <div className="liquid-card p-6 rounded-3xl border border-white/40 shadow-xl flex flex-col gap-5">
        {/* MERGE VIEW */}
        {activeSubTab === 'merge' && (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-base">Merge Multiple PDFs</h3>
              <p className="text-xs opacity-75 mt-0.5">Combine 2 or more PDF documents into a single document in custom sequence.</p>
            </div>

            <label className="border-2 border-dashed border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <Upload className="w-6 h-6 text-[#e8532b]" />
              <span className="font-bold text-xs">Add PDF files to merge</span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                multiple
                onChange={e => e.target.files && setMergeFiles([...mergeFiles, ...Array.from(e.target.files)])}
                className="hidden"
              />
            </label>

            {mergeFiles.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs">Selected Documents ({mergeFiles.length}):</span>
                {mergeFiles.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-black/5 text-xs font-semibold">
                    <span className="truncate max-w-sm">{i + 1}. {f.name}</span>
                    <button
                      onClick={() => setMergeFiles(mergeFiles.filter((_, idx) => idx !== i))}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={executeMerge}
              disabled={busy || mergeFiles.length < 2}
              className="px-6 py-3 rounded-full bg-[#e8532b] text-white font-black text-xs shadow-md shadow-orange-500/30 hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-2 self-start cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>{busy ? 'Merging Documents...' : 'Merge & Download PDF'}</span>
            </button>
          </div>
        )}

        {/* SPLIT VIEW */}
        {activeSubTab === 'split' && (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-base">Split PDF into Pages</h3>
              <p className="text-xs opacity-75 mt-0.5">Upload a multi-page PDF and unpack every page as its own standalone PDF file bundled in a ZIP.</p>
            </div>

            <label className="border-2 border-dashed border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <Upload className="w-6 h-6 text-[#e8532b]" />
              <span className="font-bold text-xs">
                {singlePdf ? `Selected: ${singlePdf.name} (${formatBytes(singlePdf.size)})` : 'Select PDF Document to Split'}
              </span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={e => e.target.files?.[0] && setSinglePdf(e.target.files[0])}
                className="hidden"
              />
            </label>

            <button
              onClick={executeSplit}
              disabled={busy || !singlePdf}
              className="px-6 py-3 rounded-full bg-[#e8532b] text-white font-black text-xs shadow-md shadow-orange-500/30 hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-2 self-start cursor-pointer"
            >
              <Scissors className="w-4 h-4" />
              <span>{busy ? 'Splitting PDF...' : 'Split into ZIP'}</span>
            </button>
          </div>
        )}

        {/* EXTRACT VIEW */}
        {activeSubTab === 'extract' && (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-base">Extract Specific Pages</h3>
              <p className="text-xs opacity-75 mt-0.5">Extract individual pages or ranges from a PDF document (e.g. "1, 3-5, 8").</p>
            </div>

            <label className="border-2 border-dashed border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <Upload className="w-6 h-6 text-[#e8532b]" />
              <span className="font-bold text-xs">
                {singlePdf ? `Selected: ${singlePdf.name}` : 'Select PDF Document'}
              </span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={e => e.target.files?.[0] && setSinglePdf(e.target.files[0])}
                className="hidden"
              />
            </label>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-xs">Page Numbers Expression:</label>
              <input
                type="text"
                value={extractPages}
                onChange={e => setExtractPages(e.target.value)}
                placeholder="e.g. 1, 3-5, 7"
                className="p-2.5 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/20 text-xs font-mono max-w-sm"
              />
            </div>

            <button
              onClick={executeExtract}
              disabled={busy || !singlePdf || !extractPages.trim()}
              className="px-6 py-3 rounded-full bg-[#e8532b] text-white font-black text-xs shadow-md shadow-orange-500/30 hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-2 self-start cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{busy ? 'Extracting Pages...' : 'Extract & Download PDF'}</span>
            </button>
          </div>
        )}

        {/* ROTATE VIEW */}
        {activeSubTab === 'rotate' && (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-base">Rotate PDF Pages</h3>
              <p className="text-xs opacity-75 mt-0.5">Reorient upside-down or sideways pages across the PDF.</p>
            </div>

            <label className="border-2 border-dashed border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <Upload className="w-6 h-6 text-[#e8532b]" />
              <span className="font-bold text-xs">
                {singlePdf ? `Selected: ${singlePdf.name}` : 'Select PDF Document to Rotate'}
              </span>
              <input
                type="file"
                accept=".pdf,application/pdf"
                onChange={e => e.target.files?.[0] && setSinglePdf(e.target.files[0])}
                className="hidden"
              />
            </label>

            <div className="flex items-center gap-3">
              <span className="font-bold text-xs">Rotation Angle:</span>
              {[90, 180, 270].map(deg => (
                <button
                  key={deg}
                  onClick={() => setRotateDeg(deg)}
                  className={`px-3.5 py-1.5 rounded-full font-bold text-xs ${
                    rotateDeg === deg ? 'bg-[#e8532b] text-white' : 'bg-black/10'
                  }`}
                >
                  {deg}°
                </button>
              ))}
            </div>

            <button
              onClick={executeRotate}
              disabled={busy || !singlePdf}
              className="px-6 py-3 rounded-full bg-[#e8532b] text-white font-black text-xs shadow-md shadow-orange-500/30 hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-2 self-start cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
              <span>{busy ? 'Rotating PDF...' : 'Rotate & Download'}</span>
            </button>
          </div>
        )}

        {/* CREATE ARCHIVE */}
        {activeSubTab === 'archive_create' && (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-base">Create ZIP Archive</h3>
              <p className="text-xs opacity-75 mt-0.5">Bundle any set of files into a compressed ZIP package with full file integrity.</p>
            </div>

            <label className="border-2 border-dashed border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <Upload className="w-6 h-6 text-[#e8532b]" />
              <span className="font-bold text-xs">Choose files to pack into ZIP</span>
              <input
                type="file"
                multiple
                onChange={e => e.target.files && setArchiveFiles([...archiveFiles, ...Array.from(e.target.files)])}
                className="hidden"
              />
            </label>

            {archiveFiles.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs">Files to compress ({archiveFiles.length}):</span>
                {archiveFiles.map((f, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-black/5 text-xs font-semibold">
                    <span className="truncate max-w-sm">{f.name} ({formatBytes(f.size)})</span>
                    <button
                      onClick={() => setArchiveFiles(archiveFiles.filter((_, idx) => idx !== i))}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={executeCreateArchive}
              disabled={busy || archiveFiles.length === 0}
              className="px-6 py-3 rounded-full bg-[#e8532b] text-white font-black text-xs shadow-md shadow-orange-500/30 hover:brightness-110 disabled:opacity-50 flex items-center justify-center gap-2 self-start cursor-pointer"
            >
              <FolderArchive className="w-4 h-4" />
              <span>{busy ? 'Creating ZIP...' : 'Bundle & Download ZIP'}</span>
            </button>
          </div>
        )}

        {/* INSPECT ARCHIVE */}
        {activeSubTab === 'archive_inspect' && (
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-base">Inspect & Unpack Archive</h3>
              <p className="text-xs opacity-75 mt-0.5">Explore file tree and safely extract contents of ZIP, CBZ, EPUB, or JAR files.</p>
            </div>

            <label className="border-2 border-dashed border-white/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors text-center">
              <Upload className="w-6 h-6 text-[#e8532b]" />
              <span className="font-bold text-xs">
                {inspectFile ? `Loaded: ${inspectFile.name}` : 'Select Archive File (ZIP, CBZ, EPUB, JAR)'}
              </span>
              <input
                type="file"
                accept=".zip,.cbz,.epub,.jar,.wbpz"
                onChange={e => e.target.files?.[0] && handleInspectArchive(e.target.files[0])}
                className="hidden"
              />
            </label>

            {archiveEntries.length > 0 && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs">Contained Files ({archiveEntries.length}):</span>
                  <button
                    onClick={handleExtractAllFromArchive}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Extract All as ZIP</span>
                  </button>
                </div>
                <div className="max-h-60 overflow-y-auto rounded-xl bg-black/5 p-2 flex flex-col gap-1 text-xs">
                  {archiveEntries.map((entry, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1.5 border-b border-black/5 last:border-0 font-mono">
                      <span className="truncate max-w-md">{entry.filename}</span>
                      <span className="opacity-70">{formatBytes(entry.size)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

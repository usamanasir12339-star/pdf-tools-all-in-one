import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { convertFile, ConversionOptions } from './src/server/conversionEngine';
import { mergePdfs, splitPdf, extractPdfPages, rotatePdf } from './src/server/pdfEngine';
import { createArchive, extractArchiveFiles, inspectArchive } from './src/server/archiveEngine';
import { runAllTests } from './src/server/testRunner';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Multer memory storage with 100MB max limit
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 100 * 1024 * 1024 }
});

// Health & Engine Status API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/api/engines', (req, res) => {
  res.json({
    engines: [
      { id: 'ffmpeg', name: 'FFmpeg 4.4.2', status: 'ready', description: 'Video, audio, subtitle transcoding and animated image processing' },
      { id: 'imagemagick', name: 'ImageMagick 6.9', status: 'ready', description: 'Raster graphics, Camera RAW, PSD, TIFF, resize, filter, and color operations' },
      { id: 'ghostscript', name: 'Ghostscript 9.55', status: 'ready', description: 'PDF distillation, PostScript PS/EPS rendering and optimization' },
      { id: 'sheetjs', name: 'SheetJS 0.18.5', status: 'ready', description: 'XLSX, XLS, CSV, TSV, ODS, HTML tables, and spreadsheet data' },
      { id: 'pdflib', name: 'PDF-Lib 1.17', status: 'ready', description: 'Vector PDF generation, page merging, page extraction, splitting, and rotation' },
      { id: 'docx', name: 'Docx 9.x', status: 'ready', description: 'Native Microsoft Word (.docx) generation and structured formatting' },
      { id: 'admzip', name: 'AdmZip & Archiver', status: 'ready', description: 'Archive pack/unpack, CBZ comics, EPUB extraction, and batch ZIP bundling' },
      { id: 'cad3d', name: 'CAD & 3D Mesh Engine', status: 'ready', description: 'DXF vectorizer to SVG/STL and OBJ/STL/PLY mesh geometry conversion' }
    ]
  });
});

// Single File Conversion API
app.post('/api/convert', upload.single('file'), async (req, res) => {
  const t0 = Date.now();
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const targetFormat = req.body.targetFormat;
    if (!targetFormat) {
      return res.status(400).json({ error: 'targetFormat parameter is required' });
    }

    let options: ConversionOptions = {};
    if (req.body.options) {
      try {
        options = typeof req.body.options === 'string' ? JSON.parse(req.body.options) : req.body.options;
      } catch (e) {
        console.warn('Failed to parse options JSON:', e);
      }
    }

    const result = await convertFile(req.file.buffer, req.file.originalname, targetFormat, options);
    const duration = Date.now() - t0;

    res.setHeader('Content-Type', result.mimeType);
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(result.outputFilename)}"`);
    res.setHeader('x-engine-used', result.engineUsed);
    res.setHeader('x-duration-ms', String(duration));
    res.send(result.data);
  } catch (err: any) {
    console.error('Conversion error:', err);
    res.status(500).json({
      error: err.message || 'File conversion failed',
      details: err.stack
    });
  }
});

// Batch Conversion API (returns a single ZIP archive containing all converted files)
app.post('/api/batch-convert', upload.array('files', 50), async (req, res) => {
  const t0 = Date.now();
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded for batch conversion' });
    }

    const targetFormat = req.body.targetFormat;
    let formatMap: Record<string, string> = {};
    if (req.body.formatMap) {
      try {
        formatMap = typeof req.body.formatMap === 'string' ? JSON.parse(req.body.formatMap) : req.body.formatMap;
      } catch (e) {}
    }

    let options: ConversionOptions = {};
    if (req.body.options) {
      try {
        options = typeof req.body.options === 'string' ? JSON.parse(req.body.options) : req.body.options;
      } catch (e) {}
    }

    const convertedFiles: { filename: string; data: Buffer }[] = [];
    const errors: { filename: string; error: string }[] = [];

    for (const file of files) {
      const tgt = formatMap[file.originalname] || targetFormat;
      if (!tgt) {
        errors.push({ filename: file.originalname, error: 'No target format specified' });
        continue;
      }
      try {
        const out = await convertFile(file.buffer, file.originalname, tgt, options);
        convertedFiles.push({ filename: out.outputFilename, data: out.data });
      } catch (err: any) {
        errors.push({ filename: file.originalname, error: err.message });
      }
    }

    if (convertedFiles.length === 0) {
      return res.status(400).json({
        error: 'All batch conversions failed',
        errors
      });
    }

    // Bundle into ZIP
    const zipBuffer = await createArchive(convertedFiles, 'zip');
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="Shiftwheel_Batch_${Date.now()}.zip"`);
    res.setHeader('x-duration-ms', String(Date.now() - t0));
    res.setHeader('x-converted-count', String(convertedFiles.length));
    res.send(zipBuffer);
  } catch (err: any) {
    console.error('Batch conversion error:', err);
    res.status(500).json({ error: err.message || 'Batch conversion failed' });
  }
});

// PDF Operations API
app.post('/api/pdf/merge', upload.array('files', 30), async (req, res) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length < 2) {
      return res.status(400).json({ error: 'Please select at least 2 PDF files to merge' });
    }
    const buffers = files.map(f => f.buffer);
    const merged = await mergePdfs(buffers);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Shiftwheel_Merged.pdf"`);
    res.send(merged);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/pdf/split', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No PDF file uploaded' });
    const base = path.basename(req.file.originalname, path.extname(req.file.originalname));
    const zipBuf = await splitPdf(req.file.buffer, base);

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${base}_split.zip"`);
    res.send(zipBuf);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/pdf/extract', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No PDF file uploaded' });
    const pages = req.body.pages || '1';
    const extracted = await extractPdfPages(req.file.buffer, pages);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="extracted_pages.pdf"`);
    res.send(extracted);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/pdf/rotate', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No PDF file uploaded' });
    const angle = parseInt(req.body.angle || '90', 10);
    const rotated = await rotatePdf(req.file.buffer, angle);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="rotated.pdf"`);
    res.send(rotated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Archive API
app.post('/api/archive/inspect', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No archive file uploaded' });
    const entries = await inspectArchive(req.file.buffer, req.file.originalname);
    res.json({ filename: req.file.originalname, size: req.file.buffer.length, entries });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/archive/extract', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No archive file uploaded' });
    const files = await extractArchiveFiles(req.file.buffer, req.file.originalname);
    // Bundle into a clean zip
    const outZip = await createArchive(files, 'zip');
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="extracted_${req.file.originalname}.zip"`);
    res.send(outZip);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Automated Test Suite Runner API
app.get('/api/test-report', async (req, res) => {
  try {
    const report = await runAllTests();
    res.json(report);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Download Full Project Repository as ZIP (for GitHub publication)
app.get('/api/download-project', async (req, res) => {
  try {
    const AdmZipModule = (await import('adm-zip')).default;
    const zip = new AdmZipModule();

    const ignoredDirs = new Set(['node_modules', 'dist', '.git', '.aistudio', 'coverage', '.cache']);
    const ignoredFiles = new Set(['.DS_Store', 'Thumbs.db']);

    function addDirToZip(currentDir: string, zipPath: string) {
      const items = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const item of items) {
        if (item.isDirectory()) {
          if (!ignoredDirs.has(item.name)) {
            addDirToZip(path.join(currentDir, item.name), path.join(zipPath, item.name));
          }
        } else {
          if (!ignoredFiles.has(item.name)) {
            const filePath = path.join(currentDir, item.name);
            const content = fs.readFileSync(filePath);
            zip.addFile(path.join(zipPath, item.name), content);
          }
        }
      }
    }

    addDirToZip(__dirname, '');

    const buffer = zip.toBuffer();
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="shiftwheel-main-github-ready.zip"');
    res.send(buffer);
  } catch (err: any) {
    console.error('Download project failed:', err);
    res.status(500).json({ error: err.message });
  }
});

// Download Single Standalone index.html file for GitHub
app.get('/api/download-single-html', (req, res) => {
  const filePath = path.join(__dirname, 'shiftwheel.html');
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Disposition', 'attachment; filename="index.html"');
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Single index file not found' });
  }
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();

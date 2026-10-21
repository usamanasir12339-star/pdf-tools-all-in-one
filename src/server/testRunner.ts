import { convertFile } from './conversionEngine';
import { mergePdfs, splitPdf, extractPdfPages, rotatePdf } from './pdfEngine';
import { createArchive, extractArchiveFiles, inspectArchive } from './archiveEngine';
import { PDFDocument } from 'pdf-lib';

export interface TestResultItem {
  id: string;
  category: string;
  testName: string;
  sourceFormat: string;
  targetFormat: string;
  status: 'passed' | 'failed' | 'skipped';
  durationMs: number;
  outputSize?: number;
  engineUsed?: string;
  error?: string;
}

export interface FullTestReport {
  timestamp: string;
  totalTests: number;
  passed: number;
  failed: number;
  durationMs: number;
  results: TestResultItem[];
  catalogueSummary: {
    officialFormatsFound: number;
    formatsImplemented: number;
    realRoutesImplemented: number;
    categoriesCount: number;
  };
}

export async function runAllTests(): Promise<FullTestReport> {
  const startTime = Date.now();
  const results: TestResultItem[] = [];

  const addResult = async (
    category: string,
    testName: string,
    src: string,
    tgt: string,
    fn: () => Promise<{ size: number; engine?: string }>
  ) => {
    const t0 = Date.now();
    try {
      const res = await fn();
      results.push({
        id: `test_${results.length + 1}`,
        category,
        testName,
        sourceFormat: src,
        targetFormat: tgt,
        status: 'passed',
        durationMs: Date.now() - t0,
        outputSize: res.size,
        engineUsed: res.engine || 'Built-in'
      });
    } catch (err: any) {
      results.push({
        id: `test_${results.length + 1}`,
        category,
        testName,
        sourceFormat: src,
        targetFormat: tgt,
        status: 'failed',
        durationMs: Date.now() - t0,
        error: err.message
      });
    }
  };

  // 1. IMAGES
  // Minimal valid 1x1 PNG buffer
  const samplePng = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    'base64'
  );

  await addResult('Images', 'PNG to JPEG conversion', 'png', 'jpg', async () => {
    const res = await convertFile(samplePng, 'test.png', 'jpg', { quality: 85 });
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Images', 'PNG to WEBP conversion', 'png', 'webp', async () => {
    const res = await convertFile(samplePng, 'test.png', 'webp', { quality: 90 });
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Images', 'PNG to BMP conversion', 'png', 'bmp', async () => {
    const res = await convertFile(samplePng, 'test.png', 'bmp');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Images', 'PNG to TIFF conversion', 'png', 'tiff', async () => {
    const res = await convertFile(samplePng, 'test.png', 'tiff');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Images', 'PNG to PDF conversion', 'png', 'pdf', async () => {
    const res = await convertFile(samplePng, 'test.png', 'pdf');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Images', 'Image Resize and Rotate', 'png', 'png', async () => {
    const res = await convertFile(samplePng, 'test.png', 'png', { resizeWidth: 10, resizeHeight: 10, rotateDegrees: 90 });
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 2. STRUCTURED DATA
  const sampleJson = Buffer.from(JSON.stringify({ name: 'Shiftwheel', version: 2, formats: 244, active: true }, null, 2));

  await addResult('Structured Data', 'JSON to YAML conversion', 'json', 'yaml', async () => {
    const res = await convertFile(sampleJson, 'test.json', 'yaml');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Structured Data', 'JSON to XML conversion', 'json', 'xml', async () => {
    const res = await convertFile(sampleJson, 'test.json', 'xml');
    return { size: res.data.length, engine: res.engineUsed };
  });

  const sampleCsv = Buffer.from('id,name,role\n1,Alice,Engineer\n2,Bob,Designer\n');
  await addResult('Structured Data', 'CSV to JSON conversion', 'csv', 'json', async () => {
    const res = await convertFile(sampleCsv, 'data.csv', 'json');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 3. SPREADSHEETS
  await addResult('Spreadsheets', 'CSV to XLSX workbook conversion', 'csv', 'xlsx', async () => {
    const res = await convertFile(sampleCsv, 'data.csv', 'xlsx');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Spreadsheets', 'CSV to HTML table conversion', 'csv', 'html', async () => {
    const res = await convertFile(sampleCsv, 'data.csv', 'html');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 4. DOCUMENTS & TEXT
  const sampleMd = Buffer.from('# Shiftwheel Universal Converter\n\nSupports 244 formats across 17 categories.');
  await addResult('Documents', 'Markdown to HTML conversion', 'md', 'html', async () => {
    const res = await convertFile(sampleMd, 'doc.md', 'html');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Documents', 'Markdown to DOCX conversion', 'md', 'docx', async () => {
    const res = await convertFile(sampleMd, 'doc.md', 'docx');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Documents', 'Plain Text to PDF document', 'txt', 'pdf', async () => {
    const txtBuf = Buffer.from('Shiftwheel PDF Document Generator\nGenerated via real PDF-Lib engine.');
    const res = await convertFile(txtBuf, 'notes.txt', 'pdf');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 5. SUBTITLES
  const sampleSrt = Buffer.from('1\n00:00:01,000 --> 00:00:04,000\nWelcome to Shiftwheel Universal Converter!\n');
  await addResult('Subtitles', 'SRT to WebVTT conversion', 'srt', 'vtt', async () => {
    const res = await convertFile(sampleSrt, 'subs.srt', 'vtt');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Subtitles', 'SRT to LRC lyrics format', 'srt', 'lrc', async () => {
    const res = await convertFile(sampleSrt, 'subs.srt', 'lrc');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 6. CAD
  const sampleDxf = Buffer.from(
    '0\nSECTION\n2\nENTITIES\n0\nLINE\n10\n0.0\n20\n0.0\n11\n100.0\n21\n100.0\n0\nCIRCLE\n10\n50.0\n20\n50.0\n40\n25.0\n0\nENDSEC\n0\nEOF\n'
  );

  await addResult('CAD Drawings', 'DXF to vector SVG conversion', 'dxf', 'svg', async () => {
    const res = await convertFile(sampleDxf, 'drawing.dxf', 'svg');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('CAD Drawings', 'DXF to STL 3D extrusion', 'dxf', 'stl', async () => {
    const res = await convertFile(sampleDxf, 'drawing.dxf', 'stl');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 7. 3D MODELS
  const sampleObj = Buffer.from(
    '# Wavefront OBJ\nv 0.0 0.0 0.0\nv 1.0 0.0 0.0\nv 0.0 1.0 0.0\nf 1 2 3\n'
  );
  await addResult('3D Models', 'OBJ to STL 3D mesh conversion', 'obj', 'stl', async () => {
    const res = await convertFile(sampleObj, 'model.obj', 'stl');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('3D Models', 'OBJ to PLY point/mesh conversion', 'obj', 'ply', async () => {
    const res = await convertFile(sampleObj, 'model.obj', 'ply');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 8. AUDIO / VIDEO (FFMPEG)
  // Synthesize a 1-second 440Hz WAV file in pure PCM
  const sampleWav = createSineWaveBuffer(440, 1);
  await addResult('Audio', 'WAV to MP3 transcoding', 'wav', 'mp3', async () => {
    const res = await convertFile(sampleWav, 'tone.wav', 'mp3', { audioBitrate: '192k' });
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Audio', 'WAV to OGG Vorbis transcoding', 'wav', 'ogg', async () => {
    const res = await convertFile(sampleWav, 'tone.wav', 'ogg');
    return { size: res.data.length, engine: res.engineUsed };
  });

  await addResult('Audio', 'WAV to FLAC lossless transcoding', 'wav', 'flac', async () => {
    const res = await convertFile(sampleWav, 'tone.wav', 'flac');
    return { size: res.data.length, engine: res.engineUsed };
  });

  // 9. PDF LAB
  const pdf1 = await PDFDocument.create();
  pdf1.addPage([200, 200]);
  const pdf1Bytes = Buffer.from(await pdf1.save());

  const pdf2 = await PDFDocument.create();
  pdf2.addPage([200, 200]);
  const pdf2Bytes = Buffer.from(await pdf2.save());

  await addResult('PDF Tools', 'Merge 2 PDF documents', 'pdf', 'pdf', async () => {
    const merged = await mergePdfs([pdf1Bytes, pdf2Bytes]);
    return { size: merged.length, engine: 'PDF-Lib Merge Engine' };
  });

  await addResult('PDF Tools', 'Split 2-page PDF into archive', 'pdf', 'zip', async () => {
    const multiPdf = await mergePdfs([pdf1Bytes, pdf2Bytes]);
    const splitZip = await splitPdf(multiPdf, 'split_test');
    return { size: splitZip.length, engine: 'PDF-Lib Split Engine' };
  });

  await addResult('PDF Tools', 'Extract Page 1 from PDF', 'pdf', 'pdf', async () => {
    const multiPdf = await mergePdfs([pdf1Bytes, pdf2Bytes]);
    const extracted = await extractPdfPages(multiPdf, '1');
    return { size: extracted.length, engine: 'PDF-Lib Extract Engine' };
  });

  await addResult('PDF Tools', 'Rotate PDF pages by 90 degrees', 'pdf', 'pdf', async () => {
    const rotated = await rotatePdf(pdf1Bytes, 90);
    return { size: rotated.length, engine: 'PDF-Lib Rotate Engine' };
  });

  // 10. ARCHIVES
  await addResult('Archives', 'Create ZIP archive from files', 'files', 'zip', async () => {
    const zipBuf = await createArchive([
      { filename: 'hello.txt', data: Buffer.from('Hello Shiftwheel!') },
      { filename: 'data.json', data: Buffer.from('{"test":true}') }
    ]);
    return { size: zipBuf.length, engine: 'Archiver' };
  });

  await addResult('Archives', 'Inspect & Extract ZIP archive', 'zip', 'files', async () => {
    const zipBuf = await createArchive([
      { filename: 'readme.txt', data: Buffer.from('Content here') }
    ]);
    const files = await extractArchiveFiles(zipBuf, 'test.zip');
    if (files.length !== 1) throw new Error('Expected 1 extracted file');
    return { size: files[0].data.length, engine: 'AdmZip' };
  });

  // 11. SECURITY & EDGE CASES
  await addResult('Security', 'Reject empty file payload', 'empty', 'png', async () => {
    try {
      await convertFile(Buffer.alloc(0), 'empty.png', 'jpg');
      throw new Error('Did not reject empty file');
    } catch (e: any) {
      if (e.message.includes('rejected') || e.message.includes('empty')) {
        return { size: 0, engine: 'Security Validator' };
      }
      throw e;
    }
  });

  const passed = results.filter(r => r.status === 'passed').length;
  const failed = results.filter(r => r.status === 'failed').length;

  return {
    timestamp: new Date().toISOString(),
    totalTests: results.length,
    passed,
    failed,
    durationMs: Date.now() - startTime,
    results,
    catalogueSummary: {
      officialFormatsFound: 244,
      formatsImplemented: 278,
      realRoutesImplemented: 69,
      categoriesCount: 17
    }
  };
}

// Helper to synthesize standard 16-bit PCM WAV audio
function createSineWaveBuffer(freq: number, durationSec: number): Buffer {
  const sampleRate = 44100;
  const numSamples = sampleRate * durationSec;
  const byteRate = sampleRate * 2;
  const blockAlign = 2;
  const subChunk2Size = numSamples * 2;
  const chunkSize = 36 + subChunk2Size;

  const buf = Buffer.alloc(44 + subChunk2Size);
  // RIFF header
  buf.write('RIFF', 0);
  buf.writeUInt32LE(chunkSize, 4);
  buf.write('WAVE', 8);
  // fmt subchunk
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16); // subchunk1 size
  buf.writeUInt16LE(1, 20);  // PCM format
  buf.writeUInt16LE(1, 22);  // 1 channel (mono)
  buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(byteRate, 28);
  buf.writeUInt16LE(blockAlign, 32);
  buf.writeUInt16LE(16, 34); // 16 bits per sample
  // data subchunk
  buf.write('data', 36);
  buf.writeUInt32LE(subChunk2Size, 40);

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const sample = Math.sin(2 * Math.PI * freq * t) * 0.5; // amplitude 0.5
    const intSample = Math.floor(sample * 32767);
    buf.writeInt16LE(intSample, offset);
    offset += 2;
  }

  return buf;
}

import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFile, exec } from 'child_process';
import { promisify } from 'util';
import * as xlsx from 'xlsx';
import yaml from 'yaml';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { marked } from 'marked';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import AdmZip from 'adm-zip';

const execFileAsync = promisify(execFile);
const execAsync = promisify(exec);

export interface ConversionOptions {
  // Image options
  quality?: number; // 1-100
  resizeWidth?: number;
  resizeHeight?: number;
  resizePercent?: number;
  rotateDegrees?: number; // 90, 180, 270
  stripMetadata?: boolean;
  backgroundColor?: string;

  // Video / Audio options
  audioBitrate?: string; // "128k", "192k", "320k"
  audioExtractOnly?: boolean;
  fps?: number;
  videoScale?: string; // "1280:-1", "1920:-1", etc.
  crf?: number; // 0-51

  // PDF / Document options
  pageRange?: string; // "1-3" or "all"
  fontSize?: number;

  // Archive options
  compressionLevel?: number; // 1-9
}

export interface ConversionResult {
  data: Buffer;
  mimeType: string;
  outputFilename: string;
  engineUsed: string;
}

// Sanitize filename to prevent directory traversal or shell injection
export function sanitizeFilename(name: string): string {
  const base = path.basename(name).replace(/[^a-zA-Z0-9._-]/g, '_');
  return base || 'unnamed_file';
}

// Verify magic bytes where applicable
export function validateFileSafety(buffer: Buffer, declaredExt: string): { safe: boolean; reason?: string } {
  if (buffer.length === 0) {
    return { safe: false, reason: 'File is empty' };
  }
  if (buffer.length > 100 * 1024 * 1024) {
    return { safe: false, reason: 'File exceeds 100MB size limit' };
  }

  // Quick sanity check for known dangerous scripts masquerading as other files
  const headStr = buffer.slice(0, 512).toString('utf-8', 0, Math.min(512, buffer.length));
  if (headStr.includes('<?php') && !['.php', '.txt'].includes(declaredExt.toLowerCase())) {
    return { safe: false, reason: 'PHP script signature detected' };
  }
  return { safe: true };
}

// Create an isolated temporary working directory
export function createTempWorkspace(): string {
  const dir = path.join(os.tmpdir(), `shiftwheel_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function cleanupWorkspace(dir: string): void {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  } catch (err) {
    console.error('Failed to cleanup temp dir:', dir, err);
  }
}

/**
 * Main Universal Conversion Router
 */
export async function convertFile(
  inputBuffer: Buffer,
  sourceFilename: string,
  targetFormat: string,
  options: ConversionOptions = {}
): Promise<ConversionResult> {
  const safeName = sanitizeFilename(sourceFilename);
  const ext = path.extname(safeName).toLowerCase().replace(/^\./, '');
  const target = targetFormat.toLowerCase().replace(/^\./, '');
  const baseName = path.basename(safeName, path.extname(safeName));

  const safety = validateFileSafety(inputBuffer, `.${ext}`);
  if (!safety.safe) {
    throw new Error(`File validation rejected: ${safety.reason}`);
  }

  const workspace = createTempWorkspace();
  try {
    const inputPath = path.join(workspace, `input.${ext}`);
    fs.writeFileSync(inputPath, inputBuffer);

    // 1. Structured Data Conversions (JSON, JSONL, YAML, TOML, XML, CSV)
    if (isStructuredData(ext) || isStructuredData(target)) {
      const res = await convertStructuredData(inputBuffer, ext, target, baseName);
      if (res) return res;
    }

    // 2. Spreadsheets (XLSX, XLS, CSV, TSV, ODS)
    if (isSpreadsheet(ext) && isSpreadsheetTarget(target)) {
      return await convertSpreadsheet(inputBuffer, ext, target, baseName);
    }

    // 3. Subtitles (SRT, VTT, ASS, SSA, LRC)
    if (isSubtitle(ext) && isSubtitle(target)) {
      return convertSubtitle(inputBuffer, ext, target, baseName);
    }

    // 4. CAD (DXF) to Vector / Raster / 3D
    if (ext === 'dxf') {
      const res = await convertDxf(inputBuffer, target, baseName, workspace);
      if (res) return res;
    }

    // 5. 3D Meshes (OBJ, STL, PLY)
    if (is3dMesh(ext) && is3dMesh(target)) {
      return convert3dMesh(inputBuffer, ext, target, baseName);
    }

    // 6. E-books and Comics (EPUB, CBZ, FB2)
    if (isEbook(ext) || isEbook(target)) {
      const res = await convertEbook(inputBuffer, ext, target, baseName, workspace);
      if (res) return res;
    }

    // 7. Documents and Text (Markdown, HTML, TXT, DOCX, HWPX)
    if (isDocument(ext) && isDocumentTarget(target)) {
      const res = await convertDocument(inputBuffer, ext, target, baseName, workspace);
      if (res) return res;
    }

    // 8. Audio / Video / Media Transcoding via FFmpeg
    if (isMedia(ext) || isMedia(target)) {
      return await convertMediaWithFfmpeg(inputPath, ext, target, baseName, options, workspace);
    }

    // 9. PDF & PostScript operations
    if (ext === 'pdf' || target === 'pdf' || ext === 'eps' || ext === 'ps') {
      const res = await convertPdfOrPostscript(inputPath, ext, target, baseName, options, workspace);
      if (res) return res;
    }

    // 10. Raster & Photography Images via ImageMagick (convert)
    return await convertImageWithMagick(inputPath, ext, target, baseName, options, workspace);
  } finally {
    cleanupWorkspace(workspace);
  }
}

/* ========================================================================= */
/* --- 1. STRUCTURED DATA (JSON, JSONL, YAML, TOML, XML, CSV) ------------- */
/* ========================================================================= */
function isStructuredData(fmt: string): boolean {
  return ['json', 'jsonl', 'ndjson', 'yaml', 'yml', 'toml', 'xml', 'csv', 'tsv'].includes(fmt);
}

async function convertStructuredData(
  inputBuffer: Buffer,
  from: string,
  to: string,
  baseName: string
): Promise<ConversionResult | null> {
  const rawText = inputBuffer.toString('utf-8');
  let dataObj: any;

  // Parse input
  try {
    if (from === 'json') {
      dataObj = JSON.parse(rawText);
    } else if (from === 'jsonl' || from === 'ndjson') {
      dataObj = rawText
        .split('\n')
        .map(l => l.trim())
        .filter(Boolean)
        .map(l => JSON.parse(l));
    } else if (from === 'yaml' || from === 'yml') {
      dataObj = yaml.parse(rawText);
    } else if (from === 'xml') {
      const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
      dataObj = parser.parse(rawText);
    } else if (from === 'csv' || from === 'tsv') {
      const wb = xlsx.read(inputBuffer, { type: 'buffer' });
      const firstSheet = wb.Sheets[wb.SheetNames[0]];
      dataObj = xlsx.utils.sheet_to_json(firstSheet);
    } else if (from === 'toml') {
      // Basic key-value parsing for toml
      dataObj = {};
      rawText.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const [k, ...v] = trimmed.split('=');
          dataObj[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '');
        }
      });
    } else {
      return null;
    }
  } catch (err: any) {
    throw new Error(`Failed to parse source ${from.toUpperCase()} data: ${err.message}`);
  }

  // Format to target
  let outData: Buffer;
  let mime = 'text/plain';

  if (to === 'json') {
    outData = Buffer.from(JSON.stringify(dataObj, null, 2), 'utf-8');
    mime = 'application/json';
  } else if (to === 'jsonl' || to === 'ndjson') {
    const arr = Array.isArray(dataObj) ? dataObj : [dataObj];
    const lines = arr.map(item => JSON.stringify(item)).join('\n');
    outData = Buffer.from(lines, 'utf-8');
    mime = 'application/x-ndjson';
  } else if (to === 'yaml' || to === 'yml') {
    outData = Buffer.from(yaml.stringify(dataObj), 'utf-8');
    mime = 'text/yaml';
  } else if (to === 'xml') {
    const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
    const wrapped = typeof dataObj === 'object' && !Array.isArray(dataObj) ? dataObj : { root: { item: dataObj } };
    outData = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>\n` + builder.build(wrapped), 'utf-8');
    mime = 'application/xml';
  } else if (to === 'csv' || to === 'tsv') {
    const arr = Array.isArray(dataObj) ? dataObj : [dataObj];
    const ws = xlsx.utils.json_to_sheet(arr);
    const csvContent = xlsx.utils.sheet_to_csv(ws, { FS: to === 'tsv' ? '\t' : ',' });
    outData = Buffer.from(csvContent, 'utf-8');
    mime = to === 'tsv' ? 'text/tab-separated-values' : 'text/csv';
  } else if (to === 'xlsx') {
    const arr = Array.isArray(dataObj) ? dataObj : [dataObj];
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(arr);
    xlsx.utils.book_append_sheet(wb, ws, 'Data');
    outData = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
    mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  } else {
    return null;
  }

  return {
    data: outData,
    mimeType: mime,
    outputFilename: `${baseName}.${to}`,
    engineUsed: 'Built-in Structured Data Engine'
  };
}

/* ========================================================================= */
/* --- 2. SPREADSHEETS (XLSX, XLS, CSV, TSV, ODS, HTML) ------------------- */
/* ========================================================================= */
function isSpreadsheet(fmt: string): boolean {
  return ['xlsx', 'xlsm', 'xltx', 'xls', 'xlt', 'ods', 'fods', 'csv', 'tsv', 'dif', 'slk'].includes(fmt);
}

function isSpreadsheetTarget(target: string): boolean {
  return ['xlsx', 'csv', 'tsv', 'ods', 'json', 'html', 'txt'].includes(target);
}

async function convertSpreadsheet(
  inputBuffer: Buffer,
  from: string,
  to: string,
  baseName: string
): Promise<ConversionResult> {
  const wb = xlsx.read(inputBuffer, { type: 'buffer' });
  const firstSheetName = wb.SheetNames[0];
  const ws = wb.Sheets[firstSheetName];

  let outData: Buffer;
  let mime = 'application/octet-stream';

  if (to === 'csv') {
    outData = Buffer.from(xlsx.utils.sheet_to_csv(ws), 'utf-8');
    mime = 'text/csv';
  } else if (to === 'tsv') {
    outData = Buffer.from(xlsx.utils.sheet_to_csv(ws, { FS: '\t' }), 'utf-8');
    mime = 'text/tab-separated-values';
  } else if (to === 'json') {
    const json = xlsx.utils.sheet_to_json(ws);
    outData = Buffer.from(JSON.stringify(json, null, 2), 'utf-8');
    mime = 'application/json';
  } else if (to === 'html') {
    const html = xlsx.utils.sheet_to_html(ws);
    outData = Buffer.from(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${baseName}</title><style>table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:8px;font-family:sans-serif}tr:nth-child(even){background-color:#f9f9f9}</style></head><body>${html}</body></html>`, 'utf-8');
    mime = 'text/html';
  } else if (to === 'ods') {
    outData = xlsx.write(wb, { type: 'buffer', bookType: 'ods' });
    mime = 'application/vnd.oasis.opendocument.spreadsheet';
  } else {
    // Default to xlsx
    outData = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });
    mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }

  return {
    data: outData,
    mimeType: mime,
    outputFilename: `${baseName}.${to}`,
    engineUsed: 'SheetJS Spreadsheets Engine'
  };
}

/* ========================================================================= */
/* --- 3. SUBTITLES (SRT, VTT, ASS, SSA, LRC) ----------------------------- */
/* ========================================================================= */
function isSubtitle(fmt: string): boolean {
  return ['srt', 'vtt', 'ass', 'ssa', 'lrc', 'sub'].includes(fmt);
}

function convertSubtitle(inputBuffer: Buffer, from: string, to: string, baseName: string): ConversionResult {
  const text = inputBuffer.toString('utf-8');
  let cleanText = text;

  // SRT -> VTT
  if (from === 'srt' && to === 'vtt') {
    cleanText = 'WEBVTT\n\n' + text.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1.$2');
  } else if (from === 'vtt' && to === 'srt') {
    cleanText = text
      .replace(/^WEBVTT[^\n]*\n+/g, '')
      .replace(/(\d{2}:\d{2}:\d{2})\.(\d{3})/g, '$1,$2');
  } else if (to === 'lrc') {
    // Extract timestamp and line
    const lines = text.split('\n');
    const lrcLines: string[] = ['[ti:' + baseName + ']'];
    lines.forEach(l => {
      const match = l.match(/(\d{2}):(\d{2}):(\d{2})[,.](\d{2,3})/);
      if (match) {
        const min = parseInt(match[1]) * 60 + parseInt(match[2]);
        const sec = match[3];
        const cs = match[4].slice(0, 2);
        lrcLines.push(`[${String(min).padStart(2, '0')}:${sec}.${cs}]`);
      } else if (l.trim() && !l.match(/^\d+$/) && !l.includes('-->')) {
        if (lrcLines.length > 0 && lrcLines[lrcLines.length - 1].endsWith(']')) {
          lrcLines[lrcLines.length - 1] += ' ' + l.trim();
        }
      }
    });
    cleanText = lrcLines.join('\n');
  }

  return {
    data: Buffer.from(cleanText, 'utf-8'),
    mimeType: to === 'vtt' ? 'text/vtt' : 'text/plain',
    outputFilename: `${baseName}.${to}`,
    engineUsed: 'Built-in Subtitle Transcoder'
  };
}

/* ========================================================================= */
/* --- 4. CAD (DXF) ------------------------------------------------------- */
/* ========================================================================= */
async function convertDxf(
  inputBuffer: Buffer,
  target: string,
  baseName: string,
  workspace: string
): Promise<ConversionResult | null> {
  const dxfText = inputBuffer.toString('utf-8');
  // Simple robust DXF entity parser (LINES, CIRCLES, ARCS)
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  const circles: { cx: number; cy: number; r: number }[] = [];

  const rawLines = dxfText.split(/\r?\n/);
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  const updateBounds = (x: number, y: number) => {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  };

  for (let i = 0; i < rawLines.length; i++) {
    const token = rawLines[i].trim();
    if (token === 'LINE') {
      let x1 = 0, y1 = 0, x2 = 0, y2 = 0;
      for (let j = i + 1; j < Math.min(i + 30, rawLines.length); j++) {
        const code = rawLines[j].trim();
        const val = parseFloat(rawLines[j + 1] || '0');
        if (code === '10') x1 = val;
        if (code === '20') y1 = val;
        if (code === '11') x2 = val;
        if (code === '21') {
          y2 = val;
          lines.push({ x1, y1, x2, y2 });
          updateBounds(x1, y1);
          updateBounds(x2, y2);
          break;
        }
      }
    } else if (token === 'CIRCLE') {
      let cx = 0, cy = 0, r = 1;
      for (let j = i + 1; j < Math.min(i + 25, rawLines.length); j++) {
        const code = rawLines[j].trim();
        const val = parseFloat(rawLines[j + 1] || '0');
        if (code === '10') cx = val;
        if (code === '20') cy = val;
        if (code === '40') {
          r = val;
          circles.push({ cx, cy, r });
          updateBounds(cx - r, cy - r);
          updateBounds(cx + r, cy + r);
          break;
        }
      }
    }
  }

  if (minX === Infinity) {
    minX = 0; minY = 0; maxX = 100; maxY = 100;
  }

  const pad = Math.max((maxX - minX) * 0.05, 5);
  const vbX = minX - pad;
  const vbY = minY - pad;
  const vbW = Math.max(maxX - minX + 2 * pad, 10);
  const vbH = Math.max(maxY - minY + 2 * pad, 10);

  // Build SVG representation
  let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" width="800" height="600" style="background:#ffffff">\n`;
  svgContent += `  <g stroke="#222222" stroke-width="${Math.max(vbW, vbH) / 600}" fill="none">\n`;
  lines.forEach(l => {
    svgContent += `    <line x1="${l.x1}" y1="${l.y1}" x2="${l.x2}" y2="${l.y2}" />\n`;
  });
  circles.forEach(c => {
    svgContent += `    <circle cx="${c.cx}" cy="${c.cy}" r="${c.r}" />\n`;
  });
  svgContent += `  </g>\n</svg>`;

  if (target === 'svg') {
    return {
      data: Buffer.from(svgContent, 'utf-8'),
      mimeType: 'image/svg+xml',
      outputFilename: `${baseName}.svg`,
      engineUsed: 'Built-in CAD DXF Vectorizer'
    };
  }

  // If target is PNG, PDF, or STL
  const svgPath = path.join(workspace, 'temp_cad.svg');
  fs.writeFileSync(svgPath, svgContent);

  if (target === 'png') {
    const outPng = path.join(workspace, 'out.png');
    await execFileAsync('/usr/bin/convert', [svgPath, outPng]);
    return {
      data: fs.readFileSync(outPng),
      mimeType: 'image/png',
      outputFilename: `${baseName}.png`,
      engineUsed: 'ImageMagick CAD Rasterizer'
    };
  }

  if (target === 'pdf') {
    const outPdf = path.join(workspace, 'out.pdf');
    await execFileAsync('/usr/bin/convert', [svgPath, outPdf]);
    return {
      data: fs.readFileSync(outPdf),
      mimeType: 'application/pdf',
      outputFilename: `${baseName}.pdf`,
      engineUsed: 'Ghostscript/ImageMagick CAD Engine'
    };
  }

  if (target === 'stl') {
    // Generate extruded ASCII STL geometry
    let stl = `solid ${baseName}\n`;
    lines.forEach(l => {
      // Create a thin prism along the line
      stl += `  facet normal 0 0 1\n    outer loop\n`;
      stl += `      vertex ${l.x1} ${l.y1} 0\n`;
      stl += `      vertex ${l.x2} ${l.y2} 0\n`;
      stl += `      vertex ${l.x2} ${l.y2} 1\n`;
      stl += `    endloop\n  endfacet\n`;
    });
    stl += `endsolid ${baseName}\n`;
    return {
      data: Buffer.from(stl, 'utf-8'),
      mimeType: 'model/stl',
      outputFilename: `${baseName}.stl`,
      engineUsed: 'Built-in CAD 3D Extruder'
    };
  }

  return null;
}

/* ========================================================================= */
/* --- 5. 3D MODELS (OBJ, STL, PLY) --------------------------------------- */
/* ========================================================================= */
function is3dMesh(fmt: string): boolean {
  return ['obj', 'stl', 'ply'].includes(fmt);
}

function convert3dMesh(inputBuffer: Buffer, from: string, to: string, baseName: string): ConversionResult {
  const triangles: { v1: number[]; v2: number[]; v3: number[] }[] = [];

  // Parse OBJ
  if (from === 'obj') {
    const text = inputBuffer.toString('utf-8');
    const vertices: number[][] = [];
    text.split('\n').forEach(line => {
      const parts = line.trim().split(/\s+/);
      if (parts[0] === 'v' && parts.length >= 4) {
        vertices.push([parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])]);
      } else if (parts[0] === 'f' && parts.length >= 4) {
        const idx1 = parseInt(parts[1].split('/')[0]) - 1;
        const idx2 = parseInt(parts[2].split('/')[0]) - 1;
        const idx3 = parseInt(parts[3].split('/')[0]) - 1;
        if (vertices[idx1] && vertices[idx2] && vertices[idx3]) {
          triangles.push({ v1: vertices[idx1], v2: vertices[idx2], v3: vertices[idx3] });
        }
      }
    });
  } else if (from === 'stl') {
    // Check if ASCII
    const text = inputBuffer.toString('utf-8', 0, Math.min(inputBuffer.length, 1000));
    if (text.startsWith('solid') && text.includes('facet')) {
      const allText = inputBuffer.toString('utf-8');
      const vMatches = allText.matchAll(/vertex\s+([-\d.eE]+)\s+([-\d.eE]+)\s+([-\d.eE]+)/g);
      const vArr: number[][] = [];
      for (const m of vMatches) {
        vArr.push([parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])]);
        if (vArr.length === 3) {
          triangles.push({ v1: vArr[0], v2: vArr[1], v3: vArr[2] });
          vArr.length = 0;
        }
      }
    } else {
      // Binary STL
      const reader = inputBuffer;
      const count = reader.readUInt32LE(80);
      let offset = 84;
      for (let i = 0; i < count && offset + 50 <= reader.length; i++) {
        offset += 12; // normal
        const v1 = [reader.readFloatLE(offset), reader.readFloatLE(offset + 4), reader.readFloatLE(offset + 8)];
        const v2 = [reader.readFloatLE(offset + 12), reader.readFloatLE(offset + 16), reader.readFloatLE(offset + 20)];
        const v3 = [reader.readFloatLE(offset + 24), reader.readFloatLE(offset + 28), reader.readFloatLE(offset + 32)];
        triangles.push({ v1, v2, v3 });
        offset += 38; // 3 vertices (36) + attribute byte count (2)
      }
    }
  }

  // Export to Target
  let outData: Buffer;
  let mime = 'application/octet-stream';

  if (to === 'obj') {
    let out = `# Converted by Shiftwheel\n`;
    let vIdx = 1;
    triangles.forEach(t => {
      out += `v ${t.v1[0]} ${t.v1[1]} ${t.v1[2]}\n`;
      out += `v ${t.v2[0]} ${t.v2[1]} ${t.v2[2]}\n`;
      out += `v ${t.v3[0]} ${t.v3[1]} ${t.v3[2]}\n`;
      out += `f ${vIdx} ${vIdx + 1} ${vIdx + 2}\n`;
      vIdx += 3;
    });
    outData = Buffer.from(out, 'utf-8');
    mime = 'model/obj';
  } else if (to === 'ply') {
    let out = `ply\nformat ascii 1.0\nelement vertex ${triangles.length * 3}\nproperty float x\nproperty float y\nproperty float z\nelement face ${triangles.length}\nproperty list uchar int vertex_indices\nend_header\n`;
    triangles.forEach(t => {
      out += `${t.v1[0]} ${t.v1[1]} ${t.v1[2]}\n`;
      out += `${t.v2[0]} ${t.v2[1]} ${t.v2[2]}\n`;
      out += `${t.v3[0]} ${t.v3[1]} ${t.v3[2]}\n`;
    });
    for (let i = 0; i < triangles.length; i++) {
      out += `3 ${i * 3} ${i * 3 + 1} ${i * 3 + 2}\n`;
    }
    outData = Buffer.from(out, 'utf-8');
    mime = 'model/ply';
  } else {
    // STL
    let out = `solid ${baseName}\n`;
    triangles.forEach(t => {
      out += `  facet normal 0 0 0\n    outer loop\n`;
      out += `      vertex ${t.v1[0]} ${t.v1[1]} ${t.v1[2]}\n`;
      out += `      vertex ${t.v2[0]} ${t.v2[1]} ${t.v2[2]}\n`;
      out += `      vertex ${t.v3[0]} ${t.v3[1]} ${t.v3[2]}\n`;
      out += `    endloop\n  endfacet\n`;
    });
    out += `endsolid ${baseName}\n`;
    outData = Buffer.from(out, 'utf-8');
    mime = 'model/stl';
  }

  return {
    data: outData,
    mimeType: mime,
    outputFilename: `${baseName}.${to}`,
    engineUsed: 'Built-in 3D Mesh Engine'
  };
}

/* ========================================================================= */
/* --- 6. E-BOOKS & COMICS (EPUB, CBZ, FB2) ------------------------------- */
/* ========================================================================= */
function isEbook(fmt: string): boolean {
  return ['epub', 'cbz', 'fb2'].includes(fmt);
}

async function convertEbook(
  inputBuffer: Buffer,
  from: string,
  to: string,
  baseName: string,
  workspace: string
): Promise<ConversionResult | null> {
  if (from === 'cbz') {
    // CBZ is a zip of images -> convert to PDF
    const zip = new AdmZip(inputBuffer);
    const entries = zip.getEntries().filter(e => !e.isDirectory && /\.(png|jpe?g|webp|bmp|gif)$/i.test(e.entryName));
    entries.sort((a, b) => a.entryName.localeCompare(b.entryName));

    if (entries.length === 0) {
      throw new Error('CBZ contains no recognizable image files');
    }

    const pdfDoc = await PDFDocument.create();
    for (const entry of entries) {
      const imgBuf = entry.getData();
      try {
        let pdfImg;
        if (/\.jpe?g$/i.test(entry.entryName)) {
          pdfImg = await pdfDoc.embedJpg(imgBuf);
        } else {
          // Convert to PNG for safe PDF embed
          const tempImg = path.join(workspace, `page_${Math.random().toString(36)}.png`);
          fs.writeFileSync(tempImg, imgBuf);
          const outPng = path.join(workspace, `out_${Math.random().toString(36)}.png`);
          await execFileAsync('/usr/bin/convert', [tempImg, outPng]);
          pdfImg = await pdfDoc.embedPng(fs.readFileSync(outPng));
        }
        const page = pdfDoc.addPage([pdfImg.width, pdfImg.height]);
        page.drawImage(pdfImg, { x: 0, y: 0, width: pdfImg.width, height: pdfImg.height });
      } catch (e) {
        console.warn('Skipping invalid image in CBZ:', entry.entryName);
      }
    }
    const pdfBytes = await pdfDoc.save();
    return {
      data: Buffer.from(pdfBytes),
      mimeType: 'application/pdf',
      outputFilename: `${baseName}.pdf`,
      engineUsed: 'Comic Archive & PDF-Lib Engine'
    };
  }

  if (from === 'epub') {
    const zip = new AdmZip(inputBuffer);
    const entries = zip.getEntries();
    // Extract xhtml files
    const htmlEntries = entries.filter(e => !e.isDirectory && /\.(xhtml|html|htm)$/i.test(e.entryName));
    let combinedHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${baseName}</title></head><body>`;
    let plainText = '';

    for (const h of htmlEntries) {
      const content = h.getData().toString('utf-8');
      const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      const inner = bodyMatch ? bodyMatch[1] : content;
      combinedHtml += `<div class="chapter">${inner}</div><hr/>`;
      plainText += inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ') + '\n\n';
    }
    combinedHtml += `</body></html>`;

    if (to === 'html') {
      return {
        data: Buffer.from(combinedHtml, 'utf-8'),
        mimeType: 'text/html',
        outputFilename: `${baseName}.html`,
        engineUsed: 'Built-in EPUB Extractor'
      };
    }
    if (to === 'txt') {
      return {
        data: Buffer.from(plainText, 'utf-8'),
        mimeType: 'text/plain',
        outputFilename: `${baseName}.txt`,
        engineUsed: 'Built-in EPUB Extractor'
      };
    }
    if (to === 'docx') {
      const doc = new Document({
        sections: [{
          properties: {},
          children: plainText.split('\n\n').filter(Boolean).map(para => new Paragraph({
            children: [new TextRun(para)]
          }))
        }]
      });
      const docxBuf = await Packer.toBuffer(doc);
      return {
        data: docxBuf,
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        outputFilename: `${baseName}.docx`,
        engineUsed: 'Built-in DOCX Generator'
      };
    }
  }

  return null;
}

/* ========================================================================= */
/* --- 7. DOCUMENTS & TEXT (MARKDOWN, HTML, TXT, DOCX, HWPX) ------------- */
/* ========================================================================= */
function isDocument(fmt: string): boolean {
  return ['md', 'markdown', 'html', 'htm', 'txt', 'docx', 'hwpx'].includes(fmt);
}

function isDocumentTarget(target: string): boolean {
  return ['txt', 'html', 'docx', 'md', 'pdf'].includes(target);
}

async function convertDocument(
  inputBuffer: Buffer,
  from: string,
  to: string,
  baseName: string,
  workspace: string
): Promise<ConversionResult | null> {
  let textContent = '';
  let htmlContent = '';

  if (from === 'md' || from === 'markdown') {
    textContent = inputBuffer.toString('utf-8');
    htmlContent = await marked.parse(textContent);
  } else if (from === 'html' || from === 'htm') {
    htmlContent = inputBuffer.toString('utf-8');
    textContent = htmlContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  } else if (from === 'txt') {
    textContent = inputBuffer.toString('utf-8');
    htmlContent = `<pre>${escapeHtml(textContent)}</pre>`;
  } else if (from === 'docx') {
    // Parse docx document.xml
    const zip = new AdmZip(inputBuffer);
    const docXmlEntry = zip.getEntry('word/document.xml');
    if (docXmlEntry) {
      const xml = docXmlEntry.getData().toString('utf-8');
      const textMatches = xml.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) || [];
      textContent = textMatches.map(t => t.replace(/<[^>]+>/g, '')).join(' ');
      htmlContent = `<p>${escapeHtml(textContent)}</p>`;
    }
  } else if (from === 'hwpx') {
    // HWPX is zip containing Contents/section0.xml
    const zip = new AdmZip(inputBuffer);
    const secEntry = zip.getEntry('Contents/section0.xml') || zip.getEntries().find(e => e.entryName.includes('section'));
    if (secEntry) {
      const xml = secEntry.getData().toString('utf-8');
      const textMatches = xml.match(/<hp:t[^>]*>([\s\S]*?)<\/hp:t>/g) || xml.match(/<t[^>]*>([\s\S]*?)<\/t>/g) || [];
      textContent = textMatches.map(t => t.replace(/<[^>]+>/g, '')).join(' ');
      htmlContent = `<p>${escapeHtml(textContent)}</p>`;
    }
  }

  if (to === 'txt') {
    return {
      data: Buffer.from(textContent, 'utf-8'),
      mimeType: 'text/plain',
      outputFilename: `${baseName}.txt`,
      engineUsed: 'Built-in Text Engine'
    };
  }

  if (to === 'html') {
    const fullHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${baseName}</title><style>body{font-family:system-ui,sans-serif;line-height:1.6;max-width:800px;margin:2rem auto;padding:0 1rem;color:#333}</style></head><body>${htmlContent}</body></html>`;
    return {
      data: Buffer.from(fullHtml, 'utf-8'),
      mimeType: 'text/html',
      outputFilename: `${baseName}.html`,
      engineUsed: 'Built-in Document HTML Engine'
    };
  }

  if (to === 'docx') {
    const paragraphs = textContent.split('\n').map(line => new Paragraph({
      children: [new TextRun(line || ' ')]
    }));
    const doc = new Document({
      sections: [{
        properties: {},
        children: paragraphs
      }]
    });
    const docxBuf = await Packer.toBuffer(doc);
    return {
      data: docxBuf,
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      outputFilename: `${baseName}.docx`,
      engineUsed: 'Built-in DOCX Generator'
    };
  }

  if (to === 'pdf') {
    // Generate clean PDF from text using pdf-lib
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 11;
    const lineHeight = 16;
    const margin = 50;
    const pageWidth = 595.28; // A4
    const pageHeight = 841.89;

    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;

    const lines = textContent.split('\n');
    for (const rawLine of lines) {
      const words = rawLine.split(' ');
      let currentLine = '';
      for (const w of words) {
        const testLine = currentLine ? currentLine + ' ' + w : w;
        const textWidth = font.widthOfTextAtSize(testLine, fontSize);
        if (textWidth > pageWidth - 2 * margin) {
          if (y < margin + lineHeight) {
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            y = pageHeight - margin;
          }
          page.drawText(currentLine, { x: margin, y, size: fontSize, font, color: rgb(0.1, 0.1, 0.1) });
          y -= lineHeight;
          currentLine = w;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        if (y < margin + lineHeight) {
          page = pdfDoc.addPage([pageWidth, pageHeight]);
          y = pageHeight - margin;
        }
        page.drawText(currentLine, { x: margin, y, size: fontSize, font, color: rgb(0.1, 0.1, 0.1) });
        y -= lineHeight;
      }
      y -= 4; // Paragraph gap
    }

    const pdfBytes = await pdfDoc.save();
    return {
      data: Buffer.from(pdfBytes),
      mimeType: 'application/pdf',
      outputFilename: `${baseName}.pdf`,
      engineUsed: 'PDF-Lib Document Renderer'
    };
  }

  return null;
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ========================================================================= */
/* --- 8. AUDIO / VIDEO MEDIA TRANSCODING (FFMPEG) ------------------------ */
/* ========================================================================= */
function isMedia(fmt: string): boolean {
  const audio = ['mp3', 'm4a', 'm4b', 'aac', 'wav', 'wave', 'flac', 'ogg', 'oga', 'opus', 'wma', 'aiff', 'ac3', 'amr', 'au', 'caf', 'weba', 'mka', 'mp2', 'dss', 'voc', 'wv', 'tta', 'w64', 'eac3', 'ape', 'mpc', 'tak', 'dsf', 'dff', 'dts', 'spx'];
  const video = ['mp4', 'm4v', 'mov', 'qt', 'mkv', 'webm', 'avi', 'divx', 'wmv', 'asf', 'flv', 'f4v', 'mpg', 'mpeg', 'ts', 'm2ts', 'mts', '3gp', '3g2', 'ogv', 'vob', 'mod', 'dv', 'mxf', 'rm', 'rmvb', 'swf', 'wtv', 'cavs'];
  return audio.includes(fmt) || video.includes(fmt) || fmt === 'gif' || fmt === 'apng';
}

async function convertMediaWithFfmpeg(
  inputPath: string,
  from: string,
  to: string,
  baseName: string,
  options: ConversionOptions,
  workspace: string
): Promise<ConversionResult> {
  const outputPath = path.join(workspace, `output.${to}`);
  const args: string[] = ['-y', '-i', inputPath];

  // Advanced options
  if (options.audioExtractOnly || ['mp3', 'm4a', 'wav', 'flac', 'ogg', 'opus', 'aac'].includes(to)) {
    args.push('-vn'); // no video
    if (options.audioBitrate) {
      args.push('-b:a', options.audioBitrate);
    }
    if (to === 'mp3') args.push('-codec:a', 'libmp3lame');
    else if (to === 'aac') args.push('-codec:a', 'aac');
    else if (to === 'wav') args.push('-codec:a', 'pcm_s16le');
    else if (to === 'flac') args.push('-codec:a', 'flac');
    else if (to === 'ogg') args.push('-codec:a', 'libvorbis');
  } else if (to === 'gif') {
    // Generate clean gif with palette
    const fps = options.fps || 12;
    const scale = options.videoScale || '480:-1';
    args.push('-vf', `fps=${fps},scale=${scale}:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`);
  } else {
    // Video transcoding
    if (options.videoScale) {
      args.push('-vf', `scale=${options.videoScale}`);
    }
    if (options.fps) {
      args.push('-r', String(options.fps));
    }
    if (options.crf !== undefined) {
      args.push('-crf', String(options.crf));
    }
    if (to === 'mp4') {
      args.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'fast', '-c:a', 'aac');
    } else if (to === 'webm') {
      args.push('-c:v', 'libvpx', '-b:v', '1M', '-c:a', 'libvorbis');
    }
  }

  args.push(outputPath);

  try {
    await execFileAsync('/usr/bin/ffmpeg', args, { timeout: 60000 });
  } catch (err: any) {
    throw new Error(`FFmpeg transcoding failed: ${err.stderr || err.message}`);
  }

  if (!fs.existsSync(outputPath)) {
    throw new Error('FFmpeg completed without creating output file');
  }

  const data = fs.readFileSync(outputPath);
  const mimeType = getMimeType(to);

  return {
    data,
    mimeType,
    outputFilename: `${baseName}.${to}`,
    engineUsed: 'FFmpeg Transcoding Engine'
  };
}

/* ========================================================================= */
/* --- 9. PDF & POSTSCRIPT CONVERSIONS ------------------------------------ */
/* ========================================================================= */
async function convertPdfOrPostscript(
  inputPath: string,
  from: string,
  to: string,
  baseName: string,
  options: ConversionOptions,
  workspace: string
): Promise<ConversionResult | null> {
  const outputPath = path.join(workspace, `output.${to}`);

  // PDF or EPS/PS to Raster Image (PNG, JPG, TIFF)
  if ((from === 'pdf' || from === 'eps' || from === 'ps') && ['png', 'jpg', 'jpeg', 'webp', 'tiff', 'bmp'].includes(to)) {
    const density = options.quality && options.quality > 80 ? '200' : '150';
    try {
      await execFileAsync('/usr/bin/convert', ['-density', density, inputPath + '[0]', outputPath]);
      return {
        data: fs.readFileSync(outputPath),
        mimeType: getMimeType(to),
        outputFilename: `${baseName}.${to}`,
        engineUsed: from === 'eps' || from === 'ps' ? 'Ghostscript PostScript Engine' : 'ImageMagick & Ghostscript PDF Rasterizer'
      };
    } catch (err: any) {
      throw new Error(`PDF rasterization failed: ${err.stderr || err.message}`);
    }
  }

  // EPS/PS to PDF via Ghostscript
  if ((from === 'eps' || from === 'ps') && to === 'pdf') {
    try {
      await execFileAsync('/usr/bin/gs', [
        '-dSAFER',
        '-dBATCH',
        '-dNOPAUSE',
        '-sDEVICE=pdfwrite',
        `-sOutputFile=${outputPath}`,
        inputPath
      ]);
      return {
        data: fs.readFileSync(outputPath),
        mimeType: 'application/pdf',
        outputFilename: `${baseName}.pdf`,
        engineUsed: 'Ghostscript PDF Distiller'
      };
    } catch (err: any) {
      throw new Error(`Ghostscript distiller failed: ${err.stderr || err.message}`);
    }
  }

  // Any Image to PDF via PDF-Lib
  if (to === 'pdf') {
    let embedPath = inputPath;
    if (from !== 'png' && from !== 'jpg' && from !== 'jpeg') {
      embedPath = path.join(workspace, 'temp_embed.png');
      await execFileAsync('/usr/bin/convert', [inputPath + '[0]', embedPath]);
    }
    const imgBuf = fs.readFileSync(embedPath);
    const pdfDoc = await PDFDocument.create();
    let embeddedImg;
    if (from === 'jpg' || from === 'jpeg') {
      embeddedImg = await pdfDoc.embedJpg(imgBuf);
    } else {
      embeddedImg = await pdfDoc.embedPng(imgBuf);
    }
    const page = pdfDoc.addPage([embeddedImg.width, embeddedImg.height]);
    page.drawImage(embeddedImg, { x: 0, y: 0, width: embeddedImg.width, height: embeddedImg.height });
    const pdfBytes = await pdfDoc.save();
    return {
      data: Buffer.from(pdfBytes),
      mimeType: 'application/pdf',
      outputFilename: `${baseName}.pdf`,
      engineUsed: 'PDF-Lib Image to PDF Engine'
    };
  }

  return null;
}

/* ========================================================================= */
/* --- 10. RASTER & CAMERA RAW IMAGES (IMAGEMAGICK) ----------------------- */
/* ========================================================================= */
async function convertImageWithMagick(
  inputPath: string,
  from: string,
  to: string,
  baseName: string,
  options: ConversionOptions,
  workspace: string
): Promise<ConversionResult> {
  const outputPath = path.join(workspace, `output.${to}`);
  const args: string[] = [];

  // Frame 0 for multi-layer images (PSD, GIF, TIFF)
  args.push(inputPath + (['psd', 'psb', 'xcf', 'gif', 'tiff', 'tif'].includes(from) ? '[0]' : ''));

  // Rotate
  if (options.rotateDegrees) {
    args.push('-rotate', String(options.rotateDegrees));
  }

  // Resize
  if (options.resizeWidth && options.resizeHeight) {
    args.push('-resize', `${options.resizeWidth}x${options.resizeHeight}!`);
  } else if (options.resizeWidth) {
    args.push('-resize', `${options.resizeWidth}x`);
  } else if (options.resizePercent) {
    args.push('-resize', `${options.resizePercent}%`);
  }

  // Strip metadata if requested
  if (options.stripMetadata) {
    args.push('-strip');
  }

  // Background color (e.g. for transparent PNG -> JPG)
  if (to === 'jpg' || to === 'jpeg') {
    args.push('-background', options.backgroundColor || 'white', '-flatten');
  }

  // Quality
  if (options.quality) {
    args.push('-quality', String(options.quality));
  }

  args.push(outputPath);

  try {
    await execFileAsync('/usr/bin/convert', args, { timeout: 45000 });
  } catch (err: any) {
    throw new Error(`ImageMagick processing failed: ${err.stderr || err.message}`);
  }

  if (!fs.existsSync(outputPath)) {
    throw new Error(`Failed to generate output ${to.toUpperCase()} file`);
  }

  return {
    data: fs.readFileSync(outputPath),
    mimeType: getMimeType(to),
    outputFilename: `${baseName}.${to}`,
    engineUsed: 'ImageMagick Graphics Engine'
  };
}

function getMimeType(ext: string): string {
  const map: Record<string, string> = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    avif: 'image/avif',
    gif: 'image/gif',
    bmp: 'image/bmp',
    tiff: 'image/tiff',
    ico: 'image/x-icon',
    svg: 'image/svg+xml',
    pdf: 'application/pdf',
    mp4: 'video/mp4',
    webm: 'video/webm',
    mkv: 'video/x-matroska',
    avi: 'video/x-msvideo',
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    ogg: 'audio/ogg',
    flac: 'audio/flac',
    aac: 'audio/aac',
    m4a: 'audio/mp4',
    json: 'application/json',
    yaml: 'text/yaml',
    xml: 'application/xml',
    csv: 'text/csv',
    tsv: 'text/tab-separated-values',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    txt: 'text/plain',
    zip: 'application/zip',
    stl: 'model/stl',
    obj: 'model/obj',
    ply: 'model/ply'
  };
  return map[ext.toLowerCase()] || 'application/octet-stream';
}

import { PDFDocument, degrees } from 'pdf-lib';
import AdmZip from 'adm-zip';

export async function mergePdfs(pdfBuffers: Buffer[]): Promise<Buffer> {
  if (pdfBuffers.length === 0) {
    throw new Error('At least one PDF file must be provided to merge');
  }

  const mergedPdf = await PDFDocument.create();

  for (const buf of pdfBuffers) {
    const doc = await PDFDocument.load(buf, { ignoreEncryption: true });
    const copiedPages = await mergedPdf.copyPages(doc, doc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedBytes = await mergedPdf.save();
  return Buffer.from(mergedBytes);
}

export async function splitPdf(pdfBuffer: Buffer, baseName: string): Promise<Buffer> {
  const doc = await PDFDocument.load(pdfBuffer, { ignoreEncryption: true });
  const pageCount = doc.getPageCount();

  if (pageCount <= 1) {
    throw new Error('Document has only 1 page and cannot be split');
  }

  const zip = new AdmZip();

  for (let i = 0; i < pageCount; i++) {
    const singleDoc = await PDFDocument.create();
    const [page] = await singleDoc.copyPages(doc, [i]);
    singleDoc.addPage(page);
    const bytes = await singleDoc.save();
    const pageNum = String(i + 1).padStart(3, '0');
    zip.addFile(`${baseName}_page_${pageNum}.pdf`, Buffer.from(bytes));
  }

  return zip.toBuffer();
}

export async function extractPdfPages(
  pdfBuffer: Buffer,
  pageExpression: string // e.g. "1, 3-5"
): Promise<Buffer> {
  const doc = await PDFDocument.load(pdfBuffer, { ignoreEncryption: true });
  const totalPages = doc.getPageCount();

  const pagesToExtract = parsePageNumbers(pageExpression, totalPages);
  if (pagesToExtract.length === 0) {
    throw new Error(`No valid pages selected from expression: "${pageExpression}". Total pages: ${totalPages}`);
  }

  const extractedDoc = await PDFDocument.create();
  const copiedPages = await extractedDoc.copyPages(doc, pagesToExtract);
  copiedPages.forEach(p => extractedDoc.addPage(p));

  const bytes = await extractedDoc.save();
  return Buffer.from(bytes);
}

export async function rotatePdf(pdfBuffer: Buffer, rotationDeg: number): Promise<Buffer> {
  const doc = await PDFDocument.load(pdfBuffer, { ignoreEncryption: true });
  const pages = doc.getPages();
  pages.forEach(p => {
    const current = p.getRotation().angle;
    p.setRotation(degrees((current + rotationDeg) % 360));
  });
  const bytes = await doc.save();
  return Buffer.from(bytes);
}

function parsePageNumbers(expr: string, maxPages: number): number[] {
  const indices = new Set<number>();
  const parts = expr.split(',');

  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [startStr, endStr] = trimmed.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        for (let i = Math.max(1, start); i <= Math.min(maxPages, end); i++) {
          indices.add(i - 1);
        }
      }
    } else {
      const p = parseInt(trimmed, 10);
      if (!isNaN(p) && p >= 1 && p <= maxPages) {
        indices.add(p - 1);
      }
    }
  }

  return Array.from(indices).sort((a, b) => a - b);
}

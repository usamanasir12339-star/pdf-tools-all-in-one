import AdmZip from 'adm-zip';
import path from 'path';

export interface ArchiveFileEntry {
  filename: string;
  size: number;
  compressedSize?: number;
  isDirectory: boolean;
}

export async function inspectArchive(buffer: Buffer, filename: string): Promise<ArchiveFileEntry[]> {
  const ext = path.extname(filename).toLowerCase();
  if (['.zip', '.wbpz', '.jar', '.cbz', '.epub', '.hwpx', '.docx', '.xlsx'].includes(ext)) {
    const zip = new AdmZip(buffer);
    const entries = zip.getEntries();
    return entries.map(e => ({
      filename: e.entryName,
      size: e.header.size,
      compressedSize: e.header.compressedSize,
      isDirectory: e.isDirectory
    }));
  }
  return [{
    filename,
    size: buffer.length,
    isDirectory: false
  }];
}

export async function extractArchiveFiles(
  buffer: Buffer,
  filename: string
): Promise<{ filename: string; size: number; data: Buffer }[]> {
  const ext = path.extname(filename).toLowerCase();
  if (['.zip', '.wbpz', '.cbz', '.jar', '.epub', '.hwpx'].includes(ext)) {
    const zip = new AdmZip(buffer);
    const entries = zip.getEntries();

    // Archive bomb protection: max 500 files or 150MB total uncompressed
    let totalSize = 0;
    const maxTotalSize = 150 * 1024 * 1024;
    const maxCount = 500;

    if (entries.length > maxCount) {
      throw new Error(`Archive exceeds maximum allowed entry count (${maxCount})`);
    }

    const files: { filename: string; size: number; data: Buffer }[] = [];
    for (const entry of entries) {
      if (entry.isDirectory) continue;
      // Protect against zip slip
      const safePath = entry.entryName.replace(/\.\./g, '').replace(/^\/+/, '');
      const entryData = entry.getData();
      totalSize += entryData.length;

      if (totalSize > maxTotalSize) {
        throw new Error('Archive bomb protection: uncompressed size exceeds 150MB limit');
      }

      files.push({
        filename: safePath,
        size: entryData.length,
        data: entryData
      });
    }
    return files;
  }
  throw new Error(`Extraction currently supports .ZIP, .CBZ, .JAR, .EPUB, .HWPX formats`);
}

export async function createArchive(
  files: { filename: string; data: Buffer }[],
  _format: 'zip' | 'tar' = 'zip',
  _compressionLevel: number = 6
): Promise<Buffer> {
  const zip = new AdmZip();
  for (const file of files) {
    const cleanName = path.basename(file.filename);
    zip.addFile(cleanName, file.data);
  }
  return zip.toBuffer();
}

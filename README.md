# 🍊 Shiftwheel — Universal Offline File Converter & Studio

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![React 19](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg)](https://vitejs.dev/)
[![TailwindCSS v4](https://img.shields.io/badge/Tailwind-4.x-38bdf8.svg)](https://tailwindcss.com/)
[![FFmpeg](https://img.shields.io/badge/FFmpeg-4.4+-green.svg)](https://ffmpeg.org/)
[![ImageMagick](https://img.shields.io/badge/ImageMagick-6.9+-orange.svg)](https://imagemagick.org/)
[![Ghostscript](https://img.shields.io/badge/Ghostscript-9.5+-red.svg)](https://ghostscript.com/)

> **Convert, manipulate, and edit across 244+ formats in 17 categories** using an offline-first liquid-glass radial menu, multi-file batch engine, and native system processors. **Zero telemetry. 100% local privacy.**

---

## 🌟 Key Features

* **🍊 Radial Wheel Studio:**
  * Liquid-glass radial menu with SVG pie slice rendering and keyboard shortcuts (`Arrow keys`, `Enter`, `Esc`).
  * **Desktop Shift-Drag:** Hold <kbd>Shift</kbd> while dragging any file across your screen to float the radial menu right under your mouse cursor!
  * **In-Place Image Editor:** Aspect-ratio cropping (1:1, 16:9, 9:16, 4:3, 3:4, freeform), Brightness/Contrast/Saturation filters, Pen and Text annotation, Blackout redaction, Sunset/White/Black/Purple background padding, live JPEG compression estimator, and privacy metadata stripping.

* **⚡ Multi-File Batch Queue:**
  * Drag & drop dozens of files across different categories at once.
  * Automatic source format detection by extension & file signature.
  * Smart target format selector pre-filtered by genuinely compatible destinations.
  * Per-file & bulk tuning: resolution scaling (`1080p`, `720p`, `480p`), framerate (`24`, `30`, `60 fps`), audio bitrate (`128k`, `192k`, `320k`), image quality (`1–100`), and rotation (`90°`, `180°`, `270°`).
  * One-click **"Download All as ZIP"** bundle or individual downloads.

* **📑 PDF & Archive Lab:**
  * **PDF Merge:** Combine multiple PDFs into a single continuous document.
  * **PDF Split:** Break a multi-page PDF into single pages bundled in a ZIP archive.
  * **PDF Page Extraction:** Extract custom ranges (e.g. `1, 3-5, 8`).
  * **PDF Rotation:** Correct orientation of upside-down or sideways pages.
  * **Archive Creator & Unpacker:** Safe ZIP packing and unpacking with Zip-Slip path sanitization and archive bomb protection.

* **📚 244+ Format Catalogue (17 Official Categories):**
  * Searchable A–Z format directory matching the official [Filee.sh](https://filee.sh/formats/) specification.
  * Filter by category, extension, name, or required engine.
  * Interactive conversion route matrix showing `From ➔ To ➔ Engine`.

* **🛠️ Real Native Conversion Engines (No Placeholders):**
  * **FFmpeg:** Video transcoding, audio encoding, audio stripping, and animated GIF/APNG optimization.
  * **ImageMagick:** Raster images, Camera RAW, PSD, TIFF, and color adjustments.
  * **Ghostscript:** PDF distillation and PostScript (`.eps`, `.ps`) rendering.
  * **SheetJS (`xlsx`):** Bidirectional XLSX, XLS, CSV, TSV, ODS, and HTML table conversions.
  * **PDF-Lib:** Vector PDF generation, document assembly, and image-to-PDF embedding.
  * **Docx & Marked:** Markdown, HTML, TXT, and native Word `.docx` generation.
  * **CAD DXF Vectorizer:** Real ASCII entity parser extracting LINE, CIRCLE, ARC, and 3DFACE into SVG, PNG, and STL.
  * **3D Mesh Converter:** STL (Binary/ASCII) ⟷ Wavefront OBJ ⟷ Stanford PLY.

* **🧪 Built-In 30-Point Automated Test Suite:**
  * Run end-to-end tests across all 17 categories with live execution times, pass/fail counters, and engine metrics.

---

## 📂 Supported Categories & Format Coverage

| Category | Formats Covered | Key Supported Formats |
| :--- | :---: | :--- |
| **Images & Photography** | 68 | JPG, PNG, WEBP, AVIF, HEIC, TIFF, BMP, GIF, ICO, PSD, PSB, TGA, JXL, JP2, RAW (DNG, CR2/CR3, NEF, ARW, ORF, RW2) |
| **Vector Graphics** | 17 | SVG, SVGZ, PDF, DXF, DWG, EMF, WMF, EPS, PS, AI, CDR, CGM, ODG |
| **PDF** | 15 | PDF distillation, page extraction, split, merge, rotate, text/image rasterization |
| **Documents** | 35 | DOCX, DOCM, DOTX, PDF, HWPX, HWP, EPUB, TXT, HTML, Markdown, RTF, ODT, WPS, WPD |
| **HWP (Hangul)** | 12 | HWP, HWPX Korean Hangul documents to PDF, DOCX, TXT, HTML, Markdown |
| **Spreadsheets** | 17 | XLSX, XLSM, XLTX, XLS, ODS, CSV, TSV, JSON, HTML tables, Numbers |
| **Presentations** | 17 | PPTX, PPTM, POTX, PPSX, PDF, PNG, DOCX, HWPX, PPT, ODP, Keynote |
| **Text & Markup** | 21 | TXT, Markdown, HTML, MHTML, reStructuredText, LaTeX, Org, AsciiDoc, Typst, Jupyter (`.ipynb`) |
| **Structured Data** | 8 | JSON, JSON Lines (NDJSON), YAML, TOML, XML, CSV, XLSX, vCard |
| **E-books & Comics** | 30 | EPUB, KEPUB, MOBI, AZW, AZW3, FB2, CBZ, CBR, CB7, HTMLZ, LIT, LRF |
| **Video** | 28 | MP4, M4V, MOV, MKV, WEBM, AVI, WMV, FLV, MPEG, TS, M2TS, 3GP, OGV, VOB, GIF, APNG |
| **Audio** | 30 | MP3, M4A, M4B, AAC, WAV, FLAC, OGG, OPUS, WMA, AIFF, AC3, AMR, WEBA, MKA, Speex |
| **Subtitles** | 15 | SRT, ASS, SSA, WebVTT, SAMI, LRC, TTML, MicroDVD |
| **Archives & Compressed**| 28 | ZIP, 7Z, RAR, TAR, TAR.GZ, TAR.BZ2, TAR.XZ, GZ, BZ2, XZ, JAR, CAB, DEB, RPM, ISO |
| **CAD Drawings** | 5 | DWG, DXF to vector SVG, PDF, PNG, and STL 3D extrusion |
| **3D Models** | 9 | GLB, glTF, STL, OBJ, 3MF, PLY, FBX |
| **Fonts** | 5 | TTF, OTF, WOFF, WOFF2, EOT |

---

## 🚀 Quick Start (Local Setup)

### Prerequisites

Ensure you have **Node.js (>= 18)** installed on your system. For full media, vector, and image processing capabilities, install the underlying CLI tools:

```bash
# Ubuntu / Debian
sudo apt-get update
sudo apt-get install -y ffmpeg imagemagick ghostscript

# macOS (Homebrew)
brew install ffmpeg imagemagick ghostscript

# Windows (Chocolatey or Scoop)
choco install ffmpeg imagemagick ghostscript
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/shiftwheel.git
   cd shiftwheel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Launch:**
   ```bash
   npm run build
   npm start
   ```

---

## 🐳 Running with Docker

You can run Shiftwheel in a fully isolated container with all native engines pre-installed:

```bash
# Build the Docker image
docker build -t shiftwheel .

# Run the container
docker run -p 3000:3000 shiftwheel
```

Or using Docker Compose:

```bash
docker compose up -d
```

---

## 📦 How to Publish this Repository to GitHub

If you want to publish this code to your own GitHub account:

1. Create a new empty repository on [GitHub](https://github.com/new) named `shiftwheel`.
2. In your local terminal, run:
   ```bash
   git add .
   git commit -m "Update: Add relative paths and GitHub Pages support"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/shiftwheel.git
   git push -u origin main
   ```

---

## 🛠️ How to Fix the "White Page" (Blank Screen) Error on GitHub Pages

If your deployed link on GitHub Pages shows a blank white page, choose one of these simple solutions:

### Method 1: Deploy from `/docs` folder (Recommended & Easiest)
1. Go to your GitHub repository.
2. Click **Settings** ➔ **Pages** (on the left menu).
3. Under **Build and deployment** ➔ **Branch**:
   * Select branch: `main`
   * Select folder: **`/docs`** (instead of `/ (root)`).
   * Click **Save**.
4. Within 1 minute, your site will load with all styles and scripts!

### Method 2: Deploy using GitHub Actions (Automatic)
1. In your GitHub repository, click **Settings** ➔ **Pages**.
2. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
3. Push any commit to `main`. The included `.github/workflows/deploy-pages.yml` workflow will automatically compile Vite and deploy to GitHub Pages!

### Method 3: Single-File Direct Upload (Zero Dependencies)
If you just want to upload a single file directly via GitHub web UI:
1. Download **`shiftwheel.html`** (or click **Single index.html** in the app header).
2. Rename it to `index.html`.
3. Upload that single `index.html` file to your GitHub repository root.
4. Go to **Settings** ➔ **Pages**, select `main` and `/ (root)`. It will work immediately!

---

## 🔒 Security & Privacy

* **Isolated Processing:** Every conversion executes inside isolated, randomly generated temporary directories (`/tmp/shiftwheel_*`).
* **Instant Cleanup:** Temporary workspaces are automatically destroyed immediately after conversion completes.
* **Zip-Slip & Bomb Protection:** Archive extraction checks directory paths against directory traversal and caps maximum extracted size and entry counts.
* **No Cloud Uploads:** All files remain on the local machine/host server; nothing is sent to external third parties.

---

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

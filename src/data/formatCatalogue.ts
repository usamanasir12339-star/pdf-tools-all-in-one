// Generated from official Filee catalogue reference (https://filee.sh/formats/)
// Complete 17 categories with full format registry and conversion compatibility matrix

export interface FormatRoute {
  from: { name: string; exts: string[]; rawExts: string }[];
  to: { name: string; exts: string[]; rawExts: string }[];
  engine: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  officialTitle: string;
  officialCount: string;
  icon: string;
  intro: string;
  routes: FormatRoute[];
}

export interface FormatItem {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  exts: string[];
  rawExts: string;
  engine: string;
  convertsTo: string[];
  status?: "ready" | "optional_engine";
}

export const CATEGORIES: CategoryInfo[] = [
  {
    "id": "images",
    "name": "Images & Photography",
    "officialTitle": "Images",
    "officialCount": "38 formats",
    "icon": "Image",
    "intro": "Photos and graphics, including iPhone HEIC and Live Photos, Photoshop PSD, camera RAW from all major brands, animated APNG, DICOM and the HDR screenshots of Windows (JPEG XR). Resize, rotate, set quality and DPI or strip metadata while converting, or trace a picture into an SVG.",
    "routes": [
      {
        "from": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "HEIC/HEIF",
            "exts": [
              ".heic",
              ".heif",
              ".hif"
            ],
            "rawExts": ".heic .heif .hif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "PSB",
            "exts": [
              ".psb"
            ],
            "rawExts": ".psb"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM/PGM/PBM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "XCF",
            "exts": [
              ".xcf"
            ],
            "rawExts": "GIMP — .xcf"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          },
          {
            "name": "DICOM",
            "exts": [
              ".dcm",
              ".dicom"
            ],
            "rawExts": "medical images — .dcm .dicom"
          },
          {
            "name": "OpenEXR",
            "exts": [
              ".exr"
            ],
            "rawExts": ".exr"
          },
          {
            "name": "Radiance HDR",
            "exts": [
              ".hdr"
            ],
            "rawExts": ".hdr"
          },
          {
            "name": "Photo CD",
            "exts": [
              ".pcd"
            ],
            "rawExts": "Kodak — .pcd"
          }
        ],
        "to": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          }
        ],
        "engine": "Built inImageMagick"
      },
      {
        "from": [
          {
            "name": "DNG",
            "exts": [
              ".dng"
            ],
            "rawExts": "Adobe DNG (Leica, Pentax, phones) — .dng"
          },
          {
            "name": "CR2",
            "exts": [
              ".cr2"
            ],
            "rawExts": "Canon — .cr2"
          },
          {
            "name": "CR3",
            "exts": [
              ".cr3"
            ],
            "rawExts": "Canon — .cr3"
          },
          {
            "name": "CRW",
            "exts": [
              ".crw"
            ],
            "rawExts": "Canon — .crw"
          },
          {
            "name": "NEF",
            "exts": [
              ".nef"
            ],
            "rawExts": "Nikon — .nef"
          },
          {
            "name": "NRW",
            "exts": [
              ".nrw"
            ],
            "rawExts": "Nikon Coolpix — .nrw"
          },
          {
            "name": "ARW",
            "exts": [
              ".arw"
            ],
            "rawExts": "Sony — .arw"
          },
          {
            "name": "SRF",
            "exts": [
              ".srf"
            ],
            "rawExts": "Sony — .srf"
          },
          {
            "name": "SR2",
            "exts": [
              ".sr2"
            ],
            "rawExts": "Sony — .sr2"
          },
          {
            "name": "ORF",
            "exts": [
              ".orf"
            ],
            "rawExts": "Olympus / OM System — .orf"
          },
          {
            "name": "RW2",
            "exts": [
              ".rw2"
            ],
            "rawExts": "Panasonic — .rw2"
          },
          {
            "name": "RAF",
            "exts": [
              ".raf"
            ],
            "rawExts": "Fujifilm — .raf"
          },
          {
            "name": "PEF",
            "exts": [
              ".pef"
            ],
            "rawExts": "Pentax — .pef"
          },
          {
            "name": "SRW",
            "exts": [
              ".srw"
            ],
            "rawExts": "Samsung — .srw"
          },
          {
            "name": "X3F",
            "exts": [
              ".x3f"
            ],
            "rawExts": "Sigma — .x3f"
          },
          {
            "name": "3FR",
            "exts": [
              ".3fr"
            ],
            "rawExts": "Hasselblad — .3fr"
          },
          {
            "name": "ERF",
            "exts": [
              ".erf"
            ],
            "rawExts": "Epson — .erf"
          },
          {
            "name": "MOS",
            "exts": [
              ".mos"
            ],
            "rawExts": "Leaf — .mos"
          },
          {
            "name": "MRW",
            "exts": [
              ".mrw"
            ],
            "rawExts": "Minolta — .mrw"
          },
          {
            "name": "DCR",
            "exts": [
              ".dcr"
            ],
            "rawExts": "Kodak — .dcr"
          },
          {
            "name": "KDC",
            "exts": [
              ".kdc"
            ],
            "rawExts": "Kodak — .kdc"
          },
          {
            "name": "IIQ",
            "exts": [
              ".iiq"
            ],
            "rawExts": "Phase One — .iiq"
          },
          {
            "name": "FFF",
            "exts": [
              ".fff"
            ],
            "rawExts": "Hasselblad — .fff"
          },
          {
            "name": "MEF",
            "exts": [
              ".mef"
            ],
            "rawExts": "Mamiya — .mef"
          },
          {
            "name": "RWL",
            "exts": [
              ".rwl"
            ],
            "rawExts": "Leica — .rwl"
          }
        ],
        "to": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          }
        ],
        "engine": "Built inImageMagick"
      },
      {
        "from": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "HEIC/HEIF",
            "exts": [
              ".heic",
              ".heif",
              ".hif"
            ],
            "rawExts": ".heic .heif .hif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "PSB",
            "exts": [
              ".psb"
            ],
            "rawExts": ".psb"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM/PGM/PBM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "XCF",
            "exts": [
              ".xcf"
            ],
            "rawExts": "GIMP — .xcf"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          },
          {
            "name": "DICOM",
            "exts": [
              ".dcm",
              ".dicom"
            ],
            "rawExts": "medical images — .dcm .dicom"
          },
          {
            "name": "OpenEXR",
            "exts": [
              ".exr"
            ],
            "rawExts": ".exr"
          },
          {
            "name": "Radiance HDR",
            "exts": [
              ".hdr"
            ],
            "rawExts": ".hdr"
          },
          {
            "name": "Photo CD",
            "exts": [
              ".pcd"
            ],
            "rawExts": "Kodak — .pcd"
          },
          {
            "name": "DNG",
            "exts": [
              ".dng"
            ],
            "rawExts": "Adobe DNG (Leica, Pentax, phones) — .dng"
          },
          {
            "name": "CR2",
            "exts": [
              ".cr2"
            ],
            "rawExts": "Canon — .cr2"
          },
          {
            "name": "CR3",
            "exts": [
              ".cr3"
            ],
            "rawExts": "Canon — .cr3"
          },
          {
            "name": "CRW",
            "exts": [
              ".crw"
            ],
            "rawExts": "Canon — .crw"
          },
          {
            "name": "NEF",
            "exts": [
              ".nef"
            ],
            "rawExts": "Nikon — .nef"
          },
          {
            "name": "NRW",
            "exts": [
              ".nrw"
            ],
            "rawExts": "Nikon Coolpix — .nrw"
          },
          {
            "name": "ARW",
            "exts": [
              ".arw"
            ],
            "rawExts": "Sony — .arw"
          },
          {
            "name": "SRF",
            "exts": [
              ".srf"
            ],
            "rawExts": "Sony — .srf"
          },
          {
            "name": "SR2",
            "exts": [
              ".sr2"
            ],
            "rawExts": "Sony — .sr2"
          },
          {
            "name": "ORF",
            "exts": [
              ".orf"
            ],
            "rawExts": "Olympus / OM System — .orf"
          },
          {
            "name": "RW2",
            "exts": [
              ".rw2"
            ],
            "rawExts": "Panasonic — .rw2"
          },
          {
            "name": "RAF",
            "exts": [
              ".raf"
            ],
            "rawExts": "Fujifilm — .raf"
          },
          {
            "name": "PEF",
            "exts": [
              ".pef"
            ],
            "rawExts": "Pentax — .pef"
          },
          {
            "name": "SRW",
            "exts": [
              ".srw"
            ],
            "rawExts": "Samsung — .srw"
          },
          {
            "name": "X3F",
            "exts": [
              ".x3f"
            ],
            "rawExts": "Sigma — .x3f"
          },
          {
            "name": "3FR",
            "exts": [
              ".3fr"
            ],
            "rawExts": "Hasselblad — .3fr"
          },
          {
            "name": "ERF",
            "exts": [
              ".erf"
            ],
            "rawExts": "Epson — .erf"
          },
          {
            "name": "MOS",
            "exts": [
              ".mos"
            ],
            "rawExts": "Leaf — .mos"
          },
          {
            "name": "MRW",
            "exts": [
              ".mrw"
            ],
            "rawExts": "Minolta — .mrw"
          },
          {
            "name": "DCR",
            "exts": [
              ".dcr"
            ],
            "rawExts": "Kodak — .dcr"
          },
          {
            "name": "KDC",
            "exts": [
              ".kdc"
            ],
            "rawExts": "Kodak — .kdc"
          },
          {
            "name": "IIQ",
            "exts": [
              ".iiq"
            ],
            "rawExts": "Phase One — .iiq"
          },
          {
            "name": "FFF",
            "exts": [
              ".fff"
            ],
            "rawExts": "Hasselblad — .fff"
          },
          {
            "name": "MEF",
            "exts": [
              ".mef"
            ],
            "rawExts": "Mamiya — .mef"
          },
          {
            "name": "RWL",
            "exts": [
              ".rwl"
            ],
            "rawExts": "Leica — .rwl"
          }
        ],
        "to": [
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "PSB",
            "exts": [
              ".psb"
            ],
            "rawExts": ".psb"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM/PGM/PBM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "XCF",
            "exts": [
              ".xcf"
            ],
            "rawExts": "GIMP — .xcf"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          },
          {
            "name": "DICOM",
            "exts": [
              ".dcm",
              ".dicom"
            ],
            "rawExts": "medical images — .dcm .dicom"
          },
          {
            "name": "OpenEXR",
            "exts": [
              ".exr"
            ],
            "rawExts": ".exr"
          },
          {
            "name": "Radiance HDR",
            "exts": [
              ".hdr"
            ],
            "rawExts": ".hdr"
          },
          {
            "name": "Photo CD",
            "exts": [
              ".pcd"
            ],
            "rawExts": "Kodak — .pcd"
          },
          {
            "name": "DNG",
            "exts": [
              ".dng"
            ],
            "rawExts": "Adobe DNG (Leica, Pentax, phones) — .dng"
          },
          {
            "name": "CR2",
            "exts": [
              ".cr2"
            ],
            "rawExts": "Canon — .cr2"
          },
          {
            "name": "CR3",
            "exts": [
              ".cr3"
            ],
            "rawExts": "Canon — .cr3"
          },
          {
            "name": "CRW",
            "exts": [
              ".crw"
            ],
            "rawExts": "Canon — .crw"
          },
          {
            "name": "NEF",
            "exts": [
              ".nef"
            ],
            "rawExts": "Nikon — .nef"
          },
          {
            "name": "NRW",
            "exts": [
              ".nrw"
            ],
            "rawExts": "Nikon Coolpix — .nrw"
          },
          {
            "name": "ARW",
            "exts": [
              ".arw"
            ],
            "rawExts": "Sony — .arw"
          },
          {
            "name": "SRF",
            "exts": [
              ".srf"
            ],
            "rawExts": "Sony — .srf"
          },
          {
            "name": "SR2",
            "exts": [
              ".sr2"
            ],
            "rawExts": "Sony — .sr2"
          },
          {
            "name": "ORF",
            "exts": [
              ".orf"
            ],
            "rawExts": "Olympus / OM System — .orf"
          },
          {
            "name": "RW2",
            "exts": [
              ".rw2"
            ],
            "rawExts": "Panasonic — .rw2"
          },
          {
            "name": "RAF",
            "exts": [
              ".raf"
            ],
            "rawExts": "Fujifilm — .raf"
          },
          {
            "name": "PEF",
            "exts": [
              ".pef"
            ],
            "rawExts": "Pentax — .pef"
          },
          {
            "name": "SRW",
            "exts": [
              ".srw"
            ],
            "rawExts": "Samsung — .srw"
          },
          {
            "name": "X3F",
            "exts": [
              ".x3f"
            ],
            "rawExts": "Sigma — .x3f"
          },
          {
            "name": "3FR",
            "exts": [
              ".3fr"
            ],
            "rawExts": "Hasselblad — .3fr"
          },
          {
            "name": "ERF",
            "exts": [
              ".erf"
            ],
            "rawExts": "Epson — .erf"
          },
          {
            "name": "MOS",
            "exts": [
              ".mos"
            ],
            "rawExts": "Leaf — .mos"
          },
          {
            "name": "MRW",
            "exts": [
              ".mrw"
            ],
            "rawExts": "Minolta — .mrw"
          },
          {
            "name": "DCR",
            "exts": [
              ".dcr"
            ],
            "rawExts": "Kodak — .dcr"
          },
          {
            "name": "KDC",
            "exts": [
              ".kdc"
            ],
            "rawExts": "Kodak — .kdc"
          },
          {
            "name": "IIQ",
            "exts": [
              ".iiq"
            ],
            "rawExts": "Phase One — .iiq"
          },
          {
            "name": "FFF",
            "exts": [
              ".fff"
            ],
            "rawExts": "Hasselblad — .fff"
          },
          {
            "name": "MEF",
            "exts": [
              ".mef"
            ],
            "rawExts": "Mamiya — .mef"
          },
          {
            "name": "RWL",
            "exts": [
              ".rwl"
            ],
            "rawExts": "Leica — .rwl"
          },
          {
            "name": "JPEG XR",
            "exts": [
              ".jxr",
              ".wdp",
              ".hdp"
            ],
            "rawExts": "Windows HDR screenshots — .jxr .wdp .hdp"
          }
        ],
        "to": [
          {
            "name": "HEIC",
            "exts": [
              ".heic",
              ".heif",
              ".hif"
            ],
            "rawExts": ".heic .heif .hif"
          }
        ],
        "engine": "FFmpeg"
      },
      {
        "from": [
          {
            "name": "JPEG XR",
            "exts": [
              ".jxr",
              ".wdp",
              ".hdp"
            ],
            "rawExts": "Windows HDR screenshots — .jxr .wdp .hdp"
          }
        ],
        "to": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          },
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          }
        ],
        "engine": "Built inWindows Imaging Component"
      },
      {
        "from": [
          {
            "name": "Live Photo (LIVP)",
            "exts": [
              ".livp"
            ],
            "rawExts": "iPhone Live Photo from iCloud — .livp"
          }
        ],
        "to": [
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "WEBP",
            "exts": [
              ".webp"
            ],
            "rawExts": ".webp"
          },
          {
            "name": "AVIF",
            "exts": [
              ".avif"
            ],
            "rawExts": ".avif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          },
          {
            "name": "BMP",
            "exts": [
              ".bmp",
              ".dib"
            ],
            "rawExts": ".bmp .dib"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "ICO",
            "exts": [
              ".ico"
            ],
            "rawExts": ".ico"
          },
          {
            "name": "PSD",
            "exts": [
              ".psd"
            ],
            "rawExts": ".psd"
          },
          {
            "name": "TGA",
            "exts": [
              ".tga",
              ".icb",
              ".vda",
              ".vst"
            ],
            "rawExts": ".tga .icb .vda .vst"
          },
          {
            "name": "PPM",
            "exts": [
              ".ppm",
              ".pgm",
              ".pbm",
              ".pnm"
            ],
            "rawExts": ".ppm .pgm .pbm .pnm"
          },
          {
            "name": "JPEG XL",
            "exts": [
              ".jxl"
            ],
            "rawExts": ".jxl"
          },
          {
            "name": "JPEG 2000",
            "exts": [
              ".jp2",
              ".j2k",
              ".jpf",
              ".jpx"
            ],
            "rawExts": ".jp2 .j2k .jpf .jpx"
          },
          {
            "name": "ICNS",
            "exts": [
              ".icns"
            ],
            "rawExts": ".icns"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MNG",
            "exts": [
              ".mng"
            ],
            "rawExts": ".mng"
          },
          {
            "name": "QOI",
            "exts": [
              ".qoi"
            ],
            "rawExts": ".qoi"
          },
          {
            "name": "DDS",
            "exts": [
              ".dds"
            ],
            "rawExts": "DirectDraw Surface — .dds"
          },
          {
            "name": "PCX",
            "exts": [
              ".pcx"
            ],
            "rawExts": ".pcx"
          },
          {
            "name": "CUR",
            "exts": [
              ".cur"
            ],
            "rawExts": "Windows cursor — .cur"
          },
          {
            "name": "XPM",
            "exts": [
              ".xpm"
            ],
            "rawExts": ".xpm"
          },
          {
            "name": "XBM",
            "exts": [
              ".xbm"
            ],
            "rawExts": ".xbm"
          },
          {
            "name": "WBMP",
            "exts": [
              ".wbmp"
            ],
            "rawExts": ".wbmp"
          },
          {
            "name": "PAM",
            "exts": [
              ".pam"
            ],
            "rawExts": ".pam"
          },
          {
            "name": "PFM",
            "exts": [
              ".pfm"
            ],
            "rawExts": ".pfm"
          },
          {
            "name": "SGI",
            "exts": [
              ".sgi",
              ".rgb",
              ".rgba",
              ".bw"
            ],
            "rawExts": ".sgi .rgb .rgba .bw"
          },
          {
            "name": "Sun Raster",
            "exts": [
              ".ras",
              ".sun"
            ],
            "rawExts": ".ras .sun"
          },
          {
            "name": "MIFF",
            "exts": [
              ".miff"
            ],
            "rawExts": "ImageMagick — .miff"
          }
        ],
        "engine": "Built inImageMagick"
      },
      {
        "from": [
          {
            "name": "Live Photo (LIVP)",
            "exts": [
              ".livp"
            ],
            "rawExts": "iPhone Live Photo from iCloud — .livp"
          }
        ],
        "to": [
          {
            "name": "MP4",
            "exts": [
              ".mp4"
            ],
            "rawExts": ".mp4"
          },
          {
            "name": "MOV",
            "exts": [
              ".mov",
              ".qt"
            ],
            "rawExts": ".mov .qt"
          }
        ],
        "engine": "FFmpeg"
      }
    ]
  },
  {
    "id": "vector",
    "name": "Vector Graphics",
    "officialTitle": "Vector graphics",
    "officialCount": "12 formats",
    "icon": "PenTool",
    "intro": "SVG, Windows metafiles, Illustrator, EPS/PostScript and drawings from CorelDRAW, Visio and LibreOffice Draw. SVG also becomes DXF or DWG for CAD.",
    "routes": [
      {
        "from": [
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          },
          {
            "name": "SVGZ",
            "exts": [
              ".svgz"
            ],
            "rawExts": ".svgz"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          },
          {
            "name": "SVGZ",
            "exts": [
              ".svgz"
            ],
            "rawExts": ".svgz"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          },
          {
            "name": "SVGZ",
            "exts": [
              ".svgz"
            ],
            "rawExts": ".svgz"
          }
        ],
        "to": [
          {
            "name": "DXF",
            "exts": [
              ".dxf"
            ],
            "rawExts": ".dxf"
          },
          {
            "name": "DWG",
            "exts": [
              ".dwg"
            ],
            "rawExts": ".dwg"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          }
        ],
        "to": [
          {
            "name": "EMF",
            "exts": [
              ".emf"
            ],
            "rawExts": ".emf"
          },
          {
            "name": "WMF",
            "exts": [
              ".wmf"
            ],
            "rawExts": ".wmf"
          },
          {
            "name": "ODG",
            "exts": [
              ".odg"
            ],
            "rawExts": "LibreOffice Draw — .odg"
          }
        ],
        "engine": "LibreOffice"
      },
      {
        "from": [
          {
            "name": "EMF",
            "exts": [
              ".emf"
            ],
            "rawExts": ".emf"
          },
          {
            "name": "WMF",
            "exts": [
              ".wmf"
            ],
            "rawExts": ".wmf"
          }
        ],
        "to": [
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "AI",
            "exts": [
              ".ai"
            ],
            "rawExts": "Adobe Illustrator — .ai"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "EPS",
            "exts": [
              ".eps",
              ".epsf",
              ".epsi"
            ],
            "rawExts": ".eps .epsf .epsi"
          },
          {
            "name": "PS",
            "exts": [
              ".ps"
            ],
            "rawExts": "PostScript — .ps"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          }
        ],
        "engine": "Ghostscript"
      },
      {
        "from": [
          {
            "name": "CDR",
            "exts": [
              ".cdr"
            ],
            "rawExts": "CorelDRAW — .cdr"
          },
          {
            "name": "CGM",
            "exts": [
              ".cgm"
            ],
            "rawExts": ".cgm"
          },
          {
            "name": "VSD/VSDX",
            "exts": [
              ".vsd",
              ".vsdx"
            ],
            "rawExts": "Microsoft Visio — .vsd .vsdx"
          },
          {
            "name": "ODG",
            "exts": [
              ".odg"
            ],
            "rawExts": "LibreOffice Draw — .odg"
          },
          {
            "name": "FODG",
            "exts": [
              ".fodg"
            ],
            "rawExts": "flat OpenDocument drawing — .fodg"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          }
        ],
        "engine": "LibreOffice"
      }
    ]
  },
  {
    "id": "pdf",
    "name": "PDF",
    "officialTitle": "PDF",
    "officialCount": "1 format",
    "icon": "FileText",
    "intro": "Turn PDFs into images, editable Word or HWPX documents, PowerPoint slides, text or a comic archive, and merge, split, compress or pick pages.",
    "routes": [
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "TIFF",
            "exts": [
              ".tiff",
              ".tif"
            ],
            "rawExts": ".tiff .tif"
          }
        ],
        "engine": "Built inPDFium"
      },
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "CBZ",
            "exts": [
              ".cbz"
            ],
            "rawExts": ".cbz"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [],
        "engine": "Built inPDFsharp"
      },
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "EPS",
            "exts": [
              ".eps",
              ".epsf",
              ".epsi"
            ],
            "rawExts": ".eps .epsf .epsi"
          },
          {
            "name": "PS",
            "exts": [
              ".ps"
            ],
            "rawExts": "PostScript — .ps"
          }
        ],
        "engine": "Ghostscript"
      },
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          }
        ],
        "engine": "LibreOffice"
      }
    ]
  },
  {
    "id": "documents",
    "name": "Documents",
    "officialTitle": "Documents",
    "officialCount": "24 formats",
    "icon": "Files",
    "intro": "Word documents without Microsoft Office, Chinese OFD e-invoices, older and rare word-processor formats with the optional LibreOffice engine, and saved e-mails (EML and Outlook MSG).",
    "routes": [
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "DOCM",
            "exts": [
              ".docm"
            ],
            "rawExts": ".docm"
          },
          {
            "name": "DOTX",
            "exts": [
              ".dotx"
            ],
            "rawExts": ".dotx"
          },
          {
            "name": "DOTM",
            "exts": [
              ".dotm"
            ],
            "rawExts": ".dotm"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "HWP",
            "exts": [
              ".hwp"
            ],
            "rawExts": ".hwp"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          }
        ],
        "to": [
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          }
        ],
        "engine": "Pandoc"
      },
      {
        "from": [
          {
            "name": "OFD",
            "exts": [
              ".ofd"
            ],
            "rawExts": "Chinese e-invoices and official documents (GB/T 33190) — .ofd"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "DOC",
            "exts": [
              ".doc"
            ],
            "rawExts": ".doc"
          },
          {
            "name": "DOT",
            "exts": [
              ".dot"
            ],
            "rawExts": "Word 97–2003 template — .dot"
          },
          {
            "name": "ODT",
            "exts": [
              ".odt"
            ],
            "rawExts": "OpenDocument — .odt"
          },
          {
            "name": "FODT",
            "exts": [
              ".fodt"
            ],
            "rawExts": "flat OpenDocument text — .fodt"
          },
          {
            "name": "OTT",
            "exts": [
              ".ott"
            ],
            "rawExts": "OpenDocument template — .ott"
          },
          {
            "name": "RTF",
            "exts": [
              ".rtf"
            ],
            "rawExts": ".rtf"
          },
          {
            "name": "WPS",
            "exts": [
              ".wps"
            ],
            "rawExts": "Microsoft Works / WPS Office — .wps"
          },
          {
            "name": "WPD",
            "exts": [
              ".wpd"
            ],
            "rawExts": "WordPerfect — .wpd"
          },
          {
            "name": "LWP",
            "exts": [
              ".lwp"
            ],
            "rawExts": "Lotus Word Pro — .lwp"
          },
          {
            "name": "ABW",
            "exts": [
              ".abw",
              ".zabw"
            ],
            "rawExts": "AbiWord — .abw .zabw"
          },
          {
            "name": "Pages",
            "exts": [
              ".pages"
            ],
            "rawExts": "Apple Pages — .pages"
          },
          {
            "name": "SDW",
            "exts": [
              ".sdw"
            ],
            "rawExts": "StarWriter — .sdw"
          },
          {
            "name": "ClarisWorks",
            "exts": [
              ".cwk"
            ],
            "rawExts": "ClarisWorks / AppleWorks — .cwk"
          },
          {
            "name": "MacWrite",
            "exts": [
              ".mcw"
            ],
            "rawExts": ".mcw"
          },
          {
            "name": "T602",
            "exts": [
              ".602"
            ],
            "rawExts": ".602"
          },
          {
            "name": "Pocket Word",
            "exts": [
              ".psw"
            ],
            "rawExts": ".psw"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "ODT",
            "exts": [
              ".odt"
            ],
            "rawExts": "OpenDocument — .odt"
          }
        ],
        "engine": "LibreOffice"
      },
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "DOC",
            "exts": [
              ".doc"
            ],
            "rawExts": ".doc"
          },
          {
            "name": "ODT",
            "exts": [
              ".odt"
            ],
            "rawExts": "OpenDocument — .odt"
          },
          {
            "name": "RTF",
            "exts": [
              ".rtf"
            ],
            "rawExts": ".rtf"
          }
        ],
        "to": [
          {
            "name": "FODT",
            "exts": [
              ".fodt"
            ],
            "rawExts": "flat OpenDocument text — .fodt"
          },
          {
            "name": "OTT",
            "exts": [
              ".ott"
            ],
            "rawExts": "OpenDocument template — .ott"
          }
        ],
        "engine": "LibreOffice"
      },
      {
        "from": [
          {
            "name": "PUB",
            "exts": [
              ".pub"
            ],
            "rawExts": "Microsoft Publisher — .pub"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          }
        ],
        "engine": "LibreOffice"
      },
      {
        "from": [
          {
            "name": "EML",
            "exts": [
              ".eml"
            ],
            "rawExts": ".eml"
          },
          {
            "name": "MSG",
            "exts": [
              ".msg"
            ],
            "rawExts": "Outlook — .msg"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "ZIP",
            "exts": [
              ".zip",
              ".wbpz"
            ],
            "rawExts": ".zip .wbpz"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "MSG",
            "exts": [
              ".msg"
            ],
            "rawExts": "Outlook — .msg"
          }
        ],
        "to": [
          {
            "name": "EML",
            "exts": [
              ".eml"
            ],
            "rawExts": ".eml"
          }
        ],
        "engine": "Built in"
      }
    ]
  },
  {
    "id": "hwp",
    "name": "HWP (Hangul)",
    "officialTitle": "HWP (Hangul)",
    "officialCount": "2 formats",
    "icon": "FileCode",
    "intro": "Korean Hancom Hangul documents without Hancom Office: HWP ↔ HWPX, to PDF, images, Word, text, Markdown and HTML, and HWPX from Word, Excel, PowerPoint, Markdown and PDF.",
    "routes": [
      {
        "from": [
          {
            "name": "HWP",
            "exts": [
              ".hwp"
            ],
            "rawExts": ".hwp"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "HWP",
            "exts": [
              ".hwp"
            ],
            "rawExts": ".hwp"
          }
        ],
        "to": [
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          }
        ],
        "engine": "Built inrhwp"
      },
      {
        "from": [
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          }
        ],
        "to": [
          {
            "name": "HWP",
            "exts": [
              ".hwp"
            ],
            "rawExts": ".hwp"
          }
        ],
        "engine": "Built inrhwp"
      },
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          },
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          }
        ],
        "engine": "Built inFilee HWPX writer"
      },
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          },
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          }
        ],
        "to": [
          {
            "name": "HWP",
            "exts": [
              ".hwp"
            ],
            "rawExts": ".hwp"
          }
        ],
        "engine": "Built inHWPX → rhwp"
      }
    ]
  },
  {
    "id": "spreadsheets",
    "name": "Spreadsheets",
    "officialTitle": "Spreadsheets",
    "officialCount": "13 formats",
    "icon": "Table",
    "intro": "Excel, OpenDocument and CSV/TSV sheets, to PDF with Excel-like page fitting or into each other, without Excel.",
    "routes": [
      {
        "from": [
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          },
          {
            "name": "XLSM",
            "exts": [
              ".xlsm"
            ],
            "rawExts": ".xlsm"
          },
          {
            "name": "XLTX",
            "exts": [
              ".xltx"
            ],
            "rawExts": ".xltx"
          },
          {
            "name": "XLS",
            "exts": [
              ".xls"
            ],
            "rawExts": ".xls"
          },
          {
            "name": "XLT",
            "exts": [
              ".xlt"
            ],
            "rawExts": "Excel 97–2003 template — .xlt"
          },
          {
            "name": "ODS",
            "exts": [
              ".ods"
            ],
            "rawExts": "OpenDocument — .ods"
          },
          {
            "name": "CSV",
            "exts": [
              ".csv"
            ],
            "rawExts": ".csv"
          },
          {
            "name": "TSV",
            "exts": [
              ".tsv",
              ".tab"
            ],
            "rawExts": ".tsv .tab"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          },
          {
            "name": "CSV",
            "exts": [
              ".csv"
            ],
            "rawExts": ".csv"
          },
          {
            "name": "TSV",
            "exts": [
              ".tsv",
              ".tab"
            ],
            "rawExts": ".tsv .tab"
          },
          {
            "name": "ODS",
            "exts": [
              ".ods"
            ],
            "rawExts": "OpenDocument — .ods"
          },
          {
            "name": "JSON",
            "exts": [
              ".json"
            ],
            "rawExts": ".json"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "Numbers",
            "exts": [
              ".numbers"
            ],
            "rawExts": "Apple Numbers — .numbers"
          },
          {
            "name": "ET",
            "exts": [
              ".et"
            ],
            "rawExts": "WPS Spreadsheets — .et"
          },
          {
            "name": "SDC",
            "exts": [
              ".sdc"
            ],
            "rawExts": "StarCalc — .sdc"
          },
          {
            "name": "FODS",
            "exts": [
              ".fods"
            ],
            "rawExts": "flat OpenDocument spreadsheet — .fods"
          },
          {
            "name": "OTS",
            "exts": [
              ".ots"
            ],
            "rawExts": "OpenDocument template — .ots"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          }
        ],
        "engine": "LibreOffice"
      },
      {
        "from": [
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          },
          {
            "name": "XLS",
            "exts": [
              ".xls"
            ],
            "rawExts": ".xls"
          },
          {
            "name": "ODS",
            "exts": [
              ".ods"
            ],
            "rawExts": "OpenDocument — .ods"
          }
        ],
        "to": [
          {
            "name": "OTS",
            "exts": [
              ".ots"
            ],
            "rawExts": "OpenDocument template — .ots"
          },
          {
            "name": "XLT",
            "exts": [
              ".xlt"
            ],
            "rawExts": "Excel 97–2003 template — .xlt"
          }
        ],
        "engine": "LibreOffice"
      }
    ]
  },
  {
    "id": "presentations",
    "name": "Presentations",
    "officialTitle": "Presentations",
    "officialCount": "12 formats",
    "icon": "Presentation",
    "intro": "PowerPoint to PDF, images and HWPX without PowerPoint; older PPT, ODP and Keynote with the optional LibreOffice engine.",
    "routes": [
      {
        "from": [
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          },
          {
            "name": "PPTM",
            "exts": [
              ".pptm"
            ],
            "rawExts": ".pptm"
          },
          {
            "name": "POTX",
            "exts": [
              ".potx"
            ],
            "rawExts": ".potx"
          },
          {
            "name": "POTM",
            "exts": [
              ".potm"
            ],
            "rawExts": ".potm"
          },
          {
            "name": "PPSX",
            "exts": [
              ".ppsx"
            ],
            "rawExts": ".ppsx"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "PPT",
            "exts": [
              ".ppt",
              ".pps",
              ".pot"
            ],
            "rawExts": ".ppt .pps .pot"
          },
          {
            "name": "ODP",
            "exts": [
              ".odp"
            ],
            "rawExts": "OpenDocument — .odp"
          },
          {
            "name": "OTP",
            "exts": [
              ".otp"
            ],
            "rawExts": "OpenDocument template — .otp"
          },
          {
            "name": "FODP",
            "exts": [
              ".fodp"
            ],
            "rawExts": "flat OpenDocument presentation — .fodp"
          },
          {
            "name": "Keynote",
            "exts": [
              ".key"
            ],
            "rawExts": "Apple Keynote — .key"
          },
          {
            "name": "DPS",
            "exts": [
              ".dps"
            ],
            "rawExts": "WPS Presentation — .dps"
          },
          {
            "name": "SDA",
            "exts": [
              ".sda",
              ".sdd"
            ],
            "rawExts": "StarImpress / StarDraw — .sda .sdd"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          },
          {
            "name": "ODP",
            "exts": [
              ".odp"
            ],
            "rawExts": "OpenDocument — .odp"
          }
        ],
        "engine": "LibreOffice"
      },
      {
        "from": [
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          },
          {
            "name": "PPT",
            "exts": [
              ".ppt",
              ".pps",
              ".pot"
            ],
            "rawExts": ".ppt .pps .pot"
          },
          {
            "name": "ODP",
            "exts": [
              ".odp"
            ],
            "rawExts": "OpenDocument — .odp"
          }
        ],
        "to": [
          {
            "name": "OTP",
            "exts": [
              ".otp"
            ],
            "rawExts": "OpenDocument template — .otp"
          }
        ],
        "engine": "LibreOffice"
      }
    ]
  },
  {
    "id": "text",
    "name": "Text & Markup",
    "officialTitle": "Text &amp; markup",
    "officialCount": "15 formats",
    "icon": "AlignLeft",
    "intro": "Plain text, Markdown, HTML and saved web pages (MHTML) to PDF, Word, HWPX and EPUB. LaTeX, reStructuredText, Org, AsciiDoc, Typst, Jupyter and other markup use the optional Pandoc engine, which also turns Markdown into PowerPoint slides.",
    "routes": [
      {
        "from": [
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          }
        ],
        "to": [
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "MHTML",
            "exts": [
              ".mhtml",
              ".mht"
            ],
            "rawExts": "web page saved as a single file — .mhtml .mht"
          }
        ],
        "to": [
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "reStructuredText",
            "exts": [
              ".rst"
            ],
            "rawExts": ".rst"
          },
          {
            "name": "LaTeX",
            "exts": [
              ".tex",
              ".latex"
            ],
            "rawExts": ".tex .latex"
          },
          {
            "name": "Org",
            "exts": [
              ".org"
            ],
            "rawExts": "Emacs Org mode — .org"
          },
          {
            "name": "AsciiDoc",
            "exts": [
              ".adoc",
              ".asciidoc"
            ],
            "rawExts": ".adoc .asciidoc"
          },
          {
            "name": "Typst",
            "exts": [
              ".typ"
            ],
            "rawExts": ".typ"
          },
          {
            "name": "MediaWiki",
            "exts": [
              ".mediawiki",
              ".wiki"
            ],
            "rawExts": ".mediawiki .wiki"
          },
          {
            "name": "DocBook",
            "exts": [
              ".dbk",
              ".docbook"
            ],
            "rawExts": ".dbk .docbook"
          },
          {
            "name": "Jupyter",
            "exts": [
              ".ipynb"
            ],
            "rawExts": "Jupyter notebook — .ipynb"
          },
          {
            "name": "Textile",
            "exts": [
              ".textile"
            ],
            "rawExts": ".textile"
          },
          {
            "name": "Man page",
            "exts": [
              ".man"
            ],
            "rawExts": "Unix manual page — .man"
          },
          {
            "name": "OPML",
            "exts": [
              ".opml"
            ],
            "rawExts": ".opml"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          },
          {
            "name": "ODT",
            "exts": [
              ".odt"
            ],
            "rawExts": "OpenDocument — .odt"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          }
        ],
        "engine": "Pandoc"
      },
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          }
        ],
        "to": [
          {
            "name": "reStructuredText",
            "exts": [
              ".rst"
            ],
            "rawExts": ".rst"
          },
          {
            "name": "LaTeX",
            "exts": [
              ".tex",
              ".latex"
            ],
            "rawExts": ".tex .latex"
          },
          {
            "name": "Org",
            "exts": [
              ".org"
            ],
            "rawExts": "Emacs Org mode — .org"
          },
          {
            "name": "AsciiDoc",
            "exts": [
              ".adoc",
              ".asciidoc"
            ],
            "rawExts": ".adoc .asciidoc"
          },
          {
            "name": "Typst",
            "exts": [
              ".typ"
            ],
            "rawExts": ".typ"
          },
          {
            "name": "MediaWiki",
            "exts": [
              ".mediawiki",
              ".wiki"
            ],
            "rawExts": ".mediawiki .wiki"
          },
          {
            "name": "DocBook",
            "exts": [
              ".dbk",
              ".docbook"
            ],
            "rawExts": ".dbk .docbook"
          },
          {
            "name": "Jupyter",
            "exts": [
              ".ipynb"
            ],
            "rawExts": "Jupyter notebook — .ipynb"
          },
          {
            "name": "Textile",
            "exts": [
              ".textile"
            ],
            "rawExts": ".textile"
          },
          {
            "name": "Man page",
            "exts": [
              ".man"
            ],
            "rawExts": "Unix manual page — .man"
          },
          {
            "name": "OPML",
            "exts": [
              ".opml"
            ],
            "rawExts": ".opml"
          }
        ],
        "engine": "Pandoc"
      },
      {
        "from": [
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "reStructuredText",
            "exts": [
              ".rst"
            ],
            "rawExts": ".rst"
          },
          {
            "name": "Org",
            "exts": [
              ".org"
            ],
            "rawExts": "Emacs Org mode — .org"
          },
          {
            "name": "AsciiDoc",
            "exts": [
              ".adoc",
              ".asciidoc"
            ],
            "rawExts": ".adoc .asciidoc"
          },
          {
            "name": "Typst",
            "exts": [
              ".typ"
            ],
            "rawExts": ".typ"
          },
          {
            "name": "MediaWiki",
            "exts": [
              ".mediawiki",
              ".wiki"
            ],
            "rawExts": ".mediawiki .wiki"
          },
          {
            "name": "Textile",
            "exts": [
              ".textile"
            ],
            "rawExts": ".textile"
          },
          {
            "name": "Jupyter",
            "exts": [
              ".ipynb"
            ],
            "rawExts": "Jupyter notebook — .ipynb"
          }
        ],
        "to": [
          {
            "name": "PPTX",
            "exts": [
              ".pptx"
            ],
            "rawExts": ".pptx"
          }
        ],
        "engine": "Pandoc"
      }
    ]
  },
  {
    "id": "data",
    "name": "Structured Data",
    "officialTitle": "Data",
    "officialCount": "6 formats",
    "icon": "Database",
    "intro": "JSON, JSON Lines, YAML, TOML and XML into each other, and tables to and from CSV and Excel. vCard contacts to and from CSV, also from old phones. Nothing to install.",
    "routes": [
      {
        "from": [
          {
            "name": "JSON",
            "exts": [
              ".json"
            ],
            "rawExts": ".json"
          },
          {
            "name": "JSON Lines",
            "exts": [
              ".jsonl",
              ".ndjson"
            ],
            "rawExts": ".jsonl .ndjson"
          },
          {
            "name": "YAML",
            "exts": [
              ".yaml",
              ".yml"
            ],
            "rawExts": ".yaml .yml"
          },
          {
            "name": "TOML",
            "exts": [
              ".toml"
            ],
            "rawExts": ".toml"
          },
          {
            "name": "XML",
            "exts": [
              ".xml"
            ],
            "rawExts": ".xml"
          }
        ],
        "to": [
          {
            "name": "JSON",
            "exts": [
              ".json"
            ],
            "rawExts": ".json"
          },
          {
            "name": "JSON Lines",
            "exts": [
              ".jsonl",
              ".ndjson"
            ],
            "rawExts": ".jsonl .ndjson"
          },
          {
            "name": "YAML",
            "exts": [
              ".yaml",
              ".yml"
            ],
            "rawExts": ".yaml .yml"
          },
          {
            "name": "TOML",
            "exts": [
              ".toml"
            ],
            "rawExts": ".toml"
          },
          {
            "name": "XML",
            "exts": [
              ".xml"
            ],
            "rawExts": ".xml"
          },
          {
            "name": "CSV",
            "exts": [
              ".csv"
            ],
            "rawExts": ".csv"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "CSV",
            "exts": [
              ".csv"
            ],
            "rawExts": ".csv"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          }
        ],
        "to": [
          {
            "name": "JSON",
            "exts": [
              ".json"
            ],
            "rawExts": ".json"
          },
          {
            "name": "JSON Lines",
            "exts": [
              ".jsonl",
              ".ndjson"
            ],
            "rawExts": ".jsonl .ndjson"
          },
          {
            "name": "YAML",
            "exts": [
              ".yaml",
              ".yml"
            ],
            "rawExts": ".yaml .yml"
          },
          {
            "name": "TOML",
            "exts": [
              ".toml"
            ],
            "rawExts": ".toml"
          },
          {
            "name": "XML",
            "exts": [
              ".xml"
            ],
            "rawExts": ".xml"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "vCard",
            "exts": [
              ".vcf",
              ".vcard"
            ],
            "rawExts": ".vcf .vcard"
          }
        ],
        "to": [
          {
            "name": "CSV",
            "exts": [
              ".csv"
            ],
            "rawExts": ".csv"
          },
          {
            "name": "XLSX",
            "exts": [
              ".xlsx"
            ],
            "rawExts": ".xlsx"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "CSV",
            "exts": [
              ".csv"
            ],
            "rawExts": ".csv"
          }
        ],
        "to": [
          {
            "name": "vCard",
            "exts": [
              ".vcf",
              ".vcard"
            ],
            "rawExts": ".vcf .vcard"
          }
        ],
        "engine": "Built in"
      }
    ]
  },
  {
    "id": "ebooks",
    "name": "E-books & Comics",
    "officialTitle": "E-books &amp; comics",
    "officialCount": "24 formats",
    "icon": "BookOpen",
    "intro": "EPUB, Kindle (MOBI, AZW, AZW3), FictionBook and comic archives (CBZ, CBR, CB7…) to PDF, EPUB, Word and more, and KEPUB for Kobo readers. DRM-free books only.",
    "routes": [
      {
        "from": [
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "KEPUB",
            "exts": [
              ".kepub",
              ".epub",
              ".kepub"
            ],
            "rawExts": "Kobo — .kepub.epub .kepub"
          },
          {
            "name": "MOBI",
            "exts": [
              ".mobi"
            ],
            "rawExts": ".mobi"
          },
          {
            "name": "AZW",
            "exts": [
              ".azw"
            ],
            "rawExts": "Kindle — .azw"
          },
          {
            "name": "AZW3",
            "exts": [
              ".azw3"
            ],
            "rawExts": "Kindle — .azw3"
          },
          {
            "name": "AZW4",
            "exts": [
              ".azw4"
            ],
            "rawExts": "Kindle — .azw4"
          },
          {
            "name": "PRC",
            "exts": [
              ".prc"
            ],
            "rawExts": "Mobipocket — .prc"
          },
          {
            "name": "FB2",
            "exts": [
              ".fb2"
            ],
            "rawExts": "FictionBook — .fb2"
          },
          {
            "name": "CBZ",
            "exts": [
              ".cbz"
            ],
            "rawExts": ".cbz"
          },
          {
            "name": "CBR",
            "exts": [
              ".cbr"
            ],
            "rawExts": ".cbr"
          },
          {
            "name": "CB7",
            "exts": [
              ".cb7"
            ],
            "rawExts": ".cb7"
          },
          {
            "name": "CBT",
            "exts": [
              ".cbt"
            ],
            "rawExts": ".cbt"
          },
          {
            "name": "CBC",
            "exts": [
              ".cbc"
            ],
            "rawExts": ".cbc"
          },
          {
            "name": "HTMLZ",
            "exts": [
              ".htmlz"
            ],
            "rawExts": ".htmlz"
          },
          {
            "name": "TXTZ",
            "exts": [
              ".txtz"
            ],
            "rawExts": ".txtz"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          },
          {
            "name": "HWPX",
            "exts": [
              ".hwpx"
            ],
            "rawExts": ".hwpx"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "MOBI",
            "exts": [
              ".mobi"
            ],
            "rawExts": ".mobi"
          },
          {
            "name": "AZW3",
            "exts": [
              ".azw3"
            ],
            "rawExts": "Kindle — .azw3"
          },
          {
            "name": "FB2",
            "exts": [
              ".fb2"
            ],
            "rawExts": "FictionBook — .fb2"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          }
        ],
        "to": [
          {
            "name": "KEPUB",
            "exts": [
              ".kepub",
              ".epub",
              ".kepub"
            ],
            "rawExts": "Kobo — .kepub.epub .kepub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "Markdown",
            "exts": [
              ".md",
              ".markdown"
            ],
            "rawExts": ".md .markdown"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          }
        ],
        "to": [
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          }
        ],
        "to": [
          {
            "name": "CBZ",
            "exts": [
              ".cbz"
            ],
            "rawExts": ".cbz"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "MOBI",
            "exts": [
              ".mobi"
            ],
            "rawExts": ".mobi"
          },
          {
            "name": "AZW",
            "exts": [
              ".azw"
            ],
            "rawExts": "Kindle — .azw"
          },
          {
            "name": "AZW3",
            "exts": [
              ".azw3"
            ],
            "rawExts": "Kindle — .azw3"
          },
          {
            "name": "AZW4",
            "exts": [
              ".azw4"
            ],
            "rawExts": "Kindle — .azw4"
          },
          {
            "name": "PRC",
            "exts": [
              ".prc"
            ],
            "rawExts": "Mobipocket — .prc"
          },
          {
            "name": "FB2",
            "exts": [
              ".fb2"
            ],
            "rawExts": "FictionBook — .fb2"
          },
          {
            "name": "HTMLZ",
            "exts": [
              ".htmlz"
            ],
            "rawExts": ".htmlz"
          },
          {
            "name": "TXTZ",
            "exts": [
              ".txtz"
            ],
            "rawExts": ".txtz"
          }
        ],
        "to": [
          {
            "name": "MOBI",
            "exts": [
              ".mobi"
            ],
            "rawExts": ".mobi"
          },
          {
            "name": "AZW3",
            "exts": [
              ".azw3"
            ],
            "rawExts": "Kindle — .azw3"
          }
        ],
        "engine": "Calibre"
      },
      {
        "from": [
          {
            "name": "LIT",
            "exts": [
              ".lit"
            ],
            "rawExts": "Microsoft Reader — .lit"
          },
          {
            "name": "LRF",
            "exts": [
              ".lrf"
            ],
            "rawExts": "Sony Reader — .lrf"
          },
          {
            "name": "CHM",
            "exts": [
              ".chm"
            ],
            "rawExts": "Compiled HTML Help — .chm"
          },
          {
            "name": "PDB",
            "exts": [
              ".pdb"
            ],
            "rawExts": "Palm eReader — .pdb"
          },
          {
            "name": "PML",
            "exts": [
              ".pml"
            ],
            "rawExts": ".pml"
          },
          {
            "name": "RB",
            "exts": [
              ".rb"
            ],
            "rawExts": "Rocket eBook — .rb"
          },
          {
            "name": "SNB",
            "exts": [
              ".snb"
            ],
            "rawExts": "Shanda Bambook — .snb"
          },
          {
            "name": "TCR",
            "exts": [
              ".tcr"
            ],
            "rawExts": "Psion — .tcr"
          },
          {
            "name": "OEB",
            "exts": [
              ".oeb",
              ".opf"
            ],
            "rawExts": "Open eBook — .oeb .opf"
          }
        ],
        "to": [
          {
            "name": "EPUB",
            "exts": [
              ".epub"
            ],
            "rawExts": ".epub"
          },
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "DOCX",
            "exts": [
              ".docx"
            ],
            "rawExts": ".docx"
          },
          {
            "name": "TXT",
            "exts": [
              ".txt",
              ".log",
              ".py",
              ".pac",
              ".bat",
              ".command"
            ],
            "rawExts": ".txt .log .py .pac .bat .command"
          },
          {
            "name": "HTML",
            "exts": [
              ".html",
              ".htm",
              ".xhtml"
            ],
            "rawExts": ".html .htm .xhtml"
          }
        ],
        "engine": "Calibre"
      }
    ]
  },
  {
    "id": "video",
    "name": "Video",
    "officialTitle": "Video",
    "officialCount": "22 formats",
    "icon": "Video",
    "intro": "All common video formats to MP4 (H.264, HEVC or AV1), WebM, MOV, MKV, AVI, GIF or APNG, with a 720p option, hardware encoding on the graphics chip, audio extraction to MP3 or M4A and every frame saved as pictures. Uses the optional FFmpeg engine.",
    "routes": [
      {
        "from": [
          {
            "name": "MP4",
            "exts": [
              ".mp4"
            ],
            "rawExts": ".mp4"
          },
          {
            "name": "M4V",
            "exts": [
              ".m4v"
            ],
            "rawExts": "iTunes video — .m4v"
          },
          {
            "name": "MOV",
            "exts": [
              ".mov",
              ".qt"
            ],
            "rawExts": ".mov .qt"
          },
          {
            "name": "MKV",
            "exts": [
              ".mkv"
            ],
            "rawExts": ".mkv"
          },
          {
            "name": "WEBM",
            "exts": [
              ".webm"
            ],
            "rawExts": ".webm"
          },
          {
            "name": "AVI",
            "exts": [
              ".avi",
              ".divx"
            ],
            "rawExts": ".avi .divx"
          },
          {
            "name": "WMV",
            "exts": [
              ".wmv",
              ".asf"
            ],
            "rawExts": ".wmv .asf"
          },
          {
            "name": "FLV",
            "exts": [
              ".flv",
              ".f4v"
            ],
            "rawExts": ".flv .f4v"
          },
          {
            "name": "MPEG",
            "exts": [
              ".dat",
              ".mpg",
              ".mpeg",
              ".mpe",
              ".m1v",
              ".m2v",
              ".dat"
            ],
            "rawExts": "MPEG-1/2, Video CD (.dat) — .mpg .mpeg .mpe .m1v .m2v .dat"
          },
          {
            "name": "TS",
            "exts": [
              ".ts"
            ],
            "rawExts": ".ts"
          },
          {
            "name": "M2TS/MTS",
            "exts": [
              ".m2ts",
              ".mts",
              ".m2t"
            ],
            "rawExts": ".m2ts .mts .m2t"
          },
          {
            "name": "3GP",
            "exts": [
              ".3gp",
              ".3gpp"
            ],
            "rawExts": ".3gp .3gpp"
          },
          {
            "name": "3G2",
            "exts": [
              ".3g2"
            ],
            "rawExts": ".3g2"
          },
          {
            "name": "OGV",
            "exts": [
              ".ogv"
            ],
            "rawExts": ".ogv"
          },
          {
            "name": "VOB",
            "exts": [
              ".vob"
            ],
            "rawExts": "DVD — .vob"
          },
          {
            "name": "MOD",
            "exts": [
              ".mod",
              ".tod"
            ],
            "rawExts": "JVC / Panasonic camcorders — .mod .tod"
          },
          {
            "name": "DV",
            "exts": [
              ".dv",
              ".dif"
            ],
            "rawExts": ".dv .dif"
          },
          {
            "name": "MXF",
            "exts": [
              ".mxf"
            ],
            "rawExts": ".mxf"
          },
          {
            "name": "RM/RMVB",
            "exts": [
              ".rm",
              ".rmvb"
            ],
            "rawExts": "RealMedia — .rm .rmvb"
          },
          {
            "name": "SWF",
            "exts": [
              ".swf"
            ],
            "rawExts": "Flash — .swf"
          },
          {
            "name": "WTV",
            "exts": [
              ".wtv",
              ".dvr-ms",
              ".dvr"
            ],
            "rawExts": "Windows Media Center — .wtv .dvr-ms .dvr"
          },
          {
            "name": "CAVS",
            "exts": [
              ".cavs"
            ],
            "rawExts": ".cavs"
          }
        ],
        "to": [
          {
            "name": "MP4",
            "exts": [
              ".mp4"
            ],
            "rawExts": ".mp4"
          },
          {
            "name": "WEBM",
            "exts": [
              ".webm"
            ],
            "rawExts": ".webm"
          },
          {
            "name": "MOV",
            "exts": [
              ".mov",
              ".qt"
            ],
            "rawExts": ".mov .qt"
          },
          {
            "name": "MKV",
            "exts": [
              ".mkv"
            ],
            "rawExts": ".mkv"
          },
          {
            "name": "AVI",
            "exts": [
              ".avi",
              ".divx"
            ],
            "rawExts": ".avi .divx"
          },
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          },
          {
            "name": "MP3",
            "exts": [
              ".mp3"
            ],
            "rawExts": ".mp3"
          },
          {
            "name": "M4A",
            "exts": [
              ".m4a"
            ],
            "rawExts": ".m4a"
          }
        ],
        "engine": "FFmpeg"
      },
      {
        "from": [
          {
            "name": "MP4",
            "exts": [
              ".mp4"
            ],
            "rawExts": ".mp4"
          },
          {
            "name": "M4V",
            "exts": [
              ".m4v"
            ],
            "rawExts": "iTunes video — .m4v"
          },
          {
            "name": "MOV",
            "exts": [
              ".mov",
              ".qt"
            ],
            "rawExts": ".mov .qt"
          },
          {
            "name": "MKV",
            "exts": [
              ".mkv"
            ],
            "rawExts": ".mkv"
          },
          {
            "name": "WEBM",
            "exts": [
              ".webm"
            ],
            "rawExts": ".webm"
          },
          {
            "name": "AVI",
            "exts": [
              ".avi",
              ".divx"
            ],
            "rawExts": ".avi .divx"
          },
          {
            "name": "WMV",
            "exts": [
              ".wmv",
              ".asf"
            ],
            "rawExts": ".wmv .asf"
          },
          {
            "name": "FLV",
            "exts": [
              ".flv",
              ".f4v"
            ],
            "rawExts": ".flv .f4v"
          },
          {
            "name": "MPEG",
            "exts": [
              ".dat",
              ".mpg",
              ".mpeg",
              ".mpe",
              ".m1v",
              ".m2v",
              ".dat"
            ],
            "rawExts": "MPEG-1/2, Video CD (.dat) — .mpg .mpeg .mpe .m1v .m2v .dat"
          },
          {
            "name": "TS",
            "exts": [
              ".ts"
            ],
            "rawExts": ".ts"
          },
          {
            "name": "M2TS/MTS",
            "exts": [
              ".m2ts",
              ".mts",
              ".m2t"
            ],
            "rawExts": ".m2ts .mts .m2t"
          },
          {
            "name": "3GP",
            "exts": [
              ".3gp",
              ".3gpp"
            ],
            "rawExts": ".3gp .3gpp"
          },
          {
            "name": "3G2",
            "exts": [
              ".3g2"
            ],
            "rawExts": ".3g2"
          },
          {
            "name": "OGV",
            "exts": [
              ".ogv"
            ],
            "rawExts": ".ogv"
          },
          {
            "name": "VOB",
            "exts": [
              ".vob"
            ],
            "rawExts": "DVD — .vob"
          },
          {
            "name": "MOD",
            "exts": [
              ".mod",
              ".tod"
            ],
            "rawExts": "JVC / Panasonic camcorders — .mod .tod"
          },
          {
            "name": "DV",
            "exts": [
              ".dv",
              ".dif"
            ],
            "rawExts": ".dv .dif"
          },
          {
            "name": "MXF",
            "exts": [
              ".mxf"
            ],
            "rawExts": ".mxf"
          },
          {
            "name": "RM/RMVB",
            "exts": [
              ".rm",
              ".rmvb"
            ],
            "rawExts": "RealMedia — .rm .rmvb"
          },
          {
            "name": "SWF",
            "exts": [
              ".swf"
            ],
            "rawExts": "Flash — .swf"
          },
          {
            "name": "WTV",
            "exts": [
              ".wtv",
              ".dvr-ms",
              ".dvr"
            ],
            "rawExts": "Windows Media Center — .wtv .dvr-ms .dvr"
          },
          {
            "name": "CAVS",
            "exts": [
              ".cavs"
            ],
            "rawExts": ".cavs"
          }
        ],
        "to": [
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          }
        ],
        "engine": "FFmpeg"
      },
      {
        "from": [
          {
            "name": "GIF",
            "exts": [
              ".gif"
            ],
            "rawExts": ".gif"
          },
          {
            "name": "APNG",
            "exts": [
              ".apng"
            ],
            "rawExts": "animated PNG — .apng"
          }
        ],
        "to": [
          {
            "name": "MP4",
            "exts": [
              ".mp4"
            ],
            "rawExts": ".mp4"
          },
          {
            "name": "WEBM",
            "exts": [
              ".webm"
            ],
            "rawExts": ".webm"
          },
          {
            "name": "MOV",
            "exts": [
              ".mov",
              ".qt"
            ],
            "rawExts": ".mov .qt"
          }
        ],
        "engine": "FFmpeg"
      }
    ]
  },
  {
    "id": "audio",
    "name": "Audio",
    "officialTitle": "Audio",
    "officialCount": "30 formats",
    "icon": "Music",
    "intro": "Music, recordings and voice memos to MP3, M4A, WAV, FLAC, OGG, Opus, AAC or lossless WavPack and TTA. APE, DSD and DTS are read too. Uses the optional FFmpeg engine.",
    "routes": [
      {
        "from": [
          {
            "name": "MP3",
            "exts": [
              ".mp3"
            ],
            "rawExts": ".mp3"
          },
          {
            "name": "M4A",
            "exts": [
              ".m4a"
            ],
            "rawExts": ".m4a"
          },
          {
            "name": "M4B",
            "exts": [
              ".m4b"
            ],
            "rawExts": "audiobooks — .m4b"
          },
          {
            "name": "AAC",
            "exts": [
              ".aac"
            ],
            "rawExts": ".aac"
          },
          {
            "name": "WAV",
            "exts": [
              ".wav",
              ".wave"
            ],
            "rawExts": ".wav .wave"
          },
          {
            "name": "FLAC",
            "exts": [
              ".flac"
            ],
            "rawExts": ".flac"
          },
          {
            "name": "OGG",
            "exts": [
              ".ogg",
              ".oga"
            ],
            "rawExts": ".ogg .oga"
          },
          {
            "name": "OPUS",
            "exts": [
              ".opus"
            ],
            "rawExts": ".opus"
          },
          {
            "name": "WMA",
            "exts": [
              ".wma"
            ],
            "rawExts": ".wma"
          },
          {
            "name": "AIFF",
            "exts": [
              ".aiff",
              ".aif",
              ".aifc"
            ],
            "rawExts": ".aiff .aif .aifc"
          },
          {
            "name": "AC3",
            "exts": [
              ".ac3"
            ],
            "rawExts": ".ac3"
          },
          {
            "name": "AMR",
            "exts": [
              ".amr"
            ],
            "rawExts": ".amr"
          },
          {
            "name": "AU",
            "exts": [
              ".au",
              ".snd"
            ],
            "rawExts": ".au .snd"
          },
          {
            "name": "CAF",
            "exts": [
              ".caf"
            ],
            "rawExts": ".caf"
          },
          {
            "name": "WEBA",
            "exts": [
              ".weba"
            ],
            "rawExts": ".weba"
          },
          {
            "name": "MKA",
            "exts": [
              ".mka"
            ],
            "rawExts": ".mka"
          },
          {
            "name": "MP2",
            "exts": [
              ".mp2",
              ".mpa"
            ],
            "rawExts": ".mp2 .mpa"
          },
          {
            "name": "DSS",
            "exts": [
              ".dss"
            ],
            "rawExts": "Olympus / Philips dictation — .dss"
          },
          {
            "name": "VOC",
            "exts": [
              ".voc"
            ],
            "rawExts": ".voc"
          },
          {
            "name": "WavPack",
            "exts": [
              ".wv"
            ],
            "rawExts": ".wv"
          },
          {
            "name": "TTA",
            "exts": [
              ".tta"
            ],
            "rawExts": ".tta"
          },
          {
            "name": "W64",
            "exts": [
              ".w64"
            ],
            "rawExts": "Sony Wave64 — .w64"
          },
          {
            "name": "E-AC3",
            "exts": [
              ".eac3",
              ".ec3"
            ],
            "rawExts": "Dolby Digital Plus — .eac3 .ec3"
          },
          {
            "name": "APE",
            "exts": [
              ".ape"
            ],
            "rawExts": "Monkey's Audio — .ape"
          },
          {
            "name": "Musepack",
            "exts": [
              ".mpc",
              ".mpp",
              ".mp"
            ],
            "rawExts": ".mpc .mpp .mp+"
          },
          {
            "name": "TAK",
            "exts": [
              ".tak"
            ],
            "rawExts": ".tak"
          },
          {
            "name": "DSF",
            "exts": [
              ".dsf"
            ],
            "rawExts": "DSD — .dsf"
          },
          {
            "name": "DFF",
            "exts": [
              ".dff"
            ],
            "rawExts": "DSD — .dff"
          },
          {
            "name": "DTS",
            "exts": [
              ".dts"
            ],
            "rawExts": ".dts"
          },
          {
            "name": "Speex",
            "exts": [
              ".spx"
            ],
            "rawExts": ".spx"
          }
        ],
        "to": [
          {
            "name": "MP3",
            "exts": [
              ".mp3"
            ],
            "rawExts": ".mp3"
          },
          {
            "name": "M4A",
            "exts": [
              ".m4a"
            ],
            "rawExts": ".m4a"
          },
          {
            "name": "WAV",
            "exts": [
              ".wav",
              ".wave"
            ],
            "rawExts": ".wav .wave"
          },
          {
            "name": "FLAC",
            "exts": [
              ".flac"
            ],
            "rawExts": ".flac"
          },
          {
            "name": "OGG",
            "exts": [
              ".ogg",
              ".oga"
            ],
            "rawExts": ".ogg .oga"
          },
          {
            "name": "OPUS",
            "exts": [
              ".opus"
            ],
            "rawExts": ".opus"
          },
          {
            "name": "AAC",
            "exts": [
              ".aac"
            ],
            "rawExts": ".aac"
          },
          {
            "name": "WavPack",
            "exts": [
              ".wv"
            ],
            "rawExts": ".wv"
          },
          {
            "name": "TTA",
            "exts": [
              ".tta"
            ],
            "rawExts": ".tta"
          },
          {
            "name": "W64",
            "exts": [
              ".w64"
            ],
            "rawExts": "Sony Wave64 — .w64"
          },
          {
            "name": "AC3",
            "exts": [
              ".ac3"
            ],
            "rawExts": ".ac3"
          },
          {
            "name": "E-AC3",
            "exts": [
              ".eac3",
              ".ec3"
            ],
            "rawExts": "Dolby Digital Plus — .eac3 .ec3"
          }
        ],
        "engine": "FFmpeg"
      }
    ]
  },
  {
    "id": "subtitles",
    "name": "Subtitles",
    "officialTitle": "Subtitles",
    "officialCount": "9 formats",
    "icon": "Subtitles",
    "intro": "SRT, ASS, WebVTT, SAMI (SMI), LRC, TTML and MicroDVD into each other without any engine, saved as UTF-8; SSA and SCC are read. Korean SMI and SRT files in CP949 are read correctly. Subtitles in a video come out with FFmpeg.",
    "routes": [
      {
        "from": [
          {
            "name": "SRT",
            "exts": [
              ".srt"
            ],
            "rawExts": ".srt"
          },
          {
            "name": "ASS",
            "exts": [
              ".ass"
            ],
            "rawExts": ".ass"
          },
          {
            "name": "SSA",
            "exts": [
              ".ssa"
            ],
            "rawExts": "SubStation Alpha — .ssa"
          },
          {
            "name": "WebVTT",
            "exts": [
              ".vtt"
            ],
            "rawExts": ".vtt"
          },
          {
            "name": "SAMI (SMI)",
            "exts": [
              ".smi",
              ".sami"
            ],
            "rawExts": ".smi .sami"
          },
          {
            "name": "LRC",
            "exts": [
              ".lrc"
            ],
            "rawExts": "song lyrics — .lrc"
          },
          {
            "name": "TTML/DFXP",
            "exts": [
              ".ttml",
              ".dfxp"
            ],
            "rawExts": ".ttml .dfxp"
          },
          {
            "name": "MicroDVD",
            "exts": [
              ".sub"
            ],
            "rawExts": ".sub"
          },
          {
            "name": "SCC",
            "exts": [
              ".scc"
            ],
            "rawExts": "Scenarist closed captions — .scc"
          }
        ],
        "to": [
          {
            "name": "SRT",
            "exts": [
              ".srt"
            ],
            "rawExts": ".srt"
          },
          {
            "name": "ASS",
            "exts": [
              ".ass"
            ],
            "rawExts": ".ass"
          },
          {
            "name": "WebVTT",
            "exts": [
              ".vtt"
            ],
            "rawExts": ".vtt"
          },
          {
            "name": "SAMI",
            "exts": [
              ".smi",
              ".sami"
            ],
            "rawExts": ".smi .sami"
          },
          {
            "name": "LRC",
            "exts": [
              ".lrc"
            ],
            "rawExts": "song lyrics — .lrc"
          },
          {
            "name": "TTML",
            "exts": [
              ".ttml",
              ".dfxp"
            ],
            "rawExts": ".ttml .dfxp"
          },
          {
            "name": "MicroDVD",
            "exts": [
              ".sub"
            ],
            "rawExts": ".sub"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "MKV",
            "exts": [
              ".mkv"
            ],
            "rawExts": ".mkv"
          },
          {
            "name": "MP4",
            "exts": [
              ".mp4"
            ],
            "rawExts": ".mp4"
          },
          {
            "name": "MOV",
            "exts": [
              ".mov",
              ".qt"
            ],
            "rawExts": ".mov .qt"
          },
          {
            "name": "WEBM",
            "exts": [
              ".webm"
            ],
            "rawExts": ".webm"
          }
        ],
        "to": [
          {
            "name": "SRT",
            "exts": [
              ".srt"
            ],
            "rawExts": ".srt"
          },
          {
            "name": "ASS",
            "exts": [
              ".ass"
            ],
            "rawExts": ".ass"
          },
          {
            "name": "WebVTT",
            "exts": [
              ".vtt"
            ],
            "rawExts": ".vtt"
          }
        ],
        "engine": "FFmpeg"
      }
    ]
  },
  {
    "id": "archives",
    "name": "Archives & Compressed",
    "officialTitle": "Archives",
    "officialCount": "28 formats",
    "icon": "Archive",
    "intro": "Repack or extract ZIP, 7Z, RAR, TAR, disk images and many more archive formats with the bundled 7-Zip engine, or pack any files into one ZIP.",
    "routes": [
      {
        "from": [
          {
            "name": "ZIP",
            "exts": [
              ".zip",
              ".wbpz"
            ],
            "rawExts": ".zip .wbpz"
          },
          {
            "name": "7Z",
            "exts": [
              ".7z"
            ],
            "rawExts": ".7z"
          },
          {
            "name": "RAR",
            "exts": [
              ".rar"
            ],
            "rawExts": ".rar"
          },
          {
            "name": "TAR",
            "exts": [
              ".tar"
            ],
            "rawExts": ".tar"
          },
          {
            "name": "TAR.GZ",
            "exts": [
              ".tar",
              ".gz",
              ".tgz",
              ".taz"
            ],
            "rawExts": ".tar.gz .tgz .taz"
          },
          {
            "name": "TAR.BZ2",
            "exts": [
              ".tar",
              ".bz2",
              ".tbz2",
              ".tar",
              ".bz",
              ".tbz"
            ],
            "rawExts": ".tar.bz2 .tbz2 .tar.bz .tbz"
          },
          {
            "name": "TAR.XZ",
            "exts": [
              ".tar",
              ".xz",
              ".txz"
            ],
            "rawExts": ".tar.xz .txz"
          },
          {
            "name": "TAR.7Z",
            "exts": [
              ".tar",
              ".7z"
            ],
            "rawExts": ".tar.7z"
          },
          {
            "name": "TAR.LZ",
            "exts": [
              ".tar",
              ".lz",
              ".tlz"
            ],
            "rawExts": ".tar.lz .tlz"
          },
          {
            "name": "TAR.Z",
            "exts": [
              ".tar",
              ".z",
              ".tz"
            ],
            "rawExts": ".tar.z .tz"
          },
          {
            "name": "GZ",
            "exts": [
              ".gz"
            ],
            "rawExts": ".gz"
          },
          {
            "name": "BZ2",
            "exts": [
              ".bz2",
              ".bz"
            ],
            "rawExts": ".bz2 .bz"
          },
          {
            "name": "XZ",
            "exts": [
              ".xz"
            ],
            "rawExts": ".xz"
          },
          {
            "name": "LZ",
            "exts": [
              ".lz"
            ],
            "rawExts": "lzip — .lz"
          },
          {
            "name": "LZMA",
            "exts": [
              ".lzma"
            ],
            "rawExts": ".lzma"
          },
          {
            "name": "Z",
            "exts": [
              ".z"
            ],
            "rawExts": ".z"
          },
          {
            "name": "JAR",
            "exts": [
              ".jar"
            ],
            "rawExts": "Java — .jar"
          },
          {
            "name": "CAB",
            "exts": [
              ".cab"
            ],
            "rawExts": "Windows Cabinet — .cab"
          },
          {
            "name": "CPIO",
            "exts": [
              ".cpio"
            ],
            "rawExts": ".cpio"
          },
          {
            "name": "DEB",
            "exts": [
              ".deb"
            ],
            "rawExts": "Debian/Ubuntu packages — .deb"
          },
          {
            "name": "RPM",
            "exts": [
              ".rpm"
            ],
            "rawExts": "Red Hat/Fedora packages — .rpm"
          },
          {
            "name": "DMG",
            "exts": [
              ".dmg"
            ],
            "rawExts": "macOS disk image — .dmg"
          },
          {
            "name": "ISO",
            "exts": [
              ".iso"
            ],
            "rawExts": "disc image — .iso"
          },
          {
            "name": "IMG",
            "exts": [
              ".img"
            ],
            "rawExts": "disk image — .img"
          },
          {
            "name": "LHA/LZH",
            "exts": [
              ".lha",
              ".lzh"
            ],
            "rawExts": ".lha .lzh"
          },
          {
            "name": "ARJ",
            "exts": [
              ".arj"
            ],
            "rawExts": ".arj"
          },
          {
            "name": "ALZ",
            "exts": [
              ".alz"
            ],
            "rawExts": "ALZip — .alz"
          },
          {
            "name": "EGG",
            "exts": [
              ".egg"
            ],
            "rawExts": "ALZip — .egg"
          }
        ],
        "to": [
          {
            "name": "ZIP",
            "exts": [
              ".zip",
              ".wbpz"
            ],
            "rawExts": ".zip .wbpz"
          },
          {
            "name": "7Z",
            "exts": [
              ".7z"
            ],
            "rawExts": ".7z"
          },
          {
            "name": "TAR",
            "exts": [
              ".tar"
            ],
            "rawExts": ".tar"
          },
          {
            "name": "TAR.GZ",
            "exts": [
              ".tar",
              ".gz",
              ".tgz",
              ".taz"
            ],
            "rawExts": ".tar.gz .tgz .taz"
          }
        ],
        "engine": "Built in7-Zip"
      },
      {
        "from": [],
        "to": [
          {
            "name": "ZIP",
            "exts": [
              ".zip",
              ".wbpz"
            ],
            "rawExts": ".zip .wbpz"
          }
        ],
        "engine": "Built in"
      }
    ]
  },
  {
    "id": "cad",
    "name": "CAD Drawings",
    "officialTitle": "CAD drawings",
    "officialCount": "2 formats",
    "icon": "Compass",
    "intro": "AutoCAD DWG and DXF: convert between them or to PDF, SVG and PNG, without AutoCAD.",
    "routes": [
      {
        "from": [
          {
            "name": "DWG",
            "exts": [
              ".dwg"
            ],
            "rawExts": ".dwg"
          }
        ],
        "to": [
          {
            "name": "DXF",
            "exts": [
              ".dxf"
            ],
            "rawExts": ".dxf"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "DXF",
            "exts": [
              ".dxf"
            ],
            "rawExts": ".dxf"
          }
        ],
        "to": [
          {
            "name": "DWG",
            "exts": [
              ".dwg"
            ],
            "rawExts": ".dwg"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "DWG",
            "exts": [
              ".dwg"
            ],
            "rawExts": ".dwg"
          },
          {
            "name": "DXF",
            "exts": [
              ".dxf"
            ],
            "rawExts": ".dxf"
          }
        ],
        "to": [
          {
            "name": "PDF",
            "exts": [
              ".pdf"
            ],
            "rawExts": ".pdf"
          },
          {
            "name": "SVG",
            "exts": [
              ".svg"
            ],
            "rawExts": ".svg"
          },
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          }
        ],
        "engine": "Built in"
      }
    ]
  },
  {
    "id": "models3d",
    "name": "3D Models",
    "officialTitle": "3D models",
    "officialCount": "7 formats",
    "icon": "Box",
    "intro": "GLB, glTF, STL, OBJ, 3MF and PLY into each other, and FBX into any of them, with colours, textures and materials where the format keeps them, and to a shaded PNG or JPG picture. Nothing to install.",
    "routes": [
      {
        "from": [
          {
            "name": "GLB",
            "exts": [
              ".glb"
            ],
            "rawExts": ".glb"
          },
          {
            "name": "glTF",
            "exts": [
              ".gltf"
            ],
            "rawExts": ".gltf"
          },
          {
            "name": "STL",
            "exts": [
              ".stl"
            ],
            "rawExts": ".stl"
          },
          {
            "name": "OBJ",
            "exts": [
              ".obj"
            ],
            "rawExts": ".obj"
          },
          {
            "name": "3MF",
            "exts": [
              ".3mf"
            ],
            "rawExts": "3D printing — .3mf"
          },
          {
            "name": "PLY",
            "exts": [
              ".ply"
            ],
            "rawExts": "3D scans — .ply"
          },
          {
            "name": "FBX",
            "exts": [
              ".fbx"
            ],
            "rawExts": "Autodesk FBX — .fbx"
          }
        ],
        "to": [
          {
            "name": "GLB",
            "exts": [
              ".glb"
            ],
            "rawExts": ".glb"
          },
          {
            "name": "glTF",
            "exts": [
              ".gltf"
            ],
            "rawExts": ".gltf"
          },
          {
            "name": "STL",
            "exts": [
              ".stl"
            ],
            "rawExts": ".stl"
          },
          {
            "name": "OBJ",
            "exts": [
              ".obj"
            ],
            "rawExts": ".obj"
          },
          {
            "name": "3MF",
            "exts": [
              ".3mf"
            ],
            "rawExts": "3D printing — .3mf"
          },
          {
            "name": "PLY",
            "exts": [
              ".ply"
            ],
            "rawExts": "3D scans — .ply"
          }
        ],
        "engine": "Built in"
      },
      {
        "from": [
          {
            "name": "GLB",
            "exts": [
              ".glb"
            ],
            "rawExts": ".glb"
          },
          {
            "name": "glTF",
            "exts": [
              ".gltf"
            ],
            "rawExts": ".gltf"
          },
          {
            "name": "STL",
            "exts": [
              ".stl"
            ],
            "rawExts": ".stl"
          },
          {
            "name": "OBJ",
            "exts": [
              ".obj"
            ],
            "rawExts": ".obj"
          },
          {
            "name": "3MF",
            "exts": [
              ".3mf"
            ],
            "rawExts": "3D printing — .3mf"
          },
          {
            "name": "PLY",
            "exts": [
              ".ply"
            ],
            "rawExts": "3D scans — .ply"
          },
          {
            "name": "FBX",
            "exts": [
              ".fbx"
            ],
            "rawExts": "Autodesk FBX — .fbx"
          }
        ],
        "to": [
          {
            "name": "PNG",
            "exts": [
              ".png"
            ],
            "rawExts": ".png"
          },
          {
            "name": "JPG",
            "exts": [
              ".jpg",
              ".jpeg",
              ".jpe",
              ".jfif"
            ],
            "rawExts": ".jpg .jpeg .jpe .jfif"
          }
        ],
        "engine": "Built in"
      }
    ]
  },
  {
    "id": "fonts",
    "name": "Fonts",
    "officialTitle": "Fonts",
    "officialCount": "5 formats",
    "icon": "Type",
    "intro": "Desktop and web fonts: TTF, OTF, WOFF, WOFF2 and EOT into each other.",
    "routes": [
      {
        "from": [
          {
            "name": "TTF",
            "exts": [
              ".ttf"
            ],
            "rawExts": ".ttf"
          },
          {
            "name": "OTF",
            "exts": [
              ".otf"
            ],
            "rawExts": ".otf"
          },
          {
            "name": "WOFF",
            "exts": [
              ".woff"
            ],
            "rawExts": ".woff"
          },
          {
            "name": "WOFF2",
            "exts": [
              ".woff2"
            ],
            "rawExts": ".woff2"
          },
          {
            "name": "EOT",
            "exts": [
              ".eot"
            ],
            "rawExts": "Internet Explorer — .eot"
          }
        ],
        "to": [
          {
            "name": "TTF",
            "exts": [
              ".ttf"
            ],
            "rawExts": ".ttf"
          },
          {
            "name": "OTF",
            "exts": [
              ".otf"
            ],
            "rawExts": ".otf"
          },
          {
            "name": "WOFF",
            "exts": [
              ".woff"
            ],
            "rawExts": ".woff"
          },
          {
            "name": "WOFF2",
            "exts": [
              ".woff2"
            ],
            "rawExts": ".woff2"
          },
          {
            "name": "EOT",
            "exts": [
              ".eot"
            ],
            "rawExts": "Internet Explorer — .eot"
          }
        ],
        "engine": "Built in"
      }
    ]
  }
];

export const ALL_FORMATS: FormatItem[] = [
  {
    "id": "jpg",
    "name": "JPG",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".jpg",
      ".jpeg",
      ".jpe",
      ".jfif"
    ],
    "rawExts": ".jpg .jpeg .jpe .jfif",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "png",
    "name": "PNG",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".png"
    ],
    "rawExts": ".png",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "webp",
    "name": "WEBP",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".webp"
    ],
    "rawExts": ".webp",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "avif",
    "name": "AVIF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".avif"
    ],
    "rawExts": ".avif",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "heic-heif",
    "name": "HEIC/HEIF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".heic",
      ".heif",
      ".hif"
    ],
    "rawExts": ".heic .heif .hif",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG"
    ]
  },
  {
    "id": "tiff",
    "name": "TIFF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".tiff",
      ".tif"
    ],
    "rawExts": ".tiff .tif",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "bmp",
    "name": "BMP",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".bmp",
      ".dib"
    ],
    "rawExts": ".bmp .dib",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "gif",
    "name": "GIF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".gif"
    ],
    "rawExts": ".gif",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC",
      "MP4",
      "WEBM",
      "MOV"
    ]
  },
  {
    "id": "ico",
    "name": "ICO",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".ico"
    ],
    "rawExts": ".ico",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "psd",
    "name": "PSD",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".psd"
    ],
    "rawExts": ".psd",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "psb",
    "name": "PSB",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".psb"
    ],
    "rawExts": ".psb",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "tga",
    "name": "TGA",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".tga",
      ".icb",
      ".vda",
      ".vst"
    ],
    "rawExts": ".tga .icb .vda .vst",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "ppm-pgm-pbm",
    "name": "PPM/PGM/PBM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".ppm",
      ".pgm",
      ".pbm",
      ".pnm"
    ],
    "rawExts": ".ppm .pgm .pbm .pnm",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "jpeg-xl",
    "name": "JPEG XL",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".jxl"
    ],
    "rawExts": ".jxl",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "jpeg-2000",
    "name": "JPEG 2000",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".jp2",
      ".j2k",
      ".jpf",
      ".jpx"
    ],
    "rawExts": ".jp2 .j2k .jpf .jpx",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "xcf",
    "name": "XCF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".xcf"
    ],
    "rawExts": "GIMP — .xcf",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "icns",
    "name": "ICNS",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".icns"
    ],
    "rawExts": ".icns",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "apng",
    "name": "APNG",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".apng"
    ],
    "rawExts": "animated PNG — .apng",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC",
      "MP4",
      "WEBM",
      "MOV"
    ]
  },
  {
    "id": "mng",
    "name": "MNG",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".mng"
    ],
    "rawExts": ".mng",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "qoi",
    "name": "QOI",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".qoi"
    ],
    "rawExts": ".qoi",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "dds",
    "name": "DDS",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".dds"
    ],
    "rawExts": "DirectDraw Surface — .dds",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "pcx",
    "name": "PCX",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".pcx"
    ],
    "rawExts": ".pcx",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "cur",
    "name": "CUR",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".cur"
    ],
    "rawExts": "Windows cursor — .cur",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "xpm",
    "name": "XPM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".xpm"
    ],
    "rawExts": ".xpm",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "xbm",
    "name": "XBM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".xbm"
    ],
    "rawExts": ".xbm",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "wbmp",
    "name": "WBMP",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".wbmp"
    ],
    "rawExts": ".wbmp",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "pam",
    "name": "PAM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".pam"
    ],
    "rawExts": ".pam",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "pfm",
    "name": "PFM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".pfm"
    ],
    "rawExts": ".pfm",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "sgi",
    "name": "SGI",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".sgi",
      ".rgb",
      ".rgba",
      ".bw"
    ],
    "rawExts": ".sgi .rgb .rgba .bw",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "sun-raster",
    "name": "Sun Raster",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".ras",
      ".sun"
    ],
    "rawExts": ".ras .sun",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "miff",
    "name": "MIFF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".miff"
    ],
    "rawExts": "ImageMagick — .miff",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "dicom",
    "name": "DICOM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".dcm",
      ".dicom"
    ],
    "rawExts": "medical images — .dcm .dicom",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "openexr",
    "name": "OpenEXR",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".exr"
    ],
    "rawExts": ".exr",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "radiance-hdr",
    "name": "Radiance HDR",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".hdr"
    ],
    "rawExts": ".hdr",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "photo-cd",
    "name": "Photo CD",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".pcd"
    ],
    "rawExts": "Kodak — .pcd",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "ppm",
    "name": "PPM",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".ppm",
      ".pgm",
      ".pbm",
      ".pnm"
    ],
    "rawExts": ".ppm .pgm .pbm .pnm",
    "engine": "Built inImageMagick",
    "convertsTo": []
  },
  {
    "id": "pdf",
    "name": "PDF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".pdf"
    ],
    "rawExts": ".pdf",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "PNG",
      "JPG",
      "TIFF",
      "DOCX",
      "HWPX",
      "EPUB",
      "TXT",
      "Markdown",
      "HTML",
      "CBZ",
      "PPTX",
      "EPS",
      "PS",
      "SVG",
      "HWP"
    ]
  },
  {
    "id": "dng",
    "name": "DNG",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".dng"
    ],
    "rawExts": "Adobe DNG (Leica, Pentax, phones) — .dng",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "cr2",
    "name": "CR2",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".cr2"
    ],
    "rawExts": "Canon — .cr2",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "cr3",
    "name": "CR3",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".cr3"
    ],
    "rawExts": "Canon — .cr3",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "crw",
    "name": "CRW",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".crw"
    ],
    "rawExts": "Canon — .crw",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "nef",
    "name": "NEF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".nef"
    ],
    "rawExts": "Nikon — .nef",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "nrw",
    "name": "NRW",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".nrw"
    ],
    "rawExts": "Nikon Coolpix — .nrw",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "arw",
    "name": "ARW",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".arw"
    ],
    "rawExts": "Sony — .arw",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "srf",
    "name": "SRF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".srf"
    ],
    "rawExts": "Sony — .srf",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "sr2",
    "name": "SR2",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".sr2"
    ],
    "rawExts": "Sony — .sr2",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "orf",
    "name": "ORF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".orf"
    ],
    "rawExts": "Olympus / OM System — .orf",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "rw2",
    "name": "RW2",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".rw2"
    ],
    "rawExts": "Panasonic — .rw2",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "raf",
    "name": "RAF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".raf"
    ],
    "rawExts": "Fujifilm — .raf",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "pef",
    "name": "PEF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".pef"
    ],
    "rawExts": "Pentax — .pef",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "srw",
    "name": "SRW",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".srw"
    ],
    "rawExts": "Samsung — .srw",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "x3f",
    "name": "X3F",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".x3f"
    ],
    "rawExts": "Sigma — .x3f",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "3fr",
    "name": "3FR",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".3fr"
    ],
    "rawExts": "Hasselblad — .3fr",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "erf",
    "name": "ERF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".erf"
    ],
    "rawExts": "Epson — .erf",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "mos",
    "name": "MOS",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".mos"
    ],
    "rawExts": "Leaf — .mos",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "mrw",
    "name": "MRW",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".mrw"
    ],
    "rawExts": "Minolta — .mrw",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "dcr",
    "name": "DCR",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".dcr"
    ],
    "rawExts": "Kodak — .dcr",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "kdc",
    "name": "KDC",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".kdc"
    ],
    "rawExts": "Kodak — .kdc",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "iiq",
    "name": "IIQ",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".iiq"
    ],
    "rawExts": "Phase One — .iiq",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "fff",
    "name": "FFF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".fff"
    ],
    "rawExts": "Hasselblad — .fff",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "mef",
    "name": "MEF",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".mef"
    ],
    "rawExts": "Mamiya — .mef",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "rwl",
    "name": "RWL",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".rwl"
    ],
    "rawExts": "Leica — .rwl",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG",
      "HEIC"
    ]
  },
  {
    "id": "svg",
    "name": "SVG",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".svg"
    ],
    "rawExts": ".svg",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "SVG",
      "SVGZ",
      "DXF",
      "DWG",
      "EMF",
      "WMF",
      "ODG"
    ]
  },
  {
    "id": "jpeg-xr",
    "name": "JPEG XR",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".jxr",
      ".wdp",
      ".hdp"
    ],
    "rawExts": "Windows HDR screenshots — .jxr .wdp .hdp",
    "engine": "FFmpeg",
    "convertsTo": [
      "HEIC",
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "SVG"
    ]
  },
  {
    "id": "heic",
    "name": "HEIC",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".heic",
      ".heif",
      ".hif"
    ],
    "rawExts": ".heic .heif .hif",
    "engine": "FFmpeg",
    "convertsTo": []
  },
  {
    "id": "live-photo--livp-",
    "name": "Live Photo (LIVP)",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".livp"
    ],
    "rawExts": "iPhone Live Photo from iCloud — .livp",
    "engine": "Built inImageMagick",
    "convertsTo": [
      "JPG",
      "PNG",
      "WEBP",
      "AVIF",
      "TIFF",
      "BMP",
      "GIF",
      "ICO",
      "PSD",
      "TGA",
      "PPM",
      "JPEG XL",
      "JPEG 2000",
      "ICNS",
      "PDF",
      "APNG",
      "MNG",
      "QOI",
      "DDS",
      "PCX",
      "CUR",
      "XPM",
      "XBM",
      "WBMP",
      "PAM",
      "PFM",
      "SGI",
      "Sun Raster",
      "MIFF",
      "MP4",
      "MOV"
    ]
  },
  {
    "id": "mp4",
    "name": "MP4",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".mp4"
    ],
    "rawExts": ".mp4",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG",
      "SRT",
      "ASS",
      "WebVTT"
    ]
  },
  {
    "id": "mov",
    "name": "MOV",
    "categoryId": "images",
    "categoryName": "Images & Photography",
    "exts": [
      ".mov",
      ".qt"
    ],
    "rawExts": ".mov .qt",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG",
      "SRT",
      "ASS",
      "WebVTT"
    ]
  },
  {
    "id": "svgz",
    "name": "SVGZ",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".svgz"
    ],
    "rawExts": ".svgz",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "SVG",
      "SVGZ",
      "DXF",
      "DWG"
    ]
  },
  {
    "id": "dxf",
    "name": "DXF",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".dxf"
    ],
    "rawExts": ".dxf",
    "engine": "Built in",
    "convertsTo": [
      "DWG",
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "dwg",
    "name": "DWG",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".dwg"
    ],
    "rawExts": ".dwg",
    "engine": "Built in",
    "convertsTo": [
      "DXF",
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "emf",
    "name": "EMF",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".emf"
    ],
    "rawExts": ".emf",
    "engine": "LibreOffice",
    "convertsTo": [
      "PNG",
      "PDF"
    ]
  },
  {
    "id": "wmf",
    "name": "WMF",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".wmf"
    ],
    "rawExts": ".wmf",
    "engine": "LibreOffice",
    "convertsTo": [
      "PNG",
      "PDF"
    ]
  },
  {
    "id": "odg",
    "name": "ODG",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".odg"
    ],
    "rawExts": "LibreOffice Draw — .odg",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "ai",
    "name": "AI",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".ai"
    ],
    "rawExts": "Adobe Illustrator — .ai",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG"
    ]
  },
  {
    "id": "eps",
    "name": "EPS",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".eps",
      ".epsf",
      ".epsi"
    ],
    "rawExts": ".eps .epsf .epsi",
    "engine": "Ghostscript",
    "convertsTo": [
      "PDF",
      "PNG"
    ]
  },
  {
    "id": "ps",
    "name": "PS",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".ps"
    ],
    "rawExts": "PostScript — .ps",
    "engine": "Ghostscript",
    "convertsTo": [
      "PDF",
      "PNG"
    ]
  },
  {
    "id": "cdr",
    "name": "CDR",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".cdr"
    ],
    "rawExts": "CorelDRAW — .cdr",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "cgm",
    "name": "CGM",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".cgm"
    ],
    "rawExts": ".cgm",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "vsd-vsdx",
    "name": "VSD/VSDX",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".vsd",
      ".vsdx"
    ],
    "rawExts": "Microsoft Visio — .vsd .vsdx",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "fodg",
    "name": "FODG",
    "categoryId": "vector",
    "categoryName": "Vector Graphics",
    "exts": [
      ".fodg"
    ],
    "rawExts": "flat OpenDocument drawing — .fodg",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "docx",
    "name": "DOCX",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".docx"
    ],
    "rawExts": ".docx",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "HWPX",
      "HWP",
      "EPUB",
      "TXT",
      "HTML",
      "PNG",
      "JPG",
      "Markdown",
      "FODT",
      "OTT",
      "reStructuredText",
      "LaTeX",
      "Org",
      "AsciiDoc",
      "Typst",
      "MediaWiki",
      "DocBook",
      "Jupyter",
      "Textile",
      "Man page",
      "OPML",
      "KEPUB"
    ]
  },
  {
    "id": "hwpx",
    "name": "HWPX",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".hwpx"
    ],
    "rawExts": ".hwpx",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "TXT",
      "Markdown",
      "HTML",
      "EPUB",
      "HWP"
    ]
  },
  {
    "id": "epub",
    "name": "EPUB",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".epub"
    ],
    "rawExts": ".epub",
    "engine": "Built in",
    "convertsTo": [
      "HWP",
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "KEPUB",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "txt",
    "name": "TXT",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".txt",
      ".log",
      ".py",
      ".pac",
      ".bat",
      ".command"
    ],
    "rawExts": ".txt .log .py .pac .bat .command",
    "engine": "Built in",
    "convertsTo": [
      "HWP",
      "PDF",
      "DOCX",
      "HWPX",
      "EPUB",
      "TXT"
    ]
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".md",
      ".markdown"
    ],
    "rawExts": ".md .markdown",
    "engine": "Built in",
    "convertsTo": [
      "HWPX",
      "HWP",
      "PDF",
      "DOCX",
      "EPUB",
      "reStructuredText",
      "LaTeX",
      "Org",
      "AsciiDoc",
      "Typst",
      "MediaWiki",
      "DocBook",
      "Jupyter",
      "Textile",
      "Man page",
      "OPML",
      "PPTX",
      "KEPUB"
    ]
  },
  {
    "id": "html",
    "name": "HTML",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".html",
      ".htm",
      ".xhtml"
    ],
    "rawExts": ".html .htm .xhtml",
    "engine": "Built in",
    "convertsTo": [
      "HWP",
      "PDF",
      "DOCX",
      "HWPX",
      "EPUB",
      "reStructuredText",
      "LaTeX",
      "Org",
      "AsciiDoc",
      "Typst",
      "MediaWiki",
      "DocBook",
      "Jupyter",
      "Textile",
      "Man page",
      "OPML"
    ]
  },
  {
    "id": "cbz",
    "name": "CBZ",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".cbz"
    ],
    "rawExts": ".cbz",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX"
    ]
  },
  {
    "id": "pptx",
    "name": "PPTX",
    "categoryId": "pdf",
    "categoryName": "PDF",
    "exts": [
      ".pptx"
    ],
    "rawExts": ".pptx",
    "engine": "Built in",
    "convertsTo": [
      "HWPX",
      "HWP",
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "OTP"
    ]
  },
  {
    "id": "docm",
    "name": "DOCM",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".docm"
    ],
    "rawExts": ".docm",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "HWPX",
      "HWP",
      "EPUB",
      "TXT",
      "HTML",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "dotx",
    "name": "DOTX",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".dotx"
    ],
    "rawExts": ".dotx",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "HWPX",
      "HWP",
      "EPUB",
      "TXT",
      "HTML",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "dotm",
    "name": "DOTM",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".dotm"
    ],
    "rawExts": ".dotm",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "HWPX",
      "HWP",
      "EPUB",
      "TXT",
      "HTML",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "hwp",
    "name": "HWP",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".hwp"
    ],
    "rawExts": ".hwp",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "TXT",
      "Markdown",
      "HTML",
      "EPUB",
      "HWPX"
    ]
  },
  {
    "id": "ofd",
    "name": "OFD",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".ofd"
    ],
    "rawExts": "Chinese e-invoices and official documents (GB/T 33190) — .ofd",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "TXT",
      "Markdown",
      "HTML",
      "EPUB"
    ]
  },
  {
    "id": "doc",
    "name": "DOC",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".doc"
    ],
    "rawExts": ".doc",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT",
      "FODT",
      "OTT"
    ]
  },
  {
    "id": "dot",
    "name": "DOT",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".dot"
    ],
    "rawExts": "Word 97–2003 template — .dot",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "odt",
    "name": "ODT",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".odt"
    ],
    "rawExts": "OpenDocument — .odt",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT",
      "FODT",
      "OTT"
    ]
  },
  {
    "id": "fodt",
    "name": "FODT",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".fodt"
    ],
    "rawExts": "flat OpenDocument text — .fodt",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "ott",
    "name": "OTT",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".ott"
    ],
    "rawExts": "OpenDocument template — .ott",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "rtf",
    "name": "RTF",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".rtf"
    ],
    "rawExts": ".rtf",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT",
      "FODT",
      "OTT"
    ]
  },
  {
    "id": "wps",
    "name": "WPS",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".wps"
    ],
    "rawExts": "Microsoft Works / WPS Office — .wps",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "wpd",
    "name": "WPD",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".wpd"
    ],
    "rawExts": "WordPerfect — .wpd",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "lwp",
    "name": "LWP",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".lwp"
    ],
    "rawExts": "Lotus Word Pro — .lwp",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "abw",
    "name": "ABW",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".abw",
      ".zabw"
    ],
    "rawExts": "AbiWord — .abw .zabw",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "pages",
    "name": "Pages",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".pages"
    ],
    "rawExts": "Apple Pages — .pages",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "sdw",
    "name": "SDW",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".sdw"
    ],
    "rawExts": "StarWriter — .sdw",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "clarisworks",
    "name": "ClarisWorks",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".cwk"
    ],
    "rawExts": "ClarisWorks / AppleWorks — .cwk",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "macwrite",
    "name": "MacWrite",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".mcw"
    ],
    "rawExts": ".mcw",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "t602",
    "name": "T602",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".602"
    ],
    "rawExts": ".602",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "pocket-word",
    "name": "Pocket Word",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".psw"
    ],
    "rawExts": ".psw",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "DOCX",
      "ODT"
    ]
  },
  {
    "id": "pub",
    "name": "PUB",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".pub"
    ],
    "rawExts": "Microsoft Publisher — .pub",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "SVG",
      "PNG"
    ]
  },
  {
    "id": "eml",
    "name": "EML",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".eml"
    ],
    "rawExts": ".eml",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "HTML",
      "TXT",
      "ZIP"
    ]
  },
  {
    "id": "msg",
    "name": "MSG",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".msg"
    ],
    "rawExts": "Outlook — .msg",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "HTML",
      "TXT",
      "ZIP",
      "EML"
    ]
  },
  {
    "id": "zip",
    "name": "ZIP",
    "categoryId": "documents",
    "categoryName": "Documents",
    "exts": [
      ".zip",
      ".wbpz"
    ],
    "rawExts": ".zip .wbpz",
    "engine": "Built in",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "xlsx",
    "name": "XLSX",
    "categoryId": "hwp",
    "categoryName": "HWP (Hangul)",
    "exts": [
      ".xlsx"
    ],
    "rawExts": ".xlsx",
    "engine": "Built inFilee HWPX writer",
    "convertsTo": [
      "HWPX",
      "HWP",
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HTML",
      "OTS",
      "XLT",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML"
    ]
  },
  {
    "id": "xlsm",
    "name": "XLSM",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".xlsm"
    ],
    "rawExts": ".xlsm",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML"
    ]
  },
  {
    "id": "xltx",
    "name": "XLTX",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".xltx"
    ],
    "rawExts": ".xltx",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML"
    ]
  },
  {
    "id": "xls",
    "name": "XLS",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".xls"
    ],
    "rawExts": ".xls",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML",
      "OTS",
      "XLT"
    ]
  },
  {
    "id": "xlt",
    "name": "XLT",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".xlt"
    ],
    "rawExts": "Excel 97–2003 template — .xlt",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML"
    ]
  },
  {
    "id": "ods",
    "name": "ODS",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".ods"
    ],
    "rawExts": "OpenDocument — .ods",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML",
      "OTS",
      "XLT"
    ]
  },
  {
    "id": "csv",
    "name": "CSV",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".csv"
    ],
    "rawExts": ".csv",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML",
      "vCard"
    ]
  },
  {
    "id": "tsv",
    "name": "TSV",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".tsv",
      ".tab"
    ],
    "rawExts": ".tsv .tab",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "XLSX",
      "CSV",
      "TSV",
      "ODS",
      "JSON",
      "HWPX",
      "HTML"
    ]
  },
  {
    "id": "json",
    "name": "JSON",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".json"
    ],
    "rawExts": ".json",
    "engine": "Built in",
    "convertsTo": [
      "JSON",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML",
      "CSV",
      "XLSX"
    ]
  },
  {
    "id": "numbers",
    "name": "Numbers",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".numbers"
    ],
    "rawExts": "Apple Numbers — .numbers",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "XLSX"
    ]
  },
  {
    "id": "et",
    "name": "ET",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".et"
    ],
    "rawExts": "WPS Spreadsheets — .et",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "XLSX"
    ]
  },
  {
    "id": "sdc",
    "name": "SDC",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".sdc"
    ],
    "rawExts": "StarCalc — .sdc",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "XLSX"
    ]
  },
  {
    "id": "fods",
    "name": "FODS",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".fods"
    ],
    "rawExts": "flat OpenDocument spreadsheet — .fods",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "XLSX"
    ]
  },
  {
    "id": "ots",
    "name": "OTS",
    "categoryId": "spreadsheets",
    "categoryName": "Spreadsheets",
    "exts": [
      ".ots"
    ],
    "rawExts": "OpenDocument template — .ots",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "XLSX"
    ]
  },
  {
    "id": "pptm",
    "name": "PPTM",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".pptm"
    ],
    "rawExts": ".pptm",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "HWPX"
    ]
  },
  {
    "id": "potx",
    "name": "POTX",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".potx"
    ],
    "rawExts": ".potx",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "HWPX"
    ]
  },
  {
    "id": "potm",
    "name": "POTM",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".potm"
    ],
    "rawExts": ".potm",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "HWPX"
    ]
  },
  {
    "id": "ppsx",
    "name": "PPSX",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".ppsx"
    ],
    "rawExts": ".ppsx",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "PNG",
      "JPG",
      "DOCX",
      "HWPX"
    ]
  },
  {
    "id": "ppt",
    "name": "PPT",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".ppt",
      ".pps",
      ".pot"
    ],
    "rawExts": ".ppt .pps .pot",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP",
      "OTP"
    ]
  },
  {
    "id": "odp",
    "name": "ODP",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".odp"
    ],
    "rawExts": "OpenDocument — .odp",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP",
      "OTP"
    ]
  },
  {
    "id": "otp",
    "name": "OTP",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".otp"
    ],
    "rawExts": "OpenDocument template — .otp",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP"
    ]
  },
  {
    "id": "fodp",
    "name": "FODP",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".fodp"
    ],
    "rawExts": "flat OpenDocument presentation — .fodp",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP"
    ]
  },
  {
    "id": "keynote",
    "name": "Keynote",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".key"
    ],
    "rawExts": "Apple Keynote — .key",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP"
    ]
  },
  {
    "id": "dps",
    "name": "DPS",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".dps"
    ],
    "rawExts": "WPS Presentation — .dps",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP"
    ]
  },
  {
    "id": "sda",
    "name": "SDA",
    "categoryId": "presentations",
    "categoryName": "Presentations",
    "exts": [
      ".sda",
      ".sdd"
    ],
    "rawExts": "StarImpress / StarDraw — .sda .sdd",
    "engine": "LibreOffice",
    "convertsTo": [
      "PDF",
      "PPTX",
      "ODP"
    ]
  },
  {
    "id": "mhtml",
    "name": "MHTML",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".mhtml",
      ".mht"
    ],
    "rawExts": "web page saved as a single file — .mhtml .mht",
    "engine": "Built in",
    "convertsTo": [
      "HTML",
      "PDF",
      "DOCX",
      "HWPX",
      "TXT",
      "Markdown",
      "EPUB"
    ]
  },
  {
    "id": "restructuredtext",
    "name": "reStructuredText",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".rst"
    ],
    "rawExts": ".rst",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".tex",
      ".latex"
    ],
    "rawExts": ".tex .latex",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT"
    ]
  },
  {
    "id": "org",
    "name": "Org",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".org"
    ],
    "rawExts": "Emacs Org mode — .org",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".adoc",
      ".asciidoc"
    ],
    "rawExts": ".adoc .asciidoc",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "typst",
    "name": "Typst",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".typ"
    ],
    "rawExts": ".typ",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "mediawiki",
    "name": "MediaWiki",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".mediawiki",
      ".wiki"
    ],
    "rawExts": ".mediawiki .wiki",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "docbook",
    "name": "DocBook",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".dbk",
      ".docbook"
    ],
    "rawExts": ".dbk .docbook",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT"
    ]
  },
  {
    "id": "jupyter",
    "name": "Jupyter",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".ipynb"
    ],
    "rawExts": "Jupyter notebook — .ipynb",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "textile",
    "name": "Textile",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".textile"
    ],
    "rawExts": ".textile",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT",
      "PPTX"
    ]
  },
  {
    "id": "man-page",
    "name": "Man page",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".man"
    ],
    "rawExts": "Unix manual page — .man",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT"
    ]
  },
  {
    "id": "opml",
    "name": "OPML",
    "categoryId": "text",
    "categoryName": "Text & Markup",
    "exts": [
      ".opml"
    ],
    "rawExts": ".opml",
    "engine": "Pandoc",
    "convertsTo": [
      "PDF",
      "DOCX",
      "HWPX",
      "ODT",
      "HTML",
      "Markdown",
      "EPUB",
      "TXT"
    ]
  },
  {
    "id": "json-lines",
    "name": "JSON Lines",
    "categoryId": "data",
    "categoryName": "Structured Data",
    "exts": [
      ".jsonl",
      ".ndjson"
    ],
    "rawExts": ".jsonl .ndjson",
    "engine": "Built in",
    "convertsTo": [
      "JSON",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML",
      "CSV",
      "XLSX"
    ]
  },
  {
    "id": "yaml",
    "name": "YAML",
    "categoryId": "data",
    "categoryName": "Structured Data",
    "exts": [
      ".yaml",
      ".yml"
    ],
    "rawExts": ".yaml .yml",
    "engine": "Built in",
    "convertsTo": [
      "JSON",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML",
      "CSV",
      "XLSX"
    ]
  },
  {
    "id": "toml",
    "name": "TOML",
    "categoryId": "data",
    "categoryName": "Structured Data",
    "exts": [
      ".toml"
    ],
    "rawExts": ".toml",
    "engine": "Built in",
    "convertsTo": [
      "JSON",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML",
      "CSV",
      "XLSX"
    ]
  },
  {
    "id": "xml",
    "name": "XML",
    "categoryId": "data",
    "categoryName": "Structured Data",
    "exts": [
      ".xml"
    ],
    "rawExts": ".xml",
    "engine": "Built in",
    "convertsTo": [
      "JSON",
      "JSON Lines",
      "YAML",
      "TOML",
      "XML",
      "CSV",
      "XLSX"
    ]
  },
  {
    "id": "vcard",
    "name": "vCard",
    "categoryId": "data",
    "categoryName": "Structured Data",
    "exts": [
      ".vcf",
      ".vcard"
    ],
    "rawExts": ".vcf .vcard",
    "engine": "Built in",
    "convertsTo": [
      "CSV",
      "XLSX"
    ]
  },
  {
    "id": "kepub",
    "name": "KEPUB",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".kepub",
      ".epub"
    ],
    "rawExts": "Kobo — .kepub.epub .kepub",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX"
    ]
  },
  {
    "id": "mobi",
    "name": "MOBI",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".mobi"
    ],
    "rawExts": ".mobi",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "KEPUB",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "azw",
    "name": "AZW",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".azw"
    ],
    "rawExts": "Kindle — .azw",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "azw3",
    "name": "AZW3",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".azw3"
    ],
    "rawExts": "Kindle — .azw3",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "KEPUB",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "azw4",
    "name": "AZW4",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".azw4"
    ],
    "rawExts": "Kindle — .azw4",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "prc",
    "name": "PRC",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".prc"
    ],
    "rawExts": "Mobipocket — .prc",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "fb2",
    "name": "FB2",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".fb2"
    ],
    "rawExts": "FictionBook — .fb2",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "KEPUB",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "cbr",
    "name": "CBR",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".cbr"
    ],
    "rawExts": ".cbr",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX"
    ]
  },
  {
    "id": "cb7",
    "name": "CB7",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".cb7"
    ],
    "rawExts": ".cb7",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX"
    ]
  },
  {
    "id": "cbt",
    "name": "CBT",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".cbt"
    ],
    "rawExts": ".cbt",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX"
    ]
  },
  {
    "id": "cbc",
    "name": "CBC",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".cbc"
    ],
    "rawExts": ".cbc",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX"
    ]
  },
  {
    "id": "htmlz",
    "name": "HTMLZ",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".htmlz"
    ],
    "rawExts": ".htmlz",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "txtz",
    "name": "TXTZ",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".txtz"
    ],
    "rawExts": ".txtz",
    "engine": "Built in",
    "convertsTo": [
      "PDF",
      "EPUB",
      "DOCX",
      "TXT",
      "HTML",
      "HWPX",
      "MOBI",
      "AZW3"
    ]
  },
  {
    "id": "lit",
    "name": "LIT",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".lit"
    ],
    "rawExts": "Microsoft Reader — .lit",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "lrf",
    "name": "LRF",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".lrf"
    ],
    "rawExts": "Sony Reader — .lrf",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "chm",
    "name": "CHM",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".chm"
    ],
    "rawExts": "Compiled HTML Help — .chm",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "pdb",
    "name": "PDB",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".pdb"
    ],
    "rawExts": "Palm eReader — .pdb",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "pml",
    "name": "PML",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".pml"
    ],
    "rawExts": ".pml",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "rb",
    "name": "RB",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".rb"
    ],
    "rawExts": "Rocket eBook — .rb",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "snb",
    "name": "SNB",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".snb"
    ],
    "rawExts": "Shanda Bambook — .snb",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "tcr",
    "name": "TCR",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".tcr"
    ],
    "rawExts": "Psion — .tcr",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "oeb",
    "name": "OEB",
    "categoryId": "ebooks",
    "categoryName": "E-books & Comics",
    "exts": [
      ".oeb",
      ".opf"
    ],
    "rawExts": "Open eBook — .oeb .opf",
    "engine": "Calibre",
    "convertsTo": [
      "EPUB",
      "PDF",
      "DOCX",
      "TXT",
      "HTML"
    ]
  },
  {
    "id": "m4v",
    "name": "M4V",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".m4v"
    ],
    "rawExts": "iTunes video — .m4v",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "mkv",
    "name": "MKV",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".mkv"
    ],
    "rawExts": ".mkv",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG",
      "SRT",
      "ASS",
      "WebVTT"
    ]
  },
  {
    "id": "webm",
    "name": "WEBM",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".webm"
    ],
    "rawExts": ".webm",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG",
      "SRT",
      "ASS",
      "WebVTT"
    ]
  },
  {
    "id": "avi",
    "name": "AVI",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".avi",
      ".divx"
    ],
    "rawExts": ".avi .divx",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "wmv",
    "name": "WMV",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".wmv",
      ".asf"
    ],
    "rawExts": ".wmv .asf",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "flv",
    "name": "FLV",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".flv",
      ".f4v"
    ],
    "rawExts": ".flv .f4v",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "mpeg",
    "name": "MPEG",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".dat",
      ".mpg",
      ".mpeg",
      ".mpe",
      ".m1v",
      ".m2v"
    ],
    "rawExts": "MPEG-1/2, Video CD (.dat) — .mpg .mpeg .mpe .m1v .m2v .dat",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "ts",
    "name": "TS",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".ts"
    ],
    "rawExts": ".ts",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "m2ts-mts",
    "name": "M2TS/MTS",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".m2ts",
      ".mts",
      ".m2t"
    ],
    "rawExts": ".m2ts .mts .m2t",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "3gp",
    "name": "3GP",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".3gp",
      ".3gpp"
    ],
    "rawExts": ".3gp .3gpp",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "3g2",
    "name": "3G2",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".3g2"
    ],
    "rawExts": ".3g2",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "ogv",
    "name": "OGV",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".ogv"
    ],
    "rawExts": ".ogv",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "vob",
    "name": "VOB",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".vob"
    ],
    "rawExts": "DVD — .vob",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "mod",
    "name": "MOD",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".mod",
      ".tod"
    ],
    "rawExts": "JVC / Panasonic camcorders — .mod .tod",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "dv",
    "name": "DV",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".dv",
      ".dif"
    ],
    "rawExts": ".dv .dif",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "mxf",
    "name": "MXF",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".mxf"
    ],
    "rawExts": ".mxf",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "rm-rmvb",
    "name": "RM/RMVB",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".rm",
      ".rmvb"
    ],
    "rawExts": "RealMedia — .rm .rmvb",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "swf",
    "name": "SWF",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".swf"
    ],
    "rawExts": "Flash — .swf",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "wtv",
    "name": "WTV",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".wtv",
      ".dvr-ms",
      ".dvr"
    ],
    "rawExts": "Windows Media Center — .wtv .dvr-ms .dvr",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "cavs",
    "name": "CAVS",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".cavs"
    ],
    "rawExts": ".cavs",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP4",
      "WEBM",
      "MOV",
      "MKV",
      "AVI",
      "GIF",
      "APNG",
      "MP3",
      "M4A",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "mp3",
    "name": "MP3",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".mp3"
    ],
    "rawExts": ".mp3",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "m4a",
    "name": "M4A",
    "categoryId": "video",
    "categoryName": "Video",
    "exts": [
      ".m4a"
    ],
    "rawExts": ".m4a",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "m4b",
    "name": "M4B",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".m4b"
    ],
    "rawExts": "audiobooks — .m4b",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "aac",
    "name": "AAC",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".aac"
    ],
    "rawExts": ".aac",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "wav",
    "name": "WAV",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".wav",
      ".wave"
    ],
    "rawExts": ".wav .wave",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "flac",
    "name": "FLAC",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".flac"
    ],
    "rawExts": ".flac",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "ogg",
    "name": "OGG",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".ogg",
      ".oga"
    ],
    "rawExts": ".ogg .oga",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "opus",
    "name": "OPUS",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".opus"
    ],
    "rawExts": ".opus",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "wma",
    "name": "WMA",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".wma"
    ],
    "rawExts": ".wma",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "aiff",
    "name": "AIFF",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".aiff",
      ".aif",
      ".aifc"
    ],
    "rawExts": ".aiff .aif .aifc",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "ac3",
    "name": "AC3",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".ac3"
    ],
    "rawExts": ".ac3",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "amr",
    "name": "AMR",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".amr"
    ],
    "rawExts": ".amr",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "au",
    "name": "AU",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".au",
      ".snd"
    ],
    "rawExts": ".au .snd",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "caf",
    "name": "CAF",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".caf"
    ],
    "rawExts": ".caf",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "weba",
    "name": "WEBA",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".weba"
    ],
    "rawExts": ".weba",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "mka",
    "name": "MKA",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".mka"
    ],
    "rawExts": ".mka",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "mp2",
    "name": "MP2",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".mp2",
      ".mpa"
    ],
    "rawExts": ".mp2 .mpa",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "dss",
    "name": "DSS",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".dss"
    ],
    "rawExts": "Olympus / Philips dictation — .dss",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "voc",
    "name": "VOC",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".voc"
    ],
    "rawExts": ".voc",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "wavpack",
    "name": "WavPack",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".wv"
    ],
    "rawExts": ".wv",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "tta",
    "name": "TTA",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".tta"
    ],
    "rawExts": ".tta",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "w64",
    "name": "W64",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".w64"
    ],
    "rawExts": "Sony Wave64 — .w64",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "e-ac3",
    "name": "E-AC3",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".eac3",
      ".ec3"
    ],
    "rawExts": "Dolby Digital Plus — .eac3 .ec3",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "ape",
    "name": "APE",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".ape"
    ],
    "rawExts": "Monkey's Audio — .ape",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "musepack",
    "name": "Musepack",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".mpc",
      ".mpp",
      ".mp"
    ],
    "rawExts": ".mpc .mpp .mp+",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "tak",
    "name": "TAK",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".tak"
    ],
    "rawExts": ".tak",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "dsf",
    "name": "DSF",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".dsf"
    ],
    "rawExts": "DSD — .dsf",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "dff",
    "name": "DFF",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".dff"
    ],
    "rawExts": "DSD — .dff",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "dts",
    "name": "DTS",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".dts"
    ],
    "rawExts": ".dts",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "speex",
    "name": "Speex",
    "categoryId": "audio",
    "categoryName": "Audio",
    "exts": [
      ".spx"
    ],
    "rawExts": ".spx",
    "engine": "FFmpeg",
    "convertsTo": [
      "MP3",
      "M4A",
      "WAV",
      "FLAC",
      "OGG",
      "OPUS",
      "AAC",
      "WavPack",
      "TTA",
      "W64",
      "AC3",
      "E-AC3"
    ]
  },
  {
    "id": "srt",
    "name": "SRT",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".srt"
    ],
    "rawExts": ".srt",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "ass",
    "name": "ASS",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".ass"
    ],
    "rawExts": ".ass",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "ssa",
    "name": "SSA",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".ssa"
    ],
    "rawExts": "SubStation Alpha — .ssa",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "webvtt",
    "name": "WebVTT",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".vtt"
    ],
    "rawExts": ".vtt",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "sami--smi-",
    "name": "SAMI (SMI)",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".smi",
      ".sami"
    ],
    "rawExts": ".smi .sami",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "lrc",
    "name": "LRC",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".lrc"
    ],
    "rawExts": "song lyrics — .lrc",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "ttml-dfxp",
    "name": "TTML/DFXP",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".ttml",
      ".dfxp"
    ],
    "rawExts": ".ttml .dfxp",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "microdvd",
    "name": "MicroDVD",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".sub"
    ],
    "rawExts": ".sub",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "scc",
    "name": "SCC",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".scc"
    ],
    "rawExts": "Scenarist closed captions — .scc",
    "engine": "Built in",
    "convertsTo": [
      "SRT",
      "ASS",
      "WebVTT",
      "SAMI",
      "LRC",
      "TTML",
      "MicroDVD"
    ]
  },
  {
    "id": "sami",
    "name": "SAMI",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".smi",
      ".sami"
    ],
    "rawExts": ".smi .sami",
    "engine": "Built in",
    "convertsTo": []
  },
  {
    "id": "ttml",
    "name": "TTML",
    "categoryId": "subtitles",
    "categoryName": "Subtitles",
    "exts": [
      ".ttml",
      ".dfxp"
    ],
    "rawExts": ".ttml .dfxp",
    "engine": "Built in",
    "convertsTo": []
  },
  {
    "id": "7z",
    "name": "7Z",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".7z"
    ],
    "rawExts": ".7z",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "rar",
    "name": "RAR",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".rar"
    ],
    "rawExts": ".rar",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar",
    "name": "TAR",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar"
    ],
    "rawExts": ".tar",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar-gz",
    "name": "TAR.GZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar",
      ".gz",
      ".tgz",
      ".taz"
    ],
    "rawExts": ".tar.gz .tgz .taz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar-bz2",
    "name": "TAR.BZ2",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar",
      ".bz2",
      ".tbz2",
      ".bz",
      ".tbz"
    ],
    "rawExts": ".tar.bz2 .tbz2 .tar.bz .tbz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar-xz",
    "name": "TAR.XZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar",
      ".xz",
      ".txz"
    ],
    "rawExts": ".tar.xz .txz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar-7z",
    "name": "TAR.7Z",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar",
      ".7z"
    ],
    "rawExts": ".tar.7z",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar-lz",
    "name": "TAR.LZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar",
      ".lz",
      ".tlz"
    ],
    "rawExts": ".tar.lz .tlz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "tar-z",
    "name": "TAR.Z",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".tar",
      ".z",
      ".tz"
    ],
    "rawExts": ".tar.z .tz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "gz",
    "name": "GZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".gz"
    ],
    "rawExts": ".gz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "bz2",
    "name": "BZ2",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".bz2",
      ".bz"
    ],
    "rawExts": ".bz2 .bz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "xz",
    "name": "XZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".xz"
    ],
    "rawExts": ".xz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "lz",
    "name": "LZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".lz"
    ],
    "rawExts": "lzip — .lz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "lzma",
    "name": "LZMA",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".lzma"
    ],
    "rawExts": ".lzma",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "z",
    "name": "Z",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".z"
    ],
    "rawExts": ".z",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "jar",
    "name": "JAR",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".jar"
    ],
    "rawExts": "Java — .jar",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "cab",
    "name": "CAB",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".cab"
    ],
    "rawExts": "Windows Cabinet — .cab",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "cpio",
    "name": "CPIO",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".cpio"
    ],
    "rawExts": ".cpio",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "deb",
    "name": "DEB",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".deb"
    ],
    "rawExts": "Debian/Ubuntu packages — .deb",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "rpm",
    "name": "RPM",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".rpm"
    ],
    "rawExts": "Red Hat/Fedora packages — .rpm",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "dmg",
    "name": "DMG",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".dmg"
    ],
    "rawExts": "macOS disk image — .dmg",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "iso",
    "name": "ISO",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".iso"
    ],
    "rawExts": "disc image — .iso",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "img",
    "name": "IMG",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".img"
    ],
    "rawExts": "disk image — .img",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "lha-lzh",
    "name": "LHA/LZH",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".lha",
      ".lzh"
    ],
    "rawExts": ".lha .lzh",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "arj",
    "name": "ARJ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".arj"
    ],
    "rawExts": ".arj",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "alz",
    "name": "ALZ",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".alz"
    ],
    "rawExts": "ALZip — .alz",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "egg",
    "name": "EGG",
    "categoryId": "archives",
    "categoryName": "Archives & Compressed",
    "exts": [
      ".egg"
    ],
    "rawExts": "ALZip — .egg",
    "engine": "Built in7-Zip",
    "convertsTo": [
      "ZIP",
      "7Z",
      "TAR",
      "TAR.GZ"
    ]
  },
  {
    "id": "glb",
    "name": "GLB",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".glb"
    ],
    "rawExts": ".glb",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "gltf",
    "name": "glTF",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".gltf"
    ],
    "rawExts": ".gltf",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "stl",
    "name": "STL",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".stl"
    ],
    "rawExts": ".stl",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "obj",
    "name": "OBJ",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".obj"
    ],
    "rawExts": ".obj",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "3mf",
    "name": "3MF",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".3mf"
    ],
    "rawExts": "3D printing — .3mf",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "ply",
    "name": "PLY",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".ply"
    ],
    "rawExts": "3D scans — .ply",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "fbx",
    "name": "FBX",
    "categoryId": "models3d",
    "categoryName": "3D Models",
    "exts": [
      ".fbx"
    ],
    "rawExts": "Autodesk FBX — .fbx",
    "engine": "Built in",
    "convertsTo": [
      "GLB",
      "glTF",
      "STL",
      "OBJ",
      "3MF",
      "PLY",
      "PNG",
      "JPG"
    ]
  },
  {
    "id": "ttf",
    "name": "TTF",
    "categoryId": "fonts",
    "categoryName": "Fonts",
    "exts": [
      ".ttf"
    ],
    "rawExts": ".ttf",
    "engine": "Built in",
    "convertsTo": [
      "TTF",
      "OTF",
      "WOFF",
      "WOFF2",
      "EOT"
    ]
  },
  {
    "id": "otf",
    "name": "OTF",
    "categoryId": "fonts",
    "categoryName": "Fonts",
    "exts": [
      ".otf"
    ],
    "rawExts": ".otf",
    "engine": "Built in",
    "convertsTo": [
      "TTF",
      "OTF",
      "WOFF",
      "WOFF2",
      "EOT"
    ]
  },
  {
    "id": "woff",
    "name": "WOFF",
    "categoryId": "fonts",
    "categoryName": "Fonts",
    "exts": [
      ".woff"
    ],
    "rawExts": ".woff",
    "engine": "Built in",
    "convertsTo": [
      "TTF",
      "OTF",
      "WOFF",
      "WOFF2",
      "EOT"
    ]
  },
  {
    "id": "woff2",
    "name": "WOFF2",
    "categoryId": "fonts",
    "categoryName": "Fonts",
    "exts": [
      ".woff2"
    ],
    "rawExts": ".woff2",
    "engine": "Built in",
    "convertsTo": [
      "TTF",
      "OTF",
      "WOFF",
      "WOFF2",
      "EOT"
    ]
  },
  {
    "id": "eot",
    "name": "EOT",
    "categoryId": "fonts",
    "categoryName": "Fonts",
    "exts": [
      ".eot"
    ],
    "rawExts": "Internet Explorer — .eot",
    "engine": "Built in",
    "convertsTo": [
      "TTF",
      "OTF",
      "WOFF",
      "WOFF2",
      "EOT"
    ]
  }
];

// Map for quick extension lookup
const EXT_MAP = new Map<string, FormatItem>();
ALL_FORMATS.forEach(fmt => {
  fmt.exts.forEach(ext => {
    const clean = ext.toLowerCase().replace(/^\./, "");
    if (!EXT_MAP.has(clean)) {
      EXT_MAP.set(clean, fmt);
    }
  });
});

export function findFormatByExtension(ext: string): FormatItem | undefined {
  const clean = ext.toLowerCase().replace(/^\./, "");
  return EXT_MAP.get(clean);
}

export function findFormatByName(name: string): FormatItem | undefined {
  const lower = name.toLowerCase().trim();
  return ALL_FORMATS.find(f => f.name.toLowerCase() === lower || f.id === lower);
}

export function getCompatibleTargets(sourceIdentifier: string): { name: string; exts: string[]; engine: string }[] {
  const fmt = findFormatByExtension(sourceIdentifier) || findFormatByName(sourceIdentifier);
  if (!fmt) return [];

  const targets = new Map<string, { name: string; exts: string[]; engine: string }>();

  // Look up in routes
  CATEGORIES.forEach(cat => {
    cat.routes.forEach(route => {
      const isFrom = route.from.some(f => f.name.toLowerCase() === fmt.name.toLowerCase() || f.exts.some(e => fmt.exts.includes(e)));
      if (isFrom) {
        route.to.forEach(t => {
          if (!targets.has(t.name)) {
            targets.set(t.name, {
              name: t.name,
              exts: t.exts,
              engine: route.engine
            });
          }
        });
      }
    });
  });

  // Also include direct convertsTo if not already mapped
  fmt.convertsTo.forEach(tName => {
    if (!targets.has(tName)) {
      const targetFmt = findFormatByName(tName);
      targets.set(tName, {
        name: tName,
        exts: targetFmt ? targetFmt.exts : [ "." + tName.toLowerCase() ],
        engine: fmt.engine
      });
    }
  });

  return Array.from(targets.values());
}

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  BookOpen,
  Info
} from 'lucide-react';
import { CATEGORIES, ALL_FORMATS, FormatItem, CategoryInfo } from '../data/formatCatalogue';

interface FormatCatalogueProps {
  onSelectFormatForConversion?: (format: FormatItem) => void;
}

export const FormatCatalogue: React.FC<FormatCatalogueProps> = ({
  onSelectFormatForConversion
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLetter, setActiveLetter] = useState<string>('all');
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  // Alphabet list for quick jumping
  const alphabet = ['all', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredFormats = useMemo(() => {
    return ALL_FORMATS.filter(fmt => {
      // Category filter
      if (selectedCatId !== 'all' && fmt.categoryId !== selectedCatId) {
        return false;
      }
      // Letter filter
      if (activeLetter !== 'all' && !fmt.name.toUpperCase().startsWith(activeLetter)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = fmt.name.toLowerCase().includes(q);
        const matchesExt = fmt.exts.some(e => e.toLowerCase().includes(q));
        const matchesCat = fmt.categoryName.toLowerCase().includes(q);
        const matchesEngine = fmt.engine.toLowerCase().includes(q);
        return matchesName || matchesExt || matchesCat || matchesEngine;
      }
      return true;
    });
  }, [selectedCatId, activeLetter, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-black tracking-tight text-[#2a150c] dark:text-[#fff1e3]">
              244+ Format Catalogue
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#e8532b] text-white">
              Official Reference
            </span>
          </div>
          <p className="text-sm opacity-80 mt-1 font-medium">
            Searchable registry reproducing the complete official catalogue from <a href="https://filee.sh/formats/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-[#e8532b]">filee.sh/formats/</a> across all 17 categories.
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold opacity-75">Catalogue Coverage:</span>
          <p className="text-lg font-black text-[#e8532b]">278 Format Profiles · 69 Route Sets</p>
        </div>
      </div>

      {/* Search Bar & A-Z Quick Bar */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
          <input
            type="text"
            placeholder="Search any format by name, extension (e.g. .heic, .mkv, .dxf, .psd), or engine..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="liquid-glass w-full pl-12 pr-4 py-3.5 rounded-2xl border border-white/40 text-sm font-semibold placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#e8532b]/50 shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold opacity-60 hover:opacity-100"
            >
              Clear
            </button>
          )}
        </div>

        {/* A-Z Quick Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full text-xs font-bold">
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => setActiveLetter(letter)}
              className={`px-2.5 py-1 rounded-lg uppercase transition-all flex-none ${
                activeLetter === letter
                  ? 'bg-[#e8532b] text-white shadow'
                  : 'liquid-glass opacity-75 hover:opacity-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* 17 Category Filter Badges */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full">
        <button
          onClick={() => setSelectedCatId('all')}
          className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all whitespace-nowrap flex-none ${
            selectedCatId === 'all'
              ? 'bg-[#e8532b] text-white shadow-md'
              : 'liquid-glass opacity-75 hover:opacity-100'
          }`}
        >
          All Categories ({ALL_FORMATS.length})
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCatId(cat.id)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex-none ${
              selectedCatId === cat.id
                ? 'bg-[#e8532b] text-white shadow-md'
                : 'liquid-glass opacity-75 hover:opacity-100'
            }`}
          >
            <span>{cat.name}</span>
            <span className="ml-1.5 opacity-70 text-[10px] font-semibold">({cat.officialCount})</span>
          </button>
        ))}
      </div>

      {/* Category Intros (if single category selected) */}
      {selectedCatId !== 'all' && (
        (() => {
          const cat = CATEGORIES.find(c => c.id === selectedCatId);
          if (!cat) return null;
          return (
            <div className="liquid-card p-5 rounded-3xl border border-white/40 flex flex-col gap-3 shadow-md animate-pop">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg text-[#2a150c] dark:text-white flex items-center gap-2">
                  <span>{cat.name}</span>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-orange-500/20 text-[#e8532b]">
                    {cat.officialCount}
                  </span>
                </h3>
                <span className="text-xs font-mono opacity-70">{cat.routes.length} Conversion Routes</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed font-medium">
                {cat.intro}
              </p>

              {/* Collapsible Category Conversion Routes Summary */}
              <div className="mt-2 border-t border-black/10 dark:border-white/10 pt-3">
                <span className="font-bold text-xs">Official Conversion Routes Matrix:</span>
                <div className="mt-2 flex flex-col gap-2">
                  {cat.routes.map((r, rIdx) => (
                    <div key={rIdx} className="p-2.5 rounded-xl bg-black/5 dark:bg-black/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold">From:</span>
                        {r.from.slice(0, 5).map((f, fIdx) => (
                          <span key={`${f.name}-${fIdx}`} className="px-1.5 py-0.5 rounded bg-white/60 dark:bg-black/40 font-mono text-[11px]">
                            {f.name}
                          </span>
                        ))}
                        {r.from.length > 5 && <span className="opacity-60 text-[10px]">+{r.from.length - 5} more</span>}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-40 hidden md:block" />
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold">To:</span>
                        {r.to.map((t, tIdx) => (
                          <span key={`${t.name}-${tIdx}`} className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 font-mono text-[11px]">
                            {t.name}
                          </span>
                        ))}
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-orange-500/15 text-[#e8532b] text-[10px] font-bold">
                        Engine: {r.engine}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()
      )}

      {/* Formats Grid / Table */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-bold opacity-75">
            Showing {filteredFormats.length} formats
          </span>
          {searchQuery && (
            <span className="text-xs opacity-60">Filtered by query: "{searchQuery}"</span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredFormats.map(fmt => (
            <div
              key={`${fmt.categoryId}-${fmt.id || fmt.name}`}
              className="liquid-card p-4 rounded-2xl flex flex-col justify-between gap-3 border border-white/30 shadow-md hover:scale-[1.01] transition-transform"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm text-[#2a150c] dark:text-white">
                    {fmt.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/10 dark:bg-white/10 opacity-80">
                    {fmt.categoryName}
                  </span>
                </div>

                {/* Extensions */}
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  {fmt.exts.map((ext, extIdx) => (
                    <span key={`${fmt.name}-${ext}-${extIdx}`} className="px-2 py-0.5 rounded-md text-xs font-mono font-bold bg-orange-500/15 text-[#e8532b] dark:text-orange-300">
                      {ext}
                    </span>
                  ))}
                </div>

                {/* Supported Destination Targets */}
                {fmt.convertsTo.length > 0 && (
                  <div className="mt-3">
                    <span className="text-[11px] font-bold opacity-70 block mb-1">Converts to:</span>
                    <div className="flex flex-wrap gap-1">
                      {fmt.convertsTo.slice(0, 6).map((tName, tIdx) => (
                        <span key={`${tName}-${tIdx}`} className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-800 dark:text-emerald-200">
                          {tName}
                        </span>
                      ))}
                      {fmt.convertsTo.length > 6 && (
                        <span className="text-[10px] opacity-60">+{fmt.convertsTo.length - 6}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Engine badge and Action */}
              <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/10 text-xs">
                <span className="text-[10px] font-semibold opacity-70">
                  Engine: <strong className="opacity-100">{fmt.engine}</strong>
                </span>
                {onSelectFormatForConversion && (
                  <button
                    onClick={() => onSelectFormatForConversion(fmt)}
                    className="flex items-center gap-1 text-[11px] font-bold text-[#e8532b] hover:underline cursor-pointer"
                  >
                    <span>Convert</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

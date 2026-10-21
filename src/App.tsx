import React, { useState, useEffect } from 'react';
import { Header, ActiveTab } from './components/Header';
import { WheelStudio } from './components/WheelStudio';
import { BatchConverter } from './components/BatchConverter';
import { PdfArchiveLab } from './components/PdfArchiveLab';
import { FormatCatalogue } from './components/FormatCatalogue';
import { DiagnosticsView } from './components/DiagnosticsView';
import { FormatItem } from './data/formatCatalogue';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('wheel');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [queueCount, setQueueCount] = useState<number>(0);
  const [preselectedTarget, setPreselectedTarget] = useState<string | undefined>(undefined);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle format selection from Catalogue
  const handleSelectFormatFromCatalogue = (format: FormatItem) => {
    const firstTarget = format.convertsTo[0] || 'pdf';
    setPreselectedTarget(firstTarget);
    setActiveTab('batch');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-orange-500/30">
      <div>
        {/* Navigation Bar */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme={theme}
          setTheme={setTheme}
          queueCount={queueCount}
        />

        {/* Main Tab Views */}
        <main className="pb-16">
          {activeTab === 'wheel' && <WheelStudio />}
          {activeTab === 'batch' && (
            <BatchConverter 
              onQueueCountChange={setQueueCount}
              initialTargetFormat={preselectedTarget}
            />
          )}
          {activeTab === 'lab' && <PdfArchiveLab />}
          {activeTab === 'catalogue' && (
            <FormatCatalogue 
              onSelectFormatForConversion={handleSelectFormatFromCatalogue} 
            />
          )}
          {activeTab === 'diagnostics' && <DiagnosticsView />}
        </main>
      </div>

      {/* Footer */}
      <footer className="liquid-glass border-t border-white/20 py-6 px-4 text-center text-xs opacity-80 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-bold text-[#2a150c] dark:text-[#fff1e3]">
            <span>🍊 Shiftwheel File Converter</span>
            <span className="opacity-50">·</span>
            <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Isolated Local Processing</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium opacity-75">
            <span>244 Official Formats</span>
            <span>17 Categories</span>
            <span>Real FFmpeg & ImageMagick & Ghostscript Engines</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { 
  Disc, 
  Layers, 
  FileText, 
  BookOpen, 
  Activity, 
  Sun, 
  Moon, 
  Sparkles,
  CheckCircle2,
  FolderDown,
  FileCode
} from 'lucide-react';

export type ActiveTab = 'wheel' | 'batch' | 'lab' | 'catalogue' | 'diagnostics';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  queueCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  theme,
  setTheme,
  queueCount
}) => {
  const tabs = [
    { id: 'wheel' as ActiveTab, label: 'Wheel Studio', icon: Disc, badge: 'Liquid Glass' },
    { id: 'batch' as ActiveTab, label: 'Batch Queue', icon: Layers, count: queueCount },
    { id: 'lab' as ActiveTab, label: 'PDF & Archive Lab', icon: FileText },
    { id: 'catalogue' as ActiveTab, label: '244+ Format Catalogue', icon: BookOpen, badge: '17 Categories' },
    { id: 'diagnostics' as ActiveTab, label: 'Engine & Tests', icon: Activity }
  ];

  return (
    <header className="liquid-glass sticky top-0 z-40 px-4 py-3 border-b border-white/20 mb-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div 
            onClick={() => setActiveTab('wheel')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#e8532b] via-[#e8743b] to-[#e8a93a] flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <span className="text-xl">🍊</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight leading-none">Shiftwheel</h1>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-950 dark:text-orange-200 border border-orange-500/30">
                  Universal Studio
                </span>
              </div>
              <p className="text-xs opacity-75 font-medium mt-0.5">244 formats · 17 categories · Local privacy</p>
            </div>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center flex-wrap justify-center gap-1.5 p-1 rounded-2xl bg-black/10 dark:bg-black/30 backdrop-blur-md max-w-full overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap ${
                  isActive 
                    ? 'bg-white/90 dark:bg-white/20 text-[#2a150c] dark:text-white shadow-md shadow-black/10 scale-[1.02]' 
                    : 'opacity-75 hover:opacity-100 hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#e8532b] dark:text-orange-400' : ''}`} />
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-[#e8532b] text-white font-extrabold animate-pulse">
                    {tab.count}
                  </span>
                )}
                {tab.badge && !isActive && (
                  <span className="hidden xl:inline text-[9px] font-semibold px-1.5 py-0.2 rounded-full bg-white/20 opacity-80">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>8 Engines Ready</span>
          </div>

          <a
            href="/api/download-single-html"
            download="index.html"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8532b] text-white hover:brightness-110 text-xs font-bold transition-all shadow-md shadow-orange-500/25 cursor-pointer"
            title="Download single standalone index.html file (upload directly to GitHub Pages)"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Single index.html</span>
          </a>

          <a
            href="/api/download-project"
            download="shiftwheel-main-github-ready.zip"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-[#2a150c] dark:text-white text-xs font-bold transition-all border border-black/10 dark:border-white/20 shadow-sm cursor-pointer"
            title="Download complete project source ZIP ready for GitHub publication"
          >
            <FolderDown className="w-3.5 h-3.5 text-[#e8532b]" />
            <span>Full ZIP</span>
          </a>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all cursor-pointer border border-white/20"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-800" />}
          </button>
        </div>
      </div>
    </header>
  );
};

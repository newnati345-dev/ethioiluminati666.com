import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { GALLERY_ITEMS } from '../data/mockData';
import { Emblem } from './Emblem';
import { Images, ZoomIn, X, MapPin, Calendar, Layers } from 'lucide-react';

interface MediaGalleryProps {
  currentLang: Language;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [filter, setFilter] = useState<'all' | 'assemblies' | 'philanthropy' | 'ceremonies' | 'archives'>('all');
  const [activeItem, setActiveItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const filterLabels = {
    all: t.filterAll,
    assemblies: t.filterAssemblies,
    philanthropy: t.filterPhilanthropy,
    ceremonies: t.filterCeremonies,
    archives: t.filterArchives
  };

  return (
    <div className="min-h-screen bg-[#08090c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 mb-1">
            <Images className="w-6 h-6" />
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-wider text-amber-200">
            {t.gallery}
          </h1>
          <p className="text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
            {currentLang === 'am'
              ? 'ታሪካዊ ማህደሮች፣ ስነ-ስርዓቶች እና የሰብአዊ ድጋፍ ማስረጃዎች'
              : 'Historical records, ceremonial assemblies, and photographic documentation of humanitarian endowments across Ethiopia.'}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 p-1.5 rounded-xl border border-amber-500/20 bg-[#10131d] w-full max-w-lg mx-auto overflow-x-auto scrollbar-none">
          {(['all', 'assemblies', 'philanthropy', 'ceremonies', 'archives'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer capitalize whitespace-nowrap ${
                filter === cat
                  ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-400 hover:text-amber-200 hover:bg-[#181d2a]'
              }`}
            >
              {filterLabels[cat]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group rounded-2xl border border-amber-500/20 bg-[#11141f] hover:border-amber-400/50 transition-all overflow-hidden cursor-pointer shadow-xl flex flex-col"
            >
              {/* Visual Frame */}
              <div className="relative h-60 w-full bg-gradient-to-br from-[#161a28] via-[#10131e] to-[#0c0e16] flex items-center justify-center overflow-hidden border-b border-amber-500/15">
                {item.theme === 'gold-chamber' && (
                  <div className="relative w-full h-full flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/15 via-[#111420] to-[#0a0c12]">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Emblem size="lg" />
                      <span className="font-serif-luxury text-lg text-amber-200">
                        {currentLang === 'am' ? 'የበላይ ምክር ቤት' : 'The High Council'}
                      </span>
                    </div>
                  </div>
                )}
                {item.theme === 'agricultural-grant' && (
                  <div className="relative w-full h-full flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/15 via-[#111420] to-[#0a0c12]">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-14 h-14 rounded-full border border-emerald-400/40 bg-emerald-500/15 flex items-center justify-center text-emerald-300">
                        <Layers className="w-7 h-7" />
                      </div>
                      <span className="font-serif-luxury text-lg text-emerald-200">
                        {currentLang === 'am' ? 'የኢኮኖሚ ማብቂያ ድጋፍ' : 'Economic Empowerment Grant'}
                      </span>
                    </div>
                  </div>
                )}
                {item.theme === 'golden-seal' && (
                  <div className="relative w-full h-full flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/25 via-[#111420] to-[#0a0c12]">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <Emblem size="xl" glow={true} />
                      <span className="font-serif-luxury text-lg text-amber-300">
                        {currentLang === 'am' ? 'የንጉሣዊ ማኅተም ቅበላ' : 'Imperial Seal Consecration'}
                      </span>
                    </div>
                  </div>
                )}
                {item.theme === 'ancient-codex' && (
                  <div className="relative w-full h-full flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700/20 via-[#111420] to-[#0a0c12]">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-14 h-14 rounded-full border border-amber-400/40 bg-amber-500/15 flex items-center justify-center text-amber-300">
                        <Emblem size="sm" />
                      </div>
                      <span className="font-serif-luxury text-lg text-amber-200">
                        {currentLang === 'am' ? 'ጥንታዊ የኢትዮጵያ ድርሳናት' : 'Ancient Ethiopian Treatises'}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-stone-950 font-semibold text-xs shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>{t.viewRecord}</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-400/80 mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                    <span aria-hidden="true">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.year}</span>
                    </span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                    {item.title[currentLang] || item.title.en}
                  </h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    {item.description[currentLang] || item.description.en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-2xl border border-amber-500/40 bg-[#0f121c] p-6 shadow-2xl overflow-hidden space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                <div className="flex items-center gap-2">
                  <Emblem size="xs" />
                  <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                    {t.archivalRecord}
                  </span>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-64 rounded-xl border border-amber-500/20 bg-gradient-to-b from-[#181d2c] to-[#0d1017] flex items-center justify-center">
                <Emblem size="xl" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-amber-200">
                  {activeItem.title[currentLang] || activeItem.title.en}
                </h3>
                <div className="flex items-center gap-3 text-xs text-stone-400 font-mono mt-1 mb-3">
                  <span>{t.location}: {activeItem.location}</span>
                  <span>•</span>
                  <span>{t.recorded}: {activeItem.year}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {activeItem.description[currentLang] || activeItem.description.en}
                </p>
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-lg bg-amber-400 text-stone-950 font-semibold text-xs hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  {t.closeRecord}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { RegionItem, Language } from '../types';
import { REGIONS_LIST } from '../data/ethioData';
import { X, Check, MapPin, Search } from 'lucide-react';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  selectedRegion: RegionItem | null;
  onSelect: (region: RegionItem) => void;
}

export const RegionModal: React.FC<RegionModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  selectedRegion,
  onSelect
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  if (!isOpen) return null;

  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  const title = isAmharic
    ? 'ክልል ወይም አስተዳደር ከተማ ይምረጡ'
    : isOromo
    ? 'Naannoo ykn Magaalaa Filadhaa'
    : 'Select Region / Chartered City';

  const searchPlaceholder = isAmharic
    ? 'ክልል ወይም ከተማ ይፈልጉ...'
    : isOromo
    ? 'Naannoo barbaadaa...'
    : 'Search region or city...';

  const filtered = REGIONS_LIST.filter((reg) => {
    const term = searchTerm.toLowerCase();
    return (
      reg.nameEn.toLowerCase().includes(term) ||
      reg.nameAm.includes(searchTerm) ||
      reg.nameOm.toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      {/* Bottom Sheet Container */}
      <div className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[80vh] rounded-t-3xl sm:rounded-2xl border-t sm:border border-amber-500/30 bg-[#0d0f18] shadow-[0_-10px_35px_rgba(0,0,0,0.85)] flex flex-col z-10 overflow-hidden">
        
        {/* Drag Handle Bar */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-stone-700/60" />
        </div>

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-amber-500/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-3 border-b border-amber-500/10 bg-[#0a0c14]">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-amber-500/20 bg-[#121522] text-white text-xs sm:text-sm placeholder:text-stone-500 focus:outline-none focus:border-amber-400/60"
            />
            <Search className="w-4 h-4 text-amber-400/70 absolute left-3 top-3" />
          </div>
        </div>

        {/* Regions List */}
        <div className="overflow-y-auto p-3 divide-y divide-amber-500/10">
          {filtered.map((reg) => {
            const isSelected = selectedRegion?.id === reg.id;
            const displayName = isAmharic ? reg.nameAm : isOromo ? reg.nameOm : reg.nameEn;
            const zoneCount = reg.zones?.length || 0;
            const zoneLabel = reg.type === 'city'
              ? (isAmharic ? `${zoneCount} ክፍለ ከተሞች` : isOromo ? `Kifla Magaalaa ${zoneCount}` : `${zoneCount} Sub-Cities`)
              : (isAmharic ? `${zoneCount} ዞኖች` : isOromo ? `Godinaalee ${zoneCount}` : `${zoneCount} Zones`);

            return (
              <button
                key={reg.id}
                onClick={() => {
                  onSelect(reg);
                  onClose();
                }}
                className={`w-full flex items-center justify-between py-3.5 px-4 rounded-xl transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold'
                    : 'hover:bg-[#151928] text-stone-200'
                }`}
              >
                <div className="flex flex-col min-w-0 pr-2">
                  <span className="text-sm sm:text-base font-semibold text-white truncate">
                    {displayName}
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono mt-0.5 truncate">
                    {reg.nameEn} • <span className="text-amber-400/80">{zoneLabel}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono py-0.5 px-2 rounded-full border border-amber-500/25 bg-[#121522] text-amber-300/90">
                    {zoneCount}
                  </span>
                  {isSelected && (
                    <Check className="w-5 h-5 text-amber-400 shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

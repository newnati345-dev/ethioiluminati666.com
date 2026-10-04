import React, { useState } from 'react';
import { RegionItem, ZoneItem, Language } from '../types';
import { X, Check, Search, MapPin } from 'lucide-react';

interface ZoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  selectedRegion: RegionItem | null;
  selectedZone: ZoneItem | null;
  onSelectZone: (zone: ZoneItem) => void;
}

export const ZoneModal: React.FC<ZoneModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  selectedRegion,
  selectedZone,
  onSelectZone
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  if (!isOpen || !selectedRegion) return null;

  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  const regionName = isAmharic
    ? selectedRegion.nameAm
    : isOromo
    ? selectedRegion.nameOm
    : selectedRegion.nameEn;

  const title = isAmharic
    ? `${regionName} • ዞን ወይም ክፍለ ከተማ ይምረጡ`
    : isOromo
    ? `${regionName} • Zoonii ykn Kifla Magaalaa Filadhaa`
    : `${regionName} • Select Zone / Sub-City`;

  const searchPlaceholder = isAmharic
    ? 'ዞን ወይም ክፍለ ከተማ ይፈልጉ...'
    : isOromo
    ? 'Zoonii ykn Kifla Magaalaa barbaadaa...'
    : 'Search zone or sub-city...';

  const zones = selectedRegion.zones || [];
  const filteredZones = zones.filter((z) => {
    const term = searchTerm.toLowerCase();
    return (
      z.nameEn.toLowerCase().includes(term) ||
      z.nameAm.includes(searchTerm) ||
      z.nameOm.toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[80vh] rounded-t-3xl sm:rounded-2xl border-t sm:border border-amber-500/30 bg-[#0d0f18] shadow-[0_-10px_35px_rgba(0,0,0,0.85)] flex flex-col z-10 overflow-hidden">
        
        {/* Drag Handle Bar */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-stone-700/60" />
        </div>

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-amber-500/15 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
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

        {/* Zones List */}
        <div className="overflow-y-auto p-3 divide-y divide-amber-500/10">
          {filteredZones.length === 0 ? (
            <div className="text-center py-8 text-stone-500 text-xs">
              {isAmharic ? 'ምንም ዞን አልተገኘም' : isOromo ? 'Zooniin hin argamne' : 'No zone or sub-city found'}
            </div>
          ) : (
            filteredZones.map((zone) => {
              const isSelected = selectedZone?.id === zone.id;
              const displayName = isAmharic ? zone.nameAm : isOromo ? zone.nameOm : zone.nameEn;

              return (
                <button
                  key={zone.id}
                  onClick={() => {
                    onSelectZone(zone);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold'
                      : 'hover:bg-[#151928] text-stone-200'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {displayName}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {zone.nameEn}
                    </span>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-amber-400 shrink-0" />
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

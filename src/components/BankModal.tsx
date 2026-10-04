import React from 'react';
import { BankItem, Language } from '../types';
import { BANKS_LIST } from '../data/ethioData';
import { X, Check, ArrowRight, Building2 } from 'lucide-react';

interface BankModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  selectedBank: BankItem | null;
  onSelect: (bank: BankItem) => void;
}

export const BankModal: React.FC<BankModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  selectedBank,
  onSelect
}) => {
  if (!isOpen) return null;

  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  const title = isAmharic
    ? 'የባንክ ተቋም ይምረጡ'
    : isOromo
    ? 'Baankii Filadhaa'
    : 'Select Your Financial Institution';

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
              <Building2 className="w-3.5 h-3.5" />
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

        {/* Banks List */}
        <div className="overflow-y-auto p-3 divide-y divide-amber-500/10">
          {BANKS_LIST.map((bank) => {
            const isSelected = selectedBank?.id === bank.id;
            const displayName = isAmharic ? bank.nameAm : isOromo ? bank.nameOm : (bank.nameEn || bank.nameAm);

            return (
              <button
                key={bank.id}
                onClick={() => {
                  onSelect(bank);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold'
                    : 'hover:bg-[#151928] text-stone-200'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0 border border-stone-600/40 overflow-hidden relative">
                    {bank.logoUrl ? (
                      <img
                        src={bank.logoUrl}
                        alt={bank.nameEn || bank.nameAm}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="font-bold text-[11px] text-stone-900 font-mono">
                        {bank.logoText}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm sm:text-base font-semibold text-white truncate">
                      {displayName}
                    </span>
                    {bank.nameEn && (
                      <span className="text-[11px] text-stone-400 font-mono truncate">
                        {bank.nameEn}
                      </span>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-5 h-5 text-amber-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

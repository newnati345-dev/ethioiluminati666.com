import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BookOpen, Coins, ShieldCheck, Globe2, ArrowRight } from 'lucide-react';

interface PrinciplesSectionProps {
  currentLang: Language;
  onNavigate: (view: string) => void;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-amber-500/15 bg-[#0a0d14] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-2">
            {currentLang === 'am' ? 'የሉዓላዊነት አራት ምሰሶዎች' : 'The Quadrivium of Sovereignty'}
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold text-stone-100">
            {t.pillarsTitle}
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-stone-400 leading-relaxed font-sans">
            {t.pillarsSubtitle}
          </p>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Bento Item 1: Wide Col-Span-2 */}
          <div className="md:col-span-2 p-5 sm:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#121624] via-[#0f121d] to-[#0c0e17] flex flex-col justify-between shadow-xl">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">{t.pillar1Badge}</span>
                <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-3xl font-bold text-stone-100">
                {t.pillar1Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-amber-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-stone-400 font-mono">
                <span>{t.pillar1Meta}</span>
              </div>
              <button
                onClick={() => onNavigate('vault')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 cursor-pointer"
              >
                <span>{t.readVaultBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

          {/* Bento Item 2: Col-Span-1 */}
          <div className="p-5 sm:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#121624] to-[#0c0e17] flex flex-col justify-between shadow-xl">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">{t.pillar2Badge}</span>
                <Coins className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100">
                {t.pillar2Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-amber-500/15 text-xs text-amber-400 font-mono">
              {t.pillar2Meta}
            </div>
          </div>

          {/* Bento Item 3: Col-Span-1 */}
          <div className="p-5 sm:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-b from-[#121624] to-[#0c0e17] flex flex-col justify-between shadow-xl">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">{t.pillar3Badge}</span>
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100">
                {t.pillar3Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-amber-500/15 text-xs text-amber-400 font-mono">
              {t.pillar3Meta}
            </div>
          </div>

          {/* Bento Item 4: Wide Col-Span-2 */}
          <div className="md:col-span-2 p-5 sm:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-[#121624] via-[#0f121d] to-[#0c0e17] flex flex-col justify-between shadow-xl">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">{t.pillar4Badge}</span>
                <Globe2 className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-3xl font-bold text-stone-100">
                {t.pillar4Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
                {t.pillar4Desc}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 border-t border-amber-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-stone-400 font-mono">
                {t.pillar4Meta}
              </div>
              <button
                onClick={() => onNavigate('stages')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 cursor-pointer"
              >
                <span>{currentLang === 'am' ? 'ደረጃዎችን ይመልከቱ' : 'View Induction Stages'}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

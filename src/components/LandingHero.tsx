import React from 'react';
import { Language, Member } from '../types';
import { translations } from '../data/translations';
import { Emblem } from './Emblem';
import { Shield, Lock, ArrowRight, BookOpen } from 'lucide-react';

interface LandingHeroProps {
  currentLang: Language;
  onOpenRegister: () => void;
  onOpenLogin: () => void;
  onNavigate: (view: string) => void;
  currentMember: Member | null;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  currentLang,
  onOpenRegister,
  onOpenLogin,
  onNavigate,
  currentMember
}) => {
  const t = translations[currentLang];

  return (
    <section className="relative overflow-hidden w-full max-w-full pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 px-3 sm:px-6 lg:px-8">
      {/* Background glow and subtle ambient geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[700px] h-[280px] sm:h-[500px] lg:h-[700px] bg-amber-500/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-amber-600/5 rounded-full blur-[70px] sm:blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        
        {/* Heraldic Emblem Focus Anchor */}
        <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
          <Emblem size="xl" className="w-20 h-20 sm:w-32 sm:h-32 transition-transform duration-700 hover:scale-110" />
        </div>

        {/* Agency Designation */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[10px] sm:text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
          <span>{t.officialSovereignLodge}</span>
          <span aria-hidden="true">•</span>
          <span>{t.addisAndGlobal}</span>
        </div>

        {/* Marquee Display Headline */}
        <h1 className="font-serif-luxury text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] text-balance break-words px-2">
          {t.heroHeadline}
        </h1>

        {/* Subtitle / Mission Statement */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed font-sans px-2">
          {t.heroSubheadline}
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto w-full">
          {currentMember ? (
            <button
              onClick={() => onNavigate('portal')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <span>{t.memberPortalBtn}</span>
              <ArrowRight className="w-4 h-4 text-stone-950 shrink-0" />
            </button>
          ) : (
            <>
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Shield className="w-4 h-4 text-stone-950 shrink-0" />
                <span>{t.joinAgencyBtn}</span>
              </button>
              <button
                onClick={onOpenLogin}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium text-amber-200 hover:text-white border border-amber-500/30 hover:border-amber-400/60 bg-[#121522] hover:bg-[#181d2e] transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.memberLogin}</span>
              </button>
            </>
          )}

          <button
            onClick={() => onNavigate('vault')}
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-medium text-stone-400 hover:text-amber-300 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{t.exploreVault}</span>
          </button>
        </div>

        {/* Trust Markers Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-amber-500/15 max-w-4xl mx-auto grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="border-l-2 border-amber-500/30 pl-3 sm:pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block">{t.permanentAccess}</span>
            <span className="text-stone-200 font-semibold text-xs sm:text-sm break-words">{t.uniqueHash}</span>
          </div>
          <div className="border-l-2 border-amber-500/30 pl-3 sm:pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block">{t.supportedBanks}</span>
            <span className="text-stone-200 font-semibold text-xs sm:text-sm break-words">{t.banksListText}</span>
          </div>
          <div className="border-l-2 border-amber-500/30 pl-3 sm:pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block">{t.languageReach}</span>
            <span className="text-stone-200 font-semibold text-xs sm:text-sm break-words">{t.languageList}</span>
          </div>
          <div className="border-l-2 border-amber-500/30 pl-3 sm:pl-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block">{t.securityLayer}</span>
            <span className="text-stone-200 font-semibold text-xs sm:text-sm break-words">{t.adminVerifiedPass}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

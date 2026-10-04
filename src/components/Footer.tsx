import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Emblem } from './Emblem';
import { ShieldAlert, Lock } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (view: string) => void;
  onOpenLogin: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onNavigate,
  onOpenLogin,
  onOpenAdmin
}) => {
  const t = translations[currentLang];

  return (
    <footer className="border-t border-amber-500/20 bg-[#07080c] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-xs text-stone-400 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Wordmark */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Emblem size="sm" />
              <span className="font-serif-luxury text-xl font-bold tracking-wider text-amber-200">
                {t.agencyTitle}
              </span>
            </div>
            <p className="text-stone-400 max-w-md leading-relaxed text-xs">
              {t.agencySubtitle}
            </p>
            <div className="text-[11px] font-mono text-stone-400">
              {currentLang === 'am'
                ? 'አዲስ አበባ ማዕከላዊ ዲሬክቶሬት • የአፍሪካ ቀንድ ሉዓላዊ ሎጅ • ይፋዊ ማህደር'
                : 'Addis Ababa Central Directorate • Sovereign Lodge of the Horn of Africa • Est. Consecration Archive'}
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] font-mono text-stone-400">{t.selectLanguage}:</span>
              <div className="inline-flex items-center p-0.5 rounded-lg border border-amber-500/25 bg-[#121522]">
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    currentLang === 'en'
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'text-stone-400 hover:text-amber-200'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => onLanguageChange('am')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    currentLang === 'am'
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'text-stone-400 hover:text-amber-200'
                  }`}
                >
                  አማርኛ
                </button>
                <button
                  onClick={() => onLanguageChange('om')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    currentLang === 'om'
                      ? 'bg-amber-400 text-stone-950 shadow-sm'
                      : 'text-stone-400 hover:text-amber-200'
                  }`}
                >
                  Afaan Oromoo
                </button>
              </div>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {t.portalPortfolios}
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.overview}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('stages')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.membershipProgress}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vault')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.vaultTitle}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('signature')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.signatureOptions}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-300 transition-colors cursor-pointer">
                  {t.gallery}
                </button>
              </li>
            </ul>
          </div>

          {/* Secure Administrative Access */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {t.authentication}
            </h4>
            <div className="space-y-2">
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.memberLogin}</span>
              </button>
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.adminConsole}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            © 2026 {t.agencyTitle}. {t.allRightsReserved}
          </div>
          <div className="flex items-center gap-4">
            <span>{currentLang === 'am' ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}</span>
            <span>•</span>
            <span>{t.adminVerifiedPass}</span>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="text-stone-400 hover:text-amber-400 font-mono transition-colors cursor-pointer"
            >
              {t.directorateLog}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

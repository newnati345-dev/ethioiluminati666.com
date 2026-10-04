import React, { useState } from 'react';
import { Emblem } from './Emblem';
import { Language, Member } from '../types';
import { translations } from '../data/translations';
import { UserCheck, Shield, Lock, Menu, X, BookOpen, Award, PenTool, Images, Home, Globe } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeView: string;
  onNavigate: (view: string) => void;
  currentMember: Member | null;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeView,
  onNavigate,
  currentMember,
  onOpenLogin,
  onOpenRegister,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full max-w-full overflow-hidden border-b border-amber-500/20 bg-[#0a0c12]/95 backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto flex h-14 sm:h-20 items-center justify-between px-2 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center min-w-0 shrink">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group cursor-pointer min-w-0"
            aria-label="Home"
          >
            <Emblem size="sm" className="w-7 h-7 sm:w-9 sm:h-9 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="font-serif-luxury text-sm sm:text-2xl font-bold tracking-tight sm:tracking-wider text-amber-200 group-hover:text-amber-100 transition-colors truncate max-w-[130px] min-[360px]:max-w-[160px] sm:max-w-none">
                {currentLang === 'am' ? 'ኢትዮ ኢሉሚናቲ' : 'Ethio Illuminate'}
              </span>
              <span className="hidden sm:block text-[10px] tracking-widest text-amber-500/80 uppercase font-mono">
                {currentLang === 'am' ? 'የኢትዮጵያ የበላይ ኤጀንሲ' : 'Ethiopia Sovereign Agency'}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors hover:text-amber-300 py-1 cursor-pointer whitespace-nowrap ${
              activeView === 'home' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-stone-300'
            }`}
          >
            {t.overview}
          </button>
          
          <button
            onClick={() => handleNavClick('stages')}
            className={`transition-colors hover:text-amber-300 py-1 cursor-pointer whitespace-nowrap ${
              activeView === 'stages' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-stone-300'
            }`}
          >
            {t.stages}
          </button>

          <button
            onClick={() => handleNavClick('vault')}
            className={`transition-colors hover:text-amber-300 py-1 cursor-pointer whitespace-nowrap ${
              activeView === 'vault' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-stone-300'
            }`}
          >
            {t.vault}
          </button>

          <button
            onClick={() => handleNavClick('signature')}
            className={`transition-colors hover:text-amber-300 py-1 cursor-pointer whitespace-nowrap ${
              activeView === 'signature' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-stone-300'
            }`}
          >
            {currentLang === 'am' ? 'ቃል ኪዳን' : 'Covenant'}
          </button>

          <button
            onClick={() => handleNavClick('gallery')}
            className={`transition-colors hover:text-amber-300 py-1 cursor-pointer whitespace-nowrap ${
              activeView === 'gallery' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-stone-300'
            }`}
          >
            {t.gallery}
          </button>
        </nav>

        {/* Zone 3: Actions & Language Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Bilingual Switcher */}
          <div className="flex items-center p-0.5 rounded-lg border border-amber-500/35 bg-[#121522] shrink-0 shadow-inner">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentLang === 'en'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-amber-200'
              }`}
              title="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('am')}
              className={`px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentLang === 'am'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-amber-200'
              }`}
              title="አማርኛ"
            >
              አማ
            </button>
            <button
              onClick={() => onLanguageChange('om')}
              className={`px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                currentLang === 'om'
                  ? 'bg-amber-400 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-amber-200'
              }`}
              title="Afaan Oromoo"
            >
              AO
            </button>
          </div>

          {/* Member Login / Portal State */}
          {currentMember ? (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleNavClick('portal')}
                className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/40 rounded-lg hover:bg-amber-500/25 transition-colors cursor-pointer whitespace-nowrap"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate max-w-[100px]">{currentMember.fullName.split(' ')[0]}</span>
              </button>
              <button
                onClick={onLogout}
                className="px-2 py-1 text-xs text-stone-400 hover:text-rose-400 border border-transparent hover:border-rose-500/30 rounded-lg transition-colors cursor-pointer"
                title={t.logout}
              >
                {t.logout}
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-200 hover:text-white border border-amber-500/30 hover:border-amber-400/60 rounded-lg bg-[#141722] hover:bg-[#1b2030] transition-colors cursor-pointer whitespace-nowrap"
                title={t.login}
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>{t.login}</span>
              </button>
              <button
                onClick={onOpenRegister}
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <Shield className="w-3 h-3 text-stone-950" />
                <span>{t.register}</span>
              </button>
            </div>
          )}

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-stone-300 hover:text-amber-300 rounded-lg border border-amber-500/20 bg-[#121522] cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-amber-400" /> : <Menu className="w-4 h-4 text-amber-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full max-w-full border-b border-amber-500/25 bg-[#0c0e16]/98 backdrop-blur-xl px-4 py-4 space-y-3">
          
          {/* Mobile Language Toggle In Menu */}
          <div className="p-2.5 rounded-xl border border-amber-500/20 bg-[#121624] flex items-center justify-between">
            <span className="text-xs text-stone-400 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentLang === 'am' ? 'ቋንቋ ይምረጡ' : 'Select Language'}</span>
            </span>
            <div className="flex items-center p-0.5 rounded-lg border border-amber-500/30 bg-[#0c0e16]">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-all ${
                  currentLang === 'en' ? 'bg-amber-400 text-stone-950' : 'text-stone-400'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('am')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-all ${
                  currentLang === 'am' ? 'bg-amber-400 text-stone-950' : 'text-stone-400'
                }`}
              >
                አማ
              </button>
              <button
                onClick={() => onLanguageChange('om')}
                className={`px-2 py-1 text-xs font-semibold rounded-md transition-all ${
                  currentLang === 'om' ? 'bg-amber-400 text-stone-950' : 'text-stone-400'
                }`}
              >
                AO
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1.5 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeView === 'home' ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-2 border-amber-400' : 'text-stone-300 hover:bg-[#141826]'
              }`}
            >
              <Home className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.overview}</span>
            </button>
            <button
              onClick={() => handleNavClick('stages')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeView === 'stages' ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-2 border-amber-400' : 'text-stone-300 hover:bg-[#141826]'
              }`}
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.stages}</span>
            </button>
            <button
              onClick={() => handleNavClick('vault')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeView === 'vault' ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-2 border-amber-400' : 'text-stone-300 hover:bg-[#141826]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.vault}</span>
            </button>
            <button
              onClick={() => handleNavClick('signature')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeView === 'signature' ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-2 border-amber-400' : 'text-stone-300 hover:bg-[#141826]'
              }`}
            >
              <PenTool className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{currentLang === 'am' ? 'የቃል ኪዳን ፊርማ' : 'Covenant Signature'}</span>
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                activeView === 'gallery' ? 'bg-amber-500/20 text-amber-300 font-semibold border-l-2 border-amber-400' : 'text-stone-300 hover:bg-[#141826]'
              }`}
            >
              <Images className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.gallery}</span>
            </button>

            {/* Mobile Auth Actions */}
            {currentMember ? (
              <div className="pt-2 border-t border-amber-500/15 space-y-2">
                <button
                  onClick={() => handleNavClick('portal')}
                  className="w-full flex items-center justify-between p-3 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs font-semibold"
                >
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-400" />
                    <span>{currentMember.fullName}</span>
                  </div>
                  <span className="font-mono text-[10px] text-amber-400">{currentMember.permanentCode}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full py-2 px-3 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg text-left transition-colors"
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              <div className="pt-2 border-t border-amber-500/15 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-medium text-amber-200 border border-amber-500/30 bg-[#161a26] text-center flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.memberLogin}</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-center flex items-center justify-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-stone-950" />
                  <span>{t.register}</span>
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

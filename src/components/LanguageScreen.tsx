import React from 'react';
import { DiamondLogo } from './DiamondLogo';
import { Language } from '../types';
import { ArrowRight, Globe } from 'lucide-react';

interface LanguageScreenProps {
  onSelectLanguage: (lang: Language) => void;
  onOpenSignIn?: () => void;
  onOpenAdmin?: () => void;
}

export const LanguageScreen: React.FC<LanguageScreenProps> = ({ onSelectLanguage, onOpenSignIn, onOpenAdmin }) => {
  return (
    <div className="min-h-screen w-full bg-grid-mesh text-slate-100 flex flex-col justify-between items-center px-4 py-8 sm:py-12 select-none relative overflow-hidden">
      
      {/* Top Header Anchor with Gold Radiance */}
      <div className="w-full flex flex-col items-center text-center pt-2 sm:pt-6">
        <DiamondLogo size="lg" className="mb-3" />
        <span className="text-xs sm:text-sm font-mono tracking-wider lowercase text-amber-300 font-bold bg-[#141824] px-3.5 py-1 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)] mb-2">
          https://ethioiluminati666.com
        </span>
        <h1 className="text-sm sm:text-base font-black tracking-[0.25em] uppercase text-stone-300 mt-0.5">
          ETHIOPIA ILLUMINATI AGENCY
        </h1>

        {/* Separator with Globe icon in radiant gold */}
        <div className="flex items-center justify-center gap-3 w-48 sm:w-64 my-5 opacity-85">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-400" />
          <div className="p-1 rounded-full border border-amber-500/50 text-amber-300 bg-[#12141f] shadow-[0_0_10px_rgba(245,158,11,0.3)]">
            <Globe className="w-3.5 h-3.5" />
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-400" />
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-1">
          Choose Your Language
        </h2>
        <p className="text-xs sm:text-sm text-amber-300/90 font-medium mt-2 tracking-wide">
          ቋንቋዎን ይምረጡ • Afaan Filadhu • Select Preferred Portal
        </p>
      </div>

      {/* Language Selection Cards (English, Amharic, Afaan Oromoo) */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 my-8 px-2 sm:px-4">
        
        {/* Card 1: English */}
        <button
          onClick={() => onSelectLanguage('en')}
          className="group relative p-6 rounded-2xl border border-amber-500/25 bg-[#0f121b]/90 hover:bg-[#151928] hover:border-amber-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] text-left flex flex-col justify-between min-h-[175px] cursor-pointer"
        >
          {/* Top Row: Icon Badge & Arrow */}
          <div className="flex items-start justify-between">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
              <span>EN</span>
            </div>
            <div className="w-9 h-9 rounded-full border border-amber-500/30 bg-[#0a0c14] flex items-center justify-center text-amber-400 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          {/* Bottom Labels */}
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors">
              English
            </h3>
            <span className="text-xs text-stone-400 font-mono mt-0.5 block">
              International Official
            </span>
          </div>
        </button>

        {/* Card 2: Amharic (አማርኛ) */}
        <button
          onClick={() => onSelectLanguage('am')}
          className="group relative p-6 rounded-2xl border border-amber-500/25 bg-[#0f121b]/90 hover:bg-[#151928] hover:border-amber-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] text-left flex flex-col justify-between min-h-[175px] cursor-pointer"
        >
          {/* Top Row: Ge'ez Icon & Arrow */}
          <div className="flex items-start justify-between">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black text-2xl shadow-lg group-hover:scale-105 transition-transform">
              <span>አማ</span>
            </div>
            <div className="w-9 h-9 rounded-full border border-amber-500/30 bg-[#0a0c14] flex items-center justify-center text-amber-400 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          {/* Bottom Labels */}
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors">
              አማርኛ
            </h3>
            <span className="text-xs text-stone-400 font-mono mt-0.5 block">
              Amharic • የኢትዮጵያ ቋንቋ
            </span>
          </div>
        </button>

        {/* Card 3: Afaan Oromoo */}
        <button
          onClick={() => onSelectLanguage('om')}
          className="group relative p-6 rounded-2xl border border-amber-500/25 bg-[#0f121b]/90 hover:bg-[#151928] hover:border-amber-400/70 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] text-left flex flex-col justify-between min-h-[175px] cursor-pointer"
        >
          {/* Top Row: Latin Icon & Arrow */}
          <div className="flex items-start justify-between">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
              <span>AO</span>
            </div>
            <div className="w-9 h-9 rounded-full border border-amber-500/30 bg-[#0a0c14] flex items-center justify-center text-amber-400 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          {/* Bottom Labels */}
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-amber-200 transition-colors">
              Afaan Oromoo
            </h3>
            <span className="text-xs text-stone-400 font-mono mt-0.5 block">
              Afan Oromo • Oromiyaa
            </span>
          </div>
        </button>
      </div>

      {/* Existing Member / Sign In Check option */}
      {onOpenSignIn && (
        <div className="my-2 text-center">
          <button
            onClick={onOpenSignIn}
            className="text-xs sm:text-sm text-amber-300/90 hover:text-white transition-colors py-2 px-5 rounded-full border border-amber-500/35 bg-[#121522]/80 hover:bg-[#181c2e] hover:border-amber-400/60 cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <span>Already applied? Check Status • </span>
            <span className="text-amber-400 font-bold">ሁኔታዎን ያረጋግጡ</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col items-center gap-2 text-center pb-2">
        <span className="text-[10px] sm:text-xs font-mono tracking-widest text-amber-400/90 uppercase font-semibold">
          EST. EXCELLENCE • HTTPS://ETHIOILUMINATI666.COM • GRAND COUNCIL
        </span>
        <div className="flex items-center gap-4 text-xs text-stone-500 font-sans">
          <button className="hover:text-amber-300 transition-colors cursor-pointer">Help & Guidance</button>
          <span>•</span>
          <button className="hover:text-amber-300 transition-colors cursor-pointer">Security Protocol</button>
          {onOpenAdmin && (
            <>
              <span>•</span>
              <button
                onClick={onOpenAdmin}
                className="text-amber-400/80 hover:text-amber-300 transition-colors font-mono cursor-pointer"
              >
                Directorate Admin 🔒
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

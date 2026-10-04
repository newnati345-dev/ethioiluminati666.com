import React, { useState } from 'react';
import { Language, Member, VaultChapter } from '../types';
import { translations } from '../data/translations';
import { VAULT_CHAPTERS } from '../data/mockData';
import { Emblem } from './Emblem';
import { BookOpen, Lock, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface KnowledgeVaultProps {
  currentLang: Language;
  member: Member | null;
  onOpenLogin: () => void;
}

export const KnowledgeVault: React.FC<KnowledgeVaultProps> = ({
  currentLang,
  member,
  onOpenLogin
}) => {
  const t = translations[currentLang];
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const activeChapter: VaultChapter = VAULT_CHAPTERS[selectedChapterIndex];
  const memberStage = member ? member.stagesCompleted : 0;
  const isLocked = activeChapter.requiredStage > memberStage;

  const currentTitle = activeChapter.title[currentLang] || activeChapter.title.en;
  const currentSubtitle = activeChapter.subtitle[currentLang] || activeChapter.subtitle.en;
  const currentPages = activeChapter.pages[currentLang] || activeChapter.pages.en;

  const handleNextPage = () => {
    if (pageIndex < currentPages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 mb-1">
            <Emblem size="sm" />
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-wider text-amber-200">
            {t.vaultTitle}
          </h1>
          <p className="text-sm text-stone-400 max-w-2xl mx-auto leading-relaxed">
            {t.vaultSubtitle}
          </p>
        </div>

        {/* Chapters Strip / Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {VAULT_CHAPTERS.map((ch, idx) => {
            const chLocked = ch.requiredStage > memberStage;
            const isCurrent = idx === selectedChapterIndex;

            return (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChapterIndex(idx);
                  setPageIndex(0);
                }}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isCurrent
                    ? 'border-amber-400 bg-[#161a28] shadow-lg ring-1 ring-amber-400/50'
                    : 'border-amber-500/20 bg-[#0f121a] hover:bg-[#141724]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                    {t.chapterPrefix} 0{ch.number}
                  </span>
                  {chLocked ? (
                    <span className="flex items-center gap-1 text-[10px] text-stone-400 font-mono">
                      <Lock className="w-3 h-3 text-amber-500/70" />
                      <span>{currentLang === 'am' ? 'ደረጃ ' : 'Stage '}{ch.requiredStage}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t.unsealed}</span>
                    </span>
                  )}
                </div>
                <h4 className="font-serif-luxury text-base font-semibold text-stone-200 line-clamp-1">
                  {ch.title[currentLang] || ch.title.en}
                </h4>
                <p className="text-xs text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                  {ch.excerpt[currentLang] || ch.excerpt.en}
                </p>
              </button>
            );
          })}
        </div>

        {/* Book Reader Surface */}
        <div className="relative rounded-2xl border-2 border-amber-500/30 bg-gradient-to-b from-[#11141f] via-[#0d1017] to-[#11141f] shadow-2xl p-6 sm:p-12 overflow-hidden">
          
          {/* Subtle decorative background watermarks */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-12 translate-y-12">
            <Emblem size="2xl" glow={false} />
          </div>

          {isLocked ? (
            /* Locked State Overlay */
            <div className="py-16 text-center space-y-4 max-w-md mx-auto relative z-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-200">
                {t.guardianSealUnbroken}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                {t.vaultLockedPrompt}
              </p>
              {!member ? (
                <div className="pt-2">
                  <button
                    onClick={onOpenLogin}
                    className="px-6 py-2.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors text-xs cursor-pointer shadow-lg"
                  >
                    {t.authWithCode}
                  </button>
                </div>
              ) : (
                <p className="text-xs text-amber-400/90 font-mono">
                  {currentLang === 'am'
                    ? `የአሁኑ ደረጃዎ፡ ደረጃ ${member.stagesCompleted}/4 ተጠናቋል። ይህንን ድርሳን ለማንበብ የቀደሙትን ደረጃዎች ያጠናቁ።`
                    : `Your current status: Stage ${member.stagesCompleted}/4 completed. Complete preceding stages to reveal this text.`}
                </p>
              )}
            </div>
          ) : (
            /* Unlocked Reading Experience */
            <div className="relative z-10 space-y-8">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-amber-500/20 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{t.chapterPrefix.toUpperCase()} 0{activeChapter.number}</span>
                    <span>•</span>
                    <span>{t.folio.toUpperCase()} {pageIndex + 1} {t.of.toUpperCase()} {currentPages.length}</span>
                  </div>
                  <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-amber-200">
                    {currentTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-400 mt-1 italic font-serif">
                    {currentSubtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <button
                    onClick={handlePrevPage}
                    disabled={pageIndex === 0}
                    className="p-2 rounded-lg border border-amber-500/20 bg-[#161a26] text-amber-300 hover:bg-[#1f2434] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    title={t.previousFolio}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-stone-400 px-2">
                    {pageIndex + 1} / {currentPages.length}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={pageIndex === currentPages.length - 1}
                    className="p-2 rounded-lg border border-amber-500/20 bg-[#161a26] text-amber-300 hover:bg-[#1f2434] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                    title={t.nextFolio}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Page Content Body */}
              <div className="py-6 min-h-[220px]">
                <div className="relative pl-6 border-l-2 border-amber-400/40">
                  <p className="font-serif-luxury text-xl sm:text-2xl text-stone-100 leading-relaxed tracking-wide">
                    &ldquo;{currentPages[pageIndex]}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Pagination Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-amber-500/15">
                <button
                  onClick={handlePrevPage}
                  disabled={pageIndex === 0}
                  className="flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.previousFolio}</span>
                </button>
                <div className="flex items-center gap-1.5">
                  {currentPages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === pageIndex ? 'bg-amber-400 scale-125' : 'bg-stone-700 hover:bg-stone-500'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={pageIndex === currentPages.length - 1}
                  className="flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <span>{t.nextFolio}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

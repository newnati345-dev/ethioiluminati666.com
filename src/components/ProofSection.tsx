import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { FUND_RECIPIENTS, ANNOUNCEMENTS } from '../data/mockData';
import { Award, Bell, CheckCircle2 } from 'lucide-react';

interface ProofSectionProps {
  currentLang: Language;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 border-t border-amber-500/15 bg-[#080a10] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Metric Counterboard with Tabular Numerals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-[#10131d] via-[#141826] to-[#10131d] shadow-2xl">
          <div className="space-y-1 border-r border-amber-500/15 pr-2 sm:pr-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/80 block truncate">
              {t.admittedInitiates}
            </span>
            <div className="font-mono text-2xl sm:text-4xl font-bold text-stone-100 tabular-nums">
              4,820<span className="text-amber-400">+</span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 line-clamp-2">
              {t.admittedSub}
            </p>
          </div>

          <div className="space-y-1 sm:border-r border-amber-500/15 sm:pr-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/80 block truncate">
              {t.endowmentCapital}
            </span>
            <div className="font-mono text-2xl sm:text-4xl font-bold text-amber-300 tabular-nums">
              124M <span className="text-xs sm:text-sm font-sans">ETB</span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 line-clamp-2">
              {t.endowmentSub}
            </p>
          </div>

          <div className="space-y-1 border-r border-amber-500/15 pr-2 sm:pr-4 pt-3 sm:pt-0 border-t sm:border-t-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/80 block truncate">
              {t.activeAssemblies}
            </span>
            <div className="font-mono text-2xl sm:text-4xl font-bold text-stone-100 tabular-nums">
              11
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 line-clamp-2">
              {t.activeAssembliesSub}
            </p>
          </div>

          <div className="space-y-1 pt-3 sm:pt-0 border-t sm:border-t-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/80 block truncate">
              {currentLang === 'am' ? 'ክልላዊ ሎጆች' : 'Regional Lodges'}
            </span>
            <div className="font-mono text-2xl sm:text-4xl font-bold text-stone-100 tabular-nums">
              48
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 line-clamp-2">
              {currentLang === 'am' ? 'በኢትዮጵያ እና በዲያስፖራ' : 'Across Ethiopia & Diaspora'}
            </p>
          </div>
        </div>

        {/* Section Two-Column: Grant Recipients & Council Decrees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Column 1: Verified Fund Recipients */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                  {t.proofStewardship}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100 mt-0.5">
                  {t.fundRecipients}
                </h3>
              </div>
              <Award className="w-6 h-6 text-amber-400 shrink-0" />
            </div>

            <div className="space-y-3">
              {FUND_RECIPIENTS.map(rec => (
                <div
                  key={rec.id}
                  className="p-3.5 sm:p-4 rounded-xl border border-amber-500/20 bg-[#0f131e] hover:border-amber-500/40 transition-colors shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-100 truncate">
                        {rec.recipientName}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-400">
                      {rec.purpose} • <span className="text-stone-300 font-medium">{rec.region}</span>
                    </p>
                    <div className="text-[10px] sm:text-[11px] font-mono text-stone-400">
                      {currentLang === 'am' ? 'የተከፈለው ' : 'Disbursed '} {rec.disbursementDate} • Ref: {rec.referenceCode}
                    </div>
                  </div>
                  <div className="text-left sm:text-right shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-amber-500/10">
                    <div className="font-mono text-xs sm:text-sm font-bold text-amber-300">
                      {rec.grantETB}
                    </div>
                    <div className="text-[10px] text-stone-500 font-mono">
                      ({rec.grantAmount})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Official Decrees & Announcements */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                  {t.officialComm}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-100 mt-0.5">
                  {t.announcements}
                </h3>
              </div>
              <Bell className="w-6 h-6 text-amber-400 shrink-0" />
            </div>

            <div className="space-y-3.5">
              {ANNOUNCEMENTS.map(ann => (
                <div
                  key={ann.id}
                  className="p-4 sm:p-5 rounded-xl border border-amber-500/20 bg-[#0f131e] space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0">
                      {ann.date}
                    </span>
                    {ann.priority === 'high' && (
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                        {currentLang === 'am' ? 'ከፍተኛ ቅድሚያ' : 'HIGH PRIORITY'}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-stone-100">
                    {ann.title[currentLang] || ann.title.en}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {ann.excerpt[currentLang] || ann.excerpt.en}
                  </p>
                  <p className="text-[11px] text-stone-400 pt-1 border-t border-amber-500/10 leading-relaxed font-mono">
                    {ann.content[currentLang] || ann.content.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { DiamondLogo } from './DiamondLogo';
import { Language, ApplicationSubmission } from '../types';
import { X, Search, LogIn, AlertCircle } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onLoginSuccess: (submission: ApplicationSubmission) => void;
  onNavigateToApply: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onLoginSuccess,
  onNavigateToApply
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  if (!isOpen) return null;

  const t = {
    title: isAmharic
      ? 'የማመልከቻ ሁኔታዎን ያረጋግጡ'
      : isOromo
      ? 'Haala Galmee Keessanii Mirkaneeffadhaa'
      : 'Verify Application Status',
    subtitle: isAmharic
      ? 'የተመዘገቡበትን ስልክ ቁጥር ወይም የባንክ ሂሳብ ቁጥር በማስገባት ሁኔታዎን ይመልከቱ'
      : isOromo
      ? 'Lakkoofsa bilbilaa ykn herrega baankii galchuudhaan haala keessan ilaalaa'
      : 'Enter your registered phone number or bank account number to inspect your status',
    phoneOrAccLabel: isAmharic
      ? 'ስልክ ቁጥር ወይም የሂሳብ ቁጥር'
      : isOromo
      ? 'Lakkoofsa Bilbilaa ykn Herregaa'
      : 'Phone Number or Account Number',
    phonePlaceholder: isAmharic
      ? 'ምሳሌ፡ 09123456... ወይም 1000...'
      : isOromo
      ? 'Fkn: 123456... ykn 1000...'
      : 'e.g. 123456... or 1000...',
    checkBtn: isAmharic ? 'ሁኔታውን መርምር / ግባ' : isOromo ? 'Haala Ilaali / Seeni' : 'Inspect Status / Access',
    noRecord: isAmharic
      ? 'በዚህ መረጃ የተመዘገበ ማመልከቻ አልተገኘም። እባክዎ አዲስ ያመልክቱ።'
      : isOromo
      ? "Odeeffannoo kanaan galmeen hin argamne. Maaloo haaraa galmaa'aa."
      : 'No active dossier found with this information. Please start a new application.',
    newApplicant: isAmharic ? 'አዲስ አመልካች ነዎት?' : isOromo ? 'Miseensa haaraadhaa?' : 'New Applicant?',
    applyNow: isAmharic ? 'አሁን ይመዝገቡ' : isOromo ? "Amma Galmaa'aa →" : 'Apply Now →'
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const cleaned = searchTerm.trim().replace(/\s+/g, '');
    if (!cleaned) {
      setErrorMsg(
        isAmharic
          ? 'እባክዎ ስልክ ቁጥር ወይም የሂሳብ ቁጥር ያስገቡ'
          : isOromo
          ? 'Maaloo lakkoofsa bilbilaa galchaa'
          : 'Please enter phone or account number.'
      );
      return;
    }

    // Try reading from localStorage submissions
    try {
      const stored = localStorage.getItem('eia_submission');
      if (stored) {
        const sub: ApplicationSubmission = JSON.parse(stored);
        if (
          sub.phone.includes(cleaned) ||
          cleaned.includes(sub.phone.replace(/[^0-9]/g, '')) ||
          sub.accountNumber.includes(cleaned)
        ) {
          onLoginSuccess(sub);
          onClose();
          return;
        }
      }
    } catch (e) {}

    // If query matches demo default or common input
    if (cleaned.length >= 4) {
      try {
        const stored = localStorage.getItem('eia_submission');
        if (stored) {
          const sub: ApplicationSubmission = JSON.parse(stored);
          onLoginSuccess(sub);
          onClose();
          return;
        }
      } catch (e) {}
    }

    setErrorMsg(t.noRecord);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl border border-amber-500/30 bg-[#0d0f18] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.85)] z-10 flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800/50 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Gold Logo */}
        <div className="flex flex-col items-center text-center mb-5">
          <DiamondLogo size="sm" className="mb-2" />
          <span className="text-[10px] font-mono tracking-wider lowercase text-amber-400 font-bold bg-[#141824] px-2.5 py-0.5 rounded-full border border-amber-500/30">
            https://ethioiluminati666.com
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-stone-400 mt-1">
            ETHIOPIA ILLUMINATI AGENCY
          </span>
          <h3 className="text-xl font-extrabold text-white mt-2">
            {t.title}
          </h3>
          <p className="text-xs text-stone-300 mt-1 max-w-xs leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5">
              {t.phoneOrAccLabel}
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#121522] text-white placeholder:text-stone-600 text-sm font-mono focus:outline-none focus:border-amber-400/80"
                autoFocus
              />
              <Search className="w-4 h-4 text-amber-400/70 absolute right-3.5 top-3.5" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <LogIn className="w-4 h-4 text-stone-950" />
            <span>{t.checkBtn}</span>
          </button>
        </form>

        {/* Switch to Apply link */}
        <div className="mt-6 pt-4 border-t border-amber-500/15 text-center flex items-center justify-between text-xs">
          <span className="text-stone-400">{t.newApplicant}</span>
          <button
            onClick={() => {
              onClose();
              onNavigateToApply();
            }}
            className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{t.applyNow}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

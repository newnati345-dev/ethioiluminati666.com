import React, { useState } from 'react';
import { Language, Member } from '../types';
import { translations } from '../data/translations';
import { Emblem } from './Emblem';
import { X, Check, Copy, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onRegistered: (member: Member) => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onRegistered
}) => {
  const t = translations[currentLang];
  const [countryCode, setCountryCode] = useState('+251');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isApproved, setIsApproved] = useState(false);
  const [generatedMember, setGeneratedMember] = useState<Member | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const countryOptions = [
    { code: '+251', name: currentLang === 'am' ? 'ኢትዮጵያ (Ethiopia)' : 'Ethiopia (+251)', flag: '🇪🇹' },
    { code: '+966', name: currentLang === 'am' ? 'ሳውዲ አረቢያ (Saudi Arabia)' : 'Saudi Arabia (+966)', flag: '🇸🇦' },
    { code: '+971', name: currentLang === 'am' ? 'የተባበሩት አረብ ኤሚሬቶች (UAE)' : 'United Arab Emirates (+971)', flag: '🇦🇪' },
    { code: '+1', name: currentLang === 'am' ? 'አሜሪካ/ካናዳ (USA/Canada)' : 'United States & Canada (+1)', flag: '🇺🇸' },
    { code: '+44', name: currentLang === 'am' ? 'እንግሊዝ (UK)' : 'United Kingdom (+44)', flag: '🇬🇧' },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName || !trimmedPhone) {
      setError(t.fillAllFields);
      return;
    }

    const nameParts = trimmedName.split(/\s+/);
    if (nameParts.length < 2) {
      setError(t.invalidFullName);
      return;
    }

    if (countryCode === '+251') {
      const cleanPhone = trimmedPhone.replace(/\D/g, '');
      if (cleanPhone.length < 9) {
        setError(t.invalidPhone);
        return;
      }
    }

    // Generate authentic permanent code EIA-XXXX-XX
    const randomHex = Math.floor(1000 + Math.random() * 9000).toString();
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const suffix = chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)];
    const code = `EIA-${randomHex}-${suffix}`;

    const newMember: Member = {
      id: 'mem-' + Date.now(),
      fullName: trimmedName,
      phone: `${countryCode} ${trimmedPhone}`,
      countryCode,
      permanentCode: code,
      registrationDate: new Date().toLocaleDateString(currentLang === 'am' ? 'am-ET' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'active',
      stagesCompleted: 1,
      bankInfo: {
        bankName: '',
        accountName: '',
        accountNumber: '',
        isVerified: false
      },
      personalInfo: {
        occupation: '',
        age: '',
        gender: '',
        region: 'Addis Ababa (አዲስ አበባ)',
        zone: ''
      }
    };

    setGeneratedMember(newMember);
    setIsApproved(true);
  };

  const handleCopyCode = () => {
    if (generatedMember) {
      navigator.clipboard.writeText(generatedMember.permanentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleCompleteAndLogin = () => {
    if (generatedMember) {
      onRegistered(generatedMember);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#0f121a] shadow-2xl overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col">
        
        {/* Header Ribbon */}
        <div className="relative px-4 sm:px-6 py-4 sm:py-5 border-b border-amber-500/20 bg-gradient-to-r from-[#141724] via-[#1a1e2e] to-[#141724] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <Emblem size="sm" className="shrink-0" />
            <div className="min-w-0">
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-amber-200 truncate">
                {isApproved ? t.congrats : t.register}
              </h3>
              <p className="text-[10px] sm:text-xs text-amber-500/70 font-mono tracking-wider truncate">
                {isApproved ? (currentLang === 'am' ? 'ቋሚ ማህደር ተፈጥሯል' : 'Permanent Dossier Generated') : (currentLang === 'am' ? 'ይፋዊ የፍቃድ ፕሮቶኮል' : 'Official Access Protocol')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {!isApproved ? (
            <form onSubmit={handleRegister} className="space-y-4">
              
              {error && (
                <div className="p-3 rounded-lg border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{error}</span>
                </div>
              )}

              {/* Legal Disclaimer / Advisory Notice */}
              <div className="p-3 sm:p-3.5 rounded-xl border border-amber-500/25 bg-[#141724] text-[11px] text-stone-300 leading-relaxed font-sans">
                <span className="text-amber-400 font-bold block mb-0.5">
                  {currentLang === 'am' ? 'ይፋዊ ማሳሰቢያ' : 'Official Advisory'}:
                </span>
                {currentLang === 'am'
                  ? 'ይህ መግቢያ ልዩ ቋሚ የምስጢር ኮድ ያመነጫል። በደረጃ ማጣሪያ ወቅት ህጋዊ ስምዎ ከባንክ ሂሳብዎ ጋር የሚዛመድ መሆኑን ያረጋግጡ።'
                  : 'This induction gateway generates your unique permanent cryptographic code. Ensure your legal names match your regional bank accounts for stage clearance.'}
              </div>

              {/* Full Name Field */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  {t.fullName} <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={t.fullNamePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-amber-500/20 bg-[#161a26] text-stone-100 placeholder:text-stone-600 text-xs sm:text-sm focus:outline-none focus:border-amber-400/60"
                  required
                />
              </div>

              {/* Phone Field with Country Code Selection */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  {t.phoneNumber} <span className="text-amber-400">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="w-28 sm:w-36 shrink-0">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full px-2 sm:px-3 py-2.5 rounded-lg border border-amber-500/20 bg-[#161a26] text-stone-100 text-xs font-mono focus:outline-none focus:border-amber-400/60"
                    >
                      {countryOptions.map(c => (
                        <option key={c.code} value={c.code} className="bg-[#10131d]">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg border border-amber-500/20 bg-[#161a26] text-stone-100 placeholder:text-stone-600 text-xs sm:text-sm font-mono focus:outline-none focus:border-amber-400/60"
                    required
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-3 sm:mt-4 py-3 px-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-stone-950 shrink-0" />
                <span>{t.requestAccess}</span>
              </button>

              <p className="text-[10px] sm:text-[11px] text-center text-stone-400 pt-1">
                {t.agreementText}
              </p>
            </form>
          ) : (
            /* Approved Screen with Permanent Code */
            <div className="space-y-4 sm:space-y-5 text-center py-2">
              <div className="inline-flex p-3 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 mb-1">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-amber-200">
                  {currentLang === 'am' ? 'የቋሚ ፍቃድ ተሰጥቷል' : 'Permanent Access Granted'}
                </h4>
                <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                  {t.saveWarning}
                </p>
              </div>

              {/* Display Permanent Code Box */}
              <div className="p-4 sm:p-5 rounded-xl border-2 border-amber-500/40 bg-gradient-to-b from-[#141928] to-[#10131e] space-y-2 shadow-inner">
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold block">
                  {t.permanentCode}
                </span>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-300 tracking-wider">
                  {generatedMember?.permanentCode}
                </div>
                <div className="text-[11px] text-stone-400">
                  {generatedMember?.fullName} • {generatedMember?.phone}
                </div>
              </div>

              {/* Copy Code CTA */}
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-4 py-2.5 rounded-lg border border-amber-500/30 bg-[#161a26] text-amber-300 hover:bg-[#1f2436] transition-colors flex items-center justify-center gap-1.5 text-xs font-mono cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{currentLang === 'am' ? 'ኮዱ ተቀድቷል' : 'Code Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyCode}</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCompleteAndLogin}
                  className="px-6 py-2.5 rounded-lg font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 text-xs cursor-pointer shadow-md"
                >
                  <span>{t.memberPortalBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-2 text-[10px] text-amber-500/70 font-mono">
                {currentLang === 'am'
                  ? 'የደረጃ 1 ምዝገባ ተጠናቋል። የባንክ መረጃዎችን ለማገናኘት ወደ አባላት ፖርታል ይግቡ።'
                  : 'Stage 1 Induction Cleared. Proceed to member portal to connect bank details in Stage 2.'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

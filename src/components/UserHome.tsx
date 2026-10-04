import React, { useState } from 'react';
import { Member, Language } from '../types';
import { translations } from '../data/translations';
import { ETHIOPIAN_BANKS, ETHIOPIAN_REGIONS } from '../data/mockData';
import { Emblem } from './Emblem';
import {
  Building2,
  FileCheck2,
  Lock,
  User,
  CreditCard,
  MessageSquare,
  Award,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Printer,
  Send
} from 'lucide-react';

interface UserHomeProps {
  member: Member;
  currentLang: Language;
  onUpdateMember: (updated: Member) => void;
  onNavigate: (view: string) => void;
}

export const UserHome: React.FC<UserHomeProps> = ({
  member,
  currentLang,
  onUpdateMember,
  onNavigate
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'stages' | 'banking' | 'profile' | 'messages' | 'certificate'>('stages');

  // Banking form state
  const [bankName, setBankName] = useState(member.bankInfo?.bankName || ETHIOPIAN_BANKS[0].name);
  const [accountName, setAccountName] = useState(member.bankInfo?.accountName || member.fullName);
  const [accountNumber, setAccountNumber] = useState(member.bankInfo?.accountNumber || '');
  const [bankSavedToast, setBankSavedToast] = useState(false);

  // Personal info state
  const [occupation, setOccupation] = useState(member.personalInfo?.occupation || '');
  const [age, setAge] = useState(member.personalInfo?.age || '');
  const [gender, setGender] = useState<'male' | 'female' | ''>(member.personalInfo?.gender || 'male');
  const [region, setRegion] = useState(member.personalInfo?.region || ETHIOPIAN_REGIONS[0]);
  const [zone, setZone] = useState(member.personalInfo?.zone || '');
  const [profileSavedToast, setProfileSavedToast] = useState(false);

  // Messages state
  const [messages, setMessages] = useState<Array<{ sender: 'council' | 'user'; text: string; time: string }>>([
    {
      sender: 'council',
      text: currentLang === 'am'
        ? `ሰላም ወንድም/እህት ${member.fullName.split(' ')[0]}። ይህ ከበላይ ምክር ቤት ማዕከላዊ ዲሬክቶሬት ነው። ማህደርዎ ተመዝግቧል። የፈንድ ድልድል መርሃ ግብርዎ እንዲዘጋጅ እባክዎ በደረጃ 2 የባንክ መረጃዎን ያጠናቁ።`
        : `Greetings Brother/Sister ${member.fullName.split(' ')[0]}. This is the Grand Council Central Directorate. Your dossier has been logged. Please complete your banking details in Stage 2 so that your regional endowment schedule can be drafted.`,
      time: '10:04 AM'
    },
    {
      sender: 'council',
      text: currentLang === 'am'
        ? 'ያስታውሱ፡ በዚህ ፖርታል በኩል የሚደረጉ ሁሉም ግንኙነቶች በምክር ቤቱ የምስጢር ፕሮቶኮል መሰረት የተመሰጠሩ ናቸው።'
        : 'Remember: All communications through this portal are end-to-end encrypted under our council discretion protocol.',
      time: '10:05 AM'
    }
  ]);

  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Handle Bank Save
  const handleSaveBank = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber) return;
    const newStages = Math.max(member.stagesCompleted, 2);
    const updated: Member = {
      ...member,
      stagesCompleted: newStages,
      bankInfo: {
        bankName,
        accountName,
        accountNumber,
        isVerified: true
      }
    };
    onUpdateMember(updated);
    setBankSavedToast(true);
    setTimeout(() => setBankSavedToast(false), 3000);
  };

  // Handle Profile Save
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: Member = {
      ...member,
      personalInfo: {
        occupation,
        age,
        gender,
        region,
        zone
      }
    };
    onUpdateMember(updated);
    setProfileSavedToast(true);
    setTimeout(() => setProfileSavedToast(false), 3000);
  };

  // Handle Message Send
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    const inputContent = messageInput.trim();
    setMessageInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = currentLang === 'am'
        ? `መልዕክትዎ ደርሶናል፡ "${inputContent.slice(0, 30)}..." የሚለው ጥያቄዎ በምክር ቤቱ ማህደር ውስጥ ተመዝግቧል። ዲሬክቶሬቱ ፈጣን ምላሽ ይሰጥዎታል።`
        : `Understood. Your request regarding "${inputContent.slice(0, 30)}..." has been logged in our secure dispatch registry. The Grand Council Directorate will process this promptly.`;

      if (inputContent.toLowerCase().includes('bank') || inputContent.toLowerCase().includes('money') || inputContent.toLowerCase().includes('birr') || inputContent.includes('ባንክ') || inputContent.includes('ብር')) {
        reply = currentLang === 'am'
          ? `የባንክ መረጃዎ ተረጋግጧል። በደረጃ 3 የቃል ኪዳን ማረጋገጫ ካጠናቀቁ በኋላ በየሩብ ዓመቱ ክፍያዎ በኢትዮጵያ ባንክ ሂሳብዎ ይተላለፋል።`
          : `Your banking dossier has been verified. Disbursements are processed in quarterly tranches via your registered Ethiopian bank account after Stage 3 covenant affirmation.`;
      } else if (inputContent.toLowerCase().includes('stage') || inputContent.toLowerCase().includes('certificate') || inputContent.includes('ደረጃ') || inputContent.includes('ሰርተፊኬት')) {
        reply = currentLang === 'am'
          ? `ይፋዊ የአባልነት ምስክር ወረቀትዎን ለማግኘት ወደ ደረጃ 3 በመሄድ ዲጂታል ፊርማዎን ያረጋግጡ።`
          : `To obtain your official Certificate of Membership, proceed to Stage 3 and sign your digital covenant in the Signature Options tab.`;
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'council',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#08090c] pb-24">
      {/* Top Banner Ribbon */}
      <div className="border-b border-amber-500/20 bg-gradient-to-r from-[#121520] via-[#1a1f30] to-[#121520] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Emblem size="lg" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  {t.verifiedMember}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-100 mt-0.5">
                {member.fullName}
              </h1>
              <p className="text-xs text-stone-400 font-mono mt-1">
                {t.permanentCode}: <span className="text-amber-300 font-semibold">{member.permanentCode}</span> • {currentLang === 'am' ? 'የተመዘገበበት' : 'Registered'} {member.registrationDate}
              </p>
            </div>
          </div>

          {/* Council Clearance Status Card */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-amber-500/25 bg-[#141826]/90 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-serif-luxury font-bold text-amber-300 text-lg">
              {member.stagesCompleted}/4
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-amber-500/70">
                {currentLang === 'am' ? 'የምክር ቤት ደረጃ' : 'Council Clearance'}
              </div>
              <div className="text-sm font-semibold text-stone-200">
                {currentLang === 'am' ? `ደረጃ ${member.stagesCompleted} ንቁ ነው` : `Stage ${member.stagesCompleted} Active`}
              </div>
              <button
                onClick={() => setActiveTab('messages')}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 mt-0.5 cursor-pointer"
              >
                <MessageSquare className="w-3 h-3" />
                <span>{currentLang === 'am' ? 'የውስጥ መልዕክቶች' : 'Council Dispatch'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-amber-500/15 scrollbar-none">
          <button
            onClick={() => setActiveTab('stages')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'stages'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#141724]'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.membershipProgress}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-200 font-mono">
              {member.stagesCompleted}/4
            </span>
          </button>

          <button
            onClick={() => setActiveTab('banking')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'banking'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#141724]'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>{t.bankSection}</span>
            {member.bankInfo?.isVerified && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#141724]'
            }`}
          >
            <User className="w-4 h-4 text-amber-400" />
            <span>{t.personalSection}</span>
          </button>

          <button
            onClick={() => setActiveTab('certificate')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'certificate'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#141724]'
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-amber-400" />
            <span>{t.certOfMembership}</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'messages'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-[#141724]'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>{t.myMessages}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400 text-stone-950 font-bold">
              {messages.length}
            </span>
          </button>
        </div>

        {/* Tab 1: Induction Progression Stages */}
        {activeTab === 'stages' && (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Stage 1 */}
              <div className="p-5 rounded-2xl border border-emerald-500/30 bg-[#0f131d] relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400">STAGE 01</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-100 mb-1">
                  {t.stage1Title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {t.stage1Desc}
                </p>
                <div className="pt-2 border-t border-emerald-500/15 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>{currentLang === 'am' ? 'የጸደቀ እና የተረጋገጠ' : 'Verified & Approved'}</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Stage 2 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                member.stagesCompleted >= 2
                  ? 'border-emerald-500/30 bg-[#0f131d]'
                  : 'border-amber-500/30 bg-[#121622] gold-border-glow'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    member.stagesCompleted >= 2 ? 'text-emerald-400' : 'text-amber-400'
                  }`}>STAGE 02</span>
                  {member.stagesCompleted >= 2 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-semibold">
                      {t.actionRequired}
                    </span>
                  )}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-100 mb-1">
                  {t.stage2Title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {t.stage2Desc}
                </p>
                {member.stagesCompleted >= 2 ? (
                  <div className="pt-2 border-t border-emerald-500/15 flex items-center justify-between text-xs text-emerald-400 font-medium">
                    <span>{currentLang === 'am' ? 'ሂሳብ ተገናኝቷል' : 'Account Linked'} ({member.bankInfo?.bankName.split(' ')[0]})</span>
                    <span>100%</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveTab('banking')}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.linkBankNow}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Stage 3 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                member.stagesCompleted >= 3
                  ? 'border-emerald-500/30 bg-[#0f131d]'
                  : member.stagesCompleted === 2
                  ? 'border-amber-500/30 bg-[#121622] gold-border-glow'
                  : 'border-stone-800 bg-[#0c0e14] opacity-70'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    member.stagesCompleted >= 3 ? 'text-emerald-400' : 'text-amber-400'
                  }`}>STAGE 03</span>
                  {member.stagesCompleted >= 3 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : member.stagesCompleted < 2 ? (
                    <Lock className="w-4 h-4 text-stone-600" />
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-semibold">
                      {t.ready}
                    </span>
                  )}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-100 mb-1">
                  {t.stage3Title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {t.stage3Desc}
                </p>
                {member.stagesCompleted >= 3 ? (
                  <div className="pt-2 border-t border-emerald-500/15 flex items-center justify-between text-xs text-emerald-400 font-medium">
                    <span>{currentLang === 'am' ? 'ቃል ኪዳኑ ተረጋግጧል' : 'Covenant Affirmed'}</span>
                    <span>100%</span>
                  </div>
                ) : member.stagesCompleted >= 2 ? (
                  <button
                    onClick={() => onNavigate('signature')}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.affirmSigNow}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="text-[11px] text-stone-600 italic block pt-2">
                    {t.completeToUnlock}
                  </span>
                )}
              </div>

              {/* Stage 4 */}
              <div className={`p-5 rounded-2xl border transition-all ${
                member.stagesCompleted >= 4
                  ? 'border-emerald-500/30 bg-[#0f131d]'
                  : 'border-stone-800 bg-[#0c0e14] opacity-75'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${
                    member.stagesCompleted >= 4 ? 'text-emerald-400' : 'text-stone-400'
                  }`}>STAGE 04</span>
                  {member.stagesCompleted >= 4 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-stone-600" />
                  )}
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-100 mb-1">
                  {t.stage4Title}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {t.stage4Desc}
                </p>
                {member.stagesCompleted >= 4 ? (
                  <button
                    onClick={() => setActiveTab('certificate')}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.viewCertNow}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="pt-2 border-t border-stone-800 text-xs text-stone-500">
                    {t.awaitingSig}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#121522] to-[#0c0e16] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 shrink-0">
                  <Emblem size="sm" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-amber-200">
                    {t.vaultTitle}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    {t.vaultSubtitle}
                  </p>
                  <button
                    onClick={() => onNavigate('vault')}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>{currentLang === 'am' ? 'የጥበብ ማህደርን ክፈት' : 'Enter Knowledge Vault'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-[#121522] to-[#0c0e16] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-amber-200">
                    {t.signatureOptions}
                  </h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    {t.signatureSubtitle}
                  </p>
                  <button
                    onClick={() => onNavigate('signature')}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>{currentLang === 'am' ? 'የፊርማ ገጽ ክፈት' : 'Open Signature Pad'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Bank & Financial Information */}
        {activeTab === 'banking' && (
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-[#0f121b] shadow-2xl">
              <div className="flex items-center gap-3 pb-6 border-b border-amber-500/15">
                <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-amber-200">
                    {t.bankSection}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {currentLang === 'am' ? 'የእርዳታ ፈንድ ክፍያዎችን ለመቀበል የተፈቀደ የፋይናንስ ሂሳብ' : 'Official financial dossier for grant distributions and authorized transactions'}
                  </p>
                </div>
              </div>

              {bankSavedToast && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{t.savedSuccessfully} • {currentLang === 'am' ? 'ደረጃ 2 ተረጋግጧል!' : 'Stage 2 marked as verified!'}</span>
                </div>
              )}

              <form onSubmit={handleSaveBank} className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    {t.chooseBankTitle} <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    >
                      {ETHIOPIAN_BANKS.map(b => (
                        <option key={b.id} value={b.name} className="bg-[#10131d]">
                          {b.name}
                        </option>
                      ))}
                    </select>
                    {(() => {
                      const curBank = ETHIOPIAN_BANKS.find(b => b.name === bankName);
                      return (curBank as any)?.logoUrl ? (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center pointer-events-none border border-stone-500/40 overflow-hidden">
                          <img src={(curBank as any).logoUrl} alt={curBank?.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <Building2 className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      );
                    })()}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    {t.accountName} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    placeholder="e.g. Abebe Bikila"
                    required
                  />
                  <span className="text-[11px] text-stone-500 mt-1 block">
                    {currentLang === 'am' ? 'ከይፋዊ የምዝገባ ስምዎ ጋር መመሳሰል አለበት' : 'Must match your official registered name in council records'}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    {t.accountNumber} <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-amber-300 font-mono text-sm tracking-wider focus:outline-none focus:border-amber-400"
                    placeholder="e.g. 1000123456789 or 09123456..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <CreditCard className="w-4 h-4 text-stone-950" />
                  <span>{t.saveInformation}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 3: Personal Information & Demographics */}
        {activeTab === 'profile' && (
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-[#0f121b] shadow-2xl">
              <div className="flex items-center gap-3 pb-6 border-b border-amber-500/15">
                <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-amber-200">
                    {t.personalSection}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {currentLang === 'am' ? 'ክልላዊ አድራሻ እና የማህደር መረጃ' : 'Regional jurisdiction, demographic profile, and council classification'}
                  </p>
                </div>
              </div>

              {profileSavedToast && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{t.savedSuccessfully}</span>
                </div>
              )}

              <form onSubmit={handleSaveProfile} className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    {t.work}
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    placeholder="e.g. Business Owner / Civil Engineer / Trader"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      {t.age}
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                      placeholder="e.g. 32"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      {t.sex}
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as any)}
                      className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="male">{t.male}</option>
                      <option value="female">{t.female}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    {t.region}
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                  >
                    {ETHIOPIAN_REGIONS.map(r => (
                      <option key={r} value={r} className="bg-[#10131d]">
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1.5">
                    {t.zone}
                  </label>
                  <input
                    type="text"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#141824] text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                    placeholder="e.g. Bole Sub-city / East Shewa Zone"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>{t.saveInformation}</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 4: Official Certificate of Membership */}
        {activeTab === 'certificate' && (
          <div className="mt-8 max-w-4xl mx-auto space-y-6">
            {member.stagesCompleted < 3 ? (
              <div className="p-8 rounded-2xl border border-amber-500/30 bg-[#0f121b] text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-amber-200">
                  {t.certLocked}
                </h3>
                <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
                  {t.certLockedDesc}
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setActiveTab('banking')}
                    className="px-4 py-2 rounded-lg bg-[#151926] border border-amber-500/30 text-amber-300 text-xs font-medium hover:bg-[#1c2233] transition-colors cursor-pointer"
                  >
                    {currentLang === 'am' ? 'ደረጃ 2ን አጠናቅቅ (ባንክ)' : 'Complete Stage 2 (Banking)'}
                  </button>
                  <button
                    onClick={() => onNavigate('signature')}
                    className="px-4 py-2 rounded-lg bg-amber-400 text-stone-950 text-xs font-semibold hover:bg-amber-300 transition-colors cursor-pointer"
                  >
                    {currentLang === 'am' ? 'ደረጃ 3ን አጠናቅቅ (ፊርማ)' : 'Complete Stage 3 (Signature)'}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif-luxury text-xl font-bold text-amber-200">
                    {t.officialSovereignCert}
                  </h3>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{t.certDownload}</span>
                  </button>
                </div>

                <div className="relative p-8 sm:p-12 rounded-2xl border-4 border-amber-500/40 bg-gradient-to-b from-[#0c0e14] via-[#10131d] to-[#0c0e14] text-center shadow-2xl overflow-hidden print:m-0 print:border-black print:text-black print:bg-white">
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-400/60" />
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-400/60" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-400/60" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-400/60" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <Emblem size="2xl" glow={false} />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <Emblem size="lg" />
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
                        {t.grandCouncilHorn}
                      </span>
                      <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-wider text-amber-200 uppercase">
                        {t.certOfMembership}
                      </h2>
                      <p className="text-xs text-stone-400 italic font-serif">
                        {t.certNoticeP1}
                      </p>
                    </div>

                    <div className="py-2">
                      <span className="text-xs text-stone-400 uppercase font-mono tracking-wider block">
                        {t.certNoticeP2}
                      </span>
                      <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-300 py-2 border-b border-amber-500/30 max-w-md mx-auto">
                        {member.fullName}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto leading-relaxed">
                      {t.certBody}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-w-2xl mx-auto text-left border-y border-amber-500/20 font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase block">{t.permanentHash}</span>
                        <span className="text-amber-300 font-bold">{member.permanentCode}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase block">{t.jurisdiction}</span>
                        <span className="text-stone-300">{member.personalInfo?.region?.split(' ')[0] || (currentLang === 'am' ? 'ኢትዮጵያ' : 'Ethiopia')}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase block">{currentLang === 'am' ? 'ሎጅ' : 'Council Lodge'}</span>
                        <span className="text-stone-300">{currentLang === 'am' ? 'አዲስ አበባ ማዕከል' : 'Addis Ababa Central'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-500 uppercase block">{t.commissionDate}</span>
                        <span className="text-stone-300">{member.registrationDate}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between max-w-lg mx-auto pt-6 gap-6">
                      <div className="text-center">
                        <div className="font-serif text-lg italic text-amber-200 border-b border-stone-600 pb-1 px-4">
                          {currentLang === 'am' ? 'የምክር ቤት ሬጅስትራር' : 'High Council Registrar'}
                        </div>
                        <span className="text-[10px] font-mono text-stone-500 uppercase block mt-1">
                          {currentLang === 'am' ? 'የዲሬክቶሬቱ ፊርማ' : 'Grand Directorate Signature'}
                        </span>
                      </div>

                      <div className="w-20 h-20 rounded-full border-2 border-amber-400 bg-amber-500/10 flex flex-col items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                        <span className="text-[8px] font-mono uppercase tracking-tighter">OFFICIAL</span>
                        <Emblem size="xs" glow={false} />
                        <span className="text-[7px] font-mono uppercase tracking-tighter">{t.officialSealText}</span>
                      </div>

                      <div className="text-center">
                        <div className="font-serif text-lg italic text-amber-200 border-b border-stone-600 pb-1 px-4">
                          {member.fullName}
                        </div>
                        <span className="text-[10px] font-mono text-stone-500 uppercase block mt-1">
                          {t.memberAffirmation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 5: Grand Council Directorate Live Messenger */}
        {activeTab === 'messages' && (
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-amber-500/30 bg-[#0f121a] shadow-2xl overflow-hidden flex flex-col h-[540px]">
              
              {/* Chat Header */}
              <div className="px-6 py-4 border-b border-amber-500/20 bg-[#141724] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300 font-serif">
                      <Emblem size="xs" glow={false} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#141724]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-100 flex items-center gap-2">
                      <span>{currentLang === 'am' ? 'የበላይ ምክር ቤት ዲሬክቶሬት' : 'Grand Council Directorate'}</span>
                      <span className="text-[10px] font-mono text-amber-400 px-1.5 py-0.5 rounded bg-amber-500/10">
                        OFFICIAL
                      </span>
                    </h4>
                    <p className="text-[11px] text-stone-400">
                      {t.endToEndEncrypted}
                    </p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SECURE</span>
                </div>
              </div>

              {/* Chat Messages Stream */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-md p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-amber-400 text-stone-950 font-medium rounded-tr-xs'
                          : 'bg-[#181d2c] border border-amber-500/20 text-stone-200 rounded-tl-xs'
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] font-mono text-stone-500 mt-1 px-1">
                      {m.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-stone-500 text-xs italic">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span>{currentLang === 'am' ? 'ዲሬክቶሬቱ እየመለሰ ነው...' : 'Grand Council Directorate is responding...'}</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-amber-500/20 bg-[#121520] flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder={t.typeMessage}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-amber-500/25 bg-[#171a26] text-stone-100 text-xs sm:text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-stone-950" />
                  <span className="hidden sm:inline">{t.send}</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

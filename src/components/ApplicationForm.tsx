import React, { useState } from 'react';
import { DiamondLogo } from './DiamondLogo';
import { AgentModal } from './AgentModal';
import { BankModal } from './BankModal';
import { RegionModal } from './RegionModal';
import { ZoneModal } from './ZoneModal';
import { Agent, BankItem, RegionItem, ZoneItem, Language, ApplicationSubmission } from '../types';
import { AGENTS_LIST } from '../data/ethioData';
import { Download, Building2, MapPin, ChevronDown, ShieldCheck, AlertCircle, Compass } from 'lucide-react';

interface ApplicationFormProps {
  currentLang: Language;
  onBackToLanguage: () => void;
  onSubmitSuccess: (submission: ApplicationSubmission) => void;
  onOpenSignIn?: () => void;
  onOpenAdmin?: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  currentLang,
  onBackToLanguage,
  onSubmitSuccess,
  onOpenSignIn,
  onOpenAdmin
}) => {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(() => AGENTS_LIST[0]);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBank, setSelectedBank] = useState<BankItem | null>(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<RegionItem | null>(null);
  const [selectedZone, setSelectedZone] = useState<ZoneItem | null>(null);

  // Modal open states
  const [agentModalOpen, setAgentModalOpen] = useState(false);
  const [bankModalOpen, setBankModalOpen] = useState(false);
  const [regionModalOpen, setRegionModalOpen] = useState(false);
  const [zoneModalOpen, setZoneModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Translations
  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  const text = {
    backLang: isAmharic ? '← ቋንቋ ቀይር' : isOromo ? '← Afaan' : '← Language',
    downloadApp: isAmharic ? 'መተግበሪያ አውርድ' : isOromo ? 'Appii' : 'Download App',
    headerAgency: 'ETHIOPIA',
    titleAgency: 'ILLUMINATI AGENCY',
    membershipTag: isAmharic ? 'የአባልነት ማመልከቻ ቅጽ' : isOromo ? 'GALMEE MISEENSUMMAA' : 'MEMBERSHIP APPLICATION',
    mainHeading: isAmharic ? 'የአባልነት ፈቃድ ይጠይቁ' : isOromo ? 'Eeyyama Miseensummaa Gaafadhaa' : 'Request Official Clearance',
    agentLabel: isAmharic ? 'የኤጀንሲውን ይፋዊ ተወካይ ይምረጡ *' : isOromo ? "Bakka bu'aa keessan filadhaa *" : 'Select Official Agent *',
    nameLabel: isAmharic ? 'ሙሉ ህጋዊ ስም (የራስ እና የአባት) *' : isOromo ? 'Maqaa Guutuu (Maqaa fi Abbaa) *' : 'Full Legal Name *',
    namePlaceholder: isAmharic ? 'የራስ እና የአባት ስም ያስገቡ' : isOromo ? 'Maqaa guutuu keessan galchaa' : 'Enter first & father name',
    phoneLabel: isAmharic ? 'ስልክ ቁጥር *' : isOromo ? 'Lakkoofsa Bilbilaa *' : 'Phone Number *',
    bankSectionTitle: isAmharic ? 'የባንክ እና የክፍያ መረጃ' : isOromo ? 'Odeeffannoo Baankii' : 'Banking & Disbursement Info',
    bankSelectLabel: isAmharic ? 'የባንክ ተቋም ይምረጡ *' : isOromo ? 'Baankii keessan filadhaa *' : 'Select Bank / Financial Institution *',
    accountLabel: isAmharic ? 'የባንክ ሂሳብ ቁጥር *' : isOromo ? 'Lakkoofsa Herregaa *' : 'Account Number *',
    accountPlaceholder: isAmharic ? 'የባንክ ሂሳብ ቁጥርዎን ያስገቡ' : isOromo ? 'Lakkoofsa herrega baankii galchaa' : 'Enter bank account number',
    regionSectionTitle: isAmharic ? 'የመኖሪያ ክልል እና ዞን / ክፍለ ከተማ' : isOromo ? 'Naannoo fi Zoonii / Kifla Magaalaa' : 'Territory & Administrative Zone',
    regionLabel: isAmharic ? 'ክልልዎን ይምረጡ *' : isOromo ? 'Naannoo keessan filadhaa *' : 'Select Region / Chartered City *',
    zoneLabel: isAmharic ? 'ዞን ወይም ክፍለ ከተማ ይምረጡ *' : isOromo ? 'Zoonii ykn Kifla Magaalaa filadhaa *' : 'Select Zone / Sub-City *',
    zonePlaceholder: isAmharic ? 'መጀመሪያ ክልል ይምረጡ' : isOromo ? 'Dursa naannoo filadhaa' : 'Please select region first',
    submitBtn: isAmharic ? 'ማመልከቻውን በይፋ አስገባ' : isOromo ? 'Galmee Dhiyeessi' : 'Submit Official Application',
    signInPrompt: isAmharic ? 'አስቀድመው አመልክተዋል? ሁኔታዎን እዚህ ይመልከቱ' : isOromo ? 'Duraan miseensa taataniittuu? Haala keessan ilaalaa' : 'Already applied? Check your status here'
  };

  const handleRegionSelect = (region: RegionItem) => {
    setSelectedRegion(region);
    if (region.zones && region.zones.length > 0) {
      setSelectedZone(region.zones[0]);
      setTimeout(() => setZoneModalOpen(true), 150);
    } else {
      setSelectedZone(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || fullName.trim().split(/\s+/).length < 2) {
      setErrorMsg(
        isAmharic
          ? 'እባክዎ ሙሉ ስምዎን (የራስ እና የአባት) በትክክል ያስገቡ'
          : isOromo
          ? 'Maaloo maqaa guutuu keessan galchaa'
          : 'Please enter your full legal name (first & father name).'
      );
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg(
        isAmharic
          ? 'እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ'
          : isOromo
          ? 'Maaloo lakkoofsa bilbilaa sirrii galchaa'
          : 'Please enter a valid phone number.'
      );
      return;
    }

    if (!selectedBank) {
      setErrorMsg(
        isAmharic
          ? 'እባክዎ የባንክ ተቋም ይምረጡ'
          : isOromo
          ? 'Maaloo baankii keessan filadhaa'
          : 'Please select your bank institution.'
      );
      setBankModalOpen(true);
      return;
    }

    if (!accountNumber.trim()) {
      setErrorMsg(
        isAmharic
          ? 'እባክዎ የሂሳብ ቁጥርዎን ያስገቡ'
          : isOromo
          ? 'Maaloo lakkoofsa herregaa galchaa'
          : 'Please enter your bank account number.'
      );
      return;
    }

    if (!selectedRegion) {
      setErrorMsg(
        isAmharic
          ? 'እባክዎ ክልልዎን ይምረጡ'
          : isOromo
          ? 'Maaloo naannoo keessan filadhaa'
          : 'Please select your region or chartered city.'
      );
      setRegionModalOpen(true);
      return;
    }

    const defaultZone = selectedZone || (selectedRegion.zones ? selectedRegion.zones[0] : {
      id: 'default-zone',
      nameEn: 'Central Zone',
      nameAm: 'ማዕከላዊ ዞን',
      nameOm: 'Zoonii Giddugaleessaa'
    });

    const now = new Date();
    const dateFormatted =
      now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) +
      ', ' +
      now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newSubmission: ApplicationSubmission = {
      id: 'sub-' + Date.now(),
      fullName: fullName.trim(),
      phone: '+251 ' + phone.trim().replace(/^0/, ''),
      agent: selectedAgent || AGENTS_LIST[0],
      bank: selectedBank,
      accountNumber: accountNumber.trim(),
      region: selectedRegion,
      zone: defaultZone,
      submissionDate: dateFormatted,
      status: 'Pending Approval'
    };

    onSubmitSuccess(newSubmission);
  };

  return (
    <div className="min-h-screen w-full bg-grid-mesh text-slate-100 flex flex-col justify-between py-4 px-3 sm:px-6 relative overflow-x-hidden">
      
      {/* Top Navbar with Centered Diamond Logo */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between py-2 sm:py-4">
        {/* Back to Language Button */}
        <button
          onClick={onBackToLanguage}
          className="text-xs sm:text-sm text-stone-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>{text.backLang}</span>
        </button>

        {/* Top Center Logo (VISIBLE on both computer & mobile mode) */}
        <div className="flex flex-col items-center">
          <DiamondLogo size="sm" className="mb-1" />
          <span className="text-[10px] sm:text-xs font-mono tracking-wider lowercase text-amber-400 font-bold">
            https://ethioiluminati666.com
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-stone-400">
            {text.titleAgency}
          </span>
        </div>

        {/* Action Buttons: Sign In / Download */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {onOpenSignIn && (
            <button
              type="button"
              onClick={onOpenSignIn}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-amber-500/35 bg-[#121522] text-amber-300 hover:text-white hover:border-amber-400 text-xs font-semibold transition-colors cursor-pointer"
            >
              {isAmharic ? 'ይግቡ' : isOromo ? 'Seenaa' : 'Sign In'}
            </button>
          )}
          <button
            type="button"
            onClick={() => alert(isAmharic ? 'መተግበሪያው በቅርቡ ይለቀቃል' : isOromo ? 'Appiin kun dhiyootti ni gadhiifama' : 'Agency app releasing soon')}
            className="px-3 sm:px-4 py-1.5 rounded-full border border-amber-500/40 bg-[#121522] text-amber-300 hover:text-white hover:border-amber-400 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{text.downloadApp}</span>
          </button>
        </div>
      </div>

      {/* Main Centered Application Card Container */}
      <div className="w-full max-w-xl mx-auto my-5 sm:my-8">
        <div className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl border border-amber-500/25 bg-[#0f1118]/95 shadow-[0_12px_45px_rgba(0,0,0,0.85)] backdrop-blur-md">
          
          {/* Card Header */}
          <div className="text-center mb-6">
            <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-amber-400 font-bold block mb-1">
              {text.membershipTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {text.mainHeading}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
              <div className="h-[1px] w-12 bg-amber-500" />
              <span className="text-amber-400 text-xs">◆</span>
              <div className="h-[1px] w-12 bg-amber-500" />
            </div>
          </div>

          {/* Validation Error banner */}
          {errorMsg && (
            <div className="mb-5 p-3 rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Field: Agent Selector with D/R BIRHANU WENDOSSEN */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                {text.agentLabel}
              </label>
              <button
                type="button"
                onClick={() => setAgentModalOpen(true)}
                className="w-full flex items-center justify-between p-3 rounded-xl border border-amber-500/35 bg-[#141828] text-left transition-all hover:border-amber-400/70 cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/80 shrink-0 bg-stone-900 shadow-md flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-700 text-stone-950 font-black text-xs flex items-center justify-center">
                      {selectedAgent?.initials || 'BW'}
                    </div>
                    {selectedAgent?.avatarUrl && (
                      <img
                        src={selectedAgent.avatarUrl || '/birhanu.jpg'}
                        alt={selectedAgent.name}
                        className="relative z-10 w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.endsWith('/birhanu.jpg')) {
                            target.src = '/birhanu.jpg';
                          } else {
                            target.style.display = 'none';
                          }
                        }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white truncate">
                        {selectedAgent ? selectedAgent.name : 'D/R BIRHANU WENDOSSEN'}
                      </span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400 text-stone-950">
                        OFFICIAL
                      </span>
                    </div>
                    <span className="text-xs text-stone-400 font-medium mt-0.5">
                      {selectedAgent?.role || 'Official Agency Representative'}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
              </button>
            </div>

            {/* Field 1: Full Name */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                {text.nameLabel}
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={text.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-amber-500/25 bg-[#121522] text-white placeholder:text-stone-600 text-sm focus:outline-none focus:border-amber-400/80"
                required
              />
            </div>

            {/* Field 2: Phone Number with +251 country box */}
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                {text.phoneLabel}
              </label>
              <div className="flex gap-2">
                <div className="w-20 sm:w-24 px-3 py-3 rounded-xl border border-amber-500/25 bg-[#121522] text-amber-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  +251
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123456..."
                  className="flex-1 px-4 py-3 rounded-xl border border-amber-500/25 bg-[#121522] text-white placeholder:text-stone-600 font-mono text-sm focus:outline-none focus:border-amber-400/80"
                  required
                />
              </div>
            </div>

            {/* Field 3: Bank Information Card Section */}
            <div className="p-4 rounded-2xl border border-amber-500/20 bg-[#121522] space-y-3 mt-1">
              <span className="text-xs font-bold text-amber-300 block">
                {text.bankSectionTitle}
              </span>

              {/* Bank Selector Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setBankModalOpen(true)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedBank
                      ? 'border-amber-500/50 bg-[#171b2c] text-white'
                      : 'border-amber-500/25 bg-[#141724] text-stone-300 hover:border-amber-400/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {selectedBank?.logoUrl ? (
                      <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 border border-stone-600/40 overflow-hidden">
                        <img
                          src={selectedBank.logoUrl}
                          alt={selectedBank.nameEn || selectedBank.nameAm}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {selectedBank
                        ? (isAmharic ? selectedBank.nameAm : isOromo ? selectedBank.nameOm : (selectedBank.nameEn || selectedBank.nameAm))
                        : text.bankSelectLabel}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              </div>

              {/* Account Number Input */}
              <div>
                <label className="block text-[11px] font-semibold text-stone-300 mb-1">
                  {text.accountLabel}
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder={text.accountPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-500/25 bg-[#0f111a] text-white placeholder:text-stone-600 font-mono text-xs sm:text-sm focus:outline-none focus:border-amber-400/80"
                  required
                />
              </div>
            </div>

            {/* Field 4: Territory Section with Region AND Zone/Sub-City */}
            <div className="p-4 rounded-2xl border border-amber-500/20 bg-[#121522] space-y-3 mt-1">
              <span className="text-xs font-bold text-amber-300 block">
                {text.regionSectionTitle}
              </span>

              {/* Region Selection Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setRegionModalOpen(true)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedRegion
                      ? 'border-amber-500/50 bg-[#171b2c] text-white'
                      : 'border-amber-500/25 bg-[#141724] text-stone-300 hover:border-amber-400/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {selectedRegion
                        ? (isAmharic ? selectedRegion.nameAm : isOromo ? selectedRegion.nameOm : selectedRegion.nameEn)
                        : text.regionLabel}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              </div>

              {/* Zone / Sub-City Selector Button */}
              <div>
                <label className="block text-[11px] font-semibold text-stone-300 mb-1">
                  {text.zoneLabel}
                </label>
                <button
                  type="button"
                  onClick={() => {
                    if (selectedRegion) {
                      setZoneModalOpen(true);
                    } else {
                      setRegionModalOpen(true);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedZone
                      ? 'border-amber-500/40 bg-[#171b2c] text-white'
                      : 'border-amber-500/20 bg-[#141724] text-stone-400 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium truncate">
                      {selectedZone
                        ? (isAmharic ? selectedZone.nameAm : isOromo ? selectedZone.nameOm : selectedZone.nameEn)
                        : (selectedRegion ? text.zoneLabel : text.zonePlaceholder)}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-amber-400 shrink-0" />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)] flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-stone-950 shrink-0" />
                <span>{text.submitBtn}</span>
              </button>
            </div>

            {/* Sign in prompt */}
            {onOpenSignIn && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={onOpenSignIn}
                  className="text-xs text-stone-400 hover:text-amber-300 font-medium transition-colors cursor-pointer"
                >
                  {text.signInPrompt}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Modals */}
      <AgentModal
        isOpen={agentModalOpen}
        onClose={() => setAgentModalOpen(false)}
        currentLang={currentLang}
        selectedAgent={selectedAgent}
        onSelect={setSelectedAgent}
      />
      <BankModal
        isOpen={bankModalOpen}
        onClose={() => setBankModalOpen(false)}
        currentLang={currentLang}
        selectedBank={selectedBank}
        onSelect={setSelectedBank}
      />
      <RegionModal
        isOpen={regionModalOpen}
        onClose={() => setRegionModalOpen(false)}
        currentLang={currentLang}
        selectedRegion={selectedRegion}
        onSelect={handleRegionSelect}
      />
      <ZoneModal
        isOpen={zoneModalOpen}
        onClose={() => setZoneModalOpen(false)}
        currentLang={currentLang}
        selectedRegion={selectedRegion}
        selectedZone={selectedZone}
        onSelectZone={setSelectedZone}
      />

      {/* Bottom Footer */}
      <div className="text-center py-2 flex flex-col items-center gap-1.5">
        <span className="text-[10px] font-mono tracking-widest text-amber-500/80 uppercase font-semibold">
          SECURE ENCRYPTED REGISTRATION • HTTPS://ETHIOILUMINATI666.COM
        </span>
        {onOpenAdmin && (
          <button
            type="button"
            onClick={onOpenAdmin}
            className="text-[10px] font-mono text-stone-500 hover:text-amber-400 transition-colors cursor-pointer"
          >
            Directorate Admin 🔒
          </button>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Member, Language } from '../types';
import { translations } from '../data/translations';
import { Emblem } from './Emblem';
import {
  ShieldAlert,
  Search,
  X,
} from 'lucide-react';

interface AdminDashboardProps {
  currentLang: Language;
  membersList: Member[];
  onUpdateMember: (updated: Member) => void;
  onNavigate: (view: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentLang,
  membersList,
  onUpdateMember,
  onNavigate
}) => {
  const t = translations[currentLang];
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStage, setFilterStage] = useState<'all' | 'stage1' | 'stage2' | 'stage3' | 'stage4'>('all');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const filteredMembers = membersList.filter(m => {
    const matchesSearch =
      m.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.permanentCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.phone.includes(searchTerm);

    if (!matchesSearch) return false;
    if (filterStage === 'all') return true;
    if (filterStage === 'stage1') return m.stagesCompleted === 1;
    if (filterStage === 'stage2') return m.stagesCompleted === 2;
    if (filterStage === 'stage3') return m.stagesCompleted === 3;
    if (filterStage === 'stage4') return m.stagesCompleted === 4;
    return true;
  });

  const handleAdvanceStage = (m: Member) => {
    if (m.stagesCompleted < 4) {
      const updated = { ...m, stagesCompleted: m.stagesCompleted + 1 };
      onUpdateMember(updated);
      setSelectedMember(updated);
    }
  };

  const handleToggleBankVerification = (m: Member) => {
    const updated = {
      ...m,
      bankInfo: {
        ...m.bankInfo,
        isVerified: !m.bankInfo?.isVerified
      }
    };
    onUpdateMember(updated);
    setSelectedMember(updated);
  };

  return (
    <div className="min-h-screen bg-[#08090c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-amber-500/20 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-amber-200">
                {t.adminTitle}
              </h1>
              <p className="text-xs text-stone-400 font-mono">
                {t.adminSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="px-3.5 py-1.5 rounded-lg border border-amber-500/30 text-amber-300 text-xs font-medium hover:bg-amber-500/10 transition-colors cursor-pointer"
            >
              {t.backToPublic}
            </button>
          </div>
        </div>

        {/* Metric Cards adhering to Spatial Guidelines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-amber-500/20 bg-[#0f121a]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block mb-1">
              {t.registeredCandidates}
            </span>
            <div className="font-mono text-2xl font-bold text-stone-100 tabular-nums">
              {membersList.length + 4820}
            </div>
            <span className="text-xs text-emerald-400 mt-1 block">{currentLang === 'am' ? 'በሁሉም ሎጆች ንቁ' : 'Active Across 11 Lodges'}</span>
          </div>

          <div className="p-5 rounded-2xl border border-amber-500/20 bg-[#0f121a]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block mb-1">
              {t.pendingClearance}
            </span>
            <div className="font-mono text-2xl font-bold text-amber-300 tabular-nums">
              {membersList.filter(m => m.bankInfo?.accountNumber && !m.bankInfo?.isVerified).length || 24}
            </div>
            <span className="text-xs text-stone-400 mt-1 block">CBE / Telebirr</span>
          </div>

          <div className="p-5 rounded-2xl border border-amber-500/20 bg-[#0f121a]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block mb-1">
              {t.consecratedInitiates}
            </span>
            <div className="font-mono text-2xl font-bold text-emerald-400 tabular-nums">
              {membersList.filter(m => m.stagesCompleted >= 4).length + 840}
            </div>
            <span className="text-xs text-stone-400 mt-1 block">{currentLang === 'am' ? 'የተሰጡ ምስክር ወረቀቶች' : 'Certificates Issued'}</span>
          </div>

          <div className="p-5 rounded-2xl border border-amber-500/20 bg-[#0f121a]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500/70 block mb-1">
              {currentLang === 'am' ? 'ክልላዊ ሎጆች' : 'Regional Lodges'}
            </span>
            <div className="font-mono text-2xl font-bold text-stone-100 tabular-nums">
              48
            </div>
            <span className="text-xs text-stone-400 mt-1 block">{currentLang === 'am' ? 'ሁሉም ሎጆች ንቁ ናቸው' : 'All Lodges Active'}</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-4 rounded-xl border border-amber-500/20 bg-[#121522]">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-amber-500/20 bg-[#161a28] text-stone-100 text-xs placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Interactive filter controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
            {(['all', 'stage1', 'stage2', 'stage3', 'stage4'] as const).map(st => (
              <button
                key={st}
                onClick={() => setFilterStage(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer capitalize whitespace-nowrap ${
                  filterStage === st
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-amber-200 hover:bg-[#1a1f30]'
                }`}
              >
                {st === 'all' ? (currentLang === 'am' ? 'ሁሉም አመልካቾች' : 'All Candidates') : `${currentLang === 'am' ? 'ደረጃ ' : 'Stage '}${st.replace('stage', '')}`}
              </button>
            ))}
          </div>
        </div>

        {/* Members Table */}
        <div className="rounded-2xl border border-amber-500/20 bg-[#0f121a] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-amber-500/20 bg-[#141724] text-[10px] uppercase font-mono tracking-wider text-amber-500/80">
                <tr>
                  <th className="px-6 py-4">{t.colCode}</th>
                  <th className="px-6 py-4">{t.colName}</th>
                  <th className="px-6 py-4">{t.colContact}</th>
                  <th className="px-6 py-4">{currentLang === 'am' ? 'ክልል / ዞን' : 'Region / Hub'}</th>
                  <th className="px-6 py-4">{t.colStage}</th>
                  <th className="px-6 py-4">{t.colBank}</th>
                  <th className="px-6 py-4 text-right">{t.colActions}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-500/10">
                {filteredMembers.map(m => (
                  <tr key={m.id} className="hover:bg-[#151928] transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-amber-300">
                      {m.permanentCode}
                    </td>
                    <td className="px-6 py-4 font-semibold text-stone-100">
                      {m.fullName}
                    </td>
                    <td className="px-6 py-4 text-stone-300 font-mono">
                      <div>{m.phone}</div>
                      <div className="text-[10px] text-stone-500">{m.personalInfo?.region?.split(' ')[0] || (currentLang === 'am' ? 'ኢትዮጵያ' : 'Ethiopia')}</div>
                    </td>
                    <td className="px-6 py-4 text-stone-300">
                      {m.personalInfo?.region || (currentLang === 'am' ? 'አዲስ አበባ' : 'Addis Ababa')}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-semibold">
                        {currentLang === 'am' ? `ደረጃ ${m.stagesCompleted} ከ 4` : `Stage ${m.stagesCompleted} of 4`}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {m.bankInfo?.accountNumber ? (
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <span className={`w-2 h-2 rounded-full ${m.bankInfo.isVerified ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                          <span className="text-stone-300">{m.bankInfo.bankName.split(' ')[0]}</span>
                        </div>
                      ) : (
                        <span className="text-stone-600 italic">{currentLang === 'am' ? 'አልተገናኘም' : 'Not linked'}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedMember(m)}
                        className="px-3 py-1.5 rounded-lg bg-[#181d2c] hover:bg-[#22283d] text-amber-300 border border-amber-500/30 font-medium transition-colors cursor-pointer"
                      >
                        {t.inspectDossier}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Member Dossier Detail Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-xl rounded-2xl border border-amber-500/40 bg-[#0f121a] p-6 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
                <div className="flex items-center gap-3">
                  <Emblem size="sm" />
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-amber-200">
                      {selectedMember.fullName}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono">
                      {t.permanentCode}: {selectedMember.permanentCode}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-1 rounded-lg text-stone-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dossier Information Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-xl border border-amber-500/15 bg-[#141724]">
                  <span className="text-[10px] text-stone-500 uppercase block font-mono">{t.phoneNumber}</span>
                  <span className="text-stone-200 font-mono mt-0.5 block">{selectedMember.phone}</span>
                </div>
                <div className="p-3 rounded-xl border border-amber-500/15 bg-[#141724]">
                  <span className="text-[10px] text-stone-500 uppercase block font-mono">{currentLang === 'am' ? 'ክልል / ዞን' : 'Region / Zone'}</span>
                  <span className="text-stone-200 mt-0.5 block">{selectedMember.personalInfo?.region || (currentLang === 'am' ? 'አዲስ አበባ' : 'Addis Ababa')}</span>
                </div>
                <div className="p-3 rounded-xl border border-amber-500/15 bg-[#141724]">
                  <span className="text-[10px] text-stone-500 uppercase block font-mono">{t.bankSection}</span>
                  <span className="text-stone-200 mt-0.5 block">{selectedMember.bankInfo?.bankName || (currentLang === 'am' ? 'አልገባም' : 'Not submitted')}</span>
                </div>
                <div className="p-3 rounded-xl border border-amber-500/15 bg-[#141724]">
                  <span className="text-[10px] text-stone-500 uppercase block font-mono">{t.accountNumber}</span>
                  <span className="text-amber-300 font-mono mt-0.5 block">{selectedMember.bankInfo?.accountNumber || 'None'}</span>
                </div>
              </div>

              {/* Clearance Controls */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl border border-amber-500/20 bg-[#121520]">
                  <div>
                    <div className="text-xs font-semibold text-stone-200">{t.colStage}</div>
                    <div className="text-[11px] text-stone-400">{currentLang === 'am' ? `የአሁኑ ደረጃ፡ ${selectedMember.stagesCompleted} ከ 4` : `Current Stage: ${selectedMember.stagesCompleted} of 4`}</div>
                  </div>
                  <button
                    onClick={() => handleAdvanceStage(selectedMember)}
                    disabled={selectedMember.stagesCompleted >= 4}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 text-stone-950 font-semibold text-xs hover:bg-amber-300 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                  >
                    {t.advanceStage}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-amber-500/20 bg-[#121520]">
                  <div>
                    <div className="text-xs font-semibold text-stone-200">{t.colBank}</div>
                    <div className="text-[11px] text-stone-400">
                      {selectedMember.bankInfo?.isVerified ? (currentLang === 'am' ? 'የተረጋገጠ እና የጸደቀ' : 'Verified & Approved') : (currentLang === 'am' ? 'ማረጋገጫ በመጠባበቅ ላይ' : 'Pending Verification')}
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggleBankVerification(selectedMember)}
                    className="px-3 py-1.5 rounded-lg border border-amber-500/30 text-amber-300 hover:bg-amber-500/15 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {selectedMember.bankInfo?.isVerified ? t.revokeBank : t.approveBank}
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2 rounded-lg bg-[#181d2c] hover:bg-[#22283d] text-stone-200 text-xs font-medium cursor-pointer"
                >
                  {t.closeDossier}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

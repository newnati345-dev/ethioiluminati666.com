import React, { useState } from 'react';
import { Agent, Language } from '../types';
import { AGENTS_LIST } from '../data/ethioData';
import { X, Check, Search, UserCheck } from 'lucide-react';

interface AgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: Language;
  selectedAgent: Agent | null;
  onSelect: (agent: Agent) => void;
}

export const AgentModal: React.FC<AgentModalProps> = ({
  isOpen,
  onClose,
  currentLang = 'en',
  selectedAgent,
  onSelect
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  if (!isOpen) return null;

  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  const title = isAmharic
    ? 'ወኪል ይምረጡ'
    : isOromo
    ? "Bakka Bu'aa Filadhaa"
    : 'Select Your Official Agent';

  const searchPlaceholder = isAmharic
    ? 'በስም ወይም በስልክ ይፈልጉ...'
    : isOromo
    ? 'Maqaa ykn bilbilaan barbaadaa...'
    : 'Search by name or phone...';

  const filtered = AGENTS_LIST.filter((agent) => {
    const term = searchTerm.toLowerCase();
    return (
      agent.name.toLowerCase().includes(term) ||
      agent.phone.includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      {/* Bottom Sheet Container */}
      <div className="relative w-full max-w-xl max-h-[85vh] sm:max-h-[80vh] rounded-t-3xl sm:rounded-2xl border-t sm:border border-amber-500/30 bg-[#0d0f18] shadow-[0_-10px_35px_rgba(0,0,0,0.85)] flex flex-col z-10 overflow-hidden">
        
        {/* Drag Handle Bar */}
        <div className="w-full flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-stone-700/60" />
        </div>

        {/* Modal Header */}
        <div className="px-5 py-3.5 border-b border-amber-500/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <UserCheck className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-3 border-b border-amber-500/10 bg-[#0a0c14]">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-amber-500/20 bg-[#121522] text-white text-xs sm:text-sm placeholder:text-stone-500 focus:outline-none focus:border-amber-400/60"
            />
            <Search className="w-4 h-4 text-amber-400/70 absolute left-3 top-3" />
          </div>
        </div>

        {/* Agents List */}
        <div className="overflow-y-auto p-3 divide-y divide-amber-500/10">
          {filtered.map((agent) => {
            const isSelected = selectedAgent?.id === agent.id;
            const isBirhanu = agent.name.includes('BIRHANU');

            return (
              <button
                key={agent.id}
                onClick={() => {
                  onSelect(agent);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-amber-500/15 border border-amber-400/40 text-amber-300 font-bold'
                    : isBirhanu
                    ? 'bg-[#151929] hover:bg-[#1a1f33] border border-amber-500/30 text-stone-200'
                    : 'hover:bg-[#151928] text-stone-200'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-amber-400/70 shrink-0 bg-stone-900 shadow-md flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-700 text-stone-950 font-black text-sm flex items-center justify-center">
                      {agent.initials || 'BW'}
                    </div>
                    <img
                      src={agent.avatarUrl || '/birhanu.jpg'}
                      alt={agent.name}
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
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white truncate">
                        {agent.name}
                      </h4>
                      {isBirhanu && (
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400 text-stone-950">
                          OFFICIAL
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-stone-400 font-medium mt-0.5">
                      {agent.role || 'Official Representative'}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-5 h-5 text-amber-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

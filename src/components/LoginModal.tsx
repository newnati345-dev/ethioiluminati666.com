import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Emblem } from './Emblem';
import { X, Lock, Key, AlertTriangle, Sparkles } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onLogin: (code: string) => boolean;
  onSwitchToRegister: () => void;
  onDemoLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onLogin,
  onSwitchToRegister,
  onDemoLogin
}) => {
  const t = translations[currentLang];
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      setError(t.enterCode);
      return;
    }
    const success = onLogin(trimmed);
    if (!success) {
      setError(t.invalidCode);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md rounded-2xl border border-amber-500/30 bg-[#0f121a] shadow-2xl overflow-hidden my-8">
        
        {/* Header Ribbon */}
        <div className="px-6 py-5 border-b border-amber-500/20 bg-gradient-to-r from-[#141724] via-[#1a1e2e] to-[#141724] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Emblem size="sm" />
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-amber-200">
                {t.memberLogin}
              </h3>
              <p className="text-xs text-amber-500/70 font-mono tracking-wider">
                {t.permanentAuth}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-stone-300">
            {t.memberLoginSubtitle}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                {t.permanentCode}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400/80">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder={t.permanentCodePlaceholder}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-amber-500/20 bg-[#161a26] text-amber-300 placeholder:text-stone-600 font-mono text-base font-semibold tracking-wider focus:outline-none focus:border-amber-400/60 uppercase"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-stone-950" />
              <span>{t.login}</span>
            </button>
          </form>

          {/* Quick Demo Access Bar */}
          <div className="pt-2 border-t border-amber-500/15">
            <button
              type="button"
              onClick={() => {
                onDemoLogin();
                onClose();
              }}
              className="w-full py-2.5 px-3 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.instantDemo}</span>
            </button>
          </div>

          <div className="text-center text-xs text-stone-400 pt-1">
            <span>{t.newMember} </span>
            <button
              onClick={() => {
                onClose();
                onSwitchToRegister();
              }}
              className="text-amber-400 hover:underline font-medium cursor-pointer"
            >
              {t.registerHere}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ApplicationSubmission, Language } from '../types';
import { DiamondLogo } from './DiamondLogo';
import { X, CheckCircle2, Key, RefreshCw, Trash2 } from 'lucide-react';

interface AdminApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: ApplicationSubmission[];
  onApproveSubmission: (id: string) => void;
  onRejectOrResetSubmission: (id: string) => void;
  onDeleteSubmission: (id: string) => void;
  currentLang?: Language;
}

export const AdminApprovalModal: React.FC<AdminApprovalModalProps> = ({
  isOpen,
  onClose,
  submissions,
  onApproveSubmission,
  onRejectOrResetSubmission,
  onDeleteSubmission,
  currentLang = 'en'
}) => {
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === '666' || pinInput.trim() === '1234' || pinInput.trim() === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Code. (Hint: 666)');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-amber-500/40 bg-[#0d0f18] shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-amber-500/20 bg-[#121522]">
          <div className="flex items-center gap-2.5">
            <DiamondLogo size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold tracking-wider text-amber-400">
                  ADMIN COUNCIL PANEL
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-stone-950">
                  DIRECTORATE
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Candidate Review & Verification Approvals
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PIN Screen if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-4">
              <Key className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Enter Admin Passcode</h3>
            <p className="text-xs text-stone-400 mt-1 max-w-xs">
              Enter your secret admin passcode to manage candidate approvals. Default passcode is <strong className="text-amber-400 font-mono">666</strong>.
            </p>

            {authError && (
              <p className="text-xs text-rose-400 font-medium mt-3 bg-rose-950/40 px-3 py-1 rounded-lg border border-rose-500/30">
                {authError}
              </p>
            )}

            <form onSubmit={handlePinSubmit} className="mt-5 w-full max-w-xs space-y-3">
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter Passcode (666)"
                className="w-full text-center px-4 py-3 rounded-xl border border-amber-500/30 bg-[#141828] text-white font-mono text-base tracking-widest focus:outline-none focus:border-amber-400"
                autoFocus
              />
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all text-sm cursor-pointer shadow-md"
              >
                Unlock Directorate
              </button>
              <button
                type="button"
                onClick={() => {
                  setPinInput('666');
                  setIsAuthenticated(true);
                }}
                className="w-full py-1.5 text-xs text-amber-400/80 hover:text-amber-300 transition-colors"
              >
                Quick Unlock (Default: 666)
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Candidate List */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-amber-500/15">
              <span className="text-xs font-mono font-bold text-stone-300">
                Registered Candidates ({submissions.length})
              </span>
              <span className="text-[11px] text-amber-300/80 font-mono">
                Click &quot;Approve&quot; to change status
              </span>
            </div>

            {submissions.length === 0 ? (
              <div className="text-center py-8 text-stone-500 text-xs">
                No submissions logged yet.
              </div>
            ) : (
              submissions.map((sub) => {
                const isApproved = sub.status === 'Approved';
                return (
                  <div
                    key={sub.id}
                    className={`p-4 rounded-2xl border transition-all text-left ${
                      isApproved
                        ? 'border-emerald-500/40 bg-emerald-950/20'
                        : 'border-amber-500/25 bg-[#121522]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">
                            {sub.fullName}
                          </h4>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                              isApproved
                                ? 'bg-emerald-400 text-stone-950'
                                : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            }`}
                          >
                            {isApproved ? '✓ APPROVED' : 'PENDING APPROVAL'}
                          </span>
                        </div>
                        <div className="mt-1.5 space-y-0.5 text-xs font-mono text-stone-300">
                          <div>
                            <span className="text-stone-500">Phone: </span>
                            <span className="text-amber-300">{sub.phone}</span>
                          </div>
                          <div>
                            <span className="text-stone-500">Bank / Acc: </span>
                            <span className="text-stone-200">
                              {sub.bank?.nameAm || sub.bank?.nameEn || 'Bank'} • {sub.accountNumber}
                            </span>
                          </div>
                          <div>
                            <span className="text-stone-500">Submitted: </span>
                            <span className="text-stone-400">{sub.submissionDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        {!isApproved ? (
                          <button
                            onClick={() => onApproveSubmission(sub.id)}
                            className="py-2 px-3.5 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center gap-1.5 cursor-pointer"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Approve Now</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => onRejectOrResetSubmission(sub.id)}
                            className="py-2 px-3 rounded-xl font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-xs transition-all flex items-center gap-1 cursor-pointer"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Revert to Pending</span>
                          </button>
                        )}
                        <button
                          onClick={() => onDeleteSubmission(sub.id)}
                          className="p-2 rounded-xl text-stone-500 hover:text-rose-400 hover:bg-rose-950/40 transition-colors cursor-pointer"
                          title="Delete Submission"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Footer */}
        <div className="p-3 border-t border-amber-500/15 bg-[#0a0c14] text-center text-[10px] text-stone-500 font-mono">
          ETHIOPIA ILLUMINATI AGENCY • DIRECTORATE ACCESS • PASSCODE: 666
        </div>
      </div>
    </div>
  );
};

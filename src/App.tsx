import React, { useState, useEffect } from 'react';
import { LanguageScreen } from './components/LanguageScreen';
import { ApplicationForm } from './components/ApplicationForm';
import { VerifyStatus } from './components/VerifyStatus';
import { SignInModal } from './components/SignInModal';
import { AdminApprovalModal } from './components/AdminApprovalModal';
import { Navbar } from './components/Navbar';
import { LandingHero } from './components/LandingHero';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ProofSection } from './components/ProofSection';
import { MediaGallery } from './components/MediaGallery';
import { KnowledgeVault } from './components/KnowledgeVault';
import { SignatureOptions } from './components/SignatureOptions';
import { UserHome } from './components/UserHome';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginModal } from './components/LoginModal';
import { RegistrationModal } from './components/RegistrationModal';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';
import { Language, ApplicationSubmission, Member } from './types';
import { AGENTS_LIST, BANKS_LIST, REGIONS_LIST } from './data/ethioData';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function App() {
  // Navigation step: starts with 'language' selection
  const [currentStep, setCurrentStep] = useState<'language' | 'apply' | 'verify' | 'portal_view'>('language');
  const [portalActiveView, setPortalActiveView] = useState<string>('home');

  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('eia_selected_lang');
      if (stored === 'am' || stored === 'om' || stored === 'en') return stored;
    } catch (e) {}
    return 'en';
  });

  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  // Default seed submission
  const defaultSubmission: ApplicationSubmission = {
    id: 'sub-default',
    fullName: 'Abebe Bikila Tesfaye',
    phone: '+251 912345678',
    agent: AGENTS_LIST[0],
    bank: BANKS_LIST[0],
    accountNumber: '1000192837461',
    region: REGIONS_LIST[0],
    zone: REGIONS_LIST[0].zones[0],
    submissionDate: '03 Oct 2026, 22:32',
    status: 'Pending Approval'
  };

  const [currentSubmission, setCurrentSubmission] = useState<ApplicationSubmission>(() => {
    try {
      const stored = localStorage.getItem('eia_submission');
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.agent = AGENTS_LIST[0];
        return parsed;
      }
    } catch (e) {}
    return defaultSubmission;
  });

  const [allSubmissions, setAllSubmissions] = useState<ApplicationSubmission[]>(() => {
    try {
      const stored = localStorage.getItem('eia_all_submissions');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    return [defaultSubmission];
  });

  // Current authenticated member state
  const [currentMember, setCurrentMember] = useState<Member | null>(() => {
    try {
      const stored = localStorage.getItem('eia_current_member');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    return null;
  });

  const [allMembers, setAllMembers] = useState<Member[]>(() => {
    try {
      const stored = localStorage.getItem('eia_all_members');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}
    return [
      {
        id: 'mem-seed-1',
        fullName: 'Solomon Wondimu',
        phone: '+251 91 123 4567',
        countryCode: '+251',
        permanentCode: 'EIA-8842-9X',
        registrationDate: 'Jan 12, 2026',
        status: 'active',
        stagesCompleted: 3,
        bankInfo: {
          bankName: 'Commercial Bank of Ethiopia (CBE)',
          accountName: 'Solomon Wondimu',
          accountNumber: '100029384756',
          isVerified: true
        },
        personalInfo: {
          occupation: 'Senior Logistics Specialist',
          age: '36',
          gender: 'male',
          region: 'Addis Ababa (አዲስ አበባ)',
          zone: 'Bole Sub-City'
        }
      }
    ];
  });

  // Sync state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('eia_selected_lang', currentLang);
      localStorage.setItem('eia_submission', JSON.stringify(currentSubmission));
      localStorage.setItem('eia_all_submissions', JSON.stringify(allSubmissions));
      if (currentMember) {
        localStorage.setItem('eia_current_member', JSON.stringify(currentMember));
      } else {
        localStorage.removeItem('eia_current_member');
      }
      localStorage.setItem('eia_all_members', JSON.stringify(allMembers));
    } catch (e) {}
  }, [currentLang, currentSubmission, allSubmissions, currentMember, allMembers]);

  const handleSelectLanguage = (lang: Language) => {
    setCurrentLang(lang);
    setCurrentStep('apply');
  };

  const handleBackToLanguage = () => {
    setCurrentStep('language');
  };

  const handleSubmitSuccess = (submission: ApplicationSubmission) => {
    setCurrentSubmission(submission);
    setAllSubmissions((prev) => {
      const exists = prev.some((s) => s.id === submission.id);
      return exists ? prev.map((s) => (s.id === submission.id ? submission : s)) : [submission, ...prev];
    });
    setCurrentStep('verify');
  };

  const handleBackToEdit = () => {
    setCurrentStep('apply');
  };

  const handleStartOver = () => {
    setCurrentStep('language');
  };

  const handleLoginSuccess = (submission: ApplicationSubmission) => {
    setCurrentSubmission(submission);
    setCurrentStep('verify');
  };

  // Member auth handlers
  const handleMemberLogin = (code: string) => {
    const found = allMembers.find(m => m.permanentCode.toUpperCase() === code.toUpperCase());
    if (found) {
      setCurrentMember(found);
      setCurrentStep('portal_view');
      setPortalActiveView('portal');
      return true;
    }
    // Also allow instant fallback
    if (code.toUpperCase().includes('EIA') || code.toUpperCase() === '666') {
      const demoMem = allMembers[0];
      setCurrentMember(demoMem);
      setCurrentStep('portal_view');
      setPortalActiveView('portal');
      return true;
    }
    return false;
  };

  const handleDemoLogin = () => {
    const demoMem: Member = {
      id: 'mem-demo',
      fullName: 'Abebe Bikila Tesfaye',
      phone: '+251 91 142 8820',
      countryCode: '+251',
      permanentCode: 'EIA-DEMO-01',
      registrationDate: 'March 2026',
      status: 'active',
      stagesCompleted: 2,
      bankInfo: {
        bankName: 'Commercial Bank of Ethiopia (CBE / ንግድ ባንክ)',
        accountName: 'Abebe Bikila Tesfaye',
        accountNumber: '1000192837461',
        isVerified: true
      },
      personalInfo: {
        occupation: 'Commercial Trader & Consultant',
        age: '34',
        gender: 'male',
        region: 'Addis Ababa (አዲስ አበባ)',
        zone: 'Bole Sub-City'
      }
    };
    setCurrentMember(demoMem);
    setCurrentStep('portal_view');
    setPortalActiveView('portal');
  };

  const handleRegisteredMember = (newMem: Member) => {
    setAllMembers(prev => [newMem, ...prev]);
    setCurrentMember(newMem);
    setCurrentStep('portal_view');
    setPortalActiveView('portal');
  };

  const handleUpdateMember = (updated: Member) => {
    setCurrentMember(updated);
    setAllMembers(prev => prev.map(m => m.id === updated.id ? updated : m));
  };

  const handleLogout = () => {
    setCurrentMember(null);
    setPortalActiveView('home');
  };

  // Admin Approval Handlers
  const handleApproveSubmission = (id: string) => {
    setAllSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Approved' } : s))
    );
    if (currentSubmission.id === id) {
      setCurrentSubmission((prev) => ({ ...prev, status: 'Approved' }));
    }
  };

  const handleRejectOrResetSubmission = (id: string) => {
    setAllSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: 'Pending Approval' } : s))
    );
    if (currentSubmission.id === id) {
      setCurrentSubmission((prev) => ({ ...prev, status: 'Pending Approval' }));
    }
  };

  const handleDeleteSubmission = (id: string) => {
    setAllSubmissions((prev) => prev.filter((s) => s.id !== id));
  };

  const handleToggleCurrentStatus = () => {
    const newStatus = currentSubmission.status === 'Approved' ? 'Pending Approval' : 'Approved';
    setCurrentSubmission((prev) => ({ ...prev, status: newStatus }));
    setAllSubmissions((prev) =>
      prev.map((s) => (s.id === currentSubmission.id ? { ...s, status: newStatus } : s))
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#08090d] text-slate-100 flex flex-col font-sans select-none antialiased overflow-x-hidden">
      
      {/* Step 1: Screenshot 1 - Choose Your Language */}
      {currentStep === 'language' && (
        <>
          <LanguageScreen
            onSelectLanguage={handleSelectLanguage}
            onOpenSignIn={() => setSignInModalOpen(true)}
            onOpenAdmin={() => setAdminModalOpen(true)}
          />
          {/* Quick link to explore full sovereign lodge */}
          <div className="w-full text-center pb-8 -mt-4">
            <button
              onClick={() => {
                setCurrentStep('portal_view');
                setPortalActiveView('home');
              }}
              className="px-5 py-2.5 rounded-full border border-amber-500/35 bg-[#121522]/90 text-amber-300 hover:text-white hover:border-amber-400 text-xs font-semibold transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] cursor-pointer"
            >
              🏛️ {currentLang === 'am' ? 'የኢትዮጵያ ኢሉሚናቲ ኤጀንሲ ፖርታልን ያስሱ' : 'Explore Sovereign Lodge Portal & Archives'}
            </button>
          </div>
        </>
      )}

      {/* Step 2: Screenshots 2, 3, 4, 5 - Membership Application Form */}
      {currentStep === 'apply' && (
        <ApplicationForm
          currentLang={currentLang}
          onBackToLanguage={handleBackToLanguage}
          onSubmitSuccess={handleSubmitSuccess}
          onOpenSignIn={() => setSignInModalOpen(true)}
          onOpenAdmin={() => setAdminModalOpen(true)}
        />
      )}

      {/* Step 3: Screenshot 6 - /verify Status Screen with Voice Message */}
      {currentStep === 'verify' && (
        <VerifyStatus
          submission={currentSubmission}
          currentLang={currentLang}
          onBackToEdit={handleBackToEdit}
          onStartOver={handleStartOver}
          onOpenAdmin={() => setAdminModalOpen(true)}
          onToggleStatus={handleToggleCurrentStatus}
        />
      )}

      {/* Step 4: Full Sovereign Lodge Web Portal */}
      {currentStep === 'portal_view' && (
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Navigation Bar */}
          <Navbar
            currentLang={currentLang}
            onLanguageChange={setCurrentLang}
            activeView={portalActiveView}
            onNavigate={(view) => setPortalActiveView(view)}
            currentMember={currentMember}
            onOpenLogin={() => setLoginModalOpen(true)}
            onOpenRegister={() => setRegisterModalOpen(true)}
            onLogout={handleLogout}
          />

          {/* Top Quick Bar to return to Registration Form */}
          <div className="bg-[#121522] border-b border-amber-500/20 py-2 px-4 flex items-center justify-between text-xs">
            <button
              onClick={() => setCurrentStep('apply')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentLang === 'am' ? 'ወደ አባልነት ማመልከቻ ቅጽ ተመለስ' : 'Go to Membership Application Form'}</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentStep('verify')}
                className="text-stone-300 hover:text-amber-300 font-mono text-[11px]"
              >
                /verify ({currentSubmission.status})
              </button>
            </div>
          </div>

          {/* Main Views */}
          <main className="flex-1">
            {portalActiveView === 'home' && (
              <>
                <LandingHero
                  currentLang={currentLang}
                  onOpenRegister={() => setRegisterModalOpen(true)}
                  onOpenLogin={() => setLoginModalOpen(true)}
                  onNavigate={(view) => setPortalActiveView(view)}
                  currentMember={currentMember}
                />
                <PrinciplesSection
                  currentLang={currentLang}
                  onNavigate={(view) => setPortalActiveView(view)}
                />
                <ProofSection currentLang={currentLang} />
              </>
            )}

            {portalActiveView === 'stages' && (
              <div className="py-8">
                {currentMember ? (
                  <UserHome
                    member={currentMember}
                    currentLang={currentLang}
                    onUpdateMember={handleUpdateMember}
                    onNavigate={(view) => setPortalActiveView(view)}
                  />
                ) : (
                  <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
                    <h2 className="text-3xl font-serif-luxury font-bold text-amber-200">
                      {currentLang === 'am' ? 'የአባልነት ቅበላ ደረጃዎች' : 'Membership Induction Stages'}
                    </h2>
                    <p className="text-sm text-stone-300 max-w-xl mx-auto">
                      {currentLang === 'am'
                        ? 'የአባልነት ደረጃዎን ለማየት ወይም ለማዘመን በቋሚ ኮድዎ ይግቡ ወይም አዲስ ይመዝገቡ።'
                        : 'Sign in with your permanent code or request access to track your progression across the four sacred chambers.'}
                    </p>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => setCurrentStep('apply')}
                        className="px-6 py-3 rounded-xl bg-amber-400 text-stone-950 font-bold text-xs shadow-lg hover:bg-amber-300 cursor-pointer"
                      >
                        {currentLang === 'am' ? 'አሁን ይመዝገቡ' : 'Apply for Clearance'}
                      </button>
                      <button
                        onClick={handleDemoLogin}
                        className="px-6 py-3 rounded-xl border border-amber-500/35 bg-[#121522] text-amber-300 text-xs font-semibold hover:bg-[#181d2e] cursor-pointer"
                      >
                        {currentLang === 'am' ? 'በሙከራ መለያ ይግቡ (Demo)' : 'Instant Demo Member'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {portalActiveView === 'vault' && (
              <KnowledgeVault
                currentLang={currentLang}
                member={currentMember}
                onOpenLogin={() => setLoginModalOpen(true)}
              />
            )}

            {portalActiveView === 'signature' && (
              <SignatureOptions
                currentLang={currentLang}
                member={currentMember}
                onUpdateMember={handleUpdateMember}
                onNavigate={(view) => setPortalActiveView(view)}
                onOpenLogin={() => setLoginModalOpen(true)}
              />
            )}

            {portalActiveView === 'gallery' && (
              <MediaGallery currentLang={currentLang} />
            )}

            {portalActiveView === 'portal' && currentMember && (
              <UserHome
                member={currentMember}
                currentLang={currentLang}
                onUpdateMember={handleUpdateMember}
                onNavigate={(view) => setPortalActiveView(view)}
              />
            )}

            {portalActiveView === 'admin' && (
              <AdminDashboard
                currentLang={currentLang}
                membersList={allMembers}
                onUpdateMember={handleUpdateMember}
                onNavigate={(view) => setPortalActiveView(view)}
              />
            )}
          </main>

          {/* Footer */}
          <Footer
            currentLang={currentLang}
            onLanguageChange={setCurrentLang}
            onNavigate={(view) => setPortalActiveView(view)}
            onOpenLogin={() => setLoginModalOpen(true)}
            onOpenAdmin={() => setAdminModalOpen(true)}
          />
        </div>
      )}

      {/* Floating AI Guidance Assistant Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setAiAssistantOpen(true)}
          className="p-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-stone-950 shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-110 transition-transform cursor-pointer flex items-center justify-center"
          title="Guidance Assistant"
        >
          <Sparkles className="w-5 h-5 text-stone-950" />
        </button>
      </div>

      {/* Sign In / Check Status Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        currentLang={currentLang}
        onLoginSuccess={handleLoginSuccess}
        onNavigateToApply={() => setCurrentStep('apply')}
      />

      {/* Directorate Admin Approval Console Modal */}
      <AdminApprovalModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        submissions={allSubmissions}
        onApproveSubmission={handleApproveSubmission}
        onRejectOrResetSubmission={handleRejectOrResetSubmission}
        onDeleteSubmission={handleDeleteSubmission}
        currentLang={currentLang}
      />

      {/* Member Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        currentLang={currentLang}
        onLogin={handleMemberLogin}
        onSwitchToRegister={() => setRegisterModalOpen(true)}
        onDemoLogin={handleDemoLogin}
      />

      {/* Member Registration Modal */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        currentLang={currentLang}
        onRegistered={handleRegisteredMember}
      />

      {/* AI Assistant Modal */}
      <AIAssistant
        currentLang={currentLang}
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        onOpenRegister={() => setRegisterModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
      />
    </div>
  );
}

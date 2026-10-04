import React, { useState, useEffect, useRef } from 'react';
import { ApplicationSubmission, Language } from '../types';
import { AGENTS_LIST } from '../data/ethioData';
import { DiamondLogo } from './DiamondLogo';
import alexanderVoice from '../assets/alexander_oliver_voice.mp3';
import { TelegramIcon, ImoIcon, WhatsAppIcon } from './SocialIcons';
import {
  ShieldCheck,
  Play,
  Pause,
  Phone,
  Clock,
  ArrowLeft,
  RotateCcw,
  Volume2,
  VolumeX,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Award,
} from 'lucide-react';

interface VerifyStatusProps {
  submission: ApplicationSubmission;
  currentLang: Language;
  onBackToEdit: () => void;
  onStartOver?: () => void;
  onOpenAdmin?: () => void;
  onToggleStatus?: () => void;
}

export const VerifyStatus: React.FC<VerifyStatusProps> = ({
  submission,
  currentLang,
  onBackToEdit,
  onStartOver,
  onOpenAdmin,
  onToggleStatus
}) => {
  const isAmharic = currentLang === 'am';
  const isOromo = currentLang === 'om';

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(38);
  const [showTranscript, setShowTranscript] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Active agent (Official agent D/R BIRHANU WENDOSSEN)
  const officialAgent = AGENTS_LIST[0];
  const agent = (submission.agent && submission.agent.name.includes('BIRHANU')) ? submission.agent : officialAgent;
  const agentName = officialAgent.name || 'D/R BIRHANU WENDOSSEN';
  const agentPhone = officialAgent.phone || '+251718306843';
  const agentPhoto = officialAgent.avatarUrl || agent.avatarUrl;
  const agentTelegram = officialAgent.telegramUsername || '@Iluchameveaya';
  const agentImo = officialAgent.imoPhone || '+251991801005';

  const regionName = isAmharic
    ? submission.region.nameAm
    : isOromo
    ? submission.region.nameOm
    : submission.region.nameEn;

  const zoneName = submission.zone
    ? isAmharic
      ? submission.zone.nameAm
      : isOromo
      ? submission.zone.nameOm
      : submission.zone.nameEn
    : '';

  const speechText = "Congratulations. My name is Alexander Oliver, and I am the board leader of the Illuminati Agency. I am pleased to welcome you into our organization. As an approved member, you will receive 10,000 dollars from us. Please follow all instructions you are given very carefully, and stay in close contact with the agent you registered with. Be aware that there are scammers who impersonate our organization. Stay alert and look out for them. Once again, congratulations, and welcome to the Illuminati Agency.";

  // Initialize audio element
  useEffect(() => {
    let timer: any = null;
    const audio = new Audio(alexanderVoice || '/alexander_oliver_voice.mp3');
    audioRef.current = audio;
    audio.preload = 'auto';

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 2) {
        setDuration(Math.round(audio.duration));
      }
    };
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const onPause = () => {
      setIsPlaying(false);
    };
    const onPlay = () => {
      setIsPlaying(true);
      setAutoplayBlocked(false);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('play', onPlay);

    return () => {
      if (timer) clearInterval(timer);
      audio.pause();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('play', onPlay);
    };
  }, []);

  const playVoiceFallback = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(speechText);
      utterance.rate = 0.95;
      utterance.pitch = 0.9;
      // Prefer male or deep english voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('george')));
      if (preferred) utterance.voice = preferred;

      utterance.onstart = () => {
        setIsPlaying(true);
        setCurrentTime(0);
      };
      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
      };
      window.speechSynthesis.speak(utterance);
    }
  };

  const togglePlayAudio = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      if (audioRef.current && audioRef.current.duration > 3) {
        audioRef.current.play().catch(() => {
          playVoiceFallback();
        });
      } else {
        playVoiceFallback();
      }
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const playProgress = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;
  const isApproved = submission.status === 'Approved';

  // Text translations
  const t = {
    pendingHeadline: isApproved
      ? (isAmharic ? 'የአባልነት ማረጋገጫ ጸድቋል!' : isOromo ? "Eeyyami Miseensummaa Ragga'eera!" : 'OFFICIAL MEMBERSHIP APPROVED!')
      : (isAmharic ? 'የአባልነት ማረጋገጫ በመጠባበቅ ላይ' : isOromo ? 'Eegumsa Eeyyamaa Irra' : 'Pending Approval'),
    pendingSubtitle: isApproved
      ? (isAmharic
          ? 'እንኳን ደስ አለዎት! የአባልነት ፍቃድዎ በቦርድ መሪው አሌክሳንደር ኦሊቨር በይፋ ጸድቋል።'
          : isOromo
          ? "Baga gammaddan! Miseensummaan keessan guutummaatti ragga'eera."
          : 'Congratulations! Your membership clearance has been officially ratified by Board Leader Alexander Oliver.')
      : (isAmharic
          ? 'ማመልከቻዎ ገብቷል፤ ፈቃድ ለማግኘት እባክዎ የተመደበውን ወኪል ያነጋግሩ።'
          : isOromo
          ? "Galmeen keessan dhiyaateera; eeyyama argachuuf bakka bu'aa keessan qunnamaa."
          : 'Your registration has been submitted; contact your assigned agent for clearance.'),
    assignedAdmin: isAmharic ? 'የተመደበ ወኪል / Admin' : isOromo ? "Bakka Bu'aa / Admin" : 'Assigned Admin',
    registrationDate: isAmharic ? 'የተመዘገበበት ቀን' : isOromo ? 'Guyyaa Galmee' : 'Registration Date',
    territoryZone: isAmharic ? 'ክልል እና ዞን' : isOromo ? 'Naannoo fi Zoonii' : 'Territory & Zone',
    status: isAmharic ? 'ሁኔታ' : isOromo ? 'Haala' : 'Status',
    statusValue: isApproved
      ? (isAmharic ? 'የጸደቀ (APPROVED)' : isOromo ? "Mirkanaa'eera (APPROVED)" : 'APPROVED & RATIFIED')
      : (isAmharic ? 'በመጠባበቅ ላይ' : isOromo ? 'Pending Approval' : 'Pending Approval'),
    boardLeaderVoice: isAmharic ? 'የቦርድ መሪ • ይፋዊ የወንድ ድምፅ መልዕክት' : isOromo ? "Dura Taa'aa Boordii • Ergaa Sagalee" : 'Board Leader • Official Voice Decree (Alexander Oliver)',
    personalVoiceNote: isAmharic
      ? `የእንኳን ደስ አለዎት መልዕክት ለ ${submission.fullName}`
      : isOromo
      ? `Ergaa Baga Nagaan Dhuftan Alexander Oliver ${submission.fullName}-f`
      : `Official Welcome Voice Decree from Board Leader Alexander Oliver for ${submission.fullName}`,
    clickToListen: isAmharic
      ? 'የቦርድ መሪውን አሌክሳንደር ኦሊቨር ድምፅ ለማዳመጥ Play ይጫኑ'
      : isOromo
      ? "Ergaa sagalee dhaggeeffachuuf taphisi"
      : 'Official Voice Note • Tap Play to listen to Board Leader Alexander Oliver',
    tapToPlayNotice: isAmharic
      ? 'ድምፁን ለማዳመጥ Play ይጫኑ'
      : isOromo
      ? 'Ergaa sagalee dhaggeeffachuuf bakka kamiyyuu tuqaa'
      : 'Tap Play to hear the official male voice decree',
    awaitingStatusBadge: isAmharic
      ? 'የአስተዳዳሪ ማረጋገጫ በመጠባበቅ ላይ ነው...'
      : isOromo
      ? 'Eeyyama admin eegaa jirtu ...'
      : 'You are awaiting admin approval ...',
    contactToGetApproval: isAmharic
      ? 'ይፋዊ ፍቃድ ለማግኘት ወኪልዎን ያነጋግሩ'
      : isOromo
      ? "Eeyyama argachuuf bakka bu'aa keessan qunnamaa"
      : 'Contact your agent to get official approval',
    autoRefreshNotice: isAmharic
      ? 'አስተዳዳሪው ምዝገባውን ሲያጸድቅ ይህ ገጽ በራሱ ይታደሳል።'
      : isOromo
      ? 'Admin galmee yeroo mirkaneessu fuulli kun ofumaan haaroma.'
      : 'This page will automatically refresh once the admin approves your registration.',
    backBtn: isAmharic ? 'ወደ ኋላ ተመለስ' : isOromo ? "Duubatti Deebi'i" : 'Back to Edit',
    startOverBtn: isAmharic ? 'አዲስ ማመልከቻ ጀምር' : isOromo ? 'Galmee Haaraa Jalqabi' : 'Start New Application',
    transcriptLabel: isAmharic ? 'የንግግሩ ጽሑፍ (Transcript)' : isOromo ? 'Barreeffama Sagalee' : 'Official Speech Transcript',
    importantNotice: isAmharic
      ? 'ማሳሰቢያ፡ በኤጀንሲው ስም ከሚነግዱ አጭበርባሪዎች ይጠንቀቁ። ከተመደበው ወኪል D/R BIRHANU WENDOSSEN ጋር ብቻ ይገናኙ።'
      : isOromo
      ? "Akeekkachiisa: Namoota maqaa dhaabbata keenyaatiin soban irraa of eeggadhaa. Bakka bu'aa keessan D/R BIRHANU WENDOSSEN qofa qunnamaa."
      : 'Notice: Beware of scammers impersonating our organization. Stay in close contact with your assigned agent D/R BIRHANU WENDOSSEN.'
  };

  return (
    <div className="min-h-screen w-full bg-grid-mesh text-slate-100 flex flex-col justify-between py-4 px-3 sm:px-6 relative overflow-x-hidden">
      
      {/* Top Navbar with Diamond Logo */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between py-2 sm:py-4">
        <button
          onClick={onBackToEdit}
          className="text-xs sm:text-sm text-stone-400 hover:text-amber-300 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backBtn}</span>
        </button>

        {/* Center Logo */}
        <div className="flex flex-col items-center">
          <DiamondLogo size="sm" className="mb-1" />
          <span className="text-[10px] sm:text-xs font-mono tracking-wider lowercase text-amber-400 font-bold">
            https://ethioiluminati666.com
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-stone-400">
            ILLUMINATI AGENCY
          </span>
        </div>

        {/* Verify Badge */}
        <div className="px-2.5 sm:px-3 py-1 rounded-full border border-amber-500/35 bg-[#121522] text-amber-400 text-[11px] font-mono font-semibold">
          /verify
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-xl mx-auto my-auto py-2">
        <div className="p-6 sm:p-8 rounded-3xl border border-amber-500/25 bg-[#0f1118]/95 shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-md flex flex-col items-center text-center">
          
          {/* Top Shield Icon with Glowing Amber/Emerald Circle */}
          <div className="relative mb-4">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isApproved
                  ? 'bg-gradient-to-b from-emerald-500/30 to-[#071a10] border border-emerald-400/70 text-emerald-300 shadow-[0_0_35px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-b from-amber-500/25 to-[#1a1407] border border-amber-500/50 text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.4)]'
              }`}
            >
              {isApproved ? (
                <CheckCircle2 className="w-9 h-9 text-emerald-400" />
              ) : (
                <ShieldCheck className="w-8 h-8 text-amber-400" />
              )}
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isApproved
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-400'
                : 'text-white'
            }`}
          >
            {t.pendingHeadline}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-2 max-w-md leading-relaxed">
            {t.pendingSubtitle}
          </p>

          {/* If Approved: Consecrated Membership Certificate Card */}
          {isApproved && (
            <div className="w-full mt-6 p-5 sm:p-6 rounded-2xl border-2 border-amber-400/60 bg-gradient-to-b from-[#141824] via-[#0d101a] to-[#0a0d16] shadow-[0_0_40px_rgba(245,158,11,0.25)] text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400" />
              
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-amber-300">
                    CONSECRATED CERTIFICATE OF CLEARANCE
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-400 text-stone-950">
                  RATIFIED
                </span>
              </div>

              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-mono">Member ID:</span>
                  <span className="text-amber-300 font-mono font-bold text-sm tracking-wider">
                    EIA-666-{submission.id.replace(/[^0-9]/g, '').slice(-4) || '8842'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-mono">Full Member Name:</span>
                  <span className="text-white font-bold text-sm">
                    {submission.fullName}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-mono">Endowment Grant:</span>
                  <span className="text-emerald-400 font-mono font-bold text-sm">
                    $10,000 USD (Approved for Disbursement)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-mono">Target Account:</span>
                  <span className="text-stone-200 font-mono">
                    {submission.bank?.nameAm || submission.bank?.nameEn || 'Bank'} • {submission.accountNumber}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-stone-400">
                <span>Ratified by: Board Leader Alexander Oliver</span>
                <span className="text-emerald-400 font-bold">✓ Clearance Active</span>
              </div>
            </div>
          )}

          {/* Metadata Grid Card */}
          <div className="w-full mt-6 p-4.5 rounded-2xl border border-amber-500/20 bg-[#121522] grid grid-cols-2 gap-y-3.5 text-left text-xs sm:text-sm">
            <div className="text-stone-400">
              {t.assignedAdmin}
            </div>
            <div className="text-right font-bold text-amber-300 font-mono tracking-wide">
              {agentName.toUpperCase()}
            </div>

            <div className="text-stone-400">
              {t.registrationDate}
            </div>
            <div className="text-right font-mono text-stone-200">
              {submission.submissionDate}
            </div>

            {/* Region & Zone / Sub-City Mentioned */}
            <div className="text-stone-400">
              {t.territoryZone}
            </div>
            <div className="text-right font-semibold text-white">
              <span>{regionName}</span>
              {zoneName && (
                <span className="block text-[11px] text-amber-300/90 font-mono">
                  {zoneName}
                </span>
              )}
            </div>

            <div className="text-stone-400">
              {t.status}
            </div>
            <div className="text-right">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md font-mono text-xs font-bold ${
                  isApproved
                    ? 'text-emerald-300 bg-emerald-400/20 border border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                    : 'text-amber-300 bg-amber-400/15 border border-amber-400/30'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isApproved ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'
                  }`}
                />
                {t.statusValue}
              </span>
            </div>
          </div>

          {/* Voice Decree Audio Card featuring Board Leader Alexander Oliver */}
          <div className="w-full mt-6 p-4 sm:p-5 rounded-2xl border border-amber-500/30 bg-[#121522] shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-left relative overflow-hidden">
            
            {/* Top gold shimmer bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600" />

            {/* Voice Header with Alexander Oliver */}
            <div className="flex items-center gap-3.5 pt-1">
              <div className="relative w-12 h-12 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-stone-950 font-black text-sm shrink-0 shadow-md">
                AO
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-400 border border-stone-950 flex items-center justify-center text-[10px] text-stone-950 font-bold">
                  ★
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white truncate">
                    Alexander Oliver
                  </h4>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400 text-stone-950">
                    BOARD LEADER
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-amber-300/90 font-medium">
                  {t.boardLeaderVoice}
                </p>
              </div>
              <div className="shrink-0">
                {isPlaying ? (
                  <Volume2 className="w-5 h-5 text-amber-400 animate-pulse" />
                ) : (
                  <VolumeX className="w-5 h-5 text-stone-500" />
                )}
              </div>
            </div>

            {/* Note text */}
            <p className="text-xs sm:text-sm text-stone-300 font-medium mt-3.5">
              {t.personalVoiceNote}
            </p>

            {/* Waveform and Play Button Area */}
            <div className="mt-4 flex items-center gap-3.5 sm:gap-4 p-2.5 rounded-xl bg-[#0a0c14]/90 border border-amber-500/25">
              {/* Play / Pause Button */}
              <button
                type="button"
                onClick={togglePlayAudio}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-stone-950 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.45)] transition-transform hover:scale-105 cursor-pointer"
                title={isPlaying ? 'Pause speech' : 'Play Alexander Oliver speech'}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-stone-950 fill-stone-950" />
                ) : (
                  <Play className="w-5 h-5 text-stone-950 fill-stone-950 ml-0.5" />
                )}
              </button>

              {/* Waveform Graphic */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-1 sm:gap-1.5 h-6">
                  {[6, 12, 18, 10, 22, 26, 18, 14, 24, 28, 20, 16, 22, 14, 10, 18, 24, 16, 12, 8].map((h, i) => {
                    const activeBar = isPlaying && (i / 20) * 100 <= playProgress;
                    return (
                      <div
                        key={i}
                        className={`w-1.5 rounded-full transition-all duration-150 ${
                          activeBar
                            ? 'bg-amber-400 scale-y-125 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                            : isPlaying
                            ? 'bg-amber-500/60 animate-pulse'
                            : 'bg-amber-500/30'
                        }`}
                        style={{ height: `${h}px` }}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-stone-400 mt-1">
                  <span className="text-amber-300 font-semibold">{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-amber-300/80 text-center mt-2.5 font-medium">
              {t.clickToListen}
            </p>

            {autoplayBlocked && !isPlaying && (
              <div 
                onClick={togglePlayAudio}
                className="mt-2.5 px-3 py-2 rounded-xl bg-amber-500/15 border border-amber-400/40 text-center cursor-pointer hover:bg-amber-500/25 transition-all shadow-sm"
              >
                <p className="text-[11px] text-amber-300 font-semibold flex items-center justify-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{t.tapToPlayNotice}</span>
                </p>
              </div>
            )}

            {/* Transcript Toggle Button */}
            <div className="mt-3 pt-3 border-t border-amber-500/15">
              <button
                type="button"
                onClick={() => setShowTranscript(!showTranscript)}
                className="w-full flex items-center justify-between text-xs text-amber-300 hover:text-white transition-colors cursor-pointer py-1"
              >
                <span className="flex items-center gap-1.5 font-semibold">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  {t.transcriptLabel}
                </span>
                {showTranscript ? (
                  <ChevronUp className="w-4 h-4 text-amber-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                )}
              </button>

              {/* Collapsible Transcript Content */}
              {showTranscript && (
                <div className="mt-2.5 p-3 rounded-xl bg-[#090b12] border border-amber-500/20 text-stone-300 text-xs leading-relaxed space-y-2 animate-fade-in">
                  <p className="italic text-amber-200/90 font-serif">
                    &ldquo;{speechText}&rdquo;
                  </p>
                  <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-start gap-2 text-[11px] text-amber-300 font-medium">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{t.importantNotice}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pending clearance pill badge */}
          <div className="w-full mt-5">
            <div className="w-full py-3 px-4 rounded-xl border border-amber-500/30 bg-[#161926] text-amber-300 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-inner">
              <Clock className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{t.awaitingStatusBadge}</span>
            </div>
          </div>

          {/* Agent Direct Contact Card featuring D/R BIRHANU WENDOSSEN */}
          <div className="w-full mt-6 p-4 sm:p-5 rounded-2xl border border-amber-500/25 bg-[#121522] text-left">
            <span className="text-xs font-bold text-white block mb-3 text-center sm:text-left">
              {t.contactToGetApproval}
            </span>
            <div className="flex flex-col gap-4 pt-1">
              {/* Agent Profile Details */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/80 shrink-0 bg-stone-900 shadow-md flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-700 text-stone-950 font-black text-sm flex items-center justify-center">
                    BW
                  </div>
                  <img
                    src={agentPhoto || '/birhanu.jpg'}
                    alt={agentName}
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
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className="text-sm sm:text-base font-bold text-white truncate">
                      {agentName}
                    </h4>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400 text-stone-950">
                      OFFICIAL AGENT
                    </span>
                  </div>
                  {/* Primary Direct Phone */}
                  <a
                    href={`tel:${agentPhone}`}
                    className="text-xs sm:text-sm text-amber-300 hover:text-amber-200 font-mono font-bold flex items-center gap-1.5 mt-0.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{agentPhone}</span>
                  </a>
                </div>
              </div>

              {/* Direct Communication Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-amber-500/15">
                {/* 1. Phone Call */}
                <a
                  href={`tel:${agentPhone}`}
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-xs transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_12px_rgba(245,158,11,0.3)] hover:scale-[1.02] cursor-pointer"
                  title="Call Agent"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
                  <span>Call Agent</span>
                </a>

                {/* 2. Telegram - direct to chat */}
                <a
                  href={`https://t.me/${agentTelegram.replace(/^@/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-[#E0F2FE] bg-[#229ED9]/25 hover:bg-[#229ED9]/40 border border-[#229ED9]/50 text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] cursor-pointer"
                  title="Telegram Chat"
                >
                  <TelegramIcon className="w-4 h-4 text-[#38BDF8]" />
                  <span>Telegram</span>
                </a>

                {/* 3. IMO - direct to chat */}
                <a
                  href={`imo://chat?phone=${agentImo.replace(/[^0-9+]/g, '')}`}
                  onClick={() => {
                    setTimeout(() => {
                      if (!document.hidden) {
                        window.open(`https://imo.im/`, '_blank');
                      }
                    }, 1500);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-[#DBEAFE] bg-[#0080FF]/25 hover:bg-[#0080FF]/40 border border-[#0080FF]/50 text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] cursor-pointer"
                  title="IMO Chat"
                >
                  <ImoIcon className="w-4 h-4" />
                  <span>IMO Chat</span>
                </a>

                {/* 4. WhatsApp */}
                <a
                  href={`https://wa.me/${agentPhone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl font-bold text-[#DCFCE7] bg-[#25D366]/25 hover:bg-[#25D366]/40 border border-[#25D366]/50 text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02] cursor-pointer"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#4ADE80]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Auto-refresh Footer Note */}
          <p className="text-[11px] text-stone-400 text-center mt-6">
            {t.autoRefreshNotice}
          </p>

          {/* Start Over Button */}
          {onStartOver && (
            <div className="mt-4 pt-3 border-t border-amber-500/15 w-full flex justify-center">
              <button
                type="button"
                onClick={onStartOver}
                className="text-xs text-stone-400 hover:text-amber-300 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.startOverBtn}</span>
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[10px] text-stone-500 py-2">
        <p>© 2026 https://ethioiluminati666.com • Ethiopia Illuminati Agency. All rights reserved.</p>
      </div>
    </div>
  );
};

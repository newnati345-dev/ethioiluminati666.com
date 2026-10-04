import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Send, X, Bot, User } from 'lucide-react';

interface AIAssistantProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onOpenLogin: () => void;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  currentLang,
  isOpen,
  onClose
}) => {
  const t = translations[currentLang];
  const initialGreeting = currentLang === 'am'
    ? 'ሰላምታዬ ይድረስዎት። እኔ የኢትዮጵያ ኢሉሚናቲ ኤጀንሲ መመሪያ ረዳት ነኝ። ስለ ምዝገባ፣ የአባልነት ደረጃዎች፣ የተፈቀዱ ባንኮች ወይም ቋሚ መለያ ኮድ መጠየቅ ይችላሉ።'
    : 'Greetings. I am the Ethiopia Illuminati Agency Guidance Assistant. You may inquire about registration, membership stages, authorized banks, regional lodges, or permanent code authentication.';

  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: initialGreeting
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = currentLang === 'am' ? [
    'እንዴት አባል መሆን እችላለሁ?',
    'አራቱ የአባልነት ደረጃዎች ምንድን ናቸው?',
    'የሚደገፉት የኢትዮጵያ ባንኮች የትኞቹ ናቸው?',
    'የጠፋብኝን ቋሚ ኮድ እንዴት ላገኝ እችላለሁ?'
  ] : [
    'How do I join the agency?',
    'What are the 4 membership stages?',
    'Which Ethiopian banks are supported?',
    'How do I retrieve my permanent code?'
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userText = text.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      const lower = userText.toLowerCase();

      if (lower.includes('join') || lower.includes('register') || lower.includes('apply') || userText.includes('መመዝገብ') || userText.includes('አባል')) {
        botResponse = currentLang === 'am'
          ? 'አባል ለመሆን በዋናው ገጽ ላይ "ይፋዊ ፈቃድ ይጠይቁ" የሚለውን ይጫኑ። ሙሉ ስምዎን እና ስልክ ቁጥርዎን ያስገቡ። ወዲያውኑ ቋሚ መለያ ኮድዎ (EIA-XXXX-XX) ይዘጋጅልዎታል።'
          : 'To request access, click "Request Agency Access" on the portal. You must provide your full legal name and phone number. Once submitted, your permanent access code (e.g. EIA-XXXX-XX) is generated immediately.';
      } else if (lower.includes('stage') || lower.includes('step') || userText.includes('ደረጃ')) {
        botResponse = currentLang === 'am'
          ? 'ኤጀንሲው 4 የቅበላ ደረጃዎች አሉት፡\nደረጃ 1፡ ምዝገባና ማጣሪያ\nደረጃ 2፡ የፋይናንስና ባንክ ማህደር (ንግድ ባንክ፣ ዳሸን፣ አዋሽ፣ ቴሌብር)\nደረጃ 3፡ የቃል ኪዳን መሃላና ፊርማ\nደረጃ 4፡ ንጉሣዊ ማኅተም እና የአባልነት ምስክር ወረቀት'
          : 'The agency operates on 4 induction stages:\nStage 1: Verified Registration & background clearance\nStage 2: Financial Dossier & Bank linking (CBE, Dashen, Awash, Telebirr)\nStage 3: Digital Covenant Oath & formal signature\nStage 4: Official Illuminati Agency Seal & Certificate issuance.';
      } else if (lower.includes('bank') || lower.includes('money') || lower.includes('cbe') || lower.includes('telebirr') || userText.includes('ባንክ') || userText.includes('ገንዘብ') || userText.includes('ብር')) {
        botResponse = currentLang === 'am'
          ? 'የሚደገፉት የኢትዮጵያ ንግድ ባንክ (CBE)፣ ቴሌብር (Telebirr)፣ ሲቢኢ ብር (CBE Birr)፣ አዋሽ ባንክ፣ ዳሸን ባንክ፣ አቢሲኒያ፣ ንብ፣ ወጋገን፣ ኦሮሚያ ህብረት ስራ እና ሲንቄ ባንክ ናቸው።'
          : 'Supported institutions include Commercial Bank of Ethiopia (CBE), Ethio Telecom Telebirr, CBE Birr, Awash Bank, Dashen Bank, Bank of Abyssinia, Nib, Wegagen, Coopbank, and Sinqe Bank. You can connect your account in Stage 2 inside your member portal.';
      } else if (lower.includes('code') || lower.includes('lost') || lower.includes('login') || userText.includes('ኮድ')) {
        botResponse = currentLang === 'am'
          ? 'ቋሚ ኮድዎ (ምሳሌ፡ EIA-XXXX-XX) ብቸኛ መለያዎ ነው። ከዚህ በፊት የተመዘገቡ ከሆኑ በ"አባላት መግቢያ" በኩል ያስገቡ። ኮዱ ከጠፋብዎ በአባላት ፖርታል በኩል ለዲሬክቶሬቱ መልዕክት ይላኩ።'
          : 'Your permanent code (e.g. EIA-XXXX-XX) is your sole immutable login key. If you are already registered, enter this code in the Member Login dialog. If you have misplaced it, reach out to the Grand Council Directorate through your member portal.';
      } else {
        botResponse = currentLang === 'am'
          ? 'ጥያቄዎ ደርሶናል። የኢትዮጵያ ኢሉሚናቲ ኤጀንሲ ከፍተኛ ጥበብና ሚስጥራዊነትን ይጠብቃል። ለተጨማሪ መረጃ በአባላት ፖርታል ከዲሬክቶሬቱ ጋር በቀጥታ ይገናኙ።'
          : 'Thank you for your inquiry. The Ethiopia Illuminati Agency maintains strict standards of wisdom, discretion, and mutual prosperity. For detailed guidance on your specific case, connect with the Grand Council Directorate inside the member portal.';
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#0f121a] shadow-2xl overflow-hidden my-8 flex flex-col h-[580px]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-amber-500/20 bg-gradient-to-r from-[#141724] via-[#1a1e2e] to-[#141724] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-lg font-bold text-amber-200">
                {t.aiTitle}
              </h3>
              <p className="text-[10px] text-amber-500/80 font-mono tracking-wider">
                {t.aiSubtitle}
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

        {/* Message Stream */}
        <div className="flex-1 p-5 overflow-y-auto space-y-3.5">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed whitespace-pre-line ${
                  m.sender === 'user'
                    ? 'bg-amber-400 text-stone-950 font-medium'
                    : 'bg-[#161a28] border border-amber-500/20 text-stone-200'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-stone-800 border border-stone-700 flex items-center justify-center text-stone-300 shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2 text-stone-500 text-xs italic pl-10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>{t.analyzingArchives}</span>
            </div>
          )}
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-4 py-2 border-t border-amber-500/15 bg-[#121520] overflow-x-auto scrollbar-none flex gap-1.5">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-lg border border-amber-500/20 bg-[#161a28] hover:bg-[#1e2336] text-[11px] text-amber-300/90 whitespace-nowrap transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="p-3 border-t border-amber-500/20 bg-[#121520] flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.aiAsk}
            className="flex-1 px-3.5 py-2.5 rounded-xl border border-amber-500/25 bg-[#171a26] text-stone-100 text-xs placeholder:text-stone-600 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t.aiAskBtn}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

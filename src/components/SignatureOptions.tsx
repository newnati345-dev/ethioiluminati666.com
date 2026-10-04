import React, { useRef, useState, useEffect } from 'react';
import { Language, Member } from '../types';
import { translations } from '../data/translations';
import { CheckCircle2, RotateCcw, ShieldCheck, PenTool } from 'lucide-react';

interface SignatureOptionsProps {
  currentLang: Language;
  member: Member | null;
  onUpdateMember: (updated: Member) => void;
  onNavigate: (view: string) => void;
  onOpenLogin: () => void;
}

export const SignatureOptions: React.FC<SignatureOptionsProps> = ({
  currentLang,
  member,
  onUpdateMember,
  onNavigate,
  onOpenLogin
}) => {
  const t = translations[currentLang];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [oathChecked, setOathChecked] = useState(false);
  const [affirmed, setAffirmed] = useState(false);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setSelectedPreset(null);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
    setHasDrawn(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setSelectedPreset(null);
  };

  const presetSignatures = [
    {
      id: 1,
      label: currentLang === 'am' ? 'ንጉሣዊ ፊርማ' : 'Imperial Script',
      font: 'font-serif italic text-2xl',
      text: member?.fullName || (currentLang === 'am' ? 'ሉዓላዊ አባል' : 'Sovereign Initiate')
    },
    {
      id: 2,
      label: currentLang === 'am' ? 'የጥበብ ካሊግራፊ' : 'Grand Calligraphy',
      font: 'font-serif font-bold italic text-xl tracking-widest',
      text: (member?.fullName ? member.fullName.split(' ').map(n => n[0] + '.').join(' ') : 'E.I.A.') + ' Sovereign'
    },
    {
      id: 3,
      label: currentLang === 'am' ? 'የአቢሲኒያ ማኅተም' : 'Abyssinian Crest Style',
      font: 'font-mono text-lg uppercase tracking-widest font-bold',
      text: 'SEALED // ' + (member?.permanentCode || 'EIA-COMMISSION')
    }
  ];

  const handleSelectPreset = (id: number) => {
    clearCanvas();
    setSelectedPreset(id);
  };

  const handleConfirmSignature = () => {
    if (!member) {
      onOpenLogin();
      return;
    }
    if (!oathChecked) return;
    if (!hasDrawn && selectedPreset === null) return;

    let dataUrl = '';
    if (canvasRef.current && hasDrawn) {
      dataUrl = canvasRef.current.toDataURL();
    }

    const newStages = Math.max(member.stagesCompleted, 3);
    const updatedMember: Member = {
      ...member,
      stagesCompleted: newStages,
      signature: {
        type: hasDrawn ? 'drawn' : 'preset',
        dataUrl,
        dateSigned: new Date().toLocaleDateString('en-US')
      }
    };
    onUpdateMember(updatedMember);
    setAffirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#08090c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 mb-1">
            <PenTool className="w-6 h-6" />
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold tracking-wider text-amber-200">
            {t.signatureOptions}
          </h1>
          <p className="text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
            {t.signatureSubtitle}
          </p>
        </div>

        {affirmed ? (
          /* Success Stamped State */
          <div className="p-8 sm:p-12 rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#0f1420] via-[#0d1018] to-[#0f1420] text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/15 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-3xl font-bold text-amber-200">
                {t.covenantSealedTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md mx-auto leading-relaxed">
                {t.covenantSealedDesc}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-amber-500/20 bg-[#121622] max-w-sm mx-auto text-xs font-mono text-stone-300">
              {t.permanentCode}: <span className="text-amber-400 font-bold">{member?.permanentCode}</span>
            </div>
            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('portal')}
                className="px-6 py-2.5 rounded-xl font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors text-xs cursor-pointer shadow-lg"
              >
                {t.returnPortal}
              </button>
              <button
                onClick={() => onNavigate('vault')}
                className="px-6 py-2.5 rounded-xl font-medium text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-colors text-xs cursor-pointer"
              >
                {t.vaultTitle}
              </button>
            </div>
          </div>
        ) : (
          /* Signature Selection & Drawing Pad */
          <div className="p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-[#0f121b] shadow-2xl space-y-6">
            
            {/* Preset Signature Options */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                {t.optionA}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {presetSignatures.map(p => (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPreset(p.id)}
                    className={`p-4 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedPreset === p.id
                        ? 'border-amber-400 bg-amber-500/15 shadow-md ring-1 ring-amber-400'
                        : 'border-amber-500/20 bg-[#141724] hover:bg-[#1a1f30]'
                    }`}
                  >
                    <span className="text-[10px] text-stone-500 uppercase block mb-1 font-mono">
                      {p.label}
                    </span>
                    <div className={`${p.font} text-amber-200 py-1`}>
                      {p.text}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Manual Drawing Pad Canvas */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  {t.optionB}
                </label>
                {(hasDrawn || selectedPreset !== null) && (
                  <button
                    onClick={clearCanvas}
                    className="text-xs text-stone-400 hover:text-rose-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t.clearCanvas}</span>
                  </button>
                )}
              </div>
              <div className="relative rounded-xl border border-amber-500/30 bg-[#141826] overflow-hidden">
                <canvas
                  ref={canvasRef}
                  width={680}
                  height={180}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-44 cursor-crosshair touch-none"
                />
                {!hasDrawn && selectedPreset === null && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-stone-600 text-xs italic text-center px-4">
                    {t.signGuide}
                  </div>
                )}
              </div>
            </div>

            {/* Sacred Oath Checkbox */}
            <div className="p-4 rounded-xl border border-amber-500/20 bg-[#141824] flex items-start gap-3">
              <input
                type="checkbox"
                id="oath"
                checked={oathChecked}
                onChange={(e) => setOathChecked(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-amber-500/40 text-amber-500 focus:ring-amber-400 bg-[#0f121a] cursor-pointer"
              />
              <label htmlFor="oath" className="text-xs text-stone-300 leading-relaxed cursor-pointer select-none">
                {t.solemnOath}
              </label>
            </div>

            {/* Affirmation Button */}
            <button
              onClick={handleConfirmSignature}
              disabled={!oathChecked || (!hasDrawn && selectedPreset === null)}
              className="w-full py-3.5 px-4 rounded-xl font-semibold text-stone-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-lg hover:shadow-amber-500/25 disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-stone-950" />
              <span>{t.affirmBtn}</span>
            </button>

            {!member && (
              <p className="text-xs text-center text-amber-400/80">
                {currentLang === 'am' ? 'ማሳሰቢያ፡ ይህንን ቃል ኪዳን ለማስቀመጥ መጀመሪያ በቋሚ ኮድ መግባት አለብዎት።' : 'Note: You must be registered or logged in with a permanent code to save this covenant.'}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

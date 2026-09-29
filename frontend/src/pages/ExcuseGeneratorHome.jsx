import React, { useState } from 'react';
import CertifiedPlausibleBadge from '../components/CertifiedPlausibleBadge';
import { SITUATIONS, TONES, RECIPIENTS, BELIEVABILITY_LABELS, GENERATED_EXCUSES } from '../data/excuses';

export default function ExcuseGeneratorHome({ onNavigateToChaos }) {
  const [situation, setSituation] = useState("I'm late");
  const [believability, setBelievability] = useState(2);
  const [tone, setTone] = useState("casual");
  const [recipient, setRecipient] = useState("Boss");
  const [generatedExcuse, setGeneratedExcuse] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    setIsGenerating(true);

    setTimeout(() => {
      const list = GENERATED_EXCUSES[situation] || GENERATED_EXCUSES["I'm late"];
      const randomExcuse = list[Math.floor(Math.random() * list.length)];
      
      setGeneratedExcuse({
        text: randomExcuse,
        situation,
        tone: TONES.find(t => t.id === tone)?.label || "🙂 Casual",
        believability: BELIEVABILITY_LABELS[believability - 1],
        recipient,
        ref: `#EX-${Math.floor(1000 + Math.random() * 9000)}`
      });
      setIsGenerating(false);

      // Scroll smoothly to the result card if on mobile
      setTimeout(() => {
        const el = document.getElementById('generated-result-card');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }, 400);
  };

  const handleCopy = () => {
    if (!generatedExcuse) return;
    navigator.clipboard.writeText(generatedExcuse.text);
    setCopied(true);
    if ('vibrate' in navigator) {
      navigator.vibrate([30, 50, 30]);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="pt-24 pb-36 max-w-[800px] mx-auto px-container-padding relative z-10">
      {/* Decorative background vectors */}
      <div className="absolute top-20 right-4 md:right-[-40px] text-primary/20 -rotate-12 pointer-events-none select-none">
        <svg fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="60">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-4 md:left-[-60px] text-secondary/30 rotate-12 pointer-events-none select-none">
        <svg fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="80">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-12 relative">
        <h1 className="font-display-mobile md:font-display-lg text-primary mb-4 leading-tight relative inline-block">
          Need an excuse? <br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-secondary-container -rotate-2 rounded-lg -z-10 transform scale-105"></span>
            <span className="relative z-10 px-2 text-on-secondary-container">We got you.</span>
          </span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mb-6">
          Generate an excuse so believable that even you might start believing it.
        </p>
        <button 
          onClick={handleGenerate}
          className="bg-primary-container text-on-primary-container border-2 border-primary font-sticker-label text-sticker-label px-8 py-4 rounded-xl shadow-[6px_6px_0px_0px_#93452b] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#93452b] active:scale-95 transition-all wiggle"
        >
          ✨ Generate Excuse
        </button>
      </section>

      {/* Main Generator Form Card */}
      <section className="relative mb-12">
        {/* Animated Badge Overlay */}
        <div className="absolute -top-10 -right-4 md:-right-8 w-28 h-28 md:w-32 md:h-32 z-20 pointer-events-none rotate-12">
          <CertifiedPlausibleBadge size={120} />
        </div>

        <div className="bg-surface border-2 border-outline shadow-[8px_8px_0px_0px_#88726c] rounded-[2rem] p-6 md:p-10 rotate-0.5 relative z-10">
          {/* Tape Accent */}
          <div 
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-surface-variant/70 backdrop-blur-sm -rotate-2 z-20 tape"
          />

          <h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b-2 border-outline-variant pb-4 inline-block -rotate-1">
            What happened?
          </h2>

          {/* 1. Situation Pill Selection */}
          <div className="mb-8">
            <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm">
              The Situation
            </label>
            <div className="flex flex-wrap gap-2.5">
              {SITUATIONS.map((sit, idx) => {
                const isSelected = situation === sit;
                const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-0.5", "-rotate-1.5"];
                const rot = rotations[idx % rotations.length];

                return (
                  <button
                    key={sit}
                    type="button"
                    onClick={() => setSituation(sit)}
                    className={`rounded-full px-4 py-2 font-sticker-label text-sticker-label border-2 transition-all active:scale-95 ${rot} ${
                      isSelected
                        ? 'bg-secondary-container text-on-secondary-container border-outline shadow-[3px_3px_0px_0px_#88726c] font-bold scale-105'
                        : 'bg-surface text-on-surface border-outline/70 shadow-[2px_2px_0px_0px_#88726c] hover:bg-surface-variant'
                    }`}
                  >
                    {sit}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Believability Range Slider */}
          <div className="mb-8 p-5 bg-surface-container rounded-xl border-2 border-outline-variant border-dashed">
            <label className="font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm flex justify-between items-center">
              <span>Believability</span>
              <span className="text-primary font-bold bg-[#fff8ef] px-3 py-1 rounded-full border border-primary/40 text-xs">
                {BELIEVABILITY_LABELS[believability - 1]}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={believability}
              onChange={(e) => setBelievability(parseInt(e.target.value))}
              className="w-full mb-3"
            />
            <div className="grid grid-cols-4 font-body-sm text-xs md:text-sm text-on-surface-variant px-1 mt-1 text-center">
              <span className={believability === 1 ? "font-bold text-on-surface" : ""}>🤏 Innocent</span>
              <span className={believability === 2 ? "font-bold text-on-surface" : ""}>Suspicious</span>
              <span className={believability === 3 ? "font-bold text-on-surface" : ""}>Specific</span>
              <span className={believability === 4 ? "font-bold text-error" : ""}>Unhinged 🤯</span>
            </div>
          </div>

          {/* 3. Tone Selection */}
          <div className="mb-8">
            <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm">
              The Tone
            </label>
            <div className="flex flex-wrap gap-2.5">
              {TONES.map((t) => {
                const isSelected = tone === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={`rounded-lg px-3.5 py-1.5 font-sticker-label text-sticker-label border-2 transition-all active:scale-95 ${t.rotate} ${
                      isSelected
                        ? 'border-primary shadow-[3px_3px_0px_0px_#93452b] scale-105 ' + t.color
                        : 'bg-surface text-on-surface border-outline/70 shadow-[2px_2px_0px_0px_#88726c] hover:bg-surface-variant'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Recipient Selector */}
          <div className="mb-10">
            <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm">
              Who are you telling?
            </label>
            <div className="relative">
              <select
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full appearance-none bg-surface border-2 border-outline text-on-surface font-body-lg py-3.5 pl-4 pr-10 rounded-xl shadow-[4px_4px_0px_0px_#88726c] focus:outline-none focus:border-primary focus:ring-0 rotate-0.5 cursor-pointer"
              >
                {RECIPIENTS.map((rec) => (
                  <option key={rec} value={rec}>
                    {rec}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>

          {/* Submit Action Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-primary text-on-primary border-2 border-on-background font-headline-md text-headline-md py-4 rounded-xl shadow-[6px_6px_0px_0px_#1e1b13] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1e1b13] active:scale-95 transition-all -rotate-0.5 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isGenerating ? "Crafting Plausible Tale..." : "Generate My Excuse"}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* Generated Result Card (Appears after generation) */}
      {generatedExcuse && (
        <section id="generated-result-card" className="relative mt-8 animate-fadeIn">
          <div className="bg-paper rounded-xl p-6 md:p-8 border-2 border-primary sticker-shadow relative max-w-lg mx-auto transform -rotate-1 border-dashed shadow-[8px_8px_0px_0px_rgba(147,69,43,0.3)]">
            <div className="text-center border-b-2 border-outline-variant pb-3 mb-5">
              <span className="bg-secondary-container text-on-secondary-container font-sticker-label text-xs uppercase px-3 py-1 rounded-full border border-secondary shadow-[2px_2px_0px_0px_rgba(111,93,14,1)] inline-block mb-2">
                Custom Tailored
              </span>
              <h3 className="font-headline-md text-headline-md text-primary uppercase tracking-widest">
                Official Excuse™
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs mt-1">
                Ref: {generatedExcuse.ref} • Target: {generatedExcuse.recipient} • Tone: {generatedExcuse.tone}
              </p>
            </div>

            <div className="min-h-[100px] flex items-center justify-center bg-surface-container-low rounded-lg p-5 border border-outline-variant mb-6 shadow-inner">
              <p className="font-body-lg text-body-lg text-on-background text-center italic leading-relaxed">
                "{generatedExcuse.text}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 bg-primary-container text-on-primary-container font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-on-background sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copied to Clipboard!' : 'Copy Excuse'}
              </button>
              <button
                onClick={handleGenerate}
                className="bg-surface text-on-surface font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-outline sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">refresh</span>
                Reroll
              </button>
              <button
                onClick={onNavigateToChaos}
                className="bg-error-container text-on-error-container font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-on-error-container sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">local_fire_department</span>
                Escalate
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

import React, { useState } from 'react';
import CertifiedPlausibleBadge from '../components/CertifiedPlausibleBadge';
import { CHAOS_EXCUSES } from '../data/excuses';

export default function ChaosMode() {
  const [cookedPercentage, setCookedPercentage] = useState(87);
  const [currentExcuseIndex, setCurrentExcuseIndex] = useState(0);
  const [isWorse, setIsWorse] = useState(false);
  const [copied, setCopied] = useState(false);
  const [believability, setBelievability] = useState(78);
  const [drama, setDrama] = useState(64);
  const [chaos, setChaos] = useState(31);

  const excuses = [
    ...CHAOS_EXCUSES,
    "My neighbor's emotional support parrot flew onto my balcony and started confessing crimes in French.",
    "A runaway lawnmower breached my driveway and severed the fiber optic cables of my entire personality.",
    "I took a sip of water, choked on air, and experienced a 30-minute spiritual crisis on the carpet."
  ];

  const currentExcuse = excuses[currentExcuseIndex % excuses.length];

  const handlePanicClick = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([40, 30, 80]);
    }
    const nextIndex = (currentExcuseIndex + 1) % excuses.length;
    setCurrentExcuseIndex(nextIndex);
    
    // Vary the meters slightly for dynamic realism
    setBelievability(Math.floor(65 + Math.random() * 25));
    setDrama(Math.floor(60 + Math.random() * 35));
    setChaos(Math.floor(30 + Math.random() * 50));
  };

  const handleMakeItWorse = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 150]);
    }
    setIsWorse(true);
    setCookedPercentage(99);
    setDrama(98);
    setChaos(99);
    setBelievability(14);
    setCurrentExcuseIndex((prev) => (prev + 2) % excuses.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExcuse);
    setCopied(true);
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="w-full max-w-[800px] mx-auto pt-24 pb-36 px-container-padding relative z-10 flex flex-col gap-6">
      {/* Header Section */}
      <section className="flex flex-col items-center justify-center my-4 relative">
        <div className="absolute -top-6 -right-2 md:-right-4 rotate-12 z-20">
          <span className="bg-terracotta text-white font-sticker-label text-sticker-label px-4 py-1.5 rounded-full border-2 border-on-background sticker-shadow transform wiggle-effect inline-block uppercase text-sm tracking-wider">
            CHAOS MODE
          </span>
        </div>

        {/* Gauge Card */}
        <div className="w-full bg-surface-container-lowest rounded-xl p-6 border-2 border-primary sticker-shadow relative overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-20 z-0 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4 text-center">
              How cooked are you?
            </h2>

            {/* Progress Bar / Gauge */}
            <div className="w-full h-8 bg-surface-variant rounded-full border-2 border-outline overflow-hidden mb-2 relative">
              <div 
                className={`h-full flex items-center justify-end pr-3 text-white font-bold text-sm transition-all duration-700 ${
                  cookedPercentage > 90 ? 'bg-error animate-pulse' : 'bg-[#ba1a1a]'
                }`}
                style={{ width: `${cookedPercentage}%` }}
              >
                {cookedPercentage}%
              </div>
            </div>
            <p className="font-sticker-label text-sticker-label text-on-surface-variant text-center mt-2 uppercase tracking-widest text-xs md:text-sm">
              {cookedPercentage >= 95 ? "🔥 Beyond Hope: Total Collapse" : "Dangerously Close to Consequence"}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bento Box */}
      <section className="grid grid-cols-2 gap-4">
        {/* Stat 1: Situation */}
        <div className="bg-[#fbe187] rounded-lg p-4 border-2 border-on-background sticker-shadow rotate-1 sticker-hover transition-transform flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 text-on-secondary-fixed">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              local_fire_department
            </span>
            <span className="font-sticker-label text-sticker-label text-xs md:text-sm uppercase">
              Situation
            </span>
          </div>
          <p className="font-headline-md text-headline-md text-on-background">
            {isWorse ? "Unrecoverable" : "Catastrophic"}
          </p>
        </div>

        {/* Stat 2: Brain Activity */}
        <div className="bg-dusty-pink rounded-lg p-4 border-2 border-on-background sticker-shadow -rotate-2 sticker-hover transition-transform flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 text-on-background">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              psychology
            </span>
            <span className="font-sticker-label text-sticker-label text-xs md:text-sm uppercase">
              Brain Activity
            </span>
          </div>
          <p className="font-headline-md text-headline-md text-on-background">
            {isWorse ? "Non-Existent" : "Questionable"}
          </p>
        </div>

        {/* Stat 3: Time Left */}
        <div className="bg-tertiary-fixed rounded-lg p-4 border-2 border-on-background sticker-shadow rotate-2 sticker-hover transition-transform flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2 text-on-tertiary-fixed">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              timer
            </span>
            <span className="font-sticker-label text-sticker-label text-xs md:text-sm uppercase">
              Time Left
            </span>
          </div>
          <p className="font-body-lg text-body-lg font-bold text-on-background leading-tight">
            {isWorse ? "Negative 4 hours" : "Absolutely not enough"}
          </p>
        </div>

        {/* Stat 4: Recovery */}
        <div className="bg-error-container rounded-lg p-4 border-2 border-on-error-container sticker-shadow -rotate-1 sticker-hover transition-transform flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[80px]">skull</span>
          </div>
          <div className="flex items-center gap-2 mb-2 text-on-error-container relative z-10">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              skull
            </span>
            <span className="font-sticker-label text-sticker-label text-xs md:text-sm uppercase">
              Recovery
            </span>
          </div>
          <p className="font-display-mobile text-display-mobile text-on-error-container relative z-10">
            {isWorse ? "1%" : "12%"}
          </p>
        </div>
      </section>

      {/* Main Action CTA: Panic Button */}
      <section className="flex justify-center my-4 z-20">
        <button 
          onClick={handlePanicClick}
          className="pulse-chaos bg-terracotta text-white font-headline-md text-headline-md px-8 py-5 rounded-xl border-4 border-on-background sticker-shadow-lg active:scale-90 active:shadow-[2px_2px_0px_0px_rgba(147,69,43,1)] transition-all flex flex-col items-center gap-1 w-full max-w-sm cursor-pointer"
        >
          <span className="uppercase tracking-widest text-xs font-sticker-label text-[#ffdbd0]">
            Emergency Release
          </span>
          <span className="flex items-center gap-2 text-xl md:text-2xl font-bold">
            Give me an excuse
            <span className="material-symbols-outlined text-[28px]">bolt</span>
          </span>
        </button>
      </section>

      {/* Receipt Card (Result) */}
      <section className="relative mt-2 mb-8">
        {/* Animated Sticker Overlay */}
        <div className="absolute -top-10 -right-6 md:-right-8 w-28 h-28 md:w-32 md:h-32 z-30 pointer-events-none rotate-12">
          <CertifiedPlausibleBadge size={120} title={isWorse ? "Barely Legal" : "Certified Plausible"} />
        </div>

        {/* Receipt Container */}
        <div className="bg-paper rounded-xl p-6 md:p-8 border-2 border-primary sticker-shadow relative max-w-md mx-auto transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(147,69,43,0.3)] border-dashed">
          {/* Receipt Header */}
          <div className="text-center border-b-2 border-outline-variant pb-4 mb-6">
            <h3 className="font-headline-md text-headline-md text-primary tracking-widest uppercase">
              Official Excuse™
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">
              Ref: #CH405-99{currentExcuseIndex} • Incident Severity: {isWorse ? "Level 5 Unhinged" : "Level 3 Emergency"}
            </p>
          </div>

          {/* Excuse Content with Typewriter Feel */}
          <div className="min-h-[110px] flex items-center justify-center bg-surface-container-low rounded-lg p-5 border border-outline-variant mb-6 shadow-inner">
            <p className="font-body-lg text-body-lg text-on-background text-center italic typewriter leading-relaxed">
              "{currentExcuse}"
            </p>
          </div>

          {/* Metadata Bars */}
          <div className="space-y-3 mb-8">
            <div>
              <div className="flex justify-between font-body-sm text-body-sm mb-1">
                <span className="text-on-surface-variant">Believability</span>
                <span className="font-bold text-tertiary">{believability}%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-variant rounded-full overflow-hidden border border-outline/30">
                <div 
                  className="h-full bg-tertiary transition-all duration-500" 
                  style={{ width: `${believability}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-body-sm text-body-sm mb-1">
                <span className="text-on-surface-variant">Drama</span>
                <span className="font-bold text-primary">{drama}%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-variant rounded-full overflow-hidden border border-outline/30">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${drama}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-body-sm text-body-sm mb-1">
                <span className="text-on-surface-variant">Chaos</span>
                <span className="font-bold text-error">{chaos}%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-variant rounded-full overflow-hidden border border-outline/30">
                <div 
                  className="h-full bg-error transition-all duration-500" 
                  style={{ width: `${chaos}%` }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button 
              onClick={handleCopy}
              className="bg-primary-container text-on-primary-container font-sticker-label text-sticker-label px-4 py-3.5 rounded-lg border-2 border-on-background sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'Copied to Clipboard!' : 'Copy Excuse'}
            </button>

            <div className="flex gap-3">
              <button 
                onClick={handlePanicClick}
                className="flex-1 bg-surface text-on-surface font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-outline sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-lg">refresh</span>
                Another
              </button>
              <button 
                onClick={handleMakeItWorse}
                className="flex-1 bg-error-container text-on-error-container font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-on-error-container sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-lg">warning</span>
                Make It Worse
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Background Glows */}
      <div className="fixed top-1/4 left-4 w-16 h-16 bg-secondary rounded-full opacity-20 blur-xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-4 w-24 h-24 bg-terracotta rounded-full opacity-20 blur-xl pointer-events-none z-0" />
    </main>
  );
}

import React, { useState } from 'react';

/**
 * Chaos Mode: How Cooked Are You?
 * Converted directly from stitch_excuse_generator_web_app/chaos_mode_how_cooked/code.html
 */
export default function ChaosModeView() {
  const [copied, setCopied] = useState(false);
  const [excuse, setExcuse] = useState("I’m so sorry I’m late. I accidentally got on the wrong metro...");

  const excuses = [
    "I’m so sorry I’m late. I accidentally got on the wrong metro...",
    "My roomba escaped out the front door and led the neighborhood on a 45-minute low-speed pursuit.",
    "A rogue flock of geese blockaded the rotary and made aggressive eye contact.",
    "My cat fell asleep on my car keys and moving her would constitute a violation of feline domestic law."
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(excuse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAnother = () => {
    const next = excuses[(excuses.indexOf(excuse) + 1) % excuses.length];
    setExcuse(next);
  };

  return (
    <div className="bg-surface-dim font-body-lg text-on-surface antialiased overflow-x-hidden min-h-screen pb-24 relative">
      {/* Top App Bar Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 border-b-2 border-outline-variant dark:border-outline shadow-[4px_4px_0px_0px_rgba(147,69,43,1)]">
        <div className="flex justify-between items-center px-container-padding h-16 w-full max-w-[800px] mx-auto">
          <button aria-label="Menu" className="text-primary dark:text-primary-fixed-dim hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] transition-all active:scale-95 duration-100 p-2 rounded-lg">
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          <h1 className="font-display-mobile text-display-mobile text-primary dark:text-primary-fixed-dim -rotate-2">
            Excuse Generator
          </h1>
          <button aria-label="User Profile" className="hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] transition-all active:scale-95 duration-100 rounded-full border-2 border-primary">
            <div className="w-10 h-10 bg-secondary-container rounded-full flex items-center justify-center font-bold text-on-secondary-container">
              UP
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-[800px] mx-auto pt-24 px-container-padding relative z-10 flex flex-col gap-6">
        {/* Header Section */}
        <section className="flex flex-col items-center justify-center my-4 relative">
          <div className="absolute -top-6 -right-4 rotate-12 z-20">
            <span className="bg-terracotta text-white font-sticker-label text-sticker-label px-3 py-1 rounded-full border-2 border-on-background sticker-shadow transform wiggle-effect inline-block">
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
                <div className="h-full bg-error flex items-center justify-end pr-2 text-white font-bold text-sm transition-all duration-1000" style={{ width: '87%' }}>
                  87%
                </div>
              </div>
              <p className="font-sticker-label text-sticker-label text-on-surface-variant text-center mt-2 uppercase tracking-widest">
                Dangerously Close to Consequence
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bento Box */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-[#fbe187] rounded-lg p-4 border-2 border-on-background sticker-shadow rotate-1 sticker-hover transition-transform flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-on-secondary-fixed">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
              <span className="font-sticker-label text-sticker-label uppercase">Situation</span>
            </div>
            <p className="font-headline-md text-headline-md text-on-background">Catastrophic</p>
          </div>

          <div className="bg-dusty-pink rounded-lg p-4 border-2 border-on-background sticker-shadow -rotate-2 sticker-hover transition-transform flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-on-background">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                psychology
              </span>
              <span className="font-sticker-label text-sticker-label uppercase">Brain Activity</span>
            </div>
            <p className="font-headline-md text-headline-md text-on-background">Questionable</p>
          </div>

          <div className="bg-tertiary-fixed rounded-lg p-4 border-2 border-on-background sticker-shadow rotate-2 sticker-hover transition-transform flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-on-tertiary-fixed">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                timer
              </span>
              <span className="font-sticker-label text-sticker-label uppercase">Time Left</span>
            </div>
            <p className="font-body-lg text-body-lg font-bold text-on-background leading-tight">
              Absolutely not enough
            </p>
          </div>

          <div className="bg-error-container rounded-lg p-4 border-2 border-on-error-container sticker-shadow -rotate-1 sticker-hover transition-transform flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-20">
              <span className="material-symbols-outlined text-[80px]">skull</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-on-error-container relative z-10">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                skull
              </span>
              <span className="font-sticker-label text-sticker-label uppercase">Recovery</span>
            </div>
            <p className="font-display-mobile text-display-mobile text-on-error-container relative z-10">12%</p>
          </div>
        </section>

        {/* Main Action CTA */}
        <section className="flex justify-center my-6 z-20">
          <button 
            onClick={handleAnother}
            className="pulse-chaos bg-terracotta text-white font-headline-md text-headline-md px-8 py-6 rounded-xl border-4 border-on-background sticker-shadow-lg active:scale-90 active:shadow-[2px_2px_0px_0px_rgba(147,69,43,1)] transition-all flex flex-col items-center gap-2 w-full max-w-sm"
          >
            <span className="uppercase tracking-widest text-sm font-sticker-label">Panic Button</span>
            <span className="flex items-center gap-3">
              Give me an excuse
              <span className="material-symbols-outlined text-[32px]">bolt</span>
            </span>
          </button>
        </section>

        {/* Receipt Card (Result) */}
        <section className="relative mt-4 mb-8">
          <div className="bg-paper rounded-xl p-8 border-2 border-primary sticker-shadow relative max-w-md mx-auto transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(147,69,43,0.3)] border-dashed">
            <div className="text-center border-b-2 border-outline-variant pb-4 mb-6">
              <h3 className="font-headline-md text-headline-md text-primary tracking-widest uppercase">
                Official Excuse™
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ref: #CH405-992</p>
            </div>

            <div className="min-h-[120px] flex items-center justify-center bg-surface-container-low rounded-lg p-4 border border-outline-variant mb-6">
              <p className="font-body-lg text-body-lg text-on-background text-center italic typewriter">
                "{excuse}"
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div>
                <div className="flex justify-between font-body-sm text-body-sm mb-1">
                  <span className="text-on-surface-variant">Believability</span>
                  <span className="font-bold text-tertiary">78%</span>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary" style={{ width: '78%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-body-sm text-body-sm mb-1">
                  <span className="text-on-surface-variant">Drama</span>
                  <span className="font-bold text-primary">64%</span>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '64%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-body-sm text-body-sm mb-1">
                  <span className="text-on-surface-variant">Chaos</span>
                  <span className="font-bold text-error">31%</span>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-error" style={{ width: '31%' }} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleCopy}
                className="bg-primary-container text-on-primary-container font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-on-background sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copied!' : 'Copy Excuse'}
              </button>
              <div className="flex gap-3">
                <button 
                  onClick={handleAnother}
                  className="flex-1 bg-surface text-on-surface font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-outline sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">refresh</span>
                  Another
                </button>
                <button 
                  onClick={handleAnother}
                  className="flex-1 bg-error-container text-on-error-container font-sticker-label text-sticker-label px-4 py-3 rounded-lg border-2 border-on-error-container sticker-shadow sticker-hover sticker-active flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">warning</span>
                  Make It Worse
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 w-full rounded-t-lg z-50 bg-surface dark:bg-surface-dim border-t-2 border-outline-variant shadow-[0px_-4px_0px_0px_rgba(147,69,43,0.1)] md:hidden">
        <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 max-w-[800px] mx-auto">
          <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1 active:scale-90 duration-75">
            <span className="material-symbols-outlined mb-1">auto_fix_high</span>
            <span className="font-sticker-label text-sticker-label text-[12px]">Generate</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1 active:scale-90 duration-75">
            <span className="material-symbols-outlined mb-1">folder_open</span>
            <span className="font-sticker-label text-sticker-label text-[12px]">Archive</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1 active:scale-90 duration-75">
            <span className="material-symbols-outlined mb-1">workspace_premium</span>
            <span className="font-sticker-label text-sticker-label text-[12px]">Hall of Fame</span>
          </button>
          <button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl p-2 rotate-1 scale-105 shadow-[2px_2px_0px_0px_rgba(111,93,14,1)] active:scale-90 duration-75">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="font-sticker-label text-sticker-label text-[12px]">Chaos</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

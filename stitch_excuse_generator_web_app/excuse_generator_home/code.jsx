import React, { useState } from 'react';

/**
 * Excuse Generator Home View
 * Converted directly from stitch_excuse_generator_web_app/excuse_generator_home/code.html
 */
export default function ExcuseGeneratorHomeView() {
  const [situation, setSituation] = useState("I'm late");
  const [believability, setBelievability] = useState(2);
  const [tone, setTone] = useState("😭 Desperate");
  const [recipient, setRecipient] = useState("Boss");

  const situations = [
    { label: "I'm late", rot: "rotate-1", selected: situation === "I'm late" },
    { label: "Can't make it", rot: "-rotate-1", selected: situation === "Can't make it" },
    { label: "Missed a deadline", rot: "rotate-2", selected: situation === "Missed a deadline" },
    { label: "Didn't reply", rot: "-rotate-2", selected: situation === "Didn't reply" },
    { label: "Forgot something", rot: "rotate-1", selected: situation === "Forgot something" },
    { label: "Need to leave early", rot: "", selected: situation === "Need to leave early" },
  ];

  const tones = [
    { label: "😇 Innocent", rot: "-rotate-1", selected: tone === "😇 Innocent" },
    { label: "🙂 Casual", rot: "rotate-1", selected: tone === "🙂 Casual" },
    { label: "😭 Desperate", rot: "rotate-2", selected: tone === "😭 Desperate", activeBg: "bg-tertiary-container text-on-tertiary-container" },
    { label: "🧠 Overly Detailed", rot: "-rotate-2", selected: tone === "🧠 Overly Detailed" },
    { label: "🤡 Unhinged", rot: "rotate-1", selected: tone === "🤡 Unhinged", activeBg: "bg-error-container text-on-error-container border-error" },
  ];

  const believabilityLabels = ["🤏 Innocent", "Suspicious", "Extremely Specific", "Absolutely Unhinged 🤯"];

  const triggerVibrate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container relative">
      {/* Top App Bar Header */}
      <header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 text-primary dark:text-primary-fixed-dim font-headline-md text-headline-md fixed top-0 w-full z-50 border-b-2 border-outline-variant dark:border-outline shadow-[4px_4px_0px_0px_rgba(147,69,43,1)]">
        <div className="flex justify-between items-center px-container-padding h-16 w-full max-w-[800px] mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] transition-all cursor-pointer">
              menu
            </span>
            <span className="font-display-mobile text-display-mobile text-primary dark:text-primary-fixed-dim -rotate-2 select-none">
              Excuse Generator
            </span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a className="text-primary font-bold font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#generate">
              Generate
            </a>
            <a className="text-on-surface-variant font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#archive">
              Archive
            </a>
            <a className="text-on-surface-variant font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#hall-of-fame">
              Hall of Fame
            </a>
            <a className="text-on-surface-variant font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#chaos">
              Chaos
            </a>
          </nav>
          <div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-outline flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(136,114,108,1)] overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ7cqJKeMLNo7sCOQL5Z3cjfbpX7heyQLeJ7HbM_lOV8o6e99f1f1u7-XsCNWbFOw0dHQFjucp9Zl3EB8g6TOGnnKWtkBgwvEp2WJcOu9Yyrf8aDZIP71JDC6EnqWihsIX3sx2agGs6NcefWmVulh8eLchE0WRk0xAlh0tvgVVb9zOnJYd7QFeyHsvMuIiZxfuvdzMiSOPrzUZp-ShxpGXUa0mjIbi1mXh7a7AtzgGefc9iXG_ZDMd"
            />
          </div>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="pt-32 pb-40 max-w-[800px] mx-auto px-container-padding relative z-10">
        {/* Floating Decorative Vectors */}
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
        <section className="text-center mb-16 relative">
          <h1 className="font-display-mobile md:font-display-lg text-primary mb-4 leading-tight relative inline-block">
            Need an excuse? <br />
            <span className="relative inline-block mt-2">
              <span className="absolute inset-0 bg-secondary-container -rotate-2 rounded-lg -z-10" />
              <span className="relative z-10 px-2 text-on-secondary-container">We got you.</span>
            </span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mb-8">
            Generate an excuse so believable that even you might start believing it.
          </p>
          <button 
            onClick={triggerVibrate}
            className="bg-primary-container text-on-primary-container border-2 border-primary font-sticker-label text-sticker-label px-8 py-4 rounded-xl shadow-[6px_6px_0px_0px_#93452b] hover:-translate-y-1 hover:translate-x-[-1px] hover:shadow-[8px_8px_0px_0px_#93452b] active:scale-95 transition-all wiggle"
          >
            ✨ Generate Excuse
          </button>
        </section>

        {/* Form Card */}
        <section className="relative">
          <div className="bg-surface border-2 border-outline shadow-[8px_8px_0px_0px_#88726c] rounded-[2rem] p-6 md:p-10 rotate-1 relative z-10">
            {/* Scrapbook Tape Accent */}
            <div 
              className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface-variant/50 backdrop-blur-sm -rotate-2 z-20" 
              style={{ clipPath: 'polygon(0 10%, 100% 0, 95% 100%, 5% 90%)', mixBlendMode: 'multiply' }}
            />

            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 border-b-2 border-outline-variant pb-4 inline-block -rotate-1">
              What happened?
            </h2>

            {/* Situations */}
            <div className="mb-8">
              <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm">
                The Situation
              </label>
              <div className="flex flex-wrap gap-3">
                {situations.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => { triggerVibrate(); setSituation(item.label); }}
                    className={`rounded-full px-4 py-2 font-sticker-label text-sticker-label border-2 border-outline transition-transform shadow-[2px_2px_0px_0px_#88726c] active:scale-95 ${item.rot} ${
                      item.selected
                        ? 'bg-secondary-container text-on-secondary-container font-bold hover:-translate-y-0.5'
                        : 'bg-surface text-on-surface hover:bg-surface-variant'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Believability Slider */}
            <div className="mb-8 p-4 bg-surface-container rounded-xl border-2 border-outline-variant border-dashed">
              <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-4 uppercase tracking-wider text-sm flex justify-between">
                <span>Believability</span>
                <span className="text-primary">{believabilityLabels[believability - 1]}</span>
              </label>
              <input
                className="w-full mb-2"
                max="4"
                min="1"
                type="range"
                value={believability}
                onChange={(e) => setBelievability(parseInt(e.target.value))}
              />
              <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant px-1 mt-2">
                <span>🤏 Innocent</span>
                <span className="font-bold text-on-surface">Suspicious</span>
                <span>Extremely Specific</span>
                <span>Absolutely Unhinged 🤯</span>
              </div>
            </div>

            {/* Tone Selector */}
            <div className="mb-8">
              <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm">
                The Tone
              </label>
              <div className="flex flex-wrap gap-3">
                {tones.map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => { triggerVibrate(); setTone(t.label); }}
                    className={`border-2 rounded-lg px-3 py-1 font-sticker-label text-sticker-label shadow-[2px_2px_0px_0px_#88726c] active:scale-95 transition-all ${t.rot} ${
                      t.selected
                        ? (t.activeBg || 'bg-secondary-container text-on-secondary-container border-outline') + ' hover:-translate-y-0.5 font-bold'
                        : 'bg-surface text-on-surface border-outline hover:bg-surface-variant'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient Dropdown */}
            <div className="mb-10">
              <label className="block font-sticker-label text-sticker-label text-on-surface-variant mb-3 uppercase tracking-wider text-sm">
                Who are you telling?
              </label>
              <div className="relative">
                <select
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full appearance-none bg-surface border-2 border-outline text-on-surface font-body-lg py-3 pl-4 pr-10 rounded-xl shadow-[4px_4px_0px_0px_#88726c] focus:outline-none focus:border-primary focus:ring-0 rotate-1 cursor-pointer"
                >
                  <option>Friend</option>
                  <option>Partner</option>
                  <option>Parent</option>
                  <option>Teacher</option>
                  <option>Boss</option>
                  <option>Coworker</option>
                  <option>Stranger</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={triggerVibrate}
              className="w-full bg-primary text-on-primary border-2 border-on-background font-headline-md text-headline-md py-4 rounded-xl shadow-[6px_6px_0px_0px_#1e1b13] hover:-translate-y-1 hover:translate-x-[-1px] hover:shadow-[8px_8px_0px_0px_#1e1b13] active:scale-95 transition-all -rotate-1 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Generate My Excuse
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </button>
          </div>
        </section>
      </main>

      {/* Mobile Navigation Bar */}
      <nav className="md:hidden bg-surface dark:bg-surface-dim font-sticker-label text-sticker-label text-primary dark:text-primary-fixed-dim fixed bottom-0 w-full rounded-t-lg z-50 border-t-2 border-outline-variant shadow-[0px_-4px_0px_0px_rgba(147,69,43,0.1)]">
        <div className="flex justify-around items-center px-4 pb-4 pt-2 max-w-[800px] mx-auto">
          <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl p-2 rotate-1 scale-105 shadow-[2px_2px_0px_0px_rgba(111,93,14,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] transition-all" href="#">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_fix_high
            </span>
            <span className="text-[12px]">Generate</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1" href="#">
            <span className="material-symbols-outlined mb-1">folder_open</span>
            <span className="text-[12px]">Archive</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1" href="#">
            <span className="material-symbols-outlined mb-1">workspace_premium</span>
            <span className="text-[12px]">Hall of Fame</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1" href="#">
            <span className="material-symbols-outlined mb-1">local_fire_department</span>
            <span className="text-[12px]">Chaos</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

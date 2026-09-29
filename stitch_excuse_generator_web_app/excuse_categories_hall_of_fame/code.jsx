import React, { useState } from 'react';

/**
 * Excuse Categories & Hall of Fame View
 * Converted directly from stitch_excuse_generator_web_app/excuse_categories_hall_of_fame/code.html
 */
export default function HallOfFameView() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const hallOfFame = [
    {
      text: '"The pigeon incident"',
      rating: "⭐ 4.9",
      tag: "Chaos",
      badgeClass: "bg-secondary-container text-on-secondary-container border-secondary",
      cardRotate: "rotate-[0.5deg]",
      tapeRotate: "rotate-1"
    },
    {
      text: '"My GPS emotionally betrayed me"',
      rating: "🔥 92%",
      tag: "Chaos",
      badgeClass: "bg-primary-fixed text-on-primary-fixed border-primary",
      cardRotate: "rotate-[-1deg]",
      tapeRotate: "-rotate-6"
    },
    {
      text: '"I accidentally entered a different timeline"',
      rating: "💀 100%",
      tag: "Unhinged",
      badgeClass: "bg-tertiary-container text-on-tertiary-container border-tertiary",
      cardRotate: "rotate-[1.5deg]",
      tapeRotate: "rotate-3"
    }
  ];

  const categories = [
    { label: "Running Late", icon: "timer", bg: "bg-secondary-container", hover: "group-hover:bg-secondary-fixed", rot: "rotate-[-2deg]" },
    { label: "Ghosting", icon: "visibility_off", bg: "bg-primary-fixed", hover: "group-hover:bg-primary-fixed-dim", rot: "rotate-[1deg]" },
    { label: "Work", icon: "work", bg: "bg-tertiary-container", hover: "group-hover:bg-tertiary", rot: "rotate-[-1deg]" },
    { label: "School", icon: "school", bg: "bg-secondary-container", hover: "group-hover:bg-secondary-fixed", rot: "rotate-[2deg]" },
    { label: "Social Plans", icon: "groups", bg: "bg-primary-fixed", hover: "group-hover:bg-primary-fixed-dim", rot: "rotate-[-1.5deg]" },
    { label: "Emergency", icon: "warning", bg: "bg-error-container", hover: "", rot: "rotate-[1.5deg]" }
  ];

  const handleCopy = (idx, text) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="bg-background text-on-background paper-texture min-h-screen relative overflow-x-hidden font-body-lg">
      {/* Top Navigation Desktop */}
      <header className="hidden md:flex justify-between items-center px-container-padding h-16 w-full max-w-[800px] mx-auto bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] fixed top-0 left-0 right-0 z-50 rounded-b-xl border-b-2 border-outline-variant dark:border-outline">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
            menu
          </span>
          <span className="font-display-mobile text-display-mobile text-primary dark:text-primary-fixed-dim -rotate-2">
            Excuse Generator
          </span>
        </div>
        <nav className="flex gap-6">
          <a className="text-on-surface-variant font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#">
            Generate
          </a>
          <a className="text-on-surface-variant font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#">
            Archive
          </a>
          <a className="text-primary font-bold font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all underline decoration-primary decoration-2 underline-offset-4" href="#">
            Hall of Fame
          </a>
          <a className="text-on-surface-variant font-sticker-label text-sticker-label hover:-translate-y-0.5 transition-all" href="#">
            Chaos
          </a>
        </nav>
        <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-outline shadow-[2px_2px_0px_0px_rgba(147,69,43,1)] rotate-3">
          <img
            alt="User Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0TaQsyg0XzpmO5psg6Yxizui90vkR1Azf7JXnRvnAXu5bniRK2skzqQAMjt6fAdqNayN5ThdaO_AtKL1TSn9-Hpni8A5X0Y4_se6k3N5Ct5LtM7JDdE0HXhAQUfm5fzwscwC1jhT5kkewzGikIAFxFwDDVb2_lM7D60HHdmrdf4VyxpUqoVfOgdr5bndfOoLbhMbTe4jKWdj9yRW3zRYyvVcjV-ZlT15Z4ls09q1hvK94Atcapped"
          />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden flex justify-between items-center px-container-padding h-16 w-full fixed top-0 z-50 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] border-b-2 border-outline-variant dark:border-outline">
        <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
          menu
        </span>
        <span className="font-display-mobile text-display-mobile text-primary dark:text-primary-fixed-dim -rotate-2">
          Excuse Generator
        </span>
        <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border-2 border-outline shadow-[2px_2px_0px_0px_rgba(147,69,43,1)] rotate-3">
          <img
            alt="User Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNEZWldYuzCLr-n5MSqyaA0tVNHyptbhCSLVoT7GQZifo2yDambnZGYG1CDwRjXluqx8f0xLCko-Yp3Ms2EYwcrVDtARGVxrUUs1KMLj-UKBoI3DRqItobKhw2lSTMBoC2HWS9k28wBD3TChr15gBRJYk9JD2pxZvDBRPdA1rU101tuau2pIOSibU5dz1Tmn7_DPNfr6JbIA6NR0jPYnQ6Jj25eih58kxMaxzpenQOEfPN-2q5WZk9"
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[800px] mx-auto pt-24 pb-32 px-container-padding relative z-10 flex flex-col gap-12">
        {/* Hall of Fame Section */}
        <section className="flex flex-col gap-stack-gap">
          <div className="flex items-center justify-between mb-4 relative">
            <h2 className="font-headline-md text-headline-md text-primary-fixed-variant rotate-[-1deg]">
              🏆 Hall of Fame
            </h2>
            <div className="tape w-24 h-6 absolute -top-2 left-4 -rotate-3 z-20 pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 gap-6 relative">
            <div className="absolute -right-4 top-10 w-16 h-16 bg-secondary-container rounded-full mix-blend-multiply opacity-50 blur-sm pointer-events-none" />

            {hallOfFame.map((item, idx) => (
              <article
                key={idx}
                className={`bg-surface-container rounded-xl p-6 border-2 border-outline shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] relative transition-transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] ${item.cardRotate}`}
              >
                <div className={`tape w-16 h-4 absolute top-2 right-1/2 translate-x-1/2 ${item.tapeRotate} pointer-events-none`} />
                <div className="flex justify-between items-start mb-2 mt-2">
                  <p className="font-body-lg text-body-lg text-on-surface font-medium leading-relaxed max-w-[85%]">
                    {item.text}
                  </p>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border shadow-[2px_2px_0px_0px_rgba(111,93,14,1)] font-sticker-label text-sticker-label text-sm ${item.badgeClass}`}>
                      {item.rating}
                    </span>
                    <span className="text-xs text-on-surface-variant font-sticker-label">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <button 
                    onClick={() => handleCopy(idx, item.text)}
                    className="text-xs font-sticker-label text-primary hover:underline"
                  >
                    {copiedIndex === idx ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Categories Grid */}
        <section className="flex flex-col gap-stack-gap mt-8">
          <h2 className="font-headline-md text-headline-md text-primary-fixed-variant rotate-1 mb-2">
            Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`bg-surface-container-high rounded-xl p-4 border-2 border-outline shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] transition-all active:scale-95 ${cat.rot} wiggle group`}
              >
                <div className={`w-12 h-12 ${cat.bg} rounded-full flex items-center justify-center ${cat.hover} transition-colors`}>
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">
                    {cat.icon}
                  </span>
                </div>
                <span className="font-sticker-label text-sticker-label text-on-surface text-center">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <section className="flex justify-center mt-6">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl border-2 border-on-background shadow-[4px_4px_0px_0px_rgba(30,27,19,1)] font-headline-md text-headline-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(30,27,19,1)] active:scale-95 transition-all rotate-[-1deg] wiggle">
            Submit Your Excuse
          </button>
        </section>
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden bg-surface dark:bg-surface-dim fixed bottom-0 w-full rounded-t-lg z-50 border-t-2 border-outline-variant shadow-[0px_-4px_0px_0px_rgba(147,69,43,0.1)] flex justify-around items-center px-4 pb-4 pt-2 max-w-[800px] mx-auto">
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1" href="#">
          <span className="material-symbols-outlined mb-1">auto_fix_high</span>
          <span className="font-sticker-label text-sticker-label text-xs">Generate</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1" href="#">
          <span className="material-symbols-outlined mb-1">folder_open</span>
          <span className="font-sticker-label text-sticker-label text-xs">Archive</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl p-2 rotate-1 scale-105 shadow-[2px_2px_0px_0px_rgba(111,93,14,1)]" href="#">
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          <span className="font-sticker-label text-sticker-label text-xs">Hall of Fame</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1" href="#">
          <span className="material-symbols-outlined mb-1">local_fire_department</span>
          <span className="font-sticker-label text-sticker-label text-xs">Chaos</span>
        </a>
      </nav>
    </div>
  );
}

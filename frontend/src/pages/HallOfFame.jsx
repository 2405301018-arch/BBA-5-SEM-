import React, { useState } from 'react';
import { HALL_OF_FAME_EXCUSES, CATEGORIES } from '../data/excuses';

export default function HallOfFame({ onSelectCategory }) {
  const [excuses, setExcuses] = useState(HALL_OF_FAME_EXCUSES);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [newExcuseText, setNewExcuseText] = useState("");
  const [newExcuseCategory, setNewExcuseCategory] = useState("Work");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if ('vibrate' in navigator) {
      navigator.vibrate(40);
    }
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleSubmitExcuse = (e) => {
    e.preventDefault();
    if (!newExcuseText.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: `"${newExcuseText.trim()}"`,
      description: `Submitted by a fellow survivor under category: ${newExcuseCategory}.`,
      chaos: "🔥 95%",
      tag: "Community Legend",
      badgeColor: "bg-tertiary-container text-on-tertiary-container",
      rotate: "rotate-[-0.5deg]",
      tapeRotate: "rotate-2"
    };

    setExcuses([newEntry, ...excuses]);
    setNewExcuseText("");
    setIsSubmitModalOpen(false);
  };

  return (
    <main className="max-w-[800px] mx-auto pt-24 pb-36 px-container-padding relative z-10 flex flex-col gap-12">
      {/* Hall of Fame Section */}
      <section className="flex flex-col gap-stack-gap">
        <div className="flex items-center justify-between mb-4 relative">
          <h2 className="font-headline-md text-headline-md text-primary-fixed-variant rotate-[-1deg] flex items-center gap-2">
            <span>🏆</span> Hall of Fame
          </h2>
          <div className="tape w-24 h-6 absolute -top-3 left-6 -rotate-3 z-20 pointer-events-none" />
          <span className="text-xs font-sticker-label bg-surface-container px-3 py-1 rounded-full border border-outline/40">
            {excuses.length} Legendary Alibis
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 relative">
          {/* Decorative background glow circle */}
          <div className="absolute -right-4 top-10 w-20 h-20 bg-secondary-container rounded-full mix-blend-multiply opacity-40 blur-md pointer-events-none" />

          {excuses.map((item) => {
            const isCopied = copiedId === item.id;
            return (
              <article
                key={item.id}
                className={`bg-surface-container rounded-xl p-6 border-2 border-outline shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] relative transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] ${item.rotate} group`}
              >
                {/* Visual Tape Effect */}
                <div 
                  className={`tape w-16 h-4 absolute -top-2 right-1/2 translate-x-1/2 ${item.tapeRotate} z-20 pointer-events-none`}
                />

                <div className="flex justify-between items-start mb-3 mt-1 gap-4">
                  <div className="flex-1">
                    <p className="font-body-lg text-body-lg text-on-surface font-semibold leading-snug">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="font-body-sm text-on-surface-variant mt-1.5 text-sm italic">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span 
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-secondary shadow-[2px_2px_0px_0px_rgba(111,93,14,1)] font-sticker-label text-sticker-label text-xs ${item.badgeColor}`}
                    >
                      {item.chaos}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-sticker-label uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Quick Copy Action on Hover */}
                <div className="pt-2 border-t border-outline-variant/60 flex justify-end">
                  <button
                    onClick={() => handleCopy(item.id, item.title)}
                    className="text-xs font-sticker-label text-primary hover:text-primary-container flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {isCopied ? 'check' : 'content_copy'}
                    </span>
                    {isCopied ? 'Copied to Clipboard' : 'Copy Alibi'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="flex flex-col gap-stack-gap mt-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-headline-md text-headline-md text-primary-fixed-variant rotate-1">
            Categories
          </h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-xs text-primary font-sticker-label underline"
            >
              Clear Filter ({selectedCategory})
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.title;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(isSelected ? null : cat.title);
                  if (onSelectCategory) onSelectCategory(cat.title);
                }}
                className={`bg-surface-container-high rounded-xl p-4 border-2 transition-all active:scale-95 ${cat.rotate} wiggle group flex flex-col items-center justify-center gap-2 ${
                  isSelected
                    ? 'border-primary shadow-[6px_6px_0px_0px_rgba(147,69,43,1)] -translate-y-1 scale-105'
                    : 'border-outline shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(147,69,43,1)]'
                }`}
              >
                <div className={`w-12 h-12 ${cat.bg} rounded-full flex items-center justify-center ${cat.hover} transition-colors border border-on-background/10`}>
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">
                    {cat.icon}
                  </span>
                </div>
                <span className="font-sticker-label text-sticker-label text-on-surface text-center text-sm md:text-base">
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA Section: Submit Your Excuse */}
      <section className="flex justify-center mt-4">
        <button 
          onClick={() => setIsSubmitModalOpen(true)}
          className="bg-primary text-on-primary px-8 py-4 rounded-xl border-2 border-on-background shadow-[4px_4px_0px_0px_rgba(30,27,19,1)] font-headline-md text-headline-md hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(30,27,19,1)] active:scale-95 transition-all rotate-[-1deg] wiggle flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-2xl">add_circle</span>
          Submit Your Excuse
        </button>
      </section>

      {/* Interactive Submit Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#fff8ef] rounded-2xl border-4 border-primary sticker-shadow-lg max-w-md w-full p-6 relative rotate-0.5">
            <div className="tape w-24 h-5 absolute -top-3 left-8 -rotate-2 pointer-events-none" />
            <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
              <h3 className="font-headline-md text-primary text-xl">
                Submit an Official Excuse
              </h3>
              <button 
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-on-surface-variant hover:text-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmitExcuse} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs uppercase font-sticker-label text-on-surface-variant mb-1">
                  Your Excuse or Alibi
                </label>
                <textarea
                  rows="3"
                  required
                  value={newExcuseText}
                  onChange={(e) => setNewExcuseText(e.target.value)}
                  placeholder="Explain the sheer absurdity of your situation..."
                  className="w-full bg-surface-container rounded-lg p-3 border-2 border-outline focus:border-primary focus:outline-none font-body-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-sticker-label text-on-surface-variant mb-1">
                  Category
                </label>
                <select
                  value={newExcuseCategory}
                  onChange={(e) => setNewExcuseCategory(e.target.value)}
                  className="w-full bg-surface-container rounded-lg p-2.5 border-2 border-outline focus:border-primary focus:outline-none font-body-lg text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="flex-1 py-2.5 rounded-lg border-2 border-outline font-sticker-label text-sm hover:bg-surface-variant"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-primary text-white rounded-lg border-2 border-on-background sticker-shadow font-sticker-label text-sm hover:bg-primary-container"
                >
                  Publish Alibi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

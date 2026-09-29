import React, { useState } from 'react';

export default function Archive({ onNavigateToGenerate }) {
  const [savedExcuses, setSavedExcuses] = useState([
    {
      id: 1,
      text: "I typed out a full, thoughtful reply in my head and genuinely believed I had already sent it.",
      date: "Yesterday, 4:12 PM",
      recipient: "Coworker",
      believability: "Suspicious",
      copied: false
    },
    {
      id: 2,
      text: "A rogue pigeon flew into my living room, stared directly into my soul, and refused to leave until I negotiated with half a bagel.",
      date: "Sep 12, 2026",
      recipient: "Boss",
      believability: "Absolutely Unhinged 🤯",
      copied: false
    },
    {
      id: 3,
      text: "My shoelace snapped in a tragic double-knot disaster that required emergency scissors and a deep breath.",
      date: "Sep 10, 2026",
      recipient: "Friend",
      believability: "🤏 Innocent",
      copied: false
    }
  ]);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setSavedExcuses(prev => prev.map(item => item.id === id ? { ...item, copied: true } : item));
    setTimeout(() => {
      setSavedExcuses(prev => prev.map(item => item.id === id ? { ...item, copied: false } : item));
    }, 1800);
  };

  const handleDelete = (id) => {
    setSavedExcuses(prev => prev.filter(item => item.id !== id));
  };

  return (
    <main className="max-w-[800px] mx-auto pt-24 pb-36 px-container-padding relative z-10 flex flex-col gap-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-headline-md text-headline-md text-primary -rotate-1 flex items-center gap-2">
          <span>📁</span> Excuse Archive
        </h2>
        <span className="font-sticker-label text-xs bg-surface-container px-3 py-1 rounded-full border border-outline">
          {savedExcuses.length} Archived Logs
        </span>
      </div>

      <p className="font-body-sm text-on-surface-variant -mt-3 mb-4">
        Your vault of previously generated, battle-tested alibis and emergency excuses.
      </p>

      {savedExcuses.length === 0 ? (
        <div className="bg-surface-container p-8 rounded-2xl border-2 border-dashed border-outline text-center">
          <p className="font-body-lg text-on-surface-variant mb-4">Your archive is completely clear.</p>
          <button
            onClick={onNavigateToGenerate}
            className="bg-primary text-white font-sticker-label px-6 py-2.5 rounded-xl sticker-shadow"
          >
            Generate an Excuse Now
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {savedExcuses.map((excuse, idx) => {
            const rotations = ["rotate-0.5", "-rotate-0.5", "rotate-1"];
            const rot = rotations[idx % rotations.length];

            return (
              <div
                key={excuse.id}
                className={`bg-surface-container-lowest p-5 rounded-xl border-2 border-outline sticker-shadow ${rot} transition-transform hover:-translate-y-0.5`}
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <span className="text-xs font-sticker-label bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full border border-secondary">
                    {excuse.recipient}
                  </span>
                  <span className="text-xs text-on-surface-variant font-body-sm">
                    {excuse.date}
                  </span>
                </div>

                <p className="font-body-lg text-on-background italic mb-3">
                  "{excuse.text}"
                </p>

                <div className="flex justify-between items-center pt-2 border-t border-outline-variant/60">
                  <span className="text-xs text-primary font-sticker-label">
                    {excuse.believability}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleCopy(excuse.id, excuse.text)}
                      className="text-xs font-sticker-label text-primary hover:text-primary-container flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {excuse.copied ? 'check' : 'content_copy'}
                      </span>
                      {excuse.copied ? 'Copied' : 'Copy'}
                    </button>
                    <button
                      onClick={() => handleDelete(excuse.id)}
                      className="text-xs font-sticker-label text-error hover:opacity-80 flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

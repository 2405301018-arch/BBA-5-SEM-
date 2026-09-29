import React from 'react';

export default function Header({ currentTab, setCurrentTab }) {
  const navItems = [
    { id: 'generate', label: 'Generate' },
    { id: 'archive', label: 'Archive' },
    { id: 'hallOfFame', label: 'Hall of Fame' },
    { id: 'chaos', label: 'Chaos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#fff8ef]/85 backdrop-blur-md border-b-2 border-outline-variant shadow-[4px_4px_0px_0px_rgba(147,69,43,1)]">
      <div className="flex justify-between items-center px-container-padding h-16 w-full max-w-[800px] mx-auto">
        <div className="flex items-center gap-3">
          <button 
            aria-label="Menu" 
            className="text-primary hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] transition-all active:scale-95 duration-100 p-2 rounded-lg"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
          <h1 
            onClick={() => setCurrentTab('generate')}
            className="font-display-mobile text-[28px] md:text-display-mobile text-primary -rotate-2 select-none cursor-pointer tracking-tight"
          >
            Excuse Generator
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`font-sticker-label text-sticker-label transition-all hover:-translate-y-0.5 ${
                  isActive
                    ? 'text-primary font-bold underline decoration-primary decoration-2 underline-offset-4'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* User Profile Avatar */}
        <button 
          aria-label="User Profile" 
          className="hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(147,69,43,1)] transition-all active:scale-95 duration-100 rounded-full border-2 border-primary overflow-hidden w-10 h-10 bg-secondary-container flex items-center justify-center rotate-2"
        >
          <span className="font-sticker-label font-bold text-on-secondary-container text-sm">UP</span>
        </button>
      </div>
    </header>
  );
}

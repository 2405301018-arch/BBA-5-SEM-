import React from 'react';

export default function Navigation({ currentTab, setCurrentTab }) {
  const tabs = [
    { id: 'generate', label: 'Generate', icon: 'auto_fix_high' },
    { id: 'archive', label: 'Archive', icon: 'folder_open' },
    { id: 'hallOfFame', label: 'Hall of Fame', icon: 'workspace_premium' },
    { id: 'chaos', label: 'Chaos', icon: 'local_fire_department' },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full rounded-t-xl z-50 bg-[#fff8ef] border-t-2 border-outline-variant shadow-[0px_-4px_0px_0px_rgba(147,69,43,0.15)]">
        <div className="flex justify-around items-center px-3 pb-4 pt-2 max-w-[800px] mx-auto">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            const isChaos = tab.id === 'chaos';

            if (isActive) {
              return (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl scale-105 transition-transform ${
                    isChaos
                      ? 'bg-error-container text-on-error-container rotate-1 shadow-[2px_2px_0px_0px_rgba(186,26,26,1)]'
                      : 'bg-secondary-container text-on-secondary-container rotate-1 shadow-[2px_2px_0px_0px_rgba(111,93,14,1)]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {tab.icon}
                  </span>
                  <span className="font-sticker-label text-[12px] font-bold">{tab.label}</span>
                </button>
              );
            }

            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-container-high transition-transform hover:-rotate-1 active:scale-95 duration-75"
              >
                <span className="material-symbols-outlined text-[24px] mb-0.5" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {tab.icon}
                </span>
                <span className="font-sticker-label text-[12px]">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Left Sidebar (Visible on wide screens) */}
      <nav className="hidden xl:flex flex-col fixed left-8 top-28 h-auto w-56 bg-[#fff8ef] rounded-2xl border-2 border-outline-variant p-4 shadow-[4px_4px_0px_0px_rgba(147,69,43,0.5)] z-40">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-wider text-on-surface-variant font-sticker-label px-2 mb-2">
            Navigation
          </div>
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            const isChaos = tab.id === 'chaos';

            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 ${
                  isActive
                    ? isChaos
                      ? 'bg-error-container text-on-error-container shadow-[3px_3px_0px_0px_rgba(186,26,26,1)] rotate-1 font-bold'
                      : 'bg-secondary-container text-on-secondary-container shadow-[3px_3px_0px_0px_rgba(111,93,14,1)] rotate-1 font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_rgba(147,69,43,0.3)]'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                  {tab.icon}
                </span>
                <span className="font-sticker-label text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

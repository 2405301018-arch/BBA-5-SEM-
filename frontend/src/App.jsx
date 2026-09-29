import React, { useState } from 'react';
import ShaderBackground from './components/ShaderBackground';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ExcuseGeneratorHome from './pages/ExcuseGeneratorHome';
import ChaosMode from './pages/ChaosMode';
import HallOfFame from './pages/HallOfFame';
import Archive from './pages/Archive';

export default function App() {
  const [currentTab, setCurrentTab] = useState('generate');

  return (
    <div className="min-h-screen bg-[#fff8ef] text-[#1e1b13] relative overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container font-body-lg">
      {/* Interactive WebGL Paper-grain Shader Background */}
      <ShaderBackground opacity={0.35} />

      {/* Shared Header Navigation */}
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Screen Views */}
      <div className="relative z-10">
        {currentTab === 'generate' && (
          <ExcuseGeneratorHome onNavigateToChaos={() => setCurrentTab('chaos')} />
        )}
        {currentTab === 'chaos' && (
          <ChaosMode />
        )}
        {currentTab === 'hallOfFame' && (
          <HallOfFame onSelectCategory={(cat) => {
            console.log("Selected category:", cat);
          }} />
        )}
        {currentTab === 'archive' && (
          <Archive onNavigateToGenerate={() => setCurrentTab('generate')} />
        )}
      </div>

      {/* Mobile Bottom Navigation & Desktop Left Sidebar */}
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}

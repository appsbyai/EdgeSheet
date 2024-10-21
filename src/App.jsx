import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Trades from './pages/Trades';
import Performance from './pages/Performance';
import Accounts from './pages/Accounts';
import Labels from './pages/Labels';
import Exchanges from './pages/Exchanges';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Trades />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/labels" element={<Labels />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
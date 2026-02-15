import React, { useEffect } from 'react';
import { Nav } from './components/Nav';
import { About } from './components/About';

import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Nav />
      <About />
      <Footer />

    </div>
  );
}
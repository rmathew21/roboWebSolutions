import React, { useEffect } from 'react';
import { Nav } from './components/Nav';

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

    </div>
  );
}
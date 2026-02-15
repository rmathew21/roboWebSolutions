import React, { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectModal } from './components/ProjectModal';
import { Projects } from './components/Projects';
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
      <Hero />
      <About />
      {/* <ProjectModal /> */}
      <Projects />
      <Footer />

    </div>
  );
}
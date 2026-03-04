import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import rwsLogo from "@/assets/rwsLogo.png"

export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        // { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Services', id: 'services' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-[#0F172A]/95 backdrop-blur shadow-lg border-b border-[#334155] ' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <a href="/" className="flex items-center gap-3">
                        <img 
                            src={rwsLogo} 
                            alt="Robo Web Solutions logo" 
                            className='h-full max-h-18 w-auto object-contain'
                        />
                        <span className="text-2xl tracking-wide font-bold text-white hover:text-[#C9A24D] transition-colors">
                            Robo Web Solutions
                        </span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button 
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-white hover:text-[#C9A24D] transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="px-5 py-2 bg-[#C9A24D] text-[#0F172A] rounded-lg font-semibold hover:bg-[#e3b75a] transition-all duration-300"
                            >
                                Get Started

                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:text-[#C9A24D] transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>     
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                    <nav className="md:hidden bg-[#0F172A]/95 border-t border-[#334155] px-4 sm:px-6 pb-6 pt-4">
                        {navLinks.map((link) => (
                            <button 
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-center py-3 text-slate-300 hover:text-[#C9A24D] transition-colors font-medium border-b border-[#334155]/50 last:border-0"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="mt-4 w-full px-5 py-3 bg-[#C9A24D] text-[#0F172A] rounded-lg font-semibold hover:bg-[#e3b75a] transition-all duration-300"
                            >
                                Get Started
                        </button>
                    </nav>
                )}
        </header>
    );
}
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
                isScrolled ? 'bg-[#1E293B] shadow-lg' : 'bg-[#1E293B]'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <button 
                        onClick={() => scrollToSection('hero')} 
                        className="text-2xl font-bold text-white hover:text-[#F59E0B] transition-color"
                    >
                        Robo Web Solutions
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button 
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-300 hover:text-[#F59E0B] transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[#334155]">
                        {navLinks.map((link) => (
                            <button className="block w-full text-left py-2 text-gray-300 hover:text-[#F59E0B] transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
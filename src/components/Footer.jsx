import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/rmathew21', label: 'Github' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/robin-mathew-61704917b/', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://x.com/', label: 'Twitter' },
        { icon: Mail, href: 'mailto:rob@robowebsolutions.com', label: 'Email' },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="bg-[#1E293B] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Robo Web Solutions</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Specializing in front-end web development to help local businesses
                            modernize their online presence with cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        aria-label={social.label}
                                        className='w-10 h-10 bg-[#334155] rounded-lg flex items-center justify-center hover:bg-[#F59E0B] transition-colors'
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button 
                                    onClick={() => scrollToSection('hero')}
                                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('about')}
                                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('projects')}
                                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('services')}
                                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                                >
                                    Services
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="text-gray-400 hover:text-[#F59E0B] transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Contacts</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Houston, TX</li>
                            <li>
                                <a 
                                    href="tel:1234567890"
                                    className='hover:text-[#F59E0B] transition-colors'
                                >
                                    (555) 123-4567
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="mailto:rob@robowebsolutions.com"
                                    className='hover:text-[#F59E0B] transition-colors'
                                >
                                    rob@robowebsolutions.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            ©  {currentYear} Robo Web Solutions LLC. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <button className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">
                                Privacy Policy
                            </button>
                            <button className="text-gray-400 hover:text-[#F59E0B] transition-colors text-sm">
                                Terms of Service
                            </button>
                        </div>
                </div>
            </div>
        </footer>
    );
}
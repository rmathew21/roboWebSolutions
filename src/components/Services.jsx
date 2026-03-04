import React from 'react';
import { Layout, Smartphone, Zap, Code2, Palette, Search } from 'lucide-react';

export function Services() {
    const services = [
        {
            icon: Layout,
            title: 'Custom Website Design',
            description: 'Beautiful, responsive websites tailored to your brand and business goals.',
            features: ['Unique design concepts', 'Brand intergration', 'User-focused layouts'],
        },
        {
            icon: Smartphone,
            title: 'Mobile-First Development',
            description: 'Websites that work flawlessly on all devices, from phones to desktop.',
            features: ['Responsive design', 'Touch-optimized', 'Cross-browser compatible'],
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Lightning-fast loading times that keep visitors engaged and improve SEO.',
            features: ['Speed optimization', 'Image compression', 'Code minification'],
        },
        {
            icon: Code2,
            title: 'Modern Frameworks',
            description: 'Built with the latest technologies like React, ensuring scalability.',
            features: ['React development', 'Component architecture', 'State management'],
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Intuitive interfaces that provide exceptional user experiences.',
            features: ['User research', 'Wireframing', 'Interactive prototypes'],
        },
        {
            icon: Search,
            title: 'SEO Ready',
            description: 'Optimized or search engines to help customers find your business.',
            features: ['SEO best practices', 'Meta Optimization', 'Schema markup'],
        },
    ];

    return (
        // <section id="services" className="py-20 bg-linear-to-br from-slate-900 via-slate-800 to-[#1c1405] relative overflow-hidden">
        <section className="py-20 bg-[#0F172A] relative overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[#C9A24D]/15 text-[#C9A24D] rounded-full mb-4">
                        <span className="text-sm font-medium">What We Offer</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Comprehensive front-end development services to bring your vision to life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index} 
                                className="bg-[#1E293B] p-8 rounded-2xl border border-[#334155] shadow-lg  hover:bg-[#334155] hover:border-[#C9A24D]/40 transition-all duration-300 group hover:-translate-y-2">
                                <div className="w-16 h-16 bg-[#C9A24D]/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={32} className="text-[#C9A24D]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-slate-400">
                                            <div className="w-1.5 h-1.5 bg-[#C9A24D] rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 bg-linear-to-r from-[#1E293B] to-[#334155] rounded-2xl p-12 text-center">
                {/* <div className="mt-16 bg-[#1E293B] border border-[#334155] rounded-2xl p-12 text-center"> */}
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Need Something Custom?
                    </h3>
                    <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                        Every business is unique. If you have specific requirements, we're happy to create a custom solution tailored to your needs.
                    </p>
                    <button 
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 bg-[#C9A24D] text-[#0F172A] rounded-lg hover:bg-[#e3b75a] transition-colors font-medium shadow-lg">
                            Let's Talk About Your Project
                    </button>
                </div>
            </div>
        </section>
    );
}
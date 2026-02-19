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
        <section id="services" className="py-20 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-4">
                        <span className="text-sm font-medium">What We Offer</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
                        Comprehensive front-end development services to bring your vision to life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index} 
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2x transition-all duration-300 group hover:-translate-y-2">
                                <div className="w-16 h-16 bg-linear-to-br from-[#F59E0B] to-[#F97316] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[#64748B] mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-[#64748B]">
                                            <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 bg-linear-to-r from-[#1E293B] to-[#334155] rounded-2xl p-12 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Need Something Custom?
                    </h3>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Every business is unique. If you have specific requirements, we're happy to create a custom solution tailored to your needs.
                    </p>
                    <button 
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-4 bg-[#F59E0B] text-white rounded-lg hover:bg- transition-colors font-medium shadow-lg">
                            Let's Talk About Your Project
                    </button>
                </div>
            </div>
        </section>
    );
}
import React from 'react';
import { Users, Target, Heart, TrendingUp } from 'lucide-react';

export function About() {
    const values = [
        {
            icon: Target,
            title: 'Client Partnership',
            description: 'We measure success by the tangible impact we create for your business.',
        },
        {
            icon: Users,
            title: 'Focus on Results',
            description: 'Your success is our success. We work collaboratively every step of the way.',
        },
        {
            icon: Heart,
            title: 'Passion for Craft',
            description: 'We love what we do and it shows in every line of code we write.',
        },
        {
            icon: TrendingUp,
            title: 'Continuous Growth',
            description: 'We stay ahead of trends to deliver cutting-edge solutions.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-4">
                            <span className="text-sm font-medium">About Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-6">
                            Building the Future of Local Business
                        </h2>
                        <p className="text-lg text- mb-6 leading-relaxed">
                            At Robo Web Solutions, we believe every local business deserves a word-class online presence. Founded 
                            by a team of passionate developers and designers, we specialize in creating modern, responsive websites
                            that help local businesses compete in the digital age.
                        </p>
                        <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
                            Our expertise in front-end development means we focus on what users see and interact with. We create beautiful,
                            fast, and intuitive website that turn visitors into customers and help business grow.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#F59E0B] mb-2">50+</div>
                                <div className="text-sm text-[#64748B]">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#F59E0B] mb-2">40+</div>
                                <div className="text-sm text-[#64748B]">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#F59E0B] mb-2">99%</div>
                                <div className="text-sm text-[#64748B]">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index} 
                                    className="bg-[#FAF9F6] p-6 rounded-2xl hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center mb-4">
                                        <Icon size={24} className='text-[#F590B]' />
                                    </div>
                                    <h3 className="font-bold text-[#1E293B] mb-2">{value.title}</h3>
                                    <p className="text-sm text-[#64748B]">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
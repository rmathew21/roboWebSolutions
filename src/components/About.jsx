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
        <section id="about" className="py-20 bg-[#0F172A]">
        {/* <section id="about" className="py-20 bg-linear-to-b from-[#0f172a] to-[#111827]"> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center px-4 py-2 bg-[#C9A24D]/15 text-[#F59E0B] rounded-full mb-4">
                            <span className="text-sm font-medium">About Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Building the Future of Local Business
                        </h2>
                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            At Robo Web Solutions, we believe every local business deserves a world-class online presence. Founded 
                            by a team of passionate developers and designers, we specialize in creating modern, responsive websites
                            that help local businesses compete in the digital age.
                        </p>
                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Our expertise in front-end development means we focus on what users see and interact with. We create beautiful,
                            fast, and intuitive website that turn visitors into customers and help businesses grow.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#C9A24D] mb-2">50+</div>
                                <div className="text-sm text-slate-400">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#C9A24D] mb-2">40+</div>
                                <div className="text-sm text-slate-400">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#C9A24D] mb-2">99%</div>
                                <div className="text-sm text-slate-400">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index} 
                                    // className="bg-[#FAF9F6] p-6 rounded-2xl hover:shadow-lg transition-shadow"
                                    className='bg-[#1E293B] p-6 rounded-2xl hover:bg-[#334155] backdrop-blur border border-[#334155] hover:border-[#C9A24D]/40 transition-all duration-300'

                                >
                                    <div className="w-12 h-12 bg-[#C9A24D]/15 rounded-lg flex items-center justify-center mb-4">
                                        <Icon size={24} 
                                        // className='text-[#F590B]' 
                                        className='text-[#C9A24D]'
                                        />
                                    </div>
                                    {/* <h3 className="font-bold text-[#1E293B] mb-2">{value.title}</h3> */}
                                    <h3 className="font-bold text-white mb-2">{value.title}</h3>
                                    <p className="text-sm text-slate-400">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
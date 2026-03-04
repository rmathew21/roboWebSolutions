import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
    const [state, handleFormSubmit] = useForm("xzdanykl");

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            details: 'rob@robowebsolutions.com',
            link: 'mailto:rob@robowebsolutions.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            details: '(555) 123-4567',
            link: 'tel:5551234567',
        },
        {
            icon: MapPin,
            title: 'Location',
            details: 'Houston, TX',
            link: null,
        },
    ];

    return (
        <section id="contact" className="py-20 bg-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[#C9A24D]/15 text-[#C9A24D] rounded-full mb-4">
                        <span className="text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's Build Something Great
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Ready to modernize your online presence? We'd love to hear about your project.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            const content = (
                                <div className="flex items-start p-6 bg-[#1E293B] border border-[#334155] rounded-2xl hover:bg-[#334155] hover:border-[#C9A24D]/40 transition-all duration-300">
                                    <div className="shrink-0 w-12 h-12 bg-[#C9A24D]/15 rounded-lg flex items-center justify-center">
                                        <Icon size={24} className="text-[#C9A24D]" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-white mb-1">{info.title}</h3>
                                        <p className="text-slate-400">{info.details}</p>
                                    </div>
                                </div>
                            );

                            return info.link ? (
                                <a key={index} href={info.link} className="block">
                                    {content}
                                </a>
                            ) : (
                                <div key={index}>{content}</div>
                            );
                        })}

                        <div className="bg-linear-to-br from-[#1E293B] to-[#334155] p-8 rounded-2xl text-white">
                            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Check size={20} className="text-[#C9A24D] mr-2 shrink-0 mt-0.5" />
                                    <span>Fast turnaround times</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-[#C9A24D] mr-2 shrink-0 mt-0.5" />
                                    <span>transparent pricing</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-[#C9A24D] mr-2 shrink-0 mt-0.5" />
                                    <span>Ongoing support</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-[#C9A24D] mr-2 shrink-0 mt-0.5" />
                                    <span>Modern best practices</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <form onSubmit={handleFormSubmit} className="bg-[#1E293B] border border-[#334155] p-8 rounded-2xl shadow-lg">
                            {state.succeeded ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-900/30 border border-green-700/40 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={40} className="text-green-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-slate-400">
                                        We've received your message and will get back to you within 24 hours.
                                    </p>
                                </div>
                            ): (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className='block text-slate-300 mb-2'>
                                                Your Name *
                                            </label>
                                            <input 
                                                type='text' 
                                                id='name'    
                                                name='name'
                                                required
                                                className='w-full px-4 py-3 bg-[#0F172A] border border-[#334155] text-white placeholder-slate-600 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent outline-none transition-all'
                                                placeholder='John Doe'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block text-slate-300 mb-2'>
                                                Email Address *
                                            </label>
                                            <input 
                                                type='email' 
                                                id='email'    
                                                name='email'
                                                required
                                                className='w-full px-4 py-3 bg-[#0F172A] border border-[#334155] text-white placeholder-slate-600 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent outline-none transition-all'
                                                placeholder='john@example.com'
                                            />
                                            <ValidationError
                                                prefix='Email'
                                                field='email'
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                            <label htmlFor="phone" className='block text-slate-300 mb-2'>
                                                Phone Number 
                                            </label>
                                            <input 
                                                type='tel' 
                                                id='phone'    
                                                name='phone'
                                                className='w-full px-4 py-3 bg-[#0F172A] border border-[#334155] text-white placeholder-slate-600 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent outline-none transition-all'
                                                placeholder='(555) 123-4567'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="businessType" className='block text-slate-300 mb-2'>
                                                Business Type
                                            </label>
                                            <select 
                                                name="businessType" 
                                                id="businessType"
                                                className='w-full px-4 py-3 bg-[#0F172A] border border-[#334155] text-white rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent outline-none transition-all'
                                                >
                                                    <option value="">Select...</option>
                                                    <option value="restaurant">Restaurant</option>
                                                    <option value="retail">Retail</option>
                                                    <option value="services">Services</option>
                                                    <option value="wellness">Wellness</option>
                                                    <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className='block text-slate-300 mb-2'>
                                            Your Message *
                                        </label>
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            required
                                            rows={6}
                                            className='w-full px-4 py-3 bg-[#0F172A] border border-[#334155] text-white placeholder-slate-600 rounded-lg focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent outline-none transition-all'
                                            placeholder='Tell us about your project...'
                                            >
                                        </textarea>
                                        <ValidationError
                                            prefix='Message'
                                            field='message'
                                            errors={state.errors}
                                        />
                                    </div>

                                    <button 
                                        type='submit'
                                        disabled={state.submitting}
                                        className="w-full px-8 py-3 bg-[#C9A24D] text-[#0F172A] rounded-lg hover:bg-[#e3b75a] transition-all duration-300 flex items-center justify-center font-medium shadow-lg hover:shadow-xl">
                                        Send Message
                                        <Send size={20} className='ml-2'/>
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function App() {
    return (
        <Contact />
    )
}

export default App;
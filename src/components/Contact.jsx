import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                businessType: '',
                message: '',
            });
        }, 3000);
    };

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
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-4">
                        <span className="text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
                        Let's Build Something Great
                    </h2>
                    <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
                        Ready to modernize your online presence? We'd love to hear about your project.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-6">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            const content = (
                                <div className="flex items-start p-6 bg-[#FAF9F6] rounded-wxl hover:shadow-lg transition-shadow">
                                    <div className="shrink-0 w-12 h-12 bg-[#FEF3C7] rounded-lg flex items-center justify-center">
                                        <Icon size={24} className="text-[#F59E0B]" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-[#1E293B] mb-1">{info.title}</h3>
                                        <p className="text-[#64748B]">{info.details}</p>
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
                                    <Check size={20} className="text- mr-2 shrink-0 mt-0 5" />
                                    <span>Fast turnaround times</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text- mr-2 shrink-0 mt-0 5" />
                                    <span>transparent pricing</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text- mr-2 shrink-0 mt-0 5" />
                                    <span>Ongoing support</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text- mr-2 shrink-0 mt-0 5" />
                                    <span>Mordern best practices</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-[#FAF9F6] p-8 rounded-2xl shadow-lg">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                                        Thank You!
                                    </h3>
                                    <p className="text-[#64748B]">
                                        We've received your message and will get back to you within 24 hours.
                                    </p>
                                </div>
                            ): (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name" className='block text-[#1E293B] mb-2'>
                                                Your Name *
                                            </label>
                                            <input 
                                                type='text' 
                                                id='name'    
                                                name='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all'
                                                placeholder='John Doe'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block text-[#1E293B] mb-2'>
                                                Email Address *
                                            </label>
                                            <input 
                                                type='email' 
                                                id='email'    
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all'
                                                placeholder='john@example.com'
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                            <label htmlFor="phone" className='block text-[#1E293B] mb-2'>
                                                Phone Number 
                                            </label>
                                            <input 
                                                type='tel' 
                                                id='phone'    
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all'
                                                placeholder='(555) 123-4567'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="businessType" className='block text-[#1E293B] mb-2'>
                                                Business Type
                                            </label>
                                            <select 
                                                name="businessType" 
                                                id="businessType"
                                                value={formData.businessType}
                                                onChange={handleChange}
                                                className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent outline-none transition-all'
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
                                        <label htmlFor="message" className='block text-[#1E293B] mb-2'>
                                            Your Message *
                                        </label>
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className='w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F49E0B] focus:border-transparent outline-none transition-all resize-none'
                                            placeholder='Tell us about your project...'
                                            ></textarea>
                                    </div>

                                    <button className="w-full px-8 py-3 bg-[#1E293B] text-white rounded-lg hover:bg-[#F59E0B] transition-all duration-300 flex items-center justify-center font-medium shadow-lg hover:shadow-xl">
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
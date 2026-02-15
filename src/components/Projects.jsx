import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Bella Vista Restaurant',
      category: 'Restaurant',
      image: 'https://images.unsplash.com/photo-1614801502766-e2562eb626d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwd2Vic2l0ZSUyMHRhYmxldHxlbnwxfHx8fDE3NzEwODA4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A modern, elegant website for an upscale Italian restaurant featuring online reservations and menu showcase.',
      fullDescription: 'We transformed Bella Vista Restaurant\'s online presence with a sophisticated website that captures the elegance of their dining experience. The site features a dynamic menu system, online reservation integration, photo gallery, and mobile-responsive design that works flawlessly across all devices.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      results: ['150% increase in online reservations', '85% mobile user engagement', 'Reduced phone inquiries by 40%'],
      challenge: 'The restaurant needed a way to showcase their seasonal menu while handling the high volume of reservation requests efficiently.',
      solution: 'We built a custom reservation system integrated with their existing booking platform and created an elegant, photo-rich design that highlights their culinary artistry.',
    },
    {
      id: 2,
      title: 'The Grind Coffee House',
      category: 'Café',
      image: 'https://images.unsplash.com/photo-1746114774895-133d5b677db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBsYXB0b3B8ZW58MXx8fHwxNzcxMDgwODg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cozy coffee shop website with online ordering system and loyalty program integration.',
      fullDescription: 'The Grind Coffee House wanted to expand their business with online ordering while maintaining their warm, community-focused brand. We delivered a website that feels as inviting as their physical location, complete with seamless online ordering and a digital loyalty program.',
      technologies: ['React', 'Context API', 'CSS Grid', 'Progressive Web App'],
      results: ['200+ weekly online orders', '1,000+ loyalty members enrolled', '4.9/5 customer satisfaction'],
      challenge: 'Balancing a complex online ordering system with the warm, personal touch that defines their brand.',
      solution: 'We designed a streamlined ordering flow that feels intuitive and personal, with features like order favorites, customization options, and a smooth checkout experience.',
    },
    {
      id: 3,
      title: 'Urban Threads Boutique',
      category: 'Retail',
      image: 'https://images.unsplash.com/photo-1563223827-817bf3d83907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcxMDgwODg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Fashion boutique website with virtual styling consultations and e-commerce capabilities.',
      fullDescription: 'Urban Threads Boutique needed an online presence that matched their curated, trendy aesthetic. We created a visually stunning website that showcases their unique fashion pieces and offers virtual styling consultations, bridging the gap between online and in-store experiences.',
      technologies: ['React', 'Tailwind CSS', 'Image Optimization', 'Animation'],
      results: ['300% increase in online visibility', 'Virtual consultations fully booked', '60% of visitors explore 5+ pages'],
      challenge: 'Creating a high-end visual experience that loads quickly and showcases their inventory effectively.',
      solution: 'We implemented advanced image optimization techniques and created a grid-based layout that highlights their products while maintaining fast load times.',
    },
    {
      id: 4,
      title: 'TechFix Solutions',
      category: 'Services',
      image: 'https://images.unsplash.com/photo-1647973035166-2abf410c68b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGJ1c2luZXNzJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NzEwODA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Tech repair shop website with appointment booking and device diagnostic tools.',
      fullDescription: 'TechFix Solutions wanted to streamline their booking process and educate customers about common tech issues. We built a comprehensive website with an appointment system, service catalog, and helpful diagnostic tools that improved customer experience and reduced support calls.',
      technologies: ['React', 'Form Validation', 'Scheduling API', 'Interactive Tools'],
      results: ['80% of appointments now booked online', '50% reduction in support calls', '90% appointment show-up rate'],
      challenge: 'Simplifying the complex process of tech repair bookings while providing educational resources.',
      solution: 'We created an intuitive multi-step booking form with real-time availability and added interactive diagnostic tools that help customers understand their tech issues.',
    },
    {
      id: 5,
      title: 'Serenity Spa & Wellness',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1695462131822-368776114494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcxMDgwODg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Tranquil spa website with service menu, therapist profiles, and gift card purchasing.',
      fullDescription: 'Serenity Spa & Wellness wanted a website that would capture the peaceful, luxurious atmosphere of their spa while making it easy for clients to book services and purchase gift cards. We delivered a serene, elegant design with seamless booking functionality.',
      technologies: ['React', 'Smooth Animations', 'Payment Integration', 'Accessibility'],
      results: ['45% increase in new client bookings', 'Gift card sales up 120%', 'Perfect accessibility score'],
      challenge: 'Creating a calming user experience while incorporating multiple e-commerce and booking features.',
      solution: 'We used subtle animations, a soothing color palette, and intuitive navigation to create a website that feels like a digital extension of the spa experience.',
    },
  ];
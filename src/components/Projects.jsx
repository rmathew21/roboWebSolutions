import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import legacyImg from "../assets/legacyLifeAgency.webp"
import legacyMockUp from "../assets/legacyLifeMockup.png";
import saveApeImg from "../assets/saveApe.webp";
import saveApeImg2 from "../assets/saveApeMockup2.png"
import freeSwingImg from "../assets/freeSwing.webp";
import freeSwingMockup from "../assets/freeSwingMockup.png"
import nexGenMockup from "../assets/nexGenMockup.png"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Legacy Life Agency",
      category: "Finance",
      image: legacyMockUp,
      description:
        "A modern, mobile-responsive website for Legacy Life Agency, showcasing life-insurance and wealth-planning services",
      fullDescription:
        "Legacy Life Agency needed a professional online presence that would build trust, clearly explain life-insurance and wealth-planning services, and convert visitors into qualified leads. As a new but growing financial-services brand, they required a clean, modern website that felt credible, mobile-friendly, and easy for potential clients to understand.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Formspree",
      ],
    //   results: [
    //     "150% increase in online reservations",
    //     "85% mobile user engagement",
    //     "Reduced phone inquiries by 40%",
    //   ],
      challenge:
        "Legacy Life Agency was a new financial-services brand without an online presence. They needed a website that would build trust and credibility in the life-insurance market, while explaining complex services like term life, whole life and wealth planning in a simple language.",
      solution:
        "I designed a developed a modern, responsive website using React, Vite, Tailwind CSS, and React Router with a focus on clarity, branding, and lead generation. Key solutions included clear service messaging, mobile first development, and a streamlined contact and appointment request form to encourage consultation requests.",
    },
    {
      id: 2,
      title: "Save Austin Parkway",
      category: "Edu Advocacy",
      image: saveApeImg2,
      description:
        "A community advocacy website built to help parents and neighbors rally support for Austin Parkway Elementary, providing updates, petitions, and tools to contact school board members and protect a local school from closure.",
      fullDescription:
        "SaveAPE.org is a grassroots community website built to help parents, teachers, and neighbors organize around the potential closure of Austin Parkway Elementary in Fort Bend ISD. The site provides clear information about proposed school closures, upcoming board meetings, and ways community members can take action, such as signing petitions, emailing trustees, and speaking at public hearings.",
      technologies: ["Squarespace", "Custom CSS", "Google Form Integration", "Change.org Petition Embed"],
    //   results: [
    //     "200+ weekly online orders",
    //     "1,000+ loyalty members enrolled",
    //     "4.9/5 customer satisfaction",
    //   ],
      challenge:
        "The SaveAPE community needed a website on extremely short notice after Fort Bend ISD announced a proposed school closure with very little time before the board vote. Parents and neighbors needed a central place to get accurate information, sign petitions, submit feedback, and contact trustees. The site had to be built quickly, be easy for volunteers to update, and work perfectly on mobile devices.",
      solution:
        "I rapidly designed and launched SaveAPE.org using Squarespace to ensure a fast turnaround while still delivering a clean, professional site the community could trust. The site integrated Google Forms for feedback collection and Change.org petitions to coordinate grassroots advocacy efforts. I structured the layout around clear calls-to-action, mobile-friendly navigation, and easy-to-update content so volunteers could keep the community informed as deadline approached.",
    },
    {
      id: 3,
      title: "Free Swing",
      category: "Sports",
      image: freeSwingMockup,
      description:
        "Free Swing is a modern landing page for an indoor golf simulator business, designed to showcase memberships, booking options, and immersive simulator features while providing a clean, mobile-responsive user experience.",
      fullDescription:
        "Free Swing is a promotional website built for an indoor golf simulator startup offering immersive simulator bays where golfers can practice, compete with friends, and improve their swing using advanced tracking technology. The goal was to create a clean, conversion-focused landing page that clearly communicates membership options, pricing tiers, and booking details while establishing a strong, modern brand presence for a new local business preparing to open in Missouri City.",
      technologies: [
        "Webflow",
        "HTML5/CSS3",
        "Image Optimization",
        "SEO Optimization",
      ],
      // results: [
      //   "300% increase in online visibility",
      //   "Virtual consultations fully booked",
      //   "60% of visitors explore 5+ pages",
      // ],
      challenge:
        "Free Swing was a new business without an online presence, needing a professional website to explain simulator technology, pricing, and booking options before launch.",
      solution:
        "Built a fast, mobile-responsive landing page with clear membership tiers, strong CTAs, and modern branding to help attract early customers and establish credibility.",
    },
    {
      id: 4,
      title: "NexGen Professional Solutions",
      category: "Services",
      image: nexGenMockup,
      description:
        "A clean, modern business website for NexGen Proffessional Solutions, showcasing automation, recruting, staff augmentation, and digital transformation consulting services with a profressional and scalable design.",
      fullDescription:
        // "NexGen Professional Solutions needed an online presence that clearly communicated their consulting services and built credibility with potential enterprise clients. The website highlights their core offerings--including automation services, recruting and talent acquistion, staff augmentation, and digital transformation consulting--while maintaining a clean, modern layout that works seamlessly across desktop and mobile devices.",
        "As a forward-thinking consulting firm focused on helping organizations accelerate their digital journey, NexGen required a site that conveyed trust, expertise, and scalability. I designed the website to present services in an easy-to-understand structure, guide visitors toward contact inquiries, and reflect the company's mission to deliver agile, intelligent solutions that drive measurable business outcomes.",
      technologies: [
        "Squarespace",
        "Responsive CSS & Layout Design",
        "SEO Optimization",
        "Brand & UX Design",
      ],
      // results: [
      //   "80% of appointments now booked online",
      //   "50% reduction in support calls",
      //   "90% appointment show-up rate",
      // ],
      challenge:
        "NexGen Professional Solutions needed a professional website that clearly explained complex consulting services and built credibility with enterprise clients.",
      solution:
        "I created a modern, responsive website with clear service sections, strong branding,a nd optimized contact flows to convert visitors into leads."
    },
    {
      id: 5,
      title: "Serenity Spa & Wellness",
      category: "Wellness",
      image:
        "https://images.unsplash.com/photo-1695462131822-368776114494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzcxMDgwODg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Tranquil spa website with service menu, therapist profiles, and gift card purchasing.",
      fullDescription:
        "Serenity Spa & Wellness wanted a website that would capture the peaceful, luxurious atmosphere of their spa while making it easy for clients to book services and purchase gift cards. We delivered a serene, elegant design with seamless booking functionality.",
      technologies: [
        "React",
        "Smooth Animations",
        "Payment Integration",
        "Accessibility",
      ],
      results: [
        "45% increase in new client bookings",
        "Gift card sales up 120%",
        "Perfect accessibility score",
      ],
      challenge:
        "Creating a calming user experience while incorporating multiple e-commerce and booking features.",
      solution:
        "We used subtle animations, a soothing color palette, and intuitive navigation to create a website that feels like a digital extension of the spa experience.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#FEF3C7] text-[#F59E0B] rounded-full mb-4">
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Showcasing our work with local businesses across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1E293B] to-transparent opacity-60 group-hover:opacity-80 transition-opactiy"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[#F59E0B] text-white text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#64748B] mb-4">{project.description}</p>
                <button className="inline-flex items-center text-[#F59E0B] font-medium group-hover:text-[#1E293B] transition-colors">
                  View Details
                  <ArrowRight
                    size={16}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

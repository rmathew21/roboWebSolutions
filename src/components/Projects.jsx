import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectModal } from "./ProjectModal";
import legacyMockUp from "../assets/legacyLifeMockup.png";
import saveApeImg2 from "../assets/saveApeMockup2.png";
import freeSwingMockup from "../assets/freeSwingMockup.png";
import nexGenMockup from "../assets/nexGenMockup.png";
import nexGenMockup2 from "../assets/nexGenMockup2.png";
import sweetTreatMockup from "../assets/sweetNTreatsMockup.png";
import msacpaMockup from "../assets/msacpaMockup.png";
import msacpaMockup2 from "../assets/msacpaMockup2.png";
import idiliEspressoMockup from "../assets/idiliEspressoMockup.png"
import cleanHomeProsMockup from '../assets/cleanHomeProsMockup.png';
//Mockup color in Shot.so use #1E293B

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Clean Home Pros",
      category: "Services",
      image: cleanHomeProsMockup,
      description:
        "A fast, modern marketing site for a Houston-area residential cleaning company — rebuilt from the ground up and relaunched after their previous site went down.",
      fullDescription:
        "Clean Home Pros LLC is a residential cleaning business serving the greater Houston area. The owner had an existing website that stopped functioning and had to be taken offline, leaving the business without a web presence. I designed and built a brand-new four-page marketing site from scratch using Next.js, Tailwind CSS, and TypeScript, deployed on Vercel. The site pairs a clean, trustworthy visual identity with the essentials a local service business needs to convert visitors: clear service offerings, a strong above-the-fold value proposition, and a friction-free way to request a quote. A multi-step contact wizard walks prospective customers through their cleaning needs one question at a time, making it easier to submit a complete, useful inquiry than a single long form would. The result is a quick, responsive, mobile-first site that gets the business back in front of local customers and ready to book work.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Vercel",
        "Formspree",
      ],
      //   results: [
      //     "150% increase in online reservations",
      //     "85% mobile user engagement",
      //     "Reduced phone inquiries by 40%",
      //   ],
      challenge:
        "The client had already lost their web presence — the old site was broken and pulled down, so there was no functioning reference to restore or migrate from. I needed to rebuild the business's entire online front door from a blank slate: establishing a coherent brand look, structuring the content so a homeowner could understand the services and request a quote in seconds, and doing it on a foundation that wouldn't break down the way the previous site had. On top of that, the lead-capture experience had to feel approachable rather than like filling out paperwork, since a clunky contact form is exactly where local service businesses lose customers.",
      solution:
        "I built the site on Next.js with Tailwind CSS and TypeScript, giving it a fast, maintainable, type-safe foundation and deploying it on Vercel for reliable hosting and instant updates. I produced and processed the brand assets, designed a clean four-page layout optimized for mobile, and implemented a guided multi-step contact wizard that breaks the quote request into simple, low-pressure steps. The outcome is a modern, responsive site that loads quickly, reflects the business's professionalism, and turns visitors into leads — relaunching Clean Home Pros online with a presence built to last.",
      liveUrl: "https://clean-home-pros.vercel.app/",
      liveLabel: "Visit Live Site",
      githubUrl: "https://github.com/rmathew21/clean-home-pros",
    },
    {
      id: 2,
      title: "NexGen Professional Solutions",
      category: "Services",
      image: nexGenMockup2,
      description:
        "Squarespace-to-Next.js migration for NexGen Professional Solutions, a business consulting firm based in Austin, TX. Built with a bold chess-themed identity featuring a jet black, ivory, and gold palette.",
      fullDescription:
        "NexGen Professional Solutions came to Robo Web Solutions with an existing Squarespace site that no longer reflected the premium, strategic brand they were building. The goal was a complete platform migration — moving from Squarespace's template constraints into a fully custom Next.js application with a distinctive visual identity. The result is a multi-page consulting site with a chess-inspired design language (complete with chess piece iconography, Cormorant Garamond headings, and a jet black/ivory/gold color scheme) that positions NexGen as a high-caliber, forward-thinking firm. The new site includes a homepage with hero, services overview, and stats sections; dedicated About, Services, and Contact pages; a responsive navbar with mobile menu; and a branded footer — all deployed on Vercel with domain migration pending.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Vercel",
        "SVG custom logo",
      ],
      //   results: [
      //     "150% increase in online reservations",
      //     "85% mobile user engagement",
      //     "Reduced phone inquiries by 40%",
      //   ],
      challenge:
        "The original Squarespace site was functional but generic — limited by template constraints in both design and performance. The client needed a site that matched their elevated brand positioning in the consulting space, with full control over layout, typography, and visual identity. Squarespace offered no path to the custom chess-themed aesthetic the client envisioned, and its CMS lock-in made future scalability a concern.",
      solution:
        "Rebuilt the site from the ground up in Next.js 14 using the App Router, with Tailwind CSS v4 handling all styling. Developed a cohesive chess-themed design system — jet black backgrounds, ivory text, gold accents, and Cormorant Garamond headings — to give the brand a distinctive, premium feel that Squarespace simply couldn't accommodate. Each page was built as a standalone route with shared layout components (Navbar, Footer), and the entire site was deployed to Vercel for fast, reliable hosting. Domain cutover from nexgenprosol.com is staged for a future migration window with zero-downtime DNS transition in mind.",
      liveUrl: "https://nex-gen-ashen.vercel.app/",
      liveLabel: "Visit Live Site",
      githubUrl: "https://github.com/rmathew21/nex-gen",
    },
    {
      id: 3,
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
      liveUrl: "https://www.legacylifeagency.net/",
      liveLabel: "Visit Live Site",
      githubUrl: "https://github.com/rmathew21/legacy-life-agency",
    },
    {
      id: 4,
      title: "Save Austin Parkway",
      category: "Edu Advocacy",
      image: saveApeImg2,
      description:
        "A community advocacy website built to help parents and neighbors rally support for Austin Parkway Elementary, providing updates, petitions, and tools to contact school board members and protect a local school from closure.",
      fullDescription:
        "SaveAPE.org is a grassroots community website built to help parents, teachers, and neighbors organize around the potential closure of Austin Parkway Elementary in Fort Bend ISD. The site provides clear information about proposed school closures, upcoming board meetings, and ways community members can take action, such as signing petitions, emailing trustees, and speaking at public hearings.",
      technologies: [
        "Squarespace",
        "Custom CSS",
        "Google Form Integration",
        "Change.org Petition Embed",
      ],
      //   results: [
      //     "200+ weekly online orders",
      //     "1,000+ loyalty members enrolled",
      //     "4.9/5 customer satisfaction",
      //   ],
      challenge:
        "The SaveAPE community needed a website on extremely short notice after Fort Bend ISD announced a proposed school closure with very little time before the board vote. Parents and neighbors needed a central place to get accurate information, sign petitions, submit feedback, and contact trustees. The site had to be built quickly, be easy for volunteers to update, and work perfectly on mobile devices.",
      solution:
        "I rapidly designed and launched SaveAPE.org using Squarespace to ensure a fast turnaround while still delivering a clean, professional site the community could trust. The site integrated Google Forms for feedback collection and Change.org petitions to coordinate grassroots advocacy efforts. I structured the layout around clear calls-to-action, mobile-friendly navigation, and easy-to-update content so volunteers could keep the community informed as deadline approached.",
      liveUrl: "https://www.saveape.org/",
      liveLabel: "Visit Live Site",
    },
    
    {
      id: 5,
      title: "Samuel CPA PLLC",
      category: "Finance",
      image: msacpaMockup2,
      description:
        "Complete redesign and rebuild of a CPA firm's outdated website into a modern, professional web presence using React, Vite, Tailwind CSS, and React Router.",
      fullDescription:
        "Samuel CPA PLLC is a Stafford, TX-based accounting firm that had been running on an aging website that no longer reflected the quality and professionalism of their services. This project involved a full ground-up rebuild — designing and developing a multi-page site with a clean, trustworthy aesthetic built around a custom forest green palette. The new site includes dedicated pages for Home, About, Services, Resources, and Contact, with features like a tax rate reference table, IRS publications grid, a record retention guide, and an FAQ accordion — giving clients genuinely useful tools alongside the firm's core information.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "FormSpree",
      ],
      // results: [
      //   "300% increase in online visibility",
      //   "Virtual consultations fully booked",
      //   "60% of visitors explore 5+ pages",
      // ],
      challenge:
        "The existing site was years old, visually outdated, and lacked both the modern UX and the informational depth that clients and prospects expect from a professional firm today. The goal was to modernize the brand presence without losing the trust and credibility the firm had built — while also adding real value through resource-rich content pages that go beyond a typical brochure site.",
      solution:
        "Built a fully responsive, multi-page React application using Vite for fast development and optimized builds, Tailwind CSS for a polished and consistent design system, and React Router DOM for seamless client-side navigation. The site features a sticky navbar with a mobile hamburger menu, smooth page transitions, and a suite of interactive resource tools. The result is a professional, fast-loading site that positions the firm credibly and gives clients practical tax and accounting resources at their fingertips.",
      liveUrl: "https://msacpas.com/",
      liveLabel: "Visit Live Site",
      githubUrl: "https://github.com/rmathew21/msacpas",
    },
    {
      id: 5,
      title: "Idili & Espresso",
      category: "Food",
      image: idiliEspressoMockup,
      description:
        "A vibrant restaurant website for a Colorado café blending South Indian and espresso culture, featuring a showcase of their fusion menu and integrated online ordering via Squarespace.",
      fullDescription:
        "Idili & Espresso is a Colorado-based café that brings together the warmth of South Indian comfort food and specialty espresso drinks in a uniquely inviting dining experience. The goal of this project was to build a modern, visually engaging web presence that reflects the café's personality — colorful, approachable, and rooted in cultural fusion. The site serves as both a digital storefront and a menu showcase, guiding visitors from first impression to online order with minimal friction. Online ordering is powered through Squarespace's ordering system, seamlessly linked from the site. The custom logo and favicons, designed in Canva and refined in Inkscape, give the brand a cohesive identity across all touchpoints.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Inkscape+Canva",
      ],
      // results: [
      //   "45% increase in new client bookings",
      //   "Gift card sales up 120%",
      //   "Perfect accessibility score",
      // ],
      challenge:
        "The client needed a website that could do a lot at once — communicate a distinct cultural identity, display a diverse fusion menu in an appetizing way, and funnel customers toward online ordering without requiring a full custom e-commerce build. There was also no existing brand identity to work from, meaning the visual design — including logo and favicon — had to be created from scratch to match the café's warm, cross-cultural personality.",
      solution:
        "Built with React, Vite, Tailwind CSS, and React Router DOM, the site is fast, fully responsive, and easy to navigate on any device. The menu is presented in a clean, categorized layout that highlights the café's fusion offerings without overwhelming visitors. Online ordering is handled through an embedded Squarespace integration, keeping the experience smooth while avoiding the complexity of a custom backend. The logo and favicons were designed in Canva and finalized in Inkscape, establishing a cohesive brand identity that carries through every page.",
      liveUrl: "https://idiliespresso.com/",
      liveLabel: "Visit Live Site",
      githubUrl: "https://github.com/rmathew21/idili-espresso",
    },
    {
      id: 6,
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
      liveUrl: "https://freeswing.app/",
      liveLabel: "Visit Live Site",
    },
    
    // {
    //   id: 6,
    //   title: "Sweets N' Treats",
    //   category: "Food",
    //   image: sweetTreatMockup,
    //   description:
    //     "Sweets N' Treats is a mobile-responsive website built for a local bakery to showcase custom cakes, cupcakes, cookies and a photo galleries while making it easy for customers to inquire and place orders online.",
    //   fullDescription:
    //     "Sweets N' Treats needed a clean, modern website to showcase their baked goods while building credibility for a growing local bakery brand. I designed and developed a mobile-responsive site that highlights their product offerings, photo gallery, and contact options, making it easy for customers to browse and submit inquiries. The website focuses on strong visual storytelling with optimized dessert images, clear navigation, and simple calls to action so customers can quickly explore products and place orders. Built with performance and usability in mind, the site loads quickly on mobile devices and provides a professional online presence that helps the bakery attract new customers and grow their business.",
    //   technologies: [
    //     "HTML5",
    //     "Bootstrap + Custom CSS",
    //     "JavaScript",
    //     "Responsive Mobile-First Design",
    //     "Image Optimization",
    //   ],
      // results: [
      //   "45% increase in new client bookings",
      //   "Gift card sales up 120%",
      //   "Perfect accessibility score",
      // ],
    //   challenge:
    //     "The bakery relied mainly on social media and word-of-mouth, making it difficult for customers to view their full menu, see photos of custom cakes, or easily contact them for orders. They needed a fast, affordable website that looked professional and worked well on mobile devices.",
    //   solution:
    //     "I created a visually appealing, mobile-responsive website that showcases their products, organizes galleries, and provides clear contact options for orders. The new site gives the bakery a professional online presence, improves customer trust, and makes it easier for customers to discover their desserts and place inquiries.",
    //   liveUrl: "https://www.sweetsntreatsbakery.com/",
    //   liveLabel: "Visit Live Site",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#C9A24D]/15 text-[#C9A24D] rounded-full mb-4">
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing our work with local businesses across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              // className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              className="group bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#334155] hover:bg-[#334155] transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[#C9A24D] text-black text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>
                <button className="inline-flex items-center text-[#C9A24D] font-semibold group-hover:text-[#e3b75a] transition-colors">
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

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-slate-500 text-sm tacking-wide">
            Want to see everything we've built?
          </p>
          <button
            onClick={() => navigate("/all-projects")}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#C9A24D]/40 bg-[#C9A24D]/10 text-[#C9A24D] font-semibold text-base hover:bg-[#C9A24D]/20 hover:border-[#C9A24D]/70 hover:shadow-lg hover:shadow-[#C9A24D]/10 transition-all duration-300"
          >
            View All Projects
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1.transition-transform duration-300"
            />
          </button>
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

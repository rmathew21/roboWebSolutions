import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectModal } from "@/components/ProjectModal";
import legacyMockUp from "../assets/legacyLifeMockup.png";
import saveApeImg2 from "../assets/saveApeMockup2.png";
import freeSwingMockup from "../assets/freeSwingMockup.png";
import nexGenMockup from "../assets/nexGenMockup.png";
import sweetTreatMockup from "../assets/sweetNTreatsMockup.png";
import msacpaMockup from "../assets/msacpaMockup.png";
import palmIndiaMockup from "../assets/palmIndiaMockup.png";
import idiliEspressoMockup from '../assets/idiliEspressoMockup.png';

const ALL_PROJECTS = [
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
    liveUrl: "https://www.legacylifeagency.net/",
    liveLabel: "Visit Live Site",
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
    id: 3,
    title: "Samuel CPA PLLC",
    category: "Finance",
    image: msacpaMockup,
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
    liveUrl: "https://msacpas.vercel.app/",
    liveLabel: "Visit Live Site",
  },
  {
    id: 4,
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
  {
    id: 5,
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
      "I created a modern, responsive website with clear service sections, strong branding,a nd optimized contact flows to convert visitors into leads.",
    liveUrl: "https://www.nexgenprosol.com/",
    liveLabel: "Visit Live Site",
  },
  {
    id: 6,
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
    liveUrl: "https://idili-espresso.vercel.app/",
    liveLabel: "Visit Live Site",
  },
  {
    id: 7,
    title: "Palm India Restaurant",
    category: "Food",
    image: palmIndiaMockup,
    description:
      "Restaurant website rebuild for Palm India, an Indian restaurant in Carrollton, TX. Replaced a broken, non-mobile-friendly site with a clean, responsive layout featuring a photo carousel, menu pages, and optimized imagery.",
    fullDescription:
      "Palm India Restaurant is an Indian dining spot in Carrollton, TX serving dine-in, takeaway, and delivery. Their existing website had become a liability — broken images and zero mobile responsiveness were turning away potential customers before they ever walked through the door. I rebuilt the site from the ground up using HTML, Bootstrap, and custom CSS, delivering a polished multi-page experience with a homepage carousel, a featured dishes section, a full menu page, and a contact page with location and social links.",
    technologies: [
      "HTML5",
      "Bootstrap + Custom CSS",
      "JavaScript",
      "Responsive Mobile-First Design",
      "Image Optimization",
    ],
    // results: [
    //   "45% increase in new client bookings",
    //   "Gift card sales up 120%",
    //   "Perfect accessibility score",
    // ],
    challenge:
      "The client's former website had deteriorated over time — images were broken throughout the site and the layout had no mobile support, making it effectively unusable on phones. On top of that, many of the restaurant's own food photos were large, unoptimized files that would have hurt load times even after the rebuild.",
    solution:
      "I rebuilt the site from scratch using HTML, Bootstrap, and custom CSS, creating a responsive multi-page layout that works cleanly on all screen sizes. I worked with the client to source and organize their food and ambiance photography, then optimized all images for the web to keep load times fast. The result is a professional, mobile-friendly site the client can confidently share with customers, complete with their menu, contact info, social links, and Google/Yelp review integrations.",
    liveUrl: "https://restaurant-palm-india.vercel.app/",
    liveLabel: "Visit Live Site",
  },
  {
    id: 8,
    title: "Sweets N' Treats",
    category: "Food",
    image: sweetTreatMockup,
    description:
      "Sweets N' Treats is a mobile-responsive website built for a local bakery to showcase custom cakes, cupcakes, cookies and a photo galleries while making it easy for customers to inquire and place orders online.",
    fullDescription:
      "Sweets N' Treats needed a clean, modern website to showcase their baked goods while building credibility for a growing local bakery brand. I designed and developed a mobile-responsive site that highlights their product offerings, photo gallery, and contact options, making it easy for customers to browse and submit inquiries. The website focuses on strong visual storytelling with optimized dessert images, clear navigation, and simple calls to action so customers can quickly explore products and place orders. Built with performance and usability in mind, the site loads quickly on mobile devices and provides a professional online presence that helps the bakery attract new customers and grow their business.",
    technologies: [
      "HTML5",
      "Bootstrap + Custom CSS",
      "JavaScript",
      "Responsive Mobile-First Design",
      "Image Optimization",
    ],
    // results: [
    //   "45% increase in new client bookings",
    //   "Gift card sales up 120%",
    //   "Perfect accessibility score",
    // ],
    challenge:
      "The bakery relied mainly on social media and word-of-mouth, making it difficult for customers to view their full menu, see photos of custom cakes, or easily contact them for orders. They needed a fast, affordable website that looked professional and worked well on mobile devices.",
    solution:
      "I created a visually appealing, mobile-responsive website that showcases their products, organizes galleries, and provides clear contact options for orders. The new site gives the bakery a professional online presence, improves customer trust, and makes it easier for customers to discover their desserts and place inquiries.",
    liveUrl: "https://www.sweetsntreatsbakery.com/",
    liveLabel: "Visit Live Site",
  },
];

const CATEGORIES = [
  "All",
  ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category))),
];

export default function AllProjects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = ALL_PROJECTS.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
    
            .ap-root {
              font-family: 'DM Sans', 'Inter', sans-serif;
              background: #0F172A;
              color: #cbd5e1;
              min-height: 100vh;
            }
    
            .ap-grid-bg {
              background-image:
                linear-gradient(rgba(201,162,77,0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,162,77,0.025) 1px, transparent 1px);
              background-size: 52px 52px;
            }
    
            .ap-card {
              background: #1E293B;
              border: 1px solid #334155;
              border-radius: 16px;
              overflow: hidden;
              cursor: pointer;
              transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
            }
    
            .ap-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,162,77,0.2);
              border-color: rgba(201,162,77,0.3);
              background: #243044;
            }
    
            .ap-card:hover .ap-card-img {
              transform: scale(1.06);
            }
    
            .ap-card-img {
              transition: transform 0.5s ease;
            }
    
            .ap-cat-btn {
              font-family: 'DM Mono', monospace;
              font-size: 11px;
              letter-spacing: 0.08em;
              padding: 6px 14px;
              border-radius: 20px;
              border: 1px solid #334155;
              background: transparent;
              color: #64748b;
              cursor: pointer;
              transition: all 0.2s ease;
            }
    
            .ap-cat-btn:hover {
              border-color: rgba(201,162,77,0.4);
              color: #C9A24D;
            }
    
            .ap-cat-btn.active {
              background: rgba(201,162,77,0.12);
              border-color: rgba(201,162,77,0.5);
              color: #C9A24D;
            }
    
            .ap-search-wrap {
              position: relative;
            }
    
            .ap-search-wrap input {
              background: rgba(30,41,59,0.8);
              border: 1px solid #334155;
              border-radius: 10px;
              padding: 10px 16px 10px 40px;
              font-size: 13px;
              color: #cbd5e1;
              outline: none;
              transition: border-color 0.2s ease;
              width: 220px;
            }
    
            .ap-search-wrap input:focus {
              border-color: rgba(201,162,77,0.5);
            }
    
            .ap-search-wrap input::placeholder {
              color: #475569;
            }
    
            .ap-search-wrap .search-icon {
              position: absolute;
              left: 12px;
              top: 50%;
              transform: translateY(-50%);
              color: #475569;
              pointer-events: none;
            }
    
            .ap-back-btn {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              font-family: 'DM Mono', monospace;
              font-size: 11px;
              letter-spacing: 0.08em;
              color: #64748b;
              background: transparent;
              border: 1px solid #334155;
              border-radius: 8px;
              padding: 8px 16px;
              cursor: pointer;
              transition: all 0.2s ease;
              text-decoration: none;
            }
    
            .ap-back-btn:hover {
              color: #C9A24D;
              border-color: rgba(201,162,77,0.4);
            }
    
            .ap-view-btn {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              font-size: 13px;
              font-weight: 600;
              color: #C9A24D;
              transition: color 0.2s ease, gap 0.2s ease;
            }
    
            .ap-card:hover .ap-view-btn {
              color: #e3b75a;
              gap: 10px;
            }
    
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(24px); }
              to   { opacity: 1; transform: translateY(0); }
            }
    
            .ap-fade-up {
              opacity: 0;
              animation: fadeUp 0.55s ease forwards;
            }
    
            .ap-fade-up-1 { animation-delay: 0.05s; }
            .ap-fade-up-2 { animation-delay: 0.12s; }
            .ap-fade-up-3 { animation-delay: 0.19s; }
    
            .ap-empty {
              text-align: center;
              padding: 80px 20px;
              color: #475569;
            }
    
            @media (max-width: 640px) {
              .ap-header-row {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 16px !important;
              }
              .ap-search-wrap input {
                width: 100% !important;
              }
            }
          `}</style>

      <div className="ap-root ap-grid-bg">
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 24px 100px",
          }}
        >
          {/* ── Back button ── */}
          <div className="ap-fade-up ap-fade-up-1" style={{ marginBottom: 48 }}>
            <button className="ap-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={13} />
              Back
            </button>
          </div>

          {/* ── Hero header ── */}
          <div className="ap-fade-up ap-fade-up-1" style={{ marginBottom: 52 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                color: "#C9A24D",
                letterSpacing: "0.18em",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "#C9A24D",
                  boxShadow: "0 0 8px #C9A24D66",
                  display: "inline-block",
                }}
              />
              PORTFOLIO
            </div>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                fontWeight: 800,
                color: "#f1f5f9",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                marginBottom: 16,
              }}
            >
              All Projects
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "#64748b",
                maxWidth: 480,
                lineHeight: 1.8,
              }}
            >
              Every project we've shipped — browse by category or search by
              name.
            </p>
          </div>

          {/* ── Filters row ── */}
          <div
            className="ap-fade-up ap-fade-up-2 ap-header-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              marginBottom: 40,
              flexWrap: "wrap",
            }}
          >
            {/* Category filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`ap-cat-btn ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="ap-search-wrap">
              <Search size={14} className="search-icon" />
              <input
                type="text"
                placeholder="Search projects…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* ── Count line ── */}
          <div
            className="ap-fade-up ap-fade-up-2"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#475569",
              letterSpacing: "0.06em",
              marginBottom: 28,
              paddingBottom: 20,
              borderBottom: "1px solid rgba(201,162,77,0.08)",
            }}
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
            {searchQuery ? ` matching "${searchQuery}"` : ""}
          </div>

          {/* ── Grid ── */}
          {filtered.length === 0 ? (
            <div className="ap-empty">
              <X size={32} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
              <p style={{ fontSize: 14 }}>No projects match your filters.</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 28,
              }}
            >
              {filtered.map((project, i) => (
                <div
                  key={project.id}
                  className={`ap-card ap-fade-up ap-fade-up-${(i % 3) + 1}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: 220,
                      overflow: "hidden",
                      background: "#0f172a",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="ap-card-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 55%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        right: 16,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          background: "rgba(201,162,77,0.15)",
                          border: "1px solid rgba(201,162,77,0.4)",
                          color: "#C9A24D",
                          padding: "3px 10px",
                          borderRadius: 20,
                          display: "inline-block",
                          marginBottom: 8,
                        }}
                      >
                        {project.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: 19,
                          fontWeight: 700,
                          color: "#f1f5f9",
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "20px 24px 24px" }}>
                    <p
                      style={{
                        fontSize: 13.5,
                        color: "#94a3b8",
                        lineHeight: 1.75,
                        marginBottom: 20,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginBottom: 20,
                      }}
                    >
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 10,
                            letterSpacing: "0.04em",
                            padding: "3px 9px",
                            background: "rgba(51,65,85,0.6)",
                            border: "1px solid #334155",
                            color: "#64748b",
                            borderRadius: 6,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 10,
                            color: "#475569",
                            padding: "3px 9px",
                          }}
                        >
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div
                      className="ap-view-btn"
                      style={{
                        borderTop: "1px solid rgba(51,65,85,0.6)",
                        paddingTop: 16,
                      }}
                    >
                      View Details
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

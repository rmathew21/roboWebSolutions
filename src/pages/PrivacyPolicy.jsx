import React, { useState } from 'react';
import { handleSectionClick } from '@/lib/utils';

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "who-we-are",
      number: "01",
      title: "Who We Are",
      content: `Robo Web Solutions is a locally operated, front-end web development business serving the Houston, Texas area. We design and build websites for individuals and businesses in the community. \n\nIf you have any questions about this policy, please see the contact information at the bottom of this page.`,
    },
    {
      id: "information-we-collect",
      number: "02",
      title: "Information We Collect",
      content: `We only collect personal information that you voluntarily provide to us. This occurs when you fill out the contact form on our website. The information you submit may include:\n\n· Your name\n· Your email address\n· Your phone number (if provided\n· The message or inquiry you submit\n· Any other details you choose to include in your message\n\nWe do not collect any sensitive personal information (such as financial details, Social Security numbers, or health information) through our website.`,
    },
    {
      id: "how-we-use",
      number: "03",
      title: "How We Use Your Information",
      content: `The information you submit through our contact form is used solely to:\n\n· Respond to your inquiry or request\n· Communicate with you about potential or ongoing projects\n· Provide the web development services you ask about\n\nWe will not use your information to send unsolicited marketing emails or add you to any mailing lists without your explicit consent.`,
    },
    {
      id: "storage-protection",
      number: "04",
      title: "How We Store & Protect Your Information",
      content: `Contact form submissions are received by email or through a third-party form processing service. We take reasonable precautions to protect the information you send us, including limiting access to authorized personnel only.\n\nHowever, please be aware that no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee aboslute security.`,
    },
    {
      id: "third-party",
      number: "05",
      title: "Third-Party Services",
      content: `Our website may use third-party tools to process contact form submissions (such as a form hosting or email delivery provider). These third parties only receive the information necessary to fulfill their function and are not permitted to use your data for other purposes.\n\nWe do not sell, trade, rent, or otherwise share your personal information with third parties for their marketing purposes.`,
    },
    {
      id: "cookies",
      number: "06",
      title: "Cookies & Tracking",
      content: `Our website does not currently use cookies for tracking or analytics purposes beyond any that may be set automatically by your browser or by the hosting platform. We do not use advertising cookies or build behavioral profiles of our visitors.\n\If this changes in the future, we will update this policy accordingly.`,
    },
    {
      id: "children-privacy",
      number: "07",
      title: "Children's Privacy",
      content: `Our website is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has submitted information to us, please contact us and will promptly delete it.`,
    },
    {
      id: "your-rights",
      number: "08",
      title: "Your Rights",
      content: `You have the right to:\n\n· Request access to the personal information we hold about you\n· Request correction of any inaccurate information\n· Request deletion of your personal information\n\nTo exercise any of these rights, please contact us using the information below. We will respond to your request within a reasonable timeframe.`,
    },
    {
      id: "changes",
      number: "09",
      title: "Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. When we do, we will udpate the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. \n\nYour continued use of our website after any changes constitutes your acceptance of the updated policy.`,
    },
    {
      id: "contact-us",
      number: "10",
      title: "Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please reach out to us. \n\nRobo Web Solutions\nHouston, Texas Area\nWebsite: https://www.robowebsolutions.com/`,
    },
  ];

  const [activeSection, setActiveSection] = React.useState(null);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .pp-root * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #080c10; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d1117; }
        ::-webkit-scrollbar-thumb { background: #00e5ff44; border-radius: 2px; }

        .pp-section {
          transition: all 0.3s ease;
          cursor: default;
        }

        .pp-section:hover {
          background: rgba(0, 229, 255, 0.04) !important;
        }

        .pp-section.active {
          background: rgba(0, 229, 255, 0.07) !important;
          border-color: rgba(0, 229, 255, 0.35) !important;
        }

        .nav-link {
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .nav-link:hover {
          color: #00e5ff !important;
          padding-left: 8px !important;
        }

        .nav-link.active-nav {
          color: #00e5ff !important;
          padding-left: 6px !important;
        }

        .section-number {
          transition: color 0.3s ease;
        }

        .pp-section:hover .section-number,
        .pp-section.active .section-number {
          color: #00e5ff !important;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease forwards;
        }

        .animate-in-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .animate-in-delay-2 { animation-delay: 0.2s; opacity: 0; }
        .animate-in-delay-3 { animation-delay: 0.3s; opacity: 0; }

        @media (max-width: 768px) {
          .pp-layout {
            grid-template-columns: 1fr !important;
          }
          .pp-sidebar {
            display: none;
          }
          .pp-main {
            padding: 80px 20px 60px !important;
            padding-top: 120px !important;
          }
          .pp-hero-title {
            font-size: 36px !important;
          }
          .pp-hero-meta {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .pp-meta-divider {
            width: 100% !important;
            height: 1px !important;
          }
          .pp-section {
            padding: 20px 16px !important;
          }
          .pp-footer-banner-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

      <div style={styles.layout} className="grid-bg pp-root pp-layout">
        {/* Sidebar */}
        <aside style={styles.sidebar} className="pp-sidebar">
          <div style={styles.sidebarSticky}>
            <p style={styles.sidebarLabel}>Sections</p>
            <nav style={styles.navList}>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`nav-link ${activeSection === s.id ? "active-nav" : ""}`}
                  style={styles.navItem}
                  onClick={(e) => {
                    handleSectionClick(e, s.id);
                    setActiveSection(s.id);
                  }}
                >
                  <span style={styles.navNumber}>{s.number}</span>
                  <span style={styles.navTitle}>{s.title}</span>
                </a>
              ))}
            </nav>

            <div style={styles.sidebarFooter}>
              <div style={styles.sidebarDivider} />
              <p style={styles.sidebarNote}>
                Questions? Contact us at{" "}
                <span style={{ color: "#00e5ff" }}>robowebsolutions.com</span>
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main style={styles.main} className="pp-main">
          {/* Hero */}
          <div style={styles.hero} className="animate-in">
            <div style={styles.heroEyebrow}>
              <span style={styles.eyebrowDot} />
              LEGAL DOCUMENT
            </div>
            <h1 style={styles.heroTitle} className="pp-hero-title">
              Privacy Policy
            </h1>
            <p style={styles.heroSubtitle}>
              This Privacy Policy explains how Robo Web Solutions collects, uses,
              and protects information submitted through our website. Please read
              it carefully.
            </p>
            <div style={styles.heroMeta} className="pp-hero-meta">
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Effective Date</span>
                <span style={styles.metaValue}>March 5, 2026</span>
              </div>
              <div style={styles.metaDivider} className="pp-meta-divider" />
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Jurisdiction</span>
                <span style={styles.metaValue}>Texas, USA</span>
              </div>
              <div style={styles.metaDivider} />
              <div style={styles.metaItem}>
                <span style={styles.metaLabel}>Sections</span>
                <span style={styles.metaValue}>10</span>
              </div>
            </div>
          </div>

          {/* Intro card */}
          <div style={styles.introCard} className="animate-in animate-in-delay-1">
            <div style={styles.introCardAccent} />
            <p style={styles.introCardText}>
              <span style={{ color: "#e8edf5", fontWeight: 500 }}>Your privacy matters to us.</span>{" "}
              By using our website at{" "}
              <a href="https://www.robowebsolutions.com/" style={{ color: "#00e5ff" }}>
                robowebsolutions.com
              </a>
              , you agree to the practices described in this policy.
            </p>
          </div>

          {/* Sections */}
          <div style={styles.sectionWrapper}>
            {sections.map((section, i) => (
              <div
                key={section.id}
                id={section.id}
                className={`pp-section animate-in animate-in-delay-${Math.min((i % 3) + 1, 3)} ${
                  activeSection === section.id ? "active" : ""
                }`}
                style={styles.section}
                onClick={() =>
                  setActiveSection(section.id === activeSection ? null : section.id)
                }
              >
                <div style={styles.sectionHeader}>
                  <span className="section-number" style={styles.sectionNumber}>
                    {section.number}
                  </span>
                  <h2 style={styles.sectionTitle}>{section.title}</h2>
                </div>
                <div style={styles.sectionBody}>
                  {section.content.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      style={{
                        ...styles.para,
                        marginBottom:
                          j < section.content.split("\n\n").length - 1 ? "14px" : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer banner */}
          <div style={styles.footerBanner}>
            <div style={styles.footerBannerInner} className="pp-footer-banner-inner">
              <div>
                <p style={styles.footerBannerTitle}>Have questions about this policy?</p>
                <p style={styles.footerBannerSub}>
                  We're happy to clarify how we handle your information.
                </p>
              </div>
              <a href="https://www.robowebsolutions.com/" style={styles.contactBtn}>
                Visit Our Website →
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#080c10",
    color: "#c8d0dc",
    minHeight: "100vh",
  },
  layout: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    gap: 0,
    minHeight: "100vh",
  },
  sidebar: {
    borderRight: "1px solid rgba(0,229,255,0.07)",
    padding: "36px 0",
    paddingTop: "120px",
  },
  sidebarSticky: {
    position: "sticky",
    top: 90,
  },
  sidebarLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 9,
    color: "#445",
    letterSpacing: "0.18em",
    padding: "0 24px",
    marginBottom: 16,
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "7px 24px",
    fontSize: 12,
    color: "#667",
    fontWeight: 400,
    transition: "all 0.2s ease",
    letterSpacing: "0.01em",
  },
  navNumber: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    color: "#334",
    minWidth: 20,
  },
  navTitle: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  sidebarFooter: {
    padding: "0 24px",
    marginTop: 32,
  },
  sidebarDivider: {
    height: 1,
    background: "rgba(0,229,255,0.07)",
    marginBottom: 16,
  },
  sidebarNote: {
    fontSize: 11,
    color: "#445",
    lineHeight: 1.7,
  },
  main: {
    padding: "48px 52px 80px",
    paddingTop: "120px",
  },
  hero: {
    marginBottom: 40,
  },
  heroEyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    color: "#00e5ff",
    letterSpacing: "0.18em",
    marginBottom: 16,
  },
  eyebrowDot: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: "#00e5ff",
    boxShadow: "0 0 8px #00e5ff",
    display: "inline-block",
  },
  heroTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 52,
    fontWeight: 800,
    color: "#e8edf5",
    letterSpacing: "-0.02em",
    lineHeight: 1,
    marginBottom: 20,
  },
  heroSubtitle: {
    fontSize: 15,
    color: "#778",
    lineHeight: 1.8,
    maxWidth: 580,
    marginBottom: 32,
  },
  heroMeta: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "18px 24px",
    background: "rgba(0,229,255,0.03)",
    border: "1px solid rgba(0,229,255,0.1)",
    borderRadius: 10,
    width: "fit-content",
  },
  metaItem: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  metaLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 9,
    color: "#445",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  metaValue: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    color: "#aab",
  },
  metaDivider: {
    width: 1,
    height: 28,
    background: "rgba(0,229,255,0.1)",
  },
  introCard: {
    position: "relative",
    overflow: "hidden",
    padding: "20px 24px 20px 28px",
    background: "rgba(0,229,255,0.04)",
    border: "1px solid rgba(0,229,255,0.15)",
    borderRadius: 10,
    marginBottom: 32,
  },
  introCardAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    background: "linear-gradient(180deg, #00e5ff, rgba(0,229,255,0.2))",
    borderRadius: "10px 0 0 10px",
  },
  introCardText: {
    fontSize: 13.5,
    lineHeight: 1.85,
    color: "#778",
  },
  sectionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  section: {
    padding: "28px 32px",
    border: "1px solid rgba(255,255,255,0.04)",
    borderRadius: 10,
    background: "rgba(255,255,255,0.01)",
    transition: "all 0.3s ease",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 16,
  },
  sectionNumber: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    color: "#334",
    marginTop: 4,
    minWidth: 24,
    transition: "color 0.3s ease",
  },
  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 20,
    fontWeight: 700,
    color: "#d8e0ec",
    letterSpacing: "-0.01em",
  },
  sectionBody: {
    paddingLeft: 40,
  },
  para: {
    fontSize: 13.5,
    lineHeight: 1.85,
    color: "#778",
    whiteSpace: "pre-line",
  },
  footerBanner: {
    marginTop: 52,
    padding: "28px 32px",
    background: "rgba(0,229,255,0.04)",
    border: "1px solid rgba(0,229,255,0.15)",
    borderRadius: 12,
  },
  footerBannerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  },
  footerBannerTitle: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 16,
    color: "#d8e0ec",
    marginBottom: 4,
  },
  footerBannerSub: {
    fontSize: 13,
    color: "#556",
  },
  contactBtn: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    color: "#00e5ff",
    background: "rgba(0,229,255,0.08)",
    border: "1px solid rgba(0,229,255,0.25)",
    padding: "10px 20px",
    borderRadius: 7,
    textDecoration: "none",
    letterSpacing: "0.04em",
    transition: "all 0.2s ease",
    whiteSpace: "nowrap",
  },
};
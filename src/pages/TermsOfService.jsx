import { handleSectionClick } from "@/lib/utils";
import { useState } from "react"

const sections = [
    {
        id: "acceptance",
        number: "01",
        title: "Acceptance of Terms",
        content: `By accessing or using any services provided by Robo Web Solutions ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service
        ("Terms"). If you do not agree to these Terms, please do not use our services.
        
        These Terms apply to all visitors, users, and others who access or use our website, products, or services. We reserve the
        right to update or modify these Terms at any time without prior notice. Your continued use of our services following any changes constitutes your acceptance of the
        revised Terms.`,
    },
    {
        id: "services",
        number: "02",
        title: "Services Provided",
        content: `Robo Web Solutions offers web design, development, automation, and digital solutions for businesses and individuals. Our services may include but are limited
        to:
        

        • Custom website design and development
        • Web application development and maintenance
        • Robotic process automation (RPA) integrations
        • SEO and digital marketing services
        • Cloud hosting and managed infrastructure
        • API development and third-party integrations

        We reserve the rights to modify, suspend, or discontinue any service at any time with or without notice.`,
    },
    {
        id: "accounts",
        number: "03",
        title: "User Accounts",
        content: `To access certain features of our services, you may be required to create an account. You are responsible for:
        
        • Maintaining the confidentiality of your account credentials
        • All activites that occur under your account
        • Notifying us immediately of any unauthorized access or security breach
        
        You must provide accurate, current, and complete information during registration. Robo Web Solutions reserves the right to
        suspend or terminate accounts that violate these Terms or are found to contain false information.`,
    },
    {
        id: "intellectual",
        number: "04",
        title: "Intellectual Property",
        content: `All content, designs, code, graphics, logos, and materials created by Robo Web Solutions remain the exclusive property of the Company
        unless explicitly transferred in writing via a separate agreement.
        
        Upon full payment for a project, clients receive a license to use the delivered work for its intended purpose. Source files and underlying frameworks
        remain the property of Robo Web Solutions unless otherwise negotiated. You may not reproduce, distribute, or create derivative works without our express
        written consent.`,
    },
    {
        id: "payments",
        number: "05",
        title: "Payments & Billing",
        content: `Payment terms are outlined in individual project agreements or service contracts. General conditions include:
        
        • Invoices are due within 30 days of issuance unless otherwise agreed
        • Late payments may incur a fee of 1.5% per month on outstanding balances
        • Robo Web Solutions reserves the right to suspend services for overdue projects
        • Refunds are issued at our discretion and in accordance with project agreements
        
        All prices are listed in USD unless otherwise specified. Applicable taxes are the responsibility of the client.`,
    },
    {
        id: "privacy",
        number: "06",
        title: "Privacy & Data",
        content: `Your privacy is important to us. Our Privacy Policy, incorporated into these Terms by reference, explain how we collect, use,
        and protect your personal information.
        
        By using our services, you consent to the collection and use of your data as described in our Privacy Policy. We implement industry-standard
        security measures to protect your data, but cannot guarantee aboslute security. You are responsible for ensuring that data you share with us
        complies with applicable laws and regulations.`,
    },
    {
        id: "liability",
        number: "07",
        title: "Limitation of Liability",
        content: `To the fullest extent permitted by law, Robo Web Solutions shall not be liable for any indirect, incidental, special, consequential,
        or punitive damages arising from:
        
        • Your use or inability to use our services
        • Unauthorized access to our alteration of your data
        • Errors, interruptions, or delays in service
        • Any third-party content or services accessed through our platform
        
        Our total liability to you for any claim shall not exceed the total amount paid by you to Robo Web Solutions in the three (3) months proceeding
        the claim.`,
    },
    {
        id: "termination",
        number: "08",
        title: "Termination",
        content: `Either party may terminate a service agreement with written notice as outlined in the specific project contract. Robo Web Solutions
        may immediately terminate or suspend access if:
        
        • You breach any provision of these Terms
        • We are required to do so by law
        • We determine the action is necessary to protect the integrity of our services
        
        Upon termination, your right to use our services ceases imeediately. Provisions related to intellectual property, payment, and limitation of liability
        survive termination.`,
    },
    {
        id: "governing",
        number: "09",
        title: "Governing Law",
        content: `These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles.
        
        Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the American Arbitration Association 
        rules. You waive your right to participate in any class-action lawsuit or class-wide arbitration. If arbitration is found inapplicable, disputes shall be resolved
        in the courts of Texas.`,
    },
    {
        id: "contract",
        number: "10",
        title: "Contact Us",
        content: `If you have any quesitons, concerns, or requests regarding these Terms of Services, please contact us:
        
        Robo Web Solutions
        Legal Department
        Email: rob@robowebsolutions.com
        
        We aim to respond to all inquiries within 2-3 business days. For urgent legal matters, please indicate "URGENT" in your subject line.`,
    },
];
export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <div style={StyleSheet.page}>
            <style>{`
             @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

            //  * { box-sizing: border-box; margin: 0; padding: 0; }
            .tos-root * { box-sizing: border-box; margin: 0; padding: 0; }

             body { background: #080c10; }

             ::-webkit-scrollbar { width: 4px; }
             ::-webkit-scrollbar-track { background: #0d1117; }
             ::-webkit-scrollbar-thumb { background: #00e5f44; border-radius: 2px }
            
             

             .tos-section {
                transition: all 0.3s ease;
                cursor: default;
             }

             .tos-section:hover {
                background: rgba(0, 229, 255, 0.04) !important;
              }
      
              .tos-section.active {
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
      
              .tos-section:hover .section-number,
              .tos-section.active .section-number {
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
                .tos-layout {
                    grid-template-columns: 1fr !important;
                }
                .tos-sidebar {
                    display: none;
                }
                .tos-main {
                    padding: 80px 20px 60px !important;
                    padding-top: 120px !important;
                  }
                  .tos-hero-title {
                    font-size: 36px !important;
                  }
                  .tos-hero-meta {
                    flex-direction: column !important;
                    gap: 12px !important;
                  }
                  .tos-meta-divider {
                    width: 100% !important;
                    height: 1px !important;
                  }
                  .tos-section {
                    padding: 20px 16px !important;
                  }
                  .tos-footer-banner-inner {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
            }
            `}
            </style>
            
            {/* <header style={styles.header}>
                <div style={styles.headerInner}>
                    <div style={styles.logo}>
                        <div style={styles.logoIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" stroke="#00e5ff" strokeWidth="1.5"/>
                                <rect x="8" y="13" width="8" height="7" rx="2" stroke="#00e5ff" strokeWidth="1.5"/>
                                <path d="M5 16h2M17 16h2" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round"/>
                                <circle cx="10" cy="8" r="1" fill="#00e5ff"/>
                                <circle cx="14" cy="8" r="1" fill="#00e5ff"/>
                            </svg>
                        </div>
                        <div>
                            <div style={styles.logoName}>Robo Web Solutions</div>
                            <div style={styles.logoTag}>TERMS OF SERVICE</div>
                        </div>
                    </div>
                    <div style={styles.headerMeta}>
                        <span style={styles.metaBadge}>v2.1</span>
                        <span style={styles.metaDate}>Effective: January 1, 2026</span>
                    </div>
                </div>
            </header> */}
            
            <div style={styles.layout} className="grid-bg tos-root tos-layout">
              <aside style={styles.sidebar} className="tos-sidebar">
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
                                Questions? Contact our legal team at {" "}
                                <span style={{ color: "#00e5ff" }}>legal@robowebsolutions.com</span>
                            </p>
                        </div>
                    </div>
              </aside>

              <main style={styles.main} className="tos-main">
                    <div style={styles.hero} className="animate-in">
                        <div style={styles.heroEyebrow}>
                            <span style={styles.eyebrowDot} />
                                LEGAL DOCUMENT
                        </div>  
                        <h1 style={styles.heroTitle} className="tos-hero-title">Terms of Service</h1>
                        <p style={styles.heroSubtitle}>
                            Please read these terms carefully before using Robo Web Solutions' services.
                            These terms govern your use of our platform, products, and professional services.
                        </p>
                        <div style={styles.heroMeta} className="tos-hero-meta">
                            <div style={styles.metaItem}>
                                <span style={styles.metaLabel}>Last Updated</span>
                                <span style={styles.metaValue}>March 6, 2026</span>
                            </div>
                            <div style={styles.metaDivider} className="tos-meta-divider" />
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

                    <div style={styles.sectionWrapper}>
                        {sections.map((section, i) => (
                            <div
                                key={section.id} 
                                id={section.id} 
                                className={`tos-section animate-in animate-in-delay-${Math.min(i % 3 + 1, 3)} ${activeSection === section.id ? "active" : ""}`}
                                style={styles.section}
                                onClick={() => setActiveSection(section.id === activeSection ? null : section.id)}
                            >
                                <div style={styles.sectionHeader}>
                                    <span className="section-number" style={styles.sectionNumber}>{section.number}</span>
                                    <h2 style={styles.sectionTitle}>{section.title}</h2>
                                </div>
                                <div style={styles.sectionBody}>
                                    {section.content.split("\n\n").map((para, j) => (
                                        <p key={j} style={{
                                            ...styles.para,
                                            marginBottom: j < section.content.split("\n\n").length - 1 ? "14px" : 0,
                                        }}>
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={styles.footerBanner}>
                        <div style={styles.footerBannerInner} className="tos-footer-banner-inner">
                            <div>
                                <p style={styles.footerBannerTitle}>Have questions about these terms?</p>
                                <p style={styles.footerBannerSub}>Our legal team is here to help clarify anything.</p>
                            </div>
                            <a href="mailto:legal@robowebsolutions.com" style={styles.contactBtn}>
                                Contact Legal Team →
                            </a>
                        </div>
                    </div>
                    {/* <footer style={styles.footer}>
                        <p>©2026 Robo Web Solutions. All rights reserved.</p>
                        <p style={{ marginTop: 4, color: "#334" }}>
                            These terms were last revised on January 1, 2026.
                        </p>
                    </footer> */}
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
    header: {
      borderBottom: "1px solid rgba(0,229,255,0.1)",
      background: "rgba(8,12,16,0.95)",
      backdropFilter: "blur(12px)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    headerInner: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "14px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    logoIcon: {
      width: 42,
      height: 42,
      borderRadius: 10,
      background: "rgba(0,229,255,0.07)",
      border: "1px solid rgba(0,229,255,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoName: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: "#e8edf5",
      letterSpacing: "0.01em",
    },
    logoTag: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 9,
      color: "#00e5ff",
      letterSpacing: "0.15em",
      marginTop: 1,
    },
    headerMeta: {
      display: "flex",
      alignItems: "center",
      gap: 14,
    },
    metaBadge: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      color: "#00e5ff",
      background: "rgba(0,229,255,0.08)",
      border: "1px solid rgba(0,229,255,0.2)",
      padding: "3px 9px",
      borderRadius: 4,
      letterSpacing: "0.08em",
    },
    metaDate: {
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      color: "#556",
      letterSpacing: "0.04em",
    },
    layout: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      gap: 0,
      minHeight: "calc(100vh - 70px)",
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
      marginBottom: 56,
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
    sectionsWrapper: {
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
    footer: {
      marginTop: 40,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.05)",
      fontFamily: "'DM Mono', monospace",
      fontSize: 11,
      color: "#445",
      letterSpacing: "0.04em",
    },
    
    
    
  };

 
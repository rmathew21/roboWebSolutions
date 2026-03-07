export default function PrivacyPolicy() {
  return (
    <>
      <style>
        {`
                .pp-root {
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 300;
                    line-height: 1.75;
                    font-size: 17px;
                    background: #f5f3ee;
                    color: #1a1a1a;
                    min-height: 100vh;
                }

                .pp-header {
                    background: #1a1a1a;
                    color: #fff;
                    padding: 3.5rem 2rem 3rem;
                    text-align: center;
                }

                .pp-eyebrow {
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #93c5fd;
                    margin-bottom: 0.75rem;
                  }
          
                  .pp-title {
                    font-family: 'DM Serif Display', serif;
                    font-size: clamp(2.2rem, 5vw, 3.4rem);
                    font-weight: 400;
                    line-height: 1.1;
                    letter-spacing: -0.01em;
                    margin: 0;
                  }
          
                  .pp-meta {
                    margin-top: 1.25rem;
                    font-size: 0.85rem;
                    color: #9ca3af;
                  }
          
                  .pp-main {
                    max-width: 780px;
                    margin: 0 auto;
                    padding: 4rem 1.5rem 6rem;
                  }
          
                  .pp-intro-card {
                    background: #1d4ed8;
                    color: #fff;
                    border-radius: 12px;
                    padding: 2rem 2.25rem;
                    margin-bottom: 3.5rem;
                    font-size: 0.97rem;
                    line-height: 1.7;
                  }
          
                  .pp-intro-card a {
                    color: #bfdbfe;
                  }
          
                  .pp-section {
                    margin-bottom: 3rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid #d1cfc9;
                  }
          
                  .pp-section:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                  }
          
                  .pp-section-number {
                    font-size: 0.72rem;
                    font-weight: 500;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #1d4ed8;
                    margin-bottom: 0.4rem;
                  }
          
                  .pp-section h2 {
                    font-family: 'DM Serif Display', serif;
                    font-size: 1.6rem;
                    font-weight: 400;
                    line-height: 1.2;
                    margin-bottom: 1.1rem;
                    letter-spacing: -0.01em;
                  }
          
                  .pp-section p {
                    margin-bottom: 1rem;
                    color: #2d2d2d;
                  }
          
                  .pp-section p:last-child {
                    margin-bottom: 0;
                  }
          
                  .pp-section ul {
                    margin: 0.75rem 0 1rem 0;
                    padding-left: 1.4rem;
                  }
          
                  .pp-section ul li {
                    margin-bottom: 0.45rem;
                    color: #2d2d2d;
                  }
          
                  .pp-contact-box {
                    background: #ffffff;
                    border: 1px solid #d1cfc9;
                    border-radius: 10px;
                    padding: 1.75rem 2rem;
                    margin-top: 1.25rem;
                  }
          
                  .pp-contact-box p {
                    margin: 0;
                  }
          
                  .pp-contact-box a {
                    color: #1d4ed8;
                    text-decoration: none;
                    font-weight: 500;
                  }
          
                  .pp-contact-box a:hover {
                    text-decoration: underline;
                  }
          
                  .pp-footer {
                    background: #1a1a1a;
                    color: #6b7280;
                    text-align: center;
                    font-size: 0.82rem;
                    padding: 2rem 1.5rem;
                  }
          
                  .pp-footer a {
                    color: #93c5fd;
                    text-decoration: none;
                  }
          
                  .pp-footer a:hover {
                    text-decoration: underline;
                  }
          
                  @media (max-width: 520px) {
                    .pp-main { padding: 2.5rem 1.25rem 4rem; }
                    .pp-intro-card { padding: 1.5rem; }
                    .pp-contact-box { padding: 1.25rem 1.5rem; }
                  }
                
            `}
      </style>

      <div className="pp-root">
        <header className="pp-header">
          <p className="pp-eyebrow">Legal</p>
          <h1 className="pp-title">Privacy Policy</h1>
          <p className="pp-meta">
            Robo Web Solutions &nbsp;·&nbsp; Effective Date: March 5, 2026
            &nbsp;·&nbsp; Last Updated: March 5, 2026
          </p>
        </header>

        <main className="pp-main">
          <div className="pp-intro-card">
            <strong>Your privacy matters to us.</strong> This Privacy Policy
            expains how Robo Web Solutions ("we," "us," or "our") collects,
            uses, and protects information submitted through our website at{" "}
            <a href="https://www.robowebsolutions.com/">
              https://www.robowebsolutions.com/
            </a>
            . By using our website, you agree to the practices describe below.
          </div>

          <section className="pp-section">
            <p className="pp-section-number">01</p>
            <h2>Who We Are</h2>
            <p>
                Robo Web Solutions is a locally operated, front-end web development business serving the Houston, Texas area.
                We design and build websites for individuals and business in the community.
            </p>
            <p>
                If you have any questions about this policy, please see the contact information at the bottom of this page.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">02</p>
            <h2>Information We Collect</h2>
            <p>
                We only collect personal information that you voluntarily provide to us. This occurs when you fill out the contact
                form on our website. The information you submit may include:
            </p>
            <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your phone number (if provided)</li>
                <li>Your The message or inquiry you submit</li>
                <li>Your Any other details you choose to include in your message</li>
            </ul>
            <p>
                We do not collect any sensitive personal information (such as financial details, Social Security numbers, or health information)
                through our website.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">03</p>
            <h2>How We Use Your Information</h2>
            <p>The information you submit through our contact form is used solely to:</p>
            <ul>
                <li>Respond to your inquiry or request</li>
                <li>Communicate with you about potential or ongoing projects</li>
                <li>Provide the web development services you ask about</li>
            </ul>
            <p>
                We will not use your information to send unsolicited marketing emails or add you to any mailing list without your explicit consent.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">04</p>
            <h2>How We Store &amp; Protect Your Information</h2>
            <p>
                Contact form submissions are received by email or through a third-party form processing service.
                We take reasonable precautions to protect the information you send us, including limiting access to authorized personnel only.
            </p>
            <p>
                However, please be aware that no method of transmission over the internet is 100% secure. While we strive to protect your personal
                information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">05</p>
            <h2>Third-Party Services</h2>
            <p>
                Our website may use third-party tools to process contact form submissions (such as a form hosting
                or email delivery provider). These third parties only receive the information necessary to fulfill
                their function and are not permitted to use your data for other purposes.
            </p>
            <p>
                We do not sell, trade, or rent, or otherwise share your personal information with third parties for their
                marketing purposes.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">06</p>
            <h2>Cookies &amp; Tracking</h2>
            <p>
                Our website does not currently use cookies for tracking or analytics purposes beyond any that may be set automatically
                by your browser or by the hosting platorm. We do not use advertising cookies or build behavioral profiles of our visitors.
            </p>
            <p>
                If this changes in the future, we will update this policy accordingly.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">07</p>
            <h2>Children's Privacy</h2>
            <p>
                Our website is not directed at children under the age of 13, and we do not knowingly collect
                personal information from children. If you believe a child has submitted information to us, please
                contact us and we will promptly delete it.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">08</p>
            <h2>Your Rights</h2>
            <p>
                You have the right to:
            </p>
            <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deletion of your personal information</li>
            </ul>
            <p>
                To exercise any of these rights, please contact us using the information below. We will respond to your
                request within a reasonable timeframe.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">09</p>
            <h2>Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices of for legal,
                regulatory, or operational reasons. When we do, we will update the "Last Updated" date at the top of this page.
                We encourage you to review this policy periodically.
            </p>
            <p>
                Your continued use of our website ater any changes consitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="pp-section">
            <p className="pp-section-number">10</p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your information,
                please reach out to us:
            </p>
            <div className="pp-contact-box">
                <p>
                    <strong>Robo Web Solutions</strong><br />Houston, Texas Area<br />Website:{" "}
                    <a href="https://www.robowebsolutions.com/">https://www.robowebsolutions.com/</a>
                </p>
            </div>
          </section>
        </main>

        {/* <footer className="pp-footer">
            <p>
                &copy; 2026 Robo Web Solutions. All rights reserved. &nbsp;·&nbsp;{" "}
                <a href="https://www.robowebsolutions.com/">https://www.robowebsolutions.com/</a>
            </p>
        </footer> */}
      </div>
    </>
  );
}

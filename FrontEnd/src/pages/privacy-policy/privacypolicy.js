import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./privacypolicy.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function TermsConditions() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });

    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Definitions",
      content:
        "Company refers to Crescent Electronics Pvt. Ltd., Ahmedabad, Gujarat, India. Service refers to CrescentWorld.com. User means any visitor accessing the website. Products & Services include Enterprise IT, Semiconductor, Luxury Gadgets, Apple Solutions, Convergence Technologies and related offerings.",
    },
    {
      id: 2,
      title: "Intellectual Property",
      content:
        "All website content, trademarks, graphics, software, branding and materials remain the exclusive property of Crescent Electronics Pvt. Ltd. Unauthorized reproduction or distribution is prohibited.",
    },
    {
      id: 3,
      title: "Use of the Service",
      content:
        "Users must use this website lawfully. Any misuse, scraping, malware distribution, fraudulent activities, or attempts to damage the website are strictly prohibited.",
    },
    {
      id: 4,
      title: "Products & Services",
      content:
        "All product descriptions, specifications and pricing are subject to change without prior notice. Orders are accepted based on availability and verification.",
    },
    {
      id: 5,
      title: "Pricing & Payments",
      content:
        "Prices are displayed in INR unless otherwise specified. Taxes, shipping and applicable charges are calculated during checkout.",
    },
    {
      id: 6,
      title: "Delivery & Shipping",
      content:
        "Delivery timelines vary depending upon product availability and customer location. Estimated delivery dates are indicative only.",
    },
    {
      id: 7,
      title: "Returns & Refunds",
      content:
        "Please refer to our separate Return & Refund Policy for complete information regarding exchanges, replacements and refunds.",
    },
    {
      id: 8,
      title: "User Accounts",
      content:
        "Users are responsible for maintaining account confidentiality. Crescent World reserves the right to suspend or terminate accounts violating these Terms.",
    },
    {
      id: 9,
      title: "Third Party Links",
      content:
        "External websites linked through our Service are not operated by Crescent Electronics Pvt. Ltd. We are not responsible for their content or privacy practices.",
    },
    {
      id: 10,
      title: "Disclaimer",
      content:
        "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind.",
    },
    {
      id: 11,
      title: "Limitation of Liability",
      content:
        "Crescent Electronics Pvt. Ltd. shall not be liable for indirect, incidental, consequential or punitive damages arising from use of this website.",
    },
    {
      id: 12,
      title: "Governing Law",
      content:
        "These Terms are governed by the laws of India and the jurisdiction of Ahmedabad, Gujarat.",
    },
    {
      id: 13,
      title: "Changes to Terms",
      content:
        "We reserve the right to update these Terms at any time. Continued use of the website indicates acceptance of updated Terms.",
    },
    {
      id: 14,
      title: "Contact Us",
      content:
        "Email: info@crescentworld.com | Crescent House, Behind Navrangpura Post Office, Ahmedabad - 380009, Gujarat, India.",
    },
  ];

  return (
    <>
      <div>
        {/* Header */}
        <Header />

        {/* Hero */}

        <section className="terms-hero funnel-sans">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mx-auto text-center">
                <span className="badge bg-warning text-dark px-3 py-2 mb-4">
                  Legal Information
                </span>

                <h1 data-aos="fade-up">Privacy & Terms</h1>

                <p data-aos="fade-up" data-aos-delay="200">
                  Please read these Terms carefully before using Crescent World.
                  By accessing our website you agree to comply with all
                  applicable Terms and Conditions.
                </p>

                <div className="last-update mt-4">
                  Last Updated :<strong> August 14, 2025</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main */}

        <section className="py-5 funnel-sans">
          <div className="container">
            <div className="row">
              {/* Sidebar */}

              <div className="col-lg-3 d-none d-lg-block">
                <div className="toc">
                  <h5>Contents</h5>

                  {sections.map((item) => (
                    <a key={item.id} href={`#section${item.id}`}>
                      {item.id}. {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Content */}

              <div className="col-lg-9">
                {sections.map((item) => (
                  <div
                    className="term-card"
                    id={`section${item.id}`}
                    key={item.id}
                    data-aos="fade-up"
                  >
                    <div className="number">{item.id}</div>

                    <div>
                      <h3>{item.title}</h3>

                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

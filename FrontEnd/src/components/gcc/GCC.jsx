import React from "react";
import "./gcc.css";
import Header from "../header/header";
import Footer from "../footer/footer";

// ─── Design Tokens (matching Crescent World brand) ───────────────────────────
// Primary:   #6B2FD9  (violet — Crescent brand)
// Accent:    #F05A28  (orange — World accent)
// Gold:      #D4A017  (prestige/premium feel for GCC — a deliberate risk for this page)
// Dark:      #0D0D1A
// Light:     #F7F5FF
// ─────────────────────────────────────────────────────────────────────────────

const styles = `

`;

const gccServices = [
  {
    icon: "🏢",
    title: "GCC Setup & Incorporation",
    desc: "End-to-end support for entity setup - from choosing the right legal structure and location to registration, compliance, and operational readiness.",
    tags: ["GIFT City", "STPI", "SEZ"],
  },
  {
    icon: "🛠️",
    title: "Technology Infrastructure",
    desc: "Apple-powered enterprise environments, MDM deployment, network design, and cloud strategy tailored to your GCC's team size and security requirements.",
    tags: ["Apple MDM", "Cloud", "Security"],
  },
  {
    icon: "👥",
    title: "Talent & HR Advisory",
    desc: "Workforce planning, compensation benchmarking, and hiring strategy for GCC roles - from engineering and finance to compliance and operations.",
    tags: ["Hiring", "Org Design", "Benchmarking"],
  },
  {
    icon: "📋",
    title: "Regulatory & Tax Advisory",
    desc: "Navigating FEMA, transfer pricing, SEZ/STPI benefits, and GIFT City regulatory sandboxes - with local advisors who understand global parent requirements.",
    tags: ["FEMA", "Transfer Pricing", "SEZ"],
  },
  {
    icon: "🔗",
    title: "IT-OT Integration Consulting",
    desc: "Connecting your GCC's enterprise systems with operational technology at parent locations - securely and efficiently.",
    tags: ["OT Security", "Integration", "Architecture"],
  },
  {
    icon: "📈",
    title: "GCC Scaling & Optimisation",
    desc: "For existing GCCs seeking to mature from cost centres to value centres - process optimisation, capability building, and CoE development.",
    tags: ["CoE", "Process Ops", "Value Creation"],
  },
];

const indiaAdvantages = [
  {
    title: "Talent Pool Depth",
    desc: "5M+ STEM graduates annually; world's largest English-speaking tech workforce.",
  },
  {
    title: "Cost Arbitrage",
    desc: "40–60% cost savings versus equivalent Western locations without quality compromise.",
  },
  {
    title: "Time Zone Advantage",
    desc: "Overlaps with both European and APAC business hours for follow-the-sun operations.",
  },
  {
    title: "Regulatory Maturity",
    desc: "SEBI, RBI, and IFSCA frameworks provide clear governance structures for GCCs.",
  },
  {
    title: "Digital Infrastructure",
    desc: "Tier-1 connectivity, co-location data centres, and improving smart city infrastructure.",
  },
];

const giftPerks = [
  "100% income tax exemption for 10 years (under section 80LA)",
  "No GST on services consumed within IFSC",
  "Single-window clearance via IFSCA",
  "World-class plug-and-play office infrastructure",
  "Access to global financial markets and fintech ecosystem",
  "Simplified FEMA and capital account transactions",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    body: "We understand your parent organisation's goals, functions to be captivated, and target operating model - producing a GCC feasibility and location selection report.",
  },
  {
    num: "02",
    title: "Location & Structure Advisory",
    body: "Evaluation of GIFT City, STPI zones, SEZs, and tier-1 cities against your specific functional mix, talent requirements, and regulatory considerations.",
  },
  {
    num: "03",
    title: "Entity Setup & Compliance",
    body: "Company incorporation, FEMA filings, PE risk advisory, transfer pricing framework, and liaison with IFSCA / STPI / state investment bodies.",
  },
  {
    num: "04",
    title: "Technology & Infrastructure Deployment",
    body: "Enterprise Apple environment, MDM, network, cloud, and cybersecurity stack - ready on Day 1. We leverage Crescent's 20+ years of enterprise IT delivery.",
  },
  {
    num: "05",
    title: "Talent Acquisition Support",
    body: "Job architecture, compensation benchmarking, hiring partner introductions, and onboarding infrastructure for your first 10–200 hires.",
  },
  {
    num: "06",
    title: "Steady-State & Scale",
    body: "Ongoing technology support, compliance calendar management, and strategic advisory as your GCC matures from setup to Centre of Excellence.",
  },
];

const outcomes = [
  {
    num: "60",
    suffix: "%",
    title: "Faster Setup",
    body: "vs. attempting India entry without local advisory support.",
  },
  {
    num: "40",
    suffix: "%",
    title: "Cost Savings",
    body: "Typical cost arbitrage versus equivalent Western headcount.",
  },
  {
    num: "10",
    suffix: "y",
    title: "Tax Benefits",
    body: "Income tax exemption window under GIFT City / IFSCA.",
  },
  {
    num: "1",
    suffix: "wk",
    title: "Tech Ready",
    body: "Enterprise IT environment live within one week of facility handover.",
  },
];

export default function GCC() {
  return (
    <>
      <style>{styles}</style>

      <Header />
      <div className="gcc-page funnel-sans">
        {/* HERO */}
        <section className="gcc-hero">
          <div className="gcc-hero-inner">
            <div>
              <div className="gcc-eyebrow">✦ Global Capability Centres</div>
              <h1>
                Build your India GCC with{" "}
                <span className="purple">Crescent World.</span>
              </h1>
              <p>
                From entity setup and regulatory navigation to enterprise
                technology deployment - Crescent World is your end-to-end
                partner for establishing and scaling a Global Capability Centre
                in India.
              </p>
              <div className="gcc-hero-actions">
                <a href="/contact" className="btn-gold">
                  Start Your GCC Journey →
                </a>
                <a href="#services" className="btn-ghost">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="gcc-hero-panel">
              <div className="gcc-panel-label">India GCC Landscape · 2025</div>
              <div className="gcc-india-stat">
                <div className="big-num">
                  1,700<em>+</em>
                </div>
                <div className="stat-desc">
                  <strong>Active GCCs in India</strong>
                  Up from 1,000 in 2019 — growing at 11% annually
                </div>
              </div>
              <div className="gcc-india-stat">
                <div className="big-num">
                  $46<em>B</em>
                </div>
                <div className="stat-desc">
                  <strong>Revenue generated</strong>
                  GCCs contribute 13% of India's IT-BPM exports
                </div>
              </div>
              <div className="gcc-india-stat">
                <div className="big-num">
                  1.9<em>M</em>
                </div>
                <div className="stat-desc">
                  <strong>Professionals employed</strong>
                  Spanning tech, finance, legal, and operations
                </div>
              </div>
              <div className="gcc-india-stat">
                <div className="big-num">
                  50<em>+</em>
                </div>
                <div className="stat-desc">
                  <strong>Fortune 500 companies</strong>
                  have their largest GCC globally in India
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS GCC */}
        <section className="gcc-what">
          <div className="gcc-what-inner">
            <div>
              <div className="section-label">Understanding GCCs</div>
              <h2 className="section-h2">
                Beyond outsourcing. Inside your organisation.
              </h2>
              <p className="section-p">
                A Global Capability Centre (GCC) - also known as a Global
                In-house Centre (GIC) or Captive Centre - is a wholly-owned
                subsidiary that delivers high-value functions for the parent
                organisation from India.
              </p>
              <p className="section-p">
                Unlike outsourcing or BPO, a GCC is an extension of your own
                company. Employees report to your global structure, work within
                your culture, and build institutional knowledge that stays
                inside your organisation.
              </p>
              <p className="section-p">
                Modern GCCs have evolved far beyond back-office operations.
                Today they drive R&D, product engineering, AI/ML, cybersecurity,
                financial planning, and strategic analytics for the world's
                leading companies.
              </p>
            </div>

            <div>
              <div className="section-label">The GCC Evolution</div>
              <div className="gcc-evolution">
                {[
                  {
                    year: "2000s",
                    label: "Cost Centre",
                    body: "Primarily back-office and IT support operations; focus on labour arbitrage.",
                    color: "#6B2FD9",
                  },
                  {
                    year: "2010s",
                    label: "Shared Services Hub",
                    body: "Consolidation of finance, HR, and legal functions; process standardisation.",
                    color: "#8b5cf6",
                  },
                  {
                    year: "Early 2020s",
                    label: "Centre of Excellence",
                    body: "Deep domain expertise; product engineering, analytics, and digital innovation.",
                    color: "#F05A28",
                  },
                  {
                    year: "Today",
                    label: "Strategic Value Centre",
                    body: "AI labs, R&D units, and leadership functions housed in India GCCs.",
                    color: "#D4A017",
                  },
                ].map((item, i) => (
                  <div className="gcc-evo-item" key={i}>
                    <div className="gcc-evo-left">
                      <div
                        className="gcc-evo-dot"
                        // style={{ background: item.color }}
                      >
                        {i + 1}
                      </div>
                      {i < 3 && <div className="gcc-evo-line"></div>}
                    </div>
                    <div className="gcc-evo-body">
                      <div className="gcc-evo-year">{item.year}</div>
                      <h4>{item.label}</h4>
                      <p>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="gcc-services" id="services">
          <div className="gcc-services-inner">
            <div className="gcc-section-header">
              <div className="section-label">What We Do</div>
              <h2>Everything you need to set up and scale</h2>
              <p>
                Crescent World provides the technology backbone, regulatory
                guidance, and strategic advisory to make your India GCC a
                success from Day 1.
              </p>
            </div>
            <div className="gcc-services-grid">
              {gccServices.map((svc, i) => (
                <div className="gcc-svc-card" key={i}>
                  <div className="gcc-svc-icon">{svc.icon}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="gcc-svc-tags">
                    {svc.tags.map((t, j) => (
                      <span className="gcc-tag" key={j}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY INDIA + GIFT CITY */}
        <section className="gcc-india">
          <div className="gcc-india-inner">
            <div>
              <div className="section-label gold">Why India</div>
              <h2 className="section-h2" style={{ color: "#fff" }}>
                The world's preferred GCC destination - for good reason.
              </h2>
              <p className="section-p">
                India has become the undisputed global hub for GCCs, combining
                deep talent reserves, infrastructure investment, and a
                regulatory environment designed to attract captive centres.
              </p>
              <div className="gcc-advantage-list">
                {indiaAdvantages.map((a, i) => (
                  <div className="gcc-advantage" key={i}>
                    <div className="gcc-advantage-check">✓</div>
                    <div>
                      <h4>{a.title}</h4>
                      <p>{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gcc-gift-box">
              <div className="gift-badge">🏙 GIFT City Spotlight</div>
              <h3>
                India's premier financial district — and Crescent's home turf.
              </h3>
              <p>
                GIFT City (Gujarat International Finance Tec-City) in
                Gandhinagar is India's first operational smart city and IFSC,
                offering unmatched regulatory incentives for GCCs in financial
                services, fintech, and technology. As a Gujarat-headquartered
                firm, Crescent has deep local relationships and institutional
                access.
              </p>
              <div className="gcc-gift-perks">
                {giftPerks.map((perk, i) => (
                  <div className="gcc-gift-perk" key={i}>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE HELP */}
        <section className="gcc-process">
          <div className="gcc-process-inner">
            <div className="gcc-section-header">
              <div className="section-label">Our Process</div>
              <h2>From concept to operational GCC - a structured journey</h2>
            </div>
            <div className="gcc-process-steps">
              {processSteps.map((step, i) => (
                <div className="gcc-step" key={i}>
                  <div className="gcc-step-num">{step.num}</div>
                  <div className="gcc-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="gcc-outcomes">
          <div className="gcc-outcomes-inner">
            <div className="gcc-section-header">
              <div className="section-label">Outcomes</div>
              <h2>What clients achieve with Crescent</h2>
            </div>
            <div className="outcomes-grid">
              {outcomes.map((o, i) => (
                <div className="outcome-card" key={i}>
                  <div className="outcome-num">
                    {o.num}
                    <span>{o.suffix}</span>
                  </div>
                  <h4>{o.title}</h4>
                  <p>{o.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gcc-cta">
          <h2>
            Ready to establish your <span className="gold">India GCC?</span>
          </h2>
          <p>
            Speak with our GCC advisory team — Gujarat-based, globally
            connected.
          </p>
          <div className="gcc-cta-btns">
            <a href="/contact" className="btn-gold">
              Schedule a Consultation →
            </a>
            <a href="#services" className="btn-ghost-1">
              Download GCC Guide
            </a>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

import React, { useEffect, useRef } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./ots.css";


// ─── Design Tokens (matching Crescent World brand) ───────────────────────────
// Primary:   #6B2FD9  (violet/purple — Crescent brand)
// Accent:    #F05A28  (orange — World accent)
// Dark:      #0D0D1A  (near-black for section bg)
// Light:     #F7F5FF  (soft lavender tint for alternating sections)
// Text:      #1A1A2E
// Body font: system sans (matches site)
// ─────────────────────────────────────────────────────────────────────────────

const styles = `

`;

const tickerItems = [
  "ICS/SCADA Vulnerabilities",
  "Ransomware on Critical Infrastructure",
  "Insider Threats in OT Environments",
  "Firmware Exploits",
  "Air-Gap Bridging Attacks",
  "PLC Manipulation",
  "Supply Chain Compromise",
  "Zero-Day ICS Exploits",
  "OT-IT Convergence Risks",
  "Industrial Espionage",
];

const threats = [
  {
    icon: "🔓",
    title: "Unsecured Remote Access",
    desc: "Legacy OT systems often lack authentication controls, exposing PLCs and HMIs to unauthorised remote access via VPNs or direct internet exposure.",
  },
  {
    icon: "🦠",
    title: "Ransomware & Malware",
    desc: "Industrial malware such as TRITON and Industroyer target safety systems and can trigger physical shutdowns or equipment damage.",
  },
  {
    icon: "🔌",
    title: "IT-OT Convergence Gaps",
    desc: "As IT and OT networks converge, unmanaged entry points multiply. Most OT assets were never designed for networked environments.",
  },
  {
    icon: "📡",
    title: "Supply Chain Attacks",
    desc: "Third-party vendors and firmware updates have become primary attack vectors - compromising OT systems before they even reach the factory floor.",
  },
  {
    icon: "⚙️",
    title: "Legacy System Vulnerabilities",
    desc: "Industrial equipment with 20–30 year lifecycles cannot be patched easily, leaving known CVEs permanently unaddressed.",
  },
  {
    icon: "👁️",
    title: "Zero Visibility",
    desc: "Most organisations have no real-time monitoring of OT traffic, meaning breaches go undetected for months - or forever.",
  },
];

const services = [
  {
    num: "01",
    title: "OT Network Assessment & Risk Profiling",
    desc: "Comprehensive audit of your industrial network topology, asset inventory, and exposure - delivered as a prioritised risk register.",
  },
  {
    num: "02",
    title: "ICS/SCADA Security Architecture",
    desc: "Design and implementation of Purdue Model-based network segmentation, DMZ zones, and secure remote access frameworks tailored to your OT environment.",
  },
  {
    num: "03",
    title: "Continuous OT Monitoring (SOC)",
    desc: "24×7 passive monitoring of OT traffic with anomaly detection, threat correlation, and incident escalation - without disrupting production.",
  },
  {
    num: "04",
    title: "Incident Response & Recovery",
    desc: "Rapid containment and forensic response to OT security incidents, with playbooks designed specifically for industrial environments.",
  },
  {
    num: "05",
    title: "OT Security Awareness Training",
    desc: "Role-specific training for plant operators, engineers, and IT teams - bridging the knowledge gap between industrial safety and cybersecurity.",
  },
  {
    num: "06",
    title: "Compliance & Regulatory Advisory",
    desc: "Gap analysis and implementation support for IEC 62443, NERC CIP, NIST SP 800-82, and India's NCIIPC guidelines.",
  },
];

const whyCards = [
  {
    icon: "🏭",
    title: "OT-First Approach",
    desc: "We design for operational continuity first - security never interrupts production.",
  },
  {
    icon: "🇮🇳",
    title: "India-Focused Expertise",
    desc: "Deep familiarity with NCIIPC, CERT-In, and industrial clusters across Gujarat and beyond.",
  },
  {
    icon: "🔗",
    title: "IT + OT Convergence",
    desc: "Bridging enterprise IT (including Apple ecosystem) with industrial OT - uniquely Crescent.",
  },
  {
    icon: "⏱️",
    title: "Rapid Deployment",
    desc: "From assessment to active monitoring in weeks, not months.",
  },
];

const industries = [
  { icon: "⚡", label: "Power & Energy" },
  { icon: "🏗️", label: "Oil & Gas" },
  { icon: "🏭", label: "Manufacturing" },
  { icon: "💊", label: "Pharmaceuticals" },
  { icon: "🚆", label: "Transportation" },
  { icon: "💧", label: "Water & Utilities" },
  { icon: "🍔", label: "Food & Beverage" },
  { icon: "🔬", label: "Chemical Plants" },
  { icon: "🏥", label: "Healthcare Infra" },
  { icon: "🏙️", label: "Smart Cities" },
];

export default function OTSecurity() {
  const tickerRef = useRef(null);

  return (
    <>
      <style>{styles}</style>

      {/* */}
      <Header />

      <div className="ot-page funnel-sans">
        {/* HERO */}
        <section className="ot-hero">
          <div className="ot-hero-content">
            <div className="ot-eyebrow">
              <span className="ot-eyebrow-dot"></span>
              Operational Technology Security
            </div>
            <h1>
              Secure the machines
              <br />
              that <span>run the world.</span>
            </h1>
            <p>
              Industrial systems were built to last decades - not to withstand
              modern cyber threats. Crescent World brings enterprise-grade OT
              security to factories, utilities, and critical infrastructure
              across India.
            </p>
            <div className="ot-hero-actions">
              <a href="/contact" className="btn-primary">
                Get a Security Assessment →
              </a>
              <a href="#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          <div className="ot-hero-stats">
            <div className="stat-card">
              <div className="stat-num">
                74<span>%</span>
              </div>
              <div className="stat-label">
                of OT orgs had a breach
                <br />
                in the past year
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                212<span>d</span>
              </div>
              <div className="stat-label">
                avg. dwell time
                <br />
                in OT environments
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-num">
                3<span>×</span>
              </div>
              <div className="stat-label">
                rise in ICS attacks
                <br />
                since 2022
              </div>
            </div>
          </div>
        </section>

        {/* THREAT TICKER */}
        <div className="ot-ticker">
          <div className="ticker-track" ref={tickerRef}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span className="ticker-item" key={i}>
                <span className="ticker-dot"></span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* WHAT IS OT */}
        <section style={{ background: "#fff" }}>
          <div className="ot-what">
            <div>
              <div className="ot-section-label">Understanding OT Security</div>
              <h2>
                IT security alone isn't enough for industrial environments.
              </h2>
              <p>
                Operational Technology (OT) includes the hardware and software
                that monitors and controls physical processes - from SCADA
                systems and PLCs to industrial robots and energy grids. These
                systems operate 24/7, often in isolation from IT, and cannot
                simply be patched or rebooted.
              </p>
              <p>
                As connectivity increases through Industry 4.0 and IIoT
                initiatives, OT systems become attractive targets - yet most
                organisations apply only IT-centric security thinking to
                environments that demand a fundamentally different approach.
              </p>
            </div>
            <div className="ot-what-visual">
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#888",
                  marginBottom: 8,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                The Converging Stack
              </div>
              <div className="ot-layer it">
                <div className="ot-layer-icon">💻</div>
                <div className="ot-layer-text">
                  <strong>Enterprise IT Layer</strong>
                  <span>ERP, email, endpoints, cloud apps</span>
                </div>
                <div className="ot-layer-badge">IT</div>
              </div>
              <div style={{ textAlign: "center", color: "#999", fontSize: 20 }}>
                ⬇
              </div>
              <div className="ot-layer ot">
                <div className="ot-layer-icon">⚙️</div>
                <div className="ot-layer-text">
                  <strong>OT / SCADA Layer</strong>
                  <span>PLCs, HMIs, historians, DCS, ICS</span>
                </div>
                <div className="ot-layer-badge">OT</div>
              </div>
              <div style={{ textAlign: "center", color: "#999", fontSize: 20 }}>
                ⬇
              </div>
              <div className="ot-layer physical">
                <div className="ot-layer-icon">🏭</div>
                <div className="ot-layer-text">
                  <strong>Physical Process Layer</strong>
                  <span>Machinery, sensors, actuators, field devices</span>
                </div>
                <div className="ot-layer-badge">Physical</div>
              </div>
              <div
                style={{
                  background: "#fef0e8",
                  borderRadius: 10,
                  padding: "12px 16px",
                  marginTop: 8,
                }}
              >
                <span
                  style={{ fontSize: 13, color: "#F05A28", fontWeight: 600 }}
                >
                  ⚠ A breach at any layer can cascade to physical impact.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* THREAT LANDSCAPE */}
        <section className="ot-threats">
          <div className="ot-threats-inner">
            <div className="ot-section-header">
              <div className="ot-section-label">The Threat Landscape</div>
              <h2>What puts your OT environment at risk</h2>
              <p>
                Industrial systems face a growing array of targeted threats -
                and legacy infrastructure makes them uniquely difficult to
                defend.
              </p>
            </div>
            <div className="threats-grid">
              {threats.map((t, i) => (
                <div className="threat-card" key={i}>
                  <div className="threat-icon">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="ot-services" id="services">
          <div className="ot-services-inner">
            <div className="ot-section-header">
              <div className="ot-section-label">Our Services</div>
              <h2 style={{ color: "#fff" }}>End-to-end OT security coverage</h2>
              <p style={{ color: "rgba(255,255,255,0.55)" }}>
                From initial risk assessment to continuous threat monitoring -
                built for industrial environments, not adapted from IT
                playbooks.
              </p>
            </div>
            <div className="services-grid">
              {services.map((s, i) => (
                <div className="service-item" key={i}>
                  <div className="service-num">{s.num}</div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CRESCENT */}
        <section style={{ background: "#fff" }}>
          <div className="ot-why">
            <div className="ot-section-header">
              <div className="ot-section-label">Why Crescent World</div>
              <h2>OT security built for Indian industrial realities</h2>
            </div>
            <div className="why-grid">
              {whyCards.map((w, i) => (
                <div className="why-card" key={i}>
                  <span className="why-icon">{w.icon}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="ot-industries">
          <div className="industries-inner">
            <div className="ot-section-header">
              <div className="ot-section-label">Industries We Serve</div>
              <h2>Critical infrastructure, secured.</h2>
            </div>
            <div className="industries-row">
              {industries.map((ind, i) => (
                <div className="industry-pill" key={i}>
                  <span>{ind.icon}</span>
                  {ind.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ot-cta">
          <h2>Is your OT environment truly secure?</h2>
          <p>
            Start with a no-obligation security assessment. Our experts map your
            risks before attackers do.
          </p>
          <a href="/contact" className="btn-white">
            Schedule Your Assessment →
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
}

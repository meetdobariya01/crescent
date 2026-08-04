import React from "react";
import "./enterpriceit.css";

const GCCLanding = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-success-subtle text-success mb-3">
                India GCC Advisory & Execution
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Build Your India GCC with Crescent World
              </h1>

              <h4 className="text-success mb-4">
                From Strategy to Scale — Your End-to-End GCC Partner
              </h4>

              <p className="lead text-muted">
                Establishing a Global Capability Centre (GCC) in India requires
                more than incorporation and office space. It demands strategic
                planning, regulatory expertise, technology infrastructure, and
                access to world-class talent.
              </p>

              <p className="text-muted">
                Crescent World helps global enterprises establish, operate, and
                scale high-performing GCCs across India. From entity setup and
                compliance to enterprise technology deployment and workforce
                strategy, we provide the expertise required to build a
                future-ready capability centre.
              </p>

              <div className="mt-4">
                <button className="btn btn-success btn-lg me-3">
                  Start Your GCC Journey
                </button>

                <button className="btn btn-outline-success btn-lg">
                  Explore Our Services
                </button>
              </div>
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                className="img-fluid rounded-4 shadow"
                alt="GCC Office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* India GCC Landscape */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">India GCC Landscape 2025</h2>
          </div>

          <div className="row g-4">
            {[
              ["1,700+", "Active GCCs in India", "Growing from approximately 1,000 centres in 2019, with annual expansion exceeding 11%."],
              ["$46 Billion", "Annual Revenue Contribution", "India's GCC ecosystem contributes significantly to the nation's technology and business services exports."],
              ["1.9 Million+", "Professionals Employed", "Across engineering, finance, operations, analytics, legal, and digital transformation functions."],
              ["50+", "Fortune 500 Companies", "Operate some of their largest and most strategic global capability centres from India."]
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm stat-card">
                  <div className="card-body text-center">
                    <h2 className="text-success fw-bold">{item[0]}</h2>
                    <h5>{item[1]}</h5>
                    <p className="text-muted">{item[2]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Understanding GCC */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
                className="img-fluid rounded-4 shadow"
                alt="Technology Team"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">
                Understanding Global Capability Centres
              </h2>

              <h4 className="text-success mb-3">
                Beyond Outsourcing. Built Within Your Organisation.
              </h4>

              <p>
                A Global Capability Centre (GCC), often referred to as a Global
                In-house Centre (GIC) or Captive Centre, is a wholly-owned
                subsidiary established to deliver critical business functions for
                a parent organisation.
              </p>

              <p>
                Unlike traditional outsourcing models, a GCC operates as an
                integrated extension of your enterprise. Teams work within your
                culture, governance framework, and strategic objectives while
                building institutional knowledge that remains within your
                organisation.
              </p>

              <p>Today's GCCs drive high-value functions including:</p>

              <ul className="row">
                <li className="col-md-6">Product Engineering</li>
                <li className="col-md-6">Research & Development</li>
                <li className="col-md-6">
                  Artificial Intelligence & Machine Learning
                </li>
                <li className="col-md-6">Cybersecurity</li>
                <li className="col-md-6">
                  Financial Planning & Analysis
                </li>
                <li className="col-md-6">Enterprise Operations</li>
                <li className="col-md-6">Strategic Analytics</li>
                <li className="col-md-6">Digital Transformation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">The Evolution of GCCs</h2>
          </div>

          <div className="row g-4">
            {[
              ["2000s — Cost Centres","Focused on back-office operations and IT support, driven primarily by labour arbitrage."],
              ["2010s — Shared Services Hubs","Consolidation of finance, HR, legal, and operational functions through standardised processes."],
              ["Early 2020s — Centres of Excellence","Expansion into engineering, analytics, product development, and innovation capabilities."],
              ["Today — Strategic Value Centres","Leading organisations now house AI labs, R&D teams, digital transformation initiatives, and leadership functions within their India GCCs."]
            ].map((item,index)=>(
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="text-success">{item[0]}</h5>
                    <p>{item[1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Services</h2>
          </div>

          <div className="row g-4">
            {[
              {
                title:"GCC Setup & Incorporation",
                desc:"Comprehensive support for legal entity formation, location selection, compliance, registrations, and operational readiness.",
                items:["GIFT City","SEZ","STPI","State Incentive Programs"]
              },
              {
                title:"Technology Infrastructure & Workplace Enablement",
                desc:"Enterprise-grade technology environments designed for security, scalability, and employee productivity.",
                items:["Apple Enterprise Ecosystems","Mobile Device Management (MDM)","Cloud Infrastructure","Cybersecurity Architecture","Enterprise Networking"]
              },
              {
                title:"Talent & Workforce Advisory",
                desc:"Build high-performing teams through strategic workforce planning and recruitment guidance.",
                items:["Workforce Planning","Compensation Benchmarking","Hiring Strategy","Organisation Design","Leadership Hiring Support"]
              },
              {
                title:"Regulatory & Tax Advisory",
                desc:"Navigate India's regulatory landscape with confidence.",
                items:["FEMA Compliance","Transfer Pricing Frameworks","Corporate Governance","SEZ & STPI Incentives","GIFT City Regulatory Benefits"]
              },
              {
                title:"IT-OT Integration Consulting",
                desc:"Securely connect enterprise technology systems with operational environments across global locations.",
                items:["Industrial Connectivity","OT Security","Enterprise Architecture","Data Integration"]
              },
              {
                title:"GCC Scaling & Optimisation",
                desc:"Transform existing GCCs into strategic value centres.",
                items:["Capability Development","Centre of Excellence Design","Process Optimisation","Operating Model Enhancement","Value Creation Frameworks"]
              }
            ].map((service,index)=>(
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success">
                      {service.title}
                    </h5>

                    <p>{service.desc}</p>

                    <ul>
                      {service.items.map((item,i)=>(
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold">
                Why India
              </h2>

              <h4 className="text-success mb-4">
                The World's Preferred GCC Destination
              </h4>

              <p>
                India offers a unique combination of talent availability,
                operational efficiency, regulatory maturity, and digital
                infrastructure.
              </p>

              <div className="mt-4">
                <p><strong>Talent at Scale</strong><br/>More than 5 million STEM graduates enter the workforce annually.</p>

                <p><strong>Cost Efficiency</strong><br/>40–60% operational cost advantages.</p>

                <p><strong>Strategic Time Zone Position</strong><br/>Supports APAC, Europe and North America.</p>

                <p><strong>Regulatory Stability</strong><br/>Frameworks from RBI, SEBI, IFSCA and state authorities.</p>

                <p><strong>Digital Infrastructure</strong><br/>Modern business parks and cloud ecosystems.</p>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                alt="India Business"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GIFT City */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            GIFT City Advantage
          </h2>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                className="img-fluid rounded-4 shadow"
                alt="GIFT City"
              />
            </div>

            <div className="col-lg-6">
              <h4 className="text-success">
                India's Premier Financial & Technology Hub
              </h4>

              <p>
                Located in Gandhinagar, Gujarat, GIFT City is India's first
                operational International Financial Services Centre (IFSC) and
                one of the country's most attractive destinations for financial
                services, fintech, and technology GCCs.
              </p>

              <p>
                As a Gujarat-based organisation, Crescent World brings deep
                regional expertise, strong institutional relationships, and
                practical experience navigating the GIFT City ecosystem.
              </p>

              <ul>
                <li>Up to 10 years of income tax benefits</li>
                <li>No GST on eligible services consumed within IFSC</li>
                <li>Single-window approvals through IFSCA</li>
                <li>World-class plug-and-play infrastructure</li>
                <li>Access to international financial markets</li>
                <li>Simplified foreign exchange frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Our GCC Establishment Framework
          </h2>

          <div className="row g-4">
            {[
              ["01","Discovery & Strategy"],
              ["02","Location & Structure Advisory"],
              ["03","Entity Setup & Compliance"],
              ["04","Technology Deployment"],
              ["05","Talent Acquisition Support"],
              ["06","Scale & Optimisation"]
            ].map((step,index)=>(
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h1 className="text-success">{step[0]}</h1>
                    <h5>{step[1]}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <h2 className="text-success fw-bold">60%</h2>
              <p>Faster GCC Establishment</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-success fw-bold">40%</h2>
              <p>Average Cost Optimisation</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-success fw-bold">10 Years</h2>
              <p>Potential Tax Incentives</p>
            </div>

            <div className="col-md-3">
              <h2 className="text-success fw-bold">1 Week</h2>
              <p>Technology Readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">
            Ready to Build Your India GCC?
          </h2>

          <p className="lead">
            Whether you are establishing your first Global Capability Centre or
            expanding an existing operation, Crescent World provides the
            expertise, technology, and local execution capabilities needed for
            long-term success.
          </p>

          <h5 className="mt-4">
            Speak with Our GCC Advisory Team
          </h5>

          <p>
            Gujarat-Based. Globally Connected. Enterprise Focused.
          </p>

          <button className="btn btn-success btn-lg me-3">
            Schedule a Consultation
          </button>

          <button className="btn btn-outline-success btn-lg">
            Download the India GCC Guide
          </button>
        </div>
      </section>
    </>
  );
};

export default GCCLanding;
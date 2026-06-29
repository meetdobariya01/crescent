import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaServer, FaDatabase, FaNetworkWired, FaBatteryFull, FaSnowflake, FaSlidersH, 
  FaPlug, FaShieldAlt, FaCloud, FaWrench, FaTools, FaBuilding, FaArrowRight, 
  FaChevronDown, FaCheckCircle, FaUserTie, FaShippingFast, FaBriefcase, FaHeadset, 
  FaUniversity, FaHospital, FaCoins, FaLandmark, FaIndustry, FaStore, 
  FaHistory, FaMap, FaExpand, FaHeartbeat, FaLeaf
} from "react-icons/fa";
import "./datacenter.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Datacenter = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [openFaq, setOpenFaq] = useState(null);

  // SEO metadata & Scroll to top
  useEffect(() => {
    document.title = "Enterprise Data Center Solutions | Crescent";
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaContent = "Build secure, scalable, and high-performance data centers with enterprise-grade servers, storage, networking, cooling, and infrastructure solutions from APC, Vertiv, Dell, and NetApp.";
    if (metaDescription) {
      metaDescription.setAttribute("content", metaContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = metaContent;
      document.head.appendChild(meta);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Product Categories
  const categories = [
    {
      title: "Enterprise Servers",
      icon: <FaServer />,
      color: "rgba(37, 99, 235, 0.08)",
      indicator: "#2563eb",
      tag: "🖥 Servers",
      items: ["Rack Servers", "Tower Servers", "Blade Servers", "GPU Servers", "High-Density Servers"]
    },
    {
      title: "Enterprise Storage",
      icon: <FaDatabase />,
      color: "rgba(124, 58, 237, 0.08)",
      indicator: "#7c3aed",
      tag: "💾 Storage",
      items: ["SAN Storage", "NAS Storage", "All-Flash Arrays", "Hybrid Storage", "Backup Appliances"]
    },
    {
      title: "Networking Solutions",
      icon: <FaNetworkWired />,
      color: "rgba(8, 145, 178, 0.08)",
      indicator: "#0891b2",
      tag: "🌐 Networking",
      items: ["Enterprise Switches", "Core Switches", "Routers", "Firewalls", "Load Balancers", "Wireless Controllers"]
    },
    {
      title: "UPS & Power Backup",
      icon: <FaBatteryFull />,
      color: "rgba(13, 148, 136, 0.08)",
      indicator: "#0d9488",
      tag: "🔋 UPS Backup",
      items: ["Online UPS", "Modular UPS", "Rack UPS", "PDUs", "Battery Backup Systems"]
    },
    {
      title: "Cooling Solutions",
      icon: <FaSnowflake />,
      color: "rgba(220, 38, 38, 0.08)",
      indicator: "#dc2626",
      tag: "❄ Cooling",
      items: ["Precision AC", "In-Row Cooling", "Cooling Fans", "Airflow Management", "Liquid Cooling Systems"]
    },
    {
      title: "Server Racks & Cabinets",
      icon: <FaSlidersH />,
      color: "rgba(217, 119, 6, 0.08)",
      indicator: "#d97706",
      tag: "🗄 Racks",
      items: ["Network Racks", "Open Frame Racks", "Wall Mount Cabinets", "Rack Accessories", "Cable Management"]
    },
    {
      title: "Power Distribution",
      icon: <FaPlug />,
      color: "rgba(219, 39, 119, 0.08)",
      indicator: "#db2777",
      tag: "🔌 Power",
      items: ["Intelligent PDUs", "Rack Power Units", "ATS Switches", "Surge Protection", "Power Monitoring"]
    },
    {
      title: "Security & Monitoring",
      icon: <FaShieldAlt />,
      color: "rgba(75, 85, 99, 0.08)",
      indicator: "#4b5563",
      tag: "🔒 Security",
      items: ["CCTV Systems", "Biometric Access Control", "Environmental Sensors", "Smoke Detection", "Rack Security Locks"]
    },
    {
      title: "Cloud Infrastructure",
      icon: <FaCloud />,
      color: "rgba(16, 185, 129, 0.08)",
      indicator: "#10b981",
      tag: "☁ Cloud",
      items: ["Hyper-Converged (HCI)", "Virtualization Platforms", "Private Cloud Solutions", "Hybrid Cloud", "Edge Computing"]
    }
  ];

  // Data Center Accessories List
  const accessories = [
    "Fiber Optic Cables", "Patch Panels", "Network Patch Cords", "Rack Shelves", 
    "Rack Rails", "Cable Managers", "KVM Switches", "Rack Blank Panels", 
    "Server Rails", "Rack Mount Kits", "Power Cables", "Fiber Modules (SFP/SFP+)"
  ];

  // Top Brands
  const brands = [
    { name: "Dell Technologies", desc: "Enterprise Hardware" },
    { name: "HPE", desc: "Servers & Storage" },
    { name: "Lenovo", desc: "ThinkSystem Infrastructure" },
    { name: "Cisco", desc: "UCS & Networking" },
    { name: "Juniper Networks", desc: "Core Routing & Security" },
    { name: "Aruba", desc: "Enterprise Wireless" },
    { name: "NetApp", desc: "All-Flash Storage" },
    { name: "Synology", desc: "Network NAS Storage" },
    { name: "QNAP", desc: "Hybrid NAS Solutions" },
    { name: "APC by Schneider", desc: "UPS & Power Systems" },
    { name: "Eaton", desc: "Power Distribution" },
    { name: "Vertiv", desc: "Precision Cooling & Racks" },
    { name: "Huawei", desc: "ICT Infrastructure" },
    { name: "Supermicro", desc: "High Density Computing" },
    { name: "Intel", desc: "Xeon Processors" },
    { name: "AMD", desc: "EPYC Platforms" }
  ];

  // Why Choose Us
  const whyChooseUs = [
    { title: "Genuine Enterprise Products", desc: "100% authentic products sourced directly from brand authorized channel partners.", icon: <FaCheckCircle /> },
    { title: "Complete Infrastructure Solutions", desc: "A comprehensive catalog covering computing, storage, network, cooling, and security requirements.", icon: <FaBuilding /> },
    { title: "Certified Solution Experts", desc: "In-house systems architects delivering professional consultation, blueprint design, and deployment.", icon: <FaUserTie /> },
    { title: "Nationwide Delivery", desc: "Fast, secure, and fully insured shipping and logistics operations spanning across India.", icon: <FaShippingFast /> },
    { title: "Installation & Configuration", desc: "Complete physical rack assembly, structured cabling certifications, OS setups, and integration.", icon: <FaWrench /> },
    { title: "Dedicated Technical Support", desc: "Reliable, post-deployment technical support contracts matching business critical SLAs.", icon: <FaHeadset /> }
  ];

  // Industries We Serve
  const industries = [
    { name: "Enterprise Businesses", icon: <FaBriefcase /> },
    { name: "Cloud Service Providers", icon: <FaCloud /> },
    { name: "Government Organizations", icon: <FaLandmark /> },
    { name: "Banking & Financial Services", icon: <FaCoins /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Educational Institutions", icon: <FaUniversity /> },
    { name: "Telecom Companies", icon: <FaNetworkWired /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "IT & Software Companies", icon: <FaBuilding /> },
    { name: "Retail Enterprises", icon: <FaStore /> },
    { name: "Data Centers & Colocation Providers", icon: <FaServer /> }
  ];

  // Tabs Data (Services, Features, Solutions)
  const tabContent = {
    services: [
      { title: "Data Center Design & Planning", desc: "Architectural layouts mapping floor plans, electrical loads, cooling requirements, and redundancy configurations.", icon: <FaMap /> },
      { title: "Server Deployment", desc: "Physical installation, server board bios updates, out-of-band management setup, and OS deployment.", icon: <FaServer /> },
      { title: "Storage Implementation", desc: "Configuring high-integrity storage arrays, volume slicing, zoning, LUN mapping, and SAN switches configurations.", icon: <FaDatabase /> },
      { title: "Network Infrastructure Setup", desc: "L2/L3 core routing switches configurations, network trunks, stack configurations, and firewalls setup.", icon: <FaNetworkWired /> },
      { title: "Rack Installation", desc: "Professional alignment and anchoring of structural cabinets, mounting and slide configurations.", icon: <FaSlidersH /> },
      { title: "Structured Cabling", desc: "Clean overhead copper and fiber cable routing, neat dressing, patch panels loading, and db certification testing.", icon: <FaPlug /> },
      { title: "UPS Installation", desc: "Electrical deployment, batteries bank setups, power routing, automatic transfer switches installations, and testing.", icon: <FaBatteryFull /> },
      { title: "Data Center Migration", desc: "End-to-end safe replication, logistics planning, physical teardown, transport, rebuild, and re-initialization.", icon: <FaShippingFast /> },
      { title: "Virtualization Solutions", desc: "Hypervisor installations, storage integration, cluster setup, and virtual switches setup.", icon: <FaExpand /> },
      { title: "Cloud Integration", desc: "Connecting local architectures with public clouds (AWS, Azure, GCP) to create fluid hybrid networks.", icon: <FaCloud /> },
      { title: "Disaster Recovery Planning", desc: "Designing continuous data replication models and standby hot-site architectures.", icon: <FaHistory /> },
      { title: "Annual Maintenance (AMC)", desc: "Priority preventative cycles, remote support desk availability, and fast parts replacement support SLAs.", icon: <FaTools /> }
    ],
    features: [
      { title: "High Availability Infrastructure", desc: "Redundant cluster layouts ensuring zero downtime, automatic failovers, and backup network links.", icon: <FaNetworkWired /> },
      { title: "Enterprise Security", desc: "Multi-layered network protection, biometric lock options, stateful firewalls, and active threat blocks.", icon: <FaShieldAlt /> },
      { title: "Scalable Architecture", desc: "Modularity templates that allow incremental compute, network, and storage capacity scaling easily.", icon: <FaExpand /> },
      { title: "High-Speed Networking", desc: "Fiber-optic backbones ready to handle high-bandwidth 10G/40G/100G pipelines smoothly.", icon: <FaNetworkWired /> },
      { title: "Redundant Power Systems", desc: "Dual grid feeds, UPS battery banks, generators triggers, and active-active ATS switch grids.", icon: <FaPlug /> },
      { title: "Intelligent Monitoring", desc: "Constant dashboard metric tracking of power, heat levels, airflow rates, and active data flows.", icon: <FaHeartbeat /> },
      { title: "Energy Efficient Design", desc: "Air containment corridors, precision cooling curves, and high efficiency power units minimizing PUE metrics.", icon: <FaLeaf /> },
      { title: "Business Continuity", desc: "Clustered system redundancies ensuring critical enterprise databases and services remain fully online.", icon: <FaBriefcase /> },
      { title: "Disaster Recovery Ready", desc: "Built-in replication parameters that quickly bring duplicate off-site facilities live on failure.", icon: <FaHistory /> },
      { title: "24×7 Reliability", desc: "Robust industrial components certified to operate persistently at 100% capacity cycle loads.", icon: <FaCheckCircle /> }
    ],
    solutions: [
      { title: "Enterprise Data Centers", desc: "Complete end-to-end local infrastructure planning and setup for medium and large corporations.", icon: <FaBuilding /> },
      { title: "Private Cloud Infrastructure", desc: "Resilient on-premise cloud infrastructure providing local data control, sandbox APIs, and high security.", icon: <FaCloud /> },
      { title: "Virtualization Solutions", desc: "Maximize server computing density, run multiple isolated workloads, and reduce hardware footprints.", icon: <FaSlidersH /> },
      { title: "Backup & Disaster Recovery", desc: "Structured data backup paths, continuous replica processes, and hot-standby architectures.", icon: <FaHistory /> },
      { title: "Data Center Monitoring", desc: "Telemetry systems providing remote alerts on power loads, thermal heat pockets, humidity, and network logs.", icon: <FaHeartbeat /> },
      { title: "Edge Computing", desc: "Localized, compact server units deployed near point-of-use grids to reduce latency and data roundtrips.", icon: <FaNetworkWired /> }
    ]
  };

  // FAQs
  const faqs = [
    {
      q: "Can you design a complete data center?",
      a: "Yes, we provide complete end-to-end planning, physical space layout design, power supply budgeting, precision cooling design, installation, hardware deployment, and final commissioning services."
    },
    {
      q: "Do you supply enterprise servers and storage?",
      a: "Yes, we offer a comprehensive range of rack, tower, and blade servers, high-capacity NAS/SAN storage arrays, and enterprise-class switches and routers from leading global brands."
    },
    {
      q: "Do you provide installation services?",
      a: "Yes, our certified network, server, and power engineers handle physical assembly, cabling routing, structured terminations, power integrations, software deployment, and system stress testing."
    },
    {
      q: "Can you support existing data centers?",
      a: "Yes, we provide upgrade components, network consolidation services, thermal audits, monitoring systems integration, virtual integrations, and routine annual maintenance contracts (AMC)."
    },
    {
      q: "Do products include manufacturer warranty?",
      a: "Yes, all products sourced through us are 100% authentic and come with full manufacturer warranties, hardware support options, and official brand support SLAs."
    }
  ];

  return (
    <div className="datacenter-page">
      <Header />

      {/* Luminous Blur Glow Background Accents */}
      <div className="glow-spot glow-spot-1"></div>
      <div className="glow-spot glow-spot-2"></div>
      <div className="glow-spot glow-spot-3"></div>
      <div className="glow-spot glow-spot-4"></div>

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <span className="badge-premium" id="hero-badge">
                  ⚡ Data Center Infrastructure
                </span>
                <h1 className="hero-title-datacenter sf-pro-font" id="hero-title">
                  Enterprise Data <br />
                  <span>Center Solutions</span>
                </h1>
                <p className="hero-subtitle funnel-sans" id="hero-subtitle">
                  Build secure, scalable, and high-performance data centers with enterprise-grade servers, storage, networking, power, cooling, and infrastructure solutions from the world's leading technology brands.
                </p>
                <p className="hero-intro-text funnel-sans" id="hero-intro">
                  We provide end-to-end data center infrastructure solutions for businesses of all sizes. Whether you're building a new data center, expanding an existing facility, or upgrading your IT infrastructure, we offer enterprise-class products, expert consultation, deployment services, and ongoing technical support.
                </p>
                <div className="cta-group" id="hero-cta-group">
                  <a href="#categories" className="btn-premium-primary funnel-sans" id="cta-explore">
                    Explore Products <FaArrowRight />
                  </a>
                  <a href="/contact" className="btn-premium-secondary funnel-sans" id="cta-quote">
                    Request a Quote
                  </a>
                  <a href="/contact" className="btn-premium-outline funnel-sans" id="cta-expert">
                    Talk to an Expert
                  </a>
                  <a href="/aboutus" className="btn-premium-outline funnel-sans" id="cta-about">
                    About Our Solutions
                  </a>
                </div>
              </motion.div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                className="hero-image-wrapper"
                id="hero-img-wrapper"
              >
                <div className="hero-image-container">
                  <img 
                    src="/images/premium_datacenter_hero.png" 
                    alt="Enterprise Data Center Cabinets Row" 
                    id="hero-main-img"
                  />
                  <div className="image-glow-overlay"></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Categories Section */}
      <section className="categories-section" id="categories">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="cat-subtitle">Ecosystem Catalog</span>
            <h2 className="section-title-premium sf-pro-font" id="cat-title">
              Data Center <span>Product Categories</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="cat-desc">
              Every category component required to construct, power, ventilate, network, and secure high-performance computing centers.
            </p>
          </div>

          <motion.div 
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((cat, idx) => (
              <Col md={6} lg={4} key={idx} className="category-grid-item">
                <motion.div 
                  className="glass-card-premium category-card"
                  variants={fadeInUp}
                  id={`cat-card-${idx}`}
                >
                  <div className="card-top">
                    <div 
                      className="category-icon-wrapper" 
                      style={{ backgroundColor: cat.color, color: cat.indicator }}
                      id={`cat-icon-${idx}`}
                    >
                      {cat.icon}
                    </div>
                    <h3 className="category-card-title sf-medium-font" id={`cat-title-${idx}`}>{cat.title}</h3>
                    <ul className="category-items-list funnel-sans" id={`cat-list-${idx}`}>
                      {cat.items.map((item, itemIdx) => (
                        <li className="category-item" key={itemIdx}>
                          <span 
                            className="bullet-indicator" 
                            style={{ backgroundColor: cat.indicator }}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="category-card-footer">
                    <span className="category-card-tag funnel-sans">{cat.tag}</span>
                    <a href="/contact" className="category-card-arrow" id={`cat-link-${idx}`}>
                      <FaArrowRight />
                    </a>
                  </div>
                </motion.div>
              </Col>
            ))}
          </motion.div>

          {/* Accessories Badge Grid */}
          <div className="accessories-sub-section" id="accessories">
            <h3 className="accessories-title sf-pro-font" id="acc-title">
              Infrastructure Accessories & Component Essentials
            </h3>
            <div className="accessory-badge-grid" id="acc-badge-grid">
              {accessories.map((item, idx) => (
                <span className="accessory-badge funnel-sans" key={idx} id={`acc-badge-${idx}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Brands Section */}
      <section className="brands-section" id="brands">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="brands-subtitle">Authorized Hardware Partners</span>
            <h2 className="section-title-premium sf-pro-font" id="brands-title">
              Leading Technology <span>Brands</span> We Supply
            </h2>
            <p className="section-desc-premium funnel-sans" id="brands-desc">
              We collaborate with global infrastructure developers to distribute fully licensed, warranted, and SLA-supported components.
            </p>
          </div>

          <Row className="g-3 brand-grid" id="brands-grid">
            {brands.map((brand, idx) => (
              <Col xs={6} md={3} lg={3} key={idx}>
                <motion.div 
                  className="brand-card-premium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  id={`brand-card-${idx}`}
                >
                  <span className="brand-card-name sf-pro-font" id={`brand-name-${idx}`}>{brand.name}</span>
                  <span className="brand-card-sub funnel-sans" id={`brand-sub-${idx}`}>{brand.desc}</span>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Interactive Tabs Section */}
      <section className="interactive-tabs-section" id="ecosystem">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="eco-subtitle">Core Infrastructure Ecosystem</span>
            <h2 className="section-title-premium sf-pro-font" id="eco-title">
              Services, Features & <span>Solutions Offerings</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="eco-desc">
              Explore our core technical services, engineering features, and specific solution models we offer.
            </p>
          </div>

          {/* Navigation Bar */}
          <div className="tabs-navigation-wrapper" id="eco-tabs-wrapper">
            <div className="tab-nav-bar">
              <button 
                className={`tab-nav-btn funnel-sans ${activeTab === "services" ? "active" : ""}`}
                onClick={() => setActiveTab("services")}
                id="tab-btn-services"
              >
                <FaWrench /> Core Services
              </button>
              <button 
                className={`tab-nav-btn funnel-sans ${activeTab === "features" ? "active" : ""}`}
                onClick={() => setActiveTab("features")}
                id="tab-btn-features"
              >
                <FaSlidersH /> Key Features
              </button>
              <button 
                className={`tab-nav-btn funnel-sans ${activeTab === "solutions" ? "active" : ""}`}
                onClick={() => setActiveTab("solutions")}
                id="tab-btn-solutions"
              >
                <FaBuilding /> Solutions We Offer
              </button>
            </div>
          </div>

          {/* Interactive Grid */}
          <div className="tab-content-panel" id="eco-tab-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="row g-4"
              >
                {tabContent[activeTab].map((item, idx) => (
                  <Col md={6} lg={4} key={idx} className="feature-grid-item">
                    <div className="feature-pill-card" id={`feature-pill-${idx}`}>
                      <div className="feature-pill-icon" id={`feature-icon-${idx}`}>
                        {item.icon}
                      </div>
                      <div className="feature-pill-details">
                        <h4 className="feature-pill-title sf-medium-font" id={`feature-title-${idx}`}>{item.title}</h4>
                        <p className="feature-pill-desc funnel-sans" id={`feature-desc-${idx}`}>{item.desc}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section" id="why-choose-us">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="why-subtitle">Our Guarantees</span>
            <h2 className="section-title-premium sf-pro-font" id="why-title">
              Why Choose <span>Crescent</span> for Data Centers?
            </h2>
            <p className="section-desc-premium funnel-sans" id="why-desc">
              We carry authorized partnerships, certified expertise, nationwide dispatch capability, and post-installation SLAs to maintain uptime.
            </p>
          </div>

          <Row className="g-4" id="why-grid">
            {whyChooseUs.map((item, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-3">
                <motion.div 
                  className="glass-card-premium why-card text-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  id={`why-card-${idx}`}
                >
                  <div className="why-icon-wrapper" id={`why-icon-${idx}`}>
                    {item.icon}
                  </div>
                  <h3 className="why-card-title sf-medium-font" id={`why-card-title-${idx}`}>{item.title}</h3>
                  <p className="why-card-desc funnel-sans" id={`why-card-desc-${idx}`}>{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section" id="industries">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="ind-subtitle">Workload Optimization</span>
            <h2 className="section-title-premium sf-pro-font" id="ind-title">
              Industries We <span>Serve</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="ind-desc">
              We design and configure customized local hardware stack configurations tuned specifically for industry workloads.
            </p>
          </div>

          <Row className="g-3" id="ind-grid">
            {industries.map((ind, idx) => (
              <Col xs={12} sm={6} lg={4} key={idx}>
                <motion.div 
                  className="industry-card-premium"
                  whileHover={{ y: -4 }}
                  id={`ind-card-${idx}`}
                >
                  <div className="industry-icon" id={`ind-icon-${idx}`}>
                    {ind.icon}
                  </div>
                  <span className="industry-name sf-medium-font" id={`ind-name-${idx}`}>{ind.name}</span>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="faq-section" id="faqs">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="faq-subtitle">Got Questions?</span>
            <h2 className="section-title-premium sf-pro-font" id="faq-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="faq-desc">
              Find fast responses about our planning operations, hardware supply limits, deployment services, and product warranties.
            </p>
          </div>

          <div className="faq-wrapper" id="faq-accordion">
            {faqs.map((faq, idx) => (
              <div 
                className={`faq-item-premium ${openFaq === idx ? "active" : ""}`} 
                key={idx}
                id={`faq-item-${idx}`}
              >
                <button 
                  className="faq-trigger" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  id={`faq-trigger-${idx}`}
                >
                  <h3 className="faq-question sf-medium-font" id={`faq-q-${idx}`}>{faq.q}</h3>
                  <span className="faq-chevron" id={`faq-chevron-${idx}`}><FaChevronDown /></span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-content-wrapper"
                      id={`faq-content-${idx}`}
                    >
                      <p className="faq-answer funnel-sans" id={`faq-a-${idx}`}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Datacenter;

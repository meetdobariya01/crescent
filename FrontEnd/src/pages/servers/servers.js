import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaServer,
  FaMicrochip,
  FaDatabase,
  FaCloud,
  FaHdd,
  FaNetworkWired,
  FaCheckCircle,
  FaWrench,
  FaTools,
  FaBuilding,
  FaArrowRight,
  FaChevronDown,
  FaShieldAlt,
  FaSyncAlt,
  FaHistory,
  FaSlidersH,
  FaFileAlt,
  FaLock,
  FaUsers,
  FaUniversity,
  FaHospital,
  FaCoins,
  FaLandmark,
  FaIndustry,
  FaStore,
  FaUserShield,
  FaHeadset,
  FaShippingFast,
  FaTerminal,
  FaWindowRestore,
  FaLaptopCode,
  FaCogs,
  FaProjectDiagram,
  FaMap,
} from "react-icons/fa";
import "./servers.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Servers = () => {
  const [activeTab, setActiveTab] = useState("services");
  const [openFaq, setOpenFaq] = useState(null);

  // SEO metadata & Scroll to top
  useEffect(() => {
    document.title =
      "Enterprise Servers & Server Management Solutions | Crescent";
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaContent =
      "Power your business with rack servers, tower servers, blade servers, virtualization platforms, and professional server management services from Dell, HPE, Cisco, and Lenovo.";
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
      behavior: "instant",
    });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Server Categories Data
  const categories = [
    {
      title: "Tower Servers",
      icon: <FaServer />,
      color: "rgba(37, 99, 235, 0.08)",
      indicator: "#2563eb",
      tag: "🖥 Tower",
      items: [
        "Small Business Servers",
        "Office Servers",
        "Expandable Configurations",
        "Cost-Effective Solutions",
      ],
    },
    {
      title: "Rack Servers",
      icon: <FaDatabase />,
      color: "rgba(124, 58, 237, 0.08)",
      indicator: "#7c3aed",
      tag: "🗄 Rack",
      items: [
        "1U & 2U Servers",
        "High Performance Computing",
        "Data Center Deployment",
        "Virtualization Ready",
      ],
    },
    {
      title: "Blade Servers",
      icon: <FaSlidersH />,
      color: "rgba(8, 145, 178, 0.08)",
      indicator: "#0891b2",
      tag: "⚙ Blade",
      items: [
        "Enterprise Infrastructure",
        "High Density Computing",
        "Scalable Architecture",
        "Centralized Management",
      ],
    },
    {
      title: "Virtualization Servers",
      icon: <FaWindowRestore />,
      color: "rgba(13, 148, 136, 0.08)",
      indicator: "#0d9488",
      tag: "☁ Virtual",
      items: [
        "VMware Ready",
        "Microsoft Hyper-V",
        "Proxmox VE",
        "Multi-VM Hosting",
      ],
    },
    {
      title: "Storage Servers",
      icon: <FaHdd />,
      color: "rgba(220, 38, 38, 0.08)",
      indicator: "#dc2626",
      tag: "💾 Storage",
      items: ["File Servers", "Backup Servers", "NAS Solutions", "SAN Storage"],
    },
    {
      title: "Database Servers",
      icon: <FaTerminal />,
      color: "rgba(217, 119, 6, 0.08)",
      indicator: "#d97706",
      tag: "🌐 Database",
      items: ["SQL Server", "Oracle Database", "PostgreSQL", "MySQL Hosting"],
    },
    {
      title: "Backup & DR Servers",
      icon: <FaHistory />,
      color: "rgba(219, 39, 119, 0.08)",
      indicator: "#db2777",
      tag: "🛡 Recovery",
      items: [
        "Automated Backup",
        "Data Replication",
        "Disaster Recovery Planning",
        "Business Continuity",
      ],
    },
    {
      title: "Cloud & Hybrid",
      icon: <FaCloud />,
      color: "rgba(75, 85, 99, 0.08)",
      indicator: "#4b5563",
      tag: "☁ Hybrid",
      items: [
        "Private Cloud",
        "Hybrid Cloud",
        "Virtual Infrastructure",
        "Cloud Integration",
      ],
    },
  ];

  // Lifecycle Server Management services
  const managementServices = [
    { name: "Server Installation", icon: <FaWrench /> },
    { name: "Operating System Deployment", icon: <FaLaptopCode /> },
    { name: "RAID Configuration", icon: <FaDatabase /> },
    { name: "Firmware Updates", icon: <FaSyncAlt /> },
    { name: "Performance Optimization", icon: <FaMicrochip /> },
    { name: "Security Hardening", icon: <FaLock /> },
    { name: "Backup Configuration", icon: <FaHistory /> },
    { name: "Disaster Recovery Planning", icon: <FaShieldAlt /> },
    { name: "Remote Monitoring", icon: <FaTerminal /> },
    { name: "Preventive Maintenance", icon: <FaTools /> },
    { name: "Server Migration", icon: <FaProjectDiagram /> },
    { name: "Virtual Machine Management", icon: <FaWindowRestore /> },
  ];

  // OS Marquee Data
  const supportedOS = [
    "Windows Server",
    "Ubuntu Server",
    "Red Hat Enterprise Linux (RHEL)",
    "Rocky Linux",
    "AlmaLinux",
    "Debian",
    "SUSE Linux Enterprise",
    "VMware ESXi",
    "Proxmox VE",
  ];

  // Server Brands
  const serverBrands = [
    { name: "Dell Technologies", desc: "PowerEdge Series" },
    { name: "HPE", desc: "ProLiant & Synergy" },
    { name: "Lenovo", desc: "ThinkSystem Range" },
    { name: "Cisco", desc: "UCS Systems" },
    { name: "IBM", desc: "Power Systems" },
    { name: "Supermicro", desc: "High Density Servers" },
    { name: "Fujitsu", desc: "PRIMERGY Servers" },
    { name: "ASUS", desc: "Rack & GPU Servers" },
    { name: "Intel", desc: "Server Boards" },
    { name: "AMD", desc: "EPYC Server Platforms" },
    { name: "Synology", desc: "NAS Storage" },
    { name: "QNAP", desc: "Enterprise NAS" },
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "Genuine Enterprise Hardware",
      desc: "Authorized products sourced directly from brand suppliers with official manufacturer warranty support.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Professional Deployment",
      desc: "End-to-end installation, OS deployment, virtualization layers, and configuration matching custom workload standards.",
      icon: <FaWrench />,
    },
    {
      title: "Enterprise Security",
      desc: "Hardened OS settings, firewalls integration, access level protocols, and multi-factor authentication setup.",
      icon: <FaLock />,
    },
    {
      title: "24/7 Technical Support",
      desc: "Dedicated round-the-clock help-desk assistance, remote monitoring, diagnostic debugging, and preventive care.",
      icon: <FaHeadset />,
    },
    {
      title: "Nationwide Delivery",
      desc: "Fast, highly secure, and insured logistics delivery networks reaching major cities and business centers across India.",
      icon: <FaShippingFast />,
    },
    {
      title: "Enterprise IT Solutions",
      desc: "Comprehensive architecture blueprinting, scaling parameters, high availability setups, and backup systems planning.",
      icon: <FaBuilding />,
    },
  ];

  // Industries We Serve
  const industries = [
    { name: "IT Companies", icon: <FaBuilding /> },
    { name: "Data Centers", icon: <FaServer /> },
    { name: "Financial Institutions", icon: <FaCoins /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Government Organizations", icon: <FaLandmark /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Educational Institutions", icon: <FaUniversity /> },
    { name: "Retail Chains", icon: <FaStore /> },
    { name: "Hospitality", icon: <FaBuilding /> },
    { name: "Telecom Providers", icon: <FaNetworkWired /> },
  ];

  // Tabbed Content data (Services, Features, Hardware/Security)
  const tabContent = {
    services: [
      {
        title: "Server Sales",
        desc: "Procure tower, rack, and blade servers configured specifically to your organization's computing parameters.",
        icon: <FaServer />,
      },
      {
        title: "Infrastructure Consultation",
        desc: "Expert assessment of data workflows, virtualization scope, storage capacities, and security metrics.",
        icon: <FaMap />,
      },
      {
        title: "Rack Installation",
        desc: "On-site server rack layout planning, cooling integration, power line deployment, and physical mounting.",
        icon: <FaBuilding />,
      },
      {
        title: "Virtualization Deployment",
        desc: "Setup hypervisors to consolidate hardware footprints, allocate computing cores, and host isolated VMs.",
        icon: <FaWindowRestore />,
      },
      {
        title: "Active Directory Setup",
        desc: "Implement centralized user group permissions, email integrations, and network authentication rules.",
        icon: <FaUsers />,
      },
      {
        title: "File Server Configuration",
        desc: "Deploy high-volume folder directories structured with granular read/write authorization keys.",
        icon: <FaFileAlt />,
      },
      {
        title: "Backup Solutions",
        desc: "Establish backup routines spanning localized disks, offsite network nodes, and secure cloud locations.",
        icon: <FaHistory />,
      },
      {
        title: "NAS & SAN Deployment",
        desc: "Deploy high-availability Network Attached Storage or high-speed Storage Area Networks.",
        icon: <FaHdd />,
      },
      {
        title: "Remote Server Management",
        desc: "Complete outsourcing of system oversight, monitoring, alert response, and routine maintenance.",
        icon: <FaTools />,
      },
      {
        title: "Annual Maintenance (AMC)",
        desc: "Corporate AMC agreements providing preventative checks, replacement coverage, and fast support response SLAs.",
        icon: <FaWrench />,
      },
      {
        title: "Server Upgrades",
        desc: "Professional installation of additional CPU sockets, RAM banks, fast PCIe storage, and dual-port NICs.",
        icon: <FaMicrochip />,
      },
      {
        title: "Hardware Replacement",
        desc: "Rapid diagnostic verification and replacement of failed hot-swappable drives, fans, and power supplies.",
        icon: <FaCogs />,
      },
    ],
    features: [
      {
        title: "Intel Xeon Processors",
        desc: "High performance architecture featuring dedicated AI workloads engines and integrated security mechanisms.",
        icon: <FaMicrochip />,
      },
      {
        title: "AMD EPYC Processors",
        desc: "Leading multi-core scaling efficiency matching heavy compute demands, big databases, and VM hypervisors.",
        icon: <FaMicrochip />,
      },
      {
        title: "ECC Memory",
        desc: "Error-Correcting Code RAM that prevents data corruption and hardware crashes automatically.",
        icon: <FaDatabase />,
      },
      {
        title: "NVMe Storage Arrays",
        desc: "PCIe-attached Solid State Drives providing ultra-low query latency and multi-gigabit throughput rates.",
        icon: <FaHdd />,
      },
      {
        title: "RAID Support arrays",
        desc: "Hardware RAID controllers configured in secure, fault-tolerant configurations (RAID 1, 5, 6, 10).",
        icon: <FaDatabase />,
      },
      {
        title: "Redundant Power Supplies",
        desc: "Dual hot-swappable power bricks utilizing independent AC power grids to guarantee zero power loss.",
        icon: <FaServer />,
      },
      {
        title: "iDRAC / iLO Management",
        desc: "Dedicated hardware chipsets letting IT administrators connect, reset, power, and configure nodes out-of-band.",
        icon: <FaTerminal />,
      },
      {
        title: "Virtualization Ready",
        desc: "Advanced motherboard chip configurations built specifically to accelerate hardware-level guest hypervisors.",
        icon: <FaWindowRestore />,
      },
      {
        title: "High Availability (HA)",
        desc: "Clustering parameters configured to switch critical database sessions to redundant backup nodes instantly.",
        icon: <FaNetworkWired />,
      },
      {
        title: "Hot-Swappable Drives",
        desc: "Drive bays configured for seamless storage swap operations without power downs or system restarts.",
        icon: <FaHdd />,
      },
    ],
    infrastructure: [
      {
        title: "Server Racks & Cabinets",
        desc: "Standard 19-inch configurations optimized for optimal air ventilation, cabling routes, and security key locks.",
        icon: <FaBuilding />,
      },
      {
        title: "Rack PDU & UPS Systems",
        desc: "Smart Power Distribution Units paired with online double-conversion backup power supplies.",
        icon: <FaNetworkWired />,
      },
      {
        title: "Enterprise switches & Routers",
        desc: "Multi-gigabit network backbones, fiber-optic distribution routes, and layer-3 core routing switches.",
        icon: <FaNetworkWired />,
      },
      {
        title: "Firewalls & Endpoint Security",
        desc: "Dedicated UTM firewall appliances, active content blockers, VPN tunnels, and antivirus configurations.",
        icon: <FaShieldAlt />,
      },
      {
        title: "Structured Cabling & Panels",
        desc: "Neat routing layouts using CAT6A/CAT8 ethernet, fiber cables, patch panels, and certification testing.",
        icon: <FaProjectDiagram />,
      },
      {
        title: "KVM Switches",
        desc: "Multi-port hardware switches letting technicians console access multiple server nodes via a single screen.",
        icon: <FaTerminal />,
      },
      {
        title: "Server Monitoring systems",
        desc: "Persistent metric charts mapping CPU heat, memory load, disk utilization, and response latencies.",
        icon: <FaSlidersH />,
      },
      {
        title: "Backup Verification",
        desc: "Automated simulation runs checking the health, structure, and readability of your restore files.",
        icon: <FaCheckCircle />,
      },
      {
        title: "Log Management",
        desc: "Consolidated system events tracking that helps detect anomaly sessions, access errors, and hardware warnings.",
        icon: <FaFileAlt />,
      },
      {
        title: "Multi-Factor Auth (MFA)",
        desc: "Identity integration requiring hardware codes or authenticator tokens before administrative access.",
        icon: <FaLock />,
      },
      {
        title: "Patch Management",
        desc: "Scheduled cycles verifying and updating hypervisor systems, OS kernels, and application layers safely.",
        icon: <FaSyncAlt />,
      },
      {
        title: "User Access Control",
        desc: "Granular administrative privileges structured under standard zero-trust authentication policies.",
        icon: <FaUserShield />,
      },
    ],
  };

  // FAQs
  const faqs = [
    {
      q: "Which server is suitable for my business?",
      a: "Our experts recommend server configurations based on your specific workloads, the number of concurrent users, active applications, virtualization scope, storage capacities, and future scalability requirements.",
    },
    {
      q: "Do you provide installation and setup?",
      a: "Yes, we offer complete end-to-end server installation, operating system deployment, virtualization hypervisors installation, RAID group configuration, active directory setup, and network infrastructure integration services.",
    },
    {
      q: "Can you manage our existing servers?",
      a: "Yes, we provide extensive server management services for existing infrastructure, including remote monitoring, diagnostic health checks, security patch hardening, hardware upgrades, and performance optimization.",
    },
    {
      q: "Do you offer virtualization solutions?",
      a: "Yes, we deploy and manage enterprise-grade VMware ESXi, Microsoft Hyper-V, and Proxmox VE environments for optimal physical resource utilization, sandbox isolation, and effortless VM hosting scaling.",
    },
    {
      q: "Are the servers covered under warranty?",
      a: "Yes, all server hardware, processors, memory modules, storage arrays, and network cards purchased from us come with the applicable manufacturer-direct warranties and brand service SLAs.",
    },
  ];

  return (
    <div className="servers-page">
      <Header />

      {/* Luminous Blur Glow Background Accents */}
      <div className="glow-spot glow-spot-1"></div>
      <div className="glow-spot glow-spot-2"></div>
      <div className="glow-spot glow-spot-3"></div>
      <div className="glow-spot glow-spot-4"></div>

      {/* Hero Section */}
      <section className="hero-section mt-5" id="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <span className="badge-premium" id="hero-badge">
                  ⚡ Enterprise Infrastructure Solutions
                </span>
                <h1 className="hero-title-servers sf-pro-font" id="hero-title">
                  Enterprise Servers & <br />
                  <span>Server Management</span>
                </h1>
                <p className="hero-subtitle funnel-sans" id="hero-subtitle">
                  Power your business with reliable rack servers, tower servers,
                  blade servers, storage systems, virtualization platforms, and
                  professional server management services from industry-leading
                  brands.
                </p>
                <p className="hero-intro-text funnel-sans" id="hero-intro">
                  We deliver comprehensive server and infrastructure solutions
                  for businesses of all sizes. From entry-level tower servers to
                  enterprise-grade rack and blade systems, we provide genuine
                  hardware, professional deployment, virtualization, storage
                  integration, security, and ongoing server management to keep
                  your IT infrastructure running efficiently.
                </p>
                <div className="cta-group" id="hero-cta-group">
                  <a
                    href="#categories"
                    className="btn-premium-primary funnel-sans"
                    id="cta-explore"
                  >
                    Explore Servers <FaArrowRight />
                  </a>
                  <a
                    href="/contact"
                    className="btn-premium-secondary funnel-sans"
                    id="cta-quote"
                  >
                    Request a Quote
                  </a>
                  <a
                    href="/contact"
                    className="btn-premium-outline funnel-sans"
                    id="cta-experts"
                  >
                    Contact Our Experts
                  </a>
                  <a
                    href="/aboutus"
                    className="btn-premium-outline funnel-sans"
                    id="cta-about"
                  >
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
                    src="/images/premium_server_hero.png"
                    alt="Enterprise Server Hardware Rack"
                    id="hero-main-img"
                  />
                  <div className="image-glow-overlay"></div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Server Categories Section */}
      <section className="categories-section" id="categories">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="cat-subtitle">
              Hardware Solutions
            </span>
            <h2 className="section-title-premium sf-pro-font" id="cat-title">
              Explore Server <span>Categories</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="cat-desc">
              From entry-level servers configured for small office networks to
              scalable high-density rack infrastructure suitable for enterprise
              data centers.
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
              <Col md={6} lg={3} key={idx} className="category-grid-item">
                <motion.div
                  className="glass-card-premium category-card"
                  variants={fadeInUp}
                  id={`cat-card-${idx}`}
                >
                  <div className="card-top">
                    <div
                      className="category-icon-wrapper"
                      style={{
                        backgroundColor: cat.color,
                        color: cat.indicator,
                      }}
                      id={`cat-icon-${idx}`}
                    >
                      {cat.icon}
                    </div>
                    <h3
                      className="category-card-title sf-medium-font"
                      id={`cat-title-${idx}`}
                    >
                      {cat.title}
                    </h3>
                    <ul
                      className="category-items-list funnel-sans"
                      id={`cat-list-${idx}`}
                    >
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
                    <span className="category-card-tag funnel-sans">
                      {cat.tag}
                    </span>
                    <a
                      href="/contact"
                      className="category-card-arrow"
                      id={`cat-link-${idx}`}
                    >
                      <FaArrowRight />
                    </a>
                  </div>
                </motion.div>
              </Col>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Server Management Section */}
      <section className="management-section" id="management">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-start"
              >
                <span className="section-subtitle-premium" id="mgmt-subtitle">
                  Complete Lifecycle Care
                </span>
                <h2
                  className="section-title-premium sf-pro-font text-start"
                  id="mgmt-title"
                >
                  Professional <span>Server Management</span> Services
                </h2>
                <p
                  className="section-desc-premium text-start ms-0 funnel-sans"
                  id="mgmt-desc"
                >
                  We provide complete server lifecycle management. Our
                  experienced systems administrators offload technical
                  infrastructure complexity so your team can focus on
                  operations.
                </p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="btn-premium-primary funnel-sans"
                    id="mgmt-cta"
                  >
                    Consult an Administrator <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            </Col>
            <Col lg={7} className="mt-5 mt-lg-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="management-list-grid"
                id="mgmt-grid"
              >
                {managementServices.map((svc, idx) => (
                  <div
                    className="management-item-card"
                    key={idx}
                    id={`mgmt-card-${idx}`}
                  >
                    <div
                      className="management-item-icon"
                      id={`mgmt-icon-${idx}`}
                    >
                      {svc.icon}
                    </div>
                    <span
                      className="management-item-name sf-medium-font"
                      id={`mgmt-name-${idx}`}
                    >
                      {svc.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Operating Systems & Brands Marquees */}
      <section className="os-brands-section" id="platforms">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="platforms-subtitle">
              Supported Software & Brands
            </span>
            <h2
              className="section-title-premium sf-pro-font"
              id="platforms-title"
            >
              Top Server <span>Brands & OS</span> Integration
            </h2>
            <p className="section-desc-premium funnel-sans" id="platforms-desc">
              We deploy official, licensed, and enterprise-supported software
              distributions across highly resilient server architectures.
            </p>
          </div>
        </Container>

        {/* Operating Systems Marquee */}
        <div className="marquee-container" id="os-marquee">
          <div className="marquee-track">
            {/* Double the list to support infinite scroll */}
            {[...supportedOS, ...supportedOS].map((os, idx) => (
              <div className="marquee-item" key={idx}>
                <span className="marquee-item-logo">
                  <FaTerminal />
                </span>
                <span className="funnel-sans">{os}</span>
              </div>
            ))}
          </div>
        </div>

        <Container className="mt-5">
          <h4
            className="text-center sf-medium-font mb-4 text-muted"
            id="brands-grid-title"
            style={{
              fontSize: "1.2rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Authorized Enterprise Hardware Partners
          </h4>
          <Row className="g-3" id="brands-grid">
            {serverBrands.map((brand, idx) => (
              <Col xs={6} md={3} lg={2} key={idx}>
                <motion.div
                  className="brand-card-premium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  id={`brand-card-${idx}`}
                >
                  <span
                    className="brand-card-name sf-pro-font"
                    id={`brand-name-${idx}`}
                  >
                    {brand.name}
                  </span>
                  <span
                    className="brand-card-sub funnel-sans"
                    id={`brand-sub-${idx}`}
                  >
                    {brand.desc}
                  </span>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features & Solutions Tabs Section */}
      <section className="features-security-section" id="solutions">
        <Container>
          <div className="section-title-container">
            <span className="section-subtitle-premium" id="sol-subtitle">
              Interactive Solutions
            </span>
            <h2 className="section-title-premium sf-pro-font" id="sol-title">
              Solutions & <span>Technical Ecosystem</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="sol-desc">
              Explore our core services, enterprise processor features,
              networking components, and multi-layered server security tools.
            </p>    
          </div>

          {/* Custom Navigation */}
          <div className="tabs-navigation-wrapper" id="sol-tabs-wrapper">
            <div className="tab-nav-bar">
              <button
                className={`tab-nav-btn funnel-sans ${activeTab === "services" ? "active" : ""}`}
                onClick={() => setActiveTab("services")}
                id="tab-btn-services"
              >
                <FaWrench /> Technical Services
              </button>
              <button
                className={`tab-nav-btn funnel-sans ${activeTab === "features" ? "active" : ""}`}
                onClick={() => setActiveTab("features")}
                id="tab-btn-features"
              >
                <FaMicrochip /> Server Features
              </button>
              <button
                className={`tab-nav-btn funnel-sans ${activeTab === "infrastructure" ? "active" : ""}`}
                onClick={() => setActiveTab("infrastructure")}
                id="tab-btn-infra"
              >
                <FaShieldAlt /> Infra & Security
              </button>
            </div>
          </div>

          {/* Interactive Panels */}
          <div className="tab-content-panel" id="sol-tab-panel">
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
                    <div
                      className="feature-pill-card"
                      id={`feature-pill-${idx}`}
                    >
                      <div
                        className="feature-pill-icon"
                        id={`feature-icon-${idx}`}
                      >
                        {item.icon}
                      </div>
                      <div className="feature-pill-details">
                        <h4
                          className="feature-pill-title sf-medium-font"
                          id={`feature-title-${idx}`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="feature-pill-desc funnel-sans"
                          id={`feature-desc-${idx}`}
                        >
                          {item.desc}
                        </p>
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
            <span className="section-subtitle-premium" id="why-subtitle">
              Our Commitments
            </span>
            <h2 className="section-title-premium sf-pro-font" id="why-title">
              Why Choose <span>Crescent</span> for Servers?
            </h2>
            <p className="section-desc-premium funnel-sans" id="why-desc">
              We bring technical experience, brand authorizations, and dedicated
              support parameters to secure and run your critical enterprise IT
              infrastructure.
            </p>
          </div>

          <Row className="g-4" id="why-grid">
            {whyChooseUs.map((item, idx) => (
              <Col sm={6} md={6} lg={4} key={idx} className="mb-3">
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
                  <h3
                    className="why-card-title sf-medium-font"
                    id={`why-card-title-${idx}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="why-card-desc funnel-sans"
                    id={`why-card-desc-${idx}`}
                  >
                    {item.desc}
                  </p>
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
            <span className="section-subtitle-premium" id="ind-subtitle">
              Sectors Covered
            </span>
            <h2 className="section-title-premium sf-pro-font" id="ind-title">
              Industries We <span>Serve</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="ind-desc">
              We design, build, configure, and maintain custom servers and
              virtualization architecture optimized for specific sector
              workflows.
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
                  <span
                    className="industry-name sf-medium-font"
                    id={`ind-name-${idx}`}
                  >
                    {ind.name}
                  </span>
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
            <span className="section-subtitle-premium" id="faq-subtitle">
              Common Inquiries
            </span>
            <h2 className="section-title-premium sf-pro-font" id="faq-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-desc-premium funnel-sans" id="faq-desc">
              Find instant answers to common questions about server
              configurations, implementation parameters, and lifecycle
              maintenance services.
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
                  <h3
                    className="faq-question sf-medium-font"
                    id={`faq-q-${idx}`}
                  >
                    {faq.q}
                  </h3>
                  <span className="faq-chevron" id={`faq-chevron-${idx}`}>
                    <FaChevronDown />
                  </span>
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
                      <p className="faq-answer funnel-sans" id={`faq-a-${idx}`}>
                        {faq.a}
                      </p>
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

export default Servers;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPrint,
  FaBolt,
  FaCopy,
  FaCamera,
  FaTag,
  FaKeyboard,
  FaCheckCircle,
  FaTruck,
  FaTools,
  FaShieldAlt,
  FaTags,
  FaBriefcase,
  FaChevronDown,
  FaTint,
  FaLayerGroup,
  FaCogs,
  FaArrowRight,
  FaUniversity,
  FaHospital,
  FaLandmark,
  FaStore,
  FaIndustry,
  FaHotel,
  FaPalette,
  FaWifi,
  FaMobileAlt,
  FaRetweet,
  FaCloud,
  FaRunning,
  FaLeaf,
  FaLock,
  FaFolder,
  FaLink,
} from "react-icons/fa";
import "./printers.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Printers = () => {
  const [activeSupplyTab, setActiveSupplyTab] = useState("cartridges");
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on load
  useEffect(() => {
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
        staggerChildren: 0.15,
      },
    },
  };

  // Categories Data
  const categories = [
    {
      title: "Inkjet Printers",
      icon: <FaPrint />,
      color: "rgba(6, 182, 212, 0.12)",
      indicator: "#06b6d4",
      items: [
        "Home Printing",
        "Color Documents",
        "Photo Printing",
        "Wireless Connectivity",
      ],
    },
    {
      title: "Laser Printers",
      icon: <FaBolt />,
      color: "rgba(217, 70, 239, 0.12)",
      indicator: "#d946ef",
      items: [
        "Fast Printing",
        "High Volume Output",
        "Low Cost Per Page",
        "Office Ready Builds",
      ],
    },
    {
      title: "Multifunction Printers (MFP)",
      icon: <FaCopy />,
      color: "rgba(99, 102, 241, 0.12)",
      indicator: "#6366f1",
      items: [
        "High-speed Printing",
        "Precision Scanning",
        "Easy Document Copying",
        "Reliable Fax Solutions",
      ],
    },
    {
      title: "Photo Printers",
      icon: <FaCamera />,
      color: "rgba(234, 179, 8, 0.12)",
      indicator: "#eab308",
      items: [
        "High Resolution details",
        "Borderless Paper Printing",
        "Professional Photo Quality",
        "Fine-art gallery finishes",
      ],
    },
    {
      title: "Label & Barcode Printers",
      icon: <FaTag />,
      color: "rgba(16, 185, 129, 0.12)",
      indicator: "#10b981",
      items: [
        "Retail checkout print",
        "Warehouse scan codes",
        "Shipping label rolls",
        "Inventory management ready",
      ],
    },
    {
      title: "Dot Matrix Printers",
      icon: <FaKeyboard />,
      color: "rgba(100, 116, 139, 0.12)",
      indicator: "#64748b",
      items: [
        "Multi-carbon Invoice Printing",
        "Continuous Paper feeds",
        "Banking transactions support",
        "Government Office durability",
      ],
    },
  ];

  // Supply Data
  const supplyData = {
    cartridges: [
      {
        name: "Ink Cartridges",
        desc: "Genuine brand-locked color ink cartridges for inkjet printing, delivering vibrant, fade-resistant output.",
        icon: <FaTint />,
      },
      {
        name: "Toner Cartridges",
        desc: "High-capacity thermal polymer powder toners for laser printers, ensuring crisp, fast, and smudge-free text.",
        icon: <FaTint />,
      },
      {
        name: "Drum Units",
        desc: "Photoreceptor drums critical for transferring toner powder onto paper sheets during laser imaging.",
        icon: <FaCogs />,
      },
      {
        name: "Imaging Units",
        desc: "Combined cartridge and photo drum modules designed for rapid cartridge changes in color printers.",
        icon: <FaCogs />,
      },
    ],
    paper: [
      {
        name: "Printer Paper",
        desc: "Premium multipurpose A4/A3 office sheets engineered for laser, copier, and inkjet operations.",
        icon: <FaLayerGroup />,
      },
      {
        name: "Photo Paper",
        desc: "Glossy, semi-glossy, and matte-coated paper substrates optimized for rich borderless photo processing.",
        icon: <FaLayerGroup />,
      },
      {
        name: "Label Rolls",
        desc: "Standard thermal sticky label rolls matching desktop label printers for packaging and sorting.",
        icon: <FaTag />,
      },
      {
        name: "Barcode Labels",
        desc: "High-contrast chemical-resistant media designed for heavy industrial barcode applications.",
        icon: <FaTag />,
      },
    ],
    hardware: [
      {
        name: "Maintenance Kits",
        desc: "All-in-one backup rollers, pickup tires, and separators to restore standard feeding stability.",
        icon: <FaCogs />,
      },
      {
        name: "Fuser Units",
        desc: "Thermal heat rollers that apply high temperature and pressure to fuse toner particles into paper.",
        icon: <FaCogs />,
      },
      {
        name: "Printer Cables & USB",
        desc: "Shielded high-speed USB A-to-B interface lines for instant desktop connection without interference.",
        icon: <FaLink />,
      },
      {
        name: "Network Accessories",
        desc: "External print servers, Ethernet switches, and wireless adapters to enable local sharing.",
        icon: <FaWifi />,
      },
    ],
  };

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "Genuine Products",
      desc: "100% authentic printers and original consumables backed by full manufacturer guarantees.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Fast Delivery",
      desc: "Safe, secure, and rapid transit routes ensuring on-time supply deliveries across India.",
      icon: <FaTruck />,
    },
    {
      title: "Expert Installation",
      desc: "Professional technicians ensuring seamless hardware setup, network driver linkages, and testing.",
      icon: <FaTools />,
    },
    {
      title: "Manufacturer Warranty",
      desc: "Official product backing and hassle-free warranty support through certified channels.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Competitive Pricing",
      desc: "Affordable catalog pricing backed by volume institutional bulk purchase discounts.",
      icon: <FaTags />,
    },
    {
      title: "Business Solutions",
      desc: "Customized managed print fleets (MPS) curated precisely for corporate environment scales.",
      icon: <FaBriefcase />,
    },
  ];

  // Brands list
  const brandsList = [
    "HP",
    "Canon",
    "Epson",
    "Brother",
    "Xerox",
    "Ricoh",
    "Kyocera",
    "Pantum",
    "Samsung",
    "Zebra",
    "Fujifilm",
    "Lexmark",
    "HP",
    "Canon",
    "Epson",
    "Brother",
    "Xerox",
    "Ricoh",
    "Kyocera",
    "Pantum",
    "Samsung",
    "Zebra",
    "Fujifilm",
    "Lexmark",
  ];

  // Industries
  const industries = [
    { name: "Corporate Offices", icon: <FaBriefcase /> },
    { name: "Educational Institutions", icon: <FaUniversity /> },
    { name: "Hospitals", icon: <FaHospital /> },
    { name: "Government Offices", icon: <FaLandmark /> },
    { name: "Banks", icon: <FaLandmark /> },
    { name: "Retail Stores", icon: <FaStore /> },
    { name: "Logistics Companies", icon: <FaTruck /> },
    { name: "Manufacturing Units", icon: <FaIndustry /> },
    { name: "Hotels", icon: <FaHotel /> },
    { name: "Design Studios", icon: <FaPalette /> },
  ];

  // Services
  const services = [
    {
      title: "Printer Sales",
      desc: "Supplying wide arrays of commercial inkjet, laser, and industrial barcode printer configurations.",
    },
    {
      title: "Printer Installation",
      desc: "Ensuring accurate device unpacking, assembly, paper calibration, and test-page reviews.",
    },
    {
      title: "Network Printer Setup",
      desc: "Linking hardware to central office Wi-Fi, Ethernet routers, and local user laptops/PCs.",
    },
    {
      title: "Printer Repair",
      desc: "Prompt diagnosing, paper-jam resolution, gear replacements, and board repairs.",
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      desc: "Securing routine hardware cleaning, lubrication, diagnostic testing, and emergency backups.",
    },
    {
      title: "Toner & Ink Refilling",
      desc: "Standard, clean refilling utilizing certified chemical powders and high-grade liquid inks.",
    },
    {
      title: "Cartridge Replacement",
      desc: "Delivering original or premium compatible ink/toner cartridges to minimize downtime.",
    },
    {
      title: "Bulk Printer Supply",
      desc: "Managing inventory rollouts, replacement units, and media stock for large corporations.",
    },
    {
      title: "Managed Print Services",
      desc: "Analyzing usage volumes to optimize printer fleets, reduce paper waste, and cut utility costs.",
    },
    {
      title: "On-site Technical Support",
      desc: "Fast-dispatch technical experts resolving system errors directly in your office or facility.",
    },
  ];

  // Features
  const featuresList = [
    { title: "Wireless Printing", icon: <FaWifi /> },
    { title: "Mobile Printing", icon: <FaMobileAlt /> },
    { title: "Duplex Printing", icon: <FaRetweet /> },
    { title: "Cloud Printing", icon: <FaCloud /> },
    { title: "High-Speed Printing", icon: <FaRunning /> },
    { title: "Energy Efficient", icon: <FaLeaf /> },
    { title: "Secure Printing", icon: <FaLock /> },
    { title: "Automatic Document Feeder (ADF)", icon: <FaFolder /> },
    { title: "USB & Ethernet Connectivity", icon: <FaLink /> },
    { title: "Wi-Fi & Bluetooth Support", icon: <FaWifi /> },
  ];

  // Accessories
  const accessoriesList = [
    "Ink Cartridges",
    "Toner Cartridges",
    "Printer Stands",
    "USB Cables",
    "Power Cables",
    "Label Rolls",
    "Paper Trays",
    "Maintenance Kits",
    "Cleaning Kits",
    "Printer Covers",
  ];

  // FAQs
  const faqs = [
    {
      q: "Do you sell genuine ink and toner cartridges?",
      a: "Yes, we provide original (OEM) brand cartridges directly from HP, Canon, Epson, and Brother, alongside premium high-quality compatible cartridges that offer cost-effective alternatives.",
    },
    {
      q: "Can you install printers at our office?",
      a: "Absolutely. Our expert service engineers provide complete on-site physical setup, configuration, computer driver mapping, and local network setups.",
    },
    {
      q: "Do you provide printer repair services?",
      a: "Yes, we offer both on-demand repair visits and long-term Annual Maintenance Contracts (AMC) to resolve paper jams, print quality defects, and mechanical issues.",
    },
    {
      q: "Do you offer bulk pricing?",
      a: "Yes, we provide customized institutional pricing models and volume discounts for corporate environments, schools, universities, and government operations.",
    },
    {
      q: "Do printers come with warranty?",
      a: "Yes, all eligible brand printers sold through Crescent carry official manufacturer warranties, and our help desk assists you in registering and processing claims.",
    },
  ];

  return (
    <div className="printers-page">
      <Header />

      {/* CMYK Background Glow Accents */}
      <div className="glow-spot glow-spot-cyan"></div>
      <div className="glow-spot glow-spot-magenta"></div>
      <div className="glow-spot glow-spot-yellow"></div>
      <div className="glow-spot glow-spot-key"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <span className="badge-premium-printers">
                  🖨️ Crescent Printers & Consumables
                </span>
                <h1 className="hero-title-printers sf-pro-font">
                  Professional Printers <br />
                  <span>& Printing Supplies</span>
                </h1>
                <p className="hero-subtitle-printers funnel-sans">
                  Discover high-quality printers, multifunction devices,
                  scanners, and genuine printing supplies from the world's
                  leading brands for home, office, education, and enterprise
                  needs.
                </p>
                <div className="cta-group">
                  <a
                    href="#categories"
                    className="btn-premium-cyan funnel-sans"
                  >
                    Shop Printers <FaArrowRight />
                  </a>
                  <a
                    href="/contact"
                    className="btn-premium-outline funnel-sans"
                  >
                    Request a Quote
                  </a>
                  <a href="/contact" className="btn-premium-text funnel-sans">
                    Contact Sales
                  </a>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="hero-image-wrapper"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <div className="hero-image-glow"></div>
                <img
                  src="/images/premium_printer_hero.png"
                  alt="Premium Office Multifunction Printer"
                  className="hero-img img-fluid"
                />
                <div className="floating-stats-card">
                  <div className="stats-icon">✅</div>
                  <div>
                    <div className="stats-number">100%</div>
                    <div className="stats-label">Original Products</div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Brands Ticker */}
      <section className="brands-section">
        <Container fluid className="px-0">
          <div className="ticker-wrap">
            <div className="ticker-track">
              {brandsList.map((brand, idx) => (
                <div key={idx} className="brand-badge funnel-sans">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* About Our Printing Solutions */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <span className="section-tag sf-medium-font">
                  All-In-One Hardware
                </span>
                <h2 className="section-title sf-pro-font text-start mb-4">
                  About Our Printing Solutions
                </h2>
                <p
                  className="funnel-sans text-secondary"
                  style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
                >
                  We provide reliable printing solutions for businesses,
                  educational institutions, government organizations, and home
                  users. From compact home printers to enterprise multifunction
                  devices, we offer genuine products, expert consultation,
                  installation, and ongoing support to meet every printing
                  requirement.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="about-features"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="about-feat-item">
                  <div className="about-feat-icon">🏢</div>
                  <div className="about-feat-title sf-pro-font">
                    Corporate Fleets
                  </div>
                  <div className="about-feat-text">
                    High-capacity laser engines for heavy office printing
                    volume.
                  </div>
                </div>
                <div className="about-feat-item">
                  <div className="about-feat-icon">🏠</div>
                  <div className="about-feat-title sf-pro-font">
                    Home & Student
                  </div>
                  <div className="about-feat-text">
                    Compact ink tank layouts with Wi-Fi wireless setups.
                  </div>
                </div>
                <div className="about-feat-item">
                  <div className="about-feat-icon">🎒</div>
                  <div className="about-feat-title sf-pro-font">
                    Educational Centers
                  </div>
                  <div className="about-feat-text">
                    High volume duplex units with secure badge log-in
                    structures.
                  </div>
                </div>
                <div className="about-feat-item">
                  <div className="about-feat-icon">🔧</div>
                  <div className="about-feat-title sf-pro-font">
                    Expert Assistance
                  </div>
                  <div className="about-feat-text">
                    Continuous AMC support, component repairs, and toner
                    replacement.
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Printer Categories Section */}
      <section id="categories" className="categories-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Engineered Types</span>
            <h2 className="section-title sf-pro-font">Printer Categories</h2>
            <p className="section-subtitle">
              Select standard hardware form factors designed for speed, media
              variety, and resolution.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Row className="gy-4">
              {categories.map((cat, idx) => (
                <Col lg={4} md={6} key={idx}>
                  <motion.div
                    className="category-card"
                    variants={fadeInUp}
                    style={{
                      "--card-glow-color": cat.color,
                      "--card-glow-indicator": cat.indicator,
                    }}
                  >
                    <div className="category-card-glow"></div>
                    <div>
                      <div
                        className="category-icon"
                        style={{ color: cat.indicator }}
                      >
                        {cat.icon}
                      </div>
                      <h3 className="category-title sf-pro-font">
                        {cat.title}
                      </h3>
                      <ul className="category-list funnel-sans">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="/contact" className="category-action funnel-sans">
                      Request Configuration <FaArrowRight />
                    </a>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Printer Supplies Section */}
      <section className="supplies-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">
              Consumables & Media
            </span>
            <h2 className="section-title sf-pro-font">Printer Supplies</h2>
            <p className="section-subtitle">
              We provide genuine and compatible printing supplies for all major
              printer brands.
            </p>
          </div>

          <div className="supplies-tab-list">
            <button
              className={`btn-supply-tab funnel-sans ${activeSupplyTab === "cartridges" ? "active" : ""}`}
              onClick={() => setActiveSupplyTab("cartridges")}
            >
              Cartridges & Consumables
            </button>
            <button
              className={`btn-supply-tab funnel-sans ${activeSupplyTab === "paper" ? "active" : ""}`}
              onClick={() => setActiveSupplyTab("paper")}
            >
              Paper & Label Media
            </button>
            <button
              className={`btn-supply-tab funnel-sans ${activeSupplyTab === "hardware" ? "active" : ""}`}
              onClick={() => setActiveSupplyTab("hardware")}
            >
              Hardware & Cables
            </button>
          </div>

          <motion.div
            key={activeSupplyTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card supplies-display-card"
          >
            <div className="supply-grid">
              {supplyData[activeSupplyTab].map((item, index) => (
                <div key={index} className="supply-item-box">
                  <div className="supply-item-icon">{item.icon}</div>
                  <h4 className="supply-item-name sf-pro-font">{item.name}</h4>
                  <p className="supply-item-desc funnel-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">
              Crescent Standards
            </span>
            <h2 className="section-title sf-pro-font">Why Choose Us?</h2>
            <p className="section-subtitle">
              Authentic products, secure logistics, certified engineers, and
              customized fleet configurations.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="gy-4">
              {whyChooseUs.map((feat, idx) => (
                <Col lg={4} md={6} key={idx}>
                  <motion.div className="why-card" variants={fadeInUp}>
                    <div className="why-icon">{feat.icon}</div>
                    <h3 className="why-title sf-pro-font">{feat.title}</h3>
                    <p className="why-text funnel-sans">{feat.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Printer Features Section */}
      <section className="features-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Smart Functions</span>
            <h2 className="section-title sf-pro-font">Printer Features</h2>
            <p className="section-subtitle">
              Modern printing components engineered for workflow speed and data
              privacy.
            </p>
          </div>

          <Row className="gy-4">
            {featuresList.map((feat, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className="feature-box"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="feature-icon-badge">{feat.icon}</div>
                  <div>
                    <h4 className="feature-title-text sf-medium-font">
                      {feat.title}
                    </h4>
                    <p
                      className="text-secondary mb-0"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Curated hardware specification built for network
                      stability.
                    </p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Accessories Section */}
      <section
        className="why-section"
        style={{ background: "var(--bg-primary)" }}
      >
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">
              System Accessories
            </span>
            <h2 className="section-title sf-pro-font">Accessories We Offer</h2>
            <p className="section-subtitle">
              Enhance hardware efficiency with durable trays, stands,
              replacement cables, and covers.
            </p>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {accessoriesList.map((acc, index) => (
              <motion.div
                key={index}
                className="industry-badge"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span
                  className="industry-icon"
                  style={{ color: "var(--color-cyan)" }}
                >
                  ⚙️
                </span>
                <span className="industry-name sf-medium-font">{acc}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="industries-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">
              Sector Implementations
            </span>
            <h2 className="section-title sf-pro-font">Industries We Serve</h2>
            <p className="section-subtitle">
              We deploy printing solutions meeting document formatting
              requirements across diverse verticals.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="d-flex flex-wrap justify-content-center gap-3"
          >
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                className="industry-badge"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="industry-icon">{ind.icon}</span>
                <span className="industry-name sf-medium-font">{ind.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">
              Complete Cycle Support
            </span>
            <h2 className="section-title sf-pro-font">Our Services</h2>
            <p className="section-subtitle">
              From sales installation to routine cartridge maintenance,
              refilling, and fleet optimization.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <Row className="gy-4">
              {services.map((service, idx) => (
                <Col lg={6} key={idx}>
                  <motion.div className="service-card" variants={fadeInUp}>
                    <div className="service-num sf-pro-font">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="service-content">
                      <h3 className="service-title sf-pro-font">
                        {service.title}
                      </h3>
                      <p
                        className="funnel-sans text-secondary mb-0"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">FAQ Info</span>
            <h2 className="section-title sf-pro-font">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Quick answers about printing configurations, installations,
              cartridge refilling, and warranties.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => {
              const isActive = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isActive ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-header">
                    <span className="faq-question sf-medium-font">{faq.q}</span>
                    <div className="faq-icon-wrap">
                      <FaChevronDown />
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="faq-body funnel-sans">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Printers;

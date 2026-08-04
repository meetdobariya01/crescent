import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCamera, FaUsb, FaMicrophone, FaVolumeUp, FaTv, FaHeadphones, FaCogs,
  FaCheckCircle, FaWrench, FaPhoneAlt, FaTruck, FaTag, FaBuilding,
  FaArrowRight, FaChevronDown, FaUsers, FaGlobe, FaExchangeAlt, FaBriefcase, 
  FaHospital, FaUniversity, FaLandmark, FaIndustry, FaStore, FaHotel, FaUsersCog
} from "react-icons/fa";
import "./video.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Video = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on load
  useEffect(() => {
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
        staggerChildren: 0.12
      }
    }
  };

  // Brands list
  const brandsList = [
    "Logitech", "Poly", "Jabra", "Yealink", "Cisco", "Microsoft", "Zoom", 
    "HP Poly Studio", "Aver", "MAXHUB", "ViewSonic", "BenQ", "Samsung", "LG",
    "Logitech", "Poly", "Jabra", "Yealink", "Cisco", "Microsoft", "Zoom"
  ];

  // Categories data
  const categories = [
    {
      title: "Conference Room Systems",
      icon: <FaUsers />,
      color: "rgba(37, 99, 235, 0.12)",
      indicator: "#2563eb",
      items: ["Small Meeting Rooms", "Medium Conference Rooms", "Large Boardrooms", "Executive Meeting Spaces"]
    },
    {
      title: "PTZ Cameras",
      icon: <FaCamera />,
      color: "rgba(124, 58, 237, 0.12)",
      indicator: "#7c3aed",
      items: ["Full HD & 4K Resolution", "Auto Tracking", "Optical Zoom", "Wide-Angle Coverage"]
    },
    {
      title: "USB Conference Cameras",
      icon: <FaUsb />,
      color: "rgba(8, 145, 178, 0.12)",
      indicator: "#0891b2",
      items: ["Plug & Play", "Full HD Video", "USB Connectivity", "Remote Collaboration"]
    },
    {
      title: "Conference Microphones",
      icon: <FaMicrophone />,
      color: "rgba(22, 163, 74, 0.12)",
      indicator: "#16a34a",
      items: ["Wireless Microphones", "Table Microphones", "Ceiling Microphones", "Noise Cancellation"]
    },
    {
      title: "Conference Speakers",
      icon: <FaVolumeUp />,
      color: "rgba(220, 38, 38, 0.12)",
      indicator: "#dc2626",
      items: ["Crystal Clear Audio", "Bluetooth Connectivity", "Echo Cancellation", "Wide Audio Coverage"]
    },
    {
      title: "Interactive Flat Panels",
      icon: <FaTv />,
      color: "rgba(217, 119, 6, 0.12)",
      indicator: "#d97706",
      items: ["4K Touch Display", "Digital Whiteboard", "Wireless Screen Sharing", "Video Meeting Integration"]
    },
    {
      title: "Headsets",
      icon: <FaHeadphones />,
      color: "rgba(219, 39, 119, 0.12)",
      indicator: "#db2777",
      items: ["USB Headsets", "Bluetooth Headsets", "Noise-Cancelling Headsets", "Professional Call Center Headsets"]
    },
    {
      title: "Video Conferencing Accessories",
      icon: <FaCogs />,
      color: "rgba(75, 85, 99, 0.12)",
      indicator: "#4b5563",
      items: ["Mounting Kits", "HDMI Cables", "USB Extension Cables", "Power Adapters", "Camera Mounts", "Remote Controls"]
    }
  ];

  // Tab Data for Features, Platforms, Accessories
  const tabData = {
    features: [
      { name: "4K Ultra HD Video", desc: "Crystal clear resolution ensuring every detail is sharp and easily visible.", icon: <FaTv /> },
      { name: "AI Auto Framing", desc: "Smart camera adjustments that automatically frame all participants perfectly.", icon: <FaCamera /> },
      { name: "Speaker Tracking", desc: "Acoustic tracking that pans and zooms directly on the active presenter.", icon: <FaUsers /> },
      { name: "Noise Cancellation", desc: "Advanced AI filters out ambient background noise for pristine audio.", icon: <FaMicrophone /> },
      { name: "Echo Cancellation", desc: "Accidents of double-talk minimized with high-fidelity full duplex audio.", icon: <FaVolumeUp /> },
      { name: "Wireless Screen Sharing", desc: "Seamless screen casting from laptops, tablets, or smartphones instantly.", icon: <FaExchangeAlt /> },
      { name: "Touch Display Support", desc: "Interactive whiteboarding and tactile annotation inputs.", icon: <FaTv /> },
      { name: "Cloud Meeting Integration", desc: "Connects directly with modern workspace directories and systems.", icon: <FaGlobe /> }
    ],
    platforms: [
      { name: "Microsoft Teams", desc: "Certified and plug-and-play compatible solutions with Teams Rooms.", icon: <FaCheckCircle /> },
      { name: "Zoom", desc: "Zoom Certified appliances for flawless Zoom Rooms experiences.", icon: <FaCheckCircle /> },
      { name: "Google Meet", desc: "Fully compatible devices ready for Google Meet hardware configurations.", icon: <FaCheckCircle /> },
      { name: "Cisco Webex", desc: "High-grade integration support for legacy and modern Webex suites.", icon: <FaCheckCircle /> },
      { name: "Skype", desc: "Secure legacy support for commercial and personal Skype sessions.", icon: <FaCheckCircle /> },
      { name: "BlueJeans", desc: "Interoperable hardware compatibility for BlueJeans networks.", icon: <FaCheckCircle /> },
      { name: "GoTo Meeting", desc: "Instant sync integrations supporting swift GoTo meetings.", icon: <FaCheckCircle /> }
    ],
    accessories: [
      { name: "Camera Mounts", desc: "Secure wall, table, ceiling, and display mount structures.", icon: <FaCogs /> },
      { name: "Tripods", desc: "Sturdy and adjustable tripods for flexible setup locations.", icon: <FaCogs /> },
      { name: "HDMI & USB Cables", desc: "Premium extension cables keeping transmission losses to absolute zero.", icon: <FaCogs /> },
      { name: "USB Hubs", desc: "Multi-port connectivity hubs for seamless peripheral management.", icon: <FaCogs /> },
      { name: "Wireless Presenters", desc: "Remote presenter controllers for swift presentation navigation.", icon: <FaCogs /> },
      { name: "Room Controllers", desc: "Intuitive touch controllers for simple conference scheduling and management.", icon: <FaCogs /> }
    ]
  };

  // Why Choose Us data
  const whyChooseUs = [
    { title: "Genuine Products", desc: "100% authentic products sourced directly from manufacturers with official warranties.", icon: <FaCheckCircle /> },
    { title: "Professional Installation", desc: "Complete hardware mounting, system integration, and software configurations.", icon: <FaWrench /> },
    { title: "Technical Support", desc: "Dedicated, round-the-clock pre-sales and post-sales technical assistance.", icon: <FaPhoneAlt /> },
    { title: "Fast Delivery", desc: "Safe, secure, and fast delivery dispatch channels operating across India.", icon: <FaTruck /> },
    { title: "Competitive Pricing", desc: "Highly affordable, value-packed pricing strategies with exclusive corporate discounts.", icon: <FaTag /> },
    { title: "Enterprise Solutions", desc: "Customized collaboration room design and setup blueprints built for scales.", icon: <FaBuilding /> }
  ];

  // Industries We Serve
  const industries = [
    { name: "Corporate Offices", icon: <FaBriefcase /> },
    { name: "Educational Institutions", icon: <FaUniversity /> },
    { name: "Government Organizations", icon: <FaLandmark /> },
    { name: "Healthcare & Hospitals", icon: <FaHospital /> },
    { name: "Banks & Financial Institutions", icon: <FaBuilding /> },
    { name: "Manufacturing Companies", icon: <FaIndustry /> },
    { name: "IT Companies", icon: <FaLaptopHouse /> }, // Fallback to custom logic or standard available icons
    { name: "Hotels & Hospitality", icon: <FaHotel /> },
    { name: "Retail Chains", icon: <FaStore /> },
    { name: "Training Centers", icon: <FaUsersCog /> }
  ];

  // Our Services
  const services = [
    "Video Conferencing System Sales",
    "Meeting Room Design",
    "Product Consultation",
    "Installation & Configuration",
    "Interactive Display Setup",
    "Camera Installation",
    "Audio System Integration",
    "Annual Maintenance Contracts (AMC)",
    "Remote Technical Support",
    "Corporate Bulk Supply"
  ];

  // FAQs
  const faqs = [
    { q: "Which video conferencing system is best for my meeting room?", a: "Our experts recommend solutions based on your room size, seating capacity, layout, and specific collaboration requirements (e.g. Teams, Zoom, or hybrid compatibility)." },
    { q: "Do you provide installation services?", a: "Yes, we offer complete end-to-end installation, setup, mounting, and system configuration services across India." },
    { q: "Are your products compatible with Zoom and Microsoft Teams?", a: "Yes, we provide certified solutions that are completely compatible with Zoom, Microsoft Teams, Google Meet, Cisco Webex, and other leading collaboration platforms." },
    { q: "Do you offer corporate pricing?", a: "Yes, we provide special corporate pricing tiers and attractive volume discounts for businesses, educational institutions, and government organizations." },
    { q: "Do your products include warranty?", a: "Yes, all our genuine products come with the applicable manufacturer warranty and direct customer support pathways." }
  ];

  return (
    <div className="video-page">
      <Header />
      
      {/* Background Glow Accents */}
      <div className="glow-spot glow-spot-1"></div>
      <div className="glow-spot glow-spot-2"></div>
      <div className="glow-spot glow-spot-3"></div>

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
                <span className="badge-premium">
                  🌐 Premium Enterprise Collaboration
                </span>
                <h1 className="hero-title-video sf-pro-font">
                  Professional Video <br />
                  <span>Conferencing Solutions</span>
                </h1>
                <p className="hero-subtitle funnel-sans">
                  Empower seamless collaboration with premium video conferencing systems, webcams, meeting room devices, interactive displays, and communication accessories from leading global brands.
                </p>
                <div className="cta-group">
                  <a href="#categories" className="btn-premium-primary funnel-sans">
                    Explore Products <FaArrowRight />
                  </a>
                  <a href="/contact" className="btn-premium-secondary funnel-sans">
                    Request a Quote
                  </a>
                  <a href="/contact" className="btn-premium-tertiary funnel-sans">
                    Contact Sales
                  </a>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="hero-image-wrapper"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="hero-image-glow"></div>
                <img 
                  src="/images/premium_video_hero.png" 
                  alt="Professional Video Conferencing Hero Setup" 
                  className="hero-img img-fluid"
                />
                <div className="floating-stats-card">
                  <div className="stats-icon">🎥</div>
                  <div>
                    <div className="stats-number">4K UHD</div>
                    <div className="stats-label">Smart AI Tracking</div>
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

      {/* About Our Video Conferencing Solutions */}
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
                <span className="section-tag sf-medium-font">Global Brands</span>
                <h2 className="section-title sf-pro-font text-start mb-4">
                  About Our Video Conferencing Solutions
                </h2>
                <p className="funnel-sans text-secondary" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  We provide end-to-end video conferencing solutions for businesses, educational institutions, healthcare organizations, government agencies, and hybrid work environments. From personal webcams to enterprise boardroom systems, we help organizations communicate efficiently with reliable products, professional installation, and ongoing technical support.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="hero-image-wrapper mt-4 mt-lg-0"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="hero-image-glow" style={{ background: "var(--gradient-luminous)" }}></div>
                <img 
                  src="/images/premium_video_display.png" 
                  alt="Premium Display and Camera Setup" 
                  className="hero-img img-fluid"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories We Offer */}
      <section id="categories" className="categories-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Explore Portfolio</span>
            <h2 className="section-title sf-pro-font">Product Categories</h2>
            <p className="section-subtitle">
              Achieve absolute collaboration clarity with premium segments meticulously built for various setups.
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
                <Col lg={3} md={6} key={idx}>
                  <motion.div 
                    className="category-card"
                    variants={fadeInUp}
                    style={{
                      "--card-glow-color": cat.color,
                      "--card-glow-indicator": cat.indicator
                    }}
                  >
                    <div className="category-card-glow"></div>
                    <div>
                      <div className="category-icon-box" style={{ color: cat.indicator }}>
                        {cat.icon}
                      </div>
                      <h3 className="category-title sf-pro-font">{cat.title}</h3>
                      <ul className="category-list funnel-sans">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a href="/contact" className="category-action funnel-sans">
                      Request Quote <FaArrowRight />
                    </a>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Specifications / Features & Compatible Platforms Tab */}
      <section className="features-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">High Performance</span>
            <h2 className="section-title sf-pro-font">Features & Specifications</h2>
            <p className="section-subtitle">
              We supply systems packed with cutting-edge AI features, broad platform support, and essential accessories.
            </p>
          </div>

          <div className="features-tab-list">
            <button 
              className={`btn-feature-tab funnel-sans ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Key Features
            </button>
            <button 
              className={`btn-feature-tab funnel-sans ${activeTab === "platforms" ? "active" : ""}`}
              onClick={() => setActiveTab("platforms")}
            >
              Compatible Platforms
            </button>
            <button 
              className={`btn-feature-tab funnel-sans ${activeTab === "accessories" ? "active" : ""}`}
              onClick={() => setActiveTab("accessories")}
            >
              Accessories & Mounting
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card features-display-card"
          >
            <div className="feature-grid">
              {tabData[activeTab].map((item, index) => (
                <div key={index} className="feature-item-box">
                  <div className="feature-item-icon">{item.icon}</div>
                  <h4 className="feature-item-name sf-pro-font">{item.name}</h4>
                  <p className="feature-item-desc funnel-sans">{item.desc}</p>
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
            <span className="section-tag sf-medium-font">Why Partner With Us</span>
            <h2 className="section-title sf-pro-font">Why Choose Us?</h2>
            <p className="section-subtitle">
              We stand out with original product availability, nationwide deployment capabilities, and dedicated help desk support.
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
                  <motion.div 
                    className="why-card"
                    variants={fadeInUp}
                  >
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

      {/* Industries and Services split view */}
      <section className="split-section">
        <Container>
          <Row className="gy-5">
            <Col lg={6}>
              <div className="list-card">
                <h3 className="list-title sf-pro-font">
                  <span className="list-icon">🏢</span> Industries We Serve
                </h3>
                <div className="custom-grid-list">
                  {industries.map((ind, idx) => (
                    <motion.div 
                      key={idx} 
                      className="list-item-box"
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <span style={{ fontSize: "1.2rem", color: "var(--color-secondary)" }}>
                        {ind.icon}
                      </span>
                      <span className="list-item-text funnel-sans">{ind.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="list-card">
                <h3 className="list-title sf-pro-font">
                  <span className="list-icon">🛠️</span> Our Services
                </h3>
                <div className="custom-grid-list">
                  {services.map((srv, idx) => (
                    <motion.div 
                      key={idx} 
                      className="list-item-box"
                      whileHover={{ scale: 1.03, y: -2 }}
                    >
                      <div className="list-item-bullet"></div>
                      <span className="list-item-text funnel-sans">{srv}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="faq-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">FAQ</span>
            <h2 className="section-title sf-pro-font">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Browse common answers to queries about video conferencing systems, installation services, and warranties.
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
                        <div className="faq-body funnel-sans">
                          {faq.a}
                        </div>
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

// Fallback icon for IT Companies to ensure build safety
const FaLaptopHouse = (props) => {
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <FaBuilding {...props} />
    </span>
  );
};

export default Video;

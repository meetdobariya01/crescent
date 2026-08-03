import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHdd, FaDatabase, FaServer, FaUsb, FaMicrochip, FaCheckCircle, FaWrench, FaPhoneAlt, 
  FaTruck, FaTag, FaBuilding, FaArrowRight, FaChevronDown, FaUsers, FaGlobe, 
  FaExchangeAlt, FaBriefcase, FaPaintBrush, FaVideo, FaCamera, FaUniversity, FaHospital, 
  FaCoins, FaLandmark, FaIndustry, FaStore, FaUserShield, FaUserTie, FaSdCard, FaCloud
} from "react-icons/fa";
import "./storage.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Storage = () => {
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
    "Samsung", "Western Digital (WD)", "Seagate", "Crucial", "Kingston", "SanDisk", 
    "ADATA", "Corsair", "Lexar", "Synology", "QNAP", "Toshiba", "Transcend", "Dell", "HP",
    "Samsung", "Western Digital (WD)", "Seagate", "Crucial", "Kingston", "SanDisk"
  ];

  // Categories data
  const categories = [
    {
      title: "Internal Hard Drives (HDD)",
      icon: <FaHdd />,
      color: "rgba(37, 99, 235, 0.12)",
      indicator: "#3b82f6",
      items: ["Desktop HDDs", "Laptop HDDs", "Enterprise HDDs", "Surveillance HDDs"]
    },
    {
      title: "Solid State Drives (SSD)",
      icon: <FaMicrochip />,
      color: "rgba(124, 58, 237, 0.12)",
      indicator: "#8b5cf6",
      items: ["SATA SSD", "NVMe SSD", "M.2 SSD", "PCIe Gen4 & Gen5 SSD"]
    },
    {
      title: "External Hard Drives",
      icon: <FaHdd />,
      color: "rgba(8, 145, 178, 0.12)",
      indicator: "#06b6d4",
      items: ["Portable HDD", "Desktop External HDD", "USB-C Storage", "High-Capacity Backup Drives"]
    },
    {
      title: "External SSD",
      icon: <FaDatabase />,
      color: "rgba(22, 163, 74, 0.12)",
      indicator: "#10b981",
      items: ["Portable SSD", "USB 3.2 SSD", "Thunderbolt SSD", "Rugged SSD"]
    },
    {
      title: "NAS Storage",
      icon: <FaServer />,
      color: "rgba(220, 38, 38, 0.12)",
      indicator: "#dc2626",
      items: ["Home NAS", "Business NAS", "Multi-Bay NAS", "RAID Storage Solutions"]
    },
    {
      title: "USB Flash Drives",
      icon: <FaUsb />,
      color: "rgba(217, 119, 6, 0.12)",
      indicator: "#f59e0b",
      items: ["USB 3.0", "USB-C Drives", "Dual Interface Drives", "High-Speed Flash Storage"]
    },
    {
      title: "Memory Cards",
      icon: <FaSdCard />,
      color: "rgba(219, 39, 119, 0.12)",
      indicator: "#db2777",
      items: ["SD Cards", "microSD Cards", "CFexpress Cards", "Professional Camera Storage"]
    },
    {
      title: "Enterprise Storage",
      icon: <FaCloud />,
      color: "rgba(75, 85, 99, 0.12)",
      indicator: "#4b5563",
      items: ["Server Storage", "Data Center SSDs", "SAS Drives", "Enterprise NVMe Solutions"]
    }
  ];

  // Tab Data for Features, Applications, Accessories
  const tabData = {
    features: [
      { name: "High-Speed Data Transfer", desc: "Reduce load-times and boost read/write performance speeds up to 14,000 MB/s.", icon: <FaDatabase /> },
      { name: "NVMe PCIe Performance", desc: "Harness next-generation PCIe Gen4 and Gen5 pathways for zero-lag productivity.", icon: <FaMicrochip /> },
      { name: "USB 3.2 & USB-C", desc: "Enjoy rapid universal connectivity and swift backups on modern ports.", icon: <FaUsb /> },
      { name: "RAID Support", desc: "Configure high-integrity arrays (RAID 0, 1, 5, 10) to secure your databases.", icon: <FaServer /> },
      { name: "Portable Backup Solutions", desc: "Take your critical files on the go with lightweight and slim storage shapes.", icon: <FaHdd /> },
      { name: "Large Capacity Options", desc: "Massive configurations scale up to 24TB per single hard drive.", icon: <FaDatabase /> },
      { name: "Shock Resistant Designs", desc: "Rugged exterior enclosures protecting data against accidental drops.", icon: <FaUserShield /> },
      { name: "Enterprise Reliability", desc: "Built with high MTTF ratings meant for non-stop, 24/7/365 server cycles.", icon: <FaBuilding /> }
    ],
    applications: [
      { name: "Gaming PCs", desc: "Eliminate asset load times in modern heavy open-world games.", icon: <FaMicrochip /> },
      { name: "Workstations", desc: "Handle large CAD models, developer scripts, and complex local processes.", icon: <FaServer /> },
      { name: "Video Editing", desc: "Real-time scrubbing of raw 4K and 8K video streams without caching lag.", icon: <FaVideo /> },
      { name: "Graphic Design & Photos", desc: "Store extensive high-resolution creative assets and RAW images.", icon: <FaCamera /> },
      { name: "CCTV Surveillance", desc: "Optimize persistent high-definition security camera footage streams.", icon: <FaVideo /> },
      { name: "Home & Cloud Backup", desc: "Maintain local data redundancies, synced clouds, and private servers.", icon: <FaCloud /> }
    ],
    accessories: [
      { name: "HDD & SSD Enclosures", desc: "Convert standard internal drives into external portable assets.", icon: <FaHdd /> },
      { name: "SATA Cables & Adapters", desc: "Premium connection cables and M.2 NVMe to PCIe adapters.", icon: <FaCogsIcon /> },
      { name: "Docking Stations", desc: "Multi-bay hot-swappable hard drive docks for quick disk cloning.", icon: <FaServer /> },
      { name: "RAID Controllers", desc: "Dedicated hardware controllers supporting seamless array configurations.", icon: <FaDatabase /> },
      { name: "Storage Bags & Cases", desc: "Padded external hard drive protection cases for safe travels.", icon: <FaUserShield /> },
      { name: "USB Hubs", desc: "Extend your device's ports with multi-port high-speed hubs.", icon: <FaUsb /> }
    ]
  };

  // Why Choose Us data
  const whyChooseUs = [
    { title: "Genuine Products", desc: "100% authentic storage devices sourced from authorized brand distributors with warranties.", icon: <FaCheckCircle /> },
    { title: "Fast Delivery", desc: "Highly secure and rapid logistics delivery operations stretching across India.", icon: <FaTruck /> },
    { title: "Competitive Pricing", desc: "Attractive and cost-efficient rates optimized for retail buyers and bulk corporate orders.", icon: <FaTag /> },
    { title: "Expert Consultation", desc: "Receive professional advice selecting the absolute best speed/capacity ratio.", icon: <FaUserTie /> },
    { title: "Data Storage Expertise", desc: "Customized data layouts built specifically for personal, business, or server rooms.", icon: <FaDatabase /> },
    { title: "Corporate Supply", desc: "Blueprinted volume supplies with flexible commercial options and SLA support.", icon: <FaBuilding /> }
  ];

  // Industries We Serve
  const industries = [
    { name: "IT Companies", icon: <FaBuilding /> },
    { name: "Creative Studios", icon: <FaPaintBrush /> },
    { name: "Video Production", icon: <FaVideo /> },
    { name: "Photography", icon: <FaCamera /> },
    { name: "Education", icon: <FaUniversity /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Banking & Finance", icon: <FaCoins /> },
    { name: "Government Organizations", icon: <FaLandmark /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Retail Businesses", icon: <FaStore /> }
  ];

  // Our Services
  const services = [
    "Storage Device Sales",
    "Enterprise Storage Solutions",
    "NAS Deployment",
    "Storage Upgrades",
    "SSD Installation",
    "HDD Replacement",
    "RAID Configuration",
    "Data Migration Assistance",
    "Corporate Bulk Supply",
    "Technical Support"
  ];

  // FAQs
  const faqs = [
    { q: "Which is better: SSD or HDD?", a: "SSDs offer significantly faster read/write performance, lower latency, and durability because they have no moving parts. HDDs, on the other hand, provide much larger storage capacities at a lower cost per gigabyte. The right choice depends entirely on your performance and capacity demands." },
    { q: "Do you sell genuine storage products?", a: "Yes, all our storage devices (SSDs, HDDs, NAS, Flash Drives, etc.) are 100% genuine, authentic, and sourced directly from authorized brand distributors with complete warranties." },
    { q: "Can you help me upgrade my laptop or desktop storage?", a: "Absolutely. We provide expert advice on choosing compatible NVMe/SATA SSDs and offer installation guidelines or support to upgrade your laptop, desktop, or workstations." },
    { q: "Do you offer enterprise storage solutions?", a: "Yes, we deploy high-performance NAS setups, RAID configurations, and supply data center-grade SAS drives and enterprise-grade NVMe SSDs for businesses of all scales." },
    { q: "Do products come with warranty?", a: "Yes, all eligible storage products include standard, official manufacturer warranties backed by local service centers." }
  ];

  return (
    <div className="storage-page">
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
                  💾 Enterprise Data Storage
                </span>
                <h1 className="hero-title-storage sf-pro-font">
                  Reliable Storage & <br />
                  <span>Hard Drive Solutions</span>
                </h1>
                <p className="hero-subtitle funnel-sans">
                  Discover high-performance internal and external storage solutions, SSDs, HDDs, NAS systems, memory cards, and storage accessories from the world's leading brands.
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
                  src="/images/premium_storage_hero.png" 
                  alt="High-Performance SSDs and Hard Drives Arrangement" 
                  className="hero-img img-fluid"
                />
                <div className="floating-stats-card">
                  <div className="stats-icon">⚡</div>
                  <div>
                    <div className="stats-number">PCIe Gen5</div>
                    <div className="stats-label">Ultra-Speed Ready</div>
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

      {/* About Our Storage Solutions */}
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
                <span className="section-tag sf-medium-font">Total Integrity</span>
                <h2 className="section-title sf-pro-font text-start mb-4">
                  About Our Storage Solutions
                </h2>
                <p className="funnel-sans text-secondary" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  We offer a complete range of storage products designed for home users, gamers, content creators, businesses, and enterprise environments. Whether you need faster SSDs, high-capacity hard drives, portable storage, or network-attached storage (NAS), we provide genuine products backed by expert advice and reliable support.
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
                  src="/images/premium_storage_display.png" 
                  alt="Enterprise Storage Servers and RAID setups" 
                  className="hero-img img-fluid"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Categories */}
      <section id="categories" className="categories-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Explore Portfolio</span>
            <h2 className="section-title sf-pro-font">Product Categories</h2>
            <p className="section-subtitle">
              Browse our high-speed solid-state memory, portable hard disks, and enterprise arrays.
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

      {/* Features & Applications Tabbed Section */}
      <section className="features-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Technical Specifications</span>
            <h2 className="section-title sf-pro-font">Features & Applications</h2>
            <p className="section-subtitle">
              Our storage configurations are tailor-made for specific performance benchmarks and security requirements.
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
              className={`btn-feature-tab funnel-sans ${activeTab === "applications" ? "active" : ""}`}
              onClick={() => setActiveTab("applications")}
            >
              Ideal Applications
            </button>
            <button 
              className={`btn-feature-tab funnel-sans ${activeTab === "accessories" ? "active" : ""}`}
              onClick={() => setActiveTab("accessories")}
            >
              Accessories & Cables
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
            <span className="section-tag sf-medium-font">Crescent Advantage</span>
            <h2 className="section-title sf-pro-font">Why Choose Us?</h2>
            <p className="section-subtitle">
              We stand out with authentic device guarantees, local expert advice, and bulk SLA procurement pipelines.
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
              Got questions about storage compatibility, installation services, or warranty policies? Find answers below.
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

// Fallback icon to ensure compatibility
const FaCogsIcon = (props) => {
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <FaDatabase {...props} />
    </span>
  );
};

export default Storage;

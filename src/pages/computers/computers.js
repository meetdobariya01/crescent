import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptop, FaGamepad, FaDesktop, FaServer, FaGraduationCap, FaBuilding,
  FaCheckCircle, FaTruck, FaTools, FaTags, FaLock, FaBoxes,
  FaChevronDown, FaMicrochip, FaDatabase, FaMemory, FaWindows,
  FaBriefcase, FaHospital, FaUniversity, FaLandmark, FaIndustry,
  FaStore, FaRocket, FaCoins, FaPalette, FaArrowRight
} from "react-icons/fa";
import "./computers.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Computers = () => {
  const [activeSpecTab, setActiveSpecTab] = useState("cpu");
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
        staggerChildren: 0.15
      }
    }
  };

  // Specs Tab Data
  const specData = {
    cpu: [
      { name: "Intel Core Ultra Processors", desc: "Built-in AI NPU acceleration for next-generation intelligence, productivity, and computing efficiency.", icon: <FaMicrochip /> },
      { name: "AMD Ryzen Series", desc: "High-core count efficiency for heavy multi-threaded tasks, rendering, and premium gaming rigs.", icon: <FaMicrochip /> }
    ],
    gpu: [
      { name: "NVIDIA RTX Graphics", desc: "Ultimate ray-tracing visuals, DLSS AI frame-generation, and studio-grade creative performance.", icon: <FaGamepad /> },
      { name: "AMD Radeon Graphics", desc: "Brilliant gaming visuals, high frame rates, and exceptional performance-per-dollar values.", icon: <FaGamepad /> }
    ],
    memory: [
      { name: "DDR5 Memory", desc: "Next-gen ultra-high bandwidth speeds, paving the way for smooth multitasking and zero lag.", icon: <FaMemory /> },
      { name: "PCIe Gen 4 SSD", desc: "Supercharged reading and writing speeds for instant boot-ups and file loading.", icon: <FaDatabase /> },
      { name: "Wi-Fi 6E Connectivity", desc: "Gigabit-speed wireless connectivity with reduced latency and wider bands.", icon: <FaServer /> }
    ],
    os: [
      { name: "Windows 11 Home & Pro", desc: "Modern, secure, and intuitive desktop OS curated for productivity, security, and gaming.", icon: <FaWindows /> },
      { name: "Linux Options", desc: "Pre-configured Ubuntu, Fedora, or custom Linux installations for developers, IT, and AI experts.", icon: <FaServer /> }
    ]
  };

  // Categories Data
  const categories = [
    {
      title: "Business Laptops",
      icon: <FaLaptop />,
      color: "rgba(59, 130, 246, 0.12)",
      indicator: "#3b82f6",
      items: ["Lightweight & portable", "Long-lasting battery life", "Secure biometrics & TPM", "Professional aesthetic designs"]
    },
    {
      title: "Gaming PCs & Laptops",
      icon: <FaGamepad />,
      color: "rgba(139, 92, 246, 0.12)",
      indicator: "#8b5cf6",
      items: ["High-end Graphics Cards", "Blazing-fast Processors", "RGB custom lighting builds", "Liquid Cooling Options"]
    },
    {
      title: "Desktop Computers",
      icon: <FaDesktop />,
      color: "rgba(6, 182, 212, 0.12)",
      indicator: "#06b6d4",
      items: ["Reliable Home PCs", "Efficient Office PCs", "All-in-One space-savers", "Ultra-compact Mini PCs"]
    },
    {
      title: "Workstations",
      icon: <FaServer />,
      color: "rgba(245, 158, 11, 0.12)",
      indicator: "#f59e0b",
      items: ["Heavy CAD Engineering", "4K/8K Video Editing", "Realistic 3D Rendering", "Local AI & ML Development"]
    },
    {
      title: "Student Laptops",
      icon: <FaGraduationCap />,
      color: "rgba(236, 72, 153, 0.12)",
      indicator: "#ec4899",
      items: ["Affordable & budget friendly", "Lightweight for backpacks", "All-day school battery life", "Online learning ready apps"]
    },
    {
      title: "Enterprise Solutions",
      icon: <FaBuilding />,
      color: "rgba(16, 185, 129, 0.12)",
      indicator: "#10b981",
      items: ["Volume bulk order savings", "Custom corporate pricing", "Managed IT infrastructure", "Extended hardware warranty"]
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    { title: "Genuine Products", desc: "All products are 100% authentic directly from manufacturers with full warranties.", icon: <FaCheckCircle /> },
    { title: "Fast Delivery", desc: "Safe, secure, and ultra-fast shipping networks spanning across India.", icon: <FaTruck /> },
    { title: "Expert Support", desc: "Dedicated, professional technical assistance before, during, and after your purchase.", icon: <FaTools /> },
    { title: "Competitive Pricing", desc: "Best market-clearing prices with custom enterprise & corporate volume discounts.", icon: <FaTags /> },
    { title: "Secure Payments", desc: "100% safe, encrypted payment getaways supporting multiple modes.", icon: <FaLock /> },
    { title: "Bulk Orders", desc: "Tailored commercial structures for educational institutions, SMBs, and corporations.", icon: <FaBoxes /> }
  ];

  // Brands list
  const brandsList = [
    "Dell", "HP", "Lenovo", "Apple", "ASUS", "Acer", "MSI", "Samsung", "Microsoft Surface", "LG",
    "Dell", "HP", "Lenovo", "Apple", "ASUS", "Acer", "MSI", "Samsung", "Microsoft Surface", "LG"
  ];

  // Industries
  const industries = [
    { name: "Education", icon: <FaUniversity /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Government", icon: <FaLandmark /> },
    { name: "IT Companies", icon: <FaBriefcase /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Retail", icon: <FaStore /> },
    { name: "Startups", icon: <FaRocket /> },
    { name: "Finance", icon: <FaCoins /> },
    { name: "Design Studios", icon: <FaPalette /> }
  ];

  // Services
  const services = [
    { title: "Computer Sales", desc: "Guiding you through options to acquire the absolute best configuration for your use case." },
    { title: "Custom PC Building", desc: "Curating customized parts matching your processing demands, visuals, cooling, and budget." },
    { title: "Hardware Upgrades", desc: "Extending the lifespan and productivity of your systems through professional installations." },
    { title: "RAM & SSD Upgrades", desc: "Boosting system performance, reducing load-times, and increasing local capacity." },
    { title: "Computer Accessories", desc: "High-performance mice, mechanical keyboards, precision webcams, and docking stations." },
    { title: "Software Installation", desc: "Setting up secure, licensed productivity apps, creative suites, and operating systems." },
    { title: "Business IT Solutions", desc: "Consulting on multi-workstation office setups, network storage, and server integrations." },
    { title: "Annual Maintenance", desc: "Providing scheduled hardware cleanings, thermal paste updates, and diagnostic health checks." },
    { title: "Device Setup", desc: "Complete out-of-the-box configuration, driver configurations, and preference adjustments." },
    { title: "Data Transfer", desc: "Safely and securely moving system files, accounts, and private data to your new machine." }
  ];

  // FAQs
  const faqs = [
    { q: "Do you provide GST invoices?", a: "Yes, GST invoices are available for all eligible purchases. Provide your GSTIN details at checkout to claim eligible input tax credits." },
    { q: "Can I customize my PC?", a: "Absolutely. We build computers tailor-made to your processing, budget, and design requirements. Our team handles professional assembly, cable management, and extensive load-tests." },
    { q: "Do you offer bulk pricing?", a: "Yes, we provide special corporate and bulk pricing tiers for schools, colleges, IT environments, startups, and enterprise operations." },
    { q: "Is delivery available across India?", a: "Yes, we partner with premium logistics suppliers to ensure secure, tracked delivery across India, including fragile packaging handling." },
    { q: "Do products include warranty?", a: "Yes, all our hardware and computers come with standard manufacturer warranties, backed by our help-desk support for simple resolutions." }
  ];

  return (
    <div className="computers-page">
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
                  ⚡ Crescent Enterprise IT Solutions
                </span>
                <h1 className="hero-title-computers sf-pro-font">
                  Premium Computers <br />
                  <span>for Every Need</span>
                </h1>
                <p className="hero-subtitle funnel-sans">
                  Explore our wide range of desktops, laptops, gaming PCs, workstations, and custom-built computers from leading brands at competitive prices.
                </p>
                <div className="cta-group">
                  <a href="#categories" className="btn-premium-primary funnel-sans">
                    Shop Now <FaArrowRight />
                  </a>
                  <a href="/contact" className="btn-premium-secondary funnel-sans">
                    Get a Quote
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
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <div className="hero-image-glow"></div>
                <img 
                  src="/images/premium_computer_hero.png" 
                  alt="Premium Workstation and Laptop" 
                  className="hero-img img-fluid"
                />
                <div className="floating-stats-card">
                  <div className="stats-icon">🚀</div>
                  <div>
                    <div className="stats-number">100%</div>
                    <div className="stats-label">Genuine Support</div>
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

      {/* About Our Computers */}
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
                <span className="section-tag sf-medium-font">Tailored Power</span>
                <h2 className="section-title sf-pro-font text-start mb-4">
                  About Our Computers
                </h2>
                <p className="funnel-sans text-secondary" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
                  Whether you're a student, business professional, gamer, or content creator, we provide reliable computing solutions designed to match your requirements. From everyday laptops to high-performance workstations, we help you find the perfect device with expert guidance and after-sales support.
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
                  <div className="about-feat-icon">🎯</div>
                  <div className="about-feat-title sf-pro-font">Expert Curation</div>
                  <div className="about-feat-text">Hand-selected specs based on modern enterprise demands.</div>
                </div>
                <div className="about-feat-item">
                  <div className="about-feat-icon">💻</div>
                  <div className="about-feat-title sf-pro-font">Diverse Form Factors</div>
                  <div className="about-feat-text">From ultra-slim ultrabooks to heavy rendering server racks.</div>
                </div>
                <div className="about-feat-item">
                  <div className="about-feat-icon">🔧</div>
                  <div className="about-feat-title sf-pro-font">Built-to-Order</div>
                  <div className="about-feat-text">Fully customizable memory, graphics cards, and disk capacity.</div>
                </div>
                <div className="about-feat-item">
                  <div className="about-feat-icon">🛡️</div>
                  <div className="about-feat-title sf-pro-font">After-Sales SLA</div>
                  <div className="about-feat-text">Direct manufacturer backup and immediate local technical support.</div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories We Offer */}
      <section id="categories" className="categories-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Explore Categories</span>
            <h2 className="section-title sf-pro-font">Categories We Offer</h2>
            <p className="section-subtitle">
              Choose from our premium segments engineered meticulously for distinct computing workloads.
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
                      "--card-glow-indicator": cat.indicator
                    }}
                  >
                    <div className="category-card-glow"></div>
                    <div>
                      <div className="category-icon" style={{ color: cat.indicator }}>
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
                      Request Configuration <FaArrowRight />
                    </a>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Featured Specifications Showcase */}
      <section className="specs-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Hardware Architecture</span>
            <h2 className="section-title sf-pro-font">Featured Specifications</h2>
            <p className="section-subtitle">
              We pack our custom builds and retail systems with industry-leading components for robust stability.
            </p>
          </div>

          <div className="specs-tab-list">
            <button 
              className={`btn-spec-tab funnel-sans ${activeSpecTab === "cpu" ? "active" : ""}`}
              onClick={() => setActiveSpecTab("cpu")}
            >
              Processors
            </button>
            <button 
              className={`btn-spec-tab funnel-sans ${activeSpecTab === "gpu" ? "active" : ""}`}
              onClick={() => setActiveSpecTab("gpu")}
            >
              Graphics
            </button>
            <button 
              className={`btn-spec-tab funnel-sans ${activeSpecTab === "memory" ? "active" : ""}`}
              onClick={() => setActiveSpecTab("memory")}
            >
              Memory & Storage
            </button>
            <button 
              className={`btn-spec-tab funnel-sans ${activeSpecTab === "os" ? "active" : ""}`}
              onClick={() => setActiveSpecTab("os")}
            >
              Operating Systems
            </button>
          </div>

          <motion.div
            key={activeSpecTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="glass-card specs-display-card"
          >
            <div className="spec-grid">
              {specData[activeSpecTab].map((item, index) => (
                <div key={index} className="spec-item-box">
                  <div className="spec-item-icon">{item.icon}</div>
                  <h4 className="spec-item-name sf-pro-font">{item.name}</h4>
                  <p className="spec-item-desc funnel-sans">{item.desc}</p>
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
              Partnering with Crescent means securing peace of mind, premium quality, and constant system reliability.
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

      {/* Industries We Serve */}
      <section className="industries-section">
        <Container>
          <div className="section-title-wrap">
            <span className="section-tag sf-medium-font">Sector Integrations</span>
            <h2 className="section-title sf-pro-font">Industries We Serve</h2>
            <p className="section-subtitle">
              We deploy custom computing structures matching operational standards across diverse industry verticals.
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
            <span className="section-tag sf-medium-font">Complete Care</span>
            <h2 className="section-title sf-pro-font">Our Services</h2>
            <p className="section-subtitle">
              We support your purchase throughout its entire lifecycle with diagnostic expertise, upgrades, and IT consultations.
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
                  <motion.div 
                    className="service-card"
                    variants={fadeInUp}
                  >
                    <div className="service-num sf-pro-font">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <div className="service-content">
                      <h3 className="service-title sf-pro-font">{service.title}</h3>
                      <p className="funnel-sans text-secondary mb-0" style={{ fontSize: "0.95rem" }}>
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
            <span className="section-tag sf-medium-font">Clarifications</span>
            <h2 className="section-title sf-pro-font">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Got questions? We have answers. If you don't find what you're looking for, feel free to contact us.
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

export default Computers;

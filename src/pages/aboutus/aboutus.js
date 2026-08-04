import React from "react";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaUsers,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./aboutus.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Whoiam from "../../components/whoiam/whoiam";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};
const principles = [
  {
    icon: <FaUsers />,
    title: "People First",
    text: "Building relationships that last, with customers, partners, and our team.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity in Action",
    text: "Doing right by commitments, delivering what we promise, and earning trust every day.",
  },
  {
    icon: <FaChartLine />,
    title: "Continuous Growth",
    text: "Learning, evolving, and innovating — not just for today, but for what’s next.",
  },
];

const Aboutus = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);
  return (
    <div className="about-page">
      {/* header */}
      <Header />

      {/* HERO */}
      <motion.section
        className="about-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Container>
          <Row className="align-items-center gy-4 mt-5">
            <Col lg={6}>
              <h1 className="hero-title sf-pro-font">
                Our Journey - From Legacy to Innovation
              </h1>
              <p className="hero-text funnel-sans">
                Crescent World is rooted in a legacy of industrial excellence,
                entrepreneurial spirit, and a relentless pursuit of growth. What
                began as a humble business with strong values has evolved into a
                dynamic enterprise shaping tomorrow’s technology and commercial
                landscape.
              </p>
              {/* <NavLink to="/contact"><Button className="hero-btn">Start Your Journey</Button></NavLink> */}
            </Col>

            <Col lg={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="IT Consulting"
                className="img-fluid hero-img"
              />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* JOURNEY */}
      {/* STARTUP JOURNEY – STORY DRIVEN */}
      <section className="journey-v2">
        <Container>
          <Row className="align-items-center gy-5">
            <motion.h2 variants={fadeUp} className="section-title text-center ">
              Our Timeline
            </motion.h2>
            {/* LEFT – FOUNDER IMAGE */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="founder-img-wrapper"
              >
                <img
                  src="./images/aboutus.png"
                  alt="Founder Journey"
                  className="img-fluid founder-img"
                />
                <div className="founder-badge funnel-sans">
                  Founded with vision 🚀
                </div>
              </motion.div>
            </Col>

            {/* RIGHT – JOURNEY CONTENT */}
            <Col lg={7}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {/* <motion.p variants={fadeUp} className="journey-intro">
                  Our journey started with one belief — technology should solve
                  real business problems, not complicate them.
                </motion.p> */}

                {/* TIMELINE ITEMS */}
                {[
                  {
                    year: "1984 - The Beginning",
                    title: "The Idea Was Born",
                    desc: "Our story started in 1984 with the founding of Crescent Electronics Pvt. Ltd. A vision was set in motion - to build a business grounded in integrity, quality, and long-term relationships. From day one, we committed to delivering dependable solutions to our clients and partners.",
                  },
                  {
                    year: "1990s - Establishing Footprints",
                    title: "First Clients & Trust",
                    desc: "Throughout the 1990s, Crescent Electronics expanded its capabilities and reach. We strengthened our engineering prowess, diversified our product portfolio, and established a reputation for excellence across key markets. Customer trust became our greatest asset.",
                  },
                  {
                    year: "2000s -  Strengthening Capabilities",
                    title: "Growth & Expansion",
                    desc: "In the new millennium, Crescent embraced innovation and operational scalability. We integrated modern systems, enhanced quality standards, and began exploring new domains with technology-driven solutions.",
                  },
                  {
                    year: "2010s - Growth and Diversification",
                    title: "Trusted IT Consulting Partner",
                    desc: "The 2010s marked a decade of diversification. Crescent ventured beyond traditional electronics into connected technologies, smart solutions, and new business models - building deeper value for customers while adapting to evolving markets.",
                  },
                  {
                    year: "2020s - A New Chapter: Crescent World",
                    title: "Technology-Driven Growth",
                    desc: "Today, Crescent World stands as a forward-looking ecosystem. We combine decades of experience with fresh vision - anchoring our legacy in innovation, collaboration, and meaningful impact across technology, commerce, and industry.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="journey-timeline"
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-year funnel-sans">
                        {item.year}
                      </span>
                      {/* <h5>{item.title}</h5> */}
                      <p className="funnel-sans">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="vision-mission-section">
        <Container>
          <Row className="gy-5 align-items-stretch">
            {/* Vision */}
            <Col lg={6}>
              <motion.div
                className="vm-card vision-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <h2 className="vm-title">Our Vision</h2>
                <p className="vm-text vm-list funnel-sans">
                  To be a catalyst of transformation - building world-class
                  solutions that empower industries, enrich communities, and
                  inspire the future.
                </p>
              </motion.div>
            </Col>

            {/* Mission */}
            <Col lg={6}>
              <motion.div
                className="vm-card mission-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <h2 className="vm-title">Our Mission</h2>
                <ul className="vm-list funnel-sans">
                  {[
                    "Deliver exceptional products and services rooted in trust and quality",
                    "Innovate with purpose to solve real-world challenges",
                    "Cultivate partnerships based on mutual success",
                    "Enable growth for our clients, teams, and stakeholders",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="founders-section">
        <Container>
          {/* SECTION HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h2 className="section-title text-center" variants={fadeUp}>
              Meet the Founders
            </motion.h2>

            <motion.p
              className="section-subtitle text-center funnel-sans mb-5"
              variants={fadeUp}
            >
              Leaders who combine business clarity with deep technical expertise
            </motion.p>
          </motion.div>

          {/* FOUNDER 1 – IMAGE LEFT */}
          <Row className="align-items-center gy-5 mb-5">
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="founder-image-wrapper"
              >
                <img
                  src="./images/udyan-shah.png"
                  alt="Founder CEO"
                  className="founder-image"
                />
              </motion.div>
            </Col>

            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="founder-text funnel-sans"
              >
                <h4>Udayan Shah</h4>
                <span className="founder-role">Founder & CEO</span>
                <p>
                  Visionary leader driving Crescent World’s innovation in
                  enterprise IT, smart living, and cutting-edge technology
                  solutions. Committed to excellence, growth, and empowering
                  businesses with transformative digital ecosystems and
                  customer-centric services
                </p>
                <motion.a
                  href="https://www.linkedin.com/in/udayan-shah-49b0561/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </motion.div>
            </Col>
          </Row>

          {/* FOUNDER 2 – IMAGE RIGHT */}
          <Row className="align-items-center gy-5 flex-lg-row-reverse ">
            <Col lg={4}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="founder-image-wrapper"
              >
                <img
                  src="./images/chinmay-shah.png"
                  alt="Founder CTO"
                  className="founder-image"
                />
              </motion.div>
            </Col>

            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="founder-text funnel-sans"
              >
                <h4>Chinamy Shah</h4>
                <span className="founder-role">Director</span>
                <p>
                  Strategic Director guiding organizational growth, operational
                  excellence, and impactful partnerships. Focused on advancing
                  technology adoption, enhancing client success, and steering
                  long-term vision to elevate Crescent World’s market presence
                  across services and solutions.
                </p>
                <motion.a
                  href="https://www.linkedin.com/in/chinmayushah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* who we are Section */}
      <Whoiam />

      <section className="founders-philosophy">
        <Container>
          {/* HEADER */}
          <motion.div
            className="text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h2 className="section-title" variants={fadeUp}>
              Founders - Visionaries Behind Crescent World
            </motion.h2>

            <motion.p
              className="section-subtitle funnel-sans"
              variants={fadeUp}
            >
              At the heart of Crescent World are the visionaries whose
              leadership has shaped the company’s journey.
            </motion.p>
          </motion.div>

          {/* PHILOSOPHY CARDS */}
          <Row className="gy-4 mb-5">
            {principles.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div
                  className="philosophy-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">{item.icon}</div>
                  <h5 className="sf-pro-font">{item.title}</h5>
                  <p className="funnel-sans">{item.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* FOOTER TEXT */}
          <motion.p
            className="philosophy-footer text-center funnel-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Their belief in <strong>quality over shortcuts</strong>,{" "}
            <strong>long-term thinking over temporary wins</strong>, and{" "}
            <strong>shared success over individual gain</strong> laid the
            foundation for everything Crescent World has become.
          </motion.p>
        </Container>
      </section>

      {/* LEADERSHIP */}
      <section className="leader-section">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <img
                src="./images/about.jpg"
                alt="Leadership"
                className="img-fluid leader-img"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title sf-pro-font">Who We Are Today</h2>
              <p className="section-text funnel-sans">
                Crescent World is more than a business - it’s a community of
                thinkers, makers, creators, and collaborators. We are rooted in
                legacy, driven by purpose, and energized by the belief that
                innovation, when guided by integrity and care, creates lasting
                value.
              </p>
              <p className="section-text funnel-sans">
                Whether it’s technology solutions, industry partnerships, or
                future ventures, we bring experience with heart — and ambition
                with responsibility.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* founder viedo */}

      {/* <section className="video-section">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">A Message from Our Founders</h2>
                <p>
                  We started this company to help businesses grow with the right
                  technology decisions, not just software.
                </p>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="video-wrapper"
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Founder Message"
                  allowFullScreen
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* SERVICES */}
      <section className="services-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              className="section-title text-center sf-pro-font"
              variants={fadeUp}
            >
              What We Do
            </motion.h2>

            <Row className="gy-4 mt-4">
              {[
                {
                  title: "Apple Enterprise IT",
                  desc: "Helping enterprises, education, and government organizations integrate Apple devices seamlessly into their IT ecosystem.",
                },
                {
                  title: "Enterprise IT Solutions",
                  desc: "From Apple IT integration to high-performance servers and network security, we ensure seamless enterprise operations.",
                },
                {
                  title: "Smart Living & Security",
                  desc: "Enhance your lifestyle with cutting-edge home automation, AI-powered security systems, and advanced surveillance technology.",
                },
                {
                  title: "Semiconductor Solutions",
                  desc: "From microcontrollers to power semiconductors, we provide cutting-edge electronic components for next-gen innovation.",
                },
                {
                  title: "Luxury Electronic Gadgets",
                  desc: "Experience innovation and elegance with high-end gadgets designed to enhance your tech lifestyle.",
                },
              ].map((service, i) => (
                <Col md={6} lg={6} key={i}>
                  <motion.div variants={fadeUp}>
                    <Card className="service-card-about h-100">
                      <Card.Body>
                        <h5 className="sf-pro-font">{service.title}</h5>
                        <p className="funnel-sans">{service.desc}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* thinking */}
      <section className="thinking-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h2 className="section-title text-center text-white" variants={fadeUp}>
              Why We Exist
            </motion.h2>

            <motion.p
              className="section-subtitle text-center funnel-sans"
              variants={fadeUp}
            >
              We exist to build solutions that matter - not just products, but
              positive impact for businesses, people, and society.
            </motion.p>

            {/* <Row className="gy-4">
              {[
                {
                  title: "Business First",
                  desc: "We understand your business model before we write a single line of code.",
                },
                {
                  title: "Scalable by Design",
                  desc: "Every solution is built to grow — from startup MVPs to enterprise systems.",
                },
                {
                  title: "Technology with Purpose",
                  desc: "We choose tools based on outcomes, not trends.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -12 }}
                    className="thinking-card"
                  >
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row> */}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <Container>
          <h2 className="sf-pro-font">Let’s Build Something Impactful</h2>
          <p className="funnel-sans">
            Partner with an IT consulting team that understands business,
            growth, and scale.
          </p>
          <NavLink to="/contact">
            <Button className="cta-btn">Contact Us</Button>
          </NavLink>
        </Container>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};
export default Aboutus;

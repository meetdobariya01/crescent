import React, { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  BsPeople,
  BsLayers,
  BsCodeSlash,
  BsCheckCircle,
  BsDiagram3,
  BsBoundingBox,
  BsCalculator,
  BsShieldLock,
} from "react-icons/bs";
import "./convergence.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const services = [
  {
    title: "Cameras & Image Capture",
    desc: "Advanced camera systems form the foundation of modern security. Our image capture solutions deliver crystal-clear visuals across diverse environments—from indoor offices to large outdoor perimeters. With options ranging from discreet dome cameras to powerful PTZ and thermal imaging systems, we ensure reliable visibility in all lighting and weather conditions.",
    icon: <BsPeople />,
  },
  {
    title: "Video Recording & Management",
    desc: "Centralized video recording and management systems enable secure storage, easy retrieval, and real-time monitoring of video feeds. Whether on-premise or cloud-based, our solutions provide scalable, reliable video management that adapts to small installations or enterprise-wide deployments.",
    icon: <BsLayers />,
  },
  {
    title: "Analytics & Smart Surveillance",
    desc: "Move from passive surveillance to actionable insights. AI-powered analytics transform video data into meaningful intelligence—detecting motion, recognizing faces, tracking movement patterns, and generating real-time alerts. These systems enhance security while also supporting business intelligence and operational efficiency.",
    icon: <BsCodeSlash />,
  },
  //   {
  //     title: "Accounting & Book Keeping",
  //     desc: "Accurate, transparent, and timely financial management designed to simplify compliance.",
  //     icon: <BsCalculator />,
  //   },
  //   {
  //     title: "Debt Collection",
  //     desc: "Recover outstanding payments professionally while protecting your brand and client relationships.",
  //     icon: <BsShieldLock />,
  //   },
];
const principles = [
  {
    title: "Display & Monitoring Solutions",
    word: "Visual command, centralized.",
    desc: "High-performance display systems provide complete operational visibility. From video walls to centralized monitoring rooms, these solutions enable security teams and administrators to monitor multiple feeds, analyze events, and respond swiftly all from a single, unified interface.",
    icon: <BsLayers />,
  },
  {
    title: "Power & Environmental Control",
    word: "Protection that never sleeps.",
    desc: "Reliable power and environmental monitoring ensure uninterrupted system performance. From surge protection and UPS systems to weatherproof enclosures and environmental sensors, these solutions safeguard critical infrastructure against power disruptions and environmental risks.",
    icon: <BsDiagram3 />,
  },
  {
    title: "Public Addressing System Products",
    word: "Clear communication, when it matters most.",
    desc: "Public addressing systems enable effective communication across large spaces. Whether for announcements, emergency alerts, or background audio, our PA solutions deliver clarity, coverage, and reliability—indoors and outdoors.",
    icon: <BsBoundingBox />,
  },
];

const Convergence = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);
  return (
    <div>
      {/* Page Header */}
      <Header />

      <section className="convergence-section">
        <Container>
          <div className="mb-5 text-center container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="whywork-title sf-pro-font gradient-text"
            >
              Convergence Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="whywork-subtitle funnel-sans"
            >
              Our Convergence solutions bring together surveillance, access
              control, audio-visual systems, and environmental intelligence into
              a unified, intelligent ecosystem. Designed for homes, enterprises,
              campuses, and public infrastructure, these solutions enhance
              safety, efficiency, and user experience without complexity.
            </motion.p>
          </div>

          <Row className="g-4">
            {services.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className={`service-card ${active === index ? "active" : ""}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActive(index)}
                >
                  <div className="icon-box">{item.icon}</div>

                  <h4 className="sf-pro-font">{item.title}</h4>
                  <p className="funnel-sans">{item.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="business-hero">
        <Container fluid>
          <Row className="align-items-stretch">
            {/* IMAGE SECTION */}
            <Col
              lg={6}
              className="hero-image-wrapper"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.div
                className="hero-image"
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="./images/convergence.jpg" // replace with your image
                  alt="Business Team"
                />
                <div className={`image-overlay ${hovered ? "active" : ""}`} />
              </motion.div>
            </Col>

            {/* CONTENT SECTION */}
            <Col lg={6}>
              <motion.div
                className={`hero-content ${hovered ? "active" : ""}`}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="section-tag funnel-sans">
                  Access Control & Perimeter Security
                </span>

                <h1 className="sf-pro-font">
                  Authorized access. Absolute
                  <span> confidence.</span>
                </h1>

                <p className="funnel-sans">
                  Modern access control systems secure people, assets, and
                  infrastructure. From biometric authentication to RFID and
                  automated barriers, our solutions ensure only the right
                  individuals gain access—while maintaining smooth, frictionless
                  movement across facilities.
                </p>

                <div className="hero-features funnel-sans">
                  <div>
                    <BsCheckCircle />
                    Integrated Systems Expertise
                  </div>
                  <div>
                    <BsCheckCircle /> Custom-Designed Convergence Solutions
                  </div>
                  <div>
                    <BsCheckCircle /> End-to-End Lifecycle Support
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="principles-section">
        <Container>
          {principles.map((item, index) => (
            <motion.div
              key={index}
              className={`principle-row ${active === index ? "active" : ""}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setActive(index)}
            >
              <div className="icon-box">{item.icon}</div>

              <div className="content-box">
                <h5>{item.title}</h5>
                <span className="funnel-sans gradient-text">{item.word}</span>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      <div className=" py-5 text-center container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whywork-title sf-pro-font"
        >
          Why <span className="gradient-text">Crescent World</span> for
          Convergence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          We don’t just deploy individual systems we design fully integrated
          environments. Crescent World provides consultation, design,
          installation, integration, and long-term support, ensuring every
          component works together seamlessly.
        </motion.p>
      </div>

      {/* Footer Spacer */}
      <Footer />
    </div>
  );
};

export default Convergence;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./immresive.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

/* ANIMATION VARIANTS */
const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const floatingGlow = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const Immresive = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);
  return (
    <div className="immersive-page">
      {/* header */}
      <Header />

      {/* HERO SECTION */}
      <section className="immersive-hero d-flex align-items-center">
        <Container className="text-center position-relative">
          <motion.div
            className="hero-glow"
            variants={floatingGlow}
            animate="animate"
          />

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="sf-pro-font"
          >
            Immersive Technology Solutions
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="sf-pro-font"
          >
            Transforming Spaces into Experiences
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="funnel-sans"
          >
            At Crescent World, we blend advanced hardware, intelligent software,
            and sensory engineering to create unforgettable immersive
            environments.
          </motion.p>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="immersive-section">
        <Container>
          <motion.h3
            className="section-title text-center sf-pro-font"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Immersive Technology Capabilities
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="mt-5">
              {[
                [
                  "Large-Format Projection & LED",
                  "High-resolution projection mapping and LED environments that surround audiences with scale and cinematic visuals.",
                ],
                [
                  "Interactive Digital Walls",
                  "Multi-user touch experiences turning passive viewers into active participants.",
                ],
                [
                  "Simulation & Experience Centers",
                  "Real-world scenario simulations enhancing training, learning, and decision-making.",
                ],
                [
                  "Motion & Sensory Installations",
                  "Motion, vibration, wind, aroma, and environmental effects for deeper immersion.",
                ],
                [
                  "XR-Ready Infrastructure",
                  "AR, VR, and Mixed Reality environments optimized for performance and tracking.",
                ],
                [
                  "Centralized Control Systems",
                  "Real-time synchronization of visuals, audio, motion, and special effects.",
                ],
              ].map((item, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <motion.div
                    className="immersive-card"
                    variants={fadeUp}
                    whileHover={{
                      scale: 1.07,
                      rotateX: 6,
                      rotateY: -6,
                      boxShadow: "0 30px 80px rgba(37,99,235,0.25)",
                    }}
                  >
                    <h5 className="sf-pro-font">{item[0]}</h5>
                    <p className="funnel-sans">{item[1]}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* 4D + TECH STACK */}
      <section className="immersive-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.h3
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sf-pro-font"
              >
                4D SFX Theater & Advanced Technology Stack
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="funnel-sans"
              >
                Hydraulic motion seating, vibration, wind, and aroma effects
                synchronized with cinematic content for theme-park-grade
                experiences.
              </motion.p>
            </Col>

            <Col md={6}>
              <motion.ul
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="techstack-list funnel-sans"
              >
                <li>LiDAR Sensors for spatial accuracy</li>
                <li>Real-time Visual Rendering Engines</li>
                <li>Audio Spatializers & Sound Engines</li>
                <li>Multi-channel immersive audio systems</li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* USE CASES */}
      <section className="immersive-section">
        <Container>
          <motion.h3
            className="section-title text-center sf-pro-font"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Use Cases
          </motion.h3>

          <Row className="mt-4">
            {[
              "Experience Centers & Innovation Labs",
              "Corporate Boardrooms & Demo Zones",
              "Museums & Cultural Spaces",
              "Educational & Training Simulators",
              "Retail & Brand Activation",
              "Entertainment & Themed Installations",
            ].map((item, index) => (
              <Col md={4} key={index} className="mb-3">
                <motion.div
                  className="usecase-box funnel-sans"
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  whileHover={{ y: -12, scale: 1.06 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHY CRESCENT */}
      <section className="immersive-cta text-center">
        <Container>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="sf-pro-font"
          >
            Why <span className="gradient-text">Crescent World</span> for
            Immersive Technology
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="funnel-sans"
          >
            From concept design and engineering to installation and long-term
            support, Crescent World delivers immersive environments built for
            performance, reliability, and unforgettable impact.
          </motion.p>
        </Container>
      </section>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Immresive;

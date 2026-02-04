import React from "react";
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
  return (
    <div className="immersive-page">
      <Header />

      {/* HERO SECTION */}
      <section className="immersive-hero d-flex align-items-center">
        <Container className="text-center position-relative">
          <motion.div className="hero-glow" variants={floatingGlow} animate="animate" />

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
            Immersive Technology Solutions
          </motion.h1>

          <motion.h2 variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            Transforming Spaces into Experiences
          </motion.h2>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
            At Crescent World, our Immersive Technology Solutions blend advanced hardware,
            intelligent software, and sensory engineering to create powerful,
            unforgettable digital environments.
          </motion.p>

          {/* IMAGE 1 */}
          <motion.img
            src="./images/immersive-1.jpeg"
            alt="Immersive Experience"
            className="img-fluid mt-4 rounded shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          />
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="immersive-section">
        <Container>
          <motion.h3
            className="section-title text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Immersive Technology Capabilities
          </motion.h3>

          {/* IMAGE 2 */}
          <motion.img
            src="./images/immersive-2.jpeg"
            alt="Immersive Capabilities"
            className="img-fluid d-block mx-auto my-5 rounded shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
            <Row className="mt-5">
              {[
                ["Large-Format Immersive Projection & LED Environments", "High-resolution projection mapping and large-scale LED environments."],
                ["Interactive Digital Walls & Touch-Based Experiences", "Touch-enabled digital walls transform passive viewers into participants."],
                ["Simulation & Experience Centers", "Purpose-built simulation environments for education and training."],
                ["Motion & Sensory-Based Installations", "Multi-sensory installations engaging multiple senses."],
                ["XR-Ready Infrastructure (AR / VR / MR)", "Infrastructure supporting AR, VR, and Mixed Reality."],
                ["Centralized Control & Synchronization Systems", "Synchronize visuals, audio, and motion in real time."]
              ].map((item, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <motion.div className="immersive-card" variants={fadeUp}>
                    <h5>{item[0]}</h5>
                    <p>{item[1]}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* TECH STACK */}
      <section className="immersive-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.h3 initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }}>
                Advanced Immersive Technology Stack
              </motion.h3>

              <motion.p className="mt-3">
                Our immersive technology stack delivers highly realistic,
                responsive, and deeply engaging environments.
              </motion.p>
            </Col>

            <Col md={6}>
              {/* IMAGE 3 */}
              <motion.img
                src="./images/immersive-3.jpeg"
                alt="Technology Stack"
                className="img-fluid rounded shadow mb-4"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
              />

              <motion.ul className="immersive-tech-list">
                <li><strong>LiDAR Sensors</strong> for spatial tracking</li>
                <li><strong>Visual Engines</strong> for real-time rendering</li>
                <li><strong>Audio Spatializers</strong> for 3D sound</li>
                <li><strong>Sound Engines</strong> for synchronized effects</li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Immresive;

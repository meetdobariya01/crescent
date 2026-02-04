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
          <motion.div
            className="hero-glow"
            variants={floatingGlow}
            animate="animate"
          />

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible">
            Immersive Technology Solutions
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Transforming Spaces into Experiences
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            At Crescent World, our Immersive Technology Solutions blend advanced
            hardware, intelligent software, and sensory engineering to create
            powerful, unforgettable digital environments. Designed for
            enterprises, institutions, and experience-driven venues, these
            solutions move beyond traditional displays—engaging sight, sound,
            motion, and interaction in perfect harmony. From immersive learning
            environments to high-impact brand experiences, we deliver end-to-end
            immersive solutions tailored to your vision, space, and audience.
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
          >
            <Row className="mt-5">
              {[
                [
                  "Large-Format Immersive Projection & LED Environments",
                  "High-resolution projection mapping and large-scale LED environments designed to envelop audiences in rich, dynamic visuals. Ideal for storytelling, data visualization, and experiential spaces where scale and immersion matter.",
                ],
                [
                  "Interactive Digital Walls & Touch-Based Experiences",
                  "Touch-enabled digital walls transform passive viewers into active participants. These systems support multi-user interaction, real-time content manipulation, and intuitive engagement across corporate, educational, and public environments.",
                ],
                [
                  "Simulation & Experience Centers",
                  "Purpose-built simulation environments for education, professional training, and entertainment. These centers replicate real-world scenarios with precision—enhancing learning outcomes, skill development, and decision-making through immersive realism.",
                ],
                [
                  "Motion & Sensory-Based Installations",
                  "Multi-sensory installations integrate motion, vibration, wind, aroma, and environmental effects to deepen immersion. By engaging multiple senses simultaneously, these systems create emotionally impactful experiences that audiences remember.",
                ],
                [
                  "XR-Ready Infrastructure (AR / VR / MR)",
                  "Infrastructure designed to support Augmented Reality, Virtual Reality, and Mixed Reality experiences. From spatial tracking to optimized environments, we ensure seamless XR deployment for training, visualization, and interactive storytelling.",
                ],
                [
                  "Centralized Control & Synchronization Systems",
                  "Centralized systems that synchronize visuals, audio, motion, and effects in real time. These control platforms ensure flawless execution across complex immersive installations—maintaining timing, performance, and reliability.",
                ],
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
              <motion.h3
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
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
                <li>
                  <strong>LiDAR Sensors</strong> for spatial accuracy and motion
                  tracking
                </li>
                <li>
                  <strong>Visual Engines</strong>for real-time rendering
                </li>
                <li>
                  <strong>Audio Spatializers</strong> for directional sound
                  placement
                </li>
                <li>
                  <strong>Sound Engines</strong> for immersive, multi-channel
                  audio experiences
                </li>
              </motion.ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="immersive-section">
        <Container>
          <motion.h3
            className="section-title text-center mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Use Cases
          </motion.h3>

          <Row>
            {[
              {
                title: "Experience Centers & Innovation Labs",
                desc: "Inspire creativity, exploration, and innovation through interactive and immersive environments designed to showcase ideas, prototypes, and future-forward concepts.",
              },
              {
                title: "Corporate Boardrooms & Demo Zones",
                desc: "Deliver impactful presentations, product demonstrations, and executive briefings that go beyond traditional AV with immersive visual storytelling.",
              },
              {
                title: "Museums, Exhibitions & Cultural Spaces",
                desc: "Bring stories, history, and art to life through immersive storytelling, interactive exhibits, and visually rich cultural experiences.",
              },
              {
                title: "Educational & Training Simulators",
                desc: "Enhance learning through realistic simulations that improve knowledge retention, safety awareness, and real-world performance.",
              },
              {
                title: "Retail & Brand Activation Spaces",
                desc: "Create memorable brand experiences that engage customers emotionally, increase dwell time, and strengthen brand connection.",
              },
              {
                title: "Entertainment & Themed Installations",
                desc: "Design high-impact entertainment environments with cinematic visuals, immersive soundscapes, and sensory depth.",
              },
            ].map((item, index) => (
              <Col md={4} sm={6} key={index} className="mb-4">
                <motion.div
                  className="usecase-box h-100"
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h5 className="mb-2">{item.title}</h5>
                  <p className="mb-0">{item.desc}</p>
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
          >
            Why Crescent World
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            From concept design and engineering to installation and long-term
            support, Crescent World delivers immersive environments built for
            performance, reliability, and unforgettable impact.
          </motion.p>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Immresive;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRocket, FaCogs, FaLayerGroup } from "react-icons/fa";
import "./whoiam.css";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Whoiam = () => {
  return (
    <section className="whoiam-section">
      <Container>
        {/* Heading */}
        <motion.h2
          className="whoiam-title text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          WHO I AM
        </motion.h2>

        {/* Cards */}
        <Row className="mt-5 g-4">
          <Col lg={4} md={6}>
            <motion.div
              className="whoiam-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <FaRocket className="whoiam-icon" />
              <h4 className="sf-pro-font">Tech Evangelist</h4>
              <p className="funnel-sans ">
                I advocate for innovative technologies, helping businesses
                adopt tools that drive sustainable growth and operational
                efficiency.
              </p>
            </motion.div>
          </Col>

          <Col lg={4} md={6}>
            <motion.div
              className="whoiam-card featured"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
            >
              <FaCogs className="whoiam-icon" />
              <h4 className="sf-pro-font">Digital Transformation Leader</h4>
              <p className="funnel-sans ">
                I guide organizations in integrating digital solutions to
                modernize operations and elevate customer experiences.
              </p>
            </motion.div>
          </Col>

          <Col lg={4} md={12}>
            <motion.div
              className="whoiam-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <FaLayerGroup className="whoiam-icon" />
              <h4 className="sf-pro-font ">IT Aggregator</h4>
              <p className="funnel-sans">
                I bring together diverse IT products and services into seamless,
                scalable solutions tailored to unique business needs.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Whoiam;
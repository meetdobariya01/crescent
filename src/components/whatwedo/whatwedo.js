import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./whatwedo.css";

const imageVariants = {
  initial: { opacity: 0, scale: 0.9, rotate: -2 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    rotate: 1,
    boxShadow: "0px 30px 60px rgba(0,0,0,0.25)",
  },
};

const Whatwedo = () => {
  return (
    <div>
      <section className="what-we-do-section">
        <Container>
          <motion.h2
            className="section-title text-center sf-pro-font"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What we Do at
            <span className="ms-2 gradient-text">Crescent World</span>
          </motion.h2>
          <Row className="align-items-center g-5">
            {/* LEFT CONTENT */}
            <Col lg={6}>
              {/* <motion.h2
                className="section-title text-center "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                What we Do at<span className="ms-2">Crescent World</span>
              </motion.h2> */}

              <motion.p
                className="section-text"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              >
                Crescent World delivers advanced technology solutions and
                premium products across multiple domains. They provide
                enterprise IT solutions, including Apple device integration for
                businesses, high-performance servers, networking, cybersecurity,
                and cloud infrastructure. They enhance smart living and security
                with home automation, AI-powered surveillance, and intelligent
                access control systems.
              </motion.p>

              <motion.p
                className="section-text"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                viewport={{ once: true }}
              >
                They supply semiconductor components such as microcontrollers,
                power semiconductors, and memory devices. Additionally, they
                offer luxury electronic gadgets that combine innovative tech
                with premium design to elevate personal and professional
                lifestyles.
              </motion.p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6}>
              <motion.div
                className="image-wrapper"
                variants={imageVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <motion.img
                  src="./images/hero-section.webp"
                  alt="What we do"
                  className="img-fluid"
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Whatwedo;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faqs.css";

const faqs = [
  {
    q: "What is Crescent World?",
    a: "Crescent World provides Apple products, Enterprise IT solutions, Smart Home technologies, semiconductors, and luxury gadgets for individuals and businesses.",
  },
  {
    q: "How does Crescent World support Apple users?",
    a: "We help set up, manage, and integrate Apple devices across businesses, education, and government sectors for a seamless IT experience.",
  },
  {
    q: "What Enterprise IT solutions do you offer?",
    a: "We provide servers, networking, cloud infrastructure, cybersecurity, storage solutions, and IT management tools for enterprises.",
  },
  {
    q: "What is Convergence, and how does it improve smart living?",
    a: "Our smart home solutions include AI-powered surveillance, access control, home automation, and security systems for modern living.",
  },
  {
    q: "What semiconductor products do you provide?",
    a: "We offer microcontrollers, processors, power semiconductors, analog devices, and memory solutions for next-generation electronics.",
  },
  {
    q: "Do you offer luxury electronic gadgets?",
    a: "Yes! We provide high-end audio systems, premium smartwatches, designer tech accessories, and other luxury gadgets.",
  },
];

const FaqSection = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">
      <Container>
        {/* Heading */}
        <motion.h2
          className="faq-title text-center sf-pro-font"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="faq-subtitle text-center funnel-sans "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get quick answers to common questions about Crescent World and our
          offerings.
        </motion.p>

        <div className="faq-divider" />

        {/* FAQ Grid */}
        <Row className="mt-5 g-4">
          {faqs.map((item, index) => (
            <Col lg={6} md={12} key={index}>
              <motion.div
                className={`faq-card ${
                  active === index ? "active" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <div className="faq-header sf-pro-font">
                  <h5>{index + 1}. {item.q}</h5>
                  <span className="faq-icon">
                    {active === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>

                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      className="faq-body funnel-sans"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FaqSection;
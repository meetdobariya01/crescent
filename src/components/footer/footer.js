import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
FaInstagram, FaTwitter, FaLinkedin
} from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4">
          {/* LEFT – LOGO & ABOUT */}
          <Col lg={4} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="./images/logo.png"
                alt="Consulting Logo"
                className="footer-logo"
              />
              <p className="footer-text funnel-sans mt-3">
                We provide professional consulting services to help individuals
                and businesses grow with clarity, confidence, and strategy.
              </p>
            </motion.div>
          </Col>

          {/* SERVICES */}
          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h5 className="footer-title sf-pro-font">Services</h5>
              <ul className="footer-links funnel-sans">
                <li>Business Consulting</li>
                <li>Career Guidance</li>
                <li>Mental Wellness</li>
                <li>Strategy Planning</li>
              </ul>
            </motion.div>
          </Col>

          {/* COMPANY */}
          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h5 className="footer-title sf-pro-font">Company</h5>
              <ul className="footer-links funnel-sans">
                <li>
                  <Link className="text-light text-decoration-none" to="#">
                    About Us
                  </Link>
                </li>
                <li className="text-d">
                  <Link to="#">Our Experts</Link>
                </li>
                <li className="text-d">
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li className="text-d">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </motion.div>
          </Col>

          {/* CONTACT */}
          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h5 cl assName="footer-title sf-pro-font">Connect</h5>
              <div className="text-d funnel-sans">
                <a href="mailto:info@crescentworld.com">
                  info@crescentworld.com
                </a>
              </div>

              <div className="social-icons">
                {/* <motion.a whileHover={{ scale: 1.2 }} href="#">
                  <FaFacebookF />
                </motion.a> */}
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.instagram.com/crescent_world/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://x.com/Crescent_Mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/company/crescent-electronics-pvt.-ltd./?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* BOTTOM */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Consulting Services. All Rights Reserved.
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
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
              <p className="footer-text">
                We provide professional consulting services to help individuals
                and businesses grow with clarity, confidence, and strategy.
              </p>
            </motion.div>
          </Col>

          {/* SERVICES */}
          <Col lg={2} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h5 className="footer-title">Services</h5>
              <ul className="footer-links">
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
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                <li>
                  <Link className="text-light text-decoration" to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/our-experts">Our Experts</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </motion.div>
          </Col>

          {/* CONTACT */}
          <Col lg={3} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h5 className="footer-title">Connect</h5>
              <p className="footer-text">
               <a href="mailto:info@crescentworld.com">
                        info@crescentworld.com
                      </a>
              </p>

              <div className="social-icons">
                {/* <motion.a whileHover={{ scale: 1.2 }} href="#">
                  <FaFacebookF />
                </motion.a> */}
                <motion.a whileHover={{ scale: 1.2 }} href="#">
                  <FaLinkedinIn />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} href="#">
                  <FaTwitter />
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

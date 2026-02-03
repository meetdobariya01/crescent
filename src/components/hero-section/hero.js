import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./hero.css";

const services = [
  "Curated",
  "Innovative",
  "Integrated",
  "Experiential",
  "Premium",
];

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-overlay" />

        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-9">
              {/* Top small text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-subtitle gradient-text"
              >
                WELCOME TO CRESCENT WORLD
              </motion.p>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-title"
              >
                From enterprise IT to luxury electronics, we design technology
                experiences that work beautifully, intelligently, and
                effortlessly.
              </motion.h1>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="hero-services"
              >
                {services.map((item, index) => (
                  <div className="service-item" key={index}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-btn"
              >
                Get Started Today
                <FaArrowRight />
              </motion.button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

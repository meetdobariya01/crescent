import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaLink, FaSyncAlt } from "react-icons/fa";
import "./working.css";

const data = [
  {
    icon: <FaDesktop />,
    title: "Expertise and Experience",
  },
  {
    icon: <FaLink />,
    title: "Industry-Leading Partnerships",
  },
  {
    icon: <FaSyncAlt />,
    title: "End-to-End Support",
  },
];

const Working = () => {
  return (
    <div>
      <section className="whywork-section">
        <div className="container text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="whywork-title sf-pro-font"
          >
            Why Work with <span className="ms-2 gradient-text">Crescent World</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="whywork-subtitle sf-medium-font"
          >
            We bring together the services and technologies <br />
            that solve your business problems.
          </motion.p>

          {/* Cards */}
          <div className="row mt-5">
            {data.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <motion.div
                  className="whywork-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <div className="icon-circle">{item.icon}</div>
                  <h5 className="">{item.title}</h5>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Working;

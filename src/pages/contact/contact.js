import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./contact.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);
  return (
    <div>
      {/* header */}
      <Header />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.section
          className="contact-header text-center"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Contact Us</h1>
          {/* <p>Contact Us</p> */}
        </motion.section>

        {/* Content */}
        <section className="container contact-section funnel-sans">
          <div className="row align-items-start g-4">
            {/* Left Form */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-card">
                <motion.span
                  className="small-title sf-medium-font"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  REACH OUT
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="sf-pro-font"
                >
                  Let’s Build Success — <br />
                  <span>Together.</span>
                </motion.h2>

                <motion.p
                  className="text-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Whether you're seeking talent, tech, billing, or financial
                  expertise — our team is just a message away.
                </motion.p>

                <motion.form
                  className="row g-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="First name"
                    />
                  </motion.div>

                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="Last name"
                    />
                  </motion.div>

                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="Phone"
                    />
                  </motion.div>

                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="E-mail"
                    />
                  </motion.div>

                  <motion.div className="col-12" variants={item}>
                    <select className="form-select animated-input">
                      <option>Select Option</option>
                      <option>Consulting</option>
                      <option>Support</option>
                      <option>Business</option>
                    </select>
                  </motion.div>

                  <motion.div className="col-12" variants={item}>
                    <textarea
                      className="form-control animated-input"
                      rows="4"
                      placeholder="Write Message..."
                    />
                  </motion.div>

                  <motion.div className="col-12" variants={item}>
                    <motion.button
                      className="btn submit-btn"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit Message →
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>

            {/* Right Info */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="map-box mb-3"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36141.27018425535!2d72.51086012096434!3d23.042339758002885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f53fffffff%3A0xa54e184aaa583f99!2sCrescent%20Electronics%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1770028120985!5m2!1sen!2sin"
                />
              </motion.div>

              {["Email", "Contact", "Location"].map((title, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <strong>{title}</strong>
                  <p className="title">
                    {title === "Email" && (
                      <a href="mailto:info@crescentworld.com">
                        info@crescentworld.com
                      </a>
                    )}

                    {title === "Contact" && (
                      <a href="tel:+7359044944">7359044944</a>
                    )}

                    {title === "Location" && (
                      <a
                        href="https://maps.app.goo.gl/D4eLANRMmRDqU31D8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Crescent Electronics Pvt. Ltd. Crescent House B/h.
                        Navrangpura Post Office, Adjoining lane between Ashu
                        Dental Clinic & Marwadi Shares, Ahmedabad 380009.
                      </a>
                    )}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;

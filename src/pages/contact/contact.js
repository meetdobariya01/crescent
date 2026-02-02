import React from "react";
import { motion } from "framer-motion";
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
                  src="https://maps.google.com/maps?q=133%20Centennial%20Ridge%20Dr&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                        href="https://www.google.com/maps?q=133+Centennial+Ridge+Dr,+Acworth+GA,+30102"
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
      <Footer/>
    </div>
  );
};

export default Contact;

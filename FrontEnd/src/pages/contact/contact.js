import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    option: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5190/api';

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          option: formData.option,
          subject: formData.option,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          option: "",
          message: "",
        });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.section
          className="contact-header text-center"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mt-5">Contact Us</h1>
        </motion.section>

        <section className="container contact-section funnel-sans">
          <div className="row align-items-start g-4">
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
                  Let's Build Success - <br />
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

                {success && (
                  <motion.div 
                    className="alert alert-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <strong>✅ Success!</strong> Message sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div 
                    className="alert alert-danger"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <strong>❌ Error!</strong> {error}
                  </motion.div>
                )}

                <motion.form
                  className="row g-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleSubmit}
                >
                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div className="col-md-6" variants={item}>
                    <input
                      className="form-control animated-input"
                      placeholder="E-mail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div className="col-12" variants={item}>
                    <select 
                      className="form-select animated-input"
                      name="option"
                      value={formData.option}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Support">Support</option>
                      <option value="Business">Business</option>
                      <option value="Talent">Talent Acquisition</option>
                      <option value="Technology">Technology</option>
                      <option value="Billing">Billing</option>
                    </select>
                  </motion.div>

                  <motion.div className="col-12" variants={item}>
                    <textarea
                      className="form-control animated-input"
                      rows="4"
                      placeholder="Write Message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div className="col-12" variants={item}>
                    <motion.button
                      className="btn submit-btn"
                      type="submit"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Submit Message →'
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>

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
                      <a href="tel:+919824018555">+91 98240 18555</a>
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
      <Footer />
    </div>
  );
};

export default Contact;
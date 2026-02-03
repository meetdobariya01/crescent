import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./luxery-product.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";

const data = [
  {
    title: "Newline - Smart Displays",
    word: "Collaboration, reimagined.",
    text: "Newline smart displays are designed for modern collaboration and interactive communication. With large-format touchscreens, high-resolution visuals, and seamless wireless connectivity, Newline transforms meeting rooms, classrooms, and hybrid workspaces. Built for simplicity and reliability, these displays enable effortless content sharing, real-time collaboration, and engaging presentations—without complexity.",
    img: "./images/brands/newline.jpeg",
    list1: "Boardrooms & meeting rooms",
    list2: "Training rooms & classrooms",
    list3: "Hybrid collaboration spaces",
    list4: "Corporate and educational environments",
    link: "/newline",
    // bg: "bg-light"
  },
  {
    title: "EIZO – Professional Monitors",
    word: "Precision you can see.",
    text: "EIZO monitors are engineered for accuracy, consistency, and visual excellence. Trusted by professionals across industries, EIZO displays deliver exceptional color fidelity, uniformity, and clarity. From mission-critical environments to creative and data-driven workspaces, EIZO monitors ensure every detail is displayed exactly as intended.",
    img: "./images/brands/eizo.jpeg",
    list1: "Design & creative studios",
    list2: "Medical & healthcare imaging",
    list3: "Control rooms & monitoring centers",
    list4: "Financial and data-intensive environments",
    link: "/eizo",
    // bg: "bg-warm",
    reverse: true,
  },
  {
    title: "Seenspire - Digital Signage",
    word: "Content that speaks for you.",
    text: "Seenspire is a content-driven digital signage platform that keeps screens relevant, engaging, and professional—without design effort. With 200+ curated content feeds and seamless integration with workplace tools and social platforms, Seenspire ensures your displays stay dynamic and informative. Everything is automatically formatted for a clean, consistent look across all screens.",
    img: "./images/brands/seenspire.jpeg",
    list1: "Corporate offices & lobbies",
    list2: "Hospitality & coworking spaces",
    list3: "Retail environments",
    list4: "Internal communication displays",
    link: "/seenspire",
  },
  {
    title: "Mapsted – Indoor Mapping & Navigation",
    word: "Navigation, perfected indoors.",
    text: "Mapsted delivers advanced indoor mapping and positioning technology without the need for additional hardware. It enables precise navigation, wayfinding, and location intelligence inside large and complex spaces. From guiding visitors to optimizing operations, Mapsted enhances user experience while unlocking valuable spatial insights.",
    img: "./images/brands/mapsted.png",
    list1: "Corporate campuses",
    list2: "Airports & large venues",
    list3: "Hospitals & healthcare facilities",
    list4: "Shopping malls & exhibitions",
    link: "/",
    // bg: "bg-dark-cool",
    reverse: true,
  },
  {
    title: "Hypervsn – 3D Holographic Displays",
    word: "Visuals that stop people in their tracks.",
    text: "Hypervsn creates floating 3D holographic visuals that captivate attention and redefine digital display. Using rotating LED technology, Hypervsn delivers striking, high-impact visuals that appear to float in mid-air. It’s a powerful storytelling tool for brands that want to stand out and create memorable experiences.",
    img: "./images/brands/hypervsn.jpeg",
    list1: "Retail & brand activations",
    list2: "Exhibitions & trade shows",
    list3: "Showrooms & experience centers",
    list4: "High-impact marketing displays",
    link: "/hypervsn",
  },
  {
    title: "Heckler – Professional Mounts & Stands",
    word: "Form meets function.",
    text: "Heckler designs beautifully crafted mounts, stands, and enclosures for modern technology. Built with precision and minimalism, Heckler products complement premium spaces while providing stability, security, and flexibility. From video conferencing setups to digital signage and tablet mounts, Heckler ensures technology looks as good as it performs.",
    img: "./images/brands/heckler.jpeg",
    list1: "Video conferencing rooms",
    list2: "Digital signage installations",
    list3: "Conference rooms & offices",
    list4: "Public and commercial spaces",
    link: "/",
    // bg: "bg-dark-warm",
    reverse: true,
  },
];

const Luxery = () => {
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
      {/* Section Header */}
      <Header />

      <div className="mt-5 pt-5 text-center container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whywork-title sf-pro-font"
        >
          Luxury Technology Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          Curated technology for spaces where design, performance, and
          experience matter. Crescent World brings together world-class
          technology brands that transform how people communicate, collaborate,
          and experience environments-from boardrooms and campuses to retail,
          hospitality, and immersive spaces.
        </motion.p>
      </div>

      <section className="craft-section">
        <Container>
          {data.map((item, index) => (
            <Row
              key={index}
              className={`align-items-center craft-row ${item.reverse ? "flex-row-reverse" : ""} ${item.bg || ""}`}
            >
              {/* Image */}
              <Col lg={4} md={12} className="mb-4 mb-lg-0">
                <motion.div
                  className="image-wrap"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded-image"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </Col>

              {/* Content */}
              <Col lg={4} md={12} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="craft-title sf-pro-font ">{item.title}</h3>
                  <h4 className="gradient-text mb-3 sf-pro-font ">
                    {item.word}
                  </h4>
                  <p className="craft-text funnel-sans">{item.text}</p>
                </motion.div>
              </Col>

              {/* OL + UL */}
              <Col lg={4} md={12}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="feature-title sf-pro-font">Ideal for:</h3>
                  <ul className="feature-ul funnel-sans">
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                    <li>{item.list3}</li>
                    <li>{item.list4}</li>
                    <Link to={item.link}>
                      <button
                        type="button"
                        className="btn btn-outline-dark mt-3 funnel-sans"
                      >
                        Learn More
                      </button>
                    </Link>
                  </ul>
                </motion.div>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      <div className=" py-5 text-center container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whywork-title sf-pro-font"
        >
          Why <span className="gradient-text">Crescent World</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          We don’t just supply technology-Fwe design experiences. Every luxury
          tech solution we offer is curated, configured, and supported to meet
          the highest standards of performance and design.
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Luxery;

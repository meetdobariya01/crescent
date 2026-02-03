import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const features = [
  {
    title: "Engineered Without Compromise",
    word: "Performance, redefined",
    text: "EIZO represents the pinnacle of display engineering, where precision, longevity, and visual excellence converge. Rooted in Japanese craftsmanship, EIZO maintains complete in-house control over design, development, and manufacturing an increasingly rare standard in today’s display industry. Every monitor is meticulously engineered and individually tested to meet exacting performance criteria, ensuring uncompromised image integrity, consistency, and reliability across its entire lifespan.",
    img: "./images/brands/eizo.png",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Ideal for Every Environment",
    word: "Incredibly capable. Remarkably versatile",
    text: "EIZO offers an extensive portfolio of premium display solutions designed to serve a wide spectrum of professional and personal applications. From high-efficiency office environments and color-critical creative studios to healthcare institutions, industrial control rooms, surveillance operations, and advanced entertainment setups, EIZO delivers purpose-built displays for each discipline. This breadth allows organizations and individuals alike to standardize on a single brand that consistently meets the highest visual and operational demands.",
    img: "./images/brands/eizo-2.png",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title: "Precision Tuned for Real-World Performance",
    word: "Designed to work. Built to protect.",
    text: "Each EIZO display is calibrated and optimized for its specific use case, ensuring performance that extends far beyond raw specifications. Creative professionals depend on EIZO’s color accuracy, uniformity, and long-term stability for exacting visual workflows. Medical practitioners rely on diagnostic-grade luminance control and grayscale accuracy for confident image interpretation. In business and industrial settings, advanced ergonomics, eye-care technologies, and 24/7 operational reliability enable sustained performance without fatigue or compromise. Even in gaming and entertainment, EIZO delivers refined responsiveness and visual depth that elevate the experience.",
    // text2:
    //   "Touch performance is exceptionally smooth: infrared or capacitive sensors plus optical bonding deliver lag-free, paper-like writing and crystal-clear 4K images from any angle. Audio and video are top-quality too - most displays have an 8-mic array with echo cancellation and powerful speakers (even subwoofers in the higher-end models) for rich, room-filling sound. An AI-enabled pan/tilt camera option keeps presenters centered in frame.  All screens feature sleek, minimalist designs (many with anti-glare, low-blue-light and antimicrobial glass coatings) that look great in any modern workspace.",
    img: "./images/brands/eizo-3.png",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "A Long-Term Investment in Visual Excellence",
    word: "Designed to work. Built to protect.",
    text: "An EIZO monitor is not a short-term purchase-it is a strategic investment in quality, efficiency, and confidence. Built for extended service life and backed by industry-leading warranties and long-term support, EIZO displays maintain their performance year after year. Energy-efficient operation, reduced eye strain, and durable construction translate into lower total cost of ownership and greater peace of mind. Whether for critical decision-making, creative expression, or immersive enjoyment, EIZO transforms the display from a simple interface into a trusted, long-term visual instrument.",
    // text2:
    //   "Touch performance is exceptionally smooth: infrared or capacitive sensors plus optical bonding deliver lag-free, paper-like writing and crystal-clear 4K images from any angle. Audio and video are top-quality too - most displays have an 8-mic array with echo cancellation and powerful speakers (even subwoofers in the higher-end models) for rich, room-filling sound. An AI-enabled pan/tilt camera option keeps presenters centered in frame.  All screens feature sleek, minimalist designs (many with anti-glare, low-blue-light and antimicrobial glass coatings) that look great in any modern workspace.",
    img: "./images/brands/eizo-4.png",
    // bg: "bg-light-cream",
    reverse: true,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Eizo = () => {
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
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="mt-5 pt-5 text-center container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whywork-title sf-pro-font gradient-text"
        >
          EIZO: Premium Displays & Imaging Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          EIZO (literally “image” in Japanese) is a global leader in high-end
          display monitors. Since 1968 EIZO has designed, engineered and
          manufactured its monitors in-house under strict quality control,
          making it one of the few remaining brands that still builds products
          in Japan. As a result, EIZO delivers superior image clarity, color
          accuracy and reliability that professionals and consumers alike trust.
          EIZO’s lineup spans a wide range of monitor solutions - from office
          productivity and creative work to healthcare, industrial, security and
          entertainment - ensuring that there is an EIZO monitor for every
          application.
        </motion.p>
      </div>

      <section className="features-section py-5 ">
        <div className="container">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={`row align-items-center g-0 feature-row ${item.bg} ${
                item.reverse ? "flex-row-reverse" : ""
              }`}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {/* IMAGE */}
              <div className="col-md-4">
                <motion.div
                  className="feature-image"
                  whileHover={{ scale: 1.08 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src={item.img} alt={item.title} />
                </motion.div>
              </div>

              {/* TEXT */}
              <div className="col-md-8">
                <motion.div
                  className="feature-content funnel-sans "
                  initial={{ opacity: 0, x: item.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h3 className="sf-pro-font gradient-text">{item.title}</h3>
                  {/* <h4 className="gradient-text">{item.word}</h4> */}
                  <p>{item.text}</p>
                  <p className="mt-3">{item.text2}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className=" py-5 text-center container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whywork-title sf-pro-font"
        >
          Why Choose <span className="gradient-text">Crescent World ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          In summary, whether you are a professional needing exacting
          performance or anyone seeking a superior viewing experience, EIZO
          monitors deliver unmatched clarity, stability and innovation. They’re
          not just displays; they are precision tools that can improve your
          workflow, protect your vision and enhance your enjoyment of visuals,
          making them a valuable part of your life
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Eizo;

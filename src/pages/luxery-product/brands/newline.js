import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const features = [
  {
    title: " Newline Product ",
    word: "Performance, redefined",
    text: (
      <>
        Crescent World offers the full range of Newline displays and
        accessories. These include the flagship Q Series (high-performance 4K
        touch displays with powerful Android OS and multi-user profiles), the <span className="gradient-text">Z
        Series </span> (education-optimized panels with optional built-in PCs/AI cameras
        for hybrid classrooms and meetings), <span className="gradient-text">Lyra</span> (Newline’s latest education
        display designed for engaging lessons with paper-like writing and vivid
        4K imagery), <span className="gradient-text">MIRA</span> (a versatile corporate-grade screen for boardrooms and
        training rooms, featuring optical bonding for superior clarity and an
        integrated camera/mic array), <span className="gradient-text">FLEX</span> (a 27″ all-in-one desktop
        collaboration monitor with built-in 4K camera, echo-cancelling mic,
        active pen and USB-C power), and <span className="gradient-text">Elara</span> (the top-tier hybrid classroom
        panel with premium audio, wide viewing angle, optical-bonded touch
        glass, modular camera and multiple user profiles). We also carry all
        Newline accessories - from mobile carts and wall mounts to cameras,
        microphones and dongles - to complete any installation. Each Newline
        product is designed to be non-proprietary and easy to integrate, so it
        works seamlessly with your existing IT infrastructure.
      </>
    ),
    img: "./images/brands/z-pro-bnr.webp",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Ideal for Every Environment",
    word: "Incredibly capable. Remarkably versatile",
    text: "Newline displays serve a wide range of users and scenarios. In business and government, teams use Newline panels in boardrooms, conference rooms and training centers to spark creativity and streamline meetings. In education, Lyra and Elara series engage students with interactive lessons and support hybrid learning (with built-in cameras and broadcast software).  Hybrid workplaces and co-working spaces benefit from FLEX and MIRA displays, which bring video conferencing and content sharing to any desk or open collaboration area. Even healthcare and enterprise environments can use Newline screens for telemedicine consultations, digital signage, medical training and secure presentations. In every case, Newline’s intuitive interface and integrated tools ensure that users can jump into collaboration immediately, without lengthy training.",
    img: "./images/brands/z-pro-prod1.webp",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title: "Modern Collaboration, Built In",
    word: "Designed to work. Built to protect.",
    text: "Newline displays are engineered for today’s collaborative needs. They include built-in tools like the Newline Whiteboard app and wireless screen-sharing so teams can annotate and share content in real time. The Newline App Store offers 100+ productivity and education apps (from Microsoft Office to Kahoot and Zoom) right on the screen. Setting up is hassle-free - plug-and-play USB-C connectivity carries video, audio and up to 65W power over one cable, eliminating messy wires and adapters. Each panel runs a secure Android OS (some models Android 11 or 14), supports multi-user profiles and easily connects to Google Drive, OneDrive and other cloud services.",
    text2:
      "Touch performance is exceptionally smooth: infrared or capacitive sensors plus optical bonding deliver lag-free, paper-like writing and crystal-clear 4K images from any angle. Audio and video are top-quality too - most displays have an 8-mic array with echo cancellation and powerful speakers (even subwoofers in the higher-end models) for rich, room-filling sound. An AI-enabled pan/tilt camera option keeps presenters centered in frame.  All screens feature sleek, minimalist designs (many with anti-glare, low-blue-light and antimicrobial glass coatings) that look great in any modern workspace.",
    img: "./images/brands/q_plus_prod1.webp",
    // bg: "bg-light-cream",
    reverse: false,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Newline = () => {
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
          NEWLINE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          Newline Interactive is a global leader in touchscreen collaboration
          technology. Its products form a “comprehensive suite of audio-visual
          technology solutions designed to enhance collaboration and
          productivity”. Newline’s ecosystem is powered by innovative digital
          tools that transform any space-boardrooms, classrooms, conference
          calls and collaboration sessions-into dynamic, interactive
          environments. The result is a seamless, intuitive collaboration
          experience that sets Newline apart.
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
          As an official Newline partner, Crescent World provides end-to-end
          support for your interactive display deployment. From initial
          consultation and on-site demonstrations to professional installation,
          integration with your audio/video systems, and dedicated after-sales
          service, we make it easy to get the most out of Newline technology.
          Our experts ensure a smooth setup (including mounting and network
          configuration), train your team on the software and tools, and offer
          responsive technical support. With Crescent World handling the
          details, you can focus on leveraging Newline’s advanced displays to
          boost engagement and productivity in your organization.
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Newline;

import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const features = [
  {
    title: " Redefining Workspace Hardware with Elegant Engineering ",
    word: "Performance, redefined",
    text: "Heckler Design creates modern audio-visual (AV) hardware, furniture, and video meeting solutions that seamlessly connect hybrid workforces and elevate professional spaces with elegant, durable design. The brand’s core focus lies in combining commercial-grade engineering with refined industrial aesthetics, delivering products that perform reliably while complementing contemporary work and collaboration environments. From mobile stands and iPad enclosures to video conferencing carts and displays, Heckler supports AV integration across boardrooms, open workspaces, training rooms, and public venues.",
    img: "./images/brands/hackler-1.webp",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Elite Stands & Mobile Display Solutions",
    word: "Mobile AV and Dual Display Stands — Mobility Meets Strength",
    text: "Heckler’s mobile display stands are engineered for true flexibility in professional environments. Solutions such as the Dual Display Stand enable mounting of two large screens (most 65″ – 75″) at eye-level height for video conferencing, signage, presentations, or digital communications. These stands utilize an innovative column-and-beam architecture with tool-free assembly, enabling effortless setup, compact nested storage, tidy cable management, and robust performance under daily use in enterprise or event settings. For larger displays, the XL Display Stand MkII supports displays up to 105″ with broad VESA compatibility (400 – 1600 patterns), delivering rock-solid rigidity and premium structural strength with large steel beam construction, set-screw locking systems, and quick assembly workflows — ideal for boardrooms, digital signage hubs, and shared collaboration spaces. ",
    img: "./images/brands/hackler-2.webp",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title: "Confidence & Collaboration Stands",
    word: "Designed to work. Built to protect.",
    text: "The Heckler Confidence Stand transforms presenter-led engagements and live events by mounting displays as downstage confidence monitors, replacing static podium setups with modern, interactive platforms that connect presenters meaningfully with audiences. Available in sizes for displays from 37″ to 85″, this stand’s adjustable tilt (30 ° – 60 °) and steel commercial-grade construction ensure both optimal viewing angles and long-term durability. Its design enables circular display configurations, turning roundtable spaces into immersive collaboration zones, while detachable device shelves and tool-free assembly make it ideal for corporate all-hands events, conferences, lecture halls, and creative meeting environments. ",
    text2:
      "Touch performance is exceptionally smooth: infrared or capacitive sensors plus optical bonding deliver lag-free, paper-like writing and crystal-clear 4K images from any angle. Audio and video are top-quality too - most displays have an 8-mic array with echo cancellation and powerful speakers (even subwoofers in the higher-end models) for rich, room-filling sound. An AI-enabled pan/tilt camera option keeps presenters centered in frame.  All screens feature sleek, minimalist designs (many with anti-glare, low-blue-light and antimicrobial glass coatings) that look great in any modern workspace.",
    img: "./images/brands/hackler-3.webp",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Why Heckler Matters: Form, Function, & Future-Ready Spaces",
    word: "Mobile AV and Dual Display Stands — Mobility Meets Strength",
    text: "Heckler Design products are built to serve the evolving needs of today’s hybrid organizations by offering exceptional structural integrity, modular adaptability, and aesthetic finesse — all backed by durable materials and purpose-driven engineering. Their stands and mounts support a wide range of display sizes and brands, enabling enterprises, educational institutions, and event venues to standardize on a hardware ecosystem that feels both premium and practical. More than just hardware, Heckler’s solutions help organizations maximize AV investment, simplify deployment, and create cohesive environments that support collaboration, communication, and engagement. With intuitive setup, stackable storage, adaptable configurations, and a focus on long-term reliability, Heckler makes it easier for teams to build professional spaces where technology enhances human interaction, not complicates it. ",
    img: "./images/brands/hackler-4.webp",
    // bg: "bg-soft-brown",
    reverse: true,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Heckler = () => {
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
          Heckler Design: Precision AV Hardware & Hybrid Workplace Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          {/* Newline Interactive is a global leader in touchscreen collaboration
          technology. Its products form a “comprehensive suite of audio-visual
          technology solutions designed to enhance collaboration and
          productivity”. Newline’s ecosystem is powered by innovative digital
          tools that transform any space-boardrooms, classrooms, conference
          calls and collaboration sessions-into dynamic, interactive
          environments. The result is a seamless, intuitive collaboration
          experience that sets Newline apart. */}
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
          Meeting Room Consoles{" "}
          <span className="gradient-text">iPad Mounts & AV Accessories</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          Heckler’s product suite extends beyond large displays into refined
          iPad stands, wall mounts, console enclosures, and AV accessories
          designed for hybrid meeting spaces and interactive environments. These
          include dedicated Zoom Rooms consoles, wall-mounted iPad enclosures,
          PoE power adapters, camera mounting shelves for monitor arms, and
          USB-C connectivity solutions — all crafted to work intuitively with
          modern collaboration platforms and third-party devices. Whether
          securing a scheduling tablet on a wall, powering devices with PoE
          adapters, or integrating camera mounts into a conference setup,
          Heckler’s accessory range emphasizes clean cable management, secure
          device mounting, and cohesive design language throughout the
          workplace.
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Heckler;

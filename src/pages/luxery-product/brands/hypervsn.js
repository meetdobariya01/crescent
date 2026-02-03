import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const features = [
  {
    title: "Transformative Visual Technology for Modern Spaces",
    // word: "Performance, redefined",
    text: "HYPERVSN is a European-manufactured (Ireland) holographic display platform that creates luminous 3D visuals which appear to float in mid-air without glasses or headsets, redefining how audiences experience digital content. These holographic systems use ultra-fine pixel pitch and high-brightness LED arrays to deliver ultra-realistic 2D and 3D visuals in both indoor and outdoor environments, making standard digital signage obsolete.",
    img: "./images/brands/hypervsn-1.jpg",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "SmartV Solo – Compact 3D Display Engineered for Engagement",
    word: "Portable Holography with Maximum Impact",
    text: "The SmartV Solo is HYPERVSN’s flagship compact display that brings stunning 3D and detailed 2D holographic content to life in retail windows, reception areas, event spaces, and showrooms. Available in two sizes - SmartV Solo M (≈22″ / 56 cm) and SmartV Solo L (≈30″ / 75 cm) - the Solo units support ultra-fine pixel pitch for high-definition content that appears to float effortlessly in space.",
    text2:
      "Key specifications and differentiators include ultra-fine pixel rendering, a wide and vivid color spectrum, interactive capabilities that allow real-time audience engagement, and exceptional brightness (up to ~3000 nits on larger models), enabling clear visibility in high-ambient light environments.",
    text3:
      "SmartV Solo is purpose-built for visual impact wherever space is premium but engagement is paramount. It integrates with the HYPERVSN Software Suite - including CMS, mobile app controls, and content creation tools - allowing real-time content updates, HDMI input support, and seamless management from desktop or mobile.",
    img: "./images/brands/hypervsn-2.png",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title:
      "SmartV Wall – Scalable Holographic Canvases for Large-Scale Displays",
    word: "Immersive Walls for Captivating Visual Narratives",
    text: "The SmartV Wall system extends holographic impact to large format environments by synchronizing multiple SmartV display modules into a unified, high-resolution holographic canvas. These scalable walls support immaculate 2D and 3D content, delivering immersive visual experiences ideal for flagship retail locations, exhibitions, corporate lobbies, and high-impact event stages.",
    text2:
      "Available in configurations such as SmartV Wall M and SmartV Wall L, this solution combines flawless image quality with modular flexibility, allowing walls to be designed for distance visibility, immersive walkthroughs, or creative spatial storytelling. Larger walls maintain high brightness standards and a wide color spectrum for vibrant, life-like visuals, while integrated content management ensures updates and scheduling can be handled with ease.",
    img: "./images/brands/hypervsn-3.jpg",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title:
      "Advanced Solutions: Interactive Catalogues & Human-Scale Experiences",
    word: "Beyond Screens — Interactivity and Human Connection",
    text: "HYPERVSN’s platform also includes specialized display systems that deepen audience interaction and narrative storytelling. The SmartV 3D Catalogue enables touch-free gesture interaction, allowing viewers to scroll through holographic product catalogues with intuitive movements. This solution increases engagement and retention, making product exploration a memorable experience.",
    text2:
      "Additional innovations include Holographic Human solutions - life-sized holographic figures that can represent brand ambassadors, showcase products, or deliver brand narratives in immersive form - and Digital Avatar experiences which use AI-enhanced interactions to create conversational holographic engagements. These options elevate traditional signage to outstanding experiential platforms that connect on emotional and cognitive levels.",
    img: "./images/brands/hypervsn-4.png",
    // bg: "bg-light-cream",
    reverse: true,
  },
  {
    title: "HYPERVSN Software and Ecosystem Differentiators",
    word: "Content Control with Creative Freedom",
    text: "HYPERVSN’s power lies not only in its hardware but also in its cloud-based software ecosystem. Its suite includes a robust content management system (CMS), desktop and mobile apps, and 3D Studio tools that allow brands to create, upload, schedule, and manage holographic content easily from anywhere. Unlike conventional displays that require static playlists or manual updates, this ecosystem automates updates, provides secure remote management, and supports real-time content interaction",
    text2:
      "Whether used to broadcast promotional messaging, product details, wayfinding visuals, or interactive brand narratives, the software ensures that every holographic display stays dynamic and relevant with minimal operational effort.",
    img: "./images/brands/hypervsn-5.jpg",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title:
      "Why HYPERVSN Matters: Next-Gen Engagement & ROI ",
    word: "Experience That Converts Attention into Action",
    text: "HYPERVSN’s holographic displays are more than eye-catching technology they fundamentally redefine audience engagement. By creating visuals that appear to float in physical space, the technology draws attention longer than traditional digital signage and drives higher message retention. Deployments across retail, hospitality, events, automotive, and public environments have demonstrated measurable boosts in foot traffic, engagement duration, and conversion rates compared to standard displays.",
    text2:
      "With modular scalability, advanced interactive features, and an intuitive software ecosystem, HYPERVSN turns existing spaces into immersive brand platforms that captivate, inform, and inspire — all while enabling organizations to manage visual communication more efficiently and creatively than ever before.",
    img: "./images/brands/hypervsn-6.png",
    // bg: "bg-light-cream",
    reverse: true,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Hypervsn = () => {
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
          HYPERVSN: Advanced 3D Holographic Display Solutions
        </motion.h2>

        {/* <motion.p
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
        </motion.p> */}
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
                  <h4>{item.word}</h4>
                  <p>{item.text}</p>
                  <p className="mt-3">{item.text2}</p>
                  <p className="mt-3">{item.text3}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* <div className=" py-5 text-center container">
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
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Hypervsn;

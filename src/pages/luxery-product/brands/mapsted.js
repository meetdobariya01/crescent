import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const features = [
  {
    title: "Mapsted Core Products & Platforms",
    word: "Indoor Mapping & Wayfinding Platform",
    text: "Mapsted’s interactive indoor mapping solution provides visually rich, highly detailed digital maps for large and complex facilities. These maps support multi-floor navigation, accessibility routing, points of interest, and dynamic updates, ensuring visitors can find destinations quickly and intuitively. Designed to integrate seamlessly into mobile apps, kiosks, and digital signage, Mapsted Maps transform physical spaces into navigable digital experiences that reduce confusion and improve visitor satisfaction.",
    img: "./images/brands/mapsted-1.png",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Navigation SDKs & APIs",
    word: "",
    text: "Mapsted offers powerful SDKs and APIs that allow developers and enterprises to embed precise indoor navigation directly into existing applications. These SDKs support real-time blue-dot positioning, turn-by-turn directions, multi-destination routing, and location sharing, enabling customized navigation experiences tailored to specific environments. Because the platform is beacon-free, organizations avoid ongoing maintenance while maintaining consistent accuracy across locations.",
    img: "./images/brands/mapsted-2.png",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title: "Location Intelligence & Engagement Solutions",
    word: "Analytics & Space Intelligence Suite",
    text: "Beyond navigation, Mapsted provides a robust location analytics platform that converts movement data into actionable insights. Organizations gain visibility into foot traffic flows, dwell times, heatmaps, and zone engagement across facilities. These insights empower operators to optimize layouts, staffing, safety planning, and asset utilization, while leadership teams gain data-driven clarity into how spaces are actually used. ",
    img: "./images/brands/mapsted-3.png",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Location-Based Marketing & Engagement",
    word: "",
    text: "Mapsted’s engagement tools enable context-aware communication through geofencing and proximity-based interactions. Retailers, venues, and enterprises can trigger personalized notifications, promotions, or informational messages based on a user’s precise location within a facility. This capability enhances customer engagement, increases conversions, and enables smarter, data-driven experiences without being intrusive.",
    img: "./images/brands/mapsted-4.png",
    // bg: "bg-light-cream",
    reverse: true,
  },
  {
    title: "Industries & Use-Case Applications",
    word: "Built for Scale Across Industries",
    text: "Mapsted is designed for organizations that manage large, complex, or high-traffic environments. It is widely deployed across shopping malls, airports and transportation hubs, hospitals and healthcare campuses, universities, corporate offices, stadiums, museums, exhibitions, and hospitality venues. In airports, it helps passengers navigate terminals efficiently. In hospitals, it reduces stress by guiding patients and visitors accurately. In retail environments, it enhances discovery while providing valuable analytics to operators.",
    img: "./images/brands/mapsted-5.png",
    // bg: "bg-light-cream",
    reverse: false,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Mapsted = () => {
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
          Mapsted: Precision Indoor Navigation & Location Intelligence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          Mapsted is a global leader in indoor and outdoor location
          intelligence, delivering highly accurate, infrastructure-free
          navigation for complex physical environments. Built on patented
          beacon-free technology, Mapsted enables precise positioning, blue-dot
          wayfinding, and real-time navigation directly on standard
          smartphones—without requiring Wi-Fi triangulation, Bluetooth beacons,
          or additional hardware. This dramatically reduces deployment costs
          while delivering enterprise-grade accuracy across multi-floor and
          large-scale venues.
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
                  <h4>{item.word}</h4>
                  <p>{item.text}</p>
                  {/* <p className="mt-3">{item.text2}</p> */}
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
          Why Mapsted Matters
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          Mapsted delivers more than directions—it creates intelligent spaces.
          By eliminating infrastructure dependencies and combining navigation,
          analytics, and engagement into a single platform, Mapsted lowers total
          cost of ownership while delivering measurable improvements in visitor
          experience and operational efficiency. Users save time and
          frustration, organizations gain actionable insight, and physical
          spaces become easier to navigate, manage, and monetize.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          With global deployments spanning billions of square feet and
          continuous innovation in positioning algorithms and machine learning,
          Mapsted enables organizations to future-proof their environments. It
          transforms navigation from a utility into a strategic
          advantage—connecting people to places with precision, confidence, and
          clarity.F
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mapsted;

import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const features = [
  {
    title: "Intelligent Content, Effortlessly Delivered",
    word: "Performance, redefined",
    text: (
      <>
        Seenspire is an automated, content-driven digital signage solution
        designed to keep screens visually engaging without manual effort. The
        platform intelligently aggregates company communications, social media,
        workplace applications, and professionally licensed infotainment—such as
        news, weather, sports, and trivia—into a continuously updated visual
        stream. Through a simple web or mobile interface, administrators connect
        displays, select content sources, and Seenspire instantly generates
        polished, on-brand layouts. This set-and-forget approach replaces manual
        slide creation with automation, ensuring screens remain relevant,
        dynamic, and professionally presented at all times.
      </>
    ),
    img: "./images/brands/seenspire-1.jpeg",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "A Unified Platform, Sold as a Service",
    word: "Incredibly capable. Remarkably versatile",
    text: "Seenspire is offered as a flexible, per-screen subscription with scalable pricing, making it suitable for organizations of any size. Customers can choose from infotainment-focused plans that provide access to hundreds of licensed content feeds, integration plans that connect workplace tools and social platforms, or an all-in-one package that unlocks the full ecosystem. Every subscription includes unlimited users, role-based permissions, and complete branding control, allowing organizations to maintain consistency across all displays. With one-click publishing, mobile management, and built-in onboarding and support, Seenspire eliminates the need for design expertise or specialized training.",
    img: "./images/brands/seenspire-2.jpeg",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title: "Built for Every Environment and Every Team",
    word: "Designed to work. Built to protect.",
    text: "Seenspire is designed for universal adoption across industries and roles. IT and facilities teams can deploy and manage screens effortlessly, while HR, marketing, and communications teams can publish content directly from tools they already use, such as Microsoft Teams, Slack, or social media platforms. The platform is widely used across corporate offices, retail environments, hospitality spaces, educational campuses, healthcare facilities, and public venues. From executive headquarters to storefront displays, Seenspire enables organizations to communicate more effectively without adding operational complexity. ",
    text2:
      "Touch performance is exceptionally smooth: infrared or capacitive sensors plus optical bonding deliver lag-free, paper-like writing and crystal-clear 4K images from any angle. Audio and video are top-quality too - most displays have an 8-mic array with echo cancellation and powerful speakers (even subwoofers in the higher-end models) for rich, room-filling sound. An AI-enabled pan/tilt camera option keeps presenters centered in frame.  All screens feature sleek, minimalist designs (many with anti-glare, low-blue-light and antimicrobial glass coatings) that look great in any modern workspace.",
    img: "./images/brands/seenspire-3.png",
    // bg: "bg-light-cream",
    reverse: false,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const Seenspire = () => {
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
          Seenspire: Automated Digital Signage Content Solution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          Seenspire is a content-driven digital signage platform that automates
          the creation and updating of screen content. It pulls together company
          messages, social media, workplace app updates, and licensed
          “infotainment” (news, weather, sports, trivia, etc.) into one dynamic
          stream. In practice, administrators connect displays via a simple web
          or mobile app, select desired content feeds, and Seenspire’s engine
          instantly formats polished slides for each screen. This
          “set-and-forget” approach delivers always-fresh, on-brand visuals
          without manual design effort. As Seenspire explains, it provides a
          “content-driven digital signage solution with unlimited access to an
          abundant library of automated content, available instantly”. In other
          words, Seenspire replaces tedious slide creation with intelligent
          automation and professional layouts, keeping displays relevant while
          saving staff hours of work.
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
          More Impact, <span className="gradient-text"> Less Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle funnel-sans"
        >
          The true value of Seenspire lies in its ability to transform
          underutilized screens into powerful communication assets. By
          automating content creation, licensing, and formatting, it saves teams
          significant time while ensuring displays never go stale. Integrations
          with platforms like Zoom Rooms and Barco ClickShare allow meeting room
          screens to double as branded signage when not in use, maximizing
          existing AV investments. The result is higher engagement, stronger
          messaging, and consistently fresh visuals—delivered with minimal
          effort. Seenspire turns digital signage from a maintenance burden into
          a strategic, high-impact communication tool.
        </motion.p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Seenspire;

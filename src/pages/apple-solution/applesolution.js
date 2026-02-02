import React from "react";
import { motion } from "framer-motion";
import "./applesolution.css";
import { Button } from "react-bootstrap";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const features = [
  {
    title: "Mac",
    word: "Performance, redefined",
    text: "Mac is designed for professionals who value performance, stability, and precision. With Apple silicon at its core, Mac delivers remarkable speed, efficiency, and responsiveness-whether you’re editing, developing, designing, or managing complex workflows. From ultra-portable laptops to high-performance desktops, Mac adapts to how you work. Crescent World helps you choose the right Mac, tailor it to your needs, and ensure it integrates seamlessly into your environment from day one.",
    img: "./images/products/mac.jpeg",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "iPad",
    word: "Incredibly capable. Remarkably versatile",
    text: "iPad offers a unique balance of simplicity and capability. It’s powerful enough to replace traditional computers, yet intuitive enough to feel natural from the first touch. With support for Apple Pencil and keyboard accessories, iPad becomes a canvas for creativity, a tool for productivity, and a platform for learning. Crescent World delivers iPad solutions that fit effortlessly into classrooms, businesses, healthcare, and creative spaces—designed around how people actually work.",
    img: "./images/products/ipad.jpeg",
    // bg: "bg-soft-brown",
    reverse: true,
  },
  {
    title: "iPhone",
    word: "Designed to work. Built to protect.",
    text: "iPhone is the center of everyday communication and productivity. It combines advanced performance with industry-leading privacy and security, ensuring your data stays protected while you stay connected. Whether used individually or at scale across teams and organizations, iPhone offers reliability you can depend on. Crescent World ensures every iPhone is configured, secured, and optimized to deliver a smooth, confident experience-wherever life or work takes you",
    img: "/images/products/iphone.jpeg",
    // bg: "bg-light-cream",
    reverse: false,
  },
  {
    title: "Apple Watch",
    word: "A new dimension of experience",
    text: "Apple Watch brings meaningful insights and connectivity to your wrist. It encourages healthier habits, keeps you informed, and helps you stay connected without distraction. From fitness and health tracking to productivity and safety features, Apple Watch integrates seamlessly with iPhone and the broader Apple ecosystem. Crescent World helps individuals and organizations unlock its full potential-balancing performance, awareness, and well-being.",
    img: "/images/products/watch.jpeg",
    // bg: "bg-dark-brown",
    reverse: true,
  },
  {
    title: "Apple Vision Pro",
    word: "A new dimension of experience",
    text: "Apple Vision Pro represents the future of personal and professional computing. By blending digital content with the real world, it opens new possibilities for design, collaboration, training, and immersive experiences. Crescent World works with forward-looking clients to explore meaningful use cases for spatial computing-helping them adopt Vision Pro with clarity, purpose, and confidence.",
    img: "/images/products/vision.jpeg",
    // bg: "bg-dark-brown",
    reverse: false,
  },
  {
    title: "AirPods",
    word: "Pure sound. Effortlessly.",
    text: "AirPods are designed to deliver exceptional audio with effortless simplicity. Intelligent noise cancellation, spatial audio, and seamless device switching create an experience that feels natural and immersive. Whether for calls, meetings, music, or moments of focus, AirPods adapt instantly. Crescent World offers the complete AirPods lineup to complement both personal lifestyles and professional environment",
    img: "/images/products/airpodes.jpeg",
    // bg: "bg-dark-brown",
    reverse: true,
  },
  {
    title: "TV & Home",
    word: "Entertainment. Simplified.",
    text: "Apple TV and Apple Home products bring entertainment, control, and comfort together in one seamless experience. From cinematic viewing to smart automation, everything works in harmony. Crescent World helps design connected living and working spaces-integrating Apple TV, audio, displays and home controls to create environments that are intuitive, elegant, and effortless.",
    img: "/images/products/tv.jpeg",
    // bg: "bg-dark-brown",
    reverse: false,
  },
  {
    title: "Accessories",
    word: "Thoughtfully designed. Perfectly matched.",
    text: "Apple accessories are created with the same attention to detail as the devices themselves. From keyboards and trackpads to Apple Pencil, cases, cables, and adapters, each accessory enhances how you work and interact with your devices. Crescent World helps you select the right accessories to ensure your Apple ecosystem feels complete, balanced, and perfectly matched to your needs.",
    img: "/images/products/accessories.jpeg",
    // bg: "bg-dark-brown",
    reverse: true,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Applesolution = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      <div className="mt-5 pt-5 text-center container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="whywork-title sf-pro-font"
        >
          Apple Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle sf-medium-font"
        >
          At Crescent World, Apple is not just a product line-it’s an ecosystem,
          thoughtfully delivered. We help individuals, businesses, and
          institutions experience Apple at its best: devices that work
          seamlessly together, software that feels intuitive, and technology
          that quietly elevates everyday life. From consultation to
          configuration and long-term support, every Apple solution we deliver
          is designed to feel effortless, refined, and complete.
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
                  <h3 className="sf-pro-font">{item.title}</h3>
                  <h4 className="gradient-text">{item.word}</h4>
                  <p>{item.text}</p>
                  <button type="button" class="btn btn-outline-dark mt-3">
                    Buy Now
                  </button>
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
          The Crescent World Difference
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="whywork-subtitle sf-medium-font"
        >
          We believe great technology should feel invisible. Every Apple
          solution we deliver is guided by simplicity, precision, and care—so
          you can focus on what matters most.
        </motion.p>
      </div>
      {/* Footer could go here if needed */}
      <Footer />
    </div>
  );
};

export default Applesolution;

import React from "react";
import { motion } from "framer-motion";
import "./solution.css";

const sections = [
  {
    title: "Apple Solutions",
    text: "As an Apple Solutions Expert and Authorized Apple Specialist, Crescent World empowers organizations and individuals to seamlessly deploy Apple devices for work and education. We help set up, configure, and manage every Apple product - from iMacs, MacBooks and iPads to iPhones, Apple TVs and peripherals - across businesses, schools and government. Our Apple-trained team provides enterprise-grade support and training, ensuring devices integrate securely into your IT ecosystem. The result is a productive, user-friendly environment where Apple’s hardware and software work together flawlessly.",
    img: "./images/apple.jpeg",
    bg: "light",
  },
  {
    title: "Enterprise IT",
    text: "Crescent World offers comprehensive enterprise IT solutions that modernize your digital infrastructure. We deliver high-performance servers, networking, storage and cloud platforms, along with cybersecurity and IT management tools. Our experts build scalable, future-ready systems (including virtualization and hyperconverged solutions) that grow with your business and ensure high availability. With an emphasis on innovation and robustness, our services transform data centers and networks for peak performance. Clients benefit from resilient, enterprise-grade architecture and seamless integration across all IT layers.",
    img: "./images/enterprise.jpeg",
    bg: "dark",
  },
  {
    title: "Convergence",
    text: "Our Convergence solutions create intelligent, secure environments through advanced automation and analytics. We integrate AI-powered surveillance cameras, smart access control (biometric and RFID systems), environmental sensors and home/building automation into unified platforms. Whether it’s AI-based face or object recognition, license-plate readers or smart climate monitoring, Crescent’s systems proactively protect spaces and streamline operations. We also deliver sophisticated audio-visual (AV) and public-addressing systems to enhance communication. By uniting these technologies, Crescent enables fully connected, AI-driven security and automation that elevate convenience and safety.",
    img: "./images/convergence.jpeg",
    bg: "light",
  },
    {
    title: "Immersive Technology Solutions",
    text: "At Crescent World, our Immersive Technology solutions blend advanced hardware, intelligent software, and sensory engineering to create unforgettable digital experiences. Designed for enterprises, institutions, and experience-driven venues, our solutions go beyond visuals, engaging sight, sound, motion, and interaction.From immersive learning environments to experiential brand showcases, we deliver end-to-end solutions tailored to your vision.Immersive projection and LED environments with interactive walls, XR-ready systems, sensory motion effects, synchronized control, and advanced audio-visual engines.",
    img: "./images/Immersive.jpeg",
    bg: "light",
  },
  {
    title: "Luxury Electronics",
    text: "Crescent World curates a range of premium lifestyle electronics from over 135 luxury brands. We blend cutting-edge technology with elegant design, offering products that enhance everyday living. Our collection includes high-fidelity audio systems and wireless speakers, smart wearable devices (like rings and watches), wellness tech and designer home appliances. From immersive sound systems and smartwatches to wellness gadgets and high-end appliances, each gadget delivers performance and style. Customers enjoy innovative, beautifully designed electronics - from premium smartwatches and headphones to advanced smart rings and home comforts - that redefine the luxury tech experience.",
    img: "./images/luxury.jpeg",
    bg: "dark",
  },
];
const Solution = () => {
  return (
    <div>
      <section className="story-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="whywork-title text-center mb-5 sf-pro-font"
          >
           <span className="me-2 gradient-text">Crescent World</span>- Innovative Technology Solutions
          </motion.h2>
          {sections.map((item, index) => (
            <div
              className={`row align-items-center gap-5 story-row ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              key={index}
            >
              {/* Image */}
              <div className="col-md-5 p-0">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="story-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Content */}
              <div className={`col-md-6 p-3`}>
                <motion.div
                  // className={`story-content ${
                  //   item.bg === "dark" ? "dark" : "light"
                  // }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="sf-pro-font gradient-text ">{item.title}</h3>
                  <p className="funnel-sans">{item.text}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solution;
import React from "react";
import { motion } from "framer-motion";
import "./video.css";

const Video = () => {
  return (
    <div>
      <section className="our-story-section">
        <div className="container">
          {/* Heading */}
          <motion.h2
            className="story-title"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Designed by Apple, Delivered by <span className="gradient-text">Crescent World.</span>
          </motion.h2>

          {/* Description */}
          {/* <motion.p
            className="story-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            What started as a simple love for rich cocoa and timeless flavors
            soon turned into a journey of creating chocolates that speak to the
            soul. Chocolate should be more than a treat — it should be an
            experience worth savoring.
          </motion.p> */}

          {/* Media Card */}
          <motion.div
            className="story-media"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.video
              src="./images/apple-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="story-video"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Video;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./aboutus.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* header */}
      <Header />

      {/* HERO */}
      <motion.section
        className="about-hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <h1 className="hero-title">
                Driving Digital Growth for Modern Businesses
              </h1>
              <p className="hero-text">
                We are a new-age IT consulting startup helping businesses
                transform ideas into scalable, secure, and high-performance
                digital solutions.
              </p>
              <Button className="hero-btn">Start Your Journey</Button>
            </Col>

            <Col lg={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="IT Consulting"
                className="img-fluid hero-img"
              />
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* JOURNEY */}
      {/* STARTUP JOURNEY – STORY DRIVEN */}
      <section className="journey-v2">
        <Container>
          <Row className="align-items-center gy-5">
            {/* LEFT – FOUNDER IMAGE */}
            <Col lg={5}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="founder-img-wrapper"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                  alt="Founder Journey"
                  className="img-fluid founder-img"
                />
                <div className="founder-badge">Founded with vision 🚀</div>
              </motion.div>
            </Col>

            {/* RIGHT – JOURNEY CONTENT */}
            <Col lg={7}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                <motion.h2 variants={fadeUp} className="section-title">
                  Our Startup Journey
                </motion.h2>

                <motion.p variants={fadeUp} className="journey-intro">
                  Our journey started with one belief — technology should solve
                  real business problems, not complicate them.
                </motion.p>

                {/* TIMELINE ITEMS */}
                {[
                  {
                    year: "2021",
                    title: "The Idea Was Born",
                    desc: "Identified the gap between business goals and technology execution.",
                  },
                  {
                    year: "2022",
                    title: "First Clients & Trust",
                    desc: "Delivered scalable solutions for startups and SMEs.",
                  },
                  {
                    year: "2023",
                    title: "Growth & Expansion",
                    desc: "Expanded services into cloud, DevOps, and UI/UX optimization.",
                  },
                  {
                    year: "Today",
                    title: "Trusted IT Consulting Partner",
                    desc: "Helping businesses scale with confidence and clarity.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="journey-timeline"
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-year">{item.year}</span>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="founders-section">
        <Container>
          {/* SECTION HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h2 className="section-title text-center" variants={fadeUp}>
              Meet the Founders
            </motion.h2>

            <motion.p
              className="section-subtitle text-center mb-5"
              variants={fadeUp}
            >
              Leaders who combine business clarity with deep technical expertise
            </motion.p>
          </motion.div>

          {/* FOUNDER 1 – IMAGE LEFT */}
          <Row className="align-items-center gy-5 mb-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="founder-image-wrapper"
              >
                <img
                  src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                  alt="Founder CEO"
                  className="founder-image"
                />
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="founder-text"
              >
                <h4>Alex Morgan</h4>
                <span className="founder-role">Co-Founder & CEO</span>
                <p>
                  Alex shapes the company’s vision and growth strategy. With
                  hands-on experience in startups and enterprise consulting,
                  Alex ensures technology decisions always support real business
                  goals.
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* FOUNDER 2 – IMAGE RIGHT */}
          <Row className="align-items-center gy-5 flex-lg-row-reverse">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="founder-image-wrapper"
              >
                <img
                  src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9"
                  alt="Founder CTO"
                  className="founder-image"
                />
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="founder-text"
              >
                <h4>Jordan Lee</h4>
                <span className="founder-role">Co-Founder & CTO</span>
                <p>
                  Jordan leads the technical direction of the company. From
                  cloud architecture to performance optimization, Jordan ensures
                  every solution is scalable, secure, and future-ready.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* LEADERSHIP */}
      <section className="leader-section">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Leadership"
                className="img-fluid leader-img"
              />
            </Col>
            <Col lg={6}>
              <h2 className="section-title">Business-Led Technology</h2>
              <p className="section-text">
                We understand startups, enterprises, timelines, budgets,
                scalability, and real-world business pressure.
              </p>
              <p className="section-text">
                Our solutions are designed to grow with your business — not slow
                it down.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* founder viedo */}

      <section className="video-section">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title">A Message from Our Founders</h2>
                <p>
                  We started this company to help businesses grow with the right
                  technology decisions, not just software.
                </p>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="video-wrapper"
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Founder Message"
                  allowFullScreen
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 className="section-title text-center" variants={fadeUp}>
              What We Do
            </motion.h2>

            <Row className="gy-4 mt-4">
              {[
                "IT Consulting",
                "Web & App Development",
                "Cloud & DevOps",
                "UI/UX & Performance",
              ].map((service, i) => (
                <Col md={6} lg={3} key={i}>
                  <motion.div variants={fadeUp}>
                    <Card className="service-card">
                      <Card.Body>
                        <h5>{service}</h5>
                        <p>
                          Scalable, secure, and future-ready technology
                          solutions.
                        </p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* thinking */}
      <section className="thinking-section">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h2 className="section-title text-center" variants={fadeUp}>
              How We Think
            </motion.h2>

            <motion.p
              className="section-subtitle text-center mb-5"
              variants={fadeUp}
            >
              Our consulting approach is driven by clarity, speed, and long-term
              impact
            </motion.p>

            <Row className="gy-4">
              {[
                {
                  title: "Business First",
                  desc: "We understand your business model before we write a single line of code.",
                },
                {
                  title: "Scalable by Design",
                  desc: "Every solution is built to grow — from startup MVPs to enterprise systems.",
                },
                {
                  title: "Technology with Purpose",
                  desc: "We choose tools based on outcomes, not trends.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -12 }}
                    className="thinking-card"
                  >
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <Container>
          <h2>Let’s Build Something Impactful</h2>
          <p>
            Partner with an IT consulting team that understands business,
            growth, and scale.
          </p>
          <Button className="cta-btn">Contact Us</Button>
        </Container>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}

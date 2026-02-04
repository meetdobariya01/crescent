import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  BsPeople,
  BsLayers,
  BsCodeSlash,
  BsCalculator,
  BsShieldLock,
} from "react-icons/bs";
import "./convergence.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const services = [
  {
    title: "Staffing & Recruitment",
    desc: "We connect top-tier talent with leading employers, ensuring every hire strengthens your team and fuels company success.",
    icon: <BsPeople />,
  },
  {
    title: "Medical Billing",
    desc: "Streamline your healthcare revenue cycle with precise billing, faster reimbursements, and full regulatory compliance.",
    icon: <BsLayers />,
  },
  {
    title: "Software Development",
    desc: "From concept to code, we build scalable, secure, and high-performance software solutions.",
    icon: <BsCodeSlash />,
  },
  {
    title: "Accounting & Book Keeping",
    desc: "Accurate, transparent, and timely financial management designed to simplify compliance.",
    icon: <BsCalculator />,
  },
  {
    title: "Debt Collection",
    desc: "Recover outstanding payments professionally while protecting your brand and client relationships.",
    icon: <BsShieldLock />,
  },
];

const Convergence = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* Page Header */}
      <Header />

      <section className="convergence-section">
        <Container>
          <Row className="g-4">
            {services.map((item, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className={`service-card ${active === index ? "active" : ""}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActive(index)}
                >
                  <div className="icon-box">{item.icon}</div>

                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>

                  
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer Spacer */}
      <Footer />
    </div>
  );
};

export default Convergence;

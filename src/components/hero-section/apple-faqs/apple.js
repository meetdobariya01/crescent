import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./apple.css";

const data = [
  {
    title: "Simplicity at Work",
    content:
      "From powerful devices to seamless apps and services, Apple provides everything you need to run, manage, and secure your business effortlessly. Experience a unified ecosystem where speed, built-in security, and AI-driven productivity work together to help your team fly through demanding tasks.",
    image: "/images/img1.jpg",
  },
  {
    title: "Apps that enhance the way you work",
    content:
      "With over 235,000 apps for employees at work, they can tackle almost everything from daily tasks to boosting customer experiences or apps that make operations efficient. Not just that, you can also build custom apps tailored to your specific needs.",
    image: "/images/img2.jpg",
  },
  {
    title: "One manager for your entire organization",
    content:
      "Apple Business Manager helps you enrol, deploy & manage Apple devices seamlessly across your organization. It also helps you easily buy & distribute apps in bulk to employees, whether with just one team or the whole organization.",
    image: "/images/img3.jpg",
  },
  {
    title: "Apple Employee Choice",
    content: "If you give employees the power to work on an Apple device of their choice, it inspires them to bring their best to work every day. Apple has simplified the process of giving employees the device of their choice while simplifying IT management and maintaining corporate standards.",
    image: "/images/img4.jpg",
  },
  {
    title: "Brilliant Professional Services",
    content: "Expert solutions to scale your business efficiently.",
    image: "/images/img5.jpg",
  },
];

const Apple = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div>
      <Container fluid className="faq-section py-5 mt-5">
        <Container>
          <Row className="align-items-center">
            {/* LEFT IMAGE */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="image-wrapper">
                <img
                  src={data[activeIndex || 0].image}
                  alt="dynamic"
                  className="img-fluid main-image"
                />
              </div>
            </Col>

            {/* RIGHT CONTENT */}
            <Col lg={6}>
              <h3 className="mb-4 fw-bold">
                Unlock the true potential of your business with an{" "}
                <span className="gradient-text">
                  Apple Premium Business Partner
                </span>
              </h3>

              {data.map((item, index) => (
                <Card
                  key={index}
                  className={`faq-card-apple mb-3 ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggle(index)}
                >
                  <Card.Body className="p-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">{item.title}</h6>
                      <span className="arrow">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    <div
                      className={`faq-content ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <p className="text-start">{item.content}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Apple;

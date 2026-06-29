import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `Hello, My Name is ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919824018555?text=${message}`, "_blank");
  };
  return (
    <div>
      <section className="py-5 bg-light funnel-sans">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                <Row className="g-0">
                  {/* Left Side */}
                  <Col
                    md={5}
                    className="bg-dark text-white p-5 d-flex flex-column justify-content-center"
                  >
                    <h2 className="fw-bold mb-4">Let's Connect</h2>
                    <p className="mb-4">
                      Have questions or need help? Reach out to us anytime.
                    </p>

                    <div className="mb-3 d-flex align-items-center gap-3">
                      <FaPhoneAlt />
                      <a
                        href="tel:+919824018555"
                        className="text-decoration-none text-white"
                      >
                        +91 98240 18555
                      </a>
                    </div>

                    <div className="mb-3 d-flex align-items-center gap-3">
                      <FaEnvelope />
                      <a
                        href="mailto:info@crescentworld.com"
                        className="text-decoration-none text-white"
                      >
                        info@crescentworld.com
                      </a>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <FaMapMarkerAlt />
                      <a
                        href="https://share.google/4BCtCQWbah7IkdXCf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-white"
                      >
                        Ahmedabad, Gujarat, India
                      </a>
                    </div>
                  </Col>

                  {/* Right Side */}
                  <Col md={7} className="p-5 bg-white">
                    <h3 className="fw-bold mb-4">Contact Us</h3>

                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Your Phone"
                          name="phone"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Your Message"
                          name="message"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <div className="d-flex gap-3">
                        <Button variant="dark" className="px-4">
                          Send Email
                        </Button>

                        <Button
                          variant="success"
                          className="px-4 d-flex align-items-center gap-2"
                          onClick={handleWhatsApp}
                        >
                          <FaWhatsapp />
                          WhatsApp
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;

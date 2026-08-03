import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5190/api';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
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
                      <a href="tel:+919824018555" className="text-decoration-none text-white">
                        +91 98240 18555
                      </a>
                    </div>

                    <div className="mb-3 d-flex align-items-center gap-3">
                      <FaEnvelope />
                      <a href="mailto:info@crescentworld.com" className="text-decoration-none text-white">
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

                  <Col md={7} className="p-5 bg-white">
                    <h3 className="fw-bold mb-4">Contact Us</h3>

                    {success && (
                      <Alert variant="success" className="mb-3">
                        <FaCheckCircle className="me-2" />
                        Message sent successfully! We'll get back to you soon.
                      </Alert>
                    )}

                    {error && (
                      <Alert variant="danger" className="mb-3">
                        {error}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Your Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <div className="d-flex gap-3">
                        <Button 
                          variant="dark" 
                          className="px-4"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                              />
                              Sending...
                            </>
                          ) : (
                            'Submit'
                          )}
                        </Button>

                        <Button
                          variant="success"
                          className="px-4 d-flex align-items-center gap-2"
                          onClick={handleWhatsApp}
                          disabled={loading}
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
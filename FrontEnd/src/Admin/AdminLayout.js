import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { FaEnvelope, FaHome } from 'react-icons/fa';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Navbar bg="dark" variant="dark" expand="lg" className="admin-header">
        <Container fluid>
          <Navbar.Brand as={Link} to="/admin">
            <FaEnvelope className="me-2" />
            Admin Panel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="admin-navbar" />
          <Navbar.Collapse id="admin-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/admin/contacts">
                <FaEnvelope className="me-1" />
                Contacts
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <FaHome className="me-1" />
                Back to Site
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="admin-content">
        <Outlet />
      </Container>
    </div>
  );
};

export default AdminLayout;
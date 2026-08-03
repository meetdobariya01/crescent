import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import "./header.css";

const navItems = [
  {
    name: "About Us",
    path: "/aboutUs",
  },
  {
    name: "Apple",
    path: "/apple-solution",
  },
  {
    name: "Enterprise IT",
    dropdown: [
      { name: "GCC", path: "/GCC" },
      { name: "OT Security", path: "/OTSecurity" },
      { name: "Computers", path: "/computers" },
      { name: "Data Center", path: "/datacenter" },
      { name: "Printers", path: "/printers" },
      {
        name: "Video Conferencing",
        path: "/videoandconferencing",
      },
      {
        name: "Storage",
        path: "/storage",
      },
      {
        name: "Servers",
        path: "/servers",
      },
    ],
  },
  {
    name: "Digital Solution",
    dropdown: [
      { name: "Convergence", path: "/convergence" },
      { name: "Immersive Tech", path: "/immresive" },
      { name: "Partners", path: "/luxury-products" },
      { name: "Saas", path: "/software" },
    ],
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        expanded={menuOpen}
        className={`premium-navbar ${scrolled ? "navbar-scroll" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img src="./images/logo.png" className="logo-img" alt="Logo" />
          </Navbar.Brand>

          <button
            className={`premium-toggler ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <Navbar.Collapse>
            <Nav className="mx-auto premium-nav">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                >
                  {!item.dropdown ? (
                    <NavLink
                      className="nav-link"
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div
                      className="premium-dropdown"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="dropdown-btn"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index ? null : index,
                          )
                        }
                      >
                        {item.name}

                        {activeDropdown === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>

                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.25 }}
                            className="dropdown-menu-custom"
                          >
                            {item.dropdown.map((sub, i) => (
                              <NavLink
                                key={i}
                                className="dropdown-link"
                                to={sub.path}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                              >
                                {sub.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              ))}
            </Nav>

            <motion.div
              className="social-icons-header"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                href="https://www.instagram.com/crescent_world/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                href="https://x.com/Crescent_Mac"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
                href="https://www.linkedin.com/company/crescent-electronics-pvt.-ltd./"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

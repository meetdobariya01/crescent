import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar navbar-expand-lg premium-navbar fixed-top"
    >
      <div className="container-fluid nav-wrapper">
        {/* Logo */}
        <a className="navbar-brand premium-logo" href="/">
          <img
            src="./images/logo.png"
            alt="Crescent Logo"
            className="logo-img"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler premium-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#premiumNav"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="premiumNav">
          <ul className="navbar-nav mx-auto premium-nav funnel-sans">
            {[
              { name: "About Us", path: "/aboutUs" },
              { name: "Apple", path: "/apple-solution" },
              {
                name: "Enterprise IT",
                path: "#",
                dropdown: [
                  {
                    name: "GCC",
                    path: "/GCC",
                  },
                  {
                    name: "OTSecurity",
                    path: "/OTSecurity",
                  },
                  {
                    name: "Computers",
                    path: "/computers",
                  },
                   {
                    name: "Data Center",
                    path: "/datacenter",
                  },

                  {
                    name: "Printers & Supplies",
                    path: "/printers",
                  },
                  {
                    name: "Video Conferencing",
                    path: "/videoandconferencing",
                  },
                  {
                    name: "Storage & Hard Drives",
                    path: "/storage",
                  },
                  {
                    name: "Servers & Server Management",
                    path: "/servers",
                  },
                 
                ],
              },
              { name: "Convergence", path: "/convergence" },
              { name: "Immersive Tech", path: "/immresive" },
              { name: "Partners", path: "/luxury-products" },
              { name: "SaaS", path: "/software" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => {
                    const isEnterpriseActive =
                      item.name === "Enterprise IT" &&
                      window.location.pathname.startsWith("/enterpriseit");

                    return isActive || isEnterpriseActive
                      ? "nav-link active"
                      : "nav-link";
                  }}
                >
                  {item.name}
                </NavLink>

                {item.dropdown && (
                  <ul className="dropdown-menu custom-dropdown">
                    {item.dropdown.map((subItem, idx) => (
                      <li key={idx}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            isActive
                              ? "dropdown-item active-dropdown"
                              : "dropdown-item"
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="premium-social d-flex">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/crescent_world/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://x.com/Crescent_Mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/company/crescent-electronics-pvt.-ltd./?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;

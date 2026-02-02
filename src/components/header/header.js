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
      <div className="container">
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
          <ul className="navbar-nav mx-auto premium-nav">
            {[
              { name: "Home", path: "/" },
              { name: "Apple Solutions & Services", path: "/apple-solution" },
              { name: "Luxury Electronics & Lifestyle", path: "/services" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="nav-item"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {item.name}
                </NavLink>
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

            {/* <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </motion.a> */}

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

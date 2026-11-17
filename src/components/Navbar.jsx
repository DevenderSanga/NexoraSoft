
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Menu,
  X,
  Sun,
  Moon,
  Languages,
  ChevronDown,
  Layers3,
  Home,
  Package,
  BriefcaseBusiness,
  Sparkles,
  CreditCard,
  Plug,
  BookOpen,
  ArrowUpRight,
  Mail ,
} from "lucide-react";

import "./Navbar.css";

function Navbar({ theme, setTheme, direction, setDirection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Products", href: "/products", icon: Package },
    { name: "Solutions", href: "/solutions", icon: BriefcaseBusiness },
    { name: "Features", href: "/features", icon: Sparkles },
    { name: "Pricing", href: "/pricing", icon: CreditCard },
    { name: "Integrations", href: "/integrations", icon: Plug },
    {name: "Contact",href: "/contact",icon: Mail,}
  ];

  const closeMenus = () => {
    setMenuOpen(false);
    setResourcesOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleDirection = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenus}>
          <span className="logo-icon">
            <Layers3 size={24} />
          </span>

          <span className="logo-text">
            Nexora<span>Soft</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
                onClick={closeMenus}
              >
                {link.name}
              </NavLink>
            );
          })}

          {/* RESOURCES DROPDOWN */}
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              Resources

              <ChevronDown
                size={15}
                className={resourcesOpen ? "rotate" : ""}
              />
            </button>

            {resourcesOpen && (
              <div className="dropdown-menu">

                <NavLink
                  to="/case-studies"
                  onClick={closeMenus}
                >
                  <BriefcaseBusiness size={17} />
                  Case Studies
                </NavLink>

                <NavLink
                  to="/blog"
                  onClick={closeMenus}
                >
                  <BookOpen size={17} />
                  Blog & Resources
                </NavLink>

                <NavLink
                  to="/faq"
                  onClick={closeMenus}
                >
                  <Sparkles size={17} />
                  FAQs
                </NavLink>

              </div>
            )}
          </div>

          {/* MOBILE CONTACT */}
          <NavLink
            to="/contact"
            className="nav-link mobile-contact"
            onClick={closeMenus}
          >
            Contact
          </NavLink>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          {/* THEME TOGGLE */}
          <button
            className="nav-icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={19} />
            ) : (
              <Sun size={19} />
            )}
          </button>

          {/* DIRECTION TOGGLE */}
          <button
            className="nav-icon-btn direction-btn"
            onClick={toggleDirection}
            aria-label="Toggle text direction"
            title="Toggle text direction"
          >
            <Languages size={19} />
            <span>{direction.toUpperCase()}</span>
          </button>

          {/* DEMO BUTTON */}
          <Link
            to="/request-demo"
            className="demo-btn"
            onClick={closeMenus}
          >
            Get a Demo
            <ArrowUpRight size={17} />
          </Link>

          {/* MOBILE MENU */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;

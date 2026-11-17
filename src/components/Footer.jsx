
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MapPin,
  Layers3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nexora-footer">
      <div className="footer-main">
        {/* COMPANY INFORMATION */}
        <div className="footer-company">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              <Layers3 size={25} />
            </span>
            <span>
              Nexora<span>Soft</span>
            </span>
          </Link>

          <p>
            Discover smarter software solutions for modern businesses.
            Explore powerful tools, simplify operations, and move your
            business forward with confidence.
          </p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/comparison">Compare Software</Link></li>
          </ul>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/integrations">Integrations</Link></li>
            <li><Link to="/demo">Interactive Demo</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/blog">Blog & Resources</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Get in Touch</h3>
          <p>Have questions? We'd love to hear from you.</p>

          <Link to="/contact" className="footer-contact-item">
            <Mail size={17} />
            <span>Contact Our Team</span>
          </Link>

          <Link to="/request-demo" className="footer-contact-item">
            <ArrowRight size={17} />
            <span>Request a Demo</span>
          </Link>

          <div className="footer-contact-item footer-contact-note">
            <MapPin size={17} />
            <span>Explore software solutions for your business</span>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {currentYear} NexoraSoft. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <Link to="/faq">Help & Support</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

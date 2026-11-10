import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <div className="footerTop">

          <div className="footerBrand">
            <h2>
              Mind<span>Station</span>
            </h2>
            <p>Your space to grow, heal, and thrive.</p>
            <Link to="/book-appointment" className="footerButton">
              Book a session
            </Link>
          </div>

          <div className="footerColumn">
            <h3>Explore</h3>
            <Link to="/find-specialist">Find Specialist</Link>
            <Link to="/book-appointment">Book Appointment</Link>
            <Link to="/workshops-events">Workshops &amp; Events</Link>
          </div>

          <div className="footerColumn">
            <h3>Company</h3>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="footerColumn">
            <h3>Get in touch</h3>
            <a href="mailto:info@mindstation.com">info@mindstation.com</a>
            <a href="tel:+000000000">+000 000 000</a>
            <span>Lebanon</span>
          </div>

        </div>

        <div className="footerBottom">
          <span>© 2026 MindStation. All rights reserved.</span>
          <span>In an emergency, contact your local emergency services.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
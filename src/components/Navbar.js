import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const closeNavbar = () => {
    setOpenLinks(false);
  };

  return (
    <nav className="navbar">

      <div className="leftSide"
        id={openLinks ? 'open' : 'close'} >
        <Link to="/" className="logo" onClick={closeNavbar}>
          <img src={logo} alt="MindStation Logo" />
        </Link>

        <div className="rightSide">
          <Link to="/" onClick={closeNavbar}>Home</Link>

          <Link to="/find-specialist" onClick={closeNavbar}>
            Find Specialist
          </Link>

          <Link to="/book-appointment" onClick={closeNavbar}>
            Book Appointment
          </Link>

          <Link to="/workshops-events" onClick={closeNavbar}>
            Workshops &amp; Events
          </Link>

          <Link
            to="/sign-up"
            className="signupBtn"
            onClick={closeNavbar}
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="mobileMenuButton">
        <button
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
          aria-expanded={openLinks}
        >
          <ReorderIcon />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

import room1 from '../assets/Booking.jpg';
import room2 from '../assets/find.jpg';
import room3 from '../assets/events.jpg';
import room4 from '../assets/inClink.jpg';

const Home = () => {
  return (
    <main className="home">
      <div className="homeContainer">

        <section className="homeHero">
          <h1>Your Station for Mental Wellness</h1>
          <p>
            Your space to grow, heal, and thrive. Connecting you with
            top specialists and supporting your personal growth.
          </p>

          <div className="homeButtons">
            <Link to="/find-specialist" className="homeBtnFilled">
              Find a Specialist
            </Link>
            <Link to="/book-appointment" className="homeBtnOutline">
              Book Appointment
            </Link>
            <Link to="/workshops-events" className="homeBtnOutline">
              Workshops
            </Link>
          </div>
        </section>

        <section className="homeCards">

          <Link to="/book-appointment" className="homeCard">
            <img src={room1} alt="Calm therapy room" className="homeCardImage" />
            <div className="homeCardText">
              <h3>Book Appointment</h3>
              <span>Choose your session →</span>
            </div>
          </Link>

          <Link to="/find-specialist" className="homeCard">
            <img src={room2} alt="Calm therapy room" className="homeCardImage" />
            <div className="homeCardText">
              <h3>Find Specialist</h3>
              <span>Meet our specialists →</span>
            </div>
          </Link>

          <Link to="/workshops-events" className="homeCard">
            <img src={room3} alt="Calm therapy room" className="homeCardImage" />
            <div className="homeCardText">
              <h3>Workshops &amp; Events</h3>
              <span>Explore activities → </span>
            </div>
          </Link>

          <Link to="/mental-wellness" className="homeCard">
            <img src={room4} alt="Calm therapy room" className="homeCardImage" />
            <div className="homeCardText">
              <h3> Mental Wellness</h3>
              <span>Discover resources →</span>
            </div>
          </Link>

        </section>
      </div>
    </main>
  );
};

export default Home;
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import specialists from '../data/specialists';
import '../styles/SpecialistProfile.css';

const SpecialistProfile = () => {
  const { id } = useParams();
  const doctor = specialists.find((d) => d.id === Number(id));

  if (!doctor) {
    return (
      <main className="profile">
        <div className="profileContainer">
          <p>Specialist not found.</p>
          <Link to="/find-specialist" className="profileBack">
            ← Back to specialists
          </Link>
        </div>
      </main>
    );
  }

  const initial = doctor.name.replace('Dr. ', '')[0];

  return (
    <main className="profile">
      <div className="profileContainer">

        <Link to="/find-specialist" className="profileBack">
          ← Back to specialists
        </Link>

        <section className="profileHeader">
          <div className="profileAvatar">{initial}</div>
          <div>
            <h1>{doctor.name}</h1>
            <p>
              {doctor.specialty} · {doctor.years} years of experience
            </p>
            <span className="profileTag">{doctor.language}</span>
          </div>
        </section>

        <div className="profileGrid">

          <div className="profileMain">
            <section className="profileBox">
              <h2>About</h2>
              <p>{doctor.bio}</p>
            </section>

            <section className="profileBox">
              <h2>Areas of focus</h2>
              <div className="profileTags">
                {doctor.focus.map((item) => (
                  <span key={item} className="profileTag">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside className="profileSide">
            <h2>Session details</h2>

            <div className="profileRow">
              <span>Price</span>
              <strong>${doctor.price} / session</strong>
            </div>
            <div className="profileRow">
              <span>Duration</span>
              <strong>50 minutes</strong>
            </div>

            <p className="profileLabel">Available days</p>
            <div className="profileTags">
              {doctor.days.map((day) => (
                <span key={day} className="profileTag">
                  {day}
                </span>
              ))}
            </div>

            <Link to="/book-appointment" className="profileBook">
              Book a session
            </Link>
          </aside>

        </div>
      </div>
    </main>
  );
};

export default SpecialistProfile;
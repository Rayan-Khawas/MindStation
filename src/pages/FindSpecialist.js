import React from 'react';
import { Link } from 'react-router-dom';

import specialists from '../data/specialists';
import '../styles/FindSpecialist.css';

const specialties = [
  { name: 'Anxiety', desc: 'Panic, stress and worry' },
  { name: 'Depression', desc: 'Low mood, burnout and grief' },
  { name: 'Family Therapy', desc: 'Couples, parents and families' },
];

const toId = (name) => name.toLowerCase().replace(/\s+/g, '-');

const FindSpecialist = () => {
  const goTo = (name) => {
    const section = document.getElementById(toId(name));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="findSpecialist">
      <div className="findContainer">

        <section className="findHero">
          <h1>Find a Specialist</h1>
          <p>Browse licensed professionals and find the right fit for you.</p>
        </section>

        <section className="findSpecialties">
          <h2>Specialties</h2>
          <div className="findSpecialtyCards">
            {specialties.map((item) => {
              const count = specialists.filter(
                (d) => d.specialty === item.name
              ).length;

              return (
                <button
                  type="button"
                  key={item.name}
                  className="findSpecialtyCard"
                  onClick={() => goTo(item.name)}
                >
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <span>{count} specialists ↓</span>
                </button>
              );
            })}
          </div>
        </section>

        {specialties.map((item) => (
          <section
            className="findGroup"
            id={toId(item.name)}
            key={item.name}
          >
            <h2>{item.name}</h2>

            {specialists
              .filter((d) => d.specialty === item.name)
              .map((doctor) => (
                <div className="findRow" key={doctor.id}>
                  <div className="findRowInfo">
                    <h3>{doctor.name}</h3>
                    <p>
                      {doctor.years} years · {doctor.language}
                    </p>
                  </div>

                  <Link
                    to={`/specialist/${doctor.id}`}
                    className="findBtnOutline"
                  >
                    View profile
                  </Link>
                </div>
              ))}
          </section>
        ))}

      </div>
    </main>
  );
};

export default FindSpecialist;
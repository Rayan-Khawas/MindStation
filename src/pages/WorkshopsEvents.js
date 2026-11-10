import React from 'react';
import { Link } from 'react-router-dom';

import { workshops } from '../data/FormData';
import '../styles/WorkshopsEvents.css';

const getSaved = () => {
  try {
    return JSON.parse(localStorage.getItem('workshops')) || [];
  } catch (e) {
    return [];
  }
};

const WorkshopsEvents = () => {
  const registered = getSaved();

  return (
    <main className="workshops">
      <div className="workshopsContainer">

        <section className="workshopsHero">
          <h1>Workshops &amp; Events</h1>
          <p>Join a session led by experts and grow at your own pace.</p>
        </section>

        <section className="workshopsGrid">
          {workshops.map((item) => (
            <div className="workshopCard" key={item.id}>

              <div className="workshopTop">
                <img
                  src={item.image}
                  alt={item.title}
                  className="workshopImage"
                />
                <div className="workshopMeta">
                  <p className="workshopHost">By: {item.host}</p>
                  <p className="workshopPrice">Price: ${item.price}</p>
                </div>
              </div>

              <h3 className="workshopTitle">{item.title}</h3>

              {registered.includes(item.id) ? (
                <span className="workshopBtn workshopBtnDone">
                  Registered ✓
                </span>
              ) : (
                <Link
                  to={`/workshops-events/register/${item.id}`}
                  className="workshopBtn"
                >
                  Register Now
                </Link>
              )}

            </div>
          ))}
        </section>

      </div>
    </main>
  );
};

export default WorkshopsEvents;
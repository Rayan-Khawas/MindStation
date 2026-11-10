import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import specialists from '../data/specialists';
import '../styles/BookAppointment.css';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const getSaved = () => {
  try {
    return JSON.parse(localStorage.getItem('bookings')) || [];
  } catch (e) {
    return [];
  }
};

const getDates = (doctor) => {
  const dates = [];

  for (let i = 1; i <= 14; i++) {
    const day = new Date();
    day.setDate(day.getDate() + i);

    if (doctor.days.includes(dayNames[day.getDay()])) {
      dates.push(
        day.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })
      );
    }
  }

  return dates;
};

const BookAppointment = () => {
  const [searchParams] = useSearchParams();

  const [doctorId, setDoctorId] = useState(searchParams.get('doctor') || '');
  const [sessionType, setSessionType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookings, setBookings] = useState(getSaved);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const doctor = specialists.find((d) => d.id === Number(doctorId));
  const dates = doctor ? getDates(doctor) : [];

  const makeKey = (t) => ` ${doctorId}|${date}|${t}`;
  const isTaken = (t) => bookings.includes(makeKey(t));

  const handleDoctor = (e) => {
    setDoctorId(e.target.value);
    setDate('');
    setTime('');
    setError('');
  };

  const handleDate = (d) => {
    setDate(d);
    setTime('');
    setError('');
  };

  const handleConfirm = () => {
    if (!doctor || !sessionType || !date || !time) {
      setError('Please complete all three steps.');
      return;
    }

    const updated = [...bookings, makeKey(time)];
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setDone(true);
  };


  if (done) {
    return (
      <main className="book">
        <div className="bookContainer">
          <div className="bookSuccess">
            <h1>Your session is booked</h1>
            <p>{doctor.name} · {sessionType}</p>
            <p>{date} at {time}</p>
            <Link to="/" className="bookBtn bookBtnLink">
              OK
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="book">
      <div className="bookContainer">

        <section className="bookHero">
          <h1>Book an Appointment</h1>
          <p>Three simple steps to your session.</p>
        </section>

        <section className="bookSteps">

          <div className="bookCard">
            <h3>1. Choose specialist</h3>

            <select value={doctorId} onChange={handleDoctor}>
              <option value="">Select a specialist</option>
              {specialists.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>

            <select
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
            >
              <option value="">Session type</option>
              <option value="Online">Online</option>
              <option value="In clinic">In clinic</option>
            </select>
          </div>

          <div className="bookCard">
            <h3>2. Pick date & time</h3>

            {!doctor && (
              <p className="bookNote">Choose a specialist first.</p>
            )}

            <div className="bookDates">
              {dates.map((d) => (
                <button
                  type="button"
                  key={d}
                  className={date === d ? 'bookChip active' : 'bookChip'}
                  onClick={() => handleDate(d)}
                >
                  {d}
                </button>
              ))}
            </div>

            {date && (
              <div className="bookTimes">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    disabled={isTaken(t)}
                    className={time === t ? 'bookChip active' : 'bookChip'}
                    onClick={() => setTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bookCard">
            <h3>3. Confirm</h3>
            <p>Specialist: {doctor ? doctor.name : '-'}</p>
            <p>Type: {sessionType || '-'}</p>
            <p>Date: {date || '-'}</p>
            <p>Time: {time || '-'}</p>

            {error && <p className="bookError">{error}</p>}

            <button type="button" className="bookBtn" onClick={handleConfirm}>
              Confirm booking
            </button>
          </div>

        </section>
      </div>
    </main>
  );
};

export default BookAppointment;
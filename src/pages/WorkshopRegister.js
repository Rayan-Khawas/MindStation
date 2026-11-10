import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { workshops, paymentMethods } from '../data/FormData';
import '../styles/WorkshopRegister.css';

const getSaved = () => {
  try {
    return JSON.parse(localStorage.getItem('workshops')) || [];
  } catch (e) {
    return [];
  }
};

const WorkshopRegister = () => {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === Number(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    payment: 'card',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  if (!workshop) {
    return (
      <main className="register">
        <div className="registerContainer">
          <p>Workshop not found.</p>
          <Link to="/workshops-events" className="registerBack">
            ← Back to workshops
          </Link>
        </div>
      </main>
    );
  }

  const method = paymentMethods.find((m) => m.id === formData.payment);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleConfirm = () => {
    const { name, email, phone, payment, cardNumber, expiry, cvv } = formData;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill in your name, email and phone number.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (payment === 'card' && (!cardNumber.trim() || !expiry.trim() || !cvv.trim())) {
      setError('Please fill in your card details.');
      return;
    }

    // Card details are never saved. Only the workshop id is stored.
    const saved = getSaved();
    if (!saved.includes(workshop.id)) {
      localStorage.setItem('workshops', JSON.stringify([...saved, workshop.id]));
    }

    setDone(true);
  };

  if (done) {
    return (
      <main className="register">
        <div className="registerContainer">
          <div className="registerSuccess">
            <h1>You're registered</h1>
            <p>{workshop.title}</p>
            <p>By {workshop.host}</p>
            <p>{method.note || 'Your payment was received.'}</p>
            <Link to="/workshops-events" className="registerBtn registerBtnLink">
              OK
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="register">
      <div className="registerContainer">

        <Link to="/workshops-events" className="registerBack">
          ← Back to workshops
        </Link>

        <section className="registerCard">
          <p className="registerLabel">Register for</p>
          <h1>{workshop.title}</h1>

          <div className="registerSummary">
            <span>By: {workshop.host}</span>
            <strong>${workshop.price}</strong>
          </div>

          <div className="registerField">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Sara Khoury"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="registerField">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="registerField">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+961 70 000 000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="registerField">
            <label htmlFor="notes">Notes (optional)</label>
            <input
              id="notes"
              name="notes"
              type="text"
              placeholder="Anything we should know?"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <h2>Payment method</h2>

          <div className="registerMethods">
            {paymentMethods.map((m) => (
              <label
                key={m.id}
                className={
                  formData.payment === m.id
                    ? 'registerMethod active'
                    : 'registerMethod'
                }
              >
                <input
                  type="radio"
                  name="payment"
                  value={m.id}
                  checked={formData.payment === m.id}
                  onChange={handleChange}
                />
                <span>{m.label}</span>
              </label>
            ))}
          </div>

          {formData.payment === 'card' ? (
            <>
              <div className="registerField">
                <label htmlFor="cardNumber">Card number</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  inputMode="numeric"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="registerRow">
                <div className="registerField">
                  <label htmlFor="expiry">Expiry</label>
                  <input
                    id="expiry"
                    name="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleChange}
                  />
                </div>

                <div className="registerField">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    id="cvv"
                    name="cvv"
                    type="text"
                    inputMode="numeric"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          ) : (
            <p className="registerNote">{method.note}</p>
          )}

          <div className="registerTotal">
            <span>Total</span>
            <strong>${workshop.price}</strong>
          </div>

          {error && <p className="registerError">{error}</p>}

          <button type="button" className="registerBtn" onClick={handleConfirm}>
            {formData.payment === 'card'
              ? `Pay $${workshop.price} and confirm`
              : method.button}
          </button>
        </section>

      </div>
    </main>
  );
};

export default WorkshopRegister;
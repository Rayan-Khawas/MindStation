import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword, agree } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Your password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Your passwords do not match.');
      return;
    }

    if (!agree) {
      setError('Please agree to the Privacy Policy to continue.');
      return;
    }

    // No backend yet: the password is never saved.
    localStorage.setItem('user', JSON.stringify({ name, email }));
    setDone(true);
  };

  if (done) {
    return (
      <main className="signup">
        <div className="signupContainer">
          <div className="signupSuccess">
            <h1>Welcome, {formData.name.split(' ')[0]}</h1>
            <p>Your account has been created.</p>
            <Link to="/" className="signupBtn signupBtnLink">
              Go to home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="signup">
      <div className="signupContainer">
        <form className="signupCard" onSubmit={handleSubmit} noValidate>

          <div className="signupHead">
            <h2>
              Mind<span>Station</span>
            </h2>
            <h1>Create your account</h1>
            <p>Your space to grow, heal, and thrive.</p>
          </div>

          <div className="signupField">
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

          <div className="signupField">
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

          <div className="signupField">
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

          <div className="signupField">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="At least 8 characters"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="signupField">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <label className="signupCheck">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>I agree to the Privacy Policy and terms of use.</span>
          </label>

          {error && <p className="signupError">{error}</p>}

          <button type="submit" className="signupBtn">
            Create account
          </button>

        </form>
      </div>
    </main>
  );
};

export default SignUp;
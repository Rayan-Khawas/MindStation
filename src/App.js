import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FindSpecialist from './pages/FindSpecialist';
import SpecialistProfile from './pages/SpecialistProfile';
import BookAppointment from './pages/BookAppointment';
import WorkshopsEvents from './pages/WorkshopsEvents';
import WorkshopRegister from './pages/WorkshopRegister';
import SignUp from './pages/SignUp';

import AboutUs from './CompanyInfo/AboutUs';
import Contact from './CompanyInfo/Contact';
import PrivacyPolicy from './CompanyInfo/PrivacyPolicy';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/find-specialist"
            element={<FindSpecialist />}
          />
          <Route
            path="/specialist/:id"
            element={<SpecialistProfile />}
          />
          <Route
            path="/book-appointment"
            element={<BookAppointment />}
          />
          <Route
            path="/workshops-events"
            element={<WorkshopsEvents />}
          />
          <Route
            path="/workshops-events/register/:id"
            element={<WorkshopRegister />}
          />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
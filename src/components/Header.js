import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            src="/favicon.ico"
            alt="ProVital Logo"
            style={{ height: 28, marginRight: 8 }}
          />
          ProVital
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">List your practice</a>
            </li>
            <li>
              <a href="#">For Employers</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Speakers</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
          </ul>
        </nav>
        <div className="header__auth">
          <div className="header__dropdown">
            <span>Login / Signup &#9662;</span>
            <div className="header__dropdown-content">
              <div>
                <b>Doctor</b> <a href="#">Login</a> <a href="#">Sign up</a>
              </div>
              <div>
                <b>Patients</b> <a href="#">Login</a> <a href="#">Sign up</a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="header__hamburger"
          onClick={() => setMobileNavOpen(true)}
        >
          <svg fill="#000000" viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </div>
      </header>
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
        <div className="mobile-nav__header">
          <div className="header__logo">
            <img
              src="/favicon.ico"
              alt="ProVital Logo"
              style={{ height: 28, marginRight: 8 }}
            />
            ProVital
          </div>
          <button
            onClick={() => setMobileNavOpen(false)}
            className="mobile-nav__close"
          >
            &times;
          </button>
        </div>
        <ul className="mobile-nav__links">
          <li>
            <a href="#">Doctor</a>
          </li>
          <li>
            <a href="#">Patients</a>
          </li>
          <li>
            <a href="#">List your practice</a>
          </li>
          <li>
            <a href="#">For Employers</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

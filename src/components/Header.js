import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            src="/ProVital-logo.png"
            alt="ProVital Logo"
            style={{ height: 28, marginRight: 8 }}
          />
          <span>ProVital</span>
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
        <div className="header__hamburger" onClick={toggleMobileNav}>
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
              src="/ProVital-logo.png"
              alt="ProVital Logo"
              style={{ height: 28, marginRight: 8 }}
            />
            <span>ProVital</span>
          </div>
          <button onClick={toggleMobileNav} className="mobile-nav__close">
            &times;
          </button>
        </div>
        <div className="mobile-nav__auth">
          <div className="mobile-auth-group">
            <span className="mobile-auth-group__title">Doctor</span>
            <div className="mobile-auth-group__links">
              <a href="#" className="mobile-auth-group__login">Login</a>
              <a href="#" className="mobile-auth-group__signup">Sign up</a>
            </div>
          </div>
          <div className="mobile-auth-group">
            <span className="mobile-auth-group__title">Patients</span>
            <div className="mobile-auth-group__links">
              <a href="#" className="mobile-auth-group__login">Login</a>
              <a href="#" className="mobile-auth-group__signup">Sign up</a>
            </div>
          </div>
        </div>
        <nav className="mobile-nav__links">
          <a href="#">Doctors <span className="arrow">&rarr;</span></a>
          <a href="#">List your practice <span className="arrow">&rarr;</span></a>
          <a href="#">For Employers <span className="arrow">&rarr;</span></a>
          <a href="#">Courses <span className="arrow">&rarr;</span></a>
          <a href="#">Books <span className="arrow">&rarr;</span></a>
          <a href="#">Speakers <span className="arrow">&rarr;</span></a>
        </nav>
      </div>
    </>
  );
};

export default Header;

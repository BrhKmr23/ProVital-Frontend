import React from "react";
import "./Header.scss";

const Header = () => {
  return (
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
    </header>
  );
};

export default Header;

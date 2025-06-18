import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Fixed: Import Link
import propTypes from 'prop-types';
import '../App.css';

export default function Navbar(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${isDarkMode ? 'dark' : 'light'} bg-${isDarkMode ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="About">{props.text1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About.js">{props.text2}</a>
              </li>
            </ul>
            <div className="form-check form-switch text-secondary">
              <input
                className="form-check-input"
                onClick={toggleMode}
                type="checkbox"
                id="flexSwitchCheckChecked"
                aria-label="Toggle dark mode"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  text1: propTypes.string,
  text2: propTypes.string,
};

Navbar.defaultProps = {
  title: "Default Title",
  text1: "Home",
  text2: "About",
};
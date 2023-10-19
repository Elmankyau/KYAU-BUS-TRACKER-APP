// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Smart Village</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/transportation">Transportation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/agriculture">Agriculture</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/healthcare">Healthcare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tourism">Tourism</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

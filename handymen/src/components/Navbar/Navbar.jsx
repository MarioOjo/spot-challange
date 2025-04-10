import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar-bg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img 
              src="/assets/handyMen.png" 
              alt="Handy Men Logo" 
              style={{ height: '50px' }} 
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/"
                  activeClassName="active"
                >
                  <h4>Home</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/about"
                  activeClassName="active"
                >
                  <h4>About Us</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/services"
                  activeClassName="active"
                >
                  <h4>Services</h4>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/contact"
                  activeClassName="active"
                >
                  <h4>Contact Us</h4>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
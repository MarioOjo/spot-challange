import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Inline styles matching your original design
  const styles = {
    navbar: {
      backgroundColor: '#808080',
      padding: '0.5rem 1rem'
    },
    navLink: {
      color: '#1b1b1b',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      padding: '0.5rem 1rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    },
    navLinkHover: {
      color: '#ffa31a'
    },
    activeLink: {
      color: '#ffa31a'
    },
    logo: {
      height: '50px',
      transition: 'transform 0.3s ease'
    },
    logoHover: {
      transform: 'scale(1.05)'
    },
    toggler: {
      border: 'none',
      padding: '0.25rem 0.5rem',
      fontSize: '1.25rem',
      lineHeight: '1',
      backgroundColor: 'transparent'
    }
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        <Link 
          className="navbar-brand" 
          to="/"
          onMouseEnter={e => {
            e.target.firstChild.style.transform = styles.logoHover.transform;
          }}
          onMouseLeave={e => {
            e.target.firstChild.style.transform = 'none';
          }}
        >
          <img 
            src="/assets/handyMen.png" 
            alt="HandyMen Logo" 
            style={styles.logo}
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
          style={styles.toggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                to="/" 
                className="nav-link"
                style={styles.navLink}
                onMouseEnter={e => Object.assign(e.target.style, styles.navLinkHover)}
                onMouseLeave={e => {
                  e.target.style.color = window.location.pathname === '/' ? 
                    styles.activeLink.color : styles.navLink.color;
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className="nav-link"
                style={{
                  ...styles.navLink,
                  ...(window.location.pathname === '/about' && styles.activeLink)
                }}
                onMouseEnter={e => Object.assign(e.target.style, styles.navLinkHover)}
                onMouseLeave={e => {
                  e.target.style.color = window.location.pathname === '/about' ? 
                    styles.activeLink.color : styles.navLink.color;
                }}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/services" 
                className="nav-link"
                style={{
                  ...styles.navLink,
                  ...(window.location.pathname === '/services' && styles.activeLink)
                }}
                onMouseEnter={e => Object.assign(e.target.style, styles.navLinkHover)}
                onMouseLeave={e => {
                  e.target.style.color = window.location.pathname === '/services' ? 
                    styles.activeLink.color : styles.navLink.color;
                }}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className="nav-link"
                style={{
                  ...styles.navLink,
                  ...(window.location.pathname === '/contact' && styles.activeLink)
                }}
                onMouseEnter={e => Object.assign(e.target.style, styles.navLinkHover)}
                onMouseLeave={e => {
                  e.target.style.color = window.location.pathname === '/contact' ? 
                    styles.activeLink.color : styles.navLink.color;
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
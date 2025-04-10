import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      boxShadow: '0 -5px 15px rgba(0,0,0,0.1)',
      padding: '2rem 0',
      color: 'white'
    },
    logo: {
      maxHeight: '50px',
      marginBottom: '1rem'
    },
    heading: {
      color: '#ffa31a',
      marginBottom: '1.5rem',
      fontSize: '1.2rem'
    },
    socialIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      color: 'white',
      transition: 'all 0.3s ease',
      margin: '0 0.5rem 0.5rem 0'
    },
    socialIconHover: {
      background: '#ffa31a',
      color: '#000',
      transform: 'scale(1.1)'
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'block',
      marginBottom: '0.5rem'
    },
    linkHover: {
      color: '#ffa31a',
      transform: 'translateX(5px)'
    },
    contactItem: {
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      color: '#ffa31a',
      marginRight: '0.5rem'
    },
    divider: {
      borderColor: 'rgba(255,255,255,0.1)',
      margin: '1.5rem 0'
    },
    copyright: {
      fontSize: '0.9rem',
      opacity: '0.8'
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row g-4">
          
          {/* Brand Column */}
          <div className="col-lg-4 text-center text-lg-start">
            <img 
              src="/assets/handyMen.png" 
              alt="HandyMen Logo" 
              style={styles.logo}
            />
            <p>Your trusted partner for all home repair and maintenance needs.</p>
            <div>
              <span 
                style={styles.socialIcon}
                onMouseEnter={e => Object.assign(e.target.style, styles.socialIconHover)}
                onMouseLeave={e => {
                  e.target.style.background = styles.socialIcon.background;
                  e.target.style.color = styles.socialIcon.color;
                  e.target.style.transform = 'none';
                }}
              >
                <FaFacebookF />
              </span>
              <span 
                style={styles.socialIcon}
                onMouseEnter={e => Object.assign(e.target.style, styles.socialIconHover)}
                onMouseLeave={e => {
                  e.target.style.background = styles.socialIcon.background;
                  e.target.style.color = styles.socialIcon.color;
                  e.target.style.transform = 'none';
                }}
              >
                <FaTwitter />
              </span>
              <span 
                style={styles.socialIcon}
                onMouseEnter={e => Object.assign(e.target.style, styles.socialIconHover)}
                onMouseLeave={e => {
                  e.target.style.background = styles.socialIcon.background;
                  e.target.style.color = styles.socialIcon.color;
                  e.target.style.transform = 'none';
                }}
              >
                <FaInstagram />
              </span>
              <span 
                style={styles.socialIcon}
                onMouseEnter={e => Object.assign(e.target.style, styles.socialIconHover)}
                onMouseLeave={e => {
                  e.target.style.background = styles.socialIcon.background;
                  e.target.style.color = styles.socialIcon.color;
                  e.target.style.transform = 'none';
                }}
              >
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          
          {/* Links Column */}
          <div className="col-lg-4 text-center">
            <h5 style={styles.heading}>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link 
                  to="/" 
                  style={styles.link}
                  onMouseEnter={e => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={e => {
                    e.target.style.color = styles.link.color;
                    e.target.style.transform = 'none';
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  style={styles.link}
                  onMouseEnter={e => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={e => {
                    e.target.style.color = styles.link.color;
                    e.target.style.transform = 'none';
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  style={styles.link}
                  onMouseEnter={e => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={e => {
                    e.target.style.color = styles.link.color;
                    e.target.style.transform = 'none';
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  style={styles.link}
                  onMouseEnter={e => Object.assign(e.target.style, styles.linkHover)}
                  onMouseLeave={e => {
                    e.target.style.color = styles.link.color;
                    e.target.style.transform = 'none';
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div className="col-lg-4 text-center text-lg-start">
            <h5 style={styles.heading}>Contact Us</h5>
            <div style={styles.contactItem}>
              <FaPhoneAlt style={styles.icon} />
              <span>(123) 456-7890</span>
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.icon} />
              <span>info@handymen.com</span>
            </div>
            <div style={styles.contactItem}>
              <FaMapMarkerAlt style={styles.icon} />
              <span>123 Handy St, Toolville</span>
            </div>
          </div>
        </div>
        
        <hr style={styles.divider} />
        
        {/* Copyright Row */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p style={styles.copyright}>&copy; 2025 HandyMen. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <Link 
              to="/privacy" 
              style={{
                ...styles.link,
                display: 'inline',
                marginRight: '1rem'
              }}
              onMouseEnter={e => Object.assign(e.target.style, styles.linkHover)}
              onMouseLeave={e => {
                e.target.style.color = styles.link.color;
                e.target.style.transform = 'none';
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              style={{
                ...styles.link,
                display: 'inline'
              }}
              onMouseEnter={e => Object.assign(e.target.style, styles.linkHover)}
              onMouseLeave={e => {
                e.target.style.color = styles.link.color;
                e.target.style.transform = 'none';
              }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
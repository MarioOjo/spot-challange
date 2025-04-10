import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
  

const Home = () => {
  // Inline styles object
  const styles = {
    body: {
      backgroundImage: 'url(/assets/background.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0 0 0 104vh rgba(27, 27, 27, 0.7)',
      minHeight: '100vh',
      color: 'white',
      paddingBottom: '50px'
    },
    heroText: {
      backgroundImage: 'linear-gradient(to right, #292929 40%, rgba(245, 230, 218, 0) 100%), url(/assets/banner.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '450px',
      paddingTop: '15vh',
      paddingLeft: '5vw',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    keyServicesImg: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      borderRadius: '10px'
    },
    chooseUsImg: {
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '10px'
    },
    heading: {
      color: '#ffa31a',
      textShadow: '1px 1px #000000',
      margin: '2rem 0'
    },
    ctaButton: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: '#ffa31a',
      color: '#000000',
      textDecoration: 'none',
      fontWeight: '800',
      fontSize: '1.2rem',
      border: '3px solid #000000',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '4px 4px 0 #000000',
      margin: '20px 0',
      transition: 'all 0.3s ease'
    },
    ctaButtonHover: {
      backgroundColor: '#808080',
      transform: 'translate(2px, 2px)',
      boxShadow: '2px 2px 0 #000000'
    },
    serviceItem: {
      padding: '15px',
      marginBottom: '15px',
      borderLeft: '3px solid #ffa31a',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(41, 41, 41, 0.7)',
      borderRadius: '5px'
    },
    serviceItemHover: {
      backgroundColor: 'rgba(255, 163, 26, 0.2)'
    },
    sectionContainer: {
      backgroundColor: 'rgba(41, 41, 41, 0.8)',
      borderRadius: '15px',
      padding: '30px',
      margin: '40px auto',
      maxWidth: '1200px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    }
  };

  return (
    <div style={styles.body}>
      {/* Hero Section */}
      <div style={styles.heroText}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Reliable Handyman Services for All Your Home Needs</h2>
        <h5 style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
          From electrical repairs to plumbing and general maintenance, we've got you covered.
        </h5>
      </div>

      {/* Key Services */}
      <div style={styles.sectionContainer}>
        <h2 style={styles.heading} className="text-center">Key Services</h2>
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img 
              src="/assets/keyServices.jpeg" 
              alt="Key Services" 
              style={styles.keyServicesImg}
            />
          </div>
          <div className="col-md-6">
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Electrical Faults:</strong></h4>
              <p>Repairing wiring issues, fixing faulty outlets, and more.</p>
            </div>
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Equipment Repairs:</strong></h4>
              <p>Fixing appliances, lighting, and other household equipment.</p>
            </div>
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Plumbing Services:</strong></h4>
              <p>Leak repairs, faucet installations, drain unclogging, and more.</p>
            </div>
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Handyman Services:</strong></h4>
              <p>Home maintenance, furniture assembly, painting, and other odd jobs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={styles.sectionContainer}>
        <h2 style={styles.heading} className="text-center">Why Choose Us?</h2>
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 text-center mb-4 mb-md-0">
            <img 
              src="/assets/chooseUs.jpeg" 
              alt="Why Choose Us" 
              style={styles.chooseUsImg}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Fast Response:</strong></h4>
              <p>Same-day services available for urgent repairs.</p>
            </div>
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Experienced Professionals:</strong></h4>
              <p>Certified and skilled handymen for every task.</p>
            </div>
            <div 
              style={styles.serviceItem}
              onMouseEnter={e => Object.assign(e.target.style, styles.serviceItemHover)}
              onMouseLeave={e => e.target.style.backgroundColor = 'rgba(41, 41, 41, 0.7)'}
            >
              <h4><strong>Affordable Rates:</strong></h4>
              <p>Transparent pricing with no hidden costs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link 
          to="/contact" 
          style={styles.ctaButton}
          onMouseEnter={e => Object.assign(e.target.style, styles.ctaButtonHover)}
          onMouseLeave={e => {
            e.target.style.backgroundColor = styles.ctaButton.backgroundColor;
            e.target.style.transform = 'none';
            e.target.style.boxShadow = styles.ctaButton.boxShadow;
          }}
        >
          Book a Handyman
        </Link>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ServicesPage = () => {
  const styles = {
    body: {
      backgroundImage: 'url(/assets/background.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0 0 0 104vh rgba(27, 27, 27, 0.7)',
      minHeight: '100vh',
      color: 'white',
      padding: '20px 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px'
    },
    heroText: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    section: {
      backgroundColor: 'rgba(41, 41, 41, 0.8)',
      borderRadius: '10px',
      padding: '30px',
      marginBottom: '40px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
    },
    sectionTitle: {
      color: '#ffa31a',
      marginBottom: '25px',
      textShadow: '1px 1px #000000'
    },
    serviceImage: {
      width: '100%',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
      marginBottom: '20px'
    },
    emergencySection: {
      backgroundColor: 'rgba(255, 163, 26, 0.1)',
      borderRadius: '10px',
      padding: '30px',
      textAlign: 'center',
      marginTop: '40px'
    },
    emergencyItem: {
      backgroundColor: 'rgba(255, 163, 26, 0.2)',
      borderRadius: '5px',
      padding: '15px',
      margin: '10px',
      height: '100%'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Hero Section */}
        <div style={styles.heroText}>
          <h1 style={styles.sectionTitle}>Our Comprehensive Handyman Services</h1>
          <p className="lead">Professional solutions for all your home maintenance and repair needs</p>
        </div>

        {/* Electrical Services */}
        <div style={styles.section}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="/assets/electrical.jpeg" 
                alt="Electrical Services" 
                style={styles.serviceImage}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 style={styles.sectionTitle}>Electrical Faults</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h5><strong>Wiring Repairs</strong></h5>
                  <p>Fixing faulty wiring, replacing damaged cables, and ensuring your electrical system is safe and up to code.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Breaker Replacements</strong></h5>
                  <p>Upgrading and replacing circuit breakers to prevent electrical overloads and hazards.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Outlet & Switch Repairs</strong></h5>
                  <p>Fixing faulty outlets, installing GFCI outlets, and repairing light switches.</p>
                </li>
                <li>
                  <h5><strong>Lighting Installation</strong></h5>
                  <p>Installing new light fixtures, ceiling fans, and troubleshooting lighting issues.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plumbing Services */}
        <div style={styles.section}>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img 
                src="/assets/plumbing.jpeg" 
                alt="Plumbing Services" 
                style={styles.serviceImage}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 style={styles.sectionTitle}>Plumbing Services</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h5><strong>Leak Repairs</strong></h5>
                  <p>Locating and fixing pipe leaks to prevent water damage and reduce water bills.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Faucet Installation</strong></h5>
                  <p>Installing and repairing kitchen and bathroom faucets for optimal performance.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Drain Unclogging</strong></h5>
                  <p>Clearing blocked drains in sinks, showers, and toilets using professional tools.</p>
                </li>
                <li>
                  <h5><strong>Water Heater Maintenance</strong></h5>
                  <p>Flushing, repairing, and maintaining water heaters for efficiency and longevity.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Appliance Repairs */}
        <div style={styles.section}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="/assets/appliances.jpeg" 
                alt="Appliance Repairs" 
                style={styles.serviceImage}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 style={styles.sectionTitle}>Faulty Home Equipment</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h5><strong>Appliance Repairs</strong></h5>
                  <p>Fixing washing machines, dryers, dishwashers, and other major appliances.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>HVAC Maintenance</strong></h5>
                  <p>Servicing air conditioners, furnaces, and ventilation systems.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Kitchen Equipment</strong></h5>
                  <p>Repairing stoves, ovens, microwaves, and garbage disposals.</p>
                </li>
                <li>
                  <h5><strong>Electronic Repairs</strong></h5>
                  <p>Troubleshooting and fixing TVs, sound systems, and other electronics.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* General Handyman Services */}
        <div style={styles.section}>
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-6">
              <img 
                src="/assets/general.jpeg" 
                alt="General Handyman Services" 
                style={styles.serviceImage}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 style={styles.sectionTitle}>General Handyman Activities</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <h5><strong>Furniture Assembly</strong></h5>
                  <p>Professional assembly of beds, cabinets, shelves, and other furniture.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Painting Services</strong></h5>
                  <p>Interior and exterior painting with proper preparation and finishing.</p>
                </li>
                <li className="mb-3">
                  <h5><strong>Drywall Repairs</strong></h5>
                  <p>Patching holes, fixing cracks, and smoothing walls for perfect finishes.</p>
                </li>
                <li>
                  <h5><strong>TV Mounting</strong></h5>
                  <p>Secure mounting of TVs on walls with proper cable management.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div style={styles.emergencySection}>
          <h2 style={styles.sectionTitle}>24/7 Emergency Services</h2>
          <p className="lead mb-4">We understand that some problems can't wait. That's why we offer emergency services for:</p>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div style={styles.emergencyItem}>
                <h5>Electrical Emergencies</h5>
                <p>Power outages, sparking outlets, and other hazardous situations</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={styles.emergencyItem}>
                <h5>Plumbing Emergencies</h5>
                <p>Major leaks, clogged toilets, and burst pipes</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div style={styles.emergencyItem}>
                <h5>Appliance Failures</h5>
                <p>Sudden failures of your essential appliances</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
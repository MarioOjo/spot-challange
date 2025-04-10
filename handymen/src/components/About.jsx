import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS


const About = () => {
  const styles = {
    container: {
      padding: '2rem 0',
      color: 'white'
    },
    heading: {
      color: '#ffa31a',
      textShadow: '1px 1px #000000',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    missionCard: {
      background: 'rgba(41, 41, 41, 0.85)',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      padding: '30px',
      marginBottom: '3rem'
    },
    teamCard: {
      transition: 'all 0.3s ease',
      border: 'none',
      borderRadius: '10px',
      overflow: 'hidden',
      background: 'rgba(41, 41, 41, 0.8)',
      height: '100%',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
    },
    teamImgContainer: {
      height: '250px',
      overflow: 'hidden'
    },
    teamImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    featureIcon: {
      width: '60px',
      height: '60px',
      background: '#ffa31a',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 20px',
      fontSize: '24px',
      color: '#000'
    },
    badge: {
      padding: '0.5em 0.8em',
      fontSize: '0.85rem',
      backgroundColor: '#ffa31a',
      color: '#000',
      margin: '0 5px 5px 0'
    }
  };

  return (
    <div style={styles.container}>
      {/* Mission Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" style={styles.missionCard}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img 
                  src="/assets/Tools.jpeg" 
                  alt="Handyman tools" 
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6">
                <h2 style={styles.heading}>Our Mission</h2>
                <p>At HandyMen, we're committed to providing reliable, high-quality handyman services that help you maintain and improve your home.</p>
                <div className="mt-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <div style={styles.featureIcon}>✓</div>
                    </div>
                    <div>
                      <h5>Quality Assurance</h5>
                      <p className="mb-0">Every job meets our strict quality standards</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <div style={styles.featureIcon}>♥</div>
                    </div>
                    <div>
                      <h5>Customer Focus</h5>
                      <p className="mb-0">Your satisfaction is our top priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container">
        <h2 style={styles.heading}>Meet the Team</h2>
        <div className="row">
          {/* John Doe */}
          <div className="col-md-4 mb-4">
            <div style={styles.teamCard}>
              <div style={styles.teamImgContainer}>
                <img 
                  src="/assets/John.jpeg" 
                  className="img-fluid" 
                  alt="John Doe"
                  style={styles.teamImg}
                />
              </div>
              <div className="card-body text-center p-4">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Certified Electrician with 10+ years of experience</p>
                <div>
                  <span style={styles.badge}>Electrical</span>
                  <span style={styles.badge}>Lighting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sarah Johnson (Centered) */}
          <div className="col-md-4 mb-4">
            <div style={styles.teamCard}>
              <div style={styles.teamImgContainer}>
                <img 
                  src="/assets/Sarah.jpeg" 
                  className="img-fluid" 
                  alt="Sarah Johnson"
                  style={styles.teamImg}
                />
              </div>
              <div className="card-body text-center p-4">
                <h5 className="card-title">Sarah Johnson</h5>
                <p className="card-text">General maintenance specialist with keen eye for detail</p>
                <div>
                  <span style={styles.badge}>Carpentry</span>
                  <span style={styles.badge}>Painting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mike Smith */}
          <div className="col-md-4 mb-4">
            <div style={styles.teamCard}>
              <div style={styles.teamImgContainer}>
                <img 
                  src="/assets/Mike.jpg" 
                  className="img-fluid" 
                  alt="Mike Smith"
                  style={styles.teamImg}
                />
              </div>
              <div className="card-body text-center p-4">
                <h5 className="card-title">Mike Smith</h5>
                <p className="card-text">Plumbing expert, specializing in pipe repairs</p>
                <div>
                  <span style={styles.badge}>Plumbing</span>
                  <span style={styles.badge}>Heating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

const Contact = () => {
  const styles = {
    container: {
      padding: '3rem 0',
      color: 'white',
      background: 'rgba(27, 27, 27, 0.9)'
    },
    heading: {
      color: '#ffa31a',
      textShadow: '1px 1px #000000',
      marginBottom: '2rem',
      textAlign: 'center'
    },
    formContainer: {
      background: 'rgba(41, 41, 41, 0.8)',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      maxWidth: '800px',
      margin: '0 auto'
    },
    input: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: '1px solid #444',
      color: 'white',
      marginBottom: '1rem'
    },
    submitButton: {
      backgroundColor: '#ffa31a',
      color: '#000',
      border: 'none',
      padding: '10px 20px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    },
    contactInfo: {
      marginTop: '2rem'
    },
    icon: {
      color: '#ffa31a',
      marginRight: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <h2 style={styles.heading}>Contact Us</h2>
        
        <div style={styles.formContainer}>
          <form>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  style={styles.input}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  style={styles.input}
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              style={styles.input}
            />
            <textarea
              className="form-control"
              rows="5"
              placeholder="Your Message"
              style={styles.input}
            ></textarea>
            <button 
              type="submit" 
              className="btn"
              style={styles.submitButton}
            >
              Send Message
            </button>
          </form>

          <div style={styles.contactInfo} className="row">
            <div className="col-md-4 text-center mb-4">
              <p><i className="fas fa-phone" style={styles.icon}></i> (123) 456-7890</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <p><i className="fas fa-envelope" style={styles.icon}></i> info@handymen.com</p>
            </div>
            <div className="col-md-4 text-center">
              <p><i className="fas fa-map-marker-alt" style={styles.icon}></i> 123 Handy St, Toolville</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
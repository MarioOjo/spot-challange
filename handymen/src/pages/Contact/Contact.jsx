import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './Contact.css';

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
      <div className="contactBody">
        <div className="book">
          <img
            className="imgCont"
            src="../assets/johnSyntaxPlumber.webp"
            width="600"
            alt="John Syntax Plumber"
          />
          <div className="bookText">
            <h1>Looking to Book a Service?</h1>
            <p>
              Whether you're stuck in your washing machine or you need to get
              your pipes looked at, get in touch with our team with whichever
              contact option below is most convenient for you and we'll get
              back to you as soon as we can.
            </p>
          </div>
        </div>

        <div className="contacts">
          <div className="linksPackage">
            <div className="txtCont">
              <h3>VISIT US AT OUR PHYSICAL LOCATION</h3>
            </div>
            <div className="mapCont">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.321356159183!2d28.20695667518794!3d-25.891804351323568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956608911ce097%3A0x519896b4b6eda40a!2sOpen%20Window%20-%20Centurion!5e0!3m2!1sen!2sza!4v1710455813767!5m2!1sen!2sza"
                width="300"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Open Window - Centurion"
              ></iframe>
            </div>
          </div>
          <div className="linksPackage">
            <div className="txtCont">
              <h3>OR CONTACT OUR SOCIAL MEDIA PAGES</h3>
            </div>
            <div className="slinksFlex">
              <a href="mailto:someone@example.com">
                <img
                  src="../assets/emailIcon.png"
                  width="90"
                  height="90"
                  alt="Email Icon"
                />
              </a>
              <a href="tel: 083-303-2642">
                <img
                  id="cellIcon"
                  src="../assets/cellIcon.png"
                  width="90"
                  height="90"
                  style={{ borderRadius: '50%' }}
                  alt="Phone Icon"
                />
              </a>
              <a href="https://www.instagram.com/cerealsauceband?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <img
                  src="../assets/instIcon.png"
                  width="90"
                  height="90"
                  alt="Instagram Icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

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
              <p>
                <i className="fas fa-phone" style={styles.icon}></i> (123)
                456-7890
              </p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <p>
                <i className="fas fa-envelope" style={styles.icon}></i>{' '}
                info@handymen.com
              </p>
            </div>
            <div className="col-md-4 text-center">
              <p>
                <i className="fas fa-map-marker-alt" style={styles.icon}></i>{' '}
                123 Handy St, Toolville
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
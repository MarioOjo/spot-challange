import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './About.css'; // Assuming you have a CSS file for additional styles

const About = () => {
  const styles = {
    container: {
      padding: '2rem 0',
      color: 'white',
      backgroundImage: 'url(/assets/background.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0 0 0 104vh rgba(27, 27, 27, 0.7)',
      minHeight: '100vh'
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
      marginBottom: '3rem',
      transform: 'translateY(-50px)',
      zIndex: 10
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
    teamCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(255, 163, 26, 0.3)'
    },
    teamImgContainer: {
      width: '100%',
      height: 'auto',
    },
    teamImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    teamImgHover: {
      transform: 'scale(1.05)'
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
      margin: '0 5px 5px 0',
      borderRadius: '20px'
    },
    statsSection: {
      background: 'rgba(255, 163, 26, 0.1)',
      borderRadius: '15px',
      padding: '40px 0',
      margin: '30px 0'
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ffa31a'
    },
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '0 auto'
    },
    timelineLine: {
      position: 'absolute',
      width: '2px',
      backgroundColor: '#ffa31a',
      top: 0,
      bottom: 0,
      left: '50%',
      marginLeft: '-1px'
    },
    timelineItem: {
      padding: '10px 40px',
      position: 'relative',
      width: '50%',
      boxSizing: 'border-box'
    },
    timelineDot: {
      position: 'absolute',
      width: '20px',
      height: '20px',
      backgroundColor: '#ffa31a',
      borderRadius: '50%',
      top: '15px',
      zIndex: 1
    },
    timelineContent: {
      background: 'rgba(41, 41, 41, 0.8)',
      padding: '15px',
      borderRadius: '8px'
    },
    imgFluid: {
      height: '100%',
      height: 'auto',
    }
  };

  const teamMembers = [
    {
      name: "John Doe",
      role: "Certified Electrician with 10+ years of experience",
      image: "/assets/John.jpeg",
      badges: ["Electrical", "Lighting"]
    },
    {
      name: "Sarah Johnson",
      role: "General maintenance specialist with keen eye for detail",
      image: "/assets/Sarah.jpeg",
      badges: ["Carpentry", "Painting"]
    },
    {
      name: "Mike Smith",
      role: "Plumbing expert, specializing in pipe repairs",
      image: "/assets/Mike.jpg",
      badges: ["Plumbing", "Heating"]
    }
  ];

  const timelineEvents = [
    {
      year: "2010",
      description: "Founded with just two handymen and a vision for quality service",
      position: "left"
    },
    {
      year: "2014",
      description: "Expanded to full-service home repairs and maintenance",
      position: "right"
    },
    {
      year: "2018",
      description: "Opened our second location and doubled our team",
      position: "left"
    },
    {
      year: "2023",
      description: "Launched 24/7 emergency services across all locations",
      position: "right"
    }
  ];

  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "2,450+", label: "Projects Completed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Emergency Service" }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section className="hero-about d-flex align-items-center" style={{
        backgroundImage: 'linear-gradient(to right, #292929 40%, rgba(245, 230, 218, 0) 100%), url(/assets/banner.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '450px',
        color: '#fff'
      }}>
        <div className="container text-center">
          <h1 className="display-4 mb-4">Our Story</h1>
          <p className="lead">Building trust one repair at a time since 2010</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container my-5 position-relative">
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
                <p>At HandyMen, we're committed to providing reliable, high-quality handyman services that help you maintain and improve your home. We believe every home deserves expert care without the hassle.</p>
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
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div className="col-md-3" key={index}>
                <div style={styles.statNumber}>{stat.value}</div>
                <h5>{stat.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container my-5">
        <h2 style={styles.heading}>Our Journey</h2>
        <div style={styles.timeline}>
          <div style={styles.timelineLine}></div>
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              style={{
                ...styles.timelineItem,
                left: event.position === 'left' ? '0' : '50%',
                textAlign: event.position === 'left' ? 'right' : 'left'
              }}
            >
              <div style={styles.timelineContent}>
                <h4>{event.year}</h4>
                <p>{event.description}</p>
              </div>
              <div style={{
                ...styles.timelineDot,
                [event.position === 'left' ? 'right' : 'left']: '-10px'
              }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container my-5">
        <h2 style={styles.heading}>Meet the Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div 
                style={styles.teamCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = styles.teamCardHover.transform;
                  e.currentTarget.style.boxShadow = styles.teamCardHover.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = styles.teamCard.boxShadow;
                }}
              >
                <div style={styles.teamImgContainer}>
                  <img 
                    src={member.image} 
                    className="img-fluid" 
                    alt={member.name}
                    style={styles.teamImg}
                    onMouseEnter={(e) => e.currentTarget.style.transform = styles.teamImgHover.transform}
                    onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <div>
                    {member.badges.map((badge, i) => (
                      <span key={i} style={styles.badge}>{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ background: 'rgba(41, 41, 41, 0.8)' }}>
        <div className="container">
          <h2 style={styles.heading}>Why Choose HandyMen?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-4 h-100" style={{ background: 'rgba(255, 163, 26, 0.1)', borderRadius: '10px' }}>
                <div style={styles.featureIcon}>★</div>
                <h4>Experienced Professionals</h4>
                <p>Our team averages 8+ years of expertise in electrical, plumbing, and general repairs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 h-100" style={{ background: 'rgba(255, 163, 26, 0.1)', borderRadius: '10px' }}>
                <div style={styles.featureIcon}>🕒</div>
                <h4>Flexible Scheduling</h4>
                <p>We offer easy booking options including evenings and weekends to fit your schedule.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-4 h-100" style={{ background: 'rgba(255, 163, 26, 0.1)', borderRadius: '10px' }}>
                <div style={styles.featureIcon}>✓</div>
                <h4>Quality Guarantee</h4>
                <p>All our work comes with a 1-year satisfaction guarantee for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
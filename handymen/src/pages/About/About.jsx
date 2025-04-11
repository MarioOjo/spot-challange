import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './About.css';

const About = () => {
  const styles = {
    container: {
      padding: '2rem 0',
      color: 'white',
      backgroundImage: 'url(/assets/background.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      boxShadow: 'inset 0 0 0 104vh rgba(27, 27, 27, 0.7)',
      minHeight: '100vh',
    },
    heading: {
      color: '#ffa31a',
      textShadow: '1px 1px #000000',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    teamCard: {
      transition: 'all 0.3s ease',
      border: 'none',
      borderRadius: '10px',
      overflow: 'hidden',
      background: 'rgba(41, 41, 41, 0.8)',
      
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    },
    teamCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 30px rgba(255, 163, 26, 0.3)'
    },
    teamImgContainer: {
      width: '100%',
      height: 'auto',
      boxShadow: '0 15px 30px rgba(255, 163, 26, 0.3)',
    },
    teamImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    teamImgHover: {
      transform: 'scale(1.05)',
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
      color: '#000',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#ffa31a',
    },
    missionCard: {
      background: 'rgba(41, 41, 41, 0.85)',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      padding: '30px',
      marginBottom: '3rem',
    },
    statsSection: {
      background: 'rgba(255, 163, 26, 0.1)',
      borderRadius: '15px',
      padding: '40px 0',
      margin: '30px 0',
    },
  };

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Certified Electrician with 10+ years of experience',
      image: '/assets/John.jpeg',
      badges: ['Electrical', 'Lighting'],
    },
    {
      name: 'Sarah Johnson',
      role: 'General maintenance specialist with keen eye for detail',
      image: '/assets/Sarah.jpeg',
      badges: ['Carpentry', 'Painting'],
    },
    {
      name: 'Mike Smith',
      role: 'Plumbing expert, specializing in pipe repairs',
      image: '/assets/Mike.jpg',
      badges: ['Plumbing', 'Heating'],
    },
  ];

  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '2,450+', label: 'Projects Completed' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Emergency Service' },
  ];

  const features = [
    {
      icon: '★',
      title: 'Experienced Professionals',
      description: 'Our team averages 8+ years of expertise in electrical, plumbing, and general repairs.',
    },
    {
      icon: '🕒',
      title: 'Flexible Scheduling',
      description: 'We offer easy booking options including evenings and weekends to fit your schedule.',
    },
    {
      icon: '✓',
      title: 'Quality Guarantee',
      description: 'All our work comes with a 1-year satisfaction guarantee for your peace of mind.',
    },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section
        className="hero-about d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, #292929 40%, rgba(245, 230, 218, 0) 100%), url(/assets/banner.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '450px',
          color: '#fff',
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 mb-4">Our Story</h1>
          <p className="lead">Building trust one repair at a time since 2010</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container my-5">
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
                <p>
                  At HandyMen, we're committed to providing reliable, high-quality handyman services that help you maintain and improve your home. We believe every home deserves expert care without the hassle.
                </p>
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
                <img
                  src={member.image}
                  alt={member.name}
                  style={styles.teamImg}
                  className="img-fluid"
                  onMouseEnter={(e) => (e.currentTarget.style.transform = styles.teamImgHover.transform)}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = '')}
                />
                <div className="card-body text-center p-4">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <div>
                    {member.badges.map((badge, i) => (
                      <span key={i} className="badge bg-warning text-dark me-1">
                        {badge}
                      </span>
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
            {features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="text-center p-4 h-100"
                  style={{
                    background: 'rgba(255, 163, 26, 0.1)',
                    borderRadius: '10px',
                  }}
                >
                  <div style={styles.featureIcon}>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
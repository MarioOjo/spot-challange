import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();
  
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1b1b1b',
      zIndex: 1000
    },
    logo: {
      maxWidth: '300px',
      marginBottom: '30px',
      animation: 'pulse 1.5s infinite alternate'
    },
    loader: {
      position: 'relative',
      width: '200px',
      height: '200px',
      margin: '20px 0'
    },
    progressContainer: {
      width: '60%',
      maxWidth: '400px',
      height: '8px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '4px',
      margin: '20px 0',
      overflow: 'hidden'
    },
    progressBar: {
      height: '100%',
      width: '0%',
      background: '#ffa31a',
      borderRadius: '4px',
      transition: 'width 3s linear'
    },
    text: {
      color: 'white',
      margin: '20px 0',
      fontSize: '1.2rem'
    }
  };

  useEffect(() => {
    const progress = document.getElementById('progress');
    if (progress) {
      progress.style.width = '100%';
    }
    
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <img src="/assets/handyMen.png" alt="HandyMen" style={styles.logo} />
      <div style={styles.loader} className="handyman-loader"></div>
      <div style={styles.text}>Loading your experience...</div>
      <div style={styles.progressContainer}>
        <div id="progress" style={styles.progressBar}></div>
      </div>
    </div>
  );
};

export default Loading;
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css'; 

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const words = ['Innovation', 'Excellence', 'Future', 'Technology'];
  
  useEffect(() => {
    // Fade in animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Rotating words animation
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`home-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-section">
          <h1 className="main-title">
            Welcome to <span className="company-name">Quantum IT</span>
            <span className="rotating-word">{words[currentWord]}</span>
          </h1>
          
          <p className="subtitle">
            Empowering businesses with cutting-edge technology solutions
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Secure</h3>
              <p>Lightning-fast performance with enterprise-grade security</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative</h3>
              <p>Cutting-edge solutions for modern business challenges</p>
            </div>
          </div>
        </div>
        
        <div className="auth-section">
          <h2 className="auth-title">Get Started Today</h2>
          <div className="auth-links">
            <Link to="/login" className="auth-btn login-btn">
              <span className="btn-text">Login</span>
              <div className="btn-icon">→</div>
            </Link>
            <Link to="/register" className="auth-btn register-btn">
              <span className="btn-text">Register</span>
              <div className="btn-icon">✨</div>
            </Link>
          </div>
          <div className="social-proof">
            <p>Join 10,000+ satisfied customers</p>
            <div className="rating">
              ⭐⭐⭐⭐⭐ <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
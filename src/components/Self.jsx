import React from 'react';
import Slideshow from './Slideshow';

export default function Self() {
  return (
    <section className="self-section" id="home">
      <div className="container self-container">
        <div className="self-content">
          <div className="self-tagline-wrapper">
            <span className="self-badge pulse-glow">Available for Hire</span>
          </div>
          <h1 className="self-title">
            Hi, I'm <span className="highlight">Patrick Joseph Napud</span>!
          </h1>
          <h2 className="self-subtitle">
            Front End Developer and UI/UX Designer
          </h2>
          <p className="self-description">
            I craft immersive, high-performance web applications that merge robust engineering with polished, high-end aesthetics. Welcome to my digital workspace.
          </p>
          <div className="self-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Work
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </a>
          </div>

          <div className="self-stats">
            <div className="stat-item">
              <span className="stat-number">4 yrs</span>
              <span className="stat-label">Academic Exp</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Ready</span>
              <span className="stat-label">to Work</span>
            </div>
          </div>
        </div>

        <div className="self-image-wrapper">
          <div className="self-image-glow"></div>
          <Slideshow />
        </div>
      </div>
    </section>
  );
}

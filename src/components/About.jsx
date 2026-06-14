import React from 'react';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React / React Native', 'JavaScript', 'HTML5 & Vanilla CSS'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      )
    },
    {
      title: 'Backend & Databases',
      skills: ['RESTful API Design', 'PostgreSQL / SQL', 'Firebase'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
      )
    },
    {
      title: 'Design & Tooling',
      skills: ['Figma UI/UX Design', 'Git & GitHub Versioning', 'Tailwind CSS & SASS', 'Adobe Suite'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 8V16"></path><path d="M8 12H16"></path></svg>
      )
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">A Bit About Me</span>
          <h2 className="section-title">My Technical Landscape</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-bio glass-card">
            <h3>My Journey</h3>
            <p>
              I am a digital artisan specializing in crafting clean, user-centric interfaces backed by solid engineering. With a strong foundation in both front-end aesthetics and backend logic, I build software that feels as good as it works.
            </p>
            <p>
              I believe that coding is an art form. Over the years, I've designed and engineered products for startups and enterprises alike. I constanty seek to push boundaries—incorporating responsive fluid layouts, optimized database workflows, and polished, premium visual experiences into everything I build.
            </p>
            <div className="about-quote">
              <span className="quote-mark">“</span>
              <p>Simplicity is the ultimate sophistication.</p>
              <span className="quote-author">- Leonardo da Vinci</span>
            </div>
          </div>

          <div className="skills-container">
            {skillCategories.map((category) => (
              <div key={category.title} className="skill-category glass-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h4>{category.title}</h4>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

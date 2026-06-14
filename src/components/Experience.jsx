import React, { useState } from 'react';

const experienceData = [
  {
    id: 1,
    role: 'Computer Science Intern (UI/UX Designer)',
    company: 'Saglity Iloilo',
    duration: 'January 2026 - May 2026',
    description: 'Focused on mantaining and patching vulnerabilities of over 100 - 150 units for the company. Deployed and configured workstations focusing on managing physical hardware setup, cable organization and PC reimaging. Also designed and developed the system hardware interface for the fulfillment team of the company. Focused on UI/UX using Figma and ReactJS.',
    type: 'work'
  },
  {
    id: 2,
    role: 'Social Media Management',
    company: 'Miagao Community Red Cross Youth',
    duration: 'September 2022 - January 2024',
    description: 'Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors. Active participant in collegiate hackathons and web development projects.',
    type: 'education'
  },
  {
    id: 3,
    role: 'Bachelor of Science in Computer Science',
    company: 'West Visayas State University',
    duration: 'August 2022 - June 2026',
    description: 'Majored in Artificial Intelligence. Contributed on various academic projects and tech-related activities. A 2-time Bronze Medalist and graduated with 1.65 GWA.',
    type: 'education'
  },
  {
    id: 4,
    role: 'Graphic Designer and Video Editing',
    company: 'Freelance',
    duration: '2018 - Present',
    description: 'Edited ',
    type: 'work'
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTimeline = activeTab === 'all'
    ? experienceData
    : experienceData.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Education & Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        {/* Tab Selection */}
        <div className="experience-tabs">
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Journey
          </button>
          <button
            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            Professional Work
          </button>
          <button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {/* Timeline List */}
        <div className="timeline">
          {filteredTimeline.map((item, idx) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot-wrapper">
                <div className={`timeline-dot ${item.type === 'work' ? 'dot-work' : 'dot-edu'}`}>
                  {item.type === 'work' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                  )}
                </div>
                {idx !== filteredTimeline.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-date">{item.duration}</span>
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-company">{item.company}</span>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

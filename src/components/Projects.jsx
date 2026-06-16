import React, { useState } from 'react';

const mockProjects = [
  {
    id: 1,
    title: 'DeepDent: Periodontal Disease Detection',
    category: 'Artificial Intelligence',
    underDevelopment: true,
    shortDesc: 'An AI built to detect potential gingivitis and periodontitis disease.',
    longDesc: 'Aether Analytics is an enterprise-grade analytics dashboard designed to help companies visualize server loads, active sessions, and database query executions. Using dynamic WebSockets and a clean Postgres backend, it renders thousands of data points at 60fps.',
    tech: ['Tensorflow', 'Python', 'Hugging Face', 'Roboflow'],
    features: [
      'Automatic periodontal disease detection',
      'Real-time metrics transparency',
      'Multiple image files supported',
    ],
    demoLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    id: 2,
    title: 'Patrick Joseph Napud - Portfolio',
    category: 'Frontend',
    shortDesc: 'The portfolio of the developer.',
    longDesc: 'A responsive portfolio of me, Patrick Joseph Napud. It contains an interactive slideshow with a built-in contact feature for visitors. Everything in this portfolio is hardcoded.',
    tech: ['HTML', 'ReactJS', 'Tailwind CSS', 'Vite'],
    features: [
      'Fluid page and responsive transitions',
      'Optimized image loading and blur placeholders',
      'Fully responsive, mobile-first design system',
    ],
    demoLink: 'https://vercel.com/patzys-projects/portfolio',
    githubLink: 'https://github.com/PatsyJoseph/portfolio'
  },
  {
    id: 3,
    title: 'Online Budget Tracker',
    category: 'Fullstack',
    shortDesc: 'A high-performance, framework-free financial dashboard featuring an Excel-inspired layout, live balance calculations, and local data persistence via the Web Storage API.',
    longDesc: 'A minimalist personal finance dashboard brings the rapid utility and structured layout of spreadsheet applications directly to the web, serving as a high-performance showcase for native web fundamentals. Built entirely with vanilla JavaScript, HTML5, and responsive CSS, the application utilizes an Excel-inspired grid interface that allows users to seamlessly log financial records while a reactive calculation engine instantly re-renders net balances, income streams, and expense totals in real time.',
    tech: ['HTML', 'CSS', 'ReactJS', 'Vite'],
    features: [
      'Excel-Inspired Layout',
      'Real-Time Calculations',
      'Local-First Storage'
    ],
    demoLink: 'https://budget-tracker-navy-kappa-48.vercel.app',
    githubLink: 'https://github.com/PatsyJoseph/budget-tracker'
  },

  {
    id: 4,
    title: 'Freelance Graphic Designs',
    category: 'Design',
    underDevelopment: true,
    shortDesc: 'A premium component library featuring dark mode and glassmorphism styling.',
    longDesc: 'Zenith is an open-source design library crafted to build web applications faster. It packages responsive layouts, dynamic modals, buttons, forms, and timelines, complete with theme overrides and cross-browser accessibility structures.',
    tech: ['Figma', 'HTML5', 'Vanilla CSS', 'Storybook'],
    features: [
      'Accessible custom controls (WCAG 2.1 AA Compliant)',
      'Highly customisable CSS Custom Properties styling',
      'Interactive Figma design assets provided',
      'Optimised lightweight bundle sizes (<12KB)'
    ],
    demoLink: null,
    githubLink: null
  }
];

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Artificial Intelligence', 'Frontend', 'Backend', 'Design', 'Fullstack'];

  const filteredProjects = filter === 'All'
    ? mockProjects
    : mockProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Portfolio</span>
          <h2 className="section-title">Selected Masterpieces</h2>
          <div className="section-divider"></div>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <article
              key={project.id}
              className={`project-card glass-card ${project.underDevelopment ? 'under-development' : ''}`}
              onClick={() => !project.underDevelopment && onSelectProject(project)}
              style={{ cursor: project.underDevelopment ? 'default' : 'pointer' }}
            >
              <div className="project-badge">{project.category}</div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.shortDesc}</p>
                <div className="project-card-tech">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="badge project-tech-badge">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="badge project-tech-badge">+{project.tech.length - 3} more</span>
                  )}
                </div>

                {project.underDevelopment ? (
                  <div className="under-development-note">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    Development of this Feature is Undergoing
                  </div>
                ) : (
                  <button className="project-card-cta" aria-label={`View details for ${project.title}`}>
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Self from './components/Self';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Self />
          <About />
          <Projects onSelectProject={setSelectedProject} />
          <Experience />
          <Contact />
        </main>
        <Footer />

        {/* Interactive project modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

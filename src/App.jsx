import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import CertificationsSection from './components/CertificationsSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import HobbiesSection from './components/HobbiesSection.jsx';
import ActivitiesSection from './components/ActivitiesSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import Footer from './components/Footer.jsx';
import BottomActions from './components/BottomActions.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-screen-2xl mx-auto px-2 md:px-4">
          <div className="flex flex-col md:flex-row gap-2">
            {/* Sidebar - Hidden on mobile, visible on desktop */}
            <div className="hidden md:block md:w-1/4 sidebar-container pt-3 pb-3" id="sidebar">
              <Sidebar />
            </div>
            
            {/* Main Content Area */}
            <div className="w-full md:w-3/4 flex flex-col gap-2 py-2 px-1 md:px-2 mobile-pb-safe">
              {/* Navigation */}
              <div className="sticky top-2 z-30 dark:bg-gray-900">
                <Navbar />
              </div>
              
              {/* Mobile Sidebar - visible only on mobile */}
              <div className="block md:hidden w-full mb-3" id="sidebar-mobile">
                <Sidebar />
              </div>
              
              {/* Header Section */}
              <div id="header">
                <Header />
              </div>
              
              {/* Content Sections */}
              <div className="content-container section-transition">
                <section className="section-wrapper" id="skills">
                  <SkillsSection />
                </section>
                <section className="section-wrapper" id="experience">
                  <ExperienceSection />
                </section>
                <section className="section-wrapper" id="projects">
                  <ProjectsSection />
                </section>
                <section className="section-wrapper" id="education">
                  <EducationSection />
                </section>
                <section className="section-wrapper" id="certification">
                  <CertificationsSection />
                </section>
                <section className="section-wrapper" id="activities">
                  <ActivitiesSection />
                </section>
                <section className="section-wrapper" id="achievements">
                  <HobbiesSection />
                </section>
                <section className="section-wrapper" id="gallery">
                  <GallerySection />
                </section>
              </div>
              <BottomActions />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
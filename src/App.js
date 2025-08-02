import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import HobbiesSection from './components/HobbiesSection';
import ActivitiesSection from './components/ActivitiesSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

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
              <div className="sticky top-0 z-40 pt-1">
                <div className="sticky-nav">
                  <Navbar />
                </div>
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
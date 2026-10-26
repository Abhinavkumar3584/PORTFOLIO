'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/portfolio.module.css';

// Components
import Navbar from '@/components/Navbar';
import HeaderSection from '@/components/HeaderSection';
import AboutSection from '@/components/AboutSection';
import ConnectSection from '@/components/ConnectSection';
import GitHubActivitySection from '@/components/GitHubActivitySection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SideProjectsSection from '@/components/SideProjectsSection';
import EducationSection from '@/components/EducationSection';
import MoreSection from '@/components/MoreSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Global Ctrl+K / Cmd+K handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className={styles.frameWrapper}>
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onShowToast={showToast}
      />

      {/* Sticky Right Social Dock in Icon Form */}
      <ConnectSection onShowToast={showToast} />

      {/* Top Dot Grid Matrix decorative banner */}
      <div className={styles.dotGridBanner} />

      {/* Centered Portfolio Content */}
      <div className={styles.portfolioContainer}>
        {/* Profile Card Header */}
        <HeaderSection onShowToast={showToast} />

        <hr className={styles.sectionDivider} />

        {/* About Section & Pixel Drive Showcase */}
        <AboutSection onShowToast={showToast} />

        <hr className={styles.sectionDivider} />

        {/* GitHub Activity Heatmap */}
        <GitHubActivitySection onShowToast={showToast} />

        <hr className={styles.sectionDivider} />

        {/* Experience Timeline (Top 2 + See More) */}
        <ExperienceSection limit={2} showViewAll={true} />

        <hr className={styles.sectionDivider} />

        {/* Projects Section (Top 2 + See More) */}
        <ProjectsSection onShowToast={showToast} limit={2} showViewAll={true} />

        <hr className={styles.sectionDivider} />

        {/* Side Projects & Freelance Section */}
        <SideProjectsSection onShowToast={showToast} />

        <hr className={styles.sectionDivider} />

        {/* Education Timeline */}
        <EducationSection />

        <hr className={styles.sectionDivider} />

        {/* Honors & Skills Matrix */}
        <MoreSection />

        <hr className={styles.sectionDivider} />

        {/* Rock Lee Inspirational Quote Section */}
        <QuoteSection />

        {/* Footer & Interactive Cat */}
        <Footer onShowToast={showToast} />
      </div>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toastContainer} role="status">
          <CheckCircle2 size={15} color="var(--accent-green)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </main>
  );
}

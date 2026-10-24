'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/portfolio.module.css';
import Navbar from '@/components/Navbar';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import { ArrowLeft, Sparkles, ExternalLink, Search, Code2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsPage() {
  const { projects, freelanceAndSideProjects } = portfolioData;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'fullstack'>('all');

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const filteredProjects = projects.filter((project: ProjectItem) => {
    // Category filter
    if (selectedFilter === 'ai' && !project.tools.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('chatbot') || t.toLowerCase().includes('model'))) {
      return false;
    }
    if (selectedFilter === 'fullstack' && !project.tools.some(t => t.toLowerCase().includes('mern') || t.toLowerCase().includes('react') || t.toLowerCase().includes('next'))) {
      return false;
    }

    // Text search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchTagline = project.tagline.toLowerCase().includes(q);
      const matchDesc = project.description.toLowerCase().includes(q);
      const matchTools = project.tools.some(t => t.toLowerCase().includes(q));
      return matchTitle || matchTagline || matchDesc || matchTools;
    }

    return true;
  });

  return (
    <main className={styles.frameWrapper}>
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onShowToast={showToast}
      />

      {/* Floating Social Dock */}
      <ConnectSection onShowToast={showToast} />

      {/* Top Dot Grid Matrix decorative banner */}
      <div className={styles.dotGridBanner} />

      {/* Centered Portfolio Content */}
      <div className={styles.portfolioContainer} style={{ paddingTop: '1.5rem' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Title & Intro */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '8px',
                backgroundColor: 'var(--bg-pill)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
              }}
            >
              <Code2 size={15} />
            </div>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              All Projects &amp; Software
            </h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            A curated showcase of applications, developer tools, and scalable architectures I have designed and deployed.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search projects by name, technology, or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem 0.65rem 2.25rem',
                borderRadius: '10px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-primary)',
                fontSize: '0.8125rem',
                fontFamily: 'inherit',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
              }}
            />
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI Systems' },
              { id: 'fullstack', label: 'Full Stack' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedFilter(cat.id as 'all' | 'ai' | 'fullstack');
                  showToast(`Filter: ${cat.label}`);
                }}
                className={styles.skillChip}
                style={{
                  backgroundColor: selectedFilter === cat.id ? 'var(--text-primary)' : 'var(--bg-pill)',
                  color: selectedFilter === cat.id ? 'var(--bg-page)' : 'var(--text-secondary)',
                  fontWeight: selectedFilter === cat.id ? 600 : 400,
                  cursor: 'pointer',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <hr className={styles.sectionDivider} />

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project: ProjectItem) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.featured && (
                    <span
                      className={styles.skillChip}
                      style={{
                        backgroundColor: 'rgba(2, 132, 199, 0.1)',
                        color: 'var(--accent-blue)',
                        border: '1px solid rgba(2, 132, 199, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        fontSize: '0.65rem',
                      }}
                    >
                      <Sparkles size={10} />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLinkBtn}
                      title="View GitHub Repository"
                      onClick={() => showToast(`Opening repository for ${project.title}`)}
                    >
                      <GithubIcon size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLinkBtn}
                      title="Open Live Preview"
                      onClick={() => showToast(`Opening live demo of ${project.title}`)}
                    >
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.projectPeriod}>{project.period}</div>
              <div className={styles.projectTagline}>{project.tagline}</div>
              <p className={styles.projectDescription}>{project.description}</p>

              {project.features && project.features.length > 0 && (
                <div className={styles.projectFeatureList}>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className={styles.projectFeatureItem}>
                      <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.timelineTags}>
                {project.tools.map((tool, tIdx) => (
                  <span key={tIdx} className={styles.skillChip}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              No projects match "{searchQuery}". Try searching with a different term!
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '3.5rem' }}>
          <Footer onShowToast={showToast} />
        </div>
      </div>

      {/* Command Palette */}
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

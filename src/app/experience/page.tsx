'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/portfolio.module.css';
import Navbar from '@/components/Navbar';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { portfolioData, ExperienceItem } from '@/data/portfolioData';
import { ArrowLeft, Terminal, ChevronDown, ChevronUp, MapPin, CheckCircle2, Briefcase } from 'lucide-react';

export default function ExperiencePage() {
  const { experiences } = portfolioData;
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  // All experiences open by default on the dedicated page
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    sewa: true,
    gloomweb: true,
    'big-best-mart': true,
    chegg: true,
    beyondexams: true,
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredExperiences = experiences.filter((item: ExperienceItem) => {
    if (filterType === 'all') return true;
    if (filterType === 'internship') return item.type.toLowerCase().includes('intern');
    if (filterType === 'remote') return item.location.toLowerCase().includes('remote') || item.type.toLowerCase().includes('remote');
    if (filterType === 'ai') return item.skills.some(s => s.toLowerCase().includes('ai') || s.toLowerCase().includes('machine learning') || s.toLowerCase().includes('python'));
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
        <div style={{ marginBottom: '2rem' }}>
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
              <Briefcase size={15} />
            </div>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Work Experience
            </h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
            A complete chronological timeline of my professional roles, engineering internships, and subject-matter contributions across AI solutions and full-stack web architectures.
          </p>

          {/* Filter Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
            {[
              { id: 'all', label: 'All Roles (5)' },
              { id: 'internship', label: 'Internships' },
              { id: 'remote', label: 'Remote / Global' },
              { id: 'ai', label: 'AI & Data Systems' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilterType(tab.id);
                  showToast(`Filter: ${tab.label}`);
                }}
                className={styles.skillChip}
                style={{
                  backgroundColor: filterType === tab.id ? 'var(--text-primary)' : 'var(--bg-pill)',
                  color: filterType === tab.id ? 'var(--bg-page)' : 'var(--text-secondary)',
                  fontWeight: filterType === tab.id ? 600 : 400,
                  cursor: 'pointer',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <hr className={styles.sectionDivider} />

        {/* Full Experience Timeline */}
        <div className={styles.timelineList}>
          {filteredExperiences.map((item: ExperienceItem) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <div key={item.id} className={styles.timelineItem}>
                <span className={styles.timelineDot} />

                {/* Company & Period */}
                <div className={styles.timelineCompanyTitle}>
                  <span style={{ fontSize: '1rem' }}>{item.company}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-muted)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                    {item.period}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={styles.timelineCard}
                  onClick={() => toggleExpand(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                >
                  <div className={styles.timelineCardHeader}>
                    <div className={styles.timelineCardLeft}>
                      <div className={styles.timelineCardIcon}>
                        <Terminal size={14} />
                      </div>

                      <div>
                        <div className={styles.timelineRoleTitle} style={{ fontSize: '0.925rem' }}>
                          {item.role}
                        </div>
                        <div className={styles.timelineMeta}>
                          <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>{item.type}</span>
                          <span className={styles.timelineMetaSeparator}>•</span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <MapPin size={11} /> {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      className={styles.projectLinkBtn}
                      style={{ width: 24, height: 24 }}
                      aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* Skills tags */}
                  <div className={styles.timelineTags}>
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.skillChip}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expanded description bullet points */}
                  {isExpanded && (
                    <div className={styles.timelineCardDetails}>
                      {item.description.map((desc, dIdx) => (
                        <div key={dIdx} className={styles.timelineBulletItem}>
                          <span style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>—</span>
                          <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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

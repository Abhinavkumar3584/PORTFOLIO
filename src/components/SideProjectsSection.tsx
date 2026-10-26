'use client';

import React from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData, FreelanceItem } from '@/data/portfolioData';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface SideProjectsSectionProps {
  onShowToast: (msg: string) => void;
}

export default function SideProjectsSection({ onShowToast }: SideProjectsSectionProps) {
  const { freelanceAndSideProjects } = portfolioData;

  return (
    <section id="side-projects" style={{ marginTop: '2.5rem' }}>
      <div className={styles.sectionHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <h2 className={styles.sectionTitle}>Side Projects &amp; Freelancing</h2>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {freelanceAndSideProjects.map((item: FreelanceItem) => (
          <div key={item.id} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <div className={styles.projectTitleRow}>
                <h3 className={styles.projectTitle}>{item.title}</h3>
                {item.featured && (
                  <span
                    className={styles.skillChip}
                    style={{
                      backgroundColor: 'var(--accent-green-bg)',
                      color: 'var(--accent-green)',
                      border: '1px solid var(--accent-green-border)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                    }}
                  >
                    <span className="pulsing-dot" style={{ width: 6, height: 6 }} />
                    <span>{item.status}</span>
                  </span>
                )}
              </div>

              <div className={styles.projectLinks}>
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLinkBtn}
                    title="View GitHub Repository"
                    onClick={() => onShowToast(`Opening repository for ${item.title}`)}
                  >
                    <GithubIcon size={14} />
                  </a>
                )}
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLinkBtn}
                    title="Open Live Preview"
                    onClick={() => onShowToast(`Opening live demo for ${item.title}`)}
                  >
                    <ExternalLink size={13} color="var(--accent-green)" />
                  </a>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <span className={styles.projectPeriod}>{item.period}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--border-color)' }}>•</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                {item.clientOrType}
              </span>
            </div>

            <p className={styles.projectDescription}>{item.description}</p>

            {item.deliverables && item.deliverables.length > 0 && (
              <div className={styles.projectFeatureList}>
                {item.deliverables.map((deliv, idx) => (
                  <div key={idx} className={styles.projectFeatureItem}>
                    <CheckCircle2 size={12} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.timelineTags}>
              {item.tools.map((tool, tIdx) => (
                <span key={tIdx} className={styles.skillChip}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

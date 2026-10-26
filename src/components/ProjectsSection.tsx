'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/portfolio.module.css';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface ProjectsSectionProps {
  onShowToast: (msg: string) => void;
  limit?: number;
  showViewAll?: boolean;
}

export default function ProjectsSection({ onShowToast, limit, showViewAll = true }: ProjectsSectionProps) {
  const { projects } = portfolioData;
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className={`${styles.panel} ${styles.screenLineBefore} ${styles.screenLineAfter}`}>
      <header className={`${styles.panelHeader} ${styles.screenLineAfter}`}>
        <h2 className={styles.panelTitle}>Projects</h2>
      </header>

      <div className={styles.panelBody}>
        <div className={styles.projectsGrid}>
          {displayedProjects.map((project: ProjectItem) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <div className={styles.projectTitleRow}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.featured && (
                    <span
                      className={styles.skillChip}
                      style={{
                        backgroundColor: 'var(--accent-red-bg)',
                        color: 'var(--accent-red)',
                        border: '1px solid var(--accent-red-border)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                      }}
                    >
                      <Sparkles size={10} color="var(--accent-red)" />
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
                      onClick={() => onShowToast(`Opening repository for ${project.title}`)}
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
                      onClick={() => onShowToast(`Opening live demo of ${project.title}`)}
                    >
                      <ExternalLink size={13} color="var(--accent-green)" />
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
        </div>

        {showViewAll && limit && projects.length > limit && (
          <div className={styles.seeMoreRow}>
            <Link href="/projects" className={styles.seeMoreBtn}>
              <span>View All Projects</span>
              <span className={styles.seeMoreBadge}>{projects.length}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

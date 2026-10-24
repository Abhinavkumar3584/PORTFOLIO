'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/portfolio.module.css';
import { portfolioData, ExperienceItem } from '@/data/portfolioData';
import { Terminal, ChevronDown, ChevronUp, MapPin, ArrowRight } from 'lucide-react';

interface ExperienceSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ExperienceSection({ limit, showViewAll = true }: ExperienceSectionProps) {
  const { experiences } = portfolioData;
  const displayedExperiences = limit ? experiences.slice(0, limit) : experiences;

  // Default first experience expanded
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    sewa: true,
    gloomweb: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" style={{ marginTop: '2.25rem' }}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience</h2>
      </div>

      <div className={styles.timelineList}>
        {displayedExperiences.map((item: ExperienceItem) => {
          const isExpanded = !!expandedIds[item.id];

          return (
            <div key={item.id} className={styles.timelineItem}>
              {/* Timeline marker bullet */}
              <span className={styles.timelineDot} />

              {/* Company Title */}
              <div className={styles.timelineCompanyTitle}>
                <span>{item.company}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-muted)' }}>
                  {item.period}
                </span>
              </div>

              {/* Subcard */}
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
                      <div className={styles.timelineRoleTitle}>{item.role}</div>
                      <div className={styles.timelineMeta}>
                        <span>{item.type}</span>
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

                {/* Skill badges */}
                <div className={styles.timelineTags}>
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className={styles.skillChip}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Expanded bullet details */}
                {isExpanded && (
                  <div className={styles.timelineCardDetails}>
                    {item.description.map((desc, dIdx) => (
                      <div key={dIdx} className={styles.timelineBulletItem}>
                        <span style={{ color: 'var(--text-muted)' }}>—</span>
                        <span>{desc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showViewAll && limit && experiences.length > limit && (
        <div className={styles.seeMoreRow}>
          <Link href="/experience" className={styles.seeMoreBtn}>
            <span>View All Experiences</span>
            <span className={styles.seeMoreBadge}>{experiences.length}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </section>
  );
}

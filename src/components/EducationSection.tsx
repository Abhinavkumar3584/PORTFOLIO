'use client';

import React, { useState } from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData, EducationItem } from '@/data/portfolioData';
import { GraduationCap, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function EducationSection() {
  const { education } = portfolioData;
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'cic-du': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="education" style={{ marginTop: '2.5rem' }}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Education</h2>
      </div>

      <div className={styles.timelineList}>
        {education.map((item: EducationItem) => {
          const isExpanded = !!expandedIds[item.id];

          return (
            <div key={item.id} className={styles.timelineItem}>
              {/* Timeline marker bullet */}
              <span className={styles.timelineDot} />

              {/* Institution Title */}
              <div className={styles.timelineCompanyTitle}>
                <span>{item.institution}</span>
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
                      <GraduationCap size={15} />
                    </div>

                    <div>
                      <div className={styles.timelineRoleTitle}>
                        {item.degree} {item.field ? `— ${item.field}` : ''}
                      </div>
                      <div className={styles.timelineMeta}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <MapPin size={11} /> {item.location}
                        </span>
                        {item.grade && (
                          <>
                            <span className={styles.timelineMetaSeparator}>•</span>
                            <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{item.grade}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {item.description && (
                    <button
                      className={styles.projectLinkBtn}
                      style={{ width: 24, height: 24 }}
                      aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  )}
                </div>

                {isExpanded && item.description && (
                  <div className={styles.timelineCardDetails}>
                    <div className={styles.timelineBulletItem}>
                      <span style={{ color: 'var(--text-muted)' }}>—</span>
                      <span>{item.description}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

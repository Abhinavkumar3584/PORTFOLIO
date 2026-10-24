'use client';

import React, { useState } from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData } from '@/data/portfolioData';
import { Award, Shield, Layers, CheckCircle2, Trophy, Star } from 'lucide-react';

export default function MoreSection() {
  const { achievements, ncc, skills, certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState<'achievements' | 'ncc' | 'skills' | 'certifications'>('achievements');

  return (
    <section id="achievements" style={{ marginTop: '2.5rem' }}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <Trophy size={18} />
          <span>Honors, NCC & Skills</span>
        </h2>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {[
          { id: 'achievements', label: 'Achievements', icon: <Award size={13} /> },
          { id: 'ncc', label: 'NCC Leadership', icon: <Shield size={13} /> },
          { id: 'skills', label: 'Skills Matrix', icon: <Layers size={13} /> },
          { id: 'certifications', label: 'Certifications', icon: <Star size={13} /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={styles.skillChip}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '8px',
              backgroundColor: activeTab === tab.id ? 'var(--text-primary)' : 'var(--bg-pill)',
              color: activeTab === tab.id ? 'var(--bg-page)' : 'var(--text-secondary)',
              fontWeight: activeTab === tab.id ? 600 : 450,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.timelineCard} style={{ cursor: 'default' }}>
        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {achievements.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <span style={{ color: 'var(--accent-blue)', marginTop: '2px' }}>
                  <CheckCircle2 size={15} />
                </span>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NCC Tab */}
        {activeTab === 'ncc' && (
          <div id="ncc" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  National Cadet Corps (NCC) — Rank: {ncc.rank}
                </h4>
                <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                  {ncc.period} • {ncc.location}
                </p>
              </div>
              <span
                className={styles.skillChip}
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', border: '1px solid rgba(16, 185, 129, 0.25)', fontWeight: 600 }}
              >
                Grade &apos;A&apos; Distinction
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
              {ncc.highlights.map((point, idx) => (
                <div key={idx} className={styles.timelineBulletItem}>
                  <span style={{ color: 'var(--accent-green)' }}>✦</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Matrix Tab */}
        {activeTab === 'skills' && (
          <div id="skills" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.45rem' }}>
                Programming Languages
              </div>
              <div className={styles.timelineTags}>
                {skills.languages.map((item, idx) => (
                  <span key={idx} className={styles.skillChip}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.45rem' }}>
                Frameworks & Libraries
              </div>
              <div className={styles.timelineTags}>
                {skills.frameworks.map((item, idx) => (
                  <span key={idx} className={styles.skillChip}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.45rem' }}>
                Cloud, Databases & Vector Stores
              </div>
              <div className={styles.timelineTags}>
                {skills.cloudDatabases.map((item, idx) => (
                  <span key={idx} className={styles.skillChip}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.45rem' }}>
                AI, Agents & Automation
              </div>
              <div className={styles.timelineTags}>
                {skills.aiAutomation.map((item, idx) => (
                  <span key={idx} className={styles.skillChip}>{item}</span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.45rem' }}>
                Developer Tools & Systems
              </div>
              <div className={styles.timelineTags}>
                {skills.toolsPlatforms.map((item, idx) => (
                  <span key={idx} className={styles.skillChip}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {certifications.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-geist-mono), monospace' }}>
                    {item.issuer} • {item.date}
                  </div>
                </div>

                {item.grade && (
                  <span className={styles.skillChip} style={{ color: 'var(--accent-blue)' }}>
                    {item.grade}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

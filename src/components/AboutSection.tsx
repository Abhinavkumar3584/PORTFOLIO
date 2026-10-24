'use client';

import React from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData } from '@/data/portfolioData';
import PixelDriveShowcase from '@/components/PixelDriveShowcase';

interface AboutSectionProps {
  onShowToast: (msg: string) => void;
}

export default function AboutSection({ onShowToast }: AboutSectionProps) {
  const { profile } = portfolioData;

  return (
    <section id="about" style={{ marginTop: '1.25rem' }}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>About</h2>
      </div>

      <ul className={styles.aboutList}>
        {profile.aboutBullets.map((bullet, idx) => (
          <li key={idx} className={styles.aboutItem}>
            <span className={styles.aboutBullet}>—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Retro Pixel Car & Scenery Driving Showcase */}
      <PixelDriveShowcase onShowToast={onShowToast} />
    </section>
  );
}

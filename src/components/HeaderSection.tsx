'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/portfolio.module.css';
import { portfolioData } from '@/data/portfolioData';
import { Sparkles, Check, Heart } from 'lucide-react';

interface HeaderSectionProps {
  onShowToast: (msg: string) => void;
}

export default function HeaderSection({ onShowToast }: HeaderSectionProps) {
  const { profile } = portfolioData;
  const [viewCount, setViewCount] = useState<number>(profile.viewsCount || 24732);

  const handleIncrementViews = () => {
    setViewCount((prev: number) => prev + 1);
    onShowToast("Thanks for visiting my portfolio! ❤️");
  };

  return (
    <header id="home" className={styles.profileCard}>
      <div className={styles.profileHeaderRow}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          {/* Clean Single Avatar Frame */}
          <div className={styles.profileAvatarContainer}>
            <div className={styles.avatarFrame}>
              <Image
                src="/profile1.jpeg"
                alt={profile.name}
                width={140}
                height={140}
                className={styles.profileAvatar}
                priority
              />
            </div>
          </div>

          {/* Profile metadata */}
          <div className={styles.profileInfo} style={{ paddingTop: '0.25rem' }}>
            <div className={styles.profileSparkleRow}>
              <Sparkles size={12} color="#f59e0b" />
              <span>DEVELOPER &amp; BUILDER</span>
            </div>

            <div className={styles.profileNameRow}>
              <h1 className={styles.profileName}>{profile.name}</h1>
              {/* Verified Blue Badge */}
              <span className={styles.verifiedBadge} title="Verified Developer">
                <Check size={11} strokeWidth={3} />
              </span>
            </div>

            <p className={styles.profileSubtitle}>
              {profile.age} • Engineer & Full-Stack AI Developer
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.2rem 0.55rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent-green-bg)',
                border: '1px solid var(--accent-green-border)',
                fontSize: '0.75rem',
                color: 'var(--accent-green)',
                fontWeight: 500,
                marginTop: '0.35rem',
              }}
            >
              <span className="pulsing-dot" style={{ width: 6, height: 6 }} />
              <span>{profile.statusText}</span>
            </div>
          </div>
        </div>

        {/* View counter badge with red heart accent */}
        <button
          onClick={handleIncrementViews}
          className={styles.visitorCountBadge}
          title="Click to appreciate!"
          aria-label="View count"
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <Heart size={12} fill="var(--accent-red)" color="var(--accent-red)" />
          <span>{viewCount.toLocaleString()}</span>
        </button>
      </div>
    </header>
  );
}

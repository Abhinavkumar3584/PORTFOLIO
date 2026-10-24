'use client';

import React, { useMemo } from 'react';
import styles from '@/styles/portfolio.module.css';
import { GitCommit } from 'lucide-react';
import ActivityTerrain from '@/components/kokonutui/activity-terrain';

interface GitHubActivitySectionProps {
  onShowToast: (msg: string) => void;
}

export default function GitHubActivitySection({ onShowToast }: GitHubActivitySectionProps) {
  // Generate realistic commit history data for 28 weeks
  const data = useMemo(() => {
    let seed = 42;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const counts: number[] = [];
    const totalDays = 28 * 7;
    for (let i = 0; i < totalDays; i++) {
      const weekend = i % 7 >= 5;
      const season = 0.55 + 0.45 * Math.sin(i / 22);
      const streak = random() > 0.8 ? 2.4 : 1;
      const quiet = random() < (weekend ? 0.45 : 0.12);
      counts.push(
        quiet ? 0 : Math.round((weekend ? 3 : 10) * season * streak * random())
      );
    }
    return counts;
  }, []);

  return (
    <section id="github-activity" style={{ marginTop: '2.25rem' }}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span>GitHub Activity</span>
        </h2>
        <a
          href="https://github.com/abhikumar3584"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.775rem',
            color: 'var(--accent-blue)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: 'var(--font-geist-mono), monospace'
          }}
          onClick={() => onShowToast("Visiting GitHub profile @abhikumar3584")}
        >
          <GitCommit size={13} />
          <span>@abhikumar3584</span>
        </a>
      </div>

      {/* 3D KokonutUI Activity Terrain Component */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
        <ActivityTerrain
          data={data}
          endDate="2026-10-23"
          title="Interactive 3D Contributions"
          defaultFlat={false}
          className="w-full"
        />
      </div>
    </section>
  );
}

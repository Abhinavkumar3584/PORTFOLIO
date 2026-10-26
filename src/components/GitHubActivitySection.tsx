'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/portfolio.module.css';
import { GitCommit } from 'lucide-react';
import ActivityTerrain from '@/components/kokonutui/activity-terrain';

interface GitHubActivitySectionProps {
  onShowToast: (msg: string) => void;
}

function generateFallbackData(): number[] {
  const counts: number[] = [];
  const totalDays = 28 * 7;
  let s = 42;
  for (let i = 0; i < totalDays; i++) {
    s = (s * 9301 + 49297) % 233280;
    const r = s / 233280;
    const weekend = i % 7 >= 5;
    const season = 0.55 + 0.45 * Math.sin(i / 22);
    const streak = r > 0.8 ? 2.4 : 1;
    const quiet = r < (weekend ? 0.45 : 0.12);
    counts.push(quiet ? 0 : Math.round((weekend ? 3 : 10) * season * streak * r));
  }
  return counts;
}

const FALLBACK_DATA = generateFallbackData();

export default function GitHubActivitySection({ onShowToast }: GitHubActivitySectionProps) {
  const [data, setData] = useState<number[]>(FALLBACK_DATA);
  const [endDate, setEndDate] = useState<string>(() => new Date().toISOString().slice(0, 10));
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/github-contributions');
        if (!res.ok) throw new Error('API failed');

        const json = await res.json();
        if (isMounted && json.success && Array.isArray(json.contributions) && json.contributions.length > 0) {
          // Slice the last 28 weeks (196 days) for optimal 3D terrain density
          const recentDays = json.contributions.slice(-196);
          const counts = recentDays.map((c: { count: number }) => c.count);
          const lastDate = recentDays[recentDays.length - 1]?.date || new Date().toISOString().slice(0, 10);

          setData(counts);
          setEndDate(lastDate);
          setTotalContributions(json.total);
          setIsLiveSynced(true);
        }
      } catch (err) {
        console.warn('Could not load live GitHub activity, using fallback data:', err);
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github-activity" style={{ marginTop: '2.25rem' }}>
      <div className={styles.sectionHeader}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <h2 className={styles.sectionTitle}>
            <span>GitHub Activity</span>
          </h2>

          {/* Live contribution count badge */}
          {totalContributions !== null && (
            <span
              className={styles.skillChip}
              style={{
                backgroundColor: 'var(--accent-green-bg)',
                color: 'var(--accent-green)',
                border: '1px solid var(--accent-green-border)',
                fontSize: '0.725rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 500,
                padding: '0.2rem 0.55rem',
                borderRadius: '9999px',
              }}
            >
              <span className="pulsing-dot" style={{ width: 6, height: 6 }} />
              <span>{totalContributions} contributions in the last year</span>
            </span>
          )}
        </div>

        <a
          href="https://github.com/Abhinavkumar3584"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.775rem',
            color: 'var(--accent-blue)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: 'var(--font-geist-mono), monospace',
          }}
          onClick={() => onShowToast("Visiting GitHub profile @Abhinavkumar3584")}
        >
          <GitCommit size={13} />
          <span>@Abhinavkumar3584</span>
        </a>
      </div>

      {/* 3D KokonutUI Activity Terrain Component */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
        <ActivityTerrain
          data={data}
          endDate={endDate}
          title={isLiveSynced ? `GitHub Contributions (${totalContributions ?? ''})` : 'Interactive 3D Contributions'}
          defaultFlat={false}
          className="w-full"
        />
      </div>
    </section>
  );
}

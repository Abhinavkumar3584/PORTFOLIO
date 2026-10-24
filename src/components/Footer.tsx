'use client';

import React, { useState } from 'react';
import styles from '@/styles/portfolio.module.css';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export default function Footer({ onShowToast }: FooterProps) {
  const [catState, setCatState] = useState<'sleeping' | 'awake' | 'purring'>('sleeping');
  const [purrCount, setPurrCount] = useState(0);

  const handleCatClick = () => {
    if (catState === 'sleeping') {
      setCatState('awake');
      onShowToast("🐱 Cat woke up! *purr*");
    } else if (catState === 'awake') {
      setCatState('purring');
      setPurrCount(prev => prev + 1);
      onShowToast("❤️ Cat is enjoying the head pats!");
    } else {
      setCatState('sleeping');
      onShowToast("😴 Cat went back to sleep. Zzz...");
    }
  };

  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerCopyright}>
            © 2026 Abhinav Kumar
          </div>
          <div className={styles.footerSubtext}>
            Built with Next.js, TypeScript &amp; Coffee
          </div>
        </div>

        {/* Sleeping / Interactive Cat Illustration */}
        <div
          className={styles.footerCatWrapper}
          onClick={handleCatClick}
          title="Click to interact with the cat!"
          role="button"
          tabIndex={0}
        >
          {catState !== 'sleeping' && (
            <div className={styles.catPurrBubble}>
              {catState === 'awake' ? 'Meow! 🐾' : `Purr! x${purrCount} ❤️`}
            </div>
          )}

          {catState === 'sleeping' ? (
            /* Sleeping Cat SVG */
            <svg width="48" height="34" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Cat Body curled up */}
              <ellipse cx="30" cy="25" rx="22" ry="14" fill="var(--bg-pill)" stroke="var(--text-primary)" strokeWidth="2.5" />
              {/* Cat Head */}
              <circle cx="44" cy="22" r="11" fill="var(--bg-pill)" stroke="var(--text-primary)" strokeWidth="2.5" />
              {/* Ears */}
              <polygon points="41,13 47,8 48,15" fill="var(--text-primary)" />
              <polygon points="49,15 54,9 54,18" fill="var(--text-primary)" />
              {/* Sleeping Eyes (curved lines) */}
              <path d="M43 23 Q45 25 47 23" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M49 23 Q51 25 53 23" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Tail wrapped */}
              <path d="M12 28 C6 28 6 18 14 18 C20 18 20 25 15 25" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Zzz text */}
              <text x="4" y="12" fill="var(--text-muted)" fontSize="9" fontFamily="monospace" fontWeight="bold">z</text>
              <text x="10" y="8" fill="var(--text-muted)" fontSize="11" fontFamily="monospace" fontWeight="bold">Z</text>
            </svg>
          ) : (
            /* Awake Cat SVG */
            <svg width="48" height="34" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="28" cy="25" rx="20" ry="13" fill="var(--bg-pill)" stroke="var(--text-primary)" strokeWidth="2.5" />
              <circle cx="44" cy="20" r="11" fill="var(--bg-pill)" stroke="var(--text-primary)" strokeWidth="2.5" />
              <polygon points="40,11 46,6 47,13" fill="var(--text-primary)" />
              <polygon points="48,13 53,7 54,16" fill="var(--text-primary)" />
              {/* Big Curious Eyes */}
              <circle cx="43" cy="20" r="2" fill="var(--text-primary)" />
              <circle cx="49" cy="20" r="2" fill="var(--text-primary)" />
              {/* Nose & whiskers */}
              <polygon points="45.5,23 46.5,23 46,24" fill="var(--accent-blue)" />
              <path d="M10 25 C7 18 12 12 18 16" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          )}
        </div>
      </footer>

      {/* Bottom Dot Grid Matrix Banner */}
      <div className={styles.dotGridFooterBanner} />
    </>
  );
}

'use client';

import React from 'react';
import styles from '@/styles/portfolio.module.css';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export default function Footer({ onShowToast }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onShowToast("Scrolled back to top!");
  };

  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <div className={styles.footerCopyright}>
            © 2026 Abhinav Kumar
          </div>
          <div className={styles.footerSubtext}>
            Built with Next.js, TypeScript &amp; Innovation
          </div>
        </div>

        {/* Right Action: Available Status + Back to Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.25rem 0.6rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent-green-bg)',
              border: '1px solid var(--accent-green-border)',
              fontSize: '0.75rem',
              color: 'var(--accent-green)',
              fontWeight: 500,
            }}
          >
            <span className="pulsing-dot" style={{ width: 6, height: 6 }} />
            <span>Available for work</span>
          </div>

          <button
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </footer>

      {/* Bottom Dot Grid Matrix Banner */}
      <div className={styles.dotGridFooterBanner} />
    </>
  );
}

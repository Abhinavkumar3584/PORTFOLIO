'use client';

import React from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData } from '@/data/portfolioData';

export default function QuoteSection() {
  const { quote } = portfolioData.profile;

  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteIcon}>
        ❝
      </div>

      <blockquote className={styles.quoteText}>
        &ldquo;{quote.text}&rdquo;
      </blockquote>

      <div className={styles.quoteAuthor}>
        {quote.author}
      </div>
    </section>
  );
}

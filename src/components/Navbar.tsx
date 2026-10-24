'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/portfolio.module.css';
import { Search, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onShowToast: (msg: string) => void;
}

export default function Navbar({ onOpenSearch, onShowToast }: NavbarProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Read theme on mount
    const currentTheme = (document.documentElement.getAttribute('data-theme') || 'light') as 'light' | 'dark';
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('theme', nextTheme);
    onShowToast(`Switched to ${nextTheme} mode`);
  };

  return (
    <nav className={styles.navbarSticky}>
      <div className={styles.navbarContent}>
        {/* Logo / Monogram */}
        <Link href="/" className={styles.navLogo} aria-label="Abhinav Kumar - Home">
          <span>AK</span>
        </Link>

        {/* Center Nav Links */}
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/experience" className={styles.navLink}>Experience</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/#side-projects" className={styles.navLink}>Side Work / Freelancing</Link>
        </div>

        {/* Right Action Buttons */}
        <div className={styles.navRightActions}>
          <button
            onClick={onOpenSearch}
            className={styles.searchTriggerBtn}
            title="Search command palette (Ctrl+K)"
            aria-label="Search"
          >
            <Search size={13} />
            <span className={styles.searchKbd}>Ctrl K</span>
          </button>

          <button
            onClick={toggleTheme}
            className={styles.iconBtn}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

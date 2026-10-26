'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/portfolio.module.css';
import { Search, Sun, Moon, Menu, X, Home as HomeIcon, Briefcase, FolderGit2, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onShowToast: (msg: string) => void;
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

function getSnapshot(): 'light' | 'dark' {
  return (document.documentElement.getAttribute('data-theme') || 'light') as 'light' | 'dark';
}

function getServerSnapshot(): 'light' | 'dark' {
  return 'light';
}

export default function Navbar({ onOpenSearch, onShowToast }: NavbarProps) {
  const theme = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('theme', nextTheme);
    onShowToast(`Switched to ${nextTheme} mode`);
  };

  const navItems = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Experience', href: '/experience', icon: Briefcase },
    { label: 'Projects', href: '/projects', icon: FolderGit2 },
    { label: 'Side Work / Freelancing', href: '/#side-projects', icon: Sparkles },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname?.startsWith(href);
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav ref={navRef} className={styles.navbarFloating} aria-label="Main Navigation">
        {/* Logo / Monogram */}
        <Link
          href="/"
          className={styles.navLogo}
          aria-label="Abhinav Kumar - Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span>AK</span>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <div className={styles.navLinks}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className={styles.navRightActions}>
          <button
            onClick={onOpenSearch}
            className={styles.searchTriggerBtn}
            title="Search command palette (Ctrl+K)"
            aria-label="Search command palette"
          >
            <Search size={14} />
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

          {/* Mobile Menu Hamburger / Close Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className={styles.mobileMenuBtn}
            title={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Card */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenuCard} role="menu">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileMenuItem} ${active ? styles.mobileMenuItemActive : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                  <div className={styles.mobileMenuIconWrapper}>
                    <Icon size={15} />
                  </div>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}

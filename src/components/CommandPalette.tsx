'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/portfolio.module.css';
import { Search, Hash, FileText, Mail, ExternalLink, X, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { portfolioData } from '@/data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Projects';
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onShowToast }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const items: CommandItem[] = [
    // Navigation
    {
      id: 'nav-about',
      title: 'Go to About',
      category: 'Navigation',
      icon: <Hash size={14} />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-experience',
      title: 'Go to Experience',
      category: 'Navigation',
      icon: <Hash size={14} />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-projects',
      title: 'Go to Projects',
      category: 'Navigation',
      icon: <Hash size={14} />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-education',
      title: 'Go to Education',
      category: 'Navigation',
      icon: <Hash size={14} />,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-achievements',
      title: 'Go to Achievements & Skills',
      category: 'Navigation',
      icon: <Hash size={14} />,
      action: () => {
        document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    // Actions
    {
      id: 'act-copy-email',
      title: 'Copy Email Address (abhikumar3584@gmail.com)',
      category: 'Actions',
      icon: <Mail size={14} />,
      action: () => {
        navigator.clipboard.writeText('abhikumar3584@gmail.com');
        onShowToast('Copied abhikumar3584@gmail.com to clipboard!');
        onClose();
      }
    },
    {
      id: 'act-resume',
      title: 'Download Resume PDF',
      category: 'Actions',
      icon: <FileText size={14} />,
      action: () => {
        window.open('/resume.pdf', '_blank');
        onShowToast('Downloading resume...');
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile (@abhikumar3584)',
      category: 'Actions',
      icon: <GithubIcon size={14} />,
      action: () => {
        window.open('https://github.com/abhikumar3584', '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Actions',
      icon: <LinkedinIcon size={14} />,
      action: () => {
        window.open('https://linkedin.com/in/abhikumar3584', '_blank');
        onClose();
      }
    },
    // Projects
    ...portfolioData.projects.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title} (${p.tools.slice(0, 3).join(', ')})`,
      category: 'Projects' as const,
      icon: <ExternalLink size={14} />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }))
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalInputRow}>
          <Search size={16} color="var(--text-muted)" />
          <input
            ref={inputRef}
            type="text"
            className={styles.modalInput}
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
          />
          <button onClick={onClose} style={{ color: 'var(--text-muted)', display: 'flex' }}>
            <X size={16} />
          </button>
        </div>

        <div className={styles.modalResultsList}>
          {filteredItems.length === 0 ? (
            <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.modalResultItem} ${idx === selectedIndex ? styles.modalResultItemActive : ''}`}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className={styles.modalResultItemLeft}>
                  <span style={{ color: 'var(--text-muted)' }}>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <ArrowRight size={13} style={{ opacity: idx === selectedIndex ? 1 : 0.2 }} />
              </div>
            ))
          )}
        </div>

        <div className={styles.modalFooter}>
          <span>Navigation: <kbd style={{ padding: '1px 4px', border: '1px solid var(--border-color)', borderRadius: '3px' }}>↑</kbd> <kbd style={{ padding: '1px 4px', border: '1px solid var(--border-color)', borderRadius: '3px' }}>↓</kbd></span>
          <span>Select: <kbd style={{ padding: '1px 4px', border: '1px solid var(--border-color)', borderRadius: '3px' }}>↵</kbd></span>
          <span>Close: <kbd style={{ padding: '1px 4px', border: '1px solid var(--border-color)', borderRadius: '3px' }}>Esc</kbd></span>
        </div>
      </div>
    </div>
  );
}

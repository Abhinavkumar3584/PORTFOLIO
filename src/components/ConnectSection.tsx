'use client';

import React from 'react';
import styles from '@/styles/portfolio.module.css';
import { portfolioData } from '@/data/portfolioData';
import { Mail, FileText, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

interface ConnectSectionProps {
  onShowToast: (msg: string) => void;
}

export default function ConnectSection({ onShowToast }: ConnectSectionProps) {
  const { socials, contactInfo } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GithubIcon size={16} />;
      case 'linkedin':
        return <LinkedinIcon size={16} />;
      case 'mail':
        return <Mail size={16} />;
      case 'resume':
        return <FileText size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  const getTooltip = (name: string) => {
    switch (name) {
      case 'Mail':
        return 'Copy Email';
      case 'Resume':
        return 'Download Resume';
      default:
        return name;
    }
  };

  const handleAction = (item: typeof socials[0], e: React.MouseEvent) => {
    if (item.name === 'Mail' && item.value) {
      e.preventDefault();
      navigator.clipboard.writeText(item.value);
      onShowToast(`Copied ${item.value} to clipboard!`);
    } else if (item.isDownload) {
      onShowToast("Downloading resume PDF...");
    }
  };

  return (
    <aside className={styles.stickySocialDock} aria-label="Social connections">
      {socials.map((item) => (
        <div key={item.name} className={styles.dockItemWrapper}>
          <a
            href={item.url}
            target={item.url.startsWith('http') || item.url.endsWith('.pdf') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={styles.dockIconBtn}
            onClick={(e) => handleAction(item, e)}
            download={item.isDownload ? "Abhinav_Kumar_Resume.pdf" : undefined}
            aria-label={item.name}
          >
            {getIcon(item.icon)}
          </a>
          <span className={styles.dockTooltip}>
            {getTooltip(item.name)}
          </span>
        </div>
      ))}

      {/* Quick Phone Call Icon */}
      <div className={styles.dockItemWrapper}>
        <a
          href={`tel:${contactInfo.phone}`}
          className={styles.dockIconBtn}
          onClick={() => onShowToast(`Contact number: ${contactInfo.phone}`)}
          aria-label="Call"
        >
          <Phone size={15} />
        </a>
        <span className={styles.dockTooltip}>Call</span>
      </div>
    </aside>
  );
}

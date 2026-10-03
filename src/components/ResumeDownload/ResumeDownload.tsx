import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Code2, Download, Settings } from 'lucide-react';
import { resumeOptions } from '../../data/site';
import styles from './ResumeDownload.module.css';

const icons = {
  automation: Settings,
  software: Code2,
};

type ResumeDownloadProps = {
  triggerClassName: string;
  label?: string;
  align?: 'left' | 'right' | 'center';
  variant?: 'floating' | 'inline';
  iconSize?: number;
  onSelect?: () => void;
};

const alignClass = {
  left: 'menuLeft',
  right: 'menuRight',
  center: 'menuCenter',
} as const;

export function ResumeDownload({
  triggerClassName,
  label = 'Download Resume',
  align = 'right',
  variant = 'floating',
  iconSize = 15,
  onSelect,
}: ResumeDownloadProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div
      className={`${styles.root} ${variant === 'inline' ? styles.inline : ''}`}
      ref={rootRef}
    >
      <button
        type="button"
        ref={triggerRef}
        className={triggerClassName}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <Download size={iconSize} strokeWidth={2.25} aria-hidden="true" />
        <ChevronDown
          size={iconSize}
          strokeWidth={2.25}
          aria-hidden="true"
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
        />
      </button>

      {open && (
        <div
          className={`${styles.menu} ${
            variant === 'inline' ? styles.menuInline : styles[alignClass[align]]
          }`}
          role="menu"
        >
          {resumeOptions.map((option) => {
            const Icon = icons[option.icon];
            return (
              <a
                key={option.id}
                className={styles.menuItem}
                href={option.href}
                download
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  onSelect?.();
                }}
              >
                <span className={styles.menuItemIcon} aria-hidden="true">
                  <Icon size={16} strokeWidth={2.25} />
                </span>
                <span className={styles.menuItemText}>
                  <span className={styles.menuItemLabel}>{option.label}</span>
                  <span className={styles.menuItemDesc}>{option.description}</span>
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

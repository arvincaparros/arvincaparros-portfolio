import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import styles from './Lightbox.module.css';

export function Lightbox({
  image,
  imageAlt,
  onClose,
}: {
  image: string;
  imageAlt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      onClick={onClose}
    >
      <button type="button" className={styles.closeButton} aria-label="Close preview" onClick={onClose}>
        <X size={22} strokeWidth={2.5} aria-hidden="true" />
      </button>
      <img
        src={image}
        alt={imageAlt}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

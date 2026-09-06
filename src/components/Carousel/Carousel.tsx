import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectSlide } from '../../types';
import { Lightbox } from '../Lightbox/Lightbox';
import styles from './Carousel.module.css';

const AUTO_ADVANCE_MS = 5000;

export function Carousel({ slides }: { slides: ProjectSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <div className={styles.root}>
      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button
          type="button"
          className={styles.slideButton}
          aria-label={`View ${slide.label} full size`}
          onClick={() => setLightboxOpen(true)}
        >
          <img src={slide.image} alt={slide.imageAlt} className={styles.slideImage} />
        </button>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              aria-label="Previous screen"
              onClick={() => goTo(index - 1)}
            >
              <ChevronLeft size={18} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              aria-label="Next screen"
              onClick={() => goTo(index + 1)}
            >
              <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </button>

            <div className={styles.dots} role="tablist" aria-label="Screens">
              {slides.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={s.label}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className={styles.thumbnails}>
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              aria-label={`View ${s.label} preview`}
              aria-pressed={i === index}
              className={`${styles.thumbnail} ${i === index ? styles.thumbnailActive : ''}`}
              onClick={() => goTo(i)}
            >
              <img src={s.image} alt={s.imageAlt} className={styles.thumbnailImage} />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox image={slide.image} imageAlt={slide.imageAlt} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}

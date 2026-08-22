import { ArrowRight } from 'lucide-react';
import { experience } from '../../data/experience';
import { site } from '../../data/site';
import { Reveal } from '../Reveal/Reveal';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <div>
      <span className="eyebrow">Career</span>
      <h2 className={styles.title}>Experience</h2>

      <ol className={styles.timeline}>
        {experience.map((entry, i) => (
          <Reveal as="li" delay={i * 100} key={entry.company} className={styles.entry}>
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles.period}>{entry.period}</div>
            <h3 className={styles.role}>{entry.role}</h3>
            <p className={styles.company}>{entry.company}</p>
            <ul className={styles.highlights}>
              {entry.highlights.map((point) => (
                <li key={point} className={styles.highlight}>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>

      <a className={styles.resumeLink} href={site.resumeHref} download>
        View full experience on my resume
        <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
      </a>
    </div>
  );
}

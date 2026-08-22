import { ArrowRight, Brain, Calendar, CodeXml, Layers } from 'lucide-react';
import { stats } from '../../data/stats';
import { Reveal } from '../Reveal/Reveal';
import styles from './About.module.css';
import type { StatCard } from '../../types';

const icons: Record<StatCard['icon'], React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  calendar: Calendar,
  code: CodeXml,
  layers: Layers,
  brain: Brain,
};

const iconTints: Record<StatCard['icon'], string> = {
  calendar: styles.iconBlue,
  code: styles.iconGreen,
  layers: styles.iconCyan,
  brain: styles.iconPurple,
};

export function About() {
  return (
    <section className={styles.section} id="about" aria-label="About me">
      <div className="container">
        <div className={styles.layout}>
          <Reveal>
            <span className="eyebrow">About Me</span>
            <h2 className={styles.title}>Grounded in fundamentals, focused on what's next</h2>
            <p className={styles.copy}>
              I'm a Software Engineer with 4+ years of experience building business applications
              and internal systems. My journey began with .NET and desktop development, and I've
              expanded into modern web technologies, AI-powered applications, and workflow
              automation.
            </p>
            <a href="#experience" className={styles.learnMore}>
              Learn more about me
              <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
          </Reveal>

          <ul className={styles.statGrid}>
            {stats.map((stat, i) => {
              const Icon = icons[stat.icon];
              return (
                <Reveal as="li" delay={i * 80} key={stat.label}>
                  <div className={styles.statCard}>
                    <span className={`${styles.statIcon} ${iconTints[stat.icon]}`} aria-hidden="true">
                      <Icon size={19} strokeWidth={2} />
                    </span>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                    <div className={styles.statSub}>{stat.sublabel}</div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

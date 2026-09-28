import { ArrowRight, Calendar, CodeXml, Layers, Workflow } from 'lucide-react';
import { stats } from '../../data/stats';
import { Reveal } from '../Reveal/Reveal';
import styles from './About.module.css';
import type { StatCard } from '../../types';

const icons: Record<StatCard['icon'], React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  calendar: Calendar,
  code: CodeXml,
  layers: Layers,
  workflow: Workflow,
};

const iconTints: Record<StatCard['icon'], string> = {
  calendar: styles.iconBlue,
  code: styles.iconGreen,
  layers: styles.iconCyan,
  workflow: styles.iconOrange,
};

export function About() {
  return (
    <section className={styles.section} id="about" aria-label="About me">
      <div className="container">
        <div className={styles.layout}>
          <Reveal>
            <span className="eyebrow">About Me</span>
            <h2 className={styles.title}>Software engineering foundation, focused on AI & automation.</h2>
            <p className={styles.copy}>
             I’m a Software Engineer with around 5 years of experience building business applications and internal systems. My background in C#, .NET, Python, web development, APIs, and databases now extends into workflow automation, system integration, and AI-powered applications.
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

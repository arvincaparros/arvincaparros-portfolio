import { Bot, Database, LayoutTemplate, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { Reveal } from '../Reveal/Reveal';
import styles from './Skills.module.css';
import type { SkillCategory, SkillLevel } from '../../types';

const categoryIcons: Record<SkillCategory['icon'], React.ComponentType<{ size?: number }>> = {
  backend: Server,
  frontend: LayoutTemplate,
  database: Database,
  ai: Bot,
  devops: Wrench,
};

const categoryTints: Record<SkillCategory['icon'], string> = {
  backend: 'var(--accent-blue)',
  frontend: 'var(--accent-cyan)',
  database: 'var(--accent-green)',
  ai: 'var(--accent-purple)',
  devops: 'var(--accent-amber)',
};

const levelDotClass: Record<SkillLevel, string> = {
  core: styles.dotCore,
  working: styles.dotWorking,
  exploring: styles.dotExploring,
};

const legend: { level: SkillLevel; label: string }[] = [
  { level: 'core', label: 'Core / Experienced' },
  { level: 'working', label: 'Working With' },
  { level: 'exploring', label: 'Currently Exploring' },
];

export function Skills() {
  return (
    <section className={styles.section} id="skills" aria-label="Technical skills">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2 className={styles.title}>Technical Skills</h2>

        <ul className={styles.grid}>
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Reveal as="li" delay={i * 70} key={category.name}>
                <div className={styles.card}>
                  <div className={styles.cardHead}>
                    <span
                      className={styles.catIcon}
                      style={{ color: categoryTints[category.icon] }}
                      aria-hidden="true"
                    >
                      <Icon size={17} />
                    </span>
                    <h3 className={styles.catName}>{category.name}</h3>
                  </div>
                  <ul className={styles.items}>
                    {category.items.map((item) => (
                      <li key={item.name} className={styles.item}>
                        <span
                          className={`${styles.dot} ${levelDotClass[item.level]}`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className={styles.legend}>
          {legend.map((entry) => (
            <span key={entry.level} className={styles.legendItem}>
              <span className={`${styles.dot} ${levelDotClass[entry.level]}`} aria-hidden="true" />
              {entry.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { projects } from '../../data/projects';
import { Reveal } from '../Reveal/Reveal';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './FeaturedWork.module.css';
import type { ProjectCategory } from '../../types';

type Filter = 'all' | ProjectCategory;

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'full-stack', label: 'Full Stack' },
  { value: 'power-platform', label: 'Power Platform' },
  { value: 'automation', label: 'Automation' },
];

export function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section className={styles.section} id="work" aria-label="Featured work">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className={styles.title}>Featured Work</h2>
          </div>
         
        </div>

        <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.value}
              className={`${styles.filterBtn} ${activeFilter === filter.value ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <ul className={styles.grid}>
            {filteredProjects.map((project, i) => (
              <Reveal as="li" delay={i * 90} key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <p className={styles.emptyState}>
            More Power Platform projects coming soon — check back or reach out for a walkthrough.
          </p>
        )}
      </div>
    </section>
  );
}

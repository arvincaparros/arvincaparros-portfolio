import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { Reveal } from '../Reveal/Reveal';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './FeaturedWork.module.css';

export function FeaturedWork() {
  return (
    <section className={styles.section} id="work" aria-label="Featured work">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className={styles.title}>Featured Work</h2>
          </div>
          <a href="#work" className={styles.viewAll}>
            View all projects
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <ul className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal as="li" delay={i * 90} key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

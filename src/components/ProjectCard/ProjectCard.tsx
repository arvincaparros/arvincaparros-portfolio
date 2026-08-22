import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { ProjectVisual } from '../ProjectVisual/ProjectVisual';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <ProjectVisual kind={project.visual} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <ul className={styles.tags}>
          {project.tech.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
        <Link to={`/projects/${project.slug}`} className={styles.cta}>
          {project.ctaLabel}
          <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

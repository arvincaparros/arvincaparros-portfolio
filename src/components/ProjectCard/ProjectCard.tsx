import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { ProjectVisual } from '../ProjectVisual/ProjectVisual';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  const hasLivePreview = project.livePreviewAvailable && Boolean(project.livePreviewUrl);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            className={styles.projectImage}
          />
        ) : (
          // Projects without a real screenshot (project.image) fall back to the
          // generated SVG illustration so every card still has a visual.
          <ProjectVisual kind={project.visual} />
        )}
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
        <div className={styles.actions}>
          <Link to={`/projects/${project.slug}`} className={styles.cta}>
            {project.ctaLabel}
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </Link>
          {hasLivePreview && (
            <a
              href={project.livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.livePreviewLink}
              aria-label={`Open live preview of ${project.title}`}
            >
              Live Preview
              <ExternalLink size={14} strokeWidth={2.5} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

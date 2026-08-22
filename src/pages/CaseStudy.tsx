import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectVisual } from '../components/ProjectVisual/ProjectVisual';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { Contact } from '../components/Contact/Contact';
import styles from './CaseStudy.module.css';
import type { CaseStudyContent } from '../types';

const sections: { key: keyof CaseStudyContent; label: string }[] = [
  { key: 'problem', label: 'Problem' },
  { key: 'solution', label: 'Solution' },
  { key: 'architecture', label: 'Architecture' },
  { key: 'contribution', label: 'My Contribution' },
  { key: 'technology', label: 'Technology' },
  { key: 'challenges', label: 'Challenges' },
  { key: 'result', label: 'Result' },
];

export function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <div className="container">
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={16} strokeWidth={2.5} aria-hidden="true" />
            Back to portfolio
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Case Study</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.description}</p>
          <ul className={styles.tags}>
            {project.tech.map((tech) => (
              <li key={tech} className={styles.tag}>
                {tech}
              </li>
            ))}
          </ul>
          <div className={styles.visualFrame}>
            <ProjectVisual kind={project.visual} />
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            {sections.map((section) => (
              <div className={styles.block} key={section.key}>
                <div className={styles.blockLabel}>{section.label}</div>
                <p className={styles.blockText}>{project.caseStudy[section.key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className={styles.otherProjects} aria-label="Other projects">
          <div className="container">
            <span className="eyebrow">Keep Exploring</span>
            <h2 className={styles.otherTitle}>Other Projects</h2>
            <ul className={styles.otherGrid}>
              {otherProjects.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Contact />
    </div>
  );
}

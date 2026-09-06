import { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectVisual } from '../components/ProjectVisual/ProjectVisual';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { Carousel } from '../components/Carousel/Carousel';
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
  const hasLivePreview = project.livePreviewAvailable && Boolean(project.livePreviewUrl);

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

      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
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
              {hasLivePreview && (
                <a
                  href={project.livePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.livePreviewLink}
                  aria-label={`Open live preview of ${project.title}`}
                >
                  Live Preview
                  <ExternalLink size={15} strokeWidth={2.5} aria-hidden="true" />
                </a>
              )}
            </div>

            <div className={styles.heroVisual}>
              {project.slides && project.slides.length > 0 ? (
                <Carousel slides={project.slides} />
              ) : project.image ? (
                <div className={styles.heroVisualFrame}>
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    className={styles.caseStudyImage}
                  />
                </div>
              ) : (
                // Projects without a real screenshot (project.image) fall back to the
                // generated SVG illustration so every case study still has a visual.
                <div className={styles.heroVisualFrame}>
                  <ProjectVisual kind={project.visual} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            {sections.map((section) => (
              <div className={styles.block} key={section.key}>
                <div className={styles.blockLabel}>{section.label}</div>
                <p className={styles.blockText}>{project.caseStudy[section.key]}</p>
              </div>
            ))}

            {/*
              Optional card: `features` is not part of the generic `sections` list above
              because it's a string[] (a list), not a plain string like the other fields.
              Guarding on length here keeps this compatible with any project whose
              caseStudy has no `features` array — it simply renders nothing for them.
            */}
            {project.caseStudy.features && project.caseStudy.features.length > 0 && (
              <div className={styles.block}>
                <div className={styles.blockLabel}>Key Features</div>
                <ul className={styles.featureList}>
                  {project.caseStudy.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
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

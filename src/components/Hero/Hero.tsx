import { ArrowRight, Braces, Brain, Database, Download, Mail, Settings } from 'lucide-react';
import { site } from '../../data/site';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import styles from './Hero.module.css';

const pills = ['Full Stack Development', 'Power Apps & Automate', 'AI & Agents', 'APIs', 'Databases'];

type Token = { text: string; cls?: 'kw' | 'cls' | 'prop' | 'str' | 'punct' };
type CodeLine = Token[];

const codeLines: CodeLine[] = [
  [
    { text: 'class', cls: 'kw' },
    { text: ' ' },
    { text: 'Developer', cls: 'cls' },
    { text: ' ' },
    { text: '{', cls: 'punct' },
  ],
  [
    { text: '  ' },
    { text: 'focus', cls: 'prop' },
    { text: ' = ', cls: 'punct' },
    { text: '[', cls: 'punct' },
  ],
  [{ text: "    'Full Stack',", cls: 'str' }],
  [{ text: "    'API & Integrations',", cls: 'str' }],
  [{ text: "    'Automation Workflows'", cls: 'str' }],
  [{ text: '  ];', cls: 'punct' }],
  [{ text: '' }],
  [
    { text: '  ' },
    { text: 'mission', cls: 'prop' },
    { text: ' = ', cls: 'punct' },
    { text: "'Build solutions that make an impact.'", cls: 'str' },
    { text: ';', cls: 'punct' },
  ],
  [{ text: '}', cls: 'punct' }],
];

export function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Introduction">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={styles.greeting}>Hi, I'm</span>
          <h1 className={styles.name}>
            ARVIN <span className="gradient-text">CAPARROS</span>
          </h1>
          <p className={styles.role}>Software Engineer</p>
          <p className={styles.description}>
            I build business applications, AI-powered systems, and Power Platform automation
            with Power Apps and Power Automate that solve real problems.
          </p>

          <ul className={styles.pills}>
            {pills.map((pill) => (
              <li key={pill} className={styles.pill}>
                {pill}
              </li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <a href="#work" className={styles.btnPrimary}>
              View My Work
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a href={site.resumeHref} download className={styles.btnSecondary}>
              Download Resume
              <Download size={16} strokeWidth={2.25} aria-hidden="true" />
            </a>
          </div>

          <div className={styles.social}>
            <a
              className={styles.socialLink}
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              className={styles.socialLink}
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              className={styles.socialLink}
              href={`mailto:${site.email}`}
              aria-label="Send an email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <svg
            className={styles.dotsGrid}
            viewBox="0 0 70 70"
            fill="none"
            aria-hidden="true"
            style={{ color: 'var(--text-muted)' }}
          >
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={6 + col * 15}
                  cy={6 + row * 15}
                  r={1.6}
                  fill="currentColor"
                />
              )),
            )}
          </svg>

          <span className={`${styles.badge} ${styles.badgeCode}`} aria-hidden="true">
            <Braces size={22} strokeWidth={2} />
          </span>
          <span className={`${styles.badge} ${styles.badgeDb}`} aria-hidden="true">
            <Database size={24} strokeWidth={2} />
          </span>
          <span className={`${styles.badge} ${styles.badgeGear}`} aria-hidden="true">
            <Settings size={22} strokeWidth={2} />
          </span>
          <span className={`${styles.badge} ${styles.badgeBrain}`} aria-hidden="true">
            <Brain size={22} strokeWidth={2} />
          </span>

          <div className={styles.terminal} role="img" aria-label="Code editor showing a Developer class defining focus areas of full stack, AI applications, and automation workflows, with a mission to build solutions that make an impact">
            <div className={styles.terminalHeader}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              <span className={styles.terminalTitle}>developer.ts</span>
            </div>
            <pre className={styles.code} aria-hidden="true">
              {codeLines.map((line, i) => (
                <div key={i}>
                  {line.length === 0 || (line.length === 1 && line[0].text === '')
                    ? ' '
                    : line.map((token, j) => (
                        <span key={j} className={token.cls ? styles[token.cls] : undefined}>
                          {token.text}
                        </span>
                      ))}
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

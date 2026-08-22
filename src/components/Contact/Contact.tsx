import { ArrowUp, Download, Mail } from 'lucide-react';
import { site } from '../../data/site';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { Reveal } from '../Reveal/Reveal';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

const cards = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: site.linkedinLabel,
    href: site.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: site.githubLabel,
    href: site.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section className={styles.section} id="contact" aria-label="Contact">
      <div className="container">
        <Reveal className={styles.head}>
          <span className="eyebrow">Contact</span>
          <h2 className={styles.title}>Let's build something amazing together.</h2>
          <p className={styles.desc}>
            I'm open to opportunities involving Full Stack Development, AI Applications, and
            Automation Engineering.
          </p>
        </Reveal>

        <ul className={styles.cards}>
          {cards.map((card, i) => (
            <Reveal as="li" delay={i * 80} key={card.label}>
              <a
                className={styles.card}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className={styles.cardIcon} aria-hidden="true">
                  <card.icon size={19} />
                </span>
                <span className={styles.cardText}>
                  <span className={styles.cardLabel}>{card.label}</span>
                  <span className={styles.cardValue}>{card.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className={styles.resumeRow}>
          <a className={styles.resumeBtn} href={site.resumeHref} download>
            Download Resume
            <Download size={16} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.formDivider} role="separator" />

        <Reveal className={styles.formHead}>
          <span className="eyebrow">Send Me a Message</span>
          <h3 className={styles.formTitle}>
            Have a project in mind or want to work together?
          </h3>
          <p className={styles.formDesc}>
            Fill out the form below and I&rsquo;ll get back to you as soon as possible.
          </p>
        </Reveal>

        <Reveal className={styles.formWrap}>
          <ContactForm />
        </Reveal>

        <p className={styles.automationNote}>
          This form is connected to my automation workflow and will notify me when you send a
          message.
        </p>

        <div className={styles.footerBottom}>
          <span>&copy; {site.year} Arvin Caparros. All rights reserved.</span>
          <a href="#home" className={styles.backToTop}>
            Back to top
            <ArrowUp size={14} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

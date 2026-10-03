import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CodeXml, Menu, X } from 'lucide-react';
import { navItems } from '../../data/nav';
import { ResumeDownload } from '../ResumeDownload/ResumeDownload';
import styles from './Navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      event.preventDefault();
      navigate('/' + href);
      return;
    }
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          to="/"
          className={styles.brand}
          aria-label="Arvin Caparros, home"
          onClick={() => setMenuOpen(false)}
        >
          <span className={styles.brandIcon} aria-hidden="true">
            <CodeXml size={18} strokeWidth={2.25} />
          </span>
          <span className={styles.brandFirst}>ARVIN</span>{' '}
          <span className={styles.brandLast}>CAPARROS</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ResumeDownload triggerClassName={styles.resumeBtn} align="right" />

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobilePanel}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <ResumeDownload
            triggerClassName={styles.mobileResume}
            variant="inline"
            iconSize={16}
            onSelect={() => setMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}

import { Experience } from './Experience';
import { HowIBuild } from '../HowIBuild/HowIBuild';
import { HowIAutomate } from '../HowIBuild/HowIAutomate';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <section className={styles.section} id="experience" aria-label="Experience and process">
      <div className="container">
        <div className={styles.layout}>
          <Experience />
          <div className={styles.processColumn}>
            <HowIBuild />
            <HowIAutomate />
          </div>
        </div>
      </div>
    </section>
  );
}

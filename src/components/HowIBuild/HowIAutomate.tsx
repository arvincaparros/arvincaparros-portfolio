import { ArrowRight, Search, Workflow, Zap, Puzzle, Activity } from 'lucide-react';
import { automateSteps } from '../../data/process';
import { Reveal } from '../Reveal/Reveal';
import styles from './HowIBuild.module.css';
import type { AutomateStep } from '../../types';

const icons: Record<AutomateStep['icon'], React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  discover: Search,
  design: Workflow,
  automate: Zap,
  integrate: Puzzle,
  monitor: Activity,
};

export function HowIAutomate() {
  return (
    <div>
      <span className="eyebrow">Process</span>
      <h2 className={styles.title}>How I Automate</h2>

      <ol className={styles.steps}>
        {automateSteps.map((step, i) => {
          const Icon = icons[step.icon];
          return (
            <Reveal as="li" delay={i * 80} key={step.number}>
              <div className={styles.step}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={17} strokeWidth={2} />
                </span>
                <div className={styles.number}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                <span className={styles.arrow} aria-hidden="true">
                  <ArrowRight size={16} strokeWidth={2} />
                </span>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}

import { ArrowRight, MessageSquareText, PenTool, Puzzle, Code2, TrendingUp } from 'lucide-react';
import { processSteps } from '../../data/process';
import { Reveal } from '../Reveal/Reveal';
import styles from './HowIBuild.module.css';
import type { ProcessStep } from '../../types';

const icons: Record<ProcessStep['icon'], React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  understand: MessageSquareText,
  design: PenTool,
  build: Code2,
  integrate: Puzzle,
  improve: TrendingUp,
};

export function HowIBuild() {
  return (
    <div>
      <span className="eyebrow">Process</span>
      <h2 className={styles.title}>How I Build</h2>

      <ol className={styles.steps}>
        {processSteps.map((step, i) => {
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

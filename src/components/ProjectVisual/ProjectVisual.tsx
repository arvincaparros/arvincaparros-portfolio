import type { ProjectVisualKind } from '../../types';
import styles from './ProjectVisual.module.css';

const chrome = (
  <g>
    <circle cx="14" cy="14" r="4" fill="#ff5f57" className={styles.chromeDot} />
    <circle cx="28" cy="14" r="4" fill="#febc2e" className={styles.chromeDot} />
    <circle cx="42" cy="14" r="4" fill="#28c840" className={styles.chromeDot} />
    <rect x="0" y="0" width="320" height="26" fill="rgba(255,255,255,0.03)" />
    <line x1="0" y1="26" x2="320" y2="26" stroke="rgba(255,255,255,0.08)" />
  </g>
);

function AgentsVisual() {
  return (
    <svg viewBox="0 0 320 200" className={styles.frame} role="presentation" aria-hidden="true">
      {chrome}
      <rect x="0" y="26" width="86" height="174" fill="rgba(255,255,255,0.02)" />
      <line x1="86" y1="26" x2="86" y2="200" stroke="rgba(255,255,255,0.08)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(16, ${44 + i * 46})`}>
          <rect width="54" height="34" rx="9" fill={i === 0 ? 'rgba(77,141,255,0.16)' : 'rgba(255,255,255,0.04)'} stroke={i === 0 ? '#4d8dff' : 'rgba(255,255,255,0.08)'} />
          <circle cx="16" cy="17" r="6" fill={['#4d8dff', '#a78bfa', '#22d3ee'][i]} opacity="0.85" />
          <rect x="28" y="12" width="18" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
          <rect x="28" y="20" width="12" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />
        </g>
      ))}
      <rect x="106" y="44" width="150" height="16" rx="8" fill="rgba(255,255,255,0.06)" />
      <rect x="106" y="68" width="190" height="34" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <rect x="118" y="78" width="120" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="118" y="88" width="90" height="4" rx="2" fill="rgba(255,255,255,0.16)" />
      <rect x="140" y="112" width="150" height="34" rx="10" fill="rgba(77,141,255,0.14)" stroke="rgba(77,141,255,0.4)" />
      <rect x="152" y="122" width="110" height="4" rx="2" fill="rgba(190,215,255,0.55)" />
      <rect x="152" y="132" width="70" height="4" rx="2" fill="rgba(190,215,255,0.28)" />
      <rect x="106" y="158" width="170" height="24" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
      <circle cx="120" cy="170" r="4" fill="#a78bfa" />
      <rect x="132" y="167" width="60" height="4" rx="2" fill="rgba(255,255,255,0.22)" />
    </svg>
  );
}

function AssistantVisual() {
  return (
    <svg viewBox="0 0 320 200" className={styles.frame} role="presentation" aria-hidden="true">
      {chrome}
      <rect x="18" y="42" width="140" height="10" rx="5" fill="rgba(255,255,255,0.1)" />
      <rect x="18" y="60" width="200" height="60" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" />
      <rect x="30" y="72" width="120" height="6" rx="3" fill="rgba(255,255,255,0.16)" />
      <rect x="30" y="86" width="160" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="30" y="100" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />

      <rect x="176" y="90" width="128" height="96" rx="14" fill="rgba(10,14,22,0.92)" stroke="#22d3ee" strokeOpacity="0.45" />
      <circle cx="196" cy="110" r="8" fill="rgba(34,211,238,0.18)" stroke="#22d3ee" />
      <rect x="210" y="106" width="70" height="4" rx="2" fill="rgba(200,250,255,0.5)" />
      <rect x="210" y="114" width="50" height="4" rx="2" fill="rgba(200,250,255,0.25)" />

      <rect x="190" y="130" width="100" height="26" rx="9" fill="rgba(77,141,255,0.16)" stroke="rgba(77,141,255,0.4)" />
      <rect x="200" y="138" width="70" height="4" rx="2" fill="rgba(210,225,255,0.55)" />
      <rect x="200" y="146" width="45" height="4" rx="2" fill="rgba(210,225,255,0.25)" />

      <rect x="190" y="162" width="98" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
      <circle cx="278" cy="170" r="5" fill="#22d3ee" />
    </svg>
  );
}

function DashboardVisual() {
  const bars = [0.5, 0.8, 0.35, 0.65, 0.95, 0.45, 0.7];
  return (
    <svg viewBox="0 0 320 200" className={styles.frame} role="presentation" aria-hidden="true">
      {chrome}
      <rect x="0" y="26" width="64" height="174" fill="rgba(255,255,255,0.02)" />
      <line x1="64" y1="26" x2="64" y2="200" stroke="rgba(255,255,255,0.08)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="20" y={46 + i * 30} width="24" height="6" rx="3" fill={i === 0 ? '#4d8dff' : 'rgba(255,255,255,0.14)'} />
      ))}

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${80 + i * 78}, 40)`}>
          <rect width="68" height="40" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" />
          <rect x="10" y="10" width="30" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
          <rect x="10" y="20" width="20" height="8" rx="2" fill={['#4d8dff', '#34d399', '#a78bfa'][i]} opacity="0.85" />
        </g>
      ))}

      <rect x="80" y="94" width="146" height="70" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
      <polyline
        points="90,140 108,128 126,146 144,118 162,132 180,108 198,124 216,112"
        fill="none"
        stroke="#4d8dff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="180" cy="108" r="4" fill="#0a0d15" stroke="#4d8dff" strokeWidth="2" />

      <g transform="translate(234, 94)">
        <rect width="72" height="70" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={8 + i * 8}
            y={60 - h * 44}
            width="5"
            height={h * 44}
            rx="2"
            fill="#34d399"
            opacity={0.55 + h * 0.4}
          />
        ))}
      </g>

      <rect x="80" y="172" width="226" height="16" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" />
    </svg>
  );
}

function WorkflowVisual() {
  const nodes = [
    { x: 30, color: '#4d8dff' },
    { x: 100, color: '#22d3ee' },
    { x: 170, color: '#a78bfa' },
    { x: 240, color: '#34d399' },
    { x: 290, color: '#fbbf24' },
  ];
  return (
    <svg viewBox="0 0 320 200" className={styles.frame} role="presentation" aria-hidden="true">
      {chrome}
      <line x1="30" y1="110" x2="290" y2="110" stroke="rgba(255,255,255,0.14)" strokeDasharray="4 5" />
      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1];
        return (
          <path
            key={i}
            d={`M ${n.x + 16} 110 L ${next.x - 16} 110`}
            stroke={n.color}
            strokeOpacity="0.5"
            strokeWidth="1.6"
            markerEnd="url(#arrow)"
          />
        );
      })}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="rgba(255,255,255,0.35)" />
        </marker>
      </defs>
      {nodes.map((n, i) => (
        <g key={i} transform={`translate(${n.x}, 110)`}>
          <circle r="18" fill="rgba(10,14,22,0.9)" stroke={n.color} strokeWidth="1.6" />
          <circle r="6" fill={n.color} opacity="0.8" />
        </g>
      ))}
      <rect x="60" y="150" width="70" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
      <rect x="190" y="150" width="70" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
      <rect x="120" y="56" width="80" height="10" rx="5" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

const visuals: Record<ProjectVisualKind, () => React.JSX.Element> = {
  agents: AgentsVisual,
  assistant: AssistantVisual,
  dashboard: DashboardVisual,
  workflow: WorkflowVisual,
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const Visual = visuals[kind];
  return <Visual />;
}

import Reveal from './Reveal';
import { interests } from '../data/config';

export default function Interests() {
  return (
    <section className="interests" aria-labelledby="interests-heading">
      <div className="container">
        <Reveal className="interests__intro">
          <span className="section-label">Interests</span>
        </Reveal>
        <Reveal delay={0.08} as="h2" id="interests-heading" className="interests__flow">
          {interests.map((item, i) => (
            <span key={item} className="interests__word">
              {item}
              {i < interests.length - 1 && <span className="interests__dot" aria-hidden="true">·</span>}
            </span>
          ))}
        </Reveal>
      </div>

      <style>{`
        .interests {
          padding: clamp(80px, 12vw, 140px) 0;
          border-top: 1px solid var(--hairline);
        }
        .interests__intro {
          margin-bottom: 28px;
        }
        .interests__flow {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.5rem, 4vw, 2.8rem);
          line-height: 1.35;
          color: var(--text-faint);
        }
        .interests__word {
          color: var(--text-muted);
          transition: color 0.3s var(--ease-out);
        }
        .interests__word:hover {
          color: var(--accent);
        }
        .interests__dot {
          color: var(--hairline-strong);
          margin: 0 14px;
        }
      `}</style>
    </section>
  );
}

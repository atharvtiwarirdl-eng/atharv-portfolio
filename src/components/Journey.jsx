import Reveal from './Reveal';
import { journey } from '../data/config';

export default function Journey() {
  return (
    <section id="journey" className="journey" aria-labelledby="journey-heading">
      <div className="container">
        <Reveal className="journey__intro">
          <span className="section-label">Experience</span>
          <h2 id="journey-heading" className="journey__heading">The path so far</h2>
        </Reveal>

        <ol className="journey__list">
          {journey.map((step, i) => (
            <Reveal as="li" key={step.label} delay={i * 0.05} className="journey__item">
              <span className="journey__marker" aria-hidden="true" />
              <div className="journey__content">
                <h3>{step.label}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <style>{`
        .journey {
          padding: clamp(96px, 14vw, 180px) 0;
          border-top: 1px solid var(--hairline);
        }
        .journey__intro {
          margin-bottom: 56px;
        }
        .journey__heading {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 500;
          margin-top: 14px;
        }
        .journey__list {
          list-style: none;
          position: relative;
          max-width: 720px;
        }
        .journey__list::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: var(--hairline);
        }
        .journey__item {
          position: relative;
          padding: 0 0 40px 40px;
        }
        .journey__item:last-child {
          padding-bottom: 0;
        }
        .journey__marker {
          position: absolute;
          left: 0;
          top: 6px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--accent);
        }
        .journey__content h3 {
          font-size: 1.15rem;
          font-weight: 500;
          margin-bottom: 6px;
        }
        .journey__content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}

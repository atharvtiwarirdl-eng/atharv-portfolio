import Reveal from './Reveal';
import { profile } from '../data/config';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <Reveal className="about__index">
          <span className="section-label">About</span>
        </Reveal>

        <div className="about__body">
          <Reveal as="h2" id="about-heading" className="about__heading">
            Curious by default, technical by practice.
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__bio">{profile.bio}</p>
          </Reveal>
          <Reveal delay={0.18} className="about__meta">
            <div>
              <span className="about__meta-label">Based in</span>
              <span className="about__meta-value">{profile.location}</span>
            </div>
            <div>
              <span className="about__meta-label">Currently</span>
              <span className="about__meta-value">{profile.role}</span>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about {
          padding: clamp(96px, 14vw, 180px) 0;
          border-top: 1px solid var(--hairline);
        }
        .about__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .about__heading {
          font-size: clamp(1.9rem, 4vw, 3rem);
          max-width: 14ch;
          margin-bottom: 32px;
          font-weight: 500;
        }
        .about__bio {
          max-width: 640px;
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 48px;
        }
        .about__meta {
          display: flex;
          gap: 56px;
          flex-wrap: wrap;
          padding-top: 32px;
          border-top: 1px solid var(--hairline);
        }
        .about__meta > div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .about__meta-label {
          font-size: 0.8rem;
          color: var(--text-faint);
        }
        .about__meta-value {
          font-size: 1rem;
          color: var(--text-primary);
        }
        @media (min-width: 900px) {
          .about__grid {
            grid-template-columns: 220px 1fr;
          }
        }
      `}</style>
    </section>
  );
}

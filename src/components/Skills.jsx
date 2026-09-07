import Reveal from './Reveal';
import { skillGroups } from '../data/config';

const levelWidth = {
  Exploring: '30%',
  Building: '58%',
  Comfortable: '82%',
  Advanced: '100%',
};

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal className="skills__intro">
          <span className="section-label">Skills</span>
          <h2 id="skills-heading" className="skills__heading">What I actually work with</h2>
          <p className="skills__note">
            Levels reflect real familiarity, not test scores — Exploring, Building, Comfortable, Advanced.
          </p>
        </Reveal>

        <div className="skills__groups">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.06} className="skills__group">
              <h3 className="skills__group-title">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item.name} className="skills__item">
                    <div className="skills__item-top">
                      <span>{item.name}</span>
                      <span className="skills__item-level">{item.level}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ '--w': levelWidth[item.level] || '20%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills {
          padding: clamp(96px, 14vw, 180px) 0;
          border-top: 1px solid var(--hairline);
        }
        .skills__intro {
          margin-bottom: 64px;
          max-width: 560px;
        }
        .skills__heading {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 500;
          margin: 14px 0 16px;
        }
        .skills__note {
          color: var(--text-muted);
          font-size: 0.98rem;
        }
        .skills__groups {
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
        }
        .skills__group-title {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--hairline);
        }
        .skills__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .skills__item-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          margin-bottom: 8px;
        }
        .skills__item-level {
          color: var(--text-faint);
          font-size: 0.82rem;
        }
        .skills__bar {
          height: 2px;
          background: var(--hairline);
          overflow: hidden;
        }
        .skills__bar-fill {
          height: 100%;
          width: 0%;
          background: var(--accent);
          transition: width 1s var(--ease-out);
        }
        .skills__item:hover .skills__bar-fill,
        .skills__bar-fill {
          animation: fillBar 1.2s var(--ease-out) forwards;
        }
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--w); }
        }
        @media (min-width: 700px) {
          .skills__groups {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 64px;
          }
        }
      `}</style>
    </section>
  );
}

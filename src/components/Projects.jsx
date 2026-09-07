import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data/config';

export default function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal className="projects__intro">
          <span className="section-label">Projects</span>
          <h2 id="projects-heading" className="projects__heading">Things I've built and explored</h2>
        </Reveal>
      </div>

      <div className="projects__list">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={0.04} y={40}>
            <a
              href={project.link}
              className="project-row"
              data-cursor="project"
              aria-label={`View ${project.title}`}
            >
              <div className="container project-row__inner">
                <span className="project-row__index">{String(i + 1).padStart(2, '0')}</span>

                <div className="project-row__main">
                  <h3 className="project-row__title">{project.title}</h3>
                  <p className="project-row__subtitle">{project.subtitle}</p>
                </div>

                <p className="project-row__desc">{project.description}</p>

                <div className="project-row__tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <motion.span
                  className="project-row__link"
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  View project <ArrowUpRight size={16} />
                </motion.span>
              </div>
              <div className="project-row__underline" />
            </a>
          </Reveal>
        ))}
      </div>

      <style>{`
        .projects {
          padding: clamp(96px, 14vw, 180px) 0 0;
          border-top: 1px solid var(--hairline);
        }
        .projects__intro {
          margin-bottom: 40px;
        }
        .projects__heading {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 500;
          margin-top: 14px;
        }
        .project-row {
          display: block;
          position: relative;
          padding: 40px 0;
          border-bottom: 1px solid var(--hairline);
          transition: background 0.4s var(--ease-out);
        }
        .project-row:hover {
          background: var(--bg-secondary);
        }
        .project-row__inner {
          display: grid;
          grid-template-columns: auto 1fr;
          row-gap: 14px;
          align-items: baseline;
        }
        .project-row__index {
          font-size: 0.85rem;
          color: var(--text-faint);
          grid-row: 1;
        }
        .project-row__main {
          grid-column: 2;
          grid-row: 1;
        }
        .project-row__title {
          font-size: clamp(1.6rem, 4vw, 2.6rem);
          font-weight: 500;
          transition: color 0.3s var(--ease-out);
        }
        .project-row:hover .project-row__title {
          color: var(--accent);
        }
        .project-row__subtitle {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-top: 4px;
        }
        .project-row__desc {
          grid-column: 2;
          max-width: 560px;
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.65;
        }
        .project-row__tech {
          grid-column: 2;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
        }
        .project-row__tech span {
          font-size: 0.78rem;
          color: var(--text-faint);
          padding: 4px 0;
        }
        .project-row__tech span::before {
          content: '';
        }
        .project-row__link {
          grid-column: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          color: var(--text-primary);
          width: fit-content;
        }
        @media (min-width: 700px) {
          .project-row__inner {
            grid-template-columns: 60px 1.1fr 1fr auto;
            column-gap: 24px;
            align-items: center;
          }
          .project-row__main { grid-column: 2; grid-row: 1; }
          .project-row__desc { grid-column: 3; grid-row: 1; }
          .project-row__tech { grid-column: 3; grid-row: 2; }
          .project-row__link { grid-column: 4; grid-row: 1 / span 2; justify-self: end; }
        }
      `}</style>
    </section>
  );
}

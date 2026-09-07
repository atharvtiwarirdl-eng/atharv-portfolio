import Reveal from './Reveal';

const stack = [
  'Python', 'JavaScript', 'C', 'HTML', 'CSS', 'React', 'Vite', 'Node.js',
  'Git', 'GitHub', 'Supabase', 'Razorpay', 'Linux', 'Kali Linux', 'APIs',
  'Local AI Models', 'Voice Interfaces',
];

export default function Stack() {
  return (
    <section className="stack" aria-labelledby="stack-heading">
      <div className="container">
        <Reveal className="stack__intro">
          <span className="section-label">Stack</span>
          <h2 id="stack-heading" className="stack__heading">Tools I reach for</h2>
        </Reveal>

        <Reveal delay={0.1} className="stack__grid">
          {stack.map((tech) => (
            <span key={tech} className="stack__pill">
              {tech}
            </span>
          ))}
        </Reveal>
      </div>

      <style>{`
        .stack {
          padding: clamp(80px, 12vw, 140px) 0;
          border-top: 1px solid var(--hairline);
        }
        .stack__intro {
          margin-bottom: 40px;
        }
        .stack__heading {
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 500;
          margin-top: 14px;
        }
        .stack__grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .stack__pill {
          padding: 10px 18px;
          border: 1px solid var(--hairline-strong);
          border-radius: 999px;
          font-size: 0.88rem;
          color: var(--text-muted);
          transition: border-color 0.3s var(--ease-out), color 0.3s var(--ease-out),
            background 0.3s var(--ease-out);
        }
        .stack__pill:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          background: rgba(201, 162, 76, 0.06);
        }
      `}</style>
    </section>
  );
}

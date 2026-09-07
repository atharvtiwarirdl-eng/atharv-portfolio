import { ArrowUp } from 'lucide-react';
import { profile, contact } from '../data/config';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{profile.name}</span>
          <span className="footer__tag">{profile.headline.join(' ')}</span>
        </div>

        <div className="footer__social">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" data-cursor="link">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="link">LinkedIn</a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" data-cursor="link">Instagram</a>
        </div>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <button onClick={scrollTop} className="footer__top" aria-label="Back to top" data-cursor="link">
            Top <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 48px 0;
          border-top: 1px solid var(--hairline);
        }
        .footer__inner {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .footer__brand {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer__name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
        }
        .footer__tag {
          color: var(--text-faint);
          font-size: 0.85rem;
        }
        .footer__social {
          display: flex;
          gap: 24px;
        }
        .footer__social a {
          font-size: 0.88rem;
          color: var(--text-muted);
          transition: color 0.3s var(--ease-out);
        }
        .footer__social a:hover {
          color: var(--accent);
        }
        .footer__meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: var(--text-faint);
          padding-top: 24px;
          border-top: 1px solid var(--hairline);
        }
        .footer__top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-faint);
          transition: color 0.3s var(--ease-out);
        }
        .footer__top:hover {
          color: var(--accent);
        }
        @media (min-width: 900px) {
          .footer__inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .footer__meta {
            border-top: none;
            padding-top: 0;
            gap: 24px;
          }
        }
      `}</style>
    </footer>
  );
}

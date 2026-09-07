import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import Reveal from './Reveal';
import { contact } from '../data/config';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — link is still usable via mailto
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal>
          <span className="section-label">Contact</span>
        </Reveal>

        <Reveal delay={0.08} as="h2" id="contact-heading" className="contact__heading">
          Let's build something.
        </Reveal>

        <Reveal delay={0.14}>
          <p className="contact__sub">Have an idea, project or opportunity? Let's talk.</p>
        </Reveal>

        <Reveal delay={0.2} className="contact__actions">
          <a href={`mailto:${contact.email}`} className="contact__email" data-cursor="link">
            {contact.email}
            <ArrowUpRight size={22} />
          </a>
          <button className="contact__copy" onClick={handleCopy} data-cursor="link">
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
        </Reveal>

        <Reveal delay={0.26} className="contact__grid">
          <a href={`tel:${contact.phone}`} data-cursor="link">
            <span>Phone</span>
            <p>{contact.phone}</p>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" data-cursor="link">
            <span>GitHub</span>
            <p>View profile <ArrowUpRight size={13} /></p>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="link">
            <span>LinkedIn</span>
            <p>View profile <ArrowUpRight size={13} /></p>
          </a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" data-cursor="link">
            <span>Instagram</span>
            <p>View profile <ArrowUpRight size={13} /></p>
          </a>
        </Reveal>
      </div>

      <style>{`
        .contact {
          padding: clamp(100px, 16vw, 220px) 0 clamp(80px, 10vw, 120px);
          border-top: 1px solid var(--hairline);
        }
        .contact__heading {
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 600;
          margin: 20px 0 20px;
          max-width: 14ch;
        }
        .contact__sub {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 56px;
        }
        .contact__actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 72px;
        }
        .contact__email {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 4vw, 2.4rem);
          font-weight: 500;
          color: var(--text-primary);
          border-bottom: 1px solid var(--hairline-strong);
          padding-bottom: 8px;
          transition: color 0.3s var(--ease-out), border-color 0.3s var(--ease-out);
        }
        .contact__email:hover {
          color: var(--accent);
          border-color: var(--accent);
        }
        .contact__copy {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-faint);
          transition: color 0.3s var(--ease-out);
        }
        .contact__copy:hover {
          color: var(--text-primary);
        }
        .contact__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          padding-top: 40px;
          border-top: 1px solid var(--hairline);
        }
        .contact__grid a span {
          display: block;
          font-size: 0.8rem;
          color: var(--text-faint);
          margin-bottom: 8px;
        }
        .contact__grid a p {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 1rem;
          color: var(--text-primary);
          transition: color 0.3s var(--ease-out);
        }
        .contact__grid a:hover p {
          color: var(--accent);
        }
        @media (min-width: 700px) {
          .contact__grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
}

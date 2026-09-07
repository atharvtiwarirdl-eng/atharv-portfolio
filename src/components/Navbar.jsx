import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav, profile } from '../data/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            data-cursor="link"
          >
            {profile.name}
          </a>

          <nav className="navbar__links" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                data-cursor="link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="navbar__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            data-cursor="link"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <nav className="mobile-menu__links" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 28px 0;
          transition: padding 0.4s var(--ease-out), background 0.4s var(--ease-out),
            border-color 0.4s var(--ease-out);
          border-bottom: 1px solid transparent;
        }
        .navbar--scrolled {
          padding: 16px 0;
          background: rgba(10, 10, 11, 0.72);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--hairline);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar__logo {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .navbar__links {
          display: none;
          gap: 40px;
        }
        .navbar__links a {
          font-size: 0.9rem;
          color: var(--text-muted);
          position: relative;
          transition: color 0.3s var(--ease-out);
        }
        .navbar__links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s var(--ease-out);
        }
        .navbar__links a:hover {
          color: var(--text-primary);
        }
        .navbar__links a:hover::after {
          width: 100%;
        }
        .navbar__toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }
        @media (min-width: 900px) {
          .navbar__links { display: flex; }
          .navbar__toggle { display: none; }
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu__links {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: center;
        }
        .mobile-menu__links a {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--text-primary);
        }
      `}</style>
    </>
  );
}

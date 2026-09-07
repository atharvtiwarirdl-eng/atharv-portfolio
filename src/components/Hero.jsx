import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/config';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const line = {
  hidden: { y: '110%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero__grid">
        <div className="hero__text">
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {profile.role}
          </motion.p>

          <motion.h1 className="hero__name" variants={container} initial="hidden" animate="show">
            <span className="line-mask">
              <motion.span variants={line} className="line-inner">
                {profile.name}
              </motion.span>
            </span>
          </motion.h1>

          <motion.div className="hero__headline" variants={container} initial="hidden" animate="show">
            {profile.headline.map((word) => (
              <span className="line-mask" key={word}>
                <motion.span variants={line} className="line-inner">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.div>

          <motion.p
            className="hero__subline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {profile.subline}
          </motion.p>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
        >
          {imgOk ? (
            <img
              src={profile.portraitSrc}
              alt={`Portrait of ${profile.name}`}
              onError={() => setImgOk(false)}
              className="hero__portrait-img"
            />
          ) : (
            <div className="hero__portrait-placeholder" role="img" aria-label={`Portrait of ${profile.name} — placeholder`}>
              <span>{profile.name.charAt(0)}</span>
              <p>Add <portrait className="png"></portrait> to /public</p>
            </div>
          )}
          <div className="hero__portrait-fade" />
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line">
          <motion.div
            className="hero__scroll-dot"
            animate={{ y: [0, 22, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 96px;
          overflow: hidden;
        }
        .hero__grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(24px, 5vw, 72px);
          gap: 48px;
        }
        .hero__text {
          position: relative;
          z-index: 2;
        }
        .hero__eyebrow {
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .hero__name {
          font-size: clamp(3rem, 9vw, 6.5rem);
          margin-bottom: 8px;
        }
        .hero__headline {
          display: flex;
          flex-wrap: wrap;
          gap: 0 20px;
          font-size: clamp(2rem, 5.5vw, 3.8rem);
          color: var(--text-muted);
          margin-bottom: 32px;
        }
        .line-mask {
          overflow: hidden;
          display: inline-block;
        }
        .line-inner {
          display: inline-block;
        }
        .hero__subline {
          max-width: 480px;
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .hero__portrait {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          max-height: 72vh;
          justify-self: center;
          overflow: hidden;
          border-radius: 2px;
        }
        .hero__portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.15) contrast(1.05);
        }
        .hero__portrait-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(155deg, var(--bg-elevated) 0%, var(--bg-secondary) 60%, #0a0a0b 100%);
          border: 1px solid var(--hairline);
        }
        .hero__portrait-placeholder span {
          font-family: var(--font-display);
          font-size: 5rem;
          color: var(--accent-dim);
        }
        .hero__portrait-placeholder p {
          color: var(--text-faint);
          font-size: 0.8rem;
        }
        .hero__portrait-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(10,10,11,0.35) 0%, transparent 35%);
          pointer-events: none;
        }
        .hero__scroll {
          position: absolute;
          bottom: 36px;
          left: clamp(24px, 5vw, 72px);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 2;
        }
        .hero__scroll span {
          font-size: 0.75rem;
          color: var(--text-faint);
          letter-spacing: 0.02em;
        }
        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: var(--hairline-strong);
          position: relative;
        }
        .hero__scroll-dot {
          position: absolute;
          top: 0;
          left: -1.5px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
        }
        @media (min-width: 900px) {
          .hero__grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
          .hero__portrait {
            max-height: 78vh;
          }
        }
      `}</style>
    </section>
  );
}

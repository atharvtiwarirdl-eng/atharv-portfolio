import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    setIsTouch(touch);
    if (touch) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor="link"], [data-cursor="project"]');
      if (!ringRef.current) return;
      if (interactive) {
        const isProject = e.target.closest('[data-cursor="project"]');
        ringRef.current.dataset.state = isProject ? 'project' : 'link';
      } else {
        ringRef.current.dataset.state = 'default';
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" data-state="default" aria-hidden="true" />
      <style>{`
        .cursor-dot, .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          border-radius: 50%;
          will-change: transform;
        }
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          margin-left: -3px;
          margin-top: -3px;
        }
        .cursor-ring {
          width: 32px;
          height: 32px;
          margin-left: -16px;
          margin-top: -16px;
          border: 1px solid rgba(242, 240, 236, 0.35);
          transition: width 0.25s var(--ease-out), height 0.25s var(--ease-out),
            margin 0.25s var(--ease-out), border-color 0.25s var(--ease-out),
            background 0.25s var(--ease-out);
        }
        .cursor-ring[data-state="link"] {
          width: 48px;
          height: 48px;
          margin-left: -24px;
          margin-top: -24px;
          border-color: var(--accent);
        }
        .cursor-ring[data-state="project"] {
          width: 88px;
          height: 88px;
          margin-left: -44px;
          margin-top: -44px;
          border-color: var(--accent);
          background: rgba(201, 162, 76, 0.08);
        }
        @media (hover: none), (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}</style>
    </>
  );
}

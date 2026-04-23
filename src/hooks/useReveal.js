import { useEffect } from 'react';

/**
 * Observes elements with `.ap-reveal` and adds `.is-visible` when they
 * intersect the viewport, triggering the CSS fade-up. Runs once per element.
 * Safe with React StrictMode: if the IntersectionObserver isn't supported,
 * elements are shown immediately so content never stays hidden.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.ap-reveal:not(.is-visible)');
    if (!nodes.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  });
}

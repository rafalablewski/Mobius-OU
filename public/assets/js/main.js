/**
 * Ablewski & Partners — progressive enhancements.
 *
 * The React shell handles sticky-nav, smooth-scroll and reveal-on-scroll. This
 * file layers two lightweight extras on top:
 *   1. Parallax for the hero background image (rAF-throttled).
 *   2. A global `Esc` shortcut that dispatches `ap:dismiss` for components to
 *      listen for (used to close the mobile drawer).
 *
 * Respect `prefers-reduced-motion` by short-circuiting motion entirely.
 */
(function () {
  'use strict';

  var prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initParallax() {
    if (prefersReduced) return;
    var bg = document.querySelector('.ap-hero__bg');
    if (!bg) return;

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY;
        bg.style.transform = 'translate3d(0,' + (y * 0.08).toFixed(1) + 'px,0) scale(1.06)';
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initEscape() {
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') window.dispatchEvent(new CustomEvent('ap:dismiss'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initParallax();
      initEscape();
    });
  } else {
    initParallax();
    initEscape();
  }
})();

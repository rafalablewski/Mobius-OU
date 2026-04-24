import { useEffect } from 'react';

const JQUERY_PLUGIN_SCRIPTS = [
  '/assets/js/jquery-3.7.1.min.js',
  '/assets/js/viewport.jquery.js',
  '/assets/js/bootstrap.bundle.min.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/jquery.waypoints.js',
  '/assets/js/jquery.counterup.min.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/jquery.magnific-popup.min.js',
  '/assets/js/wow.min.js',
  '/assets/js/typed.min.js',
];

let scriptsLoaded = false;
let loadPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const el = document.createElement('script');
    el.src = src;
    el.async = false;
    el.onload = () => resolve();
    el.onerror = (err) => reject(err);
    document.body.appendChild(el);
  });
}

async function loadAllScripts() {
  if (scriptsLoaded) return;
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    for (const src of JQUERY_PLUGIN_SCRIPTS) {
      await loadScript(src);
    }
    scriptsLoaded = true;
  })();

  return loadPromise;
}

function applyDataBgSrc($) {
  $('[data-bg-src]').each(function () {
    const el = $(this);
    const bg = el.data('bg-src');
    if (bg) {
      el.css({
        'background-image': `url(${bg})`,
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      });
    }
  });
}

function initSwipers($) {
  const { Swiper } = window;
  if (!Swiper) return [];
  const instances = [];

  if ($('.ht-brand-slider').length > 0) {
    instances.push(
      new Swiper('.ht-brand-slider', {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        allowTouchMove: true,
        speed: 3000,
        centeredSlides: true,
        autoplay: { delay: 0, disableOnInteraction: false },
      }),
    );
  }

  if ($('.ht-testi-slider').length > 0) {
    instances.push(
      new Swiper('.ht-testi-slider', {
        spaceBetween: 30,
        speed: 900,
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: { delay: 5000, disableOnInteraction: false },
        navigation: { nextEl: '.ht-testi-next', prevEl: '.ht-testi-prev' },
        breakpoints: { 575: { slidesPerView: 1 }, 0: { slidesPerView: 1 } },
      }),
    );
  }

  if ($('.ht-testi-slider-2').length > 0) {
    instances.push(
      new Swiper('.ht-testi-slider-2', {
        spaceBetween: 30,
        slidesPerView: 3,
        speed: 2000,
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        navigation: { nextEl: '.ht-testi-next-2', prevEl: '.ht-testi-prev-2' },
        breakpoints: {
          1200: { slidesPerView: 3 },
          992: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          576: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        },
      }),
    );
  }

  if ($('.ht-testi-slider-3').length > 0) {
    instances.push(
      new Swiper('.ht-testi-slider-3', {
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 2000,
        loop: true,
        autoplay: { delay: 3500, disableOnInteraction: false },
        navigation: { nextEl: '.testi-slides-next', prevEl: '.testi-slides-prev' },
      }),
    );
  }

  if ($('.hero-img-slide').length > 0) {
    instances.push(
      new Swiper('.hero-img-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1200,
        loop: true,
        parallax: true,
        autoplay: { delay: 6000, disableOnInteraction: false },
        navigation: { nextEl: '.ht-hero-next' },
      }),
    );
  }

  return instances;
}

function initStickyHeader($) {
  const handler = function () {
    if ($(window).scrollTop() > 250) {
      $('#header-sticky').addClass('sticky');
    } else {
      $('#header-sticky').removeClass('sticky');
    }
  };
  $(window).off('scroll.mobiusSticky').on('scroll.mobiusSticky', handler);
  handler();
  return () => $(window).off('scroll.mobiusSticky');
}

function initBackToTop($) {
  const handler = function () {
    if ($(window).scrollTop() > 20) {
      $('#back-top').addClass('show');
    } else {
      $('#back-top').removeClass('show');
    }
  };
  $(window).off('scroll.mobiusBackTop').on('scroll.mobiusBackTop', handler);
  handler();
  return () => $(window).off('scroll.mobiusBackTop');
}

function initMouseCursor() {
  const inner = document.querySelector('.cursor-inner');
  const outer = document.querySelector('.cursor-outer');
  if (!inner || !outer) return () => {};

  const move = (e) => {
    inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };
  const hoverOn = () => {
    inner.classList.add('cursor-hover');
    outer.classList.add('cursor-hover');
  };
  const hoverOff = () => {
    inner.classList.remove('cursor-hover');
    outer.classList.remove('cursor-hover');
  };

  window.addEventListener('mousemove', move);
  document.querySelectorAll('a, .cursor-pointer').forEach((el) => {
    el.addEventListener('mouseenter', hoverOn);
    el.addEventListener('mouseleave', hoverOff);
  });
  inner.style.visibility = 'visible';
  outer.style.visibility = 'visible';

  return () => {
    window.removeEventListener('mousemove', move);
    document.querySelectorAll('a, .cursor-pointer').forEach((el) => {
      el.removeEventListener('mouseenter', hoverOn);
      el.removeEventListener('mouseleave', hoverOff);
    });
  };
}

export default function usePluginInit(pathname) {
  useEffect(() => {
    let cancelled = false;
    let swiperInstances = [];
    let cleanupSticky = () => {};
    let cleanupBackTop = () => {};
    let cleanupCursor = () => {};

    loadAllScripts()
      .then(() => {
        if (cancelled) return;
        const $ = window.jQuery;
        if (!$) return;

        applyDataBgSrc($);

        try {
          $('.img-popup').magnificPopup({
            type: 'image',
            gallery: { enabled: true },
          });
          $('.video-popup').magnificPopup({ type: 'iframe', callbacks: {} });
        } catch (_) {}

        try {
          $('.count').counterUp({ delay: 15, time: 4000 });
        } catch (_) {}

        try {
          if (window.WOW) new window.WOW().init();
        } catch (_) {}

        try {
          $('select').niceSelect();
        } catch (_) {}

        swiperInstances = initSwipers($);
        cleanupSticky = initStickyHeader($);
        cleanupBackTop = initBackToTop($);
        cleanupCursor = initMouseCursor();
      })
      .catch((err) => {
        console.error('Plugin init error', err);
      });

    return () => {
      cancelled = true;
      swiperInstances.forEach((s) => {
        try {
          s.destroy(true, true);
        } catch (_) {}
      });
      cleanupSticky();
      cleanupBackTop();
      cleanupCursor();
    };
  }, [pathname]);
}

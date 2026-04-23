import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Offcanvas from './Offcanvas.jsx';
import usePluginInit from '../hooks/usePluginInit.js';
import useScrollTop from '../hooks/useScrollTop.js';

export default function Layout() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const location = useLocation();

  useScrollTop();
  usePluginInit(location.pathname);

  useEffect(() => {
    setOffcanvasOpen(false);
  }, [location.pathname]);

  return (
    <>
      <button
        id="back-top"
        className="back-to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <Header onOffcanvasOpen={() => setOffcanvasOpen(true)} />
      <Offcanvas open={offcanvasOpen} onClose={() => setOffcanvasOpen(false)} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import Services from './sections/Services.jsx';
import WhyUs from './sections/WhyUs.jsx';
import Programs from './sections/Programs.jsx';
import Testimonials from './sections/Testimonials.jsx';
import About from './sections/About.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  useReveal();

  useEffect(() => {
    document.body.classList.toggle('ap-lock', navOpen);
    return () => document.body.classList.remove('ap-lock');
  }, [navOpen]);

  return (
    <>
      <Nav open={navOpen} onOpen={() => setNavOpen(true)} onClose={() => setNavOpen(false)} />
      <main id="top">
        <Hero />
        <Services />
        <WhyUs />
        <Programs />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

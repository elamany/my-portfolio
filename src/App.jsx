import { useEffect } from 'react';
import Background from './components/Background.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Smooth-scroll with fixed-header offset
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - 88;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', id);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Background />
      <ProgressBar />
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
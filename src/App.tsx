import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Historia } from './components/Historia';
import { Inspiracao } from './components/Inspiracao';
import { Solidario } from './components/Solidario';
import { Participar } from './components/Participar';
import { Patrocinadores } from './components/Patrocinadores';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { ShowModal } from './components/ShowModal';
import { ShowCardData } from './types';

export const App: React.FC = () => {
  const [selectedShow, setSelectedShow] = useState<ShowCardData | null>(null);

  useEffect(() => {
    // Scroll restoration from session storage
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const restoreScroll = () => {
      try {
        const s = sessionStorage.getItem('saved_scroll_y');
        if (s !== null) {
          const y = parseInt(s, 10);
          if (!isNaN(y)) window.scrollTo(0, y);
        }
      } catch (_) {}
    };

    restoreScroll();

    let scrollDebounce: any;
    const handleScroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        try {
          sessionStorage.setItem('saved_scroll_y', String(window.scrollY));
        } catch (_) {}
      }, 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', () => {
      try {
        sessionStorage.setItem('saved_scroll_y', String(window.scrollY));
      } catch (_) {}
    });

    // Smooth scroll for internal anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        try {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (_) {}
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Parallax hero drift and reveal animations
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window && !reduceMotion) {
      document.documentElement.classList.add('js-motion');
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: '180px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el));
    }

    let pending = false;
    const handleParallaxScroll = () => {
      if (pending || reduceMotion) return;
      pending = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          '--hero-drift',
          Math.min(window.scrollY * 0.1, 65) + 'px'
        );
        pending = false;
      });
    };

    if (!reduceMotion) {
      window.addEventListener('scroll', handleParallaxScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
      if (!reduceMotion) {
        window.removeEventListener('scroll', handleParallaxScroll);
      }
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip" href="#historia">
        Pular para o conteúdo
      </a>

      <AudioPlayer />

      <Header />

      <main>
        <Hero />
        <Historia />
        <Inspiracao onSelectShow={(show) => setSelectedShow(show)} />
        <Solidario />
        <Participar />
        <Patrocinadores />
        <Closing />
      </main>

      <Footer />

      <ShowModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </>
  );
};

export default App;

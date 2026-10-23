import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Historia } from './components/Historia';
import { MarqueeStrip } from './components/MarqueeStrip';
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
    // Ensure manual scroll restoration so we control exact behavior
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Detect if this is a reload (F5) or fresh open
    let isReload = false;
    try {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries && navEntries.length > 0) {
        isReload = (navEntries[0] as PerformanceNavigationTiming).type === 'reload';
      } else {
        isReload = (performance as any)?.navigation?.type === 1;
      }
    } catch (_) {
      isReload = false;
    }

    if (isReload) {
      // On F5 (reload), keep the exact current scroll position
      try {
        const savedY = sessionStorage.getItem('saved_scroll_y');
        if (savedY !== null) {
          const y = parseInt(savedY, 10);
          if (!isNaN(y)) {
            window.scrollTo({ top: y, left: 0, behavior: 'instant' as ScrollBehavior });
          }
        }
      } catch (_) {}
    } else {
      // On opening the site, always start at the top (never in the donation section)
      try {
        sessionStorage.removeItem('saved_scroll_y');
      } catch (_) {}

      // Clear any hash that could cause unwanted auto-scroll
      if (window.location.hash) {
        try {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (_) {}
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      });
    }

    let scrollDebounce: any;
    const handleScroll = () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(() => {
        try {
          sessionStorage.setItem('saved_scroll_y', String(window.scrollY));
        } catch (_) {}
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', () => {
      try {
        sessionStorage.setItem('saved_scroll_y', String(window.scrollY));
      } catch (_) {}
    });

    // Smooth scroll for internal anchor links and return to top
    const handleAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      // Returning to top (e.g. "Voltar ao início", header logo)
      if (href === '#inicio' || href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        try {
          sessionStorage.setItem('saved_scroll_y', '0');
          history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (_) {}
        return;
      }

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
        { threshold: 0.08, rootMargin: '40px 0px -20px 0px' }
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
        <MarqueeStrip />
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

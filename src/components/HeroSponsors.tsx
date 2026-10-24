import React from 'react';

export const HeroSponsors: React.FC = () => {
  const sponsors = [
    {
      id: 1,
      name: 'Patrocinador 1',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Patrocinador 2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v3m0 12v3M3 12h3m12 0h3M7.05 7.05l2.12 2.12m5.66 5.66l2.12 2.12M7.05 16.95l2.12-2.12m5.66-5.66l2.12-2.12" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Patrocinador 3',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8m-3-5l3-3 3 3" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Patrocinador 4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.267-8-12.356-8-5.096 0-5.096 8 0 8 5.09 0 7.261-8 12.356-8z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Patrocinador 5',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 10v11m4-11v11m6-11v11m4-11v11M12 3L2 10h20L12 3z" />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Patrocinador 6',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
        </svg>
      ),
    },
  ];

  return (
    <div className="hero-sponsors-row" role="region" aria-label="Patrocinadores do evento">
      {sponsors.map((s) => (
        <div key={s.id} className="hero-sponsor-sq" title={s.name} aria-label={s.name}>
          <div className="hero-sponsor-sq-icon">{s.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroSponsors;


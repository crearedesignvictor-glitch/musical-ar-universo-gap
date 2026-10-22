import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <a className="header-logo" href="#inicio" aria-label="Universo GAP, início">
        <img
          className="gap-header-logo"
          src="/assets/gap-logo.png"
          alt="Universo GAP"
          width="265"
          height="258"
        />
      </a>
    </header>
  );
};

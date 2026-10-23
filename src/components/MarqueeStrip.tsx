import React from 'react';

const WORDS = [
  'HISTÓRIAS',
  'INFÂNCIA',
  'TEATRO',
  'MÚSICA',
  'FUTURO',
  'CRIATIVIDADE',
  'CIÊNCIA',
  'INSPIRAÇÃO',
  'ESPERANÇA',
];

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="marquee-ribbon" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1, 2].map((loopIndex) => (
          <div key={loopIndex} className="marquee-group">
            {WORDS.map((word, i) => (
              <React.Fragment key={`${loopIndex}-${i}`}>
                <span className="marquee-word">{word}</span>
                <span className="marquee-star">✳</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

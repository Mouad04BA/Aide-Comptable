import React from 'react';

const DigitalVisionaryIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="An abstract illustration representing artificial intelligence, with glowing nodes and gears.">
       <style>{`
        .spark { animation: sparkle 2s ease-in-out infinite; }
        .spark-1 { animation-delay: 0s; }
        .spark-2 { animation-delay: 0.5s; }
        .spark-3 { animation-delay: 1s; }
        .gear { animation: rotate 10s linear infinite; transform-origin: center; }
        .gear-rev { animation: rotate-rev 10s linear infinite; transform-origin: center; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotate-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes sparkle { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
      `}</style>
      <path d="M100 180 A80 80 0 0 1 100 20" fill="none" stroke="currentColor" strokeWidth="3" className="text-gray-300 dark:text-gray-600"/>
      <path d="M100 180 A60 60 0 0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-600" strokeDasharray="5 5"/>
      <g className="fill-primary dark:fill-primary-dark">
        <circle cx="100" cy="100" r="15" className="spark spark-1"/>
        <path d="M100 85 L100 50 M100 115 L100 150 M85 100 L50 100 M115 100 L150 100" stroke="currentColor" strokeWidth="2" className="text-primary dark:text-primary-dark" />
      </g>
      <g className="fill-secondary dark:fill-green-400 opacity-80">
        <circle cx="70" cy="70" r="20" />
        <circle cx="130" cy="130" r="25" />
        <path d="M70 70 m-18 0 l-5 -5 l10 0 l-5 5 z" className="gear-rev" />
        <path d="M130 130 m-23 0 l-5 -5 l10 0 l-5 5 z" className="gear" />
      </g>
    </svg>
  );
};

export default DigitalVisionaryIllustration;

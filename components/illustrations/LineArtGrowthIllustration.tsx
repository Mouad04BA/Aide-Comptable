import React from 'react';

const LineArtGrowthIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="An abstract illustration representing financial growth and data analysis.">
      <style>{`
        .path-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s ease-in-out forwards;
        }
        
        .line-1 { animation-delay: 0s; }
        .line-2 { animation-delay: 0.3s; }
        .line-3 { animation-delay: 0.6s; }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .bar-grow {
            transform-origin: bottom;
            animation: grow 1s ease-out forwards;
        }
        
        .bar-1 { animation-delay: 0.5s; transform: scaleY(0); }
        .bar-2 { animation-delay: 0.8s; transform: scaleY(0); }
        .bar-3 { animation-delay: 1.1s; transform: scaleY(0); }
        .bar-4 { animation-delay: 1.4s; transform: scaleY(0); }

        @keyframes grow {
            from { transform: scaleY(0); }
            to { transform: scaleY(1); }
        }

        .sparkle {
            animation: sparkle-anim 1.5s ease-in-out infinite;
            transform-origin: center;
        }
        .sparkle-1 { animation-delay: 1.8s; }
        .sparkle-2 { animation-delay: 2.1s; }
        .sparkle-3 { animation-delay: 2.4s; }

        @keyframes sparkle-anim {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>

      {/* Background flowing lines */}
      <path d="M 20 280 C 100 200, 150 150, 250 180 S 350 220, 380 150" fill="none" className="path-draw line-1 stroke-gray-200 dark:stroke-gray-700" strokeWidth="2" />
      <path d="M 30 150 C 120 180, 180 80, 300 100 S 360 140, 390 120" fill="none" className="path-draw line-2 stroke-gray-200 dark:stroke-gray-700" strokeWidth="2" />
      
      {/* Main Arrow / Chart */}
      <g>
        {/* Bars */}
        <rect x="100" y="180" width="30" height="60" rx="4" className="bar-grow bar-1 fill-blue-200 dark:fill-blue-800" />
        <rect x="140" y="150" width="30" height="90" rx="4" className="bar-grow bar-2 fill-blue-300 dark:fill-blue-700" />
        <rect x="180" y="120" width="30" height="120" rx="4" className="bar-grow bar-3 fill-blue-400 dark:fill-blue-600" />
        
        {/* Arrow Head */}
        <g className="bar-grow bar-4">
            <rect x="220" y="90" width="30" height="150" rx="4" className="fill-primary dark:fill-primary-dark" />
            <path d="M 235 70 L 275 95 L 235 120 Z" className="fill-primary dark:fill-primary-dark" />
        </g>
      </g>
      
      {/* Sparkles */}
      <g className="fill-secondary dark:fill-green-400">
          <path d="M 290 85 l 5 5 -5 5 -5 -5 z" className="sparkle sparkle-1" />
          <path d="M 310 60 l 3 3 -3 3 -3 -3 z" className="sparkle sparkle-2" />
          <path d="M 280 50 l 4 4 -4 4 -4 -4 z" className="sparkle sparkle-3" />
      </g>
      
    </svg>
  );
};

export default LineArtGrowthIllustration;
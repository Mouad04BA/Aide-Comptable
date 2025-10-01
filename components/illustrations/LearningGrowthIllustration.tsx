import React from 'react';

const LearningGrowthIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="An illustration of a plant with coin-shaped leaves, symbolizing learning and financial growth.">
      <style>{`
        .leaf { animation: grow-leaf 2s ease-out forwards; transform-origin: bottom; opacity: 0; }
        .leaf-1 { animation-delay: 0.5s; }
        .leaf-2 { animation-delay: 0.8s; }
        .leaf-3 { animation-delay: 1.1s; }
        .leaf-4 { animation-delay: 1.4s; }
        .stem { stroke-dasharray: 200; stroke-dashoffset: 200; animation: draw-stem 2s ease-out forwards; }
        @keyframes draw-stem { to { stroke-dashoffset: 0; } }
        @keyframes grow-leaf { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
      <path d="M100 180 Q100 100 120 80 T 100 40 T 80 20" stroke="currentColor" strokeWidth="4" fill="none" className="stem text-green-500 dark:text-green-400" />
      <g className="fill-amber-400 dark:fill-amber-500 stroke-amber-600 dark:stroke-amber-400" strokeWidth="1">
        <circle cx="70" cy="140" r="15" className="leaf leaf-1" />
        <circle cx="130" cy="110" r="18" className="leaf leaf-2" />
        <circle cx="85" cy="65" r="20" className="leaf leaf-3" />
        <circle cx="115" cy="30" r="22" className="leaf leaf-4" />
      </g>
    </svg>
  );
};

export default LearningGrowthIllustration;

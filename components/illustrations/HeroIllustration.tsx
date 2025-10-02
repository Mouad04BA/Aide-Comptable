import React from 'react';

const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An abstract, animated illustration representing various accounting concepts like ledgers, calculators, and financial growth.">
        <style>{`
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
            }
            @keyframes pulse {
                0% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.05); opacity: 1; }
                100% { transform: scale(1); opacity: 0.8; }
            }
            .float-1 { animation: float 6s ease-in-out infinite; }
            .float-2 { animation: float 8s ease-in-out infinite; animation-delay: -2s; }
            .float-3 { animation: float 7s ease-in-out infinite; animation-delay: -4s; }
            .float-4 { animation: float 5s ease-in-out infinite; animation-delay: -1s; }
            .pulse-1 { animation: pulse 3s ease-in-out infinite; }
        `}</style>

        {/* Main background shape */}
        <path d="M 50 225 A 200 200 0 1 1 450 225 A 200 200 0 1 1 50 225" className="fill-blue-50 dark:fill-gray-800" />
        
        {/* Central Element: Ledger/Book */}
        <g className="float-1" style={{ transformOrigin: 'center center' }}>
          <g transform="translate(180 180) rotate(-15)">
            <rect x="0" y="0" width="140" height="90" rx="8" className="fill-white dark:fill-dark-card shadow-lg" filter="drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))" />
            <rect x="5" y="5" width="130" height="80" rx="5" className="fill-none stroke-primary dark:stroke-primary-dark" strokeWidth="2" />
            <path d="M 15 25 H 125 M 15 45 H 125 M 15 65 H 90" className="stroke-gray-300 dark:stroke-gray-600" strokeWidth="1.5" />
            <rect x="70" y="0" width="2" height="90" className="fill-gray-200 dark:fill-gray-700" />
          </g>
        </g>
        
        {/* Floating Element 1: Calculator */}
        <g className="float-2" style={{ transformOrigin: 'center center' }}>
          <g transform="translate(80 100) rotate(20)">
            <rect x="0" y="0" width="70" height="90" rx="8" className="fill-white dark:fill-dark-card shadow-md" filter="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" />
            <rect x="5" y="5" width="60" height="20" rx="4" className="fill-gray-200 dark:fill-dark-bg" />
            <g className="fill-gray-400 dark:fill-gray-500">
                <circle cx="15" cy="40" r="5" /><circle cx="35" cy="40" r="5" /><circle cx="55" cy="40" r="5" />
                <circle cx="15" cy="60" r="5" /><circle cx="35" cy="60" r="5" /><circle cx="55" cy="60" r="5" />
            </g>
          </g>
        </g>

        {/* Floating Element 2: Bar Chart */}
        <g className="float-3" style={{ transformOrigin: 'center center' }}>
          <g transform="translate(320 120) rotate(-25)">
            <rect x="0" y="40" width="20" height="40" rx="3" className="fill-green-200 dark:fill-green-800" />
            <rect x="25" y="20" width="20" height="60" rx="3" className="fill-green-300 dark:fill-green-700" />
            <rect x="50" y="0" width="20" height="80" rx="3" className="fill-secondary dark:fill-green-500" />
          </g>
        </g>

        {/* Floating Element 3: Coin */}
        <g className="float-4 pulse-1" style={{ transformOrigin: 'center center' }}>
          <g transform="translate(350 280) rotate(10)">
            <circle cx="0" cy="0" r="35" className="fill-amber-400 dark:fill-amber-500" />
            <circle cx="0" cy="0" r="30" className="fill-amber-300 dark:fill-amber-400" />
            <text x="0" y="5" textAnchor="middle" className="font-bold text-lg fill-amber-800 dark:fill-amber-700">MAD</text>
          </g>
        </g>

        {/* Decorative dots */}
        <circle cx="60" cy="350" r="8" className="fill-blue-100 dark:fill-blue-900" />
        <circle cx="150" cy="80" r="5" className="fill-green-100 dark:fill-green-900" />
        <circle cx="440" y="200" r="10" className="fill-blue-100 dark:fill-blue-900" />
      </svg>
    </div>
  );
};

export default HeroIllustration;
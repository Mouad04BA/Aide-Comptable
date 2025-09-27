import React from 'react';

const TaxesAnimation: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="An animated illustration of a calculator with currency symbols floating up.">
            <style>{`
                @keyframes float-up {
                    0% { transform: translateY(0) scale(0.8); opacity: 1; }
                    100% { transform: translateY(-50px) scale(1.2); opacity: 0; }
                }
                .float-1 { animation: float-up 4s ease-out infinite; animation-delay: 0.2s; }
                .float-2 { animation: float-up 5s ease-out infinite; animation-delay: 1.8s; }
                .float-3 { animation: float-up 4.5s ease-out infinite; animation-delay: 3.1s; }
            `}</style>
            
            {/* Currency symbols */}
            <g className="font-bold text-3xl fill-secondary dark:fill-green-400 opacity-80">
                <text x="40" y="80" className="float-1">MAD</text>
                <text x="140" y="80" className="float-2">$</text>
                <text x="90" y="80" className="float-3">€</text>
            </g>

            {/* Calculator Body */}
            <g filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))">
                <rect x="50" y="50" width="100" height="100" rx="10" className="fill-white dark:fill-dark-card" />
                <rect x="60" y="60" width="80" height="25" rx="5" className="fill-gray-200 dark:fill-dark-bg" />
                <g className="fill-gray-400 dark:fill-gray-600">
                    <rect x="65" y="95" width="15" height="10" rx="2" />
                    <rect x="92.5" y="95" width="15" height="10" rx="2" />
                    <rect x="120" y="95" width="15" height="10" rx="2" />
                    <rect x="65" y="115" width="15" height="10" rx="2" />
                    <rect x="92.5" y="115" width="15" height="10" rx="2" />
                    <rect x="120" y="115" width="15" height="10" rx="2" />
                </g>
            </g>
        </svg>
    );
};

export default TaxesAnimation;
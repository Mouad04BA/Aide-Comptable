import React from 'react';

const ChartOfAccountsAnimation: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="An animated illustration of an open accounting ledger with numbers floating out.">
             <style>{`
                @keyframes float-out {
                    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translate(var(--tx, 0), var(--ty, -30px)) scale(1.1) rotate(var(--r, 0deg)); opacity: 0; }
                }
                .num-float-1 { animation: float-out 5s ease-in-out infinite; animation-delay: 0.1s; --tx: -25px; --ty: -45px; --r: -15deg; }
                .num-float-2 { animation: float-out 4.5s ease-in-out infinite; animation-delay: 1.2s; --tx: 15px; --ty: -40px; --r: 10deg; }
                .num-float-3 { animation: float-out 5.5s ease-in-out infinite; animation-delay: 2.6s; --tx: 35px; --ty: -55px; --r: 20deg; }
                .num-float-4 { animation: float-out 4s ease-in-out infinite; animation-delay: 3.8s; --tx: -35px; --ty: -50px; --r: -5deg; }
            `}</style>

            {/* Floating Numbers */}
            <g className="font-mono font-semibold text-primary dark:text-primary-dark opacity-90">
                <text x="80" y="50" className="num-float-1 text-lg">1111</text>
                <text x="100" y="50" className="num-float-2 text-sm">C.1</text>
                <text x="120" y="50" className="num-float-3 text-lg">7111</text>
                <text x="90" y="50" className="num-float-4 text-sm">C.4</text>
            </g>

            {/* Book */}
            <g filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))">
                {/* Back Cover */}
                <path d="M 10 110 L 10 10 L 100 0 L 100 100 Z" className="fill-gray-300 dark:fill-gray-700" />
                <path d="M 190 110 L 190 10 L 100 0 L 100 100 Z" className="fill-gray-300 dark:fill-gray-700" />
                {/* Pages */}
                <path d="M 20 105 L 20 15 L 100 5 L 100 95 Z" className="fill-white dark:fill-dark-card" />
                <path d="M 180 105 L 180 15 L 100 5 L 100 95 Z" className="fill-white dark:fill-dark-card" />
                {/* Lines on pages */}
                <g className="stroke-gray-200 dark:stroke-gray-600" strokeWidth="1">
                    <line x1="30" y1="30" x2="90" y2="22" />
                    <line x1="30" y1="45" x2="90" y2="37" />
                    <line x1="30" y1="60" x2="90" y2="52" />
                    <line x1="30" y1="75" x2="90" y2="67" />

                    <line x1="110" y1="22" x2="170" y2="30" />
                    <line x1="110" y1="37" x2="170" y2="45" />
                    <line x1="110" y1="52" x2="170" y2="60" />
                    <line x1="110" y1="67" x2="170" y2="75" />
                </g>
                {/* Binding */}
                <rect x="97" y="2" width="6" height="106" rx="2" className="fill-primary dark:fill-primary-dark" />
            </g>
        </svg>
    );
};

export default ChartOfAccountsAnimation;
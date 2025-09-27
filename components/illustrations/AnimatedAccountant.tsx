import React from 'react';

const AnimatedAccountant: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An animated illustration of a friendly accountant working at their desk.">
        <style>{`
            .shadow { filter: drop-shadow(0px 8px 6px rgba(0,0,0,0.1)); }
            html.dark .shadow { filter: drop-shadow(0px 8px 6px rgba(0,0,0,0.25)); }
            
            @keyframes subtle-sway {
                0%, 100% { transform: translateY(0) rotate(-0.5deg); }
                50% { transform: translateY(-3px) rotate(0.5deg); }
            }
            .animate-sway { animation: subtle-sway 8s ease-in-out infinite; }

            @keyframes head-bob {
                0%, 100% { transform: translateY(0) rotate(1deg); }
                50% { transform: translateY(2px) rotate(-1deg); }
            }
            .head { animation: head-bob 6s ease-in-out infinite alternate; }

            @keyframes draw-line {
                to { stroke-dashoffset: 0; }
            }
            .graph-line {
                stroke-dasharray: 150;
                stroke-dashoffset: 150;
                animation: draw-line 3s ease-in-out infinite;
                animation-delay: 0.5s;
            }
            
            @keyframes blink-cursor {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .cursor {
                animation: blink-cursor 1s step-end infinite;
            }
        `}</style>
        
        <path d="M0 320 H 600 V 400 H 0 Z" className="fill-gray-100 dark:fill-gray-800" />
        
        <g className="shadow">
            <g>
                <path d="M50 340 L 550 340 L 580 200 L 20 200 Z" className="fill-gray-200 dark:fill-gray-700" />
                <rect x="20" y="200" width="560" height="20" rx="5" className="fill-white dark:fill-gray-600" />
                <rect x="80" y="340" width="20" height="50" className="fill-gray-300 dark:fill-gray-500" />
                <rect x="500" y="340" width="20" height="50" className="fill-gray-300 dark:fill-gray-500" />
            </g>
            
            <g className="animate-sway">
                <rect x="260" y="220" width="80" height="130" rx="10" className="fill-primary/80 dark:fill-primary-dark/80" />
                <rect x="290" y="350" width="20" height="40" className="fill-gray-400 dark:fill-gray-500" />
                <path d="M250 390 H 350 L 340 400 H 260 Z" className="fill-gray-400 dark:fill-gray-500" />
            </g>

            <g transform="translate(245, 100)" className="animate-sway" style={{animationDelay: '-2s'}}>
                <path d="M35 50 C 35 30, 115 30, 115 50 V 130 H 35 Z" className="fill-teal-600 dark:fill-teal-500" />
                <g className="head">
                    <circle cx="75" cy="30" r="25" className="fill-orange-200 dark:fill-orange-300" />
                    <path d="M50 20 Q 75 0, 100 20 V 30 H 50 Z" className="fill-gray-800 dark:fill-gray-700" />
                </g>
                <rect x="65" y="50" width="20" height="10" className="fill-orange-200 dark:fill-orange-300" />
                <path d="M60 60 L 75 75 L 90 60 Z" fill="white" />
            </g>
            
            <g transform="translate(350, 130)">
                <path d="M0 70 L 150 70 L 145 75 H 5 Z" className="fill-gray-400 dark:fill-gray-500" />
                <rect x="10" y="0" width="130" height="70" rx="5" className="fill-gray-300 dark:fill-gray-600" />
                <rect x="15" y="5" width="120" height="60" rx="2" className="fill-primary/80 dark:fill-primary-dark/80" />
                <path d="M25 50 C 45 15, 65 55, 125 30" className="graph-line stroke-white/80" fill="none" strokeWidth="3" strokeLinecap="round"/>
                <rect x="126" y="28" width="2" height="10" className="cursor fill-white/80" />
            </g>

            <g transform="translate(100, 155)">
                <rect x="0" y="0" width="100" height="60" rx="3" transform="rotate(-5)" className="fill-white dark:fill-gray-400" />
                <rect x="5" y="5" width="90" height="50" rx="3" transform="rotate(5)" className="fill-white dark:fill-gray-400" />
                 <line x1="15" y1="15" x2="85" y2="15" className="stroke-gray-300 dark:stroke-gray-500" strokeWidth="2" transform="rotate(5)"/>
                 <line x1="15" y1="25" x2="75" y2="25" className="stroke-gray-300 dark:stroke-gray-500" strokeWidth="2" transform="rotate(5)"/>
                 <line x1="15" y1="35" x2="85" y2="35" className="stroke-gray-300 dark:stroke-gray-500" strokeWidth="2" transform="rotate(5)"/>
            </g>
            
             <g transform="translate(220, 150)">
                <rect x="0" y="0" width="50" height="65" rx="5" className="fill-gray-700 dark:fill-gray-800"/>
                <rect x="5" y="5" width="40" height="15" rx="2" className="fill-green-300 dark:fill-green-400 opacity-80" />
                <text x="40" y="15" textAnchor="end" alignmentBaseline="middle" className="fill-gray-800/70 font-mono font-bold text-xs cursor">|</text>
                <g className="fill-gray-500 dark:fill-gray-600">
                    <rect x="7" y="25" width="8" height="8" rx="2"/><rect x="21" y="25" width="8" height="8" rx="2"/><rect x="35" y="25" width="8" height="8" rx="2"/>
                    <rect x="7" y="38" width="8" height="8" rx="2"/><rect x="21" y="38" width="8" height="8" rx="2"/><rect x="35" y="38" width="8" height="8" rx="2"/>
                </g>
            </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedAccountant;
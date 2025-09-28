import React from 'react';

const AnimatedAccountant: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An illustration of a friendly accountant working at their desk.">
        <style>{`
            @keyframes float-rotate {
                0% { transform: translateY(0px) rotate(-2deg); }
                50% { transform: translateY(-12px) rotate(2deg); }
                100% { transform: translateY(0px) rotate(-2deg); }
            }
            @keyframes breathe {
                0% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-2px) scale(1.01); }
                100% { transform: translateY(0) scale(1); }
            }
            .float-1 { animation: float-rotate 6s ease-in-out infinite; animation-delay: 0s; }
            .float-2 { animation: float-rotate 7s ease-in-out infinite; animation-delay: -1.5s; }
            .float-3 { animation: float-rotate 5s ease-in-out infinite; animation-delay: -3s; }
            .breathe {
                animation: breathe 8s ease-in-out infinite;
                transform-origin: center bottom;
            }
        `}</style>
        
        {/* Floating elements - background */}
        <g className="float-1" style={{ transformOrigin: 'center' }}>
            {/* Blue Calculator */}
            <rect x="60" y="80" width="80" height="100" rx="10" className="fill-sky-300 dark:fill-sky-600" />
            <rect x="70" y="90" width="60" height="25" rx="5" className="fill-orange-400 dark:fill-orange-500" />
            <g className="fill-white dark:fill-gray-300">
                <circle cx="80" cy="125" r="5" />
                <circle cx="100" cy="125" r="5" />
                <circle cx="120" cy="125" r="5" />
                <circle cx="80" cy="145" r="5" />
                <circle cx="100" cy="145" r="5" />
                <circle cx="120" cy="145" r="5" />
                <circle cx="80" cy="165" r="5" />
                <circle cx="100" cy="165" r="5" />
                <circle cx="120" cy="165" r="5" />
            </g>
        </g>
        <g className="float-2" style={{ transformOrigin: 'center' }}>
            {/* Green Calendar */}
            <rect x="350" y="90" width="90" height="70" rx="10" className="fill-green-500 dark:fill-green-600" />
            <g className="stroke-white dark:stroke-gray-200" strokeWidth="2">
                <line x1="350" y1="110" x2="440" y2="110" />
                <line x1="350" y1="130" x2="440" y2="130" />
                <line x1="380" y1="90" x2="380" y2="160" />
                <line x1="410" y1="90" x2="410" y2="160" />
            </g>
        </g>
        
        {/* Desk */}
        <path d="M20 350 H480 V420 H20 Z" className="fill-amber-600 dark:fill-amber-800" />
        <path d="M10 330 H490 L480 350 H20 Z" className="fill-amber-800 dark:fill-amber-900" />

        {/* Person */}
        <g className="breathe">
            {/* Body */}
            <path d="M180 340 C 180 250, 320 250, 320 340 Z" className="fill-blue-500 dark:fill-blue-600" />
            {/* Shirt */}
            <path d="M220 280 L250 310 L280 280 Z" className="fill-white" />
            {/* Tie */}
            <path d="M250 280 L240 330 L260 330 Z" className="fill-red-600 dark:fill-red-500" />
            {/* Head */}
            <circle cx="250" cy="210" r="70" className="fill-orange-200 dark:fill-orange-300" />
            {/* Hair */}
            <path d="M190 210 Q 250 140, 310 210 A 70 70 0 0 1 190 210 Z" className="fill-amber-800 dark:fill-amber-900" />
            {/* Glasses */}
            <g className="stroke-gray-800 dark:stroke-gray-200" strokeWidth="5" fill="none">
                <circle cx="220" cy="215" r="20" />
                <circle cx="280" cy="215" r="20" />
                <line x1="240" y1="215" x2="260" y2="215" />
            </g>
            {/* Eyes */}
            <g className="fill-gray-800 dark:fill-gray-200">
              <circle cx="220" cy="215" r="5" />
              <circle cx="280" cy="215" r="5" />
            </g>
            {/* Smile */}
            <path d="M230 250 Q250 265, 270 250" className="stroke-gray-800 dark:stroke-gray-200" strokeWidth="3" fill="none" />
            {/* Hands */}
            <g className="fill-orange-200 dark:fill-orange-300">
                <circle cx="180" cy="340" r="20" />
                <circle cx="320" cy="340" r="20" />
            </g>
        </g>
        
        {/* Items on desk */}
        <g transform="translate(0 10)">
            <rect x="150" y="330" width="80" height="100" rx="10" className="fill-slate-700 dark:fill-slate-800" />
            <rect x="160" y="340" width="60" height="20" rx="5" className="fill-green-300 dark:fill-green-400" />
            <g className="fill-slate-500 dark:fill-slate-400">
                <rect x="160" y="365" width="15" height="10" rx="3" />
                <rect x="182.5" y="365" width="15" height="10" rx="3" />
                <rect x="205" y="365" width="15" height="10" rx="3" />
                <rect x="160" y="380" width="15" height="10" rx="3" />
                <rect x="182.5" y="380" width="15" height="10" rx="3" />
                <rect x="205" y="380" width="15" height="10" rx="3" />
            </g>
            <rect x="260" y="335" width="100" height="80" rx="5" className="fill-sky-200 dark:fill-sky-700" />
            <g className="stroke-sky-300 dark:stroke-sky-600" strokeWidth="2">
                <line x1="270" y1="350" x2="350" y2="350" />
                <line x1="270" y1="365" x2="350" y2="365" />
                <line x1="270" y1="380" x2="330" y2="380" />
            </g>
        </g>
        
        {/* Floating coins */}
        <g className="float-3" style={{ transformOrigin: 'center' }}>
            {/* Coin stack */}
            <ellipse cx="400" cy="330" rx="30" ry="10" className="fill-amber-400" />
            <path d="M370 330 V310 A30 10 0 0 1 430 310 V330 A30 10 0 0 1 370 330" className="fill-amber-200" />
            <ellipse cx="400" cy="310" rx="30" ry="10" className="fill-amber-400" />
            <ellipse cx="400" cy="320" rx="30" ry="10" className="fill-amber-400 stroke-amber-600" strokeWidth="1" />
            <text x="400" y="314" textAnchor="middle" fontSize="12" fontWeight="bold" className="fill-amber-800 dark:fill-amber-700">MAD</text>
        </g>
        <g className="float-1" style={{ transformOrigin: 'center', animationDelay: '-1s' }}>
             {/* Single Coin */}
            <circle cx="100" cy="280" r="30" className="fill-amber-400" />
            <circle cx="100" cy="280" r="25" className="fill-amber-200" />
            <text x="100" y="285" textAnchor="middle" fontSize="18" fontWeight="bold" className="fill-amber-800 dark:fill-amber-700">MAD</text>
        </g>
         <g className="float-2" style={{ transformOrigin: 'center', animationDelay: '-2s' }}>
             {/* Another Coin */}
            <circle cx="430" cy="240" r="25" className="fill-amber-400" />
            <circle cx="430" cy="240" r="20" className="fill-amber-200" />
            <text x="430" y="244" textAnchor="middle" fontSize="14" fontWeight="bold" className="fill-amber-800 dark:fill-amber-700">MAD</text>
        </g>

        {/* Stars and dots */}
        <g className="fill-amber-500 dark:fill-amber-400">
            <path d="M340 250 l5 15 l15-5 l-10 10 l10 10 l-15-5 l-5 15 l-5-15 l-15 5 l10-10 l-10-10 l15 5 z" />
        </g>
         <g className="fill-blue-500 dark:fill-blue-600">
             <circle cx="50" cy="300" r="5" />
             <circle cx="150" cy="60" r="4" />
             <circle cx="460" cy="380" r="6" />
         </g>
      </svg>
    </div>
  );
};

export default AnimatedAccountant;
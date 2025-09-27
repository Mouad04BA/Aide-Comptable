import React, { useLayoutEffect, useRef } from 'react';

// Base SVGs with colorful gradients and glows
// Note: Each SVG has its own filter and gradient defs for encapsulation.

const CalculatorSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 120 180" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="calcScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g>
            <rect x="1" y="1" width="118" height="178" rx="15" className="fill-gray-200/50 dark:fill-gray-800/50" />
            <rect x="10" y="10" width="100" height="50" rx="8" fill="url(#calcScreenGrad)" style={{ filter: 'url(#glow)' }} />
            <g className="fill-gray-400 dark:fill-gray-600">
                 {[...Array(4)].map((_, row) =>
                    [...Array(3)].map((_, col) => (
                    <rect key={`${row}-${col}`} x={15 + col * 35} y={70 + row * 25} width="20" height="15" rx="4" opacity="0.5"/>
                    ))
                )}
            </g>
        </g>
    </svg>
);

const LaptopSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 220 125" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                 <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g>
            <path d="M0 120 L220 120 L210 124 H10 Z" className="fill-gray-200/80 dark:fill-gray-800/80" />
            <rect x="20" y="5" width="180" height="114" rx="5" className="fill-gray-200/50 dark:fill-gray-800/50" />
            <rect x="30" y="15" width="160" height="94" rx="2" fill="url(#laptopScreenGrad)" style={{ filter: 'url(#glow)' }} />
        </g>
    </svg>
);

const TabletSVG: React.FC<{ className?: string }> = ({ className }) => (
     <svg viewBox="0 0 100 140" className={className} xmlns="http://www.w3.org/2000/svg">
         <defs>
            <linearGradient id="tabletScreenGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g>
            <rect x="1" y="1" width="98" height="138" rx="10" className="fill-gray-200/50 dark:fill-gray-800/50"/>
            <rect x="8" y="8" width="84" height="124" rx="5" fill="url(#tabletScreenGrad)" style={{ filter: 'url(#glow)' }} />
        </g>
     </svg>
);

const PhoneSVG: React.FC<{ className?: string }> = ({ className }) => (
     <svg viewBox="0 0 60 120" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#34d399', stopOpacity: 1 }} />
            </linearGradient>
             <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <g>
            <rect x="1" y="1" width="58" height="118" rx="12" className="fill-gray-200/50 dark:fill-gray-800/50" />
            <rect x="6" y="6" width="48" height="108" rx="8" fill="url(#phoneScreenGrad)" style={{ filter: 'url(#glow)' }}/>
            <line x1="20" y1="12" x2="40" y2="12" strokeWidth="2" className="stroke-gray-400 dark:stroke-gray-600" />
        </g>
     </svg>
);

// New abstract accounting symbols
const CoinSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 80 80" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#facc15' }} />
                <stop offset="100%" style={{ stopColor: '#fb923c' }} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>
        <g style={{ filter: 'url(#glow)' }}>
            <circle cx="40" cy="40" r="38" className="fill-yellow-400/20 dark:fill-yellow-800/20" />
            <circle cx="40" cy="40" r="32" fill="url(#coinGrad)" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" className="fill-white/80">
                DH
            </text>
        </g>
    </svg>
);

const GraphSVG: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 80" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="graphGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#34d399' }} />
                <stop offset="100%" style={{ stopColor: '#60a5fa' }} />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>
        <g style={{ filter: 'url(#glow)' }} className="opacity-80">
            <rect x="10" y="50" width="15" height="25" rx="3" fill="url(#graphGrad)" />
            <rect x="35" y="30" width="15" height="45" rx="3" fill="url(#graphGrad)" />
            <rect x="60" y="10" width="15" height="65" rx="3" fill="url(#graphGrad)" />
            <path d="M 5 75 H 95" strokeWidth="2" className="stroke-gray-400/50 dark:stroke-gray-600/50" />
        </g>
    </svg>
);

const NumberSVG: React.FC<{ className?: string; number: string }> = ({ className, number }) => (
    <svg viewBox="0 0 50 70" className={className} xmlns="http://www.w3.org/2000/svg">
         <defs>
            <filter id="glow-text">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
        </defs>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="60" fontWeight="bold" className="fill-gray-300/80 dark:fill-gray-700/80" style={{ filter: 'url(#glow-text)' }}>
            {number}
        </text>
    </svg>
);

const Number1 = (props: any) => <NumberSVG {...props} number="1" />;
const Number0 = (props: any) => <NumberSVG {...props} number="0" />;
const NumberPlus = (props: any) => <NumberSVG {...props} number="+" />;


const bgItems = [
    // Devices
    { id: 1, Component: CalculatorSVG, top: '15vh', left: '80vw', width: 120, rotate: -15, speed: 0.3 },
    { id: 2, Component: LaptopSVG, top: '70vh', left: '5vw', width: 250, rotate: 10, speed: 0.5 },
    { id: 3, Component: TabletSVG, top: '20vh', left: '10vw', width: 100, rotate: 25, speed: 0.2 },
    { id: 4, Component: PhoneSVG, top: '85vh', left: '90vw', width: 60, rotate: -20, speed: 0.6 },
    { id: 5, Component: CalculatorSVG, top: '50vh', left: '50vw', width: 70, rotate: 5, speed: 0.15 },
    { id: 6, Component: LaptopSVG, top: '25vh', left: '55vw', width: 180, rotate: -5, speed: 0.4 },
    { id: 7, Component: TabletSVG, top: '75vh', left: '35vw', width: 120, rotate: -5, speed: 0.7 },
    { id: 8, Component: PhoneSVG, top: '5vh', left: '3vw', width: 80, rotate: -10, speed: 0.35 },
    
    // New abstract symbols
    { id: 13, Component: CoinSVG, top: '5vh', left: '80vw', width: 70, rotate: 10, speed: 0.4 },
    { id: 14, Component: GraphSVG, top: '80vh', left: '65vw', width: 100, rotate: 15, speed: 0.25 },
    { id: 15, Component: CoinSVG, top: '60vh', left: '20vw', width: 50, rotate: -25, speed: 0.6 },
    { id: 16, Component: GraphSVG, top: '10vh', left: '40vw', width: 80, rotate: -10, speed: 0.18 },
    
    // New numbers
    { id: 17, Component: Number1, top: '40vh', left: '5vw', width: 40, rotate: -15, speed: 0.5 },
    { id: 18, Component: Number0, top: '65vh', left: '95vw', width: 40, rotate: 15, speed: 0.4 },
    { id: 19, Component: NumberPlus, top: '10vh', left: '95vw', width: 50, rotate: 20, speed: 0.2 },

    // Extra items for scrolling
    { id: 9, Component: CalculatorSVG, top: '120vh', left: '20vw', width: 150, rotate: 15, speed: 0.55 },
    { id: 10, Component: LaptopSVG, top: '150vh', left: '70vw', width: 220, rotate: -10, speed: 0.45 },
    { id: 11, Component: CoinSVG, top: '110vh', left: '85vw', width: 90, rotate: -15, speed: 0.65 },
    { id: 12, Component: PhoneSVG, top: '160vh', left: '10vw', width: 60, rotate: 20, speed: 0.65 },
    { id: 21, Component: GraphSVG, top: '140vh', left: '40vw', width: 120, rotate: 5, speed: 0.3 },
    { id: 22, Component: Number0, top: '130vh', left: '5vw', width: 50, rotate: -20, speed: 0.7 },
];


const BackgroundAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollYRef = useRef(0);
    const frameId = useRef(0);

    useLayoutEffect(() => {
        const updatePositions = () => {
            if (containerRef.current) {
                const items = containerRef.current.children;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i] as HTMLDivElement;
                    const speed = parseFloat(item.dataset.speed || '0');
                    const rotate = parseFloat(item.dataset.rotate || '0');
                    const translateY = -scrollYRef.current * speed;
                    item.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
                }
            }
            frameId.current = 0;
        };

        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
            if (!frameId.current) {
                frameId.current = requestAnimationFrame(updatePositions);
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial set
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
             {bgItems.map(item => {
                const { id, Component, top, left, width, rotate, speed } = item;
                
                return (
                    <div
                        key={id}
                        className="absolute"
                        data-speed={speed}
                        data-rotate={rotate}
                        style={{
                            top,
                            left,
                            width: `${width}px`,
                            willChange: 'transform',
                        }}
                    >
                        <Component />
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundAnimation;
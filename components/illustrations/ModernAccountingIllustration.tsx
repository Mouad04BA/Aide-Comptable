import React from 'react';

const ModernAccountingIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Une illustration moderne représentant la comptabilité numérique avec des graphiques, des données et des éléments financiers animés.">
        <style>{`
          @keyframes slideUp {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes drawLine {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          
          .slide-up-1 { animation: slideUp 1s ease-out 0.2s both; }
          .slide-up-2 { animation: slideUp 1s ease-out 0.4s both; }
          .slide-up-3 { animation: slideUp 1s ease-out 0.6s both; }
          .slide-up-4 { animation: slideUp 1s ease-out 0.8s both; }
          .slide-up-5 { animation: slideUp 1s ease-out 1s both; }
          
          .pulse-1 { animation: pulse 3s ease-in-out infinite; }
          .pulse-2 { animation: pulse 3s ease-in-out infinite 1s; }
          .pulse-3 { animation: pulse 3s ease-in-out infinite 2s; }
          
          .rotate-slow { animation: rotate 20s linear infinite; }
          .float-gentle { animation: float 6s ease-in-out infinite; }
          .float-gentle-2 { animation: float 8s ease-in-out infinite 2s; }
          
          .draw-line { 
            stroke-dasharray: 100; 
            animation: drawLine 2s ease-in-out 1.5s both; 
          }
        `}</style>

        {/* Fond avec gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0000001a"/>
          </filter>
        </defs>

        {/* Arrière-plan */}
        <rect width="600" height="500" fill="url(#bgGradient)" />

        {/* Éléments décoratifs flottants */}
        <g className="float-gentle" opacity="0.6">
          <circle cx="80" cy="100" r="30" fill="#dbeafe" />
          <circle cx="80" cy="100" r="20" fill="#bfdbfe" />
          <text x="80" y="105" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">MAD</text>
        </g>
        
        <g className="float-gentle-2" opacity="0.6">
          <circle cx="520" cy="120" r="25" fill="#dcfce7" />
          <circle cx="520" cy="120" r="15" fill="#bbf7d0" />
          <text x="520" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">€</text>
        </g>

        {/* Ordinateur portable principal */}
        <g className="slide-up-1" filter="url(#shadow)">
          {/* Base de l'ordinateur */}
          <ellipse cx="300" cy="420" rx="180" ry="20" fill="#e2e8f0" opacity="0.5" />
          
          {/* Écran */}
          <rect x="150" y="180" width="300" height="200" rx="15" fill="#1e293b" />
          <rect x="160" y="190" width="280" height="160" rx="8" fill="#0f172a" />
          
          {/* Clavier */}
          <rect x="120" y="390" width="360" height="30" rx="15" fill="url(#cardGradient)" />
          <g fill="#cbd5e1">
            <rect x="140" y="400" width="15" height="8" rx="2" />
            <rect x="160" y="400" width="15" height="8" rx="2" />
            <rect x="180" y="400" width="15" height="8" rx="2" />
            <rect x="200" y="400" width="15" height="8" rx="2" />
            <rect x="220" y="400" width="15" height="8" rx="2" />
            <rect x="240" y="400" width="15" height="8" rx="2" />
            <rect x="260" y="400" width="15" height="8" rx="2" />
            <rect x="280" y="400" width="15" height="8" rx="2" />
            <rect x="300" y="400" width="15" height="8" rx="2" />
            <rect x="320" y="400" width="15" height="8" rx="2" />
            <rect x="340" y="400" width="15" height="8" rx="2" />
            <rect x="360" y="400" width="15" height="8" rx="2" />
            <rect x="380" y="400" width="15" height="8" rx="2" />
            <rect x="400" y="400" width="15" height="8" rx="2" />
            <rect x="420" y="400" width="15" height="8" rx="2" />
            <rect x="440" y="400" width="15" height="8" rx="2" />
          </g>
        </g>

        {/* Contenu de l'écran */}
        <g className="slide-up-2">
          {/* Interface de l'application */}
          <rect x="170" y="200" width="260" height="20" rx="4" fill="#3b82f6" />
          <text x="300" y="213" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Aide Comptable</text>
          
          {/* Graphique en barres */}
          <g className="slide-up-3">
            <rect x="190" y="280" width="20" height="40" rx="3" fill="#10b981" />
            <rect x="220" y="260" width="20" height="60" rx="3" fill="#3b82f6" />
            <rect x="250" y="240" width="20" height="80" rx="3" fill="#8b5cf6" />
            <rect x="280" y="220" width="20" height="100" rx="3" fill="#f59e0b" />
            <rect x="310" y="200" width="20" height="120" rx="3" fill="#ef4444" />
          </g>
          
          {/* Ligne de tendance */}
          <path d="M 200 290 L 230 270 L 260 250 L 290 230 L 320 210" 
                className="draw-line" 
                stroke="#06b6d4" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round" />
          
          {/* Points sur la ligne */}
          <g className="pulse-1">
            <circle cx="200" cy="290" r="4" fill="#06b6d4" />
          </g>
          <g className="pulse-2">
            <circle cx="230" cy="270" r="4" fill="#06b6d4" />
          </g>
          <g className="pulse-3">
            <circle cx="260" cy="250" r="4" fill="#06b6d4" />
          </g>
          <g className="pulse-1">
            <circle cx="290" cy="230" r="4" fill="#06b6d4" />
          </g>
          <g className="pulse-2">
            <circle cx="320" cy="210" r="4" fill="#06b6d4" />
          </g>
        </g>

        {/* Éléments flottants autour de l'écran */}
        <g className="slide-up-4">
          {/* Calculatrice */}
          <g transform="translate(50, 250)">
            <rect x="0" y="0" width="80" height="100" rx="8" fill="url(#cardGradient)" filter="url(#shadow)" />
            <rect x="8" y="8" width="64" height="20" rx="4" fill="#1e293b" />
            <text x="40" y="21" textAnchor="middle" fontSize="10" fill="#10b981">12,345.67</text>
            <g fill="#64748b">
              <rect x="12" y="35" width="12" height="8" rx="2" />
              <rect x="28" y="35" width="12" height="8" rx="2" />
              <rect x="44" y="35" width="12" height="8" rx="2" />
              <rect x="60" y="35" width="12" height="8" rx="2" />
              <rect x="12" y="48" width="12" height="8" rx="2" />
              <rect x="28" y="48" width="12" height="8" rx="2" />
              <rect x="44" y="48" width="12" height="8" rx="2" />
              <rect x="60" y="48" width="12" height="8" rx="2" />
              <rect x="12" y="61" width="12" height="8" rx="2" />
              <rect x="28" y="61" width="12" height="8" rx="2" />
              <rect x="44" y="61" width="12" height="8" rx="2" />
              <rect x="60" y="61" width="12" height="8" rx="2" />
              <rect x="12" y="74" width="28" height="8" rx="2" />
              <rect x="44" y="74" width="12" height="8" rx="2" />
              <rect x="60" y="74" width="12" height="8" rx="2" />
            </g>
          </g>

          {/* Document */}
          <g transform="translate(470, 280)">
            <rect x="0" y="0" width="70" height="90" rx="8" fill="url(#cardGradient)" filter="url(#shadow)" />
            <rect x="8" y="8" width="54" height="6" rx="2" fill="#3b82f6" />
            <rect x="8" y="20" width="54" height="3" rx="1" fill="#cbd5e1" />
            <rect x="8" y="28" width="54" height="3" rx="1" fill="#cbd5e1" />
            <rect x="8" y="36" width="40" height="3" rx="1" fill="#cbd5e1" />
            <rect x="8" y="44" width="54" height="3" rx="1" fill="#cbd5e1" />
            <rect x="8" y="52" width="35" height="3" rx="1" fill="#cbd5e1" />
            <rect x="8" y="60" width="54" height="3" rx="1" fill="#cbd5e1" />
            <rect x="8" y="68" width="45" height="3" rx="1" fill="#cbd5e1" />
          </g>
        </g>

        {/* Éléments d'intelligence artificielle */}
        <g className="slide-up-5">
          {/* Cerveau IA */}
          <g transform="translate(480, 50)" className="rotate-slow">
            <circle cx="0" cy="0" r="40" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="0" cy="0" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
            <circle cx="0" cy="0" r="10" fill="#06b6d4" />
            <g fill="#8b5cf6">
              <circle cx="-15" cy="-15" r="3" />
              <circle cx="15" cy="-15" r="3" />
              <circle cx="-15" cy="15" r="3" />
              <circle cx="15" cy="15" r="3" />
            </g>
          </g>

          {/* Engrenages */}
          <g transform="translate(100, 50)" className="rotate-slow">
            <circle cx="0" cy="0" r="25" fill="#10b981" opacity="0.8" />
            <g fill="white">
              <rect x="-3" y="-30" width="6" height="10" rx="2" />
              <rect x="-3" y="20" width="6" height="10" rx="2" />
              <rect x="-30" y="-3" width="10" height="6" rx="2" />
              <rect x="20" y="-3" width="10" height="6" rx="2" />
            </g>
            <circle cx="0" cy="0" r="8" fill="white" />
          </g>
        </g>

        {/* Particules flottantes */}
        <g className="float-gentle" opacity="0.4">
          <circle cx="150" cy="80" r="3" fill="#3b82f6" />
          <circle cx="450" cy="400" r="2" fill="#10b981" />
          <circle cx="550" cy="300" r="4" fill="#8b5cf6" />
          <circle cx="50" cy="400" r="2" fill="#f59e0b" />
        </g>

        {/* Texte flottant "AI" */}
        <g className="pulse-1" transform="translate(350, 100)">
          <rect x="-15" y="-10" width="30" height="20" rx="10" fill="#3b82f6" opacity="0.9" />
          <text x="0" y="3" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">AI</text>
        </g>
      </svg>
    </div>
  );
};

export default ModernAccountingIllustration;
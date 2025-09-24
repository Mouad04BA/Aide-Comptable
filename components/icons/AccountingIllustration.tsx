
import React from 'react';

const AccountingIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    
    {/* Background shape */}
    <path
      fill="url(#grad1)"
      opacity="0.1"
      d="M152.9,73.9c18.3-24,31.5-56-5.8-70.3S77.8,24.6,59.5,48.6s-31.5,56,5.8,70.3S134.6,97.9,152.9,73.9z"
      transform="translate(10, 10)"
    />
    <path
      fill="url(#grad2)"
      opacity="0.1"
      d="M47.1,126.1c-18.3,24-3.1,56.3,24.2,70.6s69.4-4,87.7-28s3.1-56.3-24.2-70.6S65.4,102.1,47.1,126.1z"
      transform="translate(-10, -10)"
    />

    {/* Calculator */}
    <g transform="translate(25, 80) scale(0.8) rotate(-15)">
      {/* Fix: Combined duplicate className attributes for dark mode fill and stroke */}
      <rect x="0" y="0" width="80" height="110" rx="10" fill="#F3F4F6" stroke="#E5E7EB" className="dark:fill-dark-card dark:stroke-gray-600" strokeWidth="2" />
      <rect x="10" y="10" width="60" height="25" rx="5" fill="#E5E7EB" className="dark:fill-gray-700" />
      <circle cx="20" cy="50" r="7" fill="#D1D5DB" className="dark:fill-gray-500" />
      <circle cx="40" cy="50" r="7" fill="#D1D5DB" className="dark:fill-gray-500" />
      <circle cx="60" cy="50" r="7" fill="#D1D5DB" className="dark:fill-gray-500" />
      <circle cx="20" cy="70" r="7" fill="#D1D5DB" className="dark:fill-gray-500" />
      <circle cx="40" cy="70" r="7" fill="#D1D5DB" className="dark:fill-gray-500" />
      <circle cx="60" cy="70" r="7" fill="#D1D5DB" className="dark:fill-gray-500" />
      <rect x="20" y="90" width="40" height="10" rx="5" fill="url(#grad2)" />
    </g>

    {/* Chart */}
    <g transform="translate(100, 30) scale(0.9) rotate(10)">
      {/* Fix: Combined duplicate className attributes for dark mode fill and stroke */}
      <rect x="0" y="0" width="90" height="70" rx="8" fill="#FFFFFF" stroke="#E5E7EB" className="dark:fill-dark-card dark:stroke-gray-600" strokeWidth="2" />
      <rect x="15" y="45" width="10" height="15" fill="url(#grad1)" opacity="0.6" rx="2" />
      <rect x="30" y="30" width="10" height="30" fill="url(#grad1)" rx="2" />
      <rect x="45" y="20" width="10" height="40" fill="url(#grad2)" rx="2" />
      <rect x="60" y="35" width="10" height="25" fill="url(#grad1)" opacity="0.8" rx="2" />
      <line x1="10" y1="60" x2="80" y2="60" stroke="#D1D5DB" className="dark:stroke-gray-500" strokeWidth="1.5" />
      <line x1="10" y1="10" x2="10" y2="60" stroke="#D1D5DB" className="dark:stroke-gray-500" strokeWidth="1.5" />
    </g>

    {/* Books */}
    <g transform="translate(90, 110) scale(1.1)">
      <rect x="0" y="35" width="80" height="15" rx="3" fill="url(#grad2)" transform="rotate(-5)" />
      <rect x="0" y="15" width="80" height="15" rx="3" fill="url(#grad1)" transform="rotate(-5)" />
      <rect x="0" y="-5" width="80" height="15" rx="3" fill="#A5B4FC" transform="rotate(-5)" />
    </g>
  </svg>
);

export default AccountingIllustration;

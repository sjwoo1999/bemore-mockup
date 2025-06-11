// src/components/common/LogoText.tsx
import React from 'react';

interface LogoTextProps {
  className?: string;
}

const LogoText: React.FC<LogoTextProps> = ({ className = '' }) => {
  return (
    <span className={`text-xl font-bold text-purple-700 ${className}`}>
      BeMore
    </span>
  );
};

export default LogoText;
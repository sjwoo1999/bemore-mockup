// src/components/onboarding/OnboardingLayout.tsx
'use client'; // 클라이언트 컴포넌트임을 명시

import React from 'react';
import Button from '@/components/common/Button';
import LogoText from '@/components/common/LogoText';
import PaginationDots from '@/components/onboarding/PaginationDots';

interface OnboardingLayoutProps {
  headline: string;
  currentPage: number;
  totalPage: number;
  buttonText: string;
  onButtonClick: () => void;
  showLogo?: boolean;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  headline,
  currentPage,
  totalPage,
  buttonText,
  onButtonClick,
  showLogo = false,
}) => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-between text-center overflow-hidden">

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-100 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full p-6 text-white">
        {/* Top Logo (conditional) */}
        {showLogo && (
          <div className="mt-8">
            <LogoText className="text-white text-3xl" /> {/* Adjust text color for overlay */}
          </div>
        )}
        {!showLogo && <div className="mt-8 h-8"></div>} {/* Placeholder for spacing */}

        {/* Headline */}
        <div className="flex-grow flex items-center justify-center px-4">
          <h1 className="text-4xl font-bold leading-tight drop-shadow-lg">
            {headline}
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-sm flex flex-col items-center space-y-6 mb-8">
          <PaginationDots currentPage={currentPage} totalPages={totalPage} />
          <Button onClick={onButtonClick}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
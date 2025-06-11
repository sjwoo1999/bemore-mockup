// src/app/onboarding/2/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

const OnboardingPage2 = () => {
  const router = useRouter();

  const handleNextClick = () => {
    router.push('/onboarding/3');
  };

  return (
    <OnboardingLayout
      headline="AI가 당신의 감정을 경청하고 이해합니다."
      currentPage={2}
      totalPage={3}
      buttonText="다음으로"
      onButtonClick={handleNextClick}
      showLogo={true}
    />
  );
};

export default OnboardingPage2;
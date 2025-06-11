// src/app/onboarding/1/page.tsx
'use client'; // 클라이언트 컴포넌트임을 명시

import { useRouter } from 'next/navigation';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

const OnboardingPage1 = () => {
  const router = useRouter();

  const handleNextClick = () => {
    router.push('/onboarding/2');
  };

  return (
    <OnboardingLayout
      headline="감정을 말하는 건, 삶을 회복하는 첫걸음입니다."
      currentPage={1}
      totalPage={3}
      buttonText="다음으로"
      onButtonClick={handleNextClick}
      showLogo={true}
    />
  );
};

export default OnboardingPage1;
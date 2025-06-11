// src/app/onboarding/3/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

const OnboardingPage3 = () => {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/home'); // 상담 시작 페이지로 이동 (아직 없으므로 나중에 만들 예정)
  };

  return (
    <OnboardingLayout
      headline="오늘의 마음을 인식하고, 내일의 나를 회복합니다."
      currentPage={3}
      totalPage={3}
      buttonText="시작하기"
      onButtonClick={handleStartClick}
      showLogo={true}
    />
  );
};

export default OnboardingPage3;
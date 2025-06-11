// src/app/home/page.tsx
'use client'; // 클라이언트 컴포넌트임을 명시

import { useRouter } from 'next/navigation'; // 라우팅을 위한 훅
import Button from '@/components/common/Button'; // 공통 Button 컴포넌트 임포트
import LogoText from '@/components/common/LogoText'; // 공통 LogoText 컴포넌트 임포트

export default function HomePage() {
  const router = useRouter();

  const handleStartConsult = () => {
    router.push('/consult'); // 상담 페이지로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col items-center space-y-8">
        <LogoText className="text-5xl md:text-6xl text-purple-700 animate-pulse" /> {/* 로고 */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-snug">
          준비가 되면, 바로 시작해 보세요.
        </h1>
        <p className="text-md md:text-lg text-gray-600 text-center max-w-md">
          BeMore AI가 당신의 이야기를 들을 준비가 되어 있습니다.
        </p>
        <div className="w-full max-w-xs mt-8">
          <Button onClick={handleStartConsult}>바로 상담 시작하기</Button> {/* 상담 시작 버튼 */}
        </div>
      </div>
    </div>
  );
}
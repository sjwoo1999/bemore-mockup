// src/app/consult-end/page.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import LogoText from '@/components/common/LogoText';

const ConsultEndPage = () => {
  const router = useRouter();

  const handleConfirmClick = () => {
    // 실제 구현에서는 백엔드에서 분석 완료 알림을 받을 때까지 대기하거나,
    // 대시보드 페이지로 이동 후 알림 대기
    router.push('/'); // 임시로 홈으로 이동
    alert('실제 서비스에서는 분석 완료 알림을 받으실 거예요!');
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 bg-gray-50 text-center">
      <div className="mt-8">
        <LogoText className="text-3xl" />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center px-4 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
          조금 전 들려주신 이야기,{' '}
          <span className="relative inline-block">
            ✨ BeMore AI가
            <span className="absolute -top-2 -right-4 text-4xl transform -rotate-12 animate-pulse">✨</span>
          </span>
          차분히 이해하고 있어요.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          감정은 데이터가 아니기에, 더욱 꼼꼼하게 헤아리고 있어요.
        </p>
        <p className="text-md text-gray-500 mb-12">
          완료되면 알림으로 알려드릴게요. 지금은 잠시 쉬셔도 괜찮아요.
        </p>
      </main>

      <footer className="w-full max-w-sm mb-8">
        <Button onClick={handleConfirmClick}>확인했어요, 잠시 쉬러 갈게요.</Button>
      </footer>
    </div>
  );
};

export default ConsultEndPage;
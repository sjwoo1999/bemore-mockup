// src/app/consult-end/page.tsx
'use client';

import React from 'react'; // useState, useEffect 제거
import { useRouter } from 'next/navigation';
// import LogoText from '@/components/common/LogoText';
import Button from '@/components/common/Button';
// import Image from 'next/image'; // Image 컴포넌트 제거 (AI 아이콘 삭제)

const ConsultEndPage = () => {
  const router = useRouter();

  // "확인했어요, 잠시 쉬러 갈게요." 버튼 클릭 시 홈으로 이동
  const handleGoHomeAndRest = () => {
    router.push('/result');
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 p-6 pt-24 md:pt-32"> {/* 상단 패딩 증가 */}
      <div className="flex flex-col items-center max-w-md w-full px-4 text-center"> {/* 중앙 정렬 및 최대 너비 설정 */}
        {/* LogoText는 이미지에 없으므로 일단 제거하거나, 필요시 조건부 렌더링 */}
        {/* <LogoText className="text-4xl mb-6 text-purple-700" /> */}

        {/* 첫 번째 텍스트 블록: "조금 전 들려주신 이야기, BeMore AI가 차분히 이해하고 있어요." */}
        <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-8"> {/* 폰트 크기 및 줄 간격 조정, 마진 증가 */}
          조금 전 들려주신 이야기, <br />
          <span className="text-purple-700">BeMore AI가</span><br /> {/* BeMore AI만 색상 및 굵기 적용 */}
          차분히 이해하고 있어요.
        </p>

        {/* 두 번째 텍스트 블록: "감정은 데이터가 아니기에, 더욱 꼼꼼하게 헤아리고 있어요." */}
        <p className="text-xl md:text-2xl text-gray-700 leading-normal mb-12"> {/* 폰트 크기 및 마진 증가 */}
          감정은 데이터가 아니기에, <br />
          더욱 꼼꼼하게 헤아리고 있어요.
        </p>

        {/* 세 번째 텍스트 블록: "완료되면 알림으로 알려드릴게요. 지금은 잠시 쉬셔도 괜찮아요." */}
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-16"> {/* 폰트 크기 및 마진 증가 */}
          완료되면 알림으로 알려드릴게요. <br />
          지금은 잠시 쉬셔도 괜찮아요.
        </p>

        {/* 버튼 */}
        <div className="w-full max-w-xs mt-auto mb-8"> {/* 버튼 너비 제한 및 상단 마진 자동 조정 (하단 고정 대신) */}
          <Button onClick={handleGoHomeAndRest} variant="primary">
            확인했어요, 잠시 쉬러 갈게요.
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsultEndPage;
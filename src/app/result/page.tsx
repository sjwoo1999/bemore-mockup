// src/app/result/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import LogoText from '@/components/common/LogoText';
import Button from '@/components/common/Button';
import { FiDownload } from 'react-icons/fi'; // 다운로드 아이콘
import { IoIosArrowBack } from 'react-icons/io'; // 뒤로 가기 아이콘
// 새로운 아이콘 임포트: 뇌, 생각, 잎 아이콘
import { FaBrain, FaLightbulb, FaLeaf } from 'react-icons/fa6'; // FontAwesome 6 아이콘

interface AnalysisResult {
  id: string;
  date: string;
  summary: string;
  emotions: { type: string; percentage: number }[];
  positiveThought: string;
  suggestions: string[];
}

// 더미 데이터 업데이트: 이미지와 제공된 텍스트에 맞춰 조정
const dummyResult: AnalysisResult = {
  id: 'dummy',
  date: '2025년 06월 11일', // 제공된 날짜로 업데이트
  summary: "", // 이미지에 요약 내용이 없으므로 비워둠
  emotions: [
    { type: '지치고 외로운 느낌', percentage: 100 }, // 이미지에 맞게 텍스트 변경
  ],
  positiveThought: "사는 너무 예민한 걸까?", // 제공된 텍스트로 업데이트
  suggestions: [
    "지금 감정을 한 문장으로 적어보는 건 어떨까요?", // 제공된 텍스트로 업데이트
  ],
};

const ResultPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    // 실제 구현에서는 id를 사용하여 백엔드 API에서 결과를 가져옵니다.
    setResult(dummyResult); // 현재는 더미 데이터 사용
  }, [id]);

  if (!result) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-600">분석 결과를 불러오는 중...</p>
      </div>
    );
  }

  const handleDownloadPdf = () => {
    alert('PDF 저장 기능은 MVP 이후에 구현됩니다.');
    // 실제 구현에서는 백엔드 API 호출로 PDF 다운로드
    // window.open(`/api/results/${result.id}/pdf`);
  };

  const handleBackClick = () => {
    router.back(); // 뒤로 가기
  };

  const handleGoHome = () => { // 홈으로 이동하는 함수 추가
    router.push('/home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center p-4 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <button onClick={handleBackClick} className="text-gray-600 hover:text-gray-800 transition-colors p-2 -ml-2">
          <IoIosArrowBack size={24} />
        </button>
        {/* 'BeMore' 로고 텍스트는 이미지와 같이 중앙에 배치 */}
        <LogoText className="text-xl text-purple-700 font-bold mx-auto -ml-8" />
        {/* 우측 공간은 비워둠 */}
        <div className="w-6"></div> {/* 뒤로가기 버튼과 대칭 맞추기 위해 빈 div 추가 */}
      </header>

      <main className="flex-grow p-6 pt-8 max-w-2xl mx-auto w-full">
        {/* 날짜 표시 */}
        <p className="text-lg font-bold text-gray-800 mb-8">{result.date}</p>

        {/* 첫 번째 텍스트 블록: "들려주신 이야기를 들으며, BeMore AI가 정리한 사용자님의 속마음은 아래와 같아요." */}
        <p className="text-xl text-gray-800 leading-relaxed mb-10">
          들려주신 이야기를 들으며,<br />
          <span className="text-purple-700 font-bold">BeMore AI</span>가 정리한<br />
          <span className="font-semibold">사용자님</span>의 속마음은 아래와 같아요.
        </p>

        {/* 감정 요약 */}
        <div className="mb-8">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-3">
            <FaBrain className="text-gray-600 mr-2" size={20} />
            <span className="text-gray-800">감정 요약</span>
          </div>
          <p className="text-gray-700 leading-relaxed italic pl-3">
            ‘{result.emotions[0]?.type}’이 강하게 나타났어요.
          </p>
        </div>

        {/* 마음에 들었던 생각 */}
        <div className="mb-8">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-3">
            <FaLightbulb className="text-gray-600 mr-2" size={20} />
            <span className="text-gray-800">마음에 들었던 생각</span>
          </div>
          <p className="text-gray-700 leading-relaxed italic pl-3">
            혹시 ‘{result.positiveThought}’라는 생각이<br />
            스쳐 지나갔을지도 몰라요.
          </p>
        </div>

        {/* 작은 제안 */}
        <div className="mb-12">
          <div className="flex items-center text-lg font-semibold text-gray-800 mb-3">
            <FaLeaf className="text-gray-600 mr-2" size={20} />
            <span className="text-gray-800">작은 제안</span>
          </div>
          <ul className="list-none pl-0 space-y-2 text-gray-700">
            {result.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>

        {/* PDF Download Section */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center text-gray-600 mb-4">
            <span className="text-xl mr-2">📑</span>
            <p>전체 내용은 PDF에서 자세히 확인하실 수 있어요.</p>
          </div>
          <Button onClick={handleDownloadPdf} variant="primary" className="inline-flex items-center justify-center max-w-xs mb-3"> {/* mb-3 추가하여 아래 버튼과의 간격 확보 */}
            <FiDownload className="mr-2" size={20} /> PDF로 저장하기
          </Button>
          {/* 홈으로 이동 버튼 추가 */}
          <Button onClick={handleGoHome} variant="secondary" className="inline-flex items-center justify-center max-w-xs">
            홈으로 이동
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ResultPage;
// src/app/consult/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ConsultationHeader from '@/components/consult/ConsultationHeader';
// 아이콘 임포트: IoMicOffOutline (음소거), IoMicOutline (마이크 켜짐), IoCallOutline (통화), IoVideocamOutline (비디오)
import { IoMicOffOutline, IoMicOutline, IoCallOutline, IoVideocamOutline } from 'react-icons/io5';

const ConsultPage = () => {
  const router = useRouter();
  const [callDuration, setCallDuration] = useState(0);
  const [isRecording, setIsRecording] = useState(false); // 녹음 상태

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording) { // 녹음 시작 시 타이머 시작
      timer = setInterval(() => {
        setCallDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    }
    // 컴포넌트 언마운트 또는 isRecording이 false가 될 때 타이머 정리
    return () => clearInterval(timer);
  }, [isRecording]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    // TODO: 여기에서 음성 녹음 중지 및 백엔드로 데이터 전송 로직을 구현합니다.
    setIsRecording(false); // 타이머 중지
    router.push('/consult-end'); // 상담 종료 페이지로 이동
  };

  const handleToggleRecording = () => {
    // TODO: 여기에서 실제 음성 녹음 시작/중지 로직을 MediaDevices API 등과 연동하여 구현합니다.
    setIsRecording(!isRecording);
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ConsultationHeader
        consultantName="BeMore AI"
        profileImage="/images/ai_consultant_profile.png"
        duration={formatDuration(callDuration)}
      />

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-2xl aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {/* AI 상담사 비디오 피드 (임시 이미지) */}
          <Image
            src="/images/ai_consultant_video_placeholder.png"
            alt="AI Consultant Video"
            fill
            className="object-cover opacity-70"
          />
          {/* AI 상담사 상태 메시지 */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-center p-3 bg-black bg-opacity-50 rounded-lg">
            <p className="text-lg font-medium">
              {isRecording ? "당신의 이야기를 조용히 경청하고 있어요." : "이야기를 시작하려면 마이크 버튼을 눌러주세요."}
            </p>
            <p className="text-sm mt-1 text-gray-300">
              {isRecording ? "마이크 버튼을 눌러 녹음을 중지할 수 있어요." : "버튼을 누르면 당신의 이야기가 녹음됩니다."}
            </p>
          </div>
        </div>
        {/* 현재는 기능 시뮬레이션 중임을 알리는 문구 */}
        <p className="mt-6 text-xs text-gray-500 text-center max-w-md">
          * 현재 음성 인식 및 AI 대화 기능은 시뮬레이션 중이며, 실제 구현은 다음 단계에서 진행됩니다.
        </p>
      </main>

      {/* Control Buttons */}
      <footer className="flex items-center justify-between px-8 py-6 bg-white shadow-inner"> {/* 좌우 패딩 조정 */}
        {/* 좌측 버튼 그룹: 마이크 */}
        <button
          onClick={() => alert('음소거/음소거 해제 기능은 MVP 이후에 추가됩니다.')}
          className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors space-y-1"
        >
          {isRecording ? <IoMicOutline size={28} /> : <IoMicOffOutline size={28} />} {/* 녹음 상태에 따라 아이콘 변경 */}
          <span className="text-xs">마이크</span>
        </button>

        {/* 중앙 버튼 그룹: 녹음 시작/중지 및 통화 종료 */}
        <div className="flex space-x-6"> {/* 버튼 간 간격 조정 */}
          {/* "녹음 시작/중지" 버튼 (메인 액션 버튼) */}
          <button
            onClick={handleToggleRecording}
            className={`flex flex-col items-center justify-center w-16 h-16 rounded-full
                       ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}
                       text-white transition-colors shadow-lg`}
          >
            <IoCallOutline size={30} className={isRecording ? 'rotate-135' : ''} /> {/* 녹음 중일 때만 회전 효과 */}
            <span className="text-xs mt-1">{isRecording ? "녹음 중지" : "녹음 시작"}</span>
          </button>

          {/* "통화 종료" 버튼 */}
          <button
            onClick={handleEndCall}
            className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gray-500 hover:bg-gray-600 text-white transition-colors shadow-lg"
            title="통화 종료"
          >
            <IoCallOutline size={30} />
            <span className="text-xs mt-1">통화 종료</span>
          </button>
        </div>

        {/* 우측 버튼 그룹: 카메라 전환 */}
        <button
          onClick={() => alert('카메라 전환 기능은 MVP 이후에 추가됩니다.')}
          className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors space-y-1"
        >
          <IoVideocamOutline size={28} />
          <span className="text-xs">카메라 전환</span>
        </button>
      </footer>
    </div>
  );
};

export default ConsultPage;
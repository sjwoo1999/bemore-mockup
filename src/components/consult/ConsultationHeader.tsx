// src/components/consult/ConsultationHeader.tsx
import React from 'react';
import Image from 'next/image';

interface ConsultationHeaderProps {
  consultantName: string;
  profileImage: string;
  duration: string;
}

const ConsultationHeader: React.FC<ConsultationHeaderProps> = ({
  consultantName,
  profileImage,
  duration,
}) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-white shadow-sm z-10">
      <div className="flex items-center space-x-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src={profileImage} alt={consultantName} layout="fill" objectFit="cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">{consultantName}</p>
          <p className="text-xs text-gray-500">AI 상담사</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default ConsultationHeader;
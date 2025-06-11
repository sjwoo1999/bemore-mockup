// src/components/onboarding/PaginationDots.tsx
import React from 'react';

interface PaginationDotsProps {
  currentPage: number;
  totalPages: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <span
          key={index}
          className={`block w-2.5 h-2.5 rounded-full ${
            index + 1 === currentPage ? 'bg-white' : 'bg-gray-400 opacity-60'
          } transition-all duration-300`}
        ></span>
      ))}
    </div>
  );
};

export default PaginationDots;
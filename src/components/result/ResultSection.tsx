// src/components/result/ResultSection.tsx
import React from 'react';

interface ResultSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResultSection: React.FC<ResultSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div>
        {children}
      </div>
    </section>
  );
};

export default ResultSection;
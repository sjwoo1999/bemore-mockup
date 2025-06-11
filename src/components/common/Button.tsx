// src/components/common/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline'; // 버튼 타입 추가
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
}) => {
  const baseStyles = 'w-full py-3 rounded-xl font-semibold transition-colors duration-200';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-purple-600 text-white hover:bg-purple-700';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-200 text-gray-800 hover:bg-gray-300';
      break;
    case 'outline':
      variantStyles = 'border border-purple-600 text-purple-600 hover:bg-purple-50';
      break;
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
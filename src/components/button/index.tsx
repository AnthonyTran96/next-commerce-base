'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'whiteGhost';
  isLoading?: boolean;
  iconLeft?: ImageProps;
  customLeftt?: React.ReactNode;
  iconRight?: ImageProps;
  customRight?: React.ReactNode;
};

const ButtonBase: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  iconLeft,
  customLeftt,
  customRight,
  iconRight,
  className,
  children,
  ...rest
}) => {
  const baseStyle =
    'inline-flex items-center gap-4 px-10 py-6 rounded-radius-m font-semibold text-15 transition-all duration-200';
  const variants = {
    primary: 'bg-orange-500 text-orange-50 hover:bg-blue-700',
    secondary: 'bg-orange-50 text-orange-500 hover:bg-gray-300',
    whiteGhost: 'bg-gray-500 text-black border-weight-s hover:bg-gray-300'
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className ?? ''}`}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {/* Icon trái */}
      {customLeftt}
      {iconLeft && !customLeftt && (
        <Image
          {...iconLeft}
          alt={iconLeft.alt || 'icon'}
          width={iconLeft.width || 27}
          height={iconLeft.height || 27}
        />
      )}

      {isLoading ? 'Loading...' : children}

      {/* Icon phải */}
      {customRight}
      {iconRight && !customRight && (
        <Image
          {...iconRight}
          alt={iconRight.alt || 'icon'}
          width={iconRight.width || 27}
          height={iconRight.height || 27}
        />
      )}
    </button>
  );
};

export default ButtonBase;

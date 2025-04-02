'use client';

import React from 'react';
import Icon, { IconProps } from '../icon';
import Spinner from '../spiner';

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'custom';
  isLoading?: boolean;
  iconLeft?: IconProps;
  customLeft?: React.ReactNode;
  iconRight?: IconProps;
  customRight?: React.ReactNode;
};

const ButtonBase: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  iconLeft,
  customLeft,
  customRight,
  iconRight,
  className,
  children,
  ...rest
}) => {
  const baseStyle =
    'inline-flex items-center gap-1 p-2.5 rounded-lg font-semibold text-16 leading-125p transition-all duration-200';
  const variants = {
    primary: 'bg-blue_dark-500 text-common-white hover:bg-blue_dark-400',
    secondary: 'bg-blue_dark-50 text-default-medium hover:bg-blue_dark-100',
    ghost: 'bg-common-white text-blue_dark-500 hover:bg-blue_dark-50',
    custom: ''
  };

  return (
    <button
      type={rest.type || 'button'}
      className={`${baseStyle} ${variants[variant]} ${className ?? ''}`}
      disabled={isLoading || rest.disabled}
      {...rest}
    >
      {/* Icon trái */}
      {customLeft}
      {iconLeft && !customLeft && (
        <Icon {...iconLeft} className={`h-7.5 w-7.5 ${iconLeft.className}`} />
      )}

      {isLoading ? <Spinner /> : children}

      {/* Icon phải */}
      {customRight}
      {iconRight && !customRight && (
        <Icon {...iconRight} className={`h-7.5 w-7.5 ${iconRight.className}`} />
      )}
    </button>
  );
};

export default ButtonBase;

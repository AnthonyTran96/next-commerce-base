import React from 'react';

type SpinnerProps = {
  size?: number;
  color?: string;
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = 'border-blue_dark-500',
  className = ''
}) => {
  const borderSize = Math.floor(size / 8);

  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-t-transparent ${color} ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: borderSize
      }}
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;

'use client';

import React, { useEffect } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnClickOutside?: boolean;
  overlayClassName?: string;
  contentClassName?: string;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  closeOnClickOutside = true,
  overlayClassName = '',
  contentClassName = ''
}) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest('.dialog-content')) {
        if (closeOnClickOutside) {
          onClose();
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, closeOnClickOutside]);

  return (
    <div
      className={`
        fixed inset-0 z-9999 flex items-center justify-center bg-[rgb(28_39_76/_0.7)]
        pb-[10vh] transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}
        ${overlayClassName}
      `}
    >
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`
          dialog-content w-full max-w-md rounded-lg bg-common-white shadow-xl
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-2 scale-95'}
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;

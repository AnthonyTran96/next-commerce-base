'use client';

import React, { useEffect } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'top' | 'bottom';
  direction?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
  overlayClassName?: string;
  contentClassName?: string;
  closeOnClickOutside?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  direction = 'right',
  children,
  overlayClassName = '',
  contentClassName = '',
  closeOnClickOutside = true
}) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!(event.target as HTMLElement).closest('.drawer-content')) {
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

  const commonOverlayClasses = {
    right: 'overflow-y-auto',
    left: 'overflow-y-auto',
    top: 'overflow-x-auto',
    bottom: 'overflow-x-auto'
  };

  const deActiveClasses = {
    right: 'translate-x-full',
    left: '-translate-x-full',
    top: '-translate-y-full',
    bottom: 'translate-y-full'
  };

  const activeClasses = {
    right: 'translate-x-0',
    left: 'translate-x-0',
    top: 'translate-y-0',
    bottom: 'translate-y-0'
  };

  const positionClasses = {
    right: 'right-0 top-0 max-w-[500px]',
    left: 'left-0 top-0 max-w-[500px]',
    top: 'top-0 left-0 max-h-[200px]',
    bottom: 'bottom-0 left-0 max-h-[200px]'
  };

  return (
    <div
      className={`
        no-scrollbar fixed left-0 top-0 z-99999 h-screen w-screen bg-[rgb(28,39,76,0.7)] duration-300 ease-linear 
        ${commonOverlayClasses[direction]}
        ${isOpen ? activeClasses[direction] : deActiveClasses[direction]}
        ${overlayClassName}
      `}
    >
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`
          drawer-content absolute h-full w-full bg-common-white shadow-1 transition-transform duration-300 ease-in-out 
          ${positionClasses[position]}
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;

'use client';

import React, { useState } from 'react';
import Icon from '../icon';

type DropdownProps<T> = {
  label: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  className?: string;
  labelClass?: string;
  dropdownClass?: string;
};

function Dropdown<T>({
  label,
  items,
  renderItem,
  defaultOpen = false,
  icon,
  className = '',
  labelClass = '',
  dropdownClass = ''
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-lg bg-common-white shadow-1 ${className}`}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex cursor-pointer items-center justify-between py-3 pl-6 pr-5.5 ${
          isOpen ? 'shadow-filter' : ''
        } ${labelClass}`}
      >
        <p className="text-common-dark">{label}</p>
        <button
          aria-label="toggle dropdown"
          className={`text-common-dark transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          {icon || <Icon icon="chevronDown" className="h-7 w-7 fill-common-dark" />}
        </button>
      </div>

      {/* Dropdown content with animation */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[500px] scale-y-100 opacity-100' : 'max-h-0 scale-y-95 opacity-0'} ${dropdownClass}
        `}
      >
        {items.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
}

export default Dropdown;

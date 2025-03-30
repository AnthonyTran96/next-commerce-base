'use client';
import { useState } from 'react';

const GenderItem = ({
  category
}: {
  category: {
    name: string;
    products: number;
  };
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`${
        selected && 'text-blue'
      } group flex items-center justify-between duration-200 ease-out hover:text-blue `}
      onClick={() => setSelected(!selected)}
    >
      <div className="flex items-center gap-2">
        <div
          className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded border ${
            selected ? 'border-blue bg-blue' : 'border-gray-3 bg-white'
          }`}
        >
          <svg
            className={selected ? 'block' : 'hidden'}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span>{category.name}</span>
      </div>

      <span
        className={`${
          selected ? 'bg-blue text-white' : 'bg-gray-2'
        } inline-flex rounded-[30px] px-2 text-custom-xs duration-200 ease-out group-hover:bg-blue group-hover:text-white`}
      >
        {category.products}
      </span>
    </button>
  );
};

const GenderDropdown = ({
  genders
}: {
  genders: {
    name: string;
    products: number;
  }[];
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  return (
    <div className="rounded-lg bg-white shadow-1">
      <div
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className={`flex cursor-pointer items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && 'shadow-filter'
        }`}
      >
        <p className="text-dark">Gender</p>
        <button
          onClick={() => setToggleDropdown(!toggleDropdown)}
          aria-label="button for gender dropdown"
          className={`text-dark duration-200 ease-out ${toggleDropdown && 'rotate-180'}`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* <!-- dropdown menu --> */}
      <div className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${toggleDropdown ? 'flex' : 'hidden'}`}>
        {genders.map((gender, key) => (
          <GenderItem key={key} category={gender} />
        ))}
      </div>
    </div>
  );
};

export default GenderDropdown;

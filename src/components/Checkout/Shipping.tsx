import React, { useState } from 'react';

const Shipping = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="mt-7.5 rounded-[10px] bg-white shadow-1">
      <div
        onClick={() => setDropdown(!dropdown)}
        className="flex cursor-pointer items-center gap-2.5 px-5.5 py-5 text-lg font-medium text-dark"
      >
        Ship to a different address?
        <svg
          className={`fill-current duration-200 ease-out ${dropdown && 'rotate-180'}`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.06103 7.80259C4.30813 7.51431 4.74215 7.48092 5.03044 7.72802L10.9997 12.8445L16.9689 7.72802C17.2572 7.48092 17.6912 7.51431 17.9383 7.80259C18.1854 8.09088 18.1521 8.5249 17.8638 8.772L11.4471 14.272C11.1896 14.4927 10.8097 14.4927 10.5523 14.272L4.1356 8.772C3.84731 8.5249 3.81393 8.09088 4.06103 7.80259Z"
            fill=""
          />
        </svg>
      </div>

      {/* <!-- dropdown menu --> */}
      <div className={`p-4 sm:p-8.5 ${dropdown ? 'block' : 'hidden'}`}>
        <div className="mb-5">
          <label htmlFor="countryName" className="mb-2.5 block">
            Country/ Region
            <span className="text-red">*</span>
          </label>

          <div className="relative">
            <select className="w-full appearance-none rounded-md border border-gray-3 bg-gray-1 py-3 pl-5 pr-9 text-dark-4 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20">
              <option value="0">Australia</option>
              <option value="1">America</option>
              <option value="2">England</option>
            </select>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-4">
              <svg
                className="fill-current"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.41469 5.03569L2.41467 5.03571L2.41749 5.03846L7.76749 10.2635L8.0015 10.492L8.23442 10.2623L13.5844 4.98735L13.5844 4.98735L13.5861 4.98569C13.6809 4.89086 13.8199 4.89087 13.9147 4.98569C14.0092 5.08024 14.0095 5.21864 13.9155 5.31345C13.9152 5.31373 13.915 5.31401 13.9147 5.31429L8.16676 10.9622L8.16676 10.9622L8.16469 10.9643C8.06838 11.0606 8.02352 11.0667 8.00039 11.0667C7.94147 11.0667 7.89042 11.0522 7.82064 10.9991L2.08526 5.36345C1.99127 5.26865 1.99154 5.13024 2.08609 5.03569C2.18092 4.94086 2.31986 4.94086 2.41469 5.03569Z"
                  fill=""
                  stroke=""
                  stroke-width="0.666667"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="address" className="mb-2.5 block">
            Street Address
            <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="address"
            placeholder="House number and street name"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />

          <div className="mt-5">
            <input
              type="text"
              name="address"
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="town" className="mb-2.5 block">
            Town/ City <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="town"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="country" className="mb-2.5 block">
            Country
          </label>

          <input
            type="text"
            name="country"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="mb-2.5 block">
            Phone <span className="text-red">*</span>
          </label>

          <input
            type="text"
            name="phone"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2.5 block">
            Email Address <span className="text-red">*</span>
          </label>

          <input
            type="email"
            name="email"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>
    </div>
  );
};

export default Shipping;

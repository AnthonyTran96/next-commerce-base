import React, { useState } from 'react';

const Login = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="rounded-[10px] bg-white shadow-1">
      <div
        onClick={() => setDropdown(!dropdown)}
        className={`flex cursor-pointer items-center gap-0.5 px-5.5 py-5 ${
          dropdown && 'border-b border-gray-3'
        }`}
      >
        Returning customer?
        <span className="flex items-center gap-2.5 pl-1 font-medium text-dark">
          Click here to login
          <svg
            className={`${dropdown && 'rotate-180'} fill-current duration-200 ease-out`}
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
        </span>
      </div>

      {/* <!-- dropdown menu --> */}
      <div className={`${dropdown ? 'block' : 'hidden'} px-4 pb-8.5 pt-7.5 sm:px-8.5`}>
        <p className="mb-6 text-custom-sm">If you didn&apos;t Logged in, Please Log in first.</p>

        <div className="mb-5">
          <label htmlFor="name" className="mb-2.5 block">
            Username or Email
          </label>

          <input
            type="text"
            name="name"
            id="name"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="mb-2.5 block">
            Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            autoComplete="on"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>

        <button
          type="submit"
          className="inline-flex rounded-md bg-blue px-10.5 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

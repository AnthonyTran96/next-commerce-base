import React from 'react';

const Coupon = () => {
  return (
    <div className="mt-7.5 rounded-[10px] bg-white shadow-1">
      <div className="border-b border-gray-3 px-4 py-5 sm:px-8.5">
        <h3 className="text-xl font-medium text-dark">Have any Coupon Code?</h3>
      </div>

      <div className="px-4 py-8 sm:px-8.5">
        <div className="flex gap-4">
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Enter coupon code"
            className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />

          <button
            type="submit"
            className="inline-flex rounded-md bg-blue px-6 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupon;

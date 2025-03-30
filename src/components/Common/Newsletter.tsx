import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-xl">
          {/* <!-- bg shapes --> */}
          <Image
            src="/images/shapes/newsletter-bg.jpg"
            alt="background illustration"
            className="absolute left-0 top-0 -z-1 h-full w-full rounded-xl"
            width={1170}
            height={200}
          />
          <div className="bg-gradient-1 absolute right-0 top-0 -z-1 h-full max-h-[243px] w-full max-w-[523px]"></div>

          <div className="flex flex-col gap-8 px-4 py-11 sm:px-7.5 lg:flex-row lg:items-center lg:justify-between xl:pl-12.5 xl:pr-14">
            <div className="w-full max-w-[491px]">
              <h2 className="mb-3 max-w-[399px] text-lg font-bold text-white sm:text-xl xl:text-heading-4">
                Don&apos;t Miss Out Latest Trends & Offers
              </h2>
              <p className="text-white">
                Register to receive news about the latest offers & discount codes
              </p>
            </div>

            <div className="w-full max-w-[477px]">
              <form>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-3 outline-none placeholder:text-dark-4"
                  />
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-blue px-7 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

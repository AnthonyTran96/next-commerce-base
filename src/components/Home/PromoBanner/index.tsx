import React from 'react';
import Image from 'next/image';

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 mb-7.5 overflow-hidden rounded-lg bg-[#F5F5F7] px-4 py-12.5 sm:px-7.5 lg:px-14 lg:py-17.5 xl:px-19 xl:py-22.5">
          <div className="w-full max-w-[550px]">
            <span className="mb-3 block text-xl font-medium text-dark">Apple iPhone 14 Plus</span>

            <h2 className="mb-5 text-xl font-bold text-dark lg:text-heading-4 xl:text-heading-3">
              UP TO 30% OFF
            </h2>

            <p>
              iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro, A15 Bionic, with a
              5‑core GPU, powers all the latest features.
            </p>

            <a
              href="#"
              className="mt-7.5 inline-flex rounded-md bg-blue px-9.5 py-[11px] text-custom-sm font-medium text-white duration-200 ease-out hover:bg-blue-dark"
            >
              Buy Now
            </a>
          </div>

          <Image
            src="/images/promo/promo-01.png"
            alt="promo img"
            className="absolute bottom-0 right-4 -z-1 lg:right-26"
            width={274}
            height={350}
          />
        </div>

        <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] px-4 py-10 sm:px-7.5 xl:px-10 xl:py-16">
            <Image
              src="/images/promo/promo-02.png"
              alt="promo img"
              className="absolute left-3 top-1/2 -z-1 -translate-y-1/2 sm:left-10"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="mb-1.5 block text-lg text-dark">Foldable Motorised Treadmill</span>

              <h2 className="mb-2.5 text-xl font-bold text-dark lg:text-heading-4">
                Workout At Home
              </h2>

              <p className="text-custom-1 font-semibold text-teal">Flat 20% off</p>

              <a
                href="#"
                className="mt-9 inline-flex rounded-md bg-teal px-8.5 py-2.5 text-custom-sm font-medium text-white duration-200 ease-out hover:bg-teal-dark"
              >
                Grab Now
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] px-4 py-10 sm:px-7.5 xl:px-10 xl:py-16">
            <Image
              src="/images/promo/promo-03.png"
              alt="promo img"
              className="absolute right-3 top-1/2 -z-1 -translate-y-1/2 sm:right-8.5"
              width={200}
              height={200}
            />

            <div>
              <span className="mb-1.5 block text-lg text-dark">Apple Watch Ultra</span>

              <h2 className="mb-2.5 text-xl font-bold text-dark lg:text-heading-4">
                Up to <span className="text-orange">40%</span> off
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                The aerospace-grade titanium case strikes the perfect balance of everything.
              </p>

              <a
                href="#"
                className="mt-7.5 inline-flex rounded-md bg-orange px-8.5 py-2.5 text-custom-sm font-medium text-white duration-200 ease-out hover:bg-orange-dark"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;

import React from 'react';
import HeroCarousel from './HeroCarousel';
import HeroFeature from './HeroFeature';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#E5EAF4] pb-10 pt-57.5 sm:pt-45 lg:pb-12.5 lg:pt-30 xl:pb-15 xl:pt-51.5">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="w-full xl:max-w-[757px]">
            <div className="relative z-1 overflow-hidden rounded-[10px] bg-white">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute bottom-0 right-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="w-full xl:max-w-[393px]">
            <div className="flex flex-col gap-5 sm:flex-row xl:flex-col">
              <div className="relative w-full rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="mb-20 max-w-[153px] text-xl font-semibold text-dark">
                      <a href="#"> iPhone 14 Plus & 14 Pro Max </a>
                    </h2>

                    <div>
                      <p className="mb-1.5 text-custom-sm font-medium text-dark-4">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="text-heading-5 font-medium text-red">$699</span>
                        <span className="text-2xl font-medium text-dark-4 line-through">$999</span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/hero-02.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="mb-20 max-w-[153px] text-xl font-semibold text-dark">
                      <a href="#"> Wireless Headphone </a>
                    </h2>

                    <div>
                      <p className="mb-1.5 text-custom-sm font-medium text-dark-4">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="text-heading-5 font-medium text-red">$699</span>
                        <span className="text-2xl font-medium text-dark-4 line-through">$999</span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/hero-01.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;

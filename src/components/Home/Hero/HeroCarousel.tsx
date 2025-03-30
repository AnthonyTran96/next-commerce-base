'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

import Image from 'next/image';

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex flex-col-reverse items-center pt-6 sm:flex-row sm:pt-0">
          <div className="max-w-[394px] py-10 pl-4 sm:py-15 sm:pl-7.5 lg:py-24.5 lg:pl-12.5">
            <div className="mb-7.5 flex items-center gap-4 sm:mb-10">
              <span className="block text-heading-3 font-semibold text-blue sm:text-heading-1">
                30%
              </span>
              <span className="block text-sm text-dark sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="mb-3 text-xl font-semibold text-dark sm:text-3xl">
              <a href="#">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus
              euismod lobortis in
            </p>

            <a
              href="#"
              className="mt-10 inline-flex rounded-md bg-dark px-9 py-3 text-custom-sm font-medium text-white duration-200 ease-out hover:bg-blue"
            >
              Shop Now
            </a>
          </div>

          <div>
            <Image src="/images/hero/hero-01.png" alt="headphone" width={351} height={358} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <div className="flex flex-col-reverse items-center pt-6 sm:flex-row sm:pt-0">
          <div className="max-w-[394px] py-10 pl-4 sm:py-15 sm:pl-7.5 lg:py-26 lg:pl-12.5">
            <div className="mb-7.5 flex items-center gap-4 sm:mb-10">
              <span className="block text-heading-3 font-semibold text-blue sm:text-heading-1">
                30%
              </span>
              <span className="block text-sm text-dark sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="mb-3 text-xl font-semibold text-dark sm:text-3xl">
              <a href="#">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p>Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum nec suscipit.</p>

            <a
              href="#"
              className="mt-10 inline-flex rounded-md bg-dark px-9 py-3 text-custom-sm font-medium text-white duration-200 ease-out hover:bg-blue"
            >
              Shop Now
            </a>
          </div>

          <div>
            <Image src="/images/hero/hero-01.png" alt="headphone" width={351} height={358} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;

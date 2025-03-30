'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'December, 31, 2024';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    // @ts-ignore
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#D0E9F3] p-4 sm:p-7.5 lg:p-10 xl:p-15">
          <div className="w-full max-w-[422px]">
            <span className="mb-2.5 block text-custom-1 font-medium text-blue">Don’t Miss!!</span>

            <h2 className="mb-3 text-xl font-bold text-dark lg:text-heading-4 xl:text-heading-3">
              Enhance Your Music Experience
            </h2>

            <p>The Havit H206d is a wired PC headphone.</p>

            {/* <!-- Countdown timer --> */}
            <div className="mt-6 flex flex-wrap gap-6" x-data="timer()" x-init="countdown()">
              {/* <!-- timer day --> */}
              <div>
                <span
                  className="mb-2 flex h-14.5 min-w-[64px] items-center justify-center rounded-lg bg-white px-4 text-xl font-semibold text-dark shadow-2 lg:text-3xl"
                  x-text="days"
                >
                  {' '}
                  {days < 10 ? '0' + days : days}{' '}
                </span>
                <span className="block text-center text-custom-sm text-dark">Days</span>
              </div>

              {/* <!-- timer hours --> */}
              <div>
                <span
                  className="mb-2 flex h-14.5 min-w-[64px] items-center justify-center rounded-lg bg-white px-4 text-xl font-semibold text-dark shadow-2 lg:text-3xl"
                  x-text="hours"
                >
                  {' '}
                  {hours < 10 ? '0' + hours : hours}{' '}
                </span>
                <span className="block text-center text-custom-sm text-dark">Hours</span>
              </div>

              {/* <!-- timer minutes --> */}
              <div>
                <span
                  className="mb-2 flex h-14.5 min-w-[64px] items-center justify-center rounded-lg bg-white px-4 text-xl font-semibold text-dark shadow-2 lg:text-3xl"
                  x-text="minutes"
                >
                  {minutes < 10 ? '0' + minutes : minutes}{' '}
                </span>
                <span className="block text-center text-custom-sm text-dark">Minutes</span>
              </div>

              {/* <!-- timer seconds --> */}
              <div>
                <span
                  className="mb-2 flex h-14.5 min-w-[64px] items-center justify-center rounded-lg bg-white px-4 text-xl font-semibold text-dark shadow-2 lg:text-3xl"
                  x-text="seconds"
                >
                  {seconds < 10 ? '0' + seconds : seconds}{' '}
                </span>
                <span className="block text-center text-custom-sm text-dark">Seconds</span>
              </div>
            </div>
            {/* <!-- Countdown timer ends --> */}

            <a
              href="#"
              className="mt-7.5 inline-flex rounded-md bg-blue px-9.5 py-3 text-custom-sm font-medium text-white duration-200 ease-out hover:bg-blue-dark"
            >
              Check it Out!
            </a>
          </div>

          {/* <!-- bg shapes --> */}
          <Image
            src="/images/countdown/countdown-bg.png"
            alt="bg shapes"
            className="absolute bottom-0 right-0 -z-1 hidden sm:block"
            width={737}
            height={482}
          />
          <Image
            src="/images/countdown/countdown-01.png"
            alt="product"
            className="absolute bottom-4 right-4 -z-1 hidden lg:block xl:bottom-10 xl:right-33"
            width={411}
            height={376}
          />
        </div>
      </div>
    </section>
  );
};

export default CounDown;

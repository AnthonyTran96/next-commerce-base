import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';

const MailSuccess = () => {
  return (
    <>
      <Breadcrumb title={'MailSuccess'} pages={['MailSuccess']} />
      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-xl bg-white px-4 py-10 shadow-1 sm:py-15 lg:py-20 xl:py-25">
            <div className="text-center">
              <h2 className="mb-5 text-4xl font-bold text-blue lg:text-[45px] lg:leading-[57px]">
                Successful!
              </h2>

              <h3 className="mb-3 text-xl font-medium text-dark sm:text-2xl">
                Your message sent successfully
              </h3>

              <p className="mx-auto mb-7.5 w-full max-w-[491px]">
                Thank you so much for your message. We check e-mail frequently and will try our best
                to respond to your inquiry.
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-blue px-6 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6654 9.37502C17.0105 9.37502 17.2904 9.65484 17.2904 10C17.2904 10.3452 17.0105 10.625 16.6654 10.625H8.95703L8.95703 15C8.95703 15.2528 8.80476 15.4807 8.57121 15.5774C8.33766 15.6742 8.06884 15.6207 7.89009 15.442L2.89009 10.442C2.77288 10.3247 2.70703 10.1658 2.70703 10C2.70703 9.83426 2.77288 9.67529 2.89009 9.55808L7.89009 4.55808C8.06884 4.37933 8.33766 4.32586 8.57121 4.42259C8.80475 4.51933 8.95703 4.74723 8.95703 5.00002L8.95703 9.37502H16.6654Z"
                    fill=""
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MailSuccess;

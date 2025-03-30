'use client';
import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Login from './Login';
import Shipping from './Shipping';
import ShippingMethod from './ShippingMethod';
import PaymentMethod from './PaymentMethod';
import Coupon from './Coupon';
import Billing from './Billing';

const Checkout = () => {
  return (
    <>
      <Breadcrumb title={'Checkout'} pages={['checkout']} />
      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <form>
            <div className="flex flex-col gap-7.5 lg:flex-row xl:gap-11">
              {/* <!-- checkout left --> */}
              <div className="w-full lg:max-w-[670px]">
                {/* <!-- login box --> */}
                <Login />

                {/* <!-- billing details --> */}
                <Billing />

                {/* <!-- address box two --> */}
                <Shipping />

                {/* <!-- others note box --> */}
                <div className="mt-7.5 rounded-[10px] bg-white p-4 shadow-1 sm:p-8.5">
                  <div>
                    <label htmlFor="notes" className="mb-2.5 block">
                      Other Notes (optional)
                    </label>

                    <textarea
                      name="notes"
                      id="notes"
                      rows={5}
                      placeholder="Notes about your order, e.g. speacial notes for delivery."
                      className="w-full rounded-md border border-gray-3 bg-gray-1 p-5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* // <!-- checkout right --> */}
              <div className="w-full max-w-[455px]">
                {/* <!-- order list box --> */}
                <div className="rounded-[10px] bg-white shadow-1">
                  <div className="border-b border-gray-3 px-4 py-5 sm:px-8.5">
                    <h3 className="text-xl font-medium text-dark">Your Order</h3>
                  </div>

                  <div className="px-4 pb-8.5 pt-2.5 sm:px-8.5">
                    {/* <!-- title --> */}
                    <div className="flex items-center justify-between border-b border-gray-3 py-5">
                      <div>
                        <h4 className="font-medium text-dark">Product</h4>
                      </div>
                      <div>
                        <h4 className="text-right font-medium text-dark">Subtotal</h4>
                      </div>
                    </div>

                    {/* <!-- product item --> */}
                    <div className="flex items-center justify-between border-b border-gray-3 py-5">
                      <div>
                        <p className="text-dark">iPhone 14 Plus , 6/128GB</p>
                      </div>
                      <div>
                        <p className="text-right text-dark">$899.00</p>
                      </div>
                    </div>

                    {/* <!-- product item --> */}
                    <div className="flex items-center justify-between border-b border-gray-3 py-5">
                      <div>
                        <p className="text-dark">Asus RT Dual Band Router</p>
                      </div>
                      <div>
                        <p className="text-right text-dark">$129.00</p>
                      </div>
                    </div>

                    {/* <!-- product item --> */}
                    <div className="flex items-center justify-between border-b border-gray-3 py-5">
                      <div>
                        <p className="text-dark">Havit HV-G69 USB Gamepad</p>
                      </div>
                      <div>
                        <p className="text-right text-dark">$29.00</p>
                      </div>
                    </div>

                    {/* <!-- product item --> */}
                    <div className="flex items-center justify-between border-b border-gray-3 py-5">
                      <div>
                        <p className="text-dark">Shipping Fee</p>
                      </div>
                      <div>
                        <p className="text-right text-dark">$15.00</p>
                      </div>
                    </div>

                    {/* <!-- total --> */}
                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="text-lg font-medium text-dark">Total</p>
                      </div>
                      <div>
                        <p className="text-right text-lg font-medium text-dark">$1072.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- coupon box --> */}
                <Coupon />

                {/* <!-- shipping box --> */}
                <ShippingMethod />

                {/* <!-- payment box --> */}
                <PaymentMethod />

                {/* <!-- checkout button --> */}
                <button
                  type="submit"
                  className="mt-7.5 flex w-full justify-center rounded-md bg-blue px-6 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
                >
                  Process to Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;

'use client';
import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import { useAppSelector } from '@/redux/store';
import SingleItem from './SingleItem';

export const Wishlist = () => {
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  return (
    <>
      <Breadcrumb title={'Wishlist'} pages={['Wishlist']} />
      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="mb-7.5 flex flex-wrap items-center justify-between gap-5">
            <h2 className="text-2xl font-medium text-dark">Your Wishlist</h2>
            <button className="text-blue">Clear Wishlist Cart</button>
          </div>

          <div className="rounded-[10px] bg-white shadow-1">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1170px]">
                {/* <!-- table header --> */}
                <div className="flex items-center px-10 py-5.5">
                  <div className="min-w-[83px]"></div>
                  <div className="min-w-[387px]">
                    <p className="text-dark">Product</p>
                  </div>

                  <div className="min-w-[205px]">
                    <p className="text-dark">Unit Price</p>
                  </div>

                  <div className="min-w-[265px]">
                    <p className="text-dark">Stock Status</p>
                  </div>

                  <div className="min-w-[150px]">
                    <p className="text-right text-dark">Action</p>
                  </div>
                </div>

                {/* <!-- wish item --> */}
                {wishlistItems.map((item, key) => (
                  <SingleItem item={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

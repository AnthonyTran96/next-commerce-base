import { selectTotalPrice } from '@/redux/features/cart-slice';
import { useAppSelector } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="w-full lg:max-w-[455px]">
      {/* <!-- order list box --> */}
      <div className="rounded-[10px] bg-white shadow-1">
        <div className="border-b border-gray-3 px-4 py-5 sm:px-8.5">
          <h3 className="text-xl font-medium text-dark">Order Summary</h3>
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
          {cartItems.map((item, key) => (
            <div
              key={key}
              className="flex items-center justify-between border-b border-gray-3 py-5"
            >
              <div>
                <p className="text-dark">{item.title}</p>
              </div>
              <div>
                <p className="text-right text-dark">${item.discountedPrice * item.quantity}</p>
              </div>
            </div>
          ))}

          {/* <!-- total --> */}
          <div className="flex items-center justify-between pt-5">
            <div>
              <p className="text-lg font-medium text-dark">Total</p>
            </div>
            <div>
              <p className="text-right text-lg font-medium text-dark">${totalPrice}</p>
            </div>
          </div>

          {/* <!-- checkout button --> */}
          <button
            type="submit"
            className="mt-7.5 flex w-full justify-center rounded-md bg-blue px-6 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
          >
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

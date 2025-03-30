import React from 'react';

const OrderDetails = ({ orderItem }: any) => {
  return (
    <>
      <div className="hidden items-center justify-between px-7.5 py-4.5 md:flex ">
        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Order</p>
        </div>
        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Date</p>
        </div>

        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Status</p>
        </div>

        {/* <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Title</p>
        </div> */}

        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Total</p>
        </div>

        {/* <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">Action</p>
        </div> */}
      </div>

      <div className="hidden items-center justify-between border-t border-gray-3 px-7.5 py-5 md:flex">
        <div className="min-w-[111px]">
          <p className="text-custom-sm text-red">#{orderItem.orderId.slice(-8)}</p>
        </div>
        <div className="min-w-[175px]">
          <p className="text-custom-sm text-dark">{orderItem.createdAt}</p>
        </div>

        <div className="min-w-[128px]">
          <p
            className={`inline-block rounded-[30px]  px-2.5 py-0.5 text-custom-sm capitalize ${
              orderItem.status === 'delivered'
                ? 'bg-green-light-6 text-green'
                : orderItem.status === 'on-hold'
                  ? 'bg-red-light-6 text-red'
                  : orderItem.status === 'processing'
                    ? 'bg-yellow-light-4 text-yellow'
                    : 'Unknown Status'
            }`}
          >
            {orderItem.status}
          </p>
        </div>

        {/* <div className="min-w-[213px]">
          <p className="text-custom-sm text-dark">{orderItem.orderTitle}</p>
        </div> */}

        <div className="min-w-[113px]">
          <p className="text-custom-sm text-dark">{orderItem.total}</p>
        </div>
      </div>
      <div className="w-full px-7.5">
        <p className="font-bold">Shipping Address:</p> <p>942 Aspen Road Encino, CA 91316</p>
      </div>
    </>
  );
};

export default OrderDetails;

import React, { useState } from 'react';
import OrderActions from './OrderActions';
import OrderModal from './OrderModal';

const SingleOrder = ({ orderItem, smallView }: any) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  const toggleModal = (status: boolean) => {
    setShowDetails(status);
    setShowEdit(status);
  };

  return (
    <>
      {!smallView && (
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

          <div className="min-w-[213px]">
            <p className="text-custom-sm text-dark">{orderItem.title}</p>
          </div>

          <div className="min-w-[113px]">
            <p className="text-custom-sm text-dark">{orderItem.total}</p>
          </div>

          <div className="flex items-center gap-5">
            <OrderActions toggleDetails={toggleDetails} toggleEdit={toggleEdit} />
          </div>
        </div>
      )}

      {smallView && (
        <div className="block md:hidden">
          <div className="px-7.5 py-4.5">
            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="pr-2 font-bold"> Order:</span> #{orderItem.orderId.slice(-8)}
              </p>
            </div>
            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="pr-2 font-bold">Date:</span> {orderItem.createdAt}
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="pr-2 font-bold">Status:</span>{' '}
                <span
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
                </span>
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="pr-2 font-bold">Title:</span> {orderItem.title}
              </p>
            </div>

            <div className="">
              <p className="text-custom-sm text-dark">
                <span className="pr-2 font-bold">Total:</span> ${orderItem.total}
              </p>
            </div>

            <div className="">
              <p className="flex items-center text-custom-sm text-dark">
                <span className="pr-2 font-bold">Actions:</span>{' '}
                <OrderActions toggleDetails={toggleDetails} toggleEdit={toggleEdit} />
              </p>
            </div>
          </div>
        </div>
      )}

      <OrderModal
        showDetails={showDetails}
        showEdit={showEdit}
        toggleModal={toggleModal}
        order={orderItem}
      />
    </>
  );
};

export default SingleOrder;

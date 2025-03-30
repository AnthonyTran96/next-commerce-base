import React, { useState } from 'react';
import toast from 'react-hot-toast';

const EditOrder = ({ order, toggleModal }: any) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status);
  const handleChanege = (e: any) => {
    setCurrentStatus(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!currentStatus) {
      toast.error('Please select a status');
      return;
    }

    toggleModal(false);
  };

  return (
    <div className="w-full px-10">
      <p className="pb-2 font-medium text-dark">Order Status</p>
      <div className="w-full">
        <select
          className="w-full rounded-[10px] border border-gray-3 bg-gray-1 px-5 py-3.5 text-custom-sm text-dark"
          name="status"
          id="status"
          required
          onChange={handleChanege}
        >
          <option value="processing">Processing</option>
          <option value="on-hold">On Hold</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <button
          className="border-blue-1 bg-blue-1 mt-5 w-full rounded-[10px] border bg-blue px-5 py-3.5 text-custom-sm text-white"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditOrder;

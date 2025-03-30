import { useEffect } from 'react';

const AddressModal = ({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) => {
  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event: any) {
      if (!event.target.closest('.modal-content')) {
        closeModal();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <div
      className={`no-scrollbar fixed left-0 top-0 h-screen w-full overflow-y-auto bg-dark/70 px-4 py-5 sm:px-8 sm:py-20 xl:py-25 2xl:py-[230px] ${
        isOpen ? 'z-99999 block' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center ">
        <div
          x-show="addressModal"
          className="modal-content relative w-full max-w-[1100px] rounded-xl bg-white p-7.5 shadow-3"
        >
          <button
            onClick={closeModal}
            aria-label="button for close modal"
            className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-meta text-body duration-150 ease-in hover:text-dark sm:right-3 sm:top-3"
          >
            <svg
              className="fill-current"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.3108 13L19.2291 8.08167C19.5866 7.72417 19.5866 7.12833 19.2291 6.77083C19.0543 6.59895 18.8189 6.50262 18.5737 6.50262C18.3285 6.50262 18.0932 6.59895 17.9183 6.77083L13 11.6892L8.08164 6.77083C7.90679 6.59895 7.67142 6.50262 7.42623 6.50262C7.18104 6.50262 6.94566 6.59895 6.77081 6.77083C6.41331 7.12833 6.41331 7.72417 6.77081 8.08167L11.6891 13L6.77081 17.9183C6.41331 18.2758 6.41331 18.8717 6.77081 19.2292C7.12831 19.5867 7.72414 19.5867 8.08164 19.2292L13 14.3108L17.9183 19.2292C18.2758 19.5867 18.8716 19.5867 19.2291 19.2292C19.5866 18.8717 19.5866 18.2758 19.2291 17.9183L14.3108 13Z"
                fill=""
              />
            </svg>
          </button>

          <div>
            <form>
              <div className="mb-5 flex flex-col gap-5 sm:gap-8 lg:flex-row">
                <div className="w-full">
                  <label htmlFor="name" className="mb-2.5 block">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value="James Septimus"
                    className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="mb-2.5 block">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value="jamse@example.com"
                    className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>
              </div>

              <div className="mb-5 flex flex-col gap-5 sm:gap-8 lg:flex-row">
                <div className="w-full">
                  <label htmlFor="phone" className="mb-2.5 block">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value="1234 567890"
                    className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="address" className="mb-2.5 block">
                    Address
                  </label>

                  <input
                    type="text"
                    name="address"
                    value="7398 Smoke Ranch RoadLas Vegas, Nevada 89128"
                    className="w-full rounded-md border border-gray-3 bg-gray-1 px-5 py-2.5 outline-none duration-200 placeholder:text-dark-5 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex rounded-md bg-blue px-7 py-3 font-medium text-white duration-200 ease-out hover:bg-blue-dark"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;

const Categories = ({ categories }: { categories: { name: string; products: number }[] }) => {
  return (
    <div className="mt-7.5 rounded-xl bg-white shadow-1">
      <div className="border-b border-gray-3 px-4 py-4.5 sm:px-6">
        <h2 className="text-lg font-medium text-dark">Popular Category</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-3">
          <button className="group flex items-center justify-between text-dark duration-200 ease-out hover:text-blue">
            Desktop
            <span className="inline-flex rounded-[30px] bg-gray-2 px-1.5 text-custom-xs duration-200 ease-out group-hover:bg-blue group-hover:text-white">
              12
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

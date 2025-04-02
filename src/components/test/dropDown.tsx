'use client';
import Dropdown from '../dropdown';
const TestDropDown = () => {
  return (
    <div className="w-full">
      <Dropdown
        label="Danh mục sản phẩm"
        className="w-full max-w-[350px] "
        renderItem={(item) => {
          return (
            <div key={item} className="flex h-full items-center gap-4 p-2">
              <span className="h-2 w-2 bg-common-dark"></span>
              <p>{item}</p>
            </div>
          );
        }}
        items={['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3']}
      />
    </div>
  );
};

export default TestDropDown;

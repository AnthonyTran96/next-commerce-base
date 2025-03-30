import { Category } from '@/types/category';
import React from 'react';
import Image from 'next/image';

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <a href="#" className="group flex flex-col items-center">
      <div className="mb-4 flex h-32.5 w-full max-w-[130px] items-center justify-center rounded-full bg-[#F2F3F8]">
        <Image src={item.img} alt="Category" width={82} height={62} />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat text-center font-medium text-dark transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;

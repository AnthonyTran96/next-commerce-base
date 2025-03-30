import React from 'react';
import { Testimonial } from '@/types/testimonial';
import Image from 'next/image';

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="m-1 rounded-[10px] bg-white px-4 py-7.5 shadow-testimonial sm:px-8.5">
      <div className="mb-5 flex items-center gap-1">
        <Image src="/images/icons/icon-star.svg" alt="star icon" width={15} height={15} />
        <Image src="/images/icons/icon-star.svg" alt="star icon" width={15} height={15} />
        <Image src="/images/icons/icon-star.svg" alt="star icon" width={15} height={15} />
        <Image src="/images/icons/icon-star.svg" alt="star icon" width={15} height={15} />
        <Image src="/images/icons/icon-star.svg" alt="star icon" width={15} height={15} />
      </div>

      <p className="mb-6 text-dark">{testimonial.review}</p>

      <a href="#" className="flex items-center gap-4">
        <div className="h-12.5 w-12.5 overflow-hidden rounded-full">
          <Image
            src={testimonial.authorImg}
            alt="author"
            className="h-12.5 w-12.5 overflow-hidden rounded-full"
            width={50}
            height={50}
          />
        </div>

        <div>
          <h3 className="font-medium text-dark">{testimonial.authorName}</h3>
          <p className="text-custom-sm">{testimonial.authorRole}</p>
        </div>
      </a>
    </div>
  );
};

export default SingleItem;

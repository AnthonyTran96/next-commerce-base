import React from 'react';
import { BlogItem } from '@/types/blogItem';
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = ({ blog }: { blog: BlogItem }) => {
  return (
    <div className="rounded-xl bg-white px-4 pb-4 pt-5 shadow-1 sm:px-5">
      <Link href="/blogs/blog-details" className="overflow-hidden rounded-md">
        <Image src={blog.img} alt="blog" className="w-full rounded-md" width={330} height={210} />
      </Link>

      <div className="mt-5.5">
        <span className="mb-2.5 flex items-center gap-3">
          <a href="#" className="text-custom-sm duration-200 ease-out hover:text-blue">
            {blog.date}
          </a>

          {/* <!-- divider --> */}
          <span className="block h-4 w-px bg-gray-4"></span>

          <a href="#" className="text-custom-sm duration-200 ease-out hover:text-blue">
            {blog.views} Views
          </a>
        </span>

        <h2 className="mb-4 text-lg font-medium text-dark duration-200 ease-out hover:text-blue sm:text-xl">
          <Link href="/blogs/blog-details">{blog.title}</Link>
        </h2>

        <Link
          href="/blogs/blog-details"
          className="inline-flex items-center gap-2 py-2 text-custom-sm duration-200 ease-out hover:text-blue"
        >
          Read More
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.1023 4.10225C10.3219 3.88258 10.6781 3.88258 10.8977 4.10225L15.3977 8.60225C15.6174 8.82192 15.6174 9.17808 15.3977 9.39775L10.8977 13.8977C10.6781 14.1174 10.3219 14.1174 10.1023 13.8977C9.88258 13.6781 9.88258 13.3219 10.1023 13.1023L13.642 9.5625H3C2.68934 9.5625 2.4375 9.31066 2.4375 9C2.4375 8.68934 2.68934 8.4375 3 8.4375H13.642L10.1023 4.89775C9.88258 4.67808 9.88258 4.32192 10.1023 4.10225Z"
              fill=""
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

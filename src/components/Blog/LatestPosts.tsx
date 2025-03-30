import { BlogItem } from '@/types/blogItem';
import Image from 'next/image';
import Link from 'next/link';

const LatestPosts = ({ blogs }: { blogs: BlogItem[] }) => {
  return (
    <div className="mt-7.5 rounded-xl bg-white shadow-1">
      <div className="border-b border-gray-3 px-4 py-4.5 sm:px-6">
        <h2 className="text-lg font-medium text-dark">Recent Posts</h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          {/* <!-- post item --> */}

          {blogs.slice(0, 3).map((blog, key) => (
            <div className="flex items-center gap-4" key={key}>
              <Link
                href="/blogs/blog-details-with-sidebar"
                className="w-full max-w-[110px] overflow-hidden rounded-[10px]"
              >
                <Image
                  src={blog.img}
                  alt="blog"
                  className="w-full rounded-[10px]"
                  width={110}
                  height={80}
                />
              </Link>

              <div>
                <h3 className="mb-1.5 leading-[22px] text-dark duration-200 ease-out hover:text-blue">
                  <Link href="/blogs/blog-details-with-sidebar">{blog.title}</Link>
                </h3>

                <span className="flex items-center gap-3">
                  <a href="#" className="text-custom-xs duration-200 ease-out hover:text-blue">
                    {blog.date}
                  </a>

                  {/* <!-- divider --> */}
                  <span className="block h-4 w-px bg-gray-4"></span>

                  <a href="#" className="text-custom-xs duration-200 ease-out hover:text-blue">
                    {blog.views}k Views
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;

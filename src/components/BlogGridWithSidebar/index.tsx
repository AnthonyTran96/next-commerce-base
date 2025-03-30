import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import BlogItem from '../Blog/BlogItem';
import blogData from '../BlogGrid/blogData';
import SearchForm from '../Blog/SearchForm';
import LatestPosts from '../Blog/LatestPosts';
import LatestProducts from '../Blog/LatestProducts';
import Categories from '../Blog/Categories';
import shopData from '../Shop/shopData';

const BlogGridWithSidebar = () => {
  const categories = [
    {
      name: 'Desktop',
      products: 10
    },
    {
      name: 'Laptop',
      products: 12
    },
    {
      name: 'Monitor',
      products: 30
    },
    {
      name: 'UPS',
      products: 23
    },
    {
      name: 'Phone',
      products: 10
    },
    {
      name: 'Watch',
      products: 13
    }
  ];

  return (
    <>
      <Breadcrumb title={'Blog Grid Sidebar'} pages={['blog grid sidebar']} />

      <section className="overflow-hidden bg-gray-2 py-20">
        <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col gap-7.5 lg:flex-row">
            {/* <!-- blog grid --> */}
            <div className="w-full lg:max-w-[770px]">
              <div className="grid grid-cols-1 gap-x-7.5 gap-y-10 sm:grid-cols-2">
                {blogData.map((blog, key) => (
                  <BlogItem blog={blog} key={key} />
                ))}
              </div>

              {/* <!-- Blog Pagination Start --> */}
              <div className="mt-15 flex justify-center">
                <div className="rounded-md bg-white p-2 shadow-1">
                  <ul className="flex items-center">
                    <li>
                      <button
                        id="paginationLeft"
                        aria-label="button for pagination left"
                        type="button"
                        disabled
                        className="rounded-[3px flex h-9 w-8 items-center justify-center duration-200 ease-out disabled:text-gray-4"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.1782 16.1156C12.0095 16.1156 11.8407 16.0594 11.7282 15.9187L5.37197 9.45C5.11885 9.19687 5.11885 8.80312 5.37197 8.55L11.7282 2.08125C11.9813 1.82812 12.3751 1.82812 12.6282 2.08125C12.8813 2.33437 12.8813 2.72812 12.6282 2.98125L6.72197 9L12.6563 15.0187C12.9095 15.2719 12.9095 15.6656 12.6563 15.9187C12.4876 16.0312 12.347 16.1156 12.1782 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] bg-blue px-3.5 py-1.5 text-white duration-200 hover:bg-blue hover:text-white"
                      >
                        1
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] px-3.5 py-1.5 duration-200 hover:bg-blue hover:text-white"
                      >
                        2
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] px-3.5 py-1.5 duration-200 hover:bg-blue hover:text-white"
                      >
                        3
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] px-3.5 py-1.5 duration-200 hover:bg-blue hover:text-white"
                      >
                        4
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] px-3.5 py-1.5 duration-200 hover:bg-blue hover:text-white"
                      >
                        5
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] px-3.5 py-1.5 duration-200 hover:bg-blue hover:text-white"
                      >
                        ...
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex rounded-[3px] px-3.5 py-1.5 duration-200 hover:bg-blue hover:text-white"
                      >
                        10
                      </a>
                    </li>

                    <li>
                      <button
                        id="paginationLeft"
                        aria-label="button for pagination left"
                        type="button"
                        className="flex h-9 w-8 items-center justify-center rounded-[3px] duration-200 ease-out hover:bg-blue hover:text-white disabled:text-gray-4"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.82197 16.1156C5.65322 16.1156 5.5126 16.0594 5.37197 15.9469C5.11885 15.6937 5.11885 15.3 5.37197 15.0469L11.2782 9L5.37197 2.98125C5.11885 2.72812 5.11885 2.33437 5.37197 2.08125C5.6251 1.82812 6.01885 1.82812 6.27197 2.08125L12.6282 8.55C12.8813 8.80312 12.8813 9.19687 12.6282 9.45L6.27197 15.9187C6.15947 16.0312 5.99072 16.1156 5.82197 16.1156Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Blog Pagination End --> */}
            </div>

            {/* <!-- blog sidebar --> */}
            <div className="w-full lg:max-w-[370px]">
              {/* <!-- search box --> */}
              <SearchForm />

              {/* <!-- Recent Posts box --> */}
              <LatestPosts blogs={blogData} />

              {/* <!-- Latest Products box --> */}
              <LatestProducts products={shopData} />

              {/* <!-- Popular Category box --> */}
              <Categories categories={categories} />

              {/* <!-- Tags box --> */}
              <div className="mt-7.5 rounded-xl bg-white shadow-1">
                <div className="border-b border-gray-3 px-4 py-4.5 sm:px-6">
                  <h2 className="text-lg font-medium text-dark">Tags</h2>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-3.5">
                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      Desktop
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      Macbook
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      PC
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      Watch
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      USB Cable
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      Mouse
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      Windows PC
                    </a>

                    <a
                      className="inline-flex rounded-md border border-gray-3 px-4 py-2 duration-200 ease-out hover:border-blue hover:bg-blue hover:text-white"
                      href="#"
                    >
                      Monitor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;

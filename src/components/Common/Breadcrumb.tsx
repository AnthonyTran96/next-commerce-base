import Link from 'next/link';

const Breadcrumb = ({ title, pages }: { title: string; pages: string[] }) => {
  return (
    <div className="overflow-hidden pt-[209px] shadow-breadcrumb sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
      <div className="border-t border-gray-3">
        <div className="mx-auto w-full max-w-[1170px] px-4 py-5 sm:px-8 xl:px-0 xl:py-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <h1 className="text-xl font-semibold text-dark sm:text-2xl xl:text-custom-2">
              {title}
            </h1>

            <ul className="flex items-center gap-2">
              <li className="text-custom-sm hover:text-blue">
                <Link href="/">Home /</Link>
              </li>

              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li className="text-custom-sm capitalize last:text-blue" key={key}>
                    {page}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

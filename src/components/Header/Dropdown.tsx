import { Menu } from '@/types/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Dropdown = ({ menuItem, stickyMenu }: { menuItem: Menu; stickyMenu: boolean }) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();

  return (
    <li
      onClick={() => setDropdownToggler(!dropdownToggler)}
      className={`group relative before:absolute before:left-0 before:top-0 before:h-[3px] before:w-0 before:rounded-b-[3px] before:bg-blue before:duration-200 before:ease-out hover:before:w-full ${
        pathUrl.includes(menuItem.title) && 'before:!w-full'
      }`}
    >
      <a
        href="#"
        className={`flex items-center gap-1.5 text-custom-sm font-medium capitalize text-dark hover:text-blue ${
          stickyMenu ? 'xl:py-4' : 'xl:py-6'
        } ${pathUrl.includes(menuItem.title) && '!text-blue'}`}
      >
        {menuItem.title}
        <svg
          className="cursor-pointer fill-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.95363 5.67461C3.13334 5.46495 3.44899 5.44067 3.65866 5.62038L7.99993 9.34147L12.3412 5.62038C12.5509 5.44067 12.8665 5.46495 13.0462 5.67461C13.2259 5.88428 13.2017 6.19993 12.992 6.37964L8.32532 10.3796C8.13808 10.5401 7.86178 10.5401 7.67453 10.3796L3.00787 6.37964C2.7982 6.19993 2.77392 5.88428 2.95363 5.67461Z"
            fill=""
          />
        </svg>
      </a>

      {/* <!-- Dropdown Start --> */}
      <ul
        className={`dropdown ${dropdownToggler && 'flex'} ${
          stickyMenu ? 'xl:group-hover:translate-y-0' : 'xl:group-hover:translate-y-0'
        }`}
      >
        {menuItem?.submenu?.map((item, i) => (
          <li key={i}>
            <Link
              href={item.path || ''}
              className={`flex px-4.5 py-[7px] text-custom-sm hover:bg-gray-1 hover:text-blue ${
                pathUrl === item.path && 'bg-gray-1 text-blue'
              } `}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;

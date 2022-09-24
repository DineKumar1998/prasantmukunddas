import { useEffect, useInsertionEffect, useState } from 'react'

const Dropdown = (props: any) => {
  const {} = props
  const [isDropdownShow, setDropdownShow] = useState(false);

  const showHidDropdown = () => setDropdownShow((prev) => !prev)
  return (
    <>
      <button
        type="button"
        onClick={showHidDropdown}
        aria-expanded="true"
        aria-haspopup="true"
        className="text-black rounded-full p-1.5 focus:bg-blue-700 focus:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"
          ></path>
        </svg>
      </button>
      <div
        className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        hidden={!isDropdownShow}
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <span className="block border-b px-2 py-1 font-bold">Share</span>
          <a
            href="https://www.facebook.com/"
            className="text-gray-700 block px-4 py-1 hover:underline"
            role="menuitem"
            tabIndex={-1}
            target="_blank"
            id="menu-item-0"
          >
            To facebook
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-1 hover:underline"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            To Twitter
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-1 hover:underline"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            To Printrest
          </a>
          <a
            href="#"
            className="border-t text-gray-700 block px-2 py-1 hover:underline"
            role="menuitem"
            tabIndex={-1}
            id="menu-item-0"
          >
            Download
          </a>
        </div>
      </div>
    </>
  )
}

export default Dropdown

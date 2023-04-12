import React from "react";
import { AiOutlineDown } from "react-icons/ai";
function BrandsShowMore({ showMoreBd, setShowMoreBd }) {
  const handleToggle = () => {
    setShowMoreBd((current) => !current);
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg> */}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">Brands</span>
        <div
          className={`flex items-center cursor-pointer  transiton-all duration-300  delay-75 justify-center w-6 h-4 rounded-full bg-blue-500 text-white 
                  ${showMoreBd ? " rotate-180" : "rotate-0"} `}
        >
          <AiOutlineDown />
        </div>
      </button>
      <ul
        className={`py-2 space-y-2 ${showMoreBd ? "flex flex-col" : "hidden"}`}
      >
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            ///
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            ///
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            ///
          </a>
        </li>
      </ul>
    </>
  );
}

export default BrandsShowMore;

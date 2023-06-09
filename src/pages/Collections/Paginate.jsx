import React, { useState } from "react";
const Paginate = ({ pageNumbers, paginate, previousPage, nextPage }) => {
  return (
    <div className="flex flex-row">
      <ul className="flex flex-row gap-2">
        <li onClick={previousPage} className="">
          Prev
        </li>
        {pageNumbers?.map((number, index) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="bg-gray-100 w-full px-2   rounded-md"
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className="page-number">
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;

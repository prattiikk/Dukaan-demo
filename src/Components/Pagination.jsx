import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// i dont have much knowledge of how to implement pagination so most of the logic here is generated from chatgpt

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 10;
    const sideNumbers = Math.floor(maxPageNumbersToShow / 2);

    let startPage, endPage;
    if (totalPages <= maxPageNumbersToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= sideNumbers) {
      startPage = 1;
      endPage = maxPageNumbersToShow;
    } else if (currentPage + sideNumbers >= totalPages) {
      startPage = totalPages - maxPageNumbersToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - sideNumbers;
      endPage = currentPage + sideNumbers;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-[26px] h-[26px] rounded-md text-xs mx-1  ${
            currentPage === i ? " bg-sky-700 text-white " : ""
          }`}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxPageNumbersToShow) {
      if (startPage > 1) {
        pageNumbers.unshift(
          <span key="ellipsis-start" className="mx-1">
            ...
          </span>
        );
      }
      if (endPage < totalPages) {
        pageNumbers.push(
          <span key="ellipsis-end" className="mx-1">
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="w-full h-[80px] flex items-center justify-center ">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="mr-4 text-sm border border-gray-500 border-opacity-40 rounded py-1 px-2 flex items-center justify-between hover:cursor-pointer"
      >
        <div className="mr-2">
          <FaAngleLeft />
        </div>
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="ml-4 text-sm border border-gray-500 border-opacity-40 rounded py-1 px-2 flex items-center justify-between hover:cursor-pointer"
      >
        Next
        <div className="ml-2">
          <FaAngleRight />
        </div>
      </button>
    </div>
  );
};

export default Pagination;

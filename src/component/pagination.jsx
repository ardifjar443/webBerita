import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="join mb-10">
      <a href="#berita">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="join-item btn text-info bg-primary disabled:bg-accent disable:text-accent hover:bg-info hover:text-primary "
        >
          «
        </button>
      </a>
      <button className="join-item btn bg-primary text-info hover:bg-black">
        Page {currentPage}
      </button>

      <a href="#berita">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="join-item btn text-info bg-primary disabled:bg-accent disable:text-accent hover:bg-info hover:text-primary"
        >
          »
        </button>
      </a>
    </div>
  );
};

export default Pagination;

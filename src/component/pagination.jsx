import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="join">
      <a href="#berita">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="join-item btn "
        >
          «
        </button>
      </a>
      <button className="join-item btn">Page {currentPage}</button>

      <a href="#berita">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="join-item btn"
        >
          »
        </button>
      </a>
    </div>
  );
};

export default Pagination;

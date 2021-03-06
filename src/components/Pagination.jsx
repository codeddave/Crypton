import React from "react";
import PropTypes from "prop-types";

import "./Pagination.css";

function Pagination(props) {
  const { page, totalPages, handlePagination } = props;
  return (
    <div className="mx-auto text-center">
      <button
        onClick={() => handlePagination("prev")}
        disabled={page <= 1}
        className="page-button mr-2"
      >
        &larr;
      </button>

      <span>
        page <b>{page}</b> of <b>{totalPages}</b>
      </span>
      <button
        onClick={() => handlePagination("next")}
        disabled={page >= totalPages}
        className="page-button ml-2"
      >
        &rarr;
      </button>
    </div>
  );
}
Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  handlePagination: PropTypes.func,
};
export default Pagination;

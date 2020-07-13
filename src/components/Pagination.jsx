import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const { page, totalPages, handlePagination } = props;
  return (
    <div className="mx-auto">
      <button onClick={() => handlePagination("prev")} disabled={page <= 1}>
        &larr;
      </button>

      <span>
        page <b>{page}</b> of <b>{totalPages}</b>
      </span>
      <button
        onClick={() => handlePagination("next")}
        disabled={page >= totalPages}
      >
        &rarr;
      </button>
    </div>
  );
}
export default Pagination;

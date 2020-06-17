import React from "react";
const _ = require("lodash");
const propTypes = require("prop-types");
const Pagination = (props) => {
  const { totalItems, pageSize, onPageChange, currentPage } = props;
  let totalPage = _.ceil(totalItems / pageSize);
  if (totalPage === 1) return null;
  let pages = _.range(1, totalPage + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
              className="page-link"
              href="#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  totalItems: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;

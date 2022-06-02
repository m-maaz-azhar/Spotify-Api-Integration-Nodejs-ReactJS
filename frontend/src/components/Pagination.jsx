import React, { useState, useEffect } from "react";

function Pagination({
  items,
  selection,
  RenderComponent,
  pageLimit,
  itemsLimit,
}) {
  const [pages] = useState(Math.round(items?.length / itemsLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  let goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  }

  let goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  }

  let changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * itemsLimit - itemsLimit;
    const endIndex = startIndex + itemsLimit;
    return items?.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let pageLimit = items.length / itemsLimit;
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} selection={selection} />
        ))}
      </div>
      {items.length > 0 ? (
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </div>
      ) : (
        "No Items"
      )}
    </div>
  );
}

export default Pagination;

import React, { useEffect, useRef, useState } from "react";
import { paginationService } from "./pagination.service";
import axiosInstance from "../../http/httpInstance";

/*
 * Pagination with props
 */
export const Pagination = ({
  apiRoute,
  recordsPerPage = 10,
  responseData,
  isLoadingData,
  reloadApi,
  search,
  isSearchingData,
}) => {
  // Hooks
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pager, setPager] = useState({});
  const [totalRecordsPage, setTotalRecordsPage] = useState(0);
  const currentPageRef = useRef(1);

  /*
   * Fetch data from API
   * Append query params if any
   * API call with GET
   */
  const getData = (pageNumber) => {
    isLoadingData(true);
    setCurrentPage(Number(pageNumber));

    let finalApiRoute = `${apiRoute}?pageNumber=${pageNumber}&recordsPerPage=${recordsPerPage}&searchTerm=${
      search || ""
    }`;
    axiosInstance
      .get(finalApiRoute)
      .then((response) => {
        isLoadingData(false);
        isSearchingData(false);
        setTotalCount(response.data.count);
        responseData(response.data.data);
        setTotalRecordsPage(Math.ceil(response.data.count / recordsPerPage));
        setPagination(response.data.count, pageNumber, recordsPerPage);
      })
      .catch((error) => {
        isLoadingData(false);
        isSearchingData(false);
      });
  };

  /*
   * Set pagination data and pager data
   */
  const setPagination = (
    totalCount,
    pageNumber,
    recordsPerPage
  ) => {
    const pData = paginationService.getPager(
      totalCount,
      pageNumber,
      recordsPerPage
    );
    setPager({ ...pData });
  };

  /*
   * Watch reloadApi flag
   */
  useEffect(() => {
    if (reloadApi) {
      getData(currentPage);
    }
  }, [reloadApi]);

  /*
   * Component initiated
   */
  useEffect(() => {
    getData(currentPage);
  }, []);

  /*
   * Watch current page
   */
  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  /*
   * Watch search
   */
  useEffect(() => {
    if (search) {
      isSearchingData(true);
      getData(currentPage);
    }
  }, [search]);

  /*
   * Watch recordsPerPage
   */
  useEffect(() => {
    getData(currentPage);
  }, [recordsPerPage]);

  /*
   * Render
   */
  return (
    <div>
      {totalCount > 0 && (
        <div className="table-footer d-flex justify-content-between align-items-center">
          <div className="records-count d-sm-block d-none text-secondary">
            Showing {pager.startIndex + 1} to {pager.endIndex + 1} of{" "}
            {totalCount} records
          </div>
          <nav className="pages">
            <ul className="pagination">
              <li
                className={
                  currentPage === 1 ? "disabled page-item" : "page-item"
                }
              >
                <a
                  href="#!"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    getData(currentPageRef.current - 1);
                  }}
                >
                  Previous
                </a>
              </li>
              {pager.pages &&
                pager.pages.map((page, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        currentPage === page
                          ? "custom-disabled active page-item"
                          : "page-item"
                      }
                    >
                      <a
                        className="page-link"
                        href="#!"
                        onClick={(e) => {
                          e.preventDefault();
                          getData(page);
                        }}
                      >
                        {page}
                      </a>
                    </li>
                  );
                })}
              <li
                className={
                  currentPage + 1 > totalRecordsPage
                    ? "disabled page-item"
                    : "page-item"
                }
              >
                <a
                  className="page-link"
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    getData(currentPageRef.current + 1);
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

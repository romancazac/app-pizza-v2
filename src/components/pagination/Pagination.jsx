import React from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.scss'
const Pagination = ({onPaginationPage}) => {

   return (
      <div className="pagination">
         <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onPaginationPage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
         />
      </div>

   )
}

export default Pagination
import React, { useContext, memo } from 'react';
import ReactPaginate from 'react-paginate';
import { DataContext } from '../app/app.js';

import './paginate.css';

import previous from '../../images/previous.png';
import next from '../../images/next.png';

const Paginate = () => {
  const { paginateTitle, numberOfPages, handlePaginate } = useContext(DataContext);

  return (
    <div className='paginate-bar'>
      <div className='paginate-bar-note'>{paginateTitle}</div>
      <ReactPaginate
        previousLabel={<img src={previous} alt='arrow to left' />}
        nextLabel={<img src={next} alt='arrow to right' />}
        breakLabel='...'
        breakClassName='paginate-break'
        pageCount={numberOfPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePaginate}
        containerClassName='paginate'
        activeClassName='paginate-active'
        initialPage={0}
        pageClassName='paginate-page'
        previousClassName='paginate-previous'
        nextClassName='paginate-next'
      />
    </div>
  );
};

export default memo(Paginate);

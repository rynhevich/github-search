import React, { memo } from 'react';

import './initial-page.css';

import searchBig from '../../images/search-big.png';

const InitialPage = () => (
  <div className='initial-page-container'>
    <div className='initial-page'>
      <img src={searchBig} alt='magnifier icon' />
      <span>Start with searching a GitHub user</span>
    </div>
  </div>
);

export default memo(InitialPage);

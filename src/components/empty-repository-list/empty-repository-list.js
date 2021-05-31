import React, { memo } from 'react';

import './empty-repository-list.css';

import emptyRepository from '../../images/empty-repository.png';

const EmptyRepositoryList = () => (
  <div className='empty-repository-list-container'>
    <div className='empty-repository-list'>
      <img src={emptyRepository} alt='empty repository icon' />
      <span>Repository list is empty</span>
    </div>
  </div>
);

export default memo(EmptyRepositoryList);

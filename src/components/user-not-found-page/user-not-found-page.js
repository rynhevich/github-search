import React, { memo } from 'react';

import './user-not-found-page.css';

import userNotFound from '../../images/user-not-found.png';

const UserNotFoundPage = () => (
  <div className='user-not-found-page-container'>
    <div className='user-not-found-page'>
      <img src={userNotFound} alt='user icon' />
      <span>User not found</span>
    </div>
  </div>
);

export default memo(UserNotFoundPage);

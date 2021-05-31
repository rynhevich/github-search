import React, { useContext, memo } from 'react';
import UserCard from '../user-card/user-card.js';
import RepositoriesFeed from '../repositories-feed/repositories-feed.js';
import Spinner from '../spinner/spinner.js';
import InitialPage from '../initial-page/initial-page.js';
import UserNotFoundPage from '../user-not-found-page/user-not-found-page.js';
import { DataContext } from '../app/app.js';

import './main-page.css';

const MainPage = () => {
  const { userLoading, user } = useContext(DataContext);

  if (user === null) {
    return (
      <div className='main-page-icon'>
        <InitialPage />
      </div>
    );
  }

  if (userLoading) {
    return (
      <div className='main-page-icon'>
        <Spinner />
      </div>
    );
  }

  if (user === false) {
    return (
      <div className='main-page-icon'>
        <UserNotFoundPage />
      </div>
    );
  }

  return (
    <div className='main-page-container'>
      <div className='main-page-user-card'>
        <UserCard />
      </div>
      <div className='main-page-repositories-feed'>
        <RepositoriesFeed />
      </div>
    </div>
  );
};

export default memo(MainPage);

import React, { useContext, memo } from 'react';
import Paginate from '../paginate/paginate.js';
import FeedList from '../feed-list/feed-list.js';
import EmptyRepositoryList from '../empty-repository-list/empty-repository-list.js';
import { DataContext } from '../app/app.js';

import './repositories-feed.css';

const RepositoriesFeed = () => {
  const { user: { reposNumber } } = useContext(DataContext);

  if (reposNumber === 0) {
    return (
      <div className="repositories-feed-empty-repository-list">
        <EmptyRepositoryList />
      </div>
    );
  }

  return (
    <div className='repositories-feed-container'>
      <div className='repositories-feed-number'>
        <span>Repositories</span>
        <span>&nbsp;({reposNumber})&nbsp;</span>
      </div>
      <FeedList />
      <div className='repositories-feed-paginate'>
        <Paginate />
      </div>
    </div>
  );
};

export default memo(RepositoriesFeed);

import React, { useContext, memo } from 'react';
import Spinner from '../spinner/spinner.js';
import { DataContext } from '../app/app.js';

import './feed-list.css';

const FeedList = () => {
  const { reposLoading, feedListElements } = useContext(DataContext);

  if (reposLoading) {
    return (
      <div className='feed-list-spinner'>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {feedListElements}
    </div>
  );
};

export default memo(FeedList);

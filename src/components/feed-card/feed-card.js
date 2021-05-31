import React, { memo } from 'react';

import './feed-card.css';

const FeedCard = ({ repoURL, repoTitle, repoDescription, handleLinkClick }) => (
  <div className='feed-card-container'>
    <div className='repository-title' onClick={() => handleLinkClick(repoURL)}>{repoTitle}</div>
    <div className='repository-description'>{repoDescription}</div>
  </div>
);

export default memo(FeedCard);

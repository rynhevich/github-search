import React, { useContext, memo } from 'react';
import { DataContext } from '../app/app.js';

import './user-card.css';

import followersIcon from '../../images/followers-icon.png';
import followingIcon from '../../images/following-icon.png';

const UserCard = () => {
  const {
    user: {
      name, login, followers, following, userURL, avatarURL,
    }, handleLinkClick,
  } = useContext(DataContext);

  return (
    <div className='user-card-container'>
      <img className='avatar' src={avatarURL} alt='Users avatar' />
      <div className='github-name'>{name}</div>
      <div className='github-username' onClick={() => handleLinkClick(userURL)}>{login}</div>
      <div className='github-follow-information'>
        <div className='github-followers'>
          <img className='github-followers-icon' src={followersIcon} alt='follovers icon' />
          <div className='github-followers-title'>
            {followers}
            {' '}
            followers
          </div>
        </div>
        <div className='github-following'>
          <img className='github-following-icon' src={followingIcon} alt='following icon' />
          <div className='github-following-title'>
            {following}
            {' '}
            following
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UserCard);

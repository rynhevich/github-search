import React, { useContext, memo } from 'react';
import { DataContext } from '../app/app.js';

import './header.css';

const Header = () => {
  const { handleSubmit } = useContext(DataContext);

  return (
    <div className='header-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter GitHub username' />
      </form>
    </div>
  );
};

export default memo(Header);

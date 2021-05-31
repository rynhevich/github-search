import React, { memo } from 'react';

import './spinner.css';

const Spinner = () => (
  <div className='spinner-container'>
    <div className='spinner'>
      <div />
    </div>
  </div>
);

export default memo(Spinner);

import './SubHeader.css';

import React, { useState } from 'react';

const SubHeader = ({ title, customComponent }) => {
  return (
    <div className='subheader'>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <div className='custom-component'>
        {customComponent}
      </div>
    </div>
  );
}

export default SubHeader;
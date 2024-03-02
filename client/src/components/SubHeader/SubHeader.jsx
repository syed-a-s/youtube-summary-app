import './SubHeader.css';

import React, { useState } from 'react';

const SubHeader = ({ title, customComponent, paneType }) => {
  const subheaderClassName = `subheader ${paneType}-subheader`;

  return (
    <div className={subheaderClassName}>
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

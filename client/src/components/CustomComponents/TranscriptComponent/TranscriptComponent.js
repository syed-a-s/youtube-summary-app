import React, { useState } from 'react';

import './TranscriptComponent.css';

const TranscriptComponent = ({transcript}) => {
  return (
    <div>
      {transcript ? (
        <div>
          {transcript}
        </div>
      ) : (
        <div>
          No transcript yet :)
        </div>
      )}
    </div>
  );
}

export default TranscriptComponent;

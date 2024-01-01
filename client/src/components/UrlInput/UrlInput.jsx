import './UrlInput.css';

import React, { useState } from 'react';
import useFetch from '../../hook/useFetch.js';
import extractVideoId from '../../utils/extractVideoId.js';

const UrlInput = ({ callback }) => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');

  const {transcriptData, isLoading, error} = useFetch(videoId);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
    console.log("URL:", url);
  };

  const handlePasteEvent = (event) => {
    setUrl(event.clipboardData.getData('Text'));
    console.log("URL:", url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVideoId(extractVideoId(url)); // get videoId from url and set videoId
    console.log("Video ID:", videoId);
    callback(transcriptData);
  };

  return (
    <div className='url-input-container'>
      <div className='url-input'>
        <input
          type='url'
          value={url}
          onChange={handleInputChange}
          onPaste={handlePasteEvent}
          placeholder='Enter youtube url here'
        />
        <button onClick={handleSubmit} type='submit'>
          Submit
        </button>
      </div>
    </div>
  );
}

export default UrlInput;

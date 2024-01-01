import './UrlInput.css';

import React, { useState, useRef } from 'react';
import extractVideoId from '../../utils/extractVideoId.js';

const UrlInput = ({ transcriptDataCallback }) => {
  const [url, setUrl] = useState('');

  const fetchTranscriptData= async (videoId) => {
    try {
      const abortController = new AbortController(); // Create a new controller for each request
      const response = await fetch(`/get-transcript/${videoId}`, {
        signal: abortController.signal,
      });
      const transcriptData = await response.json();
      return transcriptData;
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Request aborted:", error);
        return;
      }
      console.error("Error:", error);
    } finally {
      console.log("done");
    }
  };

  const handleInputChange = (event) => {
    setUrl(event.target.value);
    console.log("URL:", url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const extractedVideoId = extractVideoId(url);
    console.log("Video ID:", extractedVideoId);

    try {
      const transcriptData = await fetchTranscriptData(extractedVideoId);
      transcriptDataCallback(transcriptData); // pass back transcript json back to parent
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='url-input-container'>
      <div className='url-input'>
        <input
          type='url'
          value={url}
          onChange={handleInputChange}
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

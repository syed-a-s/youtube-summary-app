import './UrlInput.css';

import React, { useState } from 'react';
import extractVideoId from '../../utils/extractVideoId.js';

const UrlInput = ({ setTranscriptCallback, setSummaryCallback}) => {
  const [url, setUrl] = useState('');

  // retrieves transcript from video id. called when users clicks submit
  const fetchTranscriptData = async (videoId) => {
    try {
      const abortController = new AbortController(); // Create a new controller for each request
      const response = await fetch(`/get-transcript/${videoId}`, {
        signal: abortController.signal,
      });
      const transcriptData = await response.json();
      console.log(transcriptData)
      return transcriptData;
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Request aborted:", error);
        return;
      }
      console.error("Error:", error);
    } finally {
      console.log("finished attempt to retrieve transcript");
    }
  };

  const fetchSummaryData = async (transcript) => {
    try {
      const response = await fetch('/get-summary/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript: transcript }),
      });

      if (!response.ok) {
        throw new Error('Falied to fetch summary');
      }

      const summaryData = await response.json();
      console.log(summaryData);
      return summaryData;
    } catch (error) {
      console.error('Error', error);
    } finally {
      console.log("finished attempt to retrieve summary")
    }
  }

  // extracts video id from url and calls fetchTranscriptData
  // calls back transcript data to parent component
  const handleSubmit = async (event) => {
    event.preventDefault();
    const extractedVideoId = extractVideoId(url);
    console.log("Video ID:", extractedVideoId);

    try {
      // get transcript as json
      const transcriptData = await fetchTranscriptData(extractedVideoId);
      // retrieve values and turn into a string to make transcript
      const transcript = (transcriptData.transcript || []).map(item => item.text ?? '').join(' ');
      // get summary from openai from transcript
      const summaryData = await fetchSummaryData(transcript);
      setTranscriptCallback(transcript); // pass back transcript json back to parent
      setSummaryCallback(summaryData.message); // pass back summary json back to parent
    } catch (error) {
      console.error(error);
    }
  };

  // sets url to url on input
  const handleInputChange = (event) => {
    setUrl(event.target.value);
    console.log("URL:", url);
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
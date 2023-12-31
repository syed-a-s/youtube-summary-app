import './UrlInput.css';
import React, { useState } from 'react';
import useFetch from '../../hook/useFetch.js';

const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the URL (e.g., send it to a function or component for further processing)
    console.log('Submitted URL:', url);
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

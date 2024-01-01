import { useState, useEffect, useRef } from 'react';

const useFetch = (videoId) => {
  const [transcriptData, setTranscriptData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // const abortControllerRef = useRef<AbortController | null>(null);
  const abortControllerRef = useRef(null);

  const fetchData = async () => {
    abortControllerRef.current?.abort(); // abort request if request already exists
    abortControllerRef.current = new AbortController();

    try {
      setIsLoading(true);
      const response = await fetch(`/get-transcript/${videoId}`, {
        signal: abortControllerRef.current?.signal,
      }); // will enable us on next request to abort the request if needed 
      const transcriptData = await response.json();
      setTranscriptData(transcriptData);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Aborted");
        return;
      } // cancel error if error was caused by aborting previous request 
      setError(error);
    } finally {
      setIsLoading(false);
    };
  };

  useEffect(() => {
    fetchData(); 
  }, [videoId]);

  return {transcriptData, isLoading, error};
}

export default useFetch;

import { useState, useEffect, useRef } from 'react';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // const abortControllerRef = useRef<AbortController | null>(null);
  const abortControllerRef = useRef(null);

  const fetchData = async () => {
    abortControllerRef.current?.abort(); // abort request if request already exists
    abortControllerRef.current = new AbortController();

    try {
      setIsLoading(true);
      const response = await fetch(endpoint, { // fetch(`http://127.0.0.1:5000/${endpoint}`, {
        signal: abortControllerRef.current?.signal,
      }); // will enable us on next request to abort the request if needed 
      const data = await response.json();
      setData(data);
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
  }, [endpoint]);

  return {data, isLoading, error};
}

export default useFetch;

import { useState } from "react";

/**
 * Custom hook for fetching data from a given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {string} method - The method for the fetch request ('POST' or 'GET').
 * @param {object} data - The data to be sent with the fetch request (for 'POST' method only).
 *
 * @returns {object} An object containing the following properties:
 *   - data: The data returned from the fetch request.
 *   - error: The error occurred during the fetch request.
 *   - loading: A boolean indicating whether the fetch request is still in progress.  
 *   - fetchData: A function for triggering the fetch request.
 */


export default function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const fetchData = async (url, name, method = 'GET', body) => {
    setLoading({ ...loading, [name]: true });
    try {
      let options;
      if (method === 'POST' || method === 'post') {
        options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        };
      }
      const controller = new AbortController();
      const signal = controller.signal;
      options = { ...options, signal };
      const response = await fetch(url, options)
      const json = await response.json();
      setData({ ...data, [name]: json });
    } catch (e) {
      setError({ ...error, [name]: e });
    }
    setLoading({ ...loading, [name]: false });
  };

  return { data, error, loading, fetchData };
}

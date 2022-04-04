import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const cache = useRef({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
      } else {
        try {
          // console.log("fetching");
          const response = await fetch(url, { signal: controller.signal });
          const result = await response.json();
          cache.current[url] = data; // set response in cache;
          setData(result);
        } catch (e) {
          console.log(e);
          setError(e);
        }
      } //else
      setLoading(false);
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

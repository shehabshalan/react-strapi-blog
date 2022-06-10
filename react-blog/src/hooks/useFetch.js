import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const header = {
        Authorization: process.env.REACT_APP_BEARER_TOKEN,
      };

      try {
        const res = await fetch(url, {
          headers: header,
        });
        const json = await res.json();

        setPosts(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, posts };
};

export default useFetch;

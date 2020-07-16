import { useState, useEffect } from 'react';

export const useNetwork = ({ url }) => {
  let [state, setState] = useState({ loading: true });

  useEffect(() => {
    setState({ loading: true });

    const makeRequest = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();

        setState({ data, loading: false });
      } catch (error) {
        setState({ error, loading: false });
      }
    };
    makeRequest();
  }, [url]);

  return state;
};

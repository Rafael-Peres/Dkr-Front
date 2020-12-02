import React, { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

const useRequest = (url, params) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const fetch = useCallback(() => {
    const fetchData = async () => {
      setLoading(true);

      api
        .get(url, {
          params: {
            ...params,
          },
          data: [],
        })
        .then(({ data: responseData }) => {
          setData(responseData);
        })
        .catch(err => {
          if (err.response) {
            setError(err.response.data);
          } else {
            setError('Unable to retrieve data');
          }
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [params]);

  useEffect(fetch, [params]);

  return { loading, data, error };
};

export default useRequest;

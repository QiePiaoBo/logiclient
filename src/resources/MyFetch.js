import { useState, useEffect } from 'react';
import {getUrlByEnv} from "./utils"

function MyFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 根据当前环境选择服务器地址
  const finalUrl = getUrlByEnv(url);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(finalUrl,{
        method: 'GET',
        credentials: 'include'
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [finalUrl]);

  return { data, loading };
}

export default MyFetch;
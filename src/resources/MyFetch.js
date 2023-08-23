import { useState, useEffect } from 'react';

function MyFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 检查当前环境
  const isLocal = window.location.hostname === 'localhost';
  // 根据当前环境选择服务器地址
  const finalUrl = getFinalUrl(isLocal, url);
  useEffect(() => {
    console.log('finalUrl = ' + finalUrl);
    async function fetchData() {
      const response = await fetch(finalUrl);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [finalUrl]);

  return { data, loading };
}

function getFinalUrl(isLocal, url){
    // 拼接完整的URL
    if(isLocal){
        url = url.replace('/blog', 'http://172.26.0.152:9002');
        return url;
    }else {
        return url;
    }
}

export default MyFetch;
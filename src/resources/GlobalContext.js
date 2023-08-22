import React from "react";
import {useState, useEffect} from 'react';

const GlobalContext = React.createContext({
  userName: 'dylan',

  setUserName: () => {}
});

export const GlobalProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  // 从 localStorage 中获取 userName
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  // 将 userName 保存到 localStorage 中
  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <GlobalContext.Provider value={{ userName, setUserName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

import React from "react";
import {useState, useEffect} from 'react';

const GlobalContext = React.createContext({
  userName: '',
  userId: '',
  setUserName: () => {},
  setUserId: () => {}
});

export const GlobalProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  // 从 localStorage 中获取 userName
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedUserId = localStorage.getItem('userId');
    if (storedUserName && storedUserName!=="null") {
      setUserName(storedUserName);
    }
    if (storedUserId && storedUserId !== "null") {
      setUserId(storedUserId);
    }
  }, []);

  // 将 userName 保存到 localStorage 中
  useEffect(() => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userId', userId);
  }, [userName, userId]);

  return (
    <GlobalContext.Provider value={{ userName, setUserName, userId, setUserId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;

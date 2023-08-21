import React from 'react';

const GlobalContext = React.createContext({
  userName: 'dylan',

  setUserName: () => {}
});

export default GlobalContext;

import Home from '../Home';
import Layout from '../../Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from '../Chat';
import NoMatch from '../NoMatch';
import Confetti from '../Confetti';
import Login from '../Login';
import { useState } from 'react';
import GlobalContext from '../../resources/GlobalContext';

function App() {

  const [userName, setUserName] = useState('');

  return (
    <GlobalContext.Provider value={{ userName, setUserName }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/login' element={<Login />} />
            <Route path='/confetti' element={<Confetti />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;

import Home from '../Home';
import Layout from '../../Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from '../Chat';
import NoMatch from '../NoMatch';
import Confetti from '../Confetti';
import Login from '../Login';
import {GlobalProvider} from '../../resources/GlobalContext';
import Blog from '../Blog';
import Basic from '../../Layout/Basic';
import Article from '../Article';
import AccountInfo from '../AccountInfo';
import AccountManage from '../AccountManage';

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/main/' element={<Basic />}>
            <Route index element={<Blog />} />
            <Route path='/main/blog' element={<Blog />} />
            <Route path='/main/article/:id' element={<Article />} />
          </Route>
          <Route path='/tool/' element={<Basic />}>
            <Route index element={<Confetti />} />
            <Route path='/tool/confetti' element={<Confetti />} />
            <Route path='/tool/chat' element={<Chat />} />
          </Route>
          <Route path='/account/' element={<Basic />} >
            <Route path='/account/info' element={<AccountInfo />} />
            <Route path='/account/manage' element={<AccountManage />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

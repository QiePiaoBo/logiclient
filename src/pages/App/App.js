import Home from '../Home';
import Layout from '../../Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Util from '../Util';
import Chat from '../Chat';
import NoMatch from '../NoMatch';
import Confetti from '../Confetti';
import Login from '../Login';
import {GlobalProvider} from '../../resources/GlobalContext';
import Blog from '../Blog';
import Article from '../Article';
import AccountInfo from '../AccountInfo';
import AccountManage from '../AccountManage';
import Editor from '../Editor';

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
          <Route path='/main/' element={<Layout />}>
            <Route index element={<Blog />} />
            <Route path='/main/blog' element={<Blog />} />
            <Route path='/main/article/:id' element={<Article />} />
            <Route path='/main/edit/:type' element={<Editor />} />
            
          </Route>
          <Route path='/tool/' element={<Layout />}>
            <Route index element={<Confetti />} />
            <Route path='/tool/confetti' element={<Confetti />} />
            <Route path='/tool/chat' element={<Chat />} />
            <Route path='/tool/util' element={<Util />} />
          </Route>
          <Route path='/account/' element={<Layout />} >
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

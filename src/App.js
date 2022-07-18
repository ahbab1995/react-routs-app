import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componetes/about/About';
import Header from './componetes/Friends/friend/Header/Header';
import FriendDetail from './componetes/Friends/FriendDetail/FriendDetail';
import Friends from './componetes/Friends/Friends';
import Home from './componetes/home/Home';
import Notfount from './componetes/notfound/Notfount';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/friends' element={<Friends/>}></Route>
          <Route path='/friend:friendId' element={<FriendDetail/>}></Route>
          <Route path='*' element={<Notfount/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

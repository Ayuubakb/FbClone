import './App.css';
import Nav from './Components/Nav';
import RightBar from './Components/RightBar';
import Home from './pages/Home';
import TimeLine from './pages/TimeLine';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Nav/>
        <Routes>
            <Route index element={<TimeLine/>}></Route>
            <Route path='Home' element={<Home />}></Route>
        </Routes>
      <section className='sec'>
        <RightBar/>
      </section>
    </div>
  );
}

export default App;

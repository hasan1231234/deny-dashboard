import './App.css';
import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import AthkarMorning from './pages/AthkarMorning';
import Upload from './pages/Upload';
import Upload1 from './pages/Upload1';
import Upload2 from './pages/Upload2';
import AthkarEvening from './pages/AthkarEvening';
import AthkarSleeping from './pages/AthkarSleeping';
import Awrad from './pages/Awrad';
import Upload22 from './pages/Upload22';
import Upload222 from './pages/Upload222';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/athkarevening' element={<AthkarEvening/>}/>
           <Route path='/upload' element={<Upload/>}/>
           <Route path='/upload1' element={<Upload1/>}/>
           <Route path='/upload2' element={<Upload2/>}/>
           <Route path='/upload22' element={<Upload22/>}/>
           <Route path='/upload222' element={<Upload222/>}/>
           <Route path='/athkarsleeping' element={<AthkarSleeping/>}/>
           <Route path='/awrad' element={<Awrad/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

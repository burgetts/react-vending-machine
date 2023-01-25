import './App.css';
import VendingMachine from './VendingMachine';
import Pepsi from './Pepsi'
import Goldfish from './Goldfish'
import Skittles from './Skittles'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} /> 
          <Route path='/pepsi' element={<Pepsi />} />
          <Route path='/goldfish' element={<Goldfish />} />
          <Route path='/skittles' element={<Skittles />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

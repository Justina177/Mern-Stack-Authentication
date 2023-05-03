import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} /> 
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

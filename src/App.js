// import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout'
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={ 
     <Layout>
        <Home />
     </Layout> 
    } /> 
     <Route path="/auth" element={<Auth />} /> 
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

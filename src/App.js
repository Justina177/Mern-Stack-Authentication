// import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout'
import Forgot from './pages/auth/Forgot';
import Login from './pages/auth/Login';
import LoginWithCode from './pages/auth/LoginWithCode';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset';
import Verify from './pages/auth/Verify';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';


// import Auth from './pages/auth/Auth';

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
     <Route path="/login" element={<Login />} /> 
     <Route path="/register" element={<Register />} /> 
     <Route path="/forgot" element={<Forgot />} /> 
     <Route path="/resetPassword/:resetToken" element={<Reset />} /> 
     <Route path="/LoginWithCode/:email" element={<LoginWithCode />} /> 
     <Route path="/verify/:verificationToken" element={<Verify />} /> 
     <Route path="/profile" element={ 
     <Layout>
        <Profile />
     </Layout> 
    } /> 
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

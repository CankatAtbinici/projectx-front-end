import './App.css';
import RegisterContainer from './components/registerForm/RegisterContainer';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import Settings from "./pages/settings/Settings"
import Register from './pages/register/register';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import TopBar from './components/top-bar/Top-Bar';
import Login from './pages/login/Login';






function App() {

  return (
<div style={{width: "90%"  }}>
<Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/login" element = {<Login/>} />
        </Routes>
      <Footer />
    </Router>

 
</div>
  );
}

export default App;



/*
 const [disabled , setDisabled] = useState(false)
 

  const reqeustArchiving = async () => {
   
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos",);
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return data;
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleArchiveClick = async (event) => {
    setDisabled(true);
    await reqeustArchiving();
    setDisabled(false);
  } 
 */
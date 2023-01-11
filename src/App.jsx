import "./App.css";
import RegisterContainer from "./components/registerForm/RegisterContainer";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/register";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import TopBar from "./components/top-bar/Top-Bar";
import Login from "./pages/login/Login";
import ModalContext from "./context/context";
import AboutUs from "./pages/about-us/AboutUs";
import UniqRoom from "./pages/uniq_room/UniqRoom";

function App() {
  return (
    <ModalContext>
      <div style={{ width: "90%" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/uniqroom" element={<UniqRoom />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ModalContext>
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

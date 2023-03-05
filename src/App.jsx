import "./App.css";
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
import Footer from "./components/footer/footer";
import Login from "./pages/login/Login";
import ModalContext from "./context/context";
import AboutUs from "./pages/about-us/AboutUs";
import RegisterExperienced from "./pages/register-experienced/RegisterExperienced"
import "react-datepicker/dist/react-datepicker.css";
import { getAccessToken } from "./auth/auth.service";
import jwtDecode from "jwt-decode";





//Import ProtectedRoutes
import ProtectedRoutes from "./auth/ProtectedRoutes";
import api from "./services/api";




function App() {

  if(getAccessToken() !==null){
    const visitor = jwtDecode(getAccessToken()).sub 
    let visitObject = {
      visitor:visitor,
      value:true
    }
    api.post('/user/visitor', visitObject)
  }

  return (
    <ModalContext>
      <div style={{ width: "90%" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profiles/:id" element={<Profile />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/profile/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register-to-be-experienced" element={<RegisterExperienced/>} />
            </Route>
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

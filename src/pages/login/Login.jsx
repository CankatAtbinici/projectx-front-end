import React, { useState } from 'react';
import { FormGroup, Input,Layer,Button } from 'reactstrap';
import axios, { formToJSON } from "axios"
import Header from '../../components/header/header';
import LoginModal from '../../components/log-in/LoginModal';
import { setAccessToken } from '../../auth/auth.service';


function Login(props) {
    const [formData , setFormData] = useState();
    const handleUserLogin = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
          });
    }

    const handleSubmitFormData = (event) => {
            event.preventDefault();
        axios
        .post('http://localhost:8000/api/login', 
          formData
        )
        .then((response) => {
          if (response) {
            const token = response.data.token;
            setAccessToken(token)
            window.location.href = "/profile"
          } else {
            console.log("giriş başarısız ")
          
          }
        })
        .catch((error) => {
            console.log("işlem catch bloğuna düştü")
         
        });
        
    }
    return (
        <div>
               
         <Header/>
        <div>
          <LoginModal
          handleSubmitFormData = {handleSubmitFormData}
          handleUserLogin = {handleUserLogin}
          />
        </div>
        </div>
    );
}

export default Login;   
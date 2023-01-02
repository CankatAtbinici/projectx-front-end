import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import { FormGroup, Input,Layer,Button } from 'reactstrap';
import LoginComponent from '../../components/log-in/Login';
import axios from 'axios';


function Login(props) {
    const [formData , setFormData] = useState();
    const hadnleUSerLogin = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
          });
    }

    const handleSubmitFormData = (event) => {
            event.preventDefault();
        axios
        .post('http://localhost:8000/api/login', formData)
        .then((response) => {
          if (response) {
            console.log(response)
            console.log("giriş başarılı")
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
               
           
          <form action="">
            <layer>name :</layer>
            <input type="text" name="username" onChange={(event) => {hadnleUSerLogin(event)}} />
            <br></br>
            <layer>
                password :
            </layer>
            <input type="text" name="password" onChange={(event) => {hadnleUSerLogin(event)}} />

            <div>
                <Button type="submit" name="submitButton" 
                onClick={(event) => {handleSubmitFormData(event)}}
                > Gönder</Button>

            </div>
          </form>
        </div>
    );
}

export default Login;   
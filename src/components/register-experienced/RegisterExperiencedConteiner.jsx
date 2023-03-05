import React, { useState } from 'react';
import Header from "../../components/header/header"
import api from '../../services/api';
import UserContactInformation from './UserContactInformation';
import { Context } from '../../context/context';
import { useContext } from 'react';

function RegisterExperiencedConteiner(props) {
    

    const [registerFormData , setRegisterFormData] = useState([]);
    const {userProfileData} = useContext(Context);

    if(userProfileData===false){
        window.location.pathname = "/"
    }
    const formEventHandler = (e) => {
        e.preventDefault();
        setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
        console.log(registerFormData)
      };

      const registerExperiencedForm = () =>[
        registerFormData.user_id = userProfileData.id,
        api.post('/register-experienced' , registerFormData ).then(data =>{
            window.location.pathname = "/profile"
        })
      ]


    return (
        <div className='register-experienced-conteiner'>
            <Header/>
            <UserContactInformation
            formEventHandler ={formEventHandler}
            registerExperiencedForm = {registerExperiencedForm}
            />
        </div>
    );
} 

export default RegisterExperiencedConteiner;
import React, { useState } from 'react';
import Header from "../../components/header/header"
import api from '../../services/api';
import UserContactInformation from './UserContactInformation';
import { Context } from '../../context/context';
import { useContext } from 'react';
import ReservationTimeSelection from './ReservationTimeSelection';

function RegisterExperiencedConteiner(props) {
    

    const context = useContext(Context);
    const [registerSteps , setRegisterSteps] = useState(0)
    const {userProfileData}     =       useContext(Context);
    const {registerFormData}    =       useContext(Context);
    const {setRegisterFormData} =       useContext(Context);

    if(userProfileData===false){
        window.location.pathname = "/"
    }
    const formEventHandler = (e) => {
        e.preventDefault();
        setRegisterFormData({ ...registerFormData, [e.target.name]: e.target.value });
      };

      const registerExperiencedForm = () =>{
        registerFormData.user_id = userProfileData.id
        setRegisterSteps(1);

      }


    return (
        <div className='register-experienced-conteiner'>
            <Header/>
            <UserContactInformation
            formEventHandler ={formEventHandler}
            registerExperiencedForm = {registerExperiencedForm}
            registerSteps = {registerSteps}
            />
            <ReservationTimeSelection
             registerSteps = {registerSteps}
            />
        </div>
    );
} 

export default RegisterExperiencedConteiner;
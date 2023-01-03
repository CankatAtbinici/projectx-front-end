import React from 'react';
import Header from '../../components/header/header';
import RegisterContainer from '../../components/registerForm/RegisterContainer';
import  "./register.css"

function Register(props) {
    return (
        <div>
          <section>
            <Header/>
          <div className='register-form-parent p-5'>
          <RegisterContainer/>
          </div> 
          </section>
          
        </div>
    );
}

export default Register;
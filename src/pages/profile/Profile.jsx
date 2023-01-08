import axios from 'axios';
import React, { useEffect } from 'react';
import { getAccessToken } from '../../auth/auth.service';




function Profile(props) {
    const token = getAccessToken();    
    axios.get('http://localhost:8000/api/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response.data);
        console.log(token)
        if(token === response.data) {
          console.log("Tokenler aynı  ")
        }
      });


   
    return (
        <div>
            profil sayfasına hoşgeldiniz
            
        </div>
    );
}

export default Profile;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../../auth/auth.service';




function Profile(props) {


  const [user, setUser] = useState([])
   

      useEffect(() => {
        const token = getAccessToken();    
        axios.get('http://localhost:8000/api/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then((response) => {
            setUser(response.data)
          }).catch(e => {
            console.log(e)
          });
      }, [])


   
    return (
        <div>
           {user.name ? user.name + " " +  "Hoşgeldin paşam" : "adını bilemedim valla ama hoşgeldin" }
            
        </div>
    );
}

export default Profile;
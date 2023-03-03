import axios from "axios";
import "./Profile.css"
import React, { useEffect, useState , useContext} from "react";
import { getAccessToken } from "../../auth/auth.service";
import { v4 as uuidv4 } from "uuid";
import UniqRoom from "../uniq_room/UniqRoom";
import Header from "../../components/header/header"
import ProfileContainer from "../../components/profile/ProfileContainer";
import { Context } from "../../context/context";
import LoadingSpinner from "../../components/loading-spinners/LoadingSpinner"
import jwtDecode from "jwt-decode";

const Profile = React.memo((props) => {
  const context = useContext(Context)
  const accesToken = getAccessToken()
 
  const isUSerProfileOwner = () => {
    if(accesToken){
      const userToken = jwtDecode(accesToken)
      const pathName = window.location.pathname
      const str = pathName;
      
      if(str.includes("/profiles/")){
        const regex = /\/profiles\/(.*)/; 
        const result =  str.match(regex)[1]; 
        if(result ==userToken.sub ){
          return true
        }else{
          return false
        }
      }else if(str.includes("/profile")){
        return true
      }
    }
    return false
  }

  useEffect(() => {
    const token = getAccessToken();
    if(isUSerProfileOwner()){
      axios
      .get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        context.setUserProfileData(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
    }else{
      context.setUserProfileData({name: window.location.pathname + " " + "adresindeki user'ın profili"})
    }
  
  }, []);

  const setPathName = () => {
    window.location.pathname = uuidv4();
  };

  const chatButton = (
    <button>
      <a onClick={setPathName}>WebRtc Sesli Sohbet</a>
    </button>
  );

  const testProfileData = () => {
    return (
      context.userProfileData !== false 
      ?  <ProfileContainer isUSerProfileOwner = {isUSerProfileOwner}/> 
      :  <LoadingSpinner/>
    );
  }

  return (
    <div>
      <Header/>
      {testProfileData()}
   
    </div>
  );
});

export default Profile;

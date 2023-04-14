import "./Profile.css"
import React, { useContext} from "react";
import { getAccessToken } from "../../auth/auth.service";
import Header from "../../components/header/header"
import ProfileContainer from "../../components/profile/ProfileContainer";
import { Context } from "../../context/context";
import LoadingSpinner from "../../components/loading-spinners/LoadingSpinner"
import jwtDecode from "jwt-decode";
import { useLayoutEffect } from "react";
import api from "../../services/api";

const Profile = React.memo((props) => {
  const context = useContext(Context)
  const accesToken = getAccessToken()
  const {visitingProfileData , setVisitingProfileData } = context; 
  const {setUserProfileData ,userProfileData }= context;

  
  const pathName = window.location.pathname
  const regex = /\/profiles\/(.*)/; 

  const isUSerProfileOwner = () => {
    if(accesToken){
      const userToken = jwtDecode(accesToken)
      const str = pathName;
      if(str.includes("/profiles/")){
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

  useLayoutEffect(() => {
    const token = getAccessToken();
    if(isUSerProfileOwner()){
      api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserProfileData(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
    }else{
      const result =  pathName.match(regex)[1]; 
      api.get( '/profile-visit?user='+result)
      .then((response) => {
        setUserProfileData(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
     
    }

  }, []);

  const testProfileData = () => {
    return (
      userProfileData !== false 
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

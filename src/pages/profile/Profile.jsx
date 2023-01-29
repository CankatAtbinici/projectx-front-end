import axios from "axios";
import React, { useEffect, useState , useContext} from "react";
import { getAccessToken } from "../../auth/auth.service";
import { v4 as uuidv4 } from "uuid";
import UniqRoom from "../uniq_room/UniqRoom";
import Header from "../../components/header/header"
import ProfileContainer from "../../components/profile/ProfileContainer";
import { Context } from "../../context/context";
import LoadingSpinner from "../../components/loading-spinners/LoadingSpinner"

const Profile = React.memo((props) => {
  const context = useContext(Context)


  useEffect(() => {
    const token = getAccessToken();
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
      context.userProfileData !== false ? 
          <ProfileContainer/>
           :
      <div>
        <LoadingSpinner/>
      </div>
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

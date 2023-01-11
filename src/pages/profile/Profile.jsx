import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAccessToken } from "../../auth/auth.service";
import { v4 as uuidv4 } from "uuid";
import UniqRoom from "../uniq_room/UniqRoom";

const Profile = React.memo((props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const token = getAccessToken();
    axios
      .get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
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

  return (
    <div>
      {user.name
        ? user.name + " " + "Hoşgeldin paşam"
        : "adını bilemedim valla ama hoşgeldin"}
      <a href="/profile/settings">settings</a>
      {chatButton}

      <UniqRoom />
    </div>
  );
});

export default Profile;

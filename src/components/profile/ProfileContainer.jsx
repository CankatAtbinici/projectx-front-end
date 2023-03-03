import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import UserProfileCard from "./UserProfileCard";
import ReservationDatePicker from "./ReservationDatePicker";
import UserShowCase from "./UserShowCase";
import ProfileComments from "./ProfileComments";


function ProfileContainer(props) {
  const{isUSerProfileOwner} =props;
  const context = useContext(Context);
  const userProfileData = context.userProfileData; 


    //USER AVARAGE RATE FORMATTER

    const formattedAvarageRate = () =>{
      if(userProfileData.user_rate && userProfileData.user_rate [0]){
        const avarageRate = Number(userProfileData.user_rate[0].average_rate);
        let formattedNum = avarageRate.toFixed(2);
        return formattedNum;
      }
      return "Değerlendirme yok"
    }

    //LAST SEEN FORMATTER
    const formatLastSeenDate = (lastSeenDate) => {
      if(lastSeenDate === "Bilinmiyor") return 'Bilinmiyor';
      const now = new Date();
      const lastSeen = new Date(lastSeenDate);
      const timeDiff = Math.floor((now - lastSeen) / 1000 / 60); // difference in minutes
    
      if (timeDiff < 2) {
        return "Çevrimiçi";
      } else if (timeDiff < 60) {
        return ` ${timeDiff} dakika önce`;
      } else if (timeDiff < 120) {
        return " 1 saat önce";
      } else if (timeDiff < 1440) {
        return ` ${Math.floor(timeDiff / 60)} saat önce`;
      } else {
        const day = lastSeen.getDate() < 10 ? `0${lastSeen.getDate()}` : lastSeen.getDate();
        const month = lastSeen.getMonth() < 9 ? `0${lastSeen.getMonth() + 1}` : lastSeen.getMonth() + 1;
        const year = lastSeen.getFullYear();
        const hours = lastSeen.getHours() < 10 ? `0${lastSeen.getHours()}` : lastSeen.getHours();
        const minutes = lastSeen.getMinutes() < 10 ? `0${lastSeen.getMinutes()}` : lastSeen.getMinutes();
    
        return `Son görülme: ${day}.${month}.${year} ${hours}:${minutes}`;
      }
    }

    //COMMENT DATE FORMATTER 



  return (
    <div className="user-profile-container container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <UserProfileCard 
            formatLastSeenDate = {formatLastSeenDate}
          />
        </div>

        {
          userProfileData.status == 1 ?
          <div className="col-sm-12 col-md-7">
          <ReservationDatePicker />
        </div>
        :
         <div className="col-sm-12 col-md-7">
          {isUSerProfileOwner() ? 
            <span><a href="" style={{color:"black" , textDecoration:"underline"}}> Nasıl Deneyimli Üye Olabilirim ?  </a></span>
           :
        <span> Kullanıcı Şimdilik deneyim vermeyi tercih etmemektedir </span>
          
          }
       </div>
        }
        

        <div className="row py-4">

          {
             userProfileData.status == 1 &&
             <div className="col-sm-12 col-md-5">
             <UserShowCase />
           </div>
          }
     

          <div className="col-sm-12 col-md-7">
              <ProfileComments
              formattedAvarageRate = {formattedAvarageRate}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;

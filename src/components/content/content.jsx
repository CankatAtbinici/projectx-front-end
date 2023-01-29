import React ,{ useContext, useEffect } from "react";
import UserCard from "../../components/user-cards/UserCard";
import LoadingSpinner from "../loading-spinners/LoadingSpinner"
import { Context } from "../../context/context";
import axios from "axios";

function Content(props) {

    const context = useContext(Context);
    useEffect(() => {
      axios
      .get("http://localhost:8000/api/landing", {
      }) 
      .then((response) => {
        context.setAllUserLandingPageData(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
    } , [])

    console.log(context.allUserLandingPageData)

    const setUserCards = () => {
      console.log(context.allUserLandingPageData)
   return (
    Object.values(context.allUserLandingPageData).map(userData => {
      return (
        <div className=" col-auto pt-4 pb-4 content-user-card-container"
        key={userData.id}>
        <UserCard
          userId = {userData.id}
          userName = {userData.name}
          userSurname = {userData.surname}
          comments =  {userData.comments}
          rates = {userData.rates}
          />
         </div>
      );
    })
   );
   
     
    }
  return (
   
    (context.allUserLandingPageData === false)  ? <LoadingSpinner/>:
    <div>
      
    <div className="row landing-page-content-parent">
      {setUserCards()}
    </div>
  </div>
   
       
    
  );
}

export default Content;

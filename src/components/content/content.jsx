import React ,{ useContext, useEffect } from "react";
import UserCard from "../../components/user-cards/UserCard";
import LoadingSpinner from "../loading-spinners/LoadingSpinner"
import { Context } from "../../context/context";

function Content(props) {

    const context = useContext(Context)
    useEffect(() => {
      context.setLoader(true)
      setTimeout(() => {
        context.setLoader(false)
      }, 3000);
    },[])
    
  return (
   
    (context.loader) ? <LoadingSpinner/>:
    <div>
      
    <div className="row landing-page-content-parent">
      <div className=" col-auto pt-4 pb-4 content-user-card-container">
        <UserCard />
      </div>
      <div className=" col-auto pt-4 pb-4 content-user-card-container">
        <UserCard />
      </div>
      <div className="col-auto pt-4 pb-4 content-user-card-container">
        <UserCard />
      </div>
    </div>
  </div>
   
       
    
  );
}

export default Content;

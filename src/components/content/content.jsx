import React ,{ useContext, useEffect } from "react";
import UserCard from "../../components/user-cards/UserCard";
import LoadingSpinner from "../loading-spinners/LoadingSpinner"
import ModalContext from "../../context/context"
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
      <div className="col-md-4 col-sm-6">
        <UserCard />
      </div>
      <div className="col-md-4 col-sm-6">
        <UserCard />
      </div>
      <div className="col-md-4 col-sm-6">
        <UserCard />
      </div>
    </div>
  </div>
   
       
    
  );
}

export default Content;

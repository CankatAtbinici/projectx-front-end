import React ,{ useContext } from "react";
import UserCard from "../../components/user-cards/UserCard";
import LoadingSpinner from "../loading-spinners/LoadingSpinner"
import ModalContext from "../../context/context"
import { Context } from "../../context/context";

function Content(props) {

    const context = useContext(Context)
    
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

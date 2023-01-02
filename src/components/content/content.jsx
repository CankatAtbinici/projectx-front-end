import React from 'react';
import UserCard from "../../components/user-cards/UserCard"
function Content(props) {
    return (
        <div>
          <div className='row landing-page-content-parent'  >
            <div 
            className='col-md-4 col-sm-6'>
            <UserCard/>
            </div>
            <div 
           className='col-md-4 col-sm-6'>
            <UserCard/>
            </div>
            <div 
           className='col-md-4 col-sm-6'>
            <UserCard/>
            </div>
            </div>  
        </div>
    );
}

export default Content;
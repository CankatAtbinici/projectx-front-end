import React from 'react';
import { useContext } from 'react';
import { Context } from "../../context/context";
import ShowUserProfile from './ShowUserProfile';
import UserProfileCard from './UserProfileCard';
import Header from "../header/header";


function ProfileContainer(props) {
    const context = useContext(Context)

    return (
        <div className='user-profile-container'>
            <UserProfileCard/>
            <div>
                <ShowUserProfile/>
            </div>
        </div>
    );
}

export default ProfileContainer;
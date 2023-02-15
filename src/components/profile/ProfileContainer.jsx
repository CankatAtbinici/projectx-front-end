import React from 'react';
import { useContext } from 'react';
import { Context } from "../../context/context";
import UserProfileCard from './UserProfileCard';


function ProfileContainer(props) {
    const context = useContext(Context)

    return (
        <div>
            <UserProfileCard/>
        </div>
    );
}

export default ProfileContainer;
import React from 'react';
import { Context } from '../../context/context';
import { useContext } from 'react';

function UserProfileCard(props) {
    const context = useContext(Context)
    return (
        <div>

        {context.userProfileData.name}
        

        </div>
    );
}  

export default UserProfileCard;
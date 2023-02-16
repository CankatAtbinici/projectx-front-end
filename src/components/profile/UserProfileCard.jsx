import React from 'react';
import { Context } from '../../context/context';
import { useContext } from 'react';

function UserProfileCard(props) {
    const context = useContext(Context)
    return (
        <div>
            
            <div>
            Burası User Profil Card Componentidir
            </div>
            
        {context.userProfileData.name}
        

        </div>
    );
}  

export default UserProfileCard;
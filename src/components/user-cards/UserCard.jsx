import React from 'react';
import UserCardFooter from "./UserCardFooter"
import UserCardBody from './UserCardBody';

function UserCard(props) {
    return (
        <div style={{
            boxShadow: "rgb(10 0 0 / 55%) 2px 1px",
            width: "95%",
            
        }}>
            <section>
                
                <UserCardBody/>
                <UserCardFooter/>
            </section>
        </div>
    );
}

export default UserCard;
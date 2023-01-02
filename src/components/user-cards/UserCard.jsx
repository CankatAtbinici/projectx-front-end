import React from 'react';
import UserCardTitle from "./UserCardTitle";
import USerCardBody from "./UserCardBody";
import UserCardFooter from "./UserCardFooter"
import UserCardBody from './UserCardBody';

function UserCard(props) {
    return (
        <div style={{
            borderStyle:"groove",
            width: "95%"
        }}>
            <section>
                
                <UserCardBody/>
                <UserCardFooter/>
            </section>
        </div>
    );
}

export default UserCard;
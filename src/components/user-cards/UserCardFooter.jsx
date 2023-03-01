import React from 'react';
import { Link } from 'react-router-dom';

function UserCardFooter(props) {
    const {userId} = props;
    const dinamicPath = "/profiles/"+ userId
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",

        
        }}>
            <div className='user-card-footer-list'>
                <div> <span  className="user-card-footer-badge">Balıkçılık</span></div>
                <div > <span className="user-card-footer-badge">Ev hayvanları</span></div>
                <div > <span className="user-card-footer-badge">Fitness</span></div> 
            </div>
            <div style={{
                display:"flex",
                justifyContent: "flex-end",
                padding: 0,
                margin: 0,
            }}>
                <Link className='user-card-footer-show-profile' to={dinamicPath}> Profili gör - </Link>
            </div>
        </div>
    );
}

export default UserCardFooter;
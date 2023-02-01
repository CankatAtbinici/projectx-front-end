import React from 'react';

function UserCardFooter(props) {
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
                <a className='user-card-footer-show-profile' href=""> Profili gör - </a>
            </div>
        </div>
    );
}

export default UserCardFooter;
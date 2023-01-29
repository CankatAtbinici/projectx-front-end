import React from 'react';
import { Context } from '../../context/context';
import { useContext } from 'react';

function UserCardBody(props) {
    const {userId , userName, userSurname, comments , rates } = props;
    

   window.rates = rates 
    return (
        <div className='user-card-body-parent'>
            
            <div className='user-card-body-left'>
                <img src="https://media.licdn.com/dms/image/C4E03AQGFBglHUVrcAQ/profile-displayphoto-shrink_800_800/0/1643030322106?e=1677715200&v=beta&t=4A-iLocqsFvNsUowbecM5EKib5sAM5pRuqeNgy2BjuM" alt="user-profile-picture" />
            </div>
           
            <div className='user-card-body-right'
             style={{
                display:"flex",
                alignItems: "center"
            }}>
                <div
               >
                <ul>
                    <div> İsim: <span> {userName + " " + userSurname} </span></div>
                   <div>Puan: <span></span> {rates.length > 0 ? Number(rates[0].average_rate).toFixed(2) : "Değerlendirme yok"} </div>
                   <div>Ücretlendirme: <span>5tl</span></div>
                   <div> Değerlendirme: <a href=""> <span> {comments.length} </span> <span>yorum</span></a></div>
                </ul>
                </div>
                
                
                
            
               
            </div>
        </div>
    );
}

export default UserCardBody;

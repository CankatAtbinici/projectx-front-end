import React from 'react';

function UserCardBody(props) {
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
                    <div> İsim: <span> Cankat Atbinci </span></div>
                   <div>Puan: <span>5.00</span></div>
                   <div>Ücretlendirme: <span>5tl</span></div>
                   <div> Değerlendirme: <a href=""> <span>5 </span> <span>yorum</span></a></div>
                </ul>
                </div>
                
                
                
            
               
            </div>
        </div>
    );
}

export default UserCardBody;

import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import UserProfileCard from "./UserProfileCard";
import ReservationDatePicker from "./ReservationDatePicker";
import UserShowCase from "./UserShowCase";
import { faComments, faThumbsUp , faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileContainer(props) {
  const context = useContext(Context);

  return (
    <div className="user-profile-container container-fluid">
      <div className="row">
        <div className="col-md-5">
          <UserProfileCard />
        </div>
        <div className="col-md-7">
          <ReservationDatePicker />
        </div>

        <div className="row py-4">
          <div className="col-12 col-md-5">
            <UserShowCase />
          </div>

          <div className="col-12 col-md-7">
            <section>
              <div className="comments-container box-shadow">
                <div className="comments-head">
                  <div className="comments-head-top-area">
                    <span className="comments-head-top-content p-3">
                      TÜM DEĞERLENDİRMELER
                    </span>
                  </div>

                  <div className="comments-head-bottom-area">
                    <div className="comments-head-bottom-area-left">
                      <div className="comments-head-bottom-area-left-content-left">
                        <div className="comments-head-bottom-area-left-content-left-icon-area">
                          <FontAwesomeIcon icon={faComments} />
                        </div>
                        <div className="comments-head-bottom-area-left-content-left-content-area">
                          İletişim
                        </div>
                        <div className="comments-head-bottom-area-left-content-left-rate-area">
                          Rate: 5.00
                        </div>
                      </div>
                      <div className="comments-head-bottom-area-left-content-right">
                        <div className="comments-head-bottom-area-left-content-left-icon-area">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="comments-head-bottom-area-left-content-left-content-area">
                          Bilgi
                        </div>
                        <div className="comments-head-bottom-area-left-content-right-rate-area">
                          Rate: 5.00
                        </div>
                      </div>
                    </div>

                    <div className="comments-head-bottom-area-right">
                      <div className="comments-head-bottom-area-right-top flex-end px-3"> 25500 dk görüşme</div>
                      <div className="comments-head-bottom-area-right-middle flex-end px-3">340 Değerlendirme</div>
                      <div className="comments-head-bottom-area-bottom flex-end px-3"> 
                      <span className="comments-head-bottom-area-bottom-rate-content ">
                        5.00
                        </span>
                        <span className="comments-head-bottom-area-bottom-rate-star-icon">
                          <FontAwesomeIcon icon={faStar}/>
                        </span>
                         </div>
                    </div>
                  </div>
                </div>
                <div className="comments-body">


                  <div className="comments-body-left"> 
                    <span className="comments-body-left-image-area">
                           <img src="https://cdn.armut.com/UserPics/tr:w-325,h-325/6248bb01-ab94-43f6-93c7-6bc5262875cf.jpeg" alt="Profile pic" className="comments-body-left-image-content" />
                    </span>
                  </div>
                  <div className="comments-body-middle">
                    <div className="comments-body-middle-title">
                    <div className="comments-body-middle-title-username" > Hamza Atmaca</div>
                    <div className="comments-body-middle-title-user-rate  px-4"> 5.00 <span> <FontAwesomeIcon  style={{color:"goldenrod"}}icon= {faStar}/> </span></div>
              

                    </div>
                    <div className="comments-body-middle-content"> Teşekkürler Cankat... Çok bilgili ve diksiyonu  çok iyi herkese tavsiye ederim kesinlikle</div>
                  </div>
                  <div className="comments-body-right">
                      4 gün önce
                  </div>
                </div>

                <div className="comments-footer">
                  <div>
                    <span className="comments-footer-content box-shadow">
                      Daha fazla yorum göster
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;

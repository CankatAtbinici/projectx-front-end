import React from "react";
import { Context } from "../../context/context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
        faFacebook,
        faTwitter,
        faLinkedin,
        faInstagram,
        faPinterest
      } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDays,
  faEye,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";


function UserProfileCard(props) {

  const context = useContext(Context);
  return (
    <div className="user-profile-card-container">
      <div className="user-profile-card-vertical-group">
        <section className="user-profile-card-vertical-top">
          <div className="user-profile-card-picture-container">
            <img
              className="user-profile-card-image-area"
              src="https://cdn.armut.com/UserPics/tr:w-325,h-325/fdab071d-108b-479a-b6fd-34aef8f081ef.jpeg"
              alt=""
            />
          </div>
        </section>

        <section className="user-profile-card-vertical-middle">
          <div className="user-profile-card-name-section">Cankat Atbinici</div>

          <div className="user-profile-card-user-title-section">
            Web Developer/Admin
          </div>
          <div className="user-profile-card-vertical-middle-social-links-container py-3">
                <div className="user-profile-card-vertical-middle-social-links">
                <span><FontAwesomeIcon size="2x" color="#3b5998" icon={faFacebook} /></span>
                <span><FontAwesomeIcon   size="2x" color="#1DA1F2" icon={faTwitter} /></span>
                <span><FontAwesomeIcon  size="2x" color ="#0077B5"icon={faLinkedin} /></span>
                <span><FontAwesomeIcon size="2x" color="#C13584" icon={faInstagram} /></span>
                <span><FontAwesomeIcon size="2x" color="#BD081C"  icon={faPinterest} /></span>
                </div>
          </div>
        </section>
        <div style={{ borderTop: "1px solid", margin: "30px" }}></div>
        <section className="user-profile-card-vertical-bottom">
          <div className="user-profile-card-bottom-list-element row m-0">
            <div className="user-profile-card-bottom-list-element-icon-container col-2">
              <span className="user-profile-card-bottom-list-element-icon-area">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
            </div>
            <div className="user-profile-card-bottom-list-element-key-container col-5">
              <span className="user-profile-card-bottom-list-element-icon-area">
                Kayıt Tarihi
              </span>
            </div>
            <div className="user-profile-card-bottom-list-element-value-container col-5">
              <span className="user-profile-card-bottom-list-element-icon-area">
                19-02-2023
              </span>
            </div>
          </div>
          <div className="user-profile-card-bottom-list-element row m-0">
            <div className="user-profile-card-bottom-list-element-icon-container col-2">
              <span className="user-profile-card-bottom-list-element-icon-area">
                <FontAwesomeIcon icon={faEye} />
              </span>
            </div>
            <div className="user-profile-card-bottom-list-element-key-container col-5">
              <span className="user-profile-card-bottom-list-element-icon-area">
                Son Görülme
              </span>
            </div>
            <div className="user-profile-card-bottom-list-element-value-container col-5">
              <span className="user-profile-card-bottom-list-element-icon-area">
                1 Saat önce
              </span>
            </div>
          </div>{" "}
          <div className="user-profile-card-bottom-list-element row m-0">
            <div className="user-profile-card-bottom-list-element-icon-container col-2">
              <span className="user-profile-card-bottom-list-element-icon-area">
                <FontAwesomeIcon icon={faHandshake} />
              </span>
            </div>
            <div className="user-profile-card-bottom-list-element-key-container col-5">
              <span className="user-profile-card-bottom-list-element-icon-area">
                Toplam Görüşme Süresi
              </span>
            </div>
            <div className="user-profile-card-bottom-list-element-value-container col-5">
              <span className="user-profile-card-bottom-list-element-icon-area">
                26 saat
              </span>
            </div>
          </div>
     
    
        </section>
      </div>
    </div>
  );
}

export default UserProfileCard;

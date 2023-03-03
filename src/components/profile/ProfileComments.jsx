import React from "react";
import {
  faComments,
  faThumbsUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Context } from "../../context/context";
import { useContext } from "react";

function ProfileComments(props) {
  const { formattedAvarageRate } = props;
  const {userProfileData }  = useContext(Context);
  const comments = userProfileData.comments ? userProfileData.comments : [] ;

  
 


  const listComments = () => {
    if(comments.length == undefined || comments.length < 1){
       return (
             <div className="comments-body py-3" style={{justifyContent:"center"}}  >
                    <span>
                    henüz görüntülenecek yorum yapılmadı
                    </span>
            </div>
       );
    }
    return (
      <div>
        {comments.map((comment, index) => {
          return (
            <div className="comments-body py-3" key={index}>
              <div className="comments-body-left">
                <span className="comments-body-left-image-area">
                  <img
                    src="https://cdn.armut.com/UserPics/tr:w-325,h-325/6248bb01-ab94-43f6-93c7-6bc5262875cf.jpeg"
                    alt="Profile pic"
                    className="comments-body-left-image-content"
                  />
                </span>
              </div>
              <div className="comments-body-middle">
                <div className="comments-body-middle-title">
                  <div className="comments-body-middle-title-username">
                    {" "}
                    {comment.get_user_info.username}
                  </div>
                  <div className="comments-body-middle-title-user-rate  px-4">
                    {" "}
                    5.00{" "}
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        style={{ color: "goldenrod" }}
                        icon={faStar}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="comments-body-middle-content">
                  {" "}
                  {comment.content}
                </div>
              </div>
              <div className="comments-body-right">{comment.coment_create_time}</div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
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
                  <FontAwesomeIcon size="2x" icon={faComments} />
                </div>
                <div className="comments-head-bottom-area-left-content-left-content-area">
                  İyi iletişim
                </div>
                <div className="comments-head-bottom-area-left-content-left-rate-area">
                  Rate: 5.00
                </div>
              </div>
              <div className="comments-head-bottom-area-left-content-right">
                <div className="comments-head-bottom-area-left-content-left-icon-area">
                  <FontAwesomeIcon
                    size="2x"
                    icon={faThumbsUp}
                    style={{ color: "#ff385c" }}
                  />
                </div>
                <div className="comments-head-bottom-area-left-content-left-content-area">
                  Bilgili
                </div>
                <div className="comments-head-bottom-area-left-content-right-rate-area">
                  Rate: 5.00
                </div>
              </div>
            </div>

            <div className="comments-head-bottom-area-right">
              <div className="comments-head-bottom-area-bottom flex-end px-3">
                <span className="comments-head-bottom-area-bottom-rate-content ">
                  {formattedAvarageRate()}
                </span>
                <span className="comments-head-bottom-area-bottom-rate-star-icon">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
              <div className="comments-head-bottom-area-right-top flex-end px-3">
                {" "}
                {userProfileData.user_meeting_count ? userProfileData.user_meeting_count+ " görüşme": "Görüşme yapılmadı"}  
              </div>
              <div className="comments-head-bottom-area-right-middle flex-end px-3">
                {userProfileData.rate_count ? userProfileData.rate_count + " Değerlendirme": "Henüz puan verilmedi"}
              </div>
            </div>
          </div>
        </div>

        {listComments()}

        <div className="comments-footer">
          <div>
            <span className="comments-footer-content box-shadow">
              Daha fazla yorum göster
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileComments;

import React from "react";
import "./UniqRoom.css";

const UniqRoom = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copy">
              Send your URL to a friend to start a video call
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <video id="localVideo" autoPlay muted></video>
          </div>
          <div className="col-sm-6">
            <video id="remoteVideo" autoPlay></video>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UniqRoom;

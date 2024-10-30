import React from "react";
import "./BackgroundVideo.css";
import videoSource from "../assets/video/3163534-hd_1920_1080_30fps.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;

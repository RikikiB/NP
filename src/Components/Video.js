import React from "react";
import Vid from "./Vid.mp4";
import "./Video.css";

function Video() {
  return (
    <div className="Video">
      <iframe src={Vid} title="Top Vid" />
    </div>
  );
}

export default Video;

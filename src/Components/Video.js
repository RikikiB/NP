import React, {Component} from "react";
import { ReactVideo } from "reactjs-media";
import Vid from "Vid.mp4";
import Audio from "./Audio.js";

class Video extends Component  {
  render() {
  return (
    <div className="Video">
      <ReactVideo src={Vid} autoplay={true} />
      <Audio />
    </div>
  );
}

export default Video;

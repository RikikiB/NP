import React, { Component } from "react";
import { ReactAudio } from "reactjs-media";

class Audio extends Component {
  render() {
  return (
    <div className="Audio">
      <ReactAudio src="/audio.mp4" />
    </div>
  );
}
export default Audio;

'use client';
import React from "react";

import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";

/** Served from `public/Videos` — do not import `.mp4` as a JS module (no webpack loader). */
const INTRO_VIDEO_SRC = "/Videos/Therapy_web_optimized.mp4";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef<HTMLVideoElement>(null);
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={INTRO_VIDEO_SRC}
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef?.current?.pause();
            } else {
              vidRef?.current?.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro
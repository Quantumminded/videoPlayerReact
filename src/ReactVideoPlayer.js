import './App.css';
import React from 'react';
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css'

import video from './videos/introvideo.mp4'

const ReactVideoPlayer = () => {
    return(
        // <Video autoPlay loop
        // >
        //   <source src={ video } type='video/webm'/>
        // </Video>
        <div class="player">
          <video controls>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/webm" />
          </video>
            <div class="controls">
                <button class="stop" data-icon="P" aria-label="stop" ></button>
                <div class="timer">
                <div></div>
                <span aria-label="timer">00:00</span>
                </div>
                <button class="rwd" data-icon="B" aria-label="rewind"></button>
                <button class="fwd" data-icon="F" aria-label="fast forward"></button>
            </div>
        </div>

    )
};

export default ReactVideoPlayer;
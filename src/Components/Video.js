import React, { useState } from 'react';
import YouTube from 'react-youtube';

const tempVideo = 'xXp4GnC1Z3Q';

function Video() {
    const [videoId, setVideoId] = useState(tempVideo);
    const [player, setPlayer] = useState(null);

    const onReady = (event) => {
        setPlayer(event.target);
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          rel: 0,
          modestbranding: 1,
          autoplay: 1,
        }
    };

    return (
        <div className="flex justify-center p-5">
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </div>
    );
}

export default Video;
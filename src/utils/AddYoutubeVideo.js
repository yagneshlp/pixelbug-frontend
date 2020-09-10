import React from 'react';
import YouTube from 'react-youtube';
 
class YoutubePlayer extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters Ny8IM6SFCpk
        autoplay: 1,
        loop:1,
        playlist:"cXSEEQIevqk"
      },
    };
 
    return <YouTube videoId="cXSEEQIevqk" opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();        
    event.target.playVideo();
  }
}

export default YoutubePlayer;
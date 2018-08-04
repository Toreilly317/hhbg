import React, { Component } from "react";
import { addPlayer } from "../../app/actions/YTPlayerActions";
import { connect } from "react-redux";

class VideoWidget extends Component {
  state = {
    currentTime: 0,
    player: {}
  };

  componentDidMount = () => {
    const { videoId } = this.props;
    this.loadYoutubeAPIScript();
    window.onYouTubeIframeAPIReady = () => this.buildPlayer(videoId);
  };

  componentDidUpdate = nextProps => {
    if (nextProps.videoId !== this.props.videoId) {
      this.state.player.loadVideoById(this.props.videoId);
      this.state.player.playVideo();
    }
  };

  loadYoutubeAPIScript = () => {
    const firstScriptTag = document.getElementsByTagName("script")[0];
    const YT_API_URL = "https://www.youtube.com/iframe_api";

    // youtube api script exist ? return : append
    if (firstScriptTag.src !== YT_API_URL) {
      const tag = document.createElement("script");
      tag.src = YT_API_URL;
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      return;
    }
  };

  buildPlayer = videoId => {
    const player = new window.YT.Player("player", {
      height: "200",
      width: "200",
      videoId: this.props.videoId,
      playerVars: {
        height: 200,
        width: 200,
        controls: 0,
        showinfo: 0,
        wmode: "transparent"
      }
      // events: {
      //   onReady: this.onPlayerReady,
      //   onStateChange: this.onPlayerStateChange
      // }
    });

    player.interface = {
      play: () => this.state.player.playVideo(),
      pause: () => this.state.player.pauseVideo(),
      seek: s =>
        this.state.player.seekTo(this.state.player.getCurrentTime() + s),
      currentTime: () => this.state.player.getCurrentTime()
    };

    //add new created player to player array with ID to be ref'd later
    this.setState({
      ...this.state,
      player
    });
  };

  render() {
    this.props.addPlayer(this.state.player);
    return <div id="player" />;
  }
}

const actions = {
  addPlayer
};

export default connect(
  null,
  actions
)(VideoWidget);

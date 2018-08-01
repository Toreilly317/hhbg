import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class YTPlayer extends Component {
  state = {
    currentTime: 0,
    player: {}
  };

  componentDidMount = () => {
    this.appendYoutubePlayerAPIScript();
    this.onAPIReady();
  };

  controls = {
    pause: () => this.player.pauseVideo(),
    play: () => this.player.playVideo(),
    seek: s => this.player.seekTo(s),
    videoTimeInSeconds: () => this.state.currentTime,
    getDuration: () => this.player.getDuration()
  };

  startTrackingTime = () => {
    if (!this.videoTime) {
      setInterval(() => {
        this.setState({ currentTime: this.player.getCurrentTime() });
      }, 1000);
    }
  };

  stopTrackingTime = () => {
    clearInterval(this.videoTime);
  };

  componentDidUpdate = nextProps => {
    if (nextProps.video === this.props.video) return false;
    this.player.loadVideoById({
      videoId: this.props.video.id.videoId,
      // this will be used for sample loading
      // startSeconds: 5,
      // endSeconds: 60,
      suggestedQuality: "small"
    });
    this.player.playVideo();
  };

  appendYoutubePlayerAPIScript = () => {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };

  onAPIReady = () => {
    const that = this;

    window["onYouTubeIframeAPIReady"] = e => {
      that.player = new window["YT"].Player("player", {
        videoId: this.props.video.id.videoId,
        height: "200",
        width: "200",
        controls: 0,

        rel: 0,
        modestbranding: 1,
        events: {
          onStateChange: this.onPlayerStateChange,
          onError: this.onPlayerError,
          onReady: e => console.log("ready")
        }
      });
    };
  };

  render() {
    return this.props.render(this.controls);
  }

  onPlayerStateChange = event => {
    switch (event.data) {
      case window["YT"].PlayerState.PLAYING:
        this.startTrackingTime();
        break;
      case window["YT"].PlayerState.PAUSED:
        console.log("paused");
        break;
      case window["YT"].PlayerState.ENDED:
        console.log("ended ");
        break;
      default:
        break;
    }
  };
  //utility
  cleanTime = () => {
    return Math.round(this.player.getCurrentTime());
  };
  onPlayerError = event => {
    switch (event.data) {
      case 2:
        console.log("" + this.video);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
      default:
        break;
    }
  };
}

const mapState = state => ({
  video: state.currentVideo
});

export default connect(
  mapState,
  null
)(YTPlayer);

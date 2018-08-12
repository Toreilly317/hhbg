import React, { Component, Fragment } from "react";
import {
  saveOrUpdateVideo,
  addVideoToStash
} from "../../app/actions/stashActions";
import { setCurrentVideo } from "../../app/actions/videoPlayerActions";
import { connect } from "react-redux";

import YTPlayer from "./YTPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import SampleForm from "./SampleForm/SampleForm";
import TimeSlider from "./TimeSlider";

//components
import { PlayerContainer } from "./components";

class SampleWidget extends Component {
  state = {
    player: undefined,
    duration: undefined,
    currentTime: undefined,
    video: this.props.video
  };

  componentDidUpdate(prevProps) {
    const videoId = this.props.video.videoId;
    if (this.state.player === undefined) {
      this.buildPlayer(videoId);
    } else if (this.props.video.videoId !== prevProps.video.videoId) {
      this.state.player.loadVideoById(videoId);
      this.state.player.seekTo(0);

      return true;
    }
    return true;
  }

  buildPlayer = videoId => {
    const player = new window.YT.Player("player", {
      height: "200",
      width: "200",
      videoId,
      playerVars: {
        startSeconds: 0,
        height: 200,
        width: 200,
        controls: 0,
        showinfo: 0,
        wmode: "transparent"
      },
      events: {
        onStateChange: this.handlePlayerStateChange
        // onPause: () => clearInterval(["timer"]),
        // onPlay: () => this.getDuration()
      }
    });

    this.setState({
      ...this.state,
      player
    });
  };

  handlePlayerStateChange = e => {
    const playerStatus = e.data;
    const UNSTARTED = -1;
    const ENDED = 0;
    const PLAYING = 1;
    const PAUSED = 2;
    const BUFFERING = 3;
    const CUED = 5;

    switch (playerStatus) {
      case UNSTARTED:
        this.state.player.playVideo();
        break;
      case ENDED:
        this.state.player.seekTo(0);
        break;
      case PLAYING: {
        this.handleTimer();
        this.getDuration();
        break;
      }
      case PAUSED:
        clearInterval(["timer"]);
        break;

      default:
        break;
    }
  };

  handleTimer = () => {
    const timer = () =>
      setInterval(() => {
        this.setState({
          ...this.state,
          currentTime: this.state.player.getCurrentTime()
        });
      }, 100);

    timer();
  };

  getDuration = () => {
    this.setState({
      duration: this.state.player.getDuration()
    });
  };

  seekSeconds = time => {
    this.state.player.seekTo(time);
    this.setState({
      currentTime: time
    });
    this.state.player.playVideo();
  };

  render() {
    const { player } = this.state;
    return (
      <Fragment>
        <PlayerContainer>
          <YTPlayer />
          {this.state.player !== undefined && (
            <Fragment>
              <VideoPlayerControls
                seek={this.seekSeconds}
                currentTime={this.state.currentTime}
                player={player}
              />
              <TimeSlider
                seek={this.seekSeconds}
                player={player}
                currentTime={this.state.currentTime}
                duration={this.state.duration}
              />
              <SampleForm
                video={this.props.video}
                currentTime={this.state.currentTime}
                addVideoToStash={this.props.addVideoToStash}
                saveOrUpdateVideo={this.props.saveOrUpdateVideo}
              />
            </Fragment>
          )}
        </PlayerContainer>
      </Fragment>
    );
  }
}

const mapState = state => ({
  video: state.currentVideo
});

const actions = {
  saveOrUpdateVideo,
  addVideoToStash,
  setCurrentVideo
};

export default connect(
  mapState,
  actions
)(SampleWidget);

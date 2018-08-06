import React, { Component, Fragment } from "react";
import { addVideoToStash } from "../../app/actions/stashActions";
import { connect } from "react-redux";

import YTPlayer from "./YTPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import SampleForm from "../SampleForm/SampleForm";
import TimeSlider from "./TimeSlider";

//components
import { PlayerContainer } from "./components";

class SampleWidget extends Component {
  state = {
    player: undefined,
    duration: undefined,
    currentTime: undefined
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  componentDidUpdate(prevProps) {
    const videoId = this.props.video.id.videoId;
    if (this.state.player === undefined) {
      this.buildPlayer(videoId);
    } else if (this.props.video.id.videoId !== prevProps.video.id.videoId) {
      this.state.player.loadVideoById(videoId);
      this.getDuration();

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
        onReady: () => {
          this.state.player.playVideo();
          this.getDuration();
          this.handleTimer();
        },
        onPause: () => clearInterval(["timer"])
      }
    });

    this.setState({
      ...this.state,
      player
    });
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
  };

  render() {
    const { player } = this.state;
    return (
      <Fragment>
        <PlayerContainer>
          <span>current Time {this.state.currentTime}</span>
          <span>Duration {this.state.duration}</span>
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
              <SampleForm />
            </Fragment>
          )}
        </PlayerContainer>
      </Fragment>
    );
  }
}

const mapState = state => ({
  video: state.currentVideo,
  stash: state.stash
});

const actions = {
  addVideoToStash
};

export default connect(
  mapState,
  actions
)(SampleWidget);

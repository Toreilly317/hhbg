import React, { Component, Fragment } from "react";
import { updateVideo, addVideoToStash } from "../../app/actions/stashActions";
import { setCurrentVideo } from "../../app/actions/currentVideoActions";
import { connect } from "react-redux";

//components
import YTPlayer from "./YTPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import SampleForm from "./SampleForm/SampleForm";
import TimeSlider from "./TimeSlider";
import SampleList from "./SampleList/SampleList";

//style-components
import { PlayerContainer } from "./components";

class SampleWidget extends Component {
  state = {
    player: undefined,
    duration: undefined,
    currentTime: undefined,
    video: this.props.video,
    isStashed: false,
    playerReady: false
  };

  componentDidMount() {
    const videoId = this.props.video.videoId;
  }

  componentDidUpdate(prevProps) {
    const videoId = this.props.video.videoId;
    console.log(videoId);
    if (this.state.player === undefined) {
      this.buildPlayer(videoId);
    } else if (this.props !== prevProps) {
      //TODO have the start time on the video so we can load samples at a certain time later
      this.player.loadVideoById(videoId);
      this.state.player.seekTo(0);
    }
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
            />
          </Fragment>
        </PlayerContainer>
      </Fragment>
    );
  }
}

const mapState = state => ({
  video: state.currentVideo
});

const actions = {
  updateVideo,
  addVideoToStash,
  setCurrentVideo
};

export default connect(
  mapState,
  actions
)(SampleWidget);

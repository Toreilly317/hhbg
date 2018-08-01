import React, { Component } from "react";
import { addVideoToStash } from "../crates/actions";
import { connect } from "react-redux";
import StashButton from "../crates/StashButton";
import YTPlayer from "./YTPlayer";
import VideoPlayerControls from "./VidepPlayerControls";

//components
import { VideoPlayerButtonGroup, VideoPlayerContainer } from "./components";

class VideoPlayer extends Component {
  checkIfStashed = () => {
    const { videos: stash } = this.props.crates[0];
    if (stash.length > 0) {
      const isStashed = video => video.id === this.props.videoID;
      this.setState({
        videoIsStash: stash.some(isStashed)
      });
    }
  };

  handleStashVideo = () => {
    this.props.addVideoToStash(this.props.video);
  };

  render() {
    return (
      <VideoPlayerContainer>
        {this.props.video && (
          <YTPlayer
            render={player => {
              return (
                <div>
                  <div id="player" />
                  <VideoPlayerControls player={player} />
                </div>
              );
            }}
          />
        )}
        <VideoPlayerButtonGroup>
          <StashButton />
        </VideoPlayerButtonGroup>
      </VideoPlayerContainer>
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
)(VideoPlayer);

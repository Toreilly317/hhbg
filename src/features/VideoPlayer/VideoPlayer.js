import React, { Component, Fragment } from "react";
import { addVideoToStash } from "../../app/actions/stashActions";
import { connect } from "react-redux";

import YTPlayer from "./YTPlayer";
import VideoPlayerControls from "./VideoPlayerControls";
import SampleForm from "../SampleForm/SampleForm";

//components
import { PlayerContainer, VideoContainer } from "./components";

class VideoPlayer extends Component {
  render() {
    return (
      <Fragment>
        <PlayerContainer>
          <VideoPlayerControls />
        </PlayerContainer>
        {this.props.video.id && (
          <VideoContainer>
            <YTPlayer videoId={this.props.video.id.videoId} />
            <SampleForm />
          </VideoContainer>
        )}
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
)(VideoPlayer);

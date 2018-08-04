import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const VideoControlsWrapper = styled.div`
  display: flex;
`;

class VideoPlayerControls extends Component {
  state = {
    player: this.props.player
  };

  componentDidUpdate(nextProps) {
    nextProps !== this.props &&
      this.setState({
        player: this.props.plater
      });
  }

  render() {
    const YTPlayer = this.props.player.interface;
    return (
      <Fragment>
        <VideoControlsWrapper>
          <button onClick={() => YTPlayer.seek(-15)}>{"<<"} 15</button>
          <button onClick={() => YTPlayer.play()}> Play </button>
          <button onClick={() => YTPlayer.pause()}> Pause </button>
          <button onClick={() => YTPlayer.seek(15)}>> 15</button>
        </VideoControlsWrapper>
      </Fragment>
    );
  }
}

const mapState = state => ({
  player: state.player
});

export default connect(
  mapState,
  null
)(VideoPlayerControls);

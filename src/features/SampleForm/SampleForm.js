import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addVideoToStash } from "../../app/actions/stashActions";

const NameTrackWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: 40px 4px;
`;

class SampleForm extends Component {
  state = {
    startTime: 0,
    endTime: null,
    sampleName: ""
  };

  handleMark = () => {
    this.setState({
      ...this.state,
      startTime: this.props.currentTime
    });
  };

  handleEndMark = () => {
    this.setState({
      ...this.state,
      endTime: this.props.currentTime
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const sampleData = this.state;
    const video = this.props.video;
    let { samples } = video;
    if (!samples) {
      //if no samples then song is not stashed
      //save video with sample data to stash
      video.samples = [sampleData];
      this.props.addVideoToStash(video);
    } else {
      video.samples = [...samples, sampleData];
    }

    console.log(video, video.samples);
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleMark}>Mark</button>
        <button onClick={this.handleEndMark}>End Mark</button>
        <div>
          <div>Current Time: </div>
          <div>Marked Time: </div>
          <div>End Mark Time: </div>
          {this.state.endTime && (
            <form onSubmit={this.handleOnSubmit}>
              <NameTrackWrapper />
              <input
                onChange={this.handleInputChange}
                name="sampleName"
                type="text"
                value={this.state.sampleName}
                placeholder="Name This Sample"
              />
            </form>
          )}
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  currentVideo: state.currentVideo
});

const actions = {
  addVideoToStash
};

export default connect(
  mapState,
  actions
)(SampleForm);

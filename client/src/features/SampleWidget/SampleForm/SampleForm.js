import React, { Component } from "react";
import BPMTapButton from "../BPMTapButton/BPMTapButton";

import {
  SampleFormContainer,
  SampleActionButton,
  SampleformInputGroup
} from "./components";

class SampleForm extends Component {
  state = {
    sampleStart: "",
    sampleEnd: "",
    bpm: "",
    sampleName: "",
    isStashed: false
  };

  componentDidUpdate() {
    if (this.props.video.isStashed) {
      this.setState({ isStashed: true });
    }
  }

  //mark sample start time
  handleMark = () => {
    this.setState({
      sampleStart: this.props.currentTime
    });
    console.log(this.state);
  };

  //mark sample end time
  handleEndMark = () => {
    this.setState({
      sampleEnd: this.props.currentTime
    });
  };

  //manual adjustment to BPM field
  handleBPMChange = bpm => {
    this.setState({
      bpm
    });
  };

  handleManualBPM = e => {
    this.setState({
      bpm: e.target.value
    });
  };

  handleSaveSample = e => {
    //TODO handle form validation()
    const sampleData = {
      sampleStart: this.state.sampleStart,
      sampleEnd: this.state.sampleEnd,
      bpm: this.state.bpm,
      sampleName: this.state.sampleName
    };

    const newSamples = [...this.props.video.samples, sampleData];
    const vid = Object.assign(this.props.video, { samples: newSamples });

    //if the video is marked as being saved, just updated the video. otherwise, save the video and set the state of it being stashed to true
    if (this.props.video.isStashed === false) {
      this.props.addVideoToStash(vid);
      this.setState({
        isStashed: true
      });
    } else {
      this.props.updateVideo(vid);
    }

    //reset time in state
    this.setState({
      sampleStart: "",
      sampleEnd: "",
      bpm: "",
      sampleName: ""
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleMark}>Set Sample Start</button>
          <input
            type="text"
            name="sampleStart"
            placeholder="sample Start"
            value={this.state.sampleStart}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button onClick={this.handleEndMark}>Set Sample End</button>
          <input
            type="text"
            name="sampleEnd"
            placeholder="Sample End"
            value={this.state.sampleEnd}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <BPMTapButton onChange={this.handleBPMChange} />
          <input
            type="text"
            name="bpm"
            placeholder="Sample Start"
            value={this.state.bpm}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="sampleName"
            placeholder="Sample Name"
            value={this.state.sampleName}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSaveSample}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default SampleForm;

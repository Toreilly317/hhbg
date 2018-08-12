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
    sampleName: ""
  };

  handleMark = () => {
    this.setState({
      ...this.state,
      sampleStart: this.props.currentTime
    });
    console.log(this.state);
  };

  handleEndMark = () => {
    this.setState({
      ...this.state,
      sampleEnd: this.props.currentTime
    });
  };

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
    const sampleData = this.state;
    const samples = (this.props.video.samples = []);
    const newSamples = [...samples, sampleData];
    const vid = Object.assign(this.props.video, { samples: newSamples });

    if (vid.stashed) {
      this.props.saveOrUpdateVideo(vid);
    } else {
      this.props.addVideoToStash(vid);
    }

    //reset time in state
    this.setState({
      ...this.state,
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

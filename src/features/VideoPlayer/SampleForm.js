import React, { Component } from "react";
import BPMTapButton from "./BPMTapButton";
import styled from "styled-components";
import { connect } from "react-redux";

class SampleForm extends Component {
  state = {
    startTime: this.props.currentTime,
    endTime: null
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
    const sampleName = e.target.sampleName.value;

    const sampleData = Object.assign(this.state, { sampleName });

    //reset field
    e.target.sampleName.value = null;

    //reset time in state
    this.setState({
      ...this.state,
      startTime: 0,
      endTime: 0
    });

    console.log(sampleData);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleMark}>Mark</button>
        <button onClick={this.handleEndMark}>End Mark</button>
        <BPMTapButton />
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <input
              name="MarkStart"
              type="text"
              value={this.state.startTime}
              placeholder="Sample Start Time"
              autoFocus
            />
            <input
              name="MarkEnd"
              type="text"
              value={this.state.endTime}
              placeholder="SampleEndTime"
              autoFocus
            />
            <input
              name="sampleName"
              type="text"
              placeholder="Name This Sample"
              autoFocus
            />
            <select name="category">
              <option value="drums">Drums</option>
              <option value="vocals">Vocals</option>
              <option value="bass">Bass</option>
              <option value="guitar">Guitar</option>
              <option value="piano">Piano</option>
              <option value="percussion">Percussion</option>
            </select>

            <button onClick={this.handleSubmit}>Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SampleForm;

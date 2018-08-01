import React, { Component } from "react";
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
    console.log(e.target.sampleName.value);
    e.target.sampleName.value = null;
    this.setState({
      ...this.state,
      startTime: 0,
      endTime: 0
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleMark}>Mark</button>
        <button onClick={this.handleEndMark}>End Mark</button>
        <div>
          <div>Current Time: {this.props.currentTime.toFixed(2)}</div>
          <div>Marked Time: {this.state.startTime}</div>
          <div>End Mark Time: {this.state.endTime}</div>
          {this.state.endTime && (
            <form onSubmit={this.handleOnSubmit}>
              <input
                name="sampleName"
                type="text"
                placeholder="Name This Sample"
              />
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default SampleForm;

import React, { Component } from "react";

export default class TimeSlider extends Component {
  state = {
    step: 1,
    currentTime: 0,
    value: this.props.currentTime,
    lastValue: undefined
  };

  static getDerivedFromProps(props) {
    return {
      value: props.currentTime
    };
  }

  handleOnChange = e => {
    const newVal = e.target.value;
    let time = Math.abs(this.props.duration - newVal - this.props.duration);
    console.log(time);
    this.props.seek(time);
    // if (newVal > this.state.lastValue) {
    //   timeDiff = this.state.lastValue - newVal;
    //   console.log("down", --timeDiff);
    // } else {
    //   timeDiff = newVal - this.state.lastValue;
    //   console.log("up", timeDiff);
    // }

    // this.props.seek(timeDiff);
  };

  handleMouseDown = e => {
    this.props.player.pauseVideo(); //cancels currentTime timer
    console.log("down");
    this.setState({
      ...this.state,
      lastValue: this.props.currentTime
    });
  };

  handleMouseUp = e => {
    this.props.player.playVideo();
  };

  render() {
    return (
      <div>
        <input
          type="range"
          min={0}
          max={this.props.duration}
          step={this.state.step}
          onChange={this.handleOnChange}
          value={this.props.value}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        />

        <span>{this.props.currentTime}</span>
        <span>{this.props.duration}</span>
      </div>
    );
  }
}

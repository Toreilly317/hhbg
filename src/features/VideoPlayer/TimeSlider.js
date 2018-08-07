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
    this.props.seek(time);
  };

  handleMouseDown = e => {
    this.props.player.pauseVideo(); //cancels currentTime timer

    this.setState({
      ...this.state,
      lastValue: this.props.currentTime
    });
  };

  handleMouseUp = e => {};

  render() {
    return (
      <div>
        <input
          type="range"
          min={0}
          max={this.props.duration}
          step={this.state.step}
          onChange={this.handleOnChange}
          value={this.props.currentTime}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
        />
      </div>
    );
  }
}

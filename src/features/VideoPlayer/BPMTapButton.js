import React, { Component } from "react";

class BPMTapButton extends Component {
  state = {
    count: 0,
    msecsFirst: 0,
    msecsPrevious: 0,
    bpm: 0
  };

  handleMouseDown = () => {
    const { count, msecsFirst } = this.state;
    const timeSeconds = new Date();
    const msecs = timeSeconds.getTime();

    if (count === 0) {
      this.setState({
        ...this.state,
        msecsFirst: msecs,
        count: count + 1
      });
    } else {
      const bpmAvg = (60000 * count) / (msecs - msecsFirst);
      let bpm = Math.round(bpmAvg * 100) / 100;

      this.setState({
        ...this.state,
        bpm,
        msecsPrevious: msecs,
        count: this.state.count + 1
      });
    }
  };

  render() {
    return (
      <button onMouseDown={this.handleMouseDown}>
        Tap 4 BPM: {this.state.bpm}
      </button>
    );
  }
}

export default BPMTapButton;

class BPMTapButton extends React.Component {
  state = {
    count: 0,
    timeFirst: 0,
    timePrevious: 0,
    bpm: 0
  };

  //mouse down gives a more accurate timing
  handleMouseDown = () => {
    const { count, timeFirst, timePrevious } = this.state;
    const timeSeconds = new Date();
    const time = timeSeconds.getTime();

    //if its been 2 seconds since last click reset the counter & previous time
    if (timePrevious !== 0 && time - timePrevious > 2000) {
      console.log("old");
      this.setState({
        count: 0,
        timePrevious: time
      });
      return false;
    }

    if (count === 0) {
      this.setState({
        timeFirst: time,
        count: count + 1
      });
    } else {
      const bpmAvg = (60000 * count) / (time - timeFirst);
      let bpm = Math.round(bpmAvg * 100) / 100;
      this.setState({
        bpm,
        count: count + 1,
        timePrevious: time
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

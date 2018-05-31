import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      startTime: null
    };

    this.updateTimer = this.updateTimer.bind(this);
  }

  componentDidMount() {
    this.setState({startTime: Date.now()});
    requestAnimationFrame(this.updateTimer);
  }

  updateTimer() {
    const { startTime } = this.state;
    const { duration } = this.props;

    const elapsedTime = Date.now() - startTime;

    if(elapsedTime <= duration) {
      const value = elapsedTime / duration * 100;
      this.setState({value});
      requestAnimationFrame(this.updateTimer);
    }
  }

  render() {
    const { duration } = this.props;
    const { value } = this.state;

    return (
      <progress value={value} max={100} />
    )
  }
}

export default Timer;

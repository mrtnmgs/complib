import React, { Component } from "react"
import styled from "styled-components"


class Timer extends Component {
  state = {
    min: 0,
    sec: 10
  };
  
  reset = function() {
    clearInterval(this.interval)
    this.setState({ min: 0, sec: 10 })
    this.props.hideOverlay()
  }

  componentDidMount() {  
    this.interval = setInterval(() => {
      let time = this.state.min * 60 + this.state.sec;
      time--;
      const min = parseInt(time / 60, 10);
      const sec = time % 60;
      time
        ? this.setState({ min, sec })
        // this would typically be the function that triggers the action to reset the app to its initial state
        : this.reset()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const min = this.state.min.toString().padStart(2, "0");
    const sec = this.state.sec.toString().padStart(2, "0");
    return (
      <div className="timer">
        World ends in {min}:{sec}
      </div>
    );
  }
}

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.75);
  color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.timer {
  padding-bottom: 10vh;
}
`

class Overlay extends Component {
  state = {
    show: false
  };

  componentDidMount() {
    this.countdown();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  countdown = () => {
    this.timeout = setTimeout(() => {
      this.setState({ show: true });
    }, 3000);
  };

  hideOverlay = () => {
    this.setState({ show: false });
    this.countdown();
  };

  displayOverlay = () => {
    const overlay = (
      <StyledOverlay className="overlay" onClick={this.hideOverlay}>
        <h1>Click to go back</h1>
        <Timer hideOverlay={this.hideOverlay} />
      </StyledOverlay>
    );

    return this.state.show ? overlay : "(Overlay appears after 3 sec)";
  };

  render() {
    return this.displayOverlay();
  }
}

export default Overlay;
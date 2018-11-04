import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

/*
HTML5 audio element with custom controls.
Requires the Button component.
*/

class Player extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      label: "Sound is off",
      canplay: false
    };
    this.audio = new Audio(this.props.url);
  }

  togglePlay = () => {
    if (this.audio.paused) {
      // audio was paused, we're going to start playing
      // first set label as loading
      this.setState({ label: "Loading..." });
      // set event listener to update state.canplay when ready
      this.audio.addEventListener("canplay", () => this.setState({ canplay: true }));
      // play the sound and store the Promise in a var so we can check it when we want to pause
      // (otherwise we'll get 'DOMException: The play() request was interrupted' on pause)
      this.playPromise = this.audio.play();
      // finally update label
      this.playPromise.then(() => {
        this.setState({ label: "Sound is on" })
      });
    } else {
      if (this.playPromise !== undefined) {
        // the promise must be resolved before we try to pause
        this.playPromise
        .then(_ => {
          // pause
          this.audio.pause();
          // finally update label
          this.setState({ label: "Sound is off" });
          })
      }
    }
  };

  render() {
    return <Button clickAction={this.togglePlay} label={this.state.label} />;
  }
}

export default Player;

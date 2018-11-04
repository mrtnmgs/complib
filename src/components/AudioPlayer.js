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
    this.state = { label: "Sound is off" };
    this.audio = new Audio(this.props.url);
  }

  componentDidMount() {
    this.updateLabel()
  }

  updateLabel = () => {
    const label = this.audio.paused ? 'Sound is off' : 'Sound is on';
    this.setState({ label });
  }

  togglePlay = () => {
    // console.log(this.audio.paused);
    this.audio.paused ? this.audio.play() : this.audio.pause();
    this.updateLabel();
  }

  render() {
    return <Button clickAction={this.togglePlay} label={this.state.label} />
  }
}

export default Player;

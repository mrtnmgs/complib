import React, { Component } from 'react'
import styled from "styled-components"
import PropTypes from "prop-types";


const StyledP = styled.p`
  /* temp rules */
  max-width: 45em;
  line-height: 1.5;
`

class Text extends Component {
  static PropTypes = {
    content: PropTypes.string.isRequired
  }

  render() {
    return (
      <StyledP>{this.props.content}</StyledP>
    );
  }
}

export default Text;
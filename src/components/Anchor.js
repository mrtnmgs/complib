import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/* 
This component replaces default browser styles for links by an animatable underline created with a pseudo element.
Season to taste.
*/

const StyledAnchor = styled.a`
    color: #333;
    text-decoration: none;
    position: relative;
    cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: hsl(155, 25%, 60%);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease-in-out;
  }

&:hover {
  color: hsl(155, 25%, 50%);
}

&:hover::before {
    opacity: 1;
    transform: translateY(0);
  }
`;

class Anchor extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  };

  render() {
    return (
      <StyledAnchor href={this.props.href}>{this.props.text}</StyledAnchor>
    );
  }
}

export default Anchor;

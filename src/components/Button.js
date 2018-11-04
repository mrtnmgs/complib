import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/* button with custom styles */

const StyledButton = styled.button`
    /* RESET */
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;
  }

  /* Remove excess padding and border in Firefox 4+ */
  &::-moz-focus-inner {
      border: 0;
      padding: 0;
  }
  /* END RESET */

  /* CUSTOM STYLES */
  background: #CCC;
  padding: 0.5em 1em;
  font-family: sans-serif;
  border-radius: 3px;

  :active {
    background: #777;
  }

  :disabled {
    background: #555;
  }
`;

class Button extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    clickAction: PropTypes.func.isRequired
  }

  render() {
    return <StyledButton onClick={this.props.clickAction}>{this.props.label}</StyledButton>
  }
}

export default Button;

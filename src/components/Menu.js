import React, { Component } from "react";
import styled from "styled-components";
import Anchor from "./Anchor";

/*
v.1.0, August 2018
This menu is a hamburger menu when screen < 768px
Otherwise the items are shown inline.
 */

const StyledMenu = styled.nav`
  /* Resets */
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  /* Mobile : hamburger menu */
  @media screen and (max-width: 768px) {
    /* ul contains the menu, button.burger is a separate element for the hamburger menu on mobile devices */
    ul {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      padding: 50px 4vw 1vw;
      overflow: hidden;
      background-color: #f09bb2;
      transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
    }

    ul.closed {
      transform: translate3d(0, -100%, 0);
    }

    ul.open {
      transform: translate3d(0, 0, 0);
    }

    li {
      margin-bottom: 1vw;
    }

    .burger {
      /* reset button styling */
      display: inline-block;
      border: none;
      margin: 0;
      cursor: pointer;
      appearance: none;
      background-color: transparent;
      /* end reset button styling */
      position: fixed;
      top: 8px;
      right: 8px;
      width: 30px;
      height: 20px;
      z-index: 10; /* always above */
    }

    .burger:focus {
      outline: none;
    }

    .burger-slice,
    .burger-slice:after,
    .burger-slice:before {
      position: fixed;
      top: 23px;
      right: 10px;
      height: 3px;
      width: 30px;
      border-radius: 3px;
      background-color: #333;
      content: "";
      transition: all 0.3s ease-in-out;
    }
    .burger.closed .burger-slice:before {
      transform: translateY(-10px) rotate(0);
    }
    .burger.closed .burger-slice:after {
      transform: translateY(10px) rotate(0);
    }

    .burger.open .burger-slice {
      background-color: transparent;
    }
    .burger.open .burger-slice:before {
      transform: translateY(0) rotate(45deg);
    }
    .burger.open .burger-slice:after {
      transform: translateY(0) rotate(-45deg);
    }
  }

  /* Desktop: Menu under header */
  @media screen and (min-width: 768px) {
    .burger {
      /* hide hamburger button on wide screens */
      display: none;
    }

    li {
      display: inline-block;
      margin-right: 1em;
    }
  }
`;

class Menu extends Component {
  state = {
    show: false
  };

  toggleMenu = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <StyledMenu>
        <button
          className={`burger ${this.state.show ? "open" : "closed"}`}
          onClick={this.toggleMenu}
        >
          <span className="burger-slice" />
        </button>
        <ul className={this.state.show ? "open" : "closed"}>
          <li>
            <Anchor href="#" text="Link 1" />
          </li>
          <li>
            <Anchor href="#" text="Link 2" />
          </li>
          <li>
            <Anchor href="#" text="Link 3" />
          </li>
        </ul>
      </StyledMenu>
    );
  }
}

export default Menu;

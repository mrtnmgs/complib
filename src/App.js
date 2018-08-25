import React, { Component } from "react";
import styled from "styled-components";

/* This page never gets loaded. The complib app should only be used through storybook.
I changed the yarn start/build scripts in package.json so they launch/build storybook and not the app. */

const StyledDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  margin-top: 25vh;
  font-family: sans-serif;
  font-size: 1.25rem;

  .about {
    max-width: 90vw;
  }
`;
class App extends Component {
  render() {
    return (
      <StyledDiv className="App">
        <div className="about">
          <h1>Complib</h1>
          <p>
            Complib (Components Library) is a place to store my own reusable
            components.
          </p>
          <p>
            It was built with <code>create-react-app</code>,{" "}
            <code>storybook</code>, <code>styled-components</code> and{" "}
            <code>react-transition-group</code>
          </p>
          <p>
            To see the components, run <code>yarn run storybook</code>
          </p>
          <p>
            See{" "}
            <a href="https://github.com/storybooks/storybook#live-examples">
              here
            </a>{" "}
            for examples / templates.
          </p>
        </div>
      </StyledDiv>
    );
  }
}

export default App;

import ReactDOM from 'react-dom';
import React from 'react';
import Anchor from './Anchor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Anchor href="#" text="link text" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

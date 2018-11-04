import ReactDOM from 'react-dom';
import React from 'react';
import Button from './Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button label="click me" clickAction={() => console.log("clicked")}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

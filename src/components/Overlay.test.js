import ReactDOM from 'react-dom';
import React from 'react';
import Overlay from './Overlay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Overlay />, div);
  ReactDOM.unmountComponentAtNode(div);
});

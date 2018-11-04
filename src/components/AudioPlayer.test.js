import ReactDOM from 'react-dom';
import React from 'react';
import AudioPlayer from './AudioPlayer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AudioPlayer url="https://wwoz-sc.streamguys1.com/wwoz-hi.mp3" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

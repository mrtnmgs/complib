import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Menu from '../components/Menu';
import Anchor from '../components/Anchor';
import Button from '../components/Button';
import Overlay from '../components/Overlay';
import ApiCall from '../components/ApiCall';
import AudioPlayer from '../components/AudioPlayer';

storiesOf('Menu', module).add('default', () => <Menu />);
storiesOf('Anchor', module).add('default', () => <Anchor href="#" text="Example link" />);
storiesOf('Button', module).add('default', () => <Button label="click me" clickAction={() => console.log("clicked")} />);
storiesOf('Overlay', module).add('default', () => <Overlay />);
storiesOf('ApiCall', module).add('default', () => <ApiCall symbol="aapl" />);
storiesOf('AudioPlayer', module).add('default', () => <AudioPlayer url="http://mrtnmgs.com:8001/stream.mp3"/>);
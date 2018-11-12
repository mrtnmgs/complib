import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Text from '../components/Text';
import Anchor from '../components/Anchor';
import Menu from '../components/Menu';
import Button from '../components/Button';
import Overlay from '../components/Overlay';
import ApiCall from '../components/ApiCall';
import AudioPlayer from '../components/AudioPlayer';

storiesOf('Text', module).add('default', () => <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias. Incidunt nemo iste hic blanditiis reprehenderit odit eligendi inventore recusandae expedita qui sequi, nihil architecto! Nostrum quam illum mollitia rerum."/>);
storiesOf('Anchor', module).add('default', () => <Anchor href="#" text="Example link" />);
storiesOf('Menu', module).add('default', () => <Menu />);
storiesOf('Button', module).add('default', () => <Button label="click me" clickAction={() => console.log("clicked")} />);
storiesOf('Overlay', module).add('default', () => <Overlay />);
storiesOf('ApiCall', module).add('default', () => <ApiCall symbol="aapl" />);
storiesOf('AudioPlayer', module).add('default', () => <AudioPlayer url="http://mrtnmgs.com:8001/stream.mp3"/>);
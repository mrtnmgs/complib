import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Menu from '../components/Menu';
import Anchor from '../components/Anchor';
import Overlay from '../components/Overlay';

storiesOf('Menu', module).add('default', () => <Menu />);
storiesOf('Anchor', module).add('default', () => <Anchor href="#" text="Example link" />);
storiesOf('Overlay', module).add('default', () => <Overlay />);
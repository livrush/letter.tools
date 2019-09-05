import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { faCheckSquare, faCalculator } from '@fortawesome/free-solid-svg-icons'

import '../../css/style.css';

import {
  Button,
  Input,
  ButtonGroup,
} from '../components';

storiesOf('Components', module)
  .addDecorator(centered)
  .add('Button/Icon', () => <Button icon={faCheckSquare} />)
  .add('Button/Text', () => <Button text="Click me!" />)
  .add('Button/Group', () => <ButtonGroup config={[
    { text: 'Button' },
    { icon: faCheckSquare },
    { icon: faCalculator },
  ]} />)
  .add('Input', () => <Input content="Option" />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { faCat } from '@fortawesome/free-solid-svg-icons'

import '../css/style.css';

import {
  ActionBar,
  Button,
  ButtonGroup,
  Header,
  HomeLetter,
  VariableColumn,
  VariableInput,
} from '../components';

storiesOf('Components', module)
  .addDecorator(centered)
  .add('Action Bar', () => <ActionBar />);

storiesOf('Components/Button', module)
  .addDecorator(centered)
  .add('Icon', () => <Button icon={faCat} />)
  .add('Text', () => <Button text="Click me!" />)
  .add('Group', () => <ButtonGroup config={[
    { text: 'Button' },
    { icon: faCat },
    { icon: faCat, text: 'Cat' },
  ]} />);

storiesOf('Components', module)
  .addDecorator(centered)
  .add('Header', () => <Header />)
  .add('HomeLetter', () => <HomeLetter />)
  .add('Variable Column', () => <VariableColumn config={[
    { content: 'Salutation' },
    { content: 'Company' },
    { content: 'Position' },
    { content: 'Skill 1' },
  ]} />)
  .add('VariableInput', () => <VariableInput content="Option" />);

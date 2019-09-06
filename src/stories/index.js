import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { faCat } from '@fortawesome/free-solid-svg-icons'

import '../css/style.css';

import {
  ActionBar,
  Button,
  Input,
  ButtonGroup,
  InjectionColumn,
} from '../components';

storiesOf('Components/Button', module)
  .addDecorator(centered)
  .add('Action Bar', () => <ActionBar />);

storiesOf('Components/Button', module)
  .addDecorator(centered)
  .add('Icon', () => <Button icon={faCat} />)
  .add('Text', () => <Button text="Click me!" />)
  .add('Group', () => <ButtonGroup config={[
    { text: 'Button' },
    { icon: faCat },
    {
      icon: faCat,
      text: 'Cat',
    },
  ]} />);

storiesOf('Components', module)
  .addDecorator(centered)
  .add('InjectionColumn', () => <InjectionColumn config={[
    { content: 'Costa Rican Colon' },
    { content: 'Generic Chips' },
    { content: 'Key' },
    { content: 'Orchestrator' },
  ]} />)
  .add('Input', () => <Input content="Option" />);

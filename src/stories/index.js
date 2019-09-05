import React from 'react';
import '../../css/style.css';

import { storiesOf } from '@storybook/react';

import { Input } from '../components/Input';

storiesOf('Components', module)
  .add('Input', () => <Input content="Option" />);

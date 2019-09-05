import React from 'react';
import { Button } from './';

export const ButtonGroup = ({ config }) => (
  <div className="button-group">
    {
      config.map(({ icon, text }) => (
        <Button icon={icon} text={text} />
      ))
    }
  </div>
)

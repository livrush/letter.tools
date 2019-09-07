import React from 'react';
import { Input } from '.';

export const InjectionColumn = ({ config }) => (
  <div className="injections-container">
    <h2 className="injections-title">Injections</h2>
    {
      config.map(({ content }) => (
        <Input content={content} />
      ))
    }
  </div>
)

import React from 'react';
import { Input } from '.';

export const InjectionColumn = ({ config }) => (
  <div className="injections-container">
    <h1 className="injections-title">Injections</h1>
    {
      config.map(({ content }) => (
        <Input content={content} />
      ))
    }
  </div>
)

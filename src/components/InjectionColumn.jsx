import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '.';

const InjectionColumn = ({ config }) => (
  <div className="injections-container">
    <h2 className="injections-title">Injections</h2>
    {
      config.map(({ content }) => (
        <Input key={content} content={content} />
      ))
    }
  </div>
)

InjectionColumn.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
  })),
};

export { InjectionColumn };

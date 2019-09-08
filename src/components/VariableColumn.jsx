import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '.';

const VariableColumn = ({ config }) => (
  <div className="injections-container">
    <h2 className="injections-title">Injections</h2>
    {
      config.map(({ content }) => (
        <Input key={content} content={content} />
      ))
    }
  </div>
)

VariableColumn.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export { VariableColumn };

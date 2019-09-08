import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '.';

const VariableColumn = ({ config }) => {
  const InputComponents = [];
  let variableName;

  for (variableName in config) {
    const variableValue = config[variableName]
    InputComponents.push(<Input key={variableName} variable={{ name: variableName, value: variableValue }} />);
  }

  return (
    <div className="injections-container">
      <h2 className="injections-title">Injections</h2>
      { InputComponents }
    </div>
  );
};

VariableColumn.propTypes = {
  config: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { VariableColumn };

import React from 'react';
import PropTypes from 'prop-types';
import { VariableInput } from '.';

const VariableColumn = ({ config }) => {
  const VariableInputComponents = [];
  let variableName;

  for (variableName in config) {
    const variableValue = config[variableName]
    VariableInputComponents.push(<VariableInput key={variableName} variable={{ name: variableName, value: variableValue }} />);
  }

  return (
    <div className="variables-container">
      <h3 className="variables-title">Variables</h3>
      { VariableInputComponents }
    </div>
  );
};

VariableColumn.propTypes = {
  config: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { VariableColumn };

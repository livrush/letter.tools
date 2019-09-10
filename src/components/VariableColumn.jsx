import React from 'react';
import PropTypes from 'prop-types';
import { VariableInput } from '.';

const VariableColumn = ({ variableConfig }) => {
  const VariableInputComponents = [];
  let variableName;

  for (variableName in variableConfig) {
    const variableValue = variableConfig[variableName]
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
  variableConfig: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { VariableColumn };

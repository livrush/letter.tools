import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { updateVariable } from '../redux';

const VariableInputBase = ({ variable, updateVariable }) => (
  <div className="input-container">
    <label className="input-label">{variable.name}</label>
    <input
      className="input"
      placeholder={variable.name}
      type="text"
      name={variable.name}
      id={variable.name}
      onKeyUp={({ target }) => updateVariable({ [variable.name]: target.value })}
    />
  </div>
);

VariableInputBase.propTypes = {
  variable: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateVariable }, dispatch);
};

const VariableInput = connect(null, mapDispatchToProps)(VariableInputBase);

export {
  VariableInputBase,
  VariableInput,
};

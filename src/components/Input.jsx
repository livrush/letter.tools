import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ variable }) => (
  <div className="input-container">
    <label className="input-label">
      {variable.name}
    </label>
    <input
      className="input"
      placeholder={variable.name}
      type="text"
      name={variable.name}
      id={variable.name}
    />
  </div>
);

Input.propTypes = {
  variable: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }).isRequired,
};

export { Input };

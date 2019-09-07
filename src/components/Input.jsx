import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ content }) => (
  <div className="input-container">
    <label className="input-label">
      {content}
    </label>
    <input
      className="input"
      placeholder={content}
      type="text"
      name={content}
      id={content}
    />
  </div>
);

Input.propTypes = {
  content: PropTypes.string.isRequired,
};

export { Input };

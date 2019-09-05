import React from 'react';

export const Input = ({ content }) => (
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

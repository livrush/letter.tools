import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ icon, text }) => {
  const IconComponent = icon ?
    <FontAwesomeIcon icon={icon} /> :
    null;
  return (
  <button className="button">
    <span className="button-icon">
      { IconComponent }
    </span>
    <span className="button-text">
      {text}
    </span>
  </button>
)};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ icon, text }) => {
  const IconComponent = icon ?
    <FontAwesomeIcon className="button-icon" icon={icon} /> :
    null;
  return (
  <button className="button">
    { IconComponent }
    <span className="button-text">
      {text}
    </span>
  </button>
)};

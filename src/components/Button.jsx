import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = ({ icon, text, ...rest }) => {
  const IconComponent = icon ?
    <FontAwesomeIcon className="button-icon" icon={icon} /> :
    null;

  const TextComponent = text ?
    <span className="button-text">{text}</span> :
    null;

  return (
  <button className="button" {...rest} >
    { IconComponent }
    { TextComponent }
  </button>
)};

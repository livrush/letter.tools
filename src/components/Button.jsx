import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ icon, text, ...rest }) => {
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

Button.protoTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  text: '',
};

export { Button };

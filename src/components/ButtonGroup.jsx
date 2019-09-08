import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';

const ButtonGroup = ({ config }) => (
  <div className="button-group">
    {
      config.map(({ icon, text, ...rest }, i) => (
        <Button key={icon.iconName + text} icon={icon} text={text} {...rest} />
      ))
    }
  </div>
);

ButtonGroup.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      text: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export { ButtonGroup };

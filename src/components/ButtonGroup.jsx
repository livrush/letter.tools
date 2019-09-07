import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '.';

const ButtonGroup = ({ config }) => (
  <div className="button-group">
    {
      config.map(({ icon, text, ...rest }) => (
        <Button key={icon.toString() + text} icon={icon} text={text} {...rest} />
      ))
    }
  </div>
);

ButtonGroup.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string,
  })).isRequired,
};

export { ButtonGroup };

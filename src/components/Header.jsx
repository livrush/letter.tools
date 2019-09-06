import React from 'react';
import { ButtonGroup } from '.';
import {
  faSignOutAlt,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => (
  <nav className="nav header">
    <div className="logo title">
      letter.tools
    </div>
    <ButtonGroup
      config={[
        { icon: faThList, className: 'button header-button' },
        { icon: faSignOutAlt, className: 'button header-button' },
      ]}
    />
  </nav>
)

import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ButtonGroup } from '.';
import {
  faSignOutAlt,
  faThList,
} from '@fortawesome/free-solid-svg-icons';

export const Header = () => (
  <nav className="nav">
    <div className="container header">
    <Link to="/">
      <div className="logo title">
        letter.tools
      </div>
    </Link>
    <div className="links">
      <Link to="letter">Letter</Link>
      <Link to="list">List</Link>
    </div>
    {/* <ButtonGroup
      config={[
        { icon: faThList, className: 'button header-button' },
        { icon: faSignOutAlt, className: 'button header-button' },
      ]}
    /> */}
    </div>
  </nav>
)

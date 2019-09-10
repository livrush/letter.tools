import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => (
  <nav className="nav">
    <div className="container header">
      <Link to="/">
        <div className="logo">
          <img src="/img/logo.svg" alt="letter.tools"/>
        </div>
      </Link>
      {/* <div className="links">
        <Link to="create" className="link">Letter</Link>
        <Link to="list" className="link">List</Link>
      </div> */}
    </div>
  </nav>
);

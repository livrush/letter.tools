import React from 'react';
import { Link } from "react-router-dom";

export const Header = () => (
  <nav className="nav">
    <div className="container header">
      <Link to="/">
        <div className="logo title">
          letter.tools
        </div>
      </Link>
      <div className="links">
        <Link to="create">Letter</Link>
        <Link to="list">List</Link>
      </div>
    </div>
  </nav>
);

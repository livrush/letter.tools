import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '.';

export const HomeLetter = ({ user }) => (
  <div className="home-letter">
    <div className="home-letter-top">
      <p className="home-letter-prefix-container title">
        <span className="home-letter-prefix t-black">any</span>
        <span className="home-letter-prefix t-green">thank you</span>
        <span className="home-letter-prefix t-red">rejection</span>
        <span className="home-letter-prefix t-yellow">follow up</span>
        <span className="home-letter-prefix t-blue">cover</span>
      </p>
      <h1 className="home-letter-title title">letter.tools</h1>
    </div>
    <div className="home-letter-links">
      <Link className="home-letter-link" to="create">Start fresh</Link>
      {
        user ?
        <Link className="home-letter-link" to="list">Continue</Link> :
        <Button className="home-letter-link" text="Continue" disabled />
      }
    </div>
  </div>
)

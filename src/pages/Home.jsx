import React from 'react';
import { HomeLetter } from '../components';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'letter tools \ud83d\udcc3';
  }

  render() {
    return (
      <div className="homePage-container"><HomeLetter /></div>
    );
  }
}

export { HomePage };

import React from 'react';

class OopsPage extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'letter tools';
  }

  render() {
    return (
      <div className="oops-container">
        <div className="oops-envelope-container">
          <img className="envelope-img" src="/img/envelope.svg" alt="envelope" />
          <img className="blink envelope-shock-lines" src="/img/envelope--blink.svg" alt="shock lines" />
        </div>
        <h1>404 Not Found</h1>
        <h2>The page you're requesting could not be found.</h2>
      </div>
    );
  }
}

export { OopsPage };

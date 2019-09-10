import React from 'react';
import { instructions } from '../lib';
import {
  ConnectedActionBar,
  ConnectedLetter,
  ConnectedVariableColumn,
} from './Create-containers';

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'letter tools \ud83d\udcdd';
    this.props.updateLetterContent({ newContent: instructions });
  }

  render() {
    const {
      letter,
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 className="letter-title">{letter.title}</h2>
            <ConnectedVariableColumn />
          </div>
          <div className="col-8">
            <ConnectedActionBar />
            <ConnectedLetter />
          </div>
        </div>
      </div>
    );
  }
}
CreatePage.propTypes = {};

export { CreatePage };

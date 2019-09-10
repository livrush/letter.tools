import React from 'react';
import PropTypes from 'prop-types';
import { replaceVariables } from '../lib';
import { TextArea } from '.';

class Letter extends React.Component {
  static defaultProps = {
    edit: true,
  }

  render() {
    const {
      edit,
      letterText,
      updateLetterContent,
      variables,
    } = this.props;

    const editing = (<TextArea text={letterText} onChange={updateLetterContent} />)

    const adjustedLetterText = replaceVariables(letterText, variables);

    const displaying = (
      <div className="letter-text">
        {adjustedLetterText.split('\n').map((line, i) => <p key={line.slice(0, 5) || `Empty-${i}`}>{line}</p>)}
      </div>
    );

    return (
      <div className="letter-container">
      { edit ? editing : displaying }
    </div>
    );
  }
};

Letter.propTypes = {
  edit: PropTypes.bool,
  letterText: PropTypes.string.isRequired,
};

export { Letter };

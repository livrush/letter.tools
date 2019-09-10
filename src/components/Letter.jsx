import React from 'react';
import PropTypes from 'prop-types';
import { replaceVariables } from '../lib';

class Letter extends React.Component {
  static defaultProps = {
    edit: true,
  }

  componentDidMount() {
    const textarea = document
      .getElementsByClassName('letter-textarea')[0];
    textarea && textarea.addEventListener('keyup', function (event) {
      event.target.style.height = event.target.scrollHeight + 'px';
    }, false);
  }

  render() {
    const {
      edit,
      letterText,
      updateLetterContent,
      variables,
    } = this.props;

    const editing = (
      <textarea
        className="letter-textarea"
        value={letterText}
        onChange={({ target }) => updateLetterContent({ newContent: target.value })}
      />
    );

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

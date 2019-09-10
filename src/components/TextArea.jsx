import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  componentDidMount() {
    const textarea = document.getElementsByClassName('letter-textarea')[0];
    if (textarea) textarea.style.height = `${textarea.scrollHeight + 2}px`;
  }

  componentDidUpdate() {
    const textarea = document.getElementsByClassName('letter-textarea')[0];
    if (textarea) textarea.style.height = `${textarea.scrollHeight + 2}px`;
  }

  render() {
    const { text, onChange } = this.props;

    return (
      <textarea
        className="letter-textarea"
        value={text}
        onChange={({ target }) =>
          onChange({ newContent: target.value })
        }
      />
    );
  }
}

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export { TextArea };

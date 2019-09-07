import React from 'react';

class Letter extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

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
    } = this.props;

    const editing = (
      <textarea className="letter-textarea"
        // value={letterText}
      />
    );

    const displaying = (
      <div className="letter-text">
        {letterText.split('\n').map(line => <p>{line}</p>)}
      </div>
    );
    return (
      <div className="letter-container">
      { edit ? editing : displaying }
    </div>
    );
  }
};

export { Letter };
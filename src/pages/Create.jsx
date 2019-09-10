import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionBar, VariableColumn, Letter } from '../components';
import { instructions } from '../lib';
import {
  editLetterContent,
  updateLetterContent,
  viewLetterContent
} from '../redux';

const mapStateToActionBarProps = state => ({
  edit: state.letter.edit,
});

const mapDispatchToActionBarProps = dispatch => (
  bindActionCreators({ editLetterContent, viewLetterContent }, dispatch)
);

const ConnectedActionBar = connect(mapStateToActionBarProps, mapDispatchToActionBarProps)(ActionBar);

const mapStateToLetterProps = state => ({
  edit: state.letter.edit,
  letterText: state.letter.content,
  variables: state.variables,
});

const mapDispatchToLetterProps = dispatch =>
  bindActionCreators({ updateLetterContent }, dispatch);

const ConnectedLetter = connect(mapStateToLetterProps, mapDispatchToLetterProps)(Letter);

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateLetterContent({ newContent: instructions });
  }

  render() {
    const {
      letter,
      variables
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 className="letter-title">{letter.title}</h2>
            <VariableColumn config={variables} />
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

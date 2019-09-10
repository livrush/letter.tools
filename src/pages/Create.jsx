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

// ! ConnectedVariableColumn

const mapStateToVariableColumnProps = state => ({
  variableConfig: state.variables,
});

// ! ConnectedActionBar

const mapStateToActionBarProps = state => ({
  edit: state.letter.edit,
});

const mapDispatchToActionBarProps = dispatch => (
  bindActionCreators({ editLetterContent, viewLetterContent }, dispatch)
);

// ! ConnectedLetter

const mapStateToLetterProps = state => ({
  edit: state.letter.edit,
  letterText: state.letter.content,
  variables: state.variables,
});

const mapDispatchToLetterProps = dispatch =>
  bindActionCreators({ updateLetterContent }, dispatch);

const ConnectedActionBar = connect(mapStateToActionBarProps, mapDispatchToActionBarProps)(ActionBar);
const ConnectedLetter = connect(mapStateToLetterProps, mapDispatchToLetterProps)(Letter);
const ConnectedVariableColumn = connect(mapStateToVariableColumnProps)(VariableColumn);

class CreatePage extends React.Component {
  constructor(props) {
    super(props);
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

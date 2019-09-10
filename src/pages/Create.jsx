import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionBar, VariableColumn, Letter } from '../components';
import {
  editLetterContent,
  updateLetterContent,
  viewLetterContent
} from '../redux';

const mapDispatchToActionBarProps = dispatch => (
  bindActionCreators({ editLetterContent, viewLetterContent }, dispatch)
);

const ConnectedActionBar = connect(null, mapDispatchToActionBarProps)(ActionBar);

const mapStateToLetterProps = state => ({
  edit: state.letter.edit,
  letterText: state.letter.content,
  variables: state.variables,
});

const mapDispatchToLetterProps = dispatch =>
  bindActionCreators({ updateLetterContent }, dispatch);

const ConnectedLetter = connect(mapStateToLetterProps, mapDispatchToLetterProps)(Letter);

const CreatePage = ({ letter, variables }) => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <h2
          className="letter-title"
          // contentEditable="true"
        >
          {letter.title}
        </h2>
        <VariableColumn config={variables} />
      </div>
      <div className="col-8">
        <ConnectedActionBar />
        <ConnectedLetter
          edit={letter.edit}
          letterText={letter.content}
          variables={variables}
        />
      </div>
    </div>
  </div>
);

CreatePage.propTypes = {};

export { CreatePage };

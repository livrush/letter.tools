import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionBar, VariableColumn, Letter } from '../components';
import {
  editLetterContent,
  updateLetterContent,
  viewLetterContent,
} from '../redux';

// ! ConnectedVariableColumn

const mapStateToVariableColumnProps = state => ({
  variableConfig: state.variables,
});

export const ConnectedVariableColumn = connect(mapStateToVariableColumnProps)(VariableColumn);

// ! ConnectedActionBar

const mapStateToActionBarProps = state => ({
  edit: state.letter.edit,
});

const mapDispatchToActionBarProps = dispatch => (
  bindActionCreators({ editLetterContent, viewLetterContent }, dispatch)
);

export const ConnectedActionBar = connect(mapStateToActionBarProps, mapDispatchToActionBarProps)(ActionBar);

// ! ConnectedLetter

const mapStateToLetterProps = state => ({
  edit: state.letter.edit,
  letterText: state.letter.content,
  variables: state.variables,
});

const mapDispatchToLetterProps = dispatch =>
  bindActionCreators({ updateLetterContent }, dispatch);

export const ConnectedLetter = connect(mapStateToLetterProps, mapDispatchToLetterProps)(Letter);

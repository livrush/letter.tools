import { combineReducers } from 'redux'
import {
  UPDATE_VARIABLE,
  UPDATE_LETTER_TITLE,
  UPDATE_LETTER_CONTENT,
  EDIT_LETTER_CONTENT,
  VIEW_LETTER_CONTENT,
} from './constants';
import { instructions, readVariables } from '../lib';

function test(state = 'TEST VALUE', action) {
  switch(action.type) {
    case 'TEST':
      return action.payload;
    default:
      return state;
  }
}

// ! ////////////////////////////
// ! Variables //////////////////
// ! ////////////////////////////

// ? Variables
// {
//   name: 'value',
//   ...
// },

function variablesReducer(variables = {
  salutation: 'Dear user,',
  example: '{{variables}}',
  regards: 'Good luck with your letters!',
}, action) {
  switch(action.type) {
    case UPDATE_LETTER_CONTENT:
      return readVariables(action.payload.newContent)
        .reduce((result, variableName) => {
          result[variableName] = variables[variableName] || '';
          return result;
        }, {});
    case UPDATE_VARIABLE:
      return { ...variables, ...action.payload };
    default:
      return variables;
  }
}

// ! ////////////////////////////
// ! Letter /////////////////////
// ! ////////////////////////////

// ? Letter
// {
//   title: '',
//   content: '',
//   edit: '',
// }

function letterReducer(letter = {
  edit: true,
  title: 'Untitled Letter',
  content: instructions,
}, action) {
  switch(action.type) {
    case UPDATE_LETTER_TITLE:
      return { ...letter, title: action.payload.newTitle };
    case UPDATE_LETTER_CONTENT:
      return { ...letter, content: action.payload.newContent };
    case EDIT_LETTER_CONTENT:
      return { ...letter, edit: true };
    case VIEW_LETTER_CONTENT:
      return { ...letter, edit: false };
    default:
      return letter;
  }
}

const reducers = combineReducers({
  variables: variablesReducer,
  letter: letterReducer,
  test,
});

export default reducers;

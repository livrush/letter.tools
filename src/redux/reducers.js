import {
  UPDATE_VARIABLE,
  UPDATE_LETTER_TITLE,
  UPDATE_LETTER_CONTENT,
  EDIT_LETTER_CONTENT,
  VIEW_LETTER_CONTENT,
} from './constants';

// ! ////////////////////////////
// ! Variables //////////////////
// ! ////////////////////////////

// ? Variables
// {
//   name: 'value',
//   ...
// },

function variableReducer(variables, action) {
  switch(action.type) {
    case UPDATE_LETTER_CONTENT:
      return action.payload.reduce((result, variableName) => {
        result[variableName] = variables[variableName] || null;
        return result;
      }, {});
    case UPDATE_VARIABLE:
      return [ ...variables, ...action.payload ];
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

function letterReducer(letter, action) {
  switch(action.type) {
    case UPDATE_LETTER_TITLE:
      return { ...letter, title: action.payload };
    case UPDATE_LETTER_CONTENT:
      return { ...letter, content: action.payload };
    case EDIT_LETTER_CONTENT:
      return { ...letter, edit: true };
    case VIEW_LETTER_CONTENT:
      return { ...letter, edit: false };
    default:
      return letter;
  }
}

export {
  variableReducer,
  letterReducer,
};

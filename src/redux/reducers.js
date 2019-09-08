import {
  CREATE_VARIABLE,
  UPDATE_VARIABLE,
  UPDATE_LETTER_TITLE,
  UPDATE_LETTER_CONTENT,
  EDIT_LETTER_CONTENT,
  VIEW_LETTER_CONTENT,
} from './constants';

// ! ////////////////////////////
// ! Variables //////////////////
// ! ////////////////////////////



function variableReducer(variables, action) {
  switch(action.type) {
    case CREATE_VARIABLE:
      return { ...variables, ...action.payload };
    case UPDATE_VARIABLE:
      return { ...variables, ...action.payload };
    default:
      return variables;
  }
}

// ! ////////////////////////////
// ! Letter /////////////////////
// ! ////////////////////////////


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

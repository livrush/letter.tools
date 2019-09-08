import {
  UPDATE_VARIABLE,
  UPDATE_LETTER_TITLE,
  UPDATE_LETTER_CONTENT,
  EDIT_LETTER_CONTENT,
  VIEW_LETTER_CONTENT,
} from './constants';

function test(input) {
  return {
    type: 'TEST',
    payload: input,
  }
}

// ! ////////////////////////////
// ! Variables //////////////////
// ! ////////////////////////////

function updateVariable(updatedVariable) {
  return {
    type: UPDATE_VARIABLE,
    payload: updatedVariable,
  };
}

// ! ////////////////////////////
// ! Letter /////////////////////
// ! ////////////////////////////

function updateLetterTitle(newTitle) {
  return {
    type: UPDATE_LETTER_TITLE,
    payload: { newTitle },
  }
}

// todo: This is used in variables reducer, make sure it works
function updateLetterContent({ newContent, newVariableNames }) {
  return {
    type: UPDATE_LETTER_CONTENT,
    payload: {
      newContent,
      newVariableNames,
    },
  }
}

function editLetterContent() {
  return {
    type: EDIT_LETTER_CONTENT,
    payload: {},
  }
}

function viewLetterContent() {
  return {
    type: VIEW_LETTER_CONTENT,
    payload: {},
  }
}

export {
  test,
  updateVariable,
  updateLetterTitle,
  updateLetterContent,
  editLetterContent,
  viewLetterContent,
};

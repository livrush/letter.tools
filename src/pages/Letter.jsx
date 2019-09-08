import React from 'react';
import { ActionBar, VariableColumn, Letter } from '../components';

const LetterPage = ({ letter }) => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <h2
          className="letter-title"
          // contentEditable="true"
        >{letter.title}</h2>
        <VariableColumn
          config={{
            Salutation: '',
            Company: '',
            Position: '',
            Skill: '',
          }}
        />
      </div>
      <div className="col-8">
        <ActionBar />
        <Letter
          edit={letter.edit}
          letterText={letter.content}
        />
      </div>
    </div>
  </div>
);

LetterPage.propTypes = {};

export { LetterPage };

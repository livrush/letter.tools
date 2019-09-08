import React from 'react';
import { ActionBar, VariableColumn, Letter } from '../components';
import instructions from '../lib/instructions';

const LetterPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <h2
          className="letter-title"
          // contentEditable="true"
        >Title</h2>
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
          edit={false}
          letterText={instructions}
        />
      </div>
    </div>
  </div>
);

LetterPage.propTypes = {};

export { LetterPage };

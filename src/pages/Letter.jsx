import React from 'react';
import { ActionBar, VariableColumn, Letter } from '../components';
import instructions from '../lib/instructions';

const LetterPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <h2
          class="letter-title"
          contenteditable="true"
        >Title</h2>
        <VariableColumn
          config={[
            { content: 'Salutation' },
            { content: 'Company' },
            { content: 'Position' },
            { content: 'Skill 1' },
          ]}
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

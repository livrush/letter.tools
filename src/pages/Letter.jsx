import React from 'react';
import { ActionBar, InjectionColumn, Letter } from '../components';
import instructions from '../lib/instructions';

export const LetterPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <h2 class="letter-title" contenteditable="true">Title</h2>
        <InjectionColumn
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

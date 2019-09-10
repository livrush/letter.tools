import React from 'react';
import {
  faDownload,
  faEdit,
  faEnvelope,
  faEye,
  faFile,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonGroup } from '.';

export const ActionBar = ({ edit, editLetterContent, viewLetterContent }) => (
  <div className="actionBar-container">
    <ButtonGroup
      config={[
        { icon: faEdit, onClick:() => editLetterContent(), disabled: edit === true },
        { icon: faEye, onClick: () => viewLetterContent(), disabled: edit !== true },
      ]}
    />
    <ButtonGroup
      config={[
        { icon: faSave, disabled: true },
        { icon: faDownload, disabled: true },
        { icon: faFile, disabled: true },
        { icon: faEnvelope, disabled: true },
      ]}
    />
  </div>
);

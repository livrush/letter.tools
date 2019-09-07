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

export const ActionBar = () => (
  <div className="actionBar-container">
    <ButtonGroup
      config={[
        { icon: faEdit },
        { icon: faEye },
      ]}
    />
    <ButtonGroup
      config={[
        { icon: faSave },
        { icon: faDownload },
        { icon: faFile },
        { icon: faEnvelope },
      ]}
    />
  </div>
);

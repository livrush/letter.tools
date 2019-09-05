import React from 'react';

export const Input = ({ content }) => {

  return (
    <div className="input-container">
      <label className="input-label" htmlFor="" >{content}</label>
      <input className="input" placeholder={content} type="text" name={content} id={content} />
    </div>
  );
};

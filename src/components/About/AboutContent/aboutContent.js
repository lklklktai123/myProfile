import React from 'react';

const aboutContent = props => {
  return (
    <div>
      <h4 className="about-title">{props.title}</h4>
      <p className="normal-text">{props.content}</p>
    </div>
  );
};
export default aboutContent;

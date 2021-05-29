import React from 'react';

const aboutContent = props => {
  return (
    <React.Fragment>
      <h4 className="about-title">{props.title}</h4>
      <p className="normal-text">{props.content}</p>
    </React.Fragment>
  );
};
export default aboutContent;

import React from 'react';
const aboutSkill = props => {
  return (
    <React.Fragment>
      <h4 className="normal-text about__progress-text">{props.title}</h4>
      <div className="about__progress">
        <div
          className="about__progress-bar"
          style={{ width: `${props.percent}%` }}
        ></div>
        <div
          className="about__progress-percent"
          style={{ left: `${+props.percent - 8}%` }}
        >
          <span className="percent-text">{props.percent}%</span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default aboutSkill;

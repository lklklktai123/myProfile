import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
const timeline = props => {
  let timeBlock = null;
  let icon = null;
  icon = props.nameIcon ? (
    <FaGraduationCap className="normal-icon" />
  ) : (
    <FaBriefcase className="normal-icon" />
  );
  timeBlock = props.isRight ? (
    <div className="experience__timeline-block">
      <div className="timeline-content--right">
        <h4 className="project-title">{props.projectTitle}</h4>
        <p className="normal-text position-title">{props.position}</p>
        <p className="normal-text ">{props.content}</p>
        {props.website ? (
          <p className="normal-text">
            Website:
            <a href={props.website} target="_blank" rel="noreferrer">
              {props.website}
            </a>
          </p>
        ) : (
          ''
        )}
        {props.gitHup ? (
          <p className="normal-text">
            github:{' '}
            <a href={props.gitHup} target="_blank" rel="noreferrer">
              {props.gitHup}
            </a>
          </p>
        ) : (
          ''
        )}
        {props.linkKey ? (
          <p className="normal-text">
            Link key:{' '}
            <a href={props.linkKey} target="_blank" rel="noreferrer">
              {props.linkKey}
            </a>
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="timeline__date--left">
        <p className="normal-text">{props.dateTime}</p>
      </div>
      <div className="timeline__icon">{icon}</div>
    </div>
  ) : (
    <div className="experience__timeline-block">
      <div className="timeline-content--left">
        <h4 className="project-title">{props.projectTitle}</h4>
        <p className="normal-text position-title">{props.position}</p>
        <p className="normal-text">{props.content}</p>
        {props.website ? (
          <p className="normal-text">
            Website:{' '}
            <a href={props.website} target="_blank" rel="noreferrer">
              {props.website}
            </a>
          </p>
        ) : (
          ''
        )}
        {props.gitHup ? (
          <p className="normal-text">
            github:{' '}
            <a href={props.gitHup} target="_blank" rel="noreferrer">
              {props.gitHup}
            </a>
          </p>
        ) : (
          ''
        )}
        {props.linkKey ? (
          <p className="normal-text">
            Link key:{' '}
            <a href={props.linkKey} target="_blank" rel="noreferrer">
              {props.linkKey}
            </a>
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="timeline__date--right">
        <p className="normal-text">{props.dateTime}</p>
      </div>
      <div className="timeline__icon">{icon}</div>
    </div>
  );
  return timeBlock;
};
export default timeline;

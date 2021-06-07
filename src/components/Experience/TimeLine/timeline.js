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
        <p className="normal-text ">{props.content}</p>
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

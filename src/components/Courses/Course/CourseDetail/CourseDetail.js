import Overlay from '../../../Overlay/overlay';
import { FaGraduationCap } from 'react-icons/fa';
import Rating from './Rating/Rating';

const CourseDetail = props => {
  return (
    <Overlay>
      <div className="course-detail">
        <div className="course-detail__title">Course</div>
        <div className="course-detail__left">
          <div className="course-detail__left-block">
            <FaGraduationCap className="icon" />
          </div>
        </div>
        <div className="course-detail__right">
          <p className="course-detail__right-name">
            React the complete guide (incl-Hook,React Router,Redux)
          </p>
          <p className="normal-text horizon-left-small">Udemy.com (Website)</p>
          <p className="normal-text horizon-left-small">
            Jonas Schedtmann (teacher)
          </p>
          <p className="normal-text horizon-left-small">28 total hours</p>
          <Rating />
          <p className="normal-text horizon-left-small">Detail :</p>
          <p className="normal-text horizon-left-small">
            Has 65 (!!!) hours of video Is modern from the beginning, with a
            strong focus on ES6+ (even ES2020) features Features more and better
            projects (see image below) Contains 25+ coding challenges and 25+
            assignments Has better and deeper explanations of every single topic
            Has even better and more theory videos, so that you can truly master
            JS! Will contain a migration guide so you know which sections to
            watch if you already completed the current course version.
          </p>
        </div>
      </div>
    </Overlay>
  );
};
export default CourseDetail;

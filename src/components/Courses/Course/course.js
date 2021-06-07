import images from '../../../image/exportImage';
import { BiMap, BiUser, BiTime, BiStar } from 'react-icons/bi';

const course = props => {
  let courseImage = null;
  switch (props.image) {
    case 1:
      courseImage = images.imgCss;
      break;
    case 2:
      courseImage = images.imgJs;
      break;
    case 3:
      courseImage = images.imgReact;
      break;
    default:
      courseImage = null;
  }
  return (
    <div className="courses__child">
      <img alt="css" src={courseImage} className="course__image" />
      <h4 className="course-title">{props.title}</h4>
      <div className="course__location">
        <BiMap className="course__icon" />
        <span className="normal-text">{props.address}</span>
      </div>
      <div className="course__user">
        <BiUser className="course__icon" />
        <span className="normal-text">{props.teacher}</span>
      </div>
      <div className="course__hours">
        <BiTime className="course__icon" />
        <span className="normal-text">{props.hours}</span>
      </div>
      <div className="course__rating">
        <BiStar className="course__icon" />
        <span className="normal-text">{props.rating}</span>
      </div>
      <button className="course__btn">Detail</button>
    </div>
  );
};
export default course;

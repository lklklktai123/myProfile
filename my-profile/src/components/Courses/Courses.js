import HeadingTitle from '../HeadingTitle/headingTitle';
import imgCss from '../../image/css.jpg';
import imgJs from '../../image/jonas-js.jpg';
import imgReact from '../../image/reactjs.jpg';

const course = () => {
  return (
    <section className="courses">
      <HeadingTitle title="Course" />
      <h4 className="heading-4">Some course studied</h4>
      <div className="courses__block">
        <div className="courses__child">
          <img alt="css" src={imgCss} className="courses__image" />
        </div>
        <div className="courses__child">
          <img alt="js" src={imgJs} className="courses__image" />
        </div>
        <div className="courses__child">
          <img alt="react" src={imgReact} className="courses__image" />
        </div>
      </div>
    </section>
  );
};
export default course;

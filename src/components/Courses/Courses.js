import HeadingTitle from '../HeadingTitle/headingTitle';
import Course from '../Courses/Course/course';
import videoMp4 from '../../video/video.mp4';
import videoWebm from '../../video/video.webm';
import CourseDetail from './Course/CourseDetail/CourseDetail';
const dataCourses = [
  {
    image: 1,
    title: 'Css3 & Html5',
    address: 'Udemy.com',
    teacher: 'Jonas Schedtmann',
    hours: '28 total h',
    rating: '4.8(30,365)',
  },
  {
    image: 2,
    title: 'Java Script',
    address: 'Udemy.com',
    teacher: 'Jonas Schedtmann',
    hours: '68.5 total h',
    rating: '4.7(106,321)',
  },
  {
    image: 3,
    title: 'ReactJs',
    address: 'Udemy.com',
    teacher: 'Maximilian',
    hours: '48 total h',
    rating: '4.6(113,895)',
  },
];
const course = () => {
  const showCouseDetail = () => {
    const overlay = document.querySelector('.overlay:last-child');
    console.log(overlay);
    overlay.classList.remove('hidden');
  };
  return (
    <section className="courses blur" id="course" data-id-menu="menu-course">
      <div className="courses-vd-block">
        <HeadingTitle title="Course" />
        <h4 className="heading-4">Some course studied</h4>
        <div className="courses-video">
          <video className="courses-video__content" loop autoPlay>
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
            Your browser is not supported!
          </video>
        </div>

        <div className="courses__block">
          {dataCourses.map((course, index) => (
            <Course
              key={`course${index}`}
              image={course.image}
              title={course.title}
              address={course.address}
              teacher={course.teacher}
              hours={course.hours}
              rating={course.rating}
              clicked={showCouseDetail}
            />
          ))}
        </div>
      </div>
      <CourseDetail />
    </section>
  );
};
export default course;

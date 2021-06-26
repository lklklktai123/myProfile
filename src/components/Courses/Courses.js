import HeadingTitle from '../HeadingTitle/headingTitle';
import Course from '../Courses/Course/course';
import videoMp4 from '../../video/video.mp4';
import videoWebm from '../../video/video.webm';
import CourseDetail from './Course/CourseDetail/CourseDetail';
import { useContext } from 'react';
import { CourseContext } from '../../Context/CourseContext';

const Courses = () => {
  const courseCtx = useContext(CourseContext);
  const showCouseDetail = idDetail => {
    const overlay = document.querySelector('.overlay');
    const courseDetail = document.querySelector('.course-detail');
    overlay.classList.remove('hidden');
    courseDetail.classList.remove('hidden');
    console.log(idDetail);
    courseCtx.setCurrentCourse(idDetail);
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
          {courseCtx.dataCourses.map((course, index) => (
            <Course
              key={`course${index}`}
              image={course.image}
              title={course.title}
              address={course.address}
              teacher={course.teacher}
              hours={course.hours}
              rating={course.rating}
              clicked={() => showCouseDetail(course.courseDetail.id)}
            />
          ))}
        </div>
      </div>
      <CourseDetail />
    </section>
  );
};
export default Courses;

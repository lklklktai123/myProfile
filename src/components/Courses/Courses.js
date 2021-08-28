import HeadingTitle from '../HeadingTitle/headingTitle';
import Course from '../Courses/Course/course';
import videoMp4 from '../../video/video.mp4';
import videoWebm from '../../video/video.webm';
import CourseDetail from './Course/CourseDetail/CourseDetail';
import { Fragment, useContext } from 'react';
import { CourseContext } from '../../Context/CourseContext';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import Overlay from '../Overlay/overlay';
import {
  checkViewIntersection,
  threshold,
} from '../../shared/utilities/helper';

const Courses = () => {
  const { t } = useTranslation();
  const courseCtx = useContext(CourseContext);
  const { ref, inView, entry } = useInView(threshold(0.3));
  const showCouseDetail = idDetail => {
    courseCtx.courseDetailToggle();
    courseCtx.setCurrentCourse(idDetail);
  };
  checkViewIntersection(inView, entry);
  return (
    <Fragment>
      {courseCtx.courseDetailIsShow && (
        <Fragment>
          <Overlay closeModal={() => courseCtx.courseDetailToggle()} />
          <CourseDetail />
        </Fragment>
      )}
      <section
        className="courses blur"
        id="course"
        data-id-menu="menu-course"
        ref={ref}
      >
        <div className="courses-vd-block">
          <HeadingTitle title={t('Course')} />
          <h4 className="heading-4">{t('Some_course_studied')}</h4>
          <div className="courses-video">
            <video className="courses-video__content" loop autoPlay>
              <source src={videoMp4} type="video/mp4" />
              <source src={videoWebm} type="video/webm" />
              {t('Your_browser_is_not_supported')}
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
                detail={t('Detail')}
                clicked={() => showCouseDetail(course.courseDetail.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Courses;

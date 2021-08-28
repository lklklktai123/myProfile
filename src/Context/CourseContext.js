import React, { useState } from 'react';
import images from '../image/exportImage';
export const CourseContext = React.createContext({
  dataCourses: '',
  setCurrentCourse: value => {},
  currentCourse: 1,
  courseDetailIsShow: false,
  courseDetailToggle: () => {},
});
export const CourseContextProvider = props => {
  const [idDetailCourse, setIdDetailCourse] = useState(1);
  const [courseDetailShow, setCourseDetailShow] = useState(false);
  const dataCourses = [
    {
      image: 1,
      title: 'Css3 & Html5',
      address: 'Udemy.com',
      teacher: 'Jonas Schedtmann',
      hours: '28 total h',
      rating: '4.8(30,365)',
      unique: 'css',
      courseDetail: {
        id: 1,
        name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
        description:
          'The_most_advanced_and_modern_CSS_course_on_the_internet_master_flexbox_CSS_Grid_responsive_design_and_so_much_more',
        images: [
          images.course_css_1,
          images.course_css_2,
          images.course_css_3,
          images.course_css_4,
          images.course_css_5,
        ],
      },
    },
    {
      image: 2,
      title: 'Java Script',
      address: 'Udemy.com',
      teacher: 'Jonas Schedtmann',
      hours: '68.5 total h',
      rating: '4.7(106,321)',
      unique: 'js',
      courseDetail: {
        id: 2,
        name: 'The Complete JavaScript Course 2021: From Zero to Expert!',
        description: 'Has 65 (!!!) hours of video Is modern from the beginning',
        images: [
          images.course_js_1,
          images.course_js_2,
          images.course_js_3,
          images.course_js_4,
          images.course_js_5,
          images.course_js_6,
          images.course_js_7,
        ],
      },
    },
    {
      image: 3,
      title: 'ReactJs',
      address: 'Udemy.com',
      teacher: 'Maximilian',
      hours: '48 total h',
      rating: '4.6(113,895)',
      unique: 'reactjs',
      courseDetail: {
        id: 3,
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        description:
          'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more',
        images: [images.course_react_1, images.course_react_2],
      },
    },
  ];
  const setIdCourseHandler = value => {
    setIdDetailCourse(value);
  };
  const toggleShowHandler = () => {
    setCourseDetailShow(prevState => {
      return !prevState;
    });
  };
  return (
    <CourseContext.Provider
      value={{
        dataCourses: dataCourses,
        setCurrentCourse: setIdCourseHandler,
        currentCourse: idDetailCourse,
        courseDetailIsShow: courseDetailShow,
        courseDetailToggle: toggleShowHandler,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

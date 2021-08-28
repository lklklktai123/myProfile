import { FaGraduationCap } from 'react-icons/fa';
import Rating from './Rating/Rating';
import { CourseContext } from '../../../../Context/CourseContext';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import React, { useContext } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
const CourseDetail = () => {
  const { t } = useTranslation();
  const courseCtx = useContext(CourseContext);
  const sliderImageRef = useRef();
  const sliderRef = useRef();
  const courseDetailRef = useRef();

  const [dataCouseDetail] = courseCtx.dataCourses.filter(
    course => course.courseDetail.id === courseCtx.currentCourse
  );

  let curSlide = 0;
  let maxSlide = null;

  const goToSlide = function (slide) {
    const slides = sliderImageRef.current.childNodes;
    maxSlide = slides.length;
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${150 * (i - slide)}%)`)
    );
  };
  const nextSlide = () => {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  const showSLider = e => {
    sliderRef.current.classList.remove('hidden');
    courseDetailRef.current.classList.add('hidden');
    goToSlide(e.target.dataset.position);
  };
  const closeSLider = () => {
    sliderRef.current.classList.add('hidden');
    courseDetailRef.current.classList.remove('hidden');
  };
  return (
    <React.Fragment>
      <div className="course-detail" ref={courseDetailRef}>
        <div className="course-detail__title">{t('Course')}</div>
        <div className="course-detail__left">
          <div className="course-detail__left-block">
            <FaGraduationCap className="icon" />
          </div>
        </div>
        <div className="course-detail__right">
          <p className="course-detail__right-name">
            {/* {dataCouseDetail.courseDetail.name} */}
          </p>
          <p className="normal-text">{dataCouseDetail.address} (Website)</p>
          <p className="normal-text">
            {dataCouseDetail.teacher} ({t('teacher')})
          </p>
          <p className="normal-text">{dataCouseDetail.hours}</p>
          <Rating rating={dataCouseDetail.rating} text={t('rating')} />
          <p className="normal-text">{t('Decription')} :</p>
          <p className="normal-text">
            {t(dataCouseDetail.courseDetail.description)}
          </p>
        </div>
        <div className="course-detail__gallery">
          {dataCouseDetail.courseDetail.images.map((image, index) => (
            <div
              className="course-detail__gallery-image"
              key={`${dataCouseDetail.unique}-image-${index}`}
              onClick={e => showSLider(e)}
            >
              <img
                src={image}
                alt={`${dataCouseDetail.unique}-detail-${index}`}
                data-position={index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="slider hidden" ref={sliderRef}>
        <FaWindowClose className="slider__btn-close" onClick={closeSLider} />
        <div className="slider__btn-left">
          <FaArrowAltCircleLeft onClick={prevSlide} />
        </div>
        <div className="slider__main" ref={sliderImageRef}>
          {dataCouseDetail.courseDetail.images.map((image, index) => (
            <img
              key={`img-couse-${index}`}
              alt={`slider-${index}`}
              src={image}
              className={`slider_main-img img-course-${index}}`}
            />
          ))}
        </div>
        <div className="slider__btn-right">
          <FaArrowAltCircleRight onClick={nextSlide} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default CourseDetail;

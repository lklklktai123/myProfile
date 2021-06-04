import HeadingTitle from '../HeadingTitle/headingTitle';
import author from '../../image/author.jpg';
import AboutContent from './AboutContent/aboutContent';
import AboutSkill from './AboutSkill/aboutSkill';
import { FaDownload } from 'react-icons/fa';

const about = () => {
  return (
    <section className="about vertical-normal">
      <HeadingTitle title="ABOUT" />
      <h4 className="heading-4">Let me introduce my self</h4>
      <div className="about__avartar">
        <figure className="about__shape">
          <img alt="author" className="about__image" src={author} />
          <figcaption className="about__caption">Thành Tài</figcaption>
        </figure>
      </div>
      <div className="about__content normal-text">
        Psum dolor sit amet, consectetur adipisicing elit. Accusantium alias
        beatae deserunt facilis fuga inventore iure laborum magnam, nam nostrum
        nulla odio placeat possimus quae quaerat quos reiciendis sapiente
        soluta? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium alias. Psum dolor sit amet, consectetur adipisicing elit.
        Accusantium alias beatae deserunt facilis fuga inventore iure laborum
        magnam, nam nostrum nulla odio placeat possimus quae quaerat quos
        reiciendis sapiente soluta? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Accusantium alias.
      </div>
      <div className="about__profile">
        <AboutContent
          title="PROFILE"
          content="Nam nostrum nulla odio placeat possimus quae quaerat quos reiciendis
        sapiente soluta? Lorem ipsum dolor sit amet."
        />
        <AboutContent title="Full Name:" content="Phan Nguyễn Thành Tài" />
        <AboutContent title="Birth Date:" content="19/1/1996" />
        <AboutContent title="Job:" content="Front End Developer" />
        <AboutContent title="Website:" content="thanhtai-myProfile.com" />
        <AboutContent title="Skype:" content="thanhtailk96@gmail.com" />
        <AboutContent title="Email:" content="thanhtailk96@gmail.com" />
        <AboutContent title="Phone:" content="0965143263" />
      </div>

      <div className="about__skill">
        <AboutContent
          title="SKILLS"
          content="Accusantium alias beatae deserunt facilis fuga inventore iure laborum
          magnam, nam nostrum nulla odio placeat possimus quae quaerat quos
          reiciendis sapiente soluta? Lorem ipsum dolor sit amet."
        />
        <AboutSkill percent="60" title="REACTJS" />
        <AboutSkill percent="60" title="JAVASCRIPT" />
        <AboutSkill percent="50" title="JAVA" />
        <AboutSkill percent="70" title="HTML/CSS" />
      </div>
      <div className="about__btn">
        <button className="about__resume">
          <FaDownload className="about__resume-icon" />
          Dowload Resume
        </button>
      </div>
    </section>
  );
};
export default about;

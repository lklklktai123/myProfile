import HeadingTitle from '../HeadingTitle/headingTitle';
import author from '../../image/author.jpg';
import AboutContent from './AboutContent/aboutContent';
import AboutSkill from './AboutSkill/aboutSkill';
import { FaDownload } from 'react-icons/fa';

const about = () => {
  return (
    <section
      className="about vertical-normal blur"
      id="about"
      data-id-menu="menu-about"
    >
      <HeadingTitle title="ABOUT" />
      <h4 className="heading-4">Let me introduce my self</h4>
      <div className="about__avartar">
        <figure className="about__shape">
          <img alt="author" className="about__image" src={author} />
          <figcaption className="about__caption">Thành Tài</figcaption>
        </figure>
      </div>
      <div className="about__content normal-text">
        <p>Hi, My name is Phan Nguyen Thanh Tai.Please to meet you !</p>
        <p>And today, let me introduce myself</p>
        <p>
          I'm a Front End Developer .I'm graduated with a degree in Engineering
          at Nong Lam University Ho Chi Minh City
        </p>
        <p>
          When I was in school, I worked as an intern at Levinci and later as a
          freelancer.
        </p>
        <p>
          At the company, I have held the position of front end web developer in
          2 company projects and web api in another company's project.
        </p>
        <p>
          Now that I have graduated from school, I want to have a good
          environment to develop myself. Besides, I have a passion for web
          frontend development and I am confident that I will do well in this
          position.
        </p>
        <p>
          Thank you so much for your interest in me and I look forward to
          working with you !
        </p>
      </div>
      <div className="about__profile">
        <div className="about__profile-block">
          <h4 className="about-title">PROFILE</h4>
          <p className="normal-text">
            Nam nostrum nulla odio placeat possimus quae quaerat quos reiciendis
            sapiente soluta? Lorem ipsum dolor sit amet.
          </p>
        </div>
        <AboutContent title="Full Name:" content="Phan Nguyễn Thành Tài" />
        <AboutContent title="Birth Date:" content="19/1/1996" />
        <AboutContent
          title="Graduating:"
          content="Nong Lam University Ho Chi Minh City"
        />
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

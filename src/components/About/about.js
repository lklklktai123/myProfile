import HeadingTitle from '../HeadingTitle/headingTitle';
import author from '../../image/author.jpg';
import AboutContent from './AboutContent/aboutContent';
import AboutSkill from './AboutSkill/aboutSkill';
import { FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      className="about vertical-normal blur"
      id="about"
      data-id-menu="menu-about"
    >
      <HeadingTitle title={t('About')} />
      <h4 className="heading-4">{t('Let_me_introduce_my_self')}</h4>
      <div className="about__avartar">
        <figure className="about__shape">
          <img alt="author" className="about__image" src={author} />
          <figcaption className="about__caption">Thành Tài</figcaption>
        </figure>
      </div>
      <div className="about__content normal-text">
        <p>{t('Hi_My_name_is_Phan_Nguyen_Thanh_Tai_Please_to_meet_you')}</p>
        <p>{t('And_today_let_me_introduce_myself')}</p>
        <p>
          {t(
            'Im_a_Front_End_Developer_Im_graduated_with_a_degree_in_Engineering_at_Nong_Lam_University_Ho_Chi_Minh_City'
          )}
        </p>
        <p>
          {t(
            'When_I_was_in_school_I_worked_as_an_intern_at_Levinci_and_later_as_a_freelancer'
          )}
        </p>
        <p>
          {t(
            'At_the_company_I_have_held_the_position_of_front_end_web_developer_and_web_api_in_2_projects_of_the_company'
          )}
        </p>
        <p>
          {t(
            'Now_that_I_have_graduated_from_school_I_want_to_have_a_good_environment_to_develop_myself_Besides_I_have_a_passion_for_web _frontend_development_and_I_am_confident_that_I_will_do_well_in_thisposition.'
          )}
        </p>
        <p>
          {t(
            'Thank_you_so_much_for_your_interest_in_me_and_I_look_forward_to_working_with_you_as_soon_as'
          )}
        </p>
      </div>
      <div className="about__profile">
        <div className="about__profile-block">
          <h4 className="about-title">{t('PROFILE')}</h4>
          <p className="normal-text">{t('Information_detail_to_contact_me')}</p>
        </div>
        <AboutContent
          title={`${t('Full_Name')} :`}
          content="Phan Nguyễn Thành Tài"
        />
        <AboutContent title={`${t('Birth_Date')} :`} content="19/1/1996" />
        <AboutContent
          title={`${t('Graduating')} :`}
          content={t('Nong_Lam_University_Ho_Chi_Minh_City')}
        />
        <AboutContent title={`${t('Job')} :`} content="Front End Developer" />
        <AboutContent title="Website:" content="thanhtai-myProfile.com" />
        <AboutContent title="Skype:" content="thanhtailk96@gmail.com" />
        <AboutContent title="Email:" content="thanhtailk96@gmail.com" />
        <AboutContent title={`${t('Phone')} :`} content="0965143263" />
      </div>

      <div className="about__skill">
        <AboutContent
          title={`${t('SKILLS')}`}
          content={t('Information_detail_of_my_skills')}
        />
        <AboutSkill percent="60" title="REACTJS" />
        <AboutSkill percent="60" title="JAVASCRIPT" />
        <AboutSkill percent="50" title="JAVA" />
        <AboutSkill percent="70" title="HTML/CSS" />
      </div>
      <div className="about__btn">
        <button className="about__resume">
          <FaDownload className="about__resume-icon" />
          {t('Dowload_Resume')}
        </button>
      </div>
    </section>
  );
};
export default About;

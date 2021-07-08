import Timeline from '../Experience/TimeLine/timeline';
import HeadingTitle from '../HeadingTitle/headingTitle';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <section
      className="education vertical-normal blur"
      id="education"
      data-id-menu="menu-education"
    >
      <HeadingTitle title={t('Education')} />
      <h4 className="heading-4">{t('Some_projects_when_i_was_study')}</h4>
      <div className="education__timeline">
        <Timeline
          nameIcon="graduation"
          projectTitle="My Profile"
          position="Udemy.com"
          isRight={false}
          content={t(
            'Create_website_my_profile_use_htm5_css3_reactjs_hook_usecontext'
          )}
          website="https://thanhtai-forkify.netlify.app/"
          gitHup="https://github.com/lklklktai123/forkify"
          dateTime="25/5/2021- Till Now"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Forkify Website create recipes and search for recipes"
          position="Udemy.com"
          isRight={true}
          content={t(
            'Read_Api_and_convert_teamplate_from_html_css_to_reactjs_using_some_hook_redux_scss_axios_tricks'
          )}
          website="https://thanhtai-forkify.netlify.app/"
          gitHup="https://github.com/lklklktai123/forkify"
          linkKey="https://forkify-api.herokuapp.com/phrases.html"
          dateTime="1/5/2021 - 22/5/2021"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Website Sale"
          position="Nong Lam University"
          isRight={false}
          content={t(
            'Teamwork_building_sales_website_use_html_css_javascript_java_web'
          )}
          dateTime="09/2019 - 2/2020"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Game Caro"
          position="Nong Lam University"
          isRight={true}
          content={t(
            'Teamwork_building_aplication_game_caro_with_java_programming'
          )}
          dateTime="02/2019 - 6/2020"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Database for website"
          position="Nong Lam University"
          isRight={false}
          content={t('Teamwork_building_Database_for_website_use_SQL_server')}
          dateTime="02/2018 - 6/2018"
        />
      </div>
    </section>
  );
};
export default Education;

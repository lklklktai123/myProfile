import HeadingTitle from '../HeadingTitle/headingTitle';
import Timeline from './TimeLine/timeline';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import {
  checkViewIntersection,
  threshold,
} from '../../shared/utilities/helper';
const Experience = () => {
  const { t } = useTranslation();
  const { ref, inView, entry } = useInView(threshold());
  checkViewIntersection(inView, entry);
  return (
    <section
      className="experience vertical-normal blur"
      id="experience"
      data-id-menu="menu-experience"
      ref={ref}
    >
      <HeadingTitle title="EXPERIENCE" />
      <h4 className="heading-4">{t('Some_real_experiences')}</h4>
      <div className="experience__timeline">
        <Timeline
          projectTitle="Harmony Ltd."
          position="Software Engineer"
          isRight={false}
          content={t(
            'Build_Website_Api_for_Mobile_Application_use_Net_core_2_2_and_SQL_server'
          )}
          dateTime="1/2020 - 6/2020"
        />
        <Timeline
          projectTitle="Harmony Ltd."
          position="Front end developer"
          isRight={true}
          content={t(
            'Create_a_landing_page_according_to_the_design_for_the_company_application_use_Html5_Css3_Bootstrap3_javascript'
          )}
          dateTime="10/2019 - 12/2019"
        />
      </div>
    </section>
  );
};
export default Experience;

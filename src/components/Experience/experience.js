import HeadingTitle from '../HeadingTitle/headingTitle';
import Timeline from './TimeLine/timeline';
const experience = () => {
  return (
    <section
      className="experience vertical-normal blur"
      id="experience"
      data-id-menu="menu-experience"
    >
      <HeadingTitle title="EXPERIENCE" />
      <h4 className="heading-4">Some real experiences</h4>
      <div className="experience__timeline">
        <Timeline
          projectTitle="Harmony Ltd."
          position="Software Engineer"
          isRight={false}
          content="Build Website Api for Mobile Application use .Net core 2.2 and SQL server"
          dateTime="1/2020 - 6/2020"
        />
        <Timeline
          projectTitle="Harmony Ltd."
          position="Front end developer"
          isRight={true}
          content="Create a landing page according to the design for the company's application use Html5 Css3,Bootstrap,javascript"
          dateTime="10/2019 - 12/2019"
        />
      </div>
    </section>
  );
};
export default experience;

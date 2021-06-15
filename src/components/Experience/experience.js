import HeadingTitle from '../HeadingTitle/headingTitle';
import Timeline from './TimeLine/timeline';
const experience = () => {
  return (
    <section className="experience vertical-normal" id="experience">
      <HeadingTitle title="EXPERIENCE" />
      <h4 className="heading-4">Some real experiences</h4>
      <div className="experience__timeline">
        <Timeline
          projectTitle="Envato Ltd."
          position="Software Engineer"
          isRight={false}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          optio, dolorum provident rerum aut hic quasi placeat iure tempora
          laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
          ut."
          dateTime="January 2014 - Till Now"
        />
        <Timeline
          projectTitle="Envato Ltd."
          position="Software Engineer"
          isRight={true}
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          optio, dolorum provident rerum aut hic quasi placeat iure tempora
          laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
          ut."
          dateTime="January 2014 - Till Now"
        />
      </div>
    </section>
  );
};
export default experience;

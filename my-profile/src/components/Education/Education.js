import Timeline from '../Experience/TimeLine/timeline';
import HeadingTitle from '../HeadingTitle/headingTitle';
const education = () => {
  return (
    <section className="education">
      <HeadingTitle title="EDUCATION" />
      <h4 className="heading-4">
        Some project when studied and course online{' '}
      </h4>
      <div className="education__timeline">
        <Timeline
          nameIcon="graduation"
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
          nameIcon="graduation"
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
export default education;

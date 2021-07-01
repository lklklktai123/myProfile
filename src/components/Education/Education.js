import Timeline from '../Experience/TimeLine/timeline';
import HeadingTitle from '../HeadingTitle/headingTitle';
const education = () => {
  return (
    <section
      className="education vertical-normal blur"
      id="education"
      data-id-menu="menu-education"
    >
      <HeadingTitle title="EDUCATION" />
      <h4 className="heading-4">Some projects when i was study</h4>
      <div className="education__timeline">
        <Timeline
          nameIcon="graduation"
          projectTitle="My Profile"
          position="Udemy.com"
          isRight={false}
          content="Create website my-profile use htm5,css3(scss,animation,cssgrid,...),
          reactjs(hook,usecontext)"
          website="https://thanhtai-forkify.netlify.app/"
          gitHup="https://github.com/lklklktai123/forkify"
          dateTime="25/5/2021- Till Now"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Forkify Website create recipes and search for recipes"
          position="Udemy.com"
          isRight={true}
          content="Read Api and convert teamplate from html ,css to reactjs , using some hook,redux,scss,axios tricks"
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
          content="Teamwork building sales website use
          html,css,javascript,java web."
          dateTime="09/2019 - 2/2020"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Game Caro"
          position="Nong Lam University"
          isRight={true}
          content="Teamwork,building aplication game caro with java programming"
          dateTime="02/2019 - 6/2020"
        />
        <Timeline
          nameIcon="graduation"
          projectTitle="Database for website"
          position="Nong Lam University"
          isRight={false}
          content="Teamwork building Database for website use SQL server
          html,css,javascript,java web."
          dateTime="02/2018 - 6/2018"
        />
      </div>
    </section>
  );
};
export default education;

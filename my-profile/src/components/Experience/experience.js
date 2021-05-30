import HeadingTitle from '../HeadingTitle/headingTitle';

const experience = () => {
  return (
    <section className="experience">
      <HeadingTitle title="EXPERIENCE" />
      <h4 className="heading-4">
        Hay de toi gioi thieu mot so trai nghiem ve ban than minh
      </h4>
      <div className="experience__timeline">
        <div className="experience__timeline-line"></div>
        <div className="experience__timeline-block"></div>
        <div className="experience__timeline-content">
          <h4 className="project-title">Envato Ltd.</h4>
          <p className="normal-text position-title">Software Engineer</p>
          <p className="normal-text ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            optio, dolorum provident rerum aut hic quasi placeat iure tempora
            laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis
            qui ut.
          </p>
        </div>
      </div>
    </section>
  );
};
export default experience;

const parallax = () => {
  const hireMeHandler = () => {
    const contact = document.querySelector('#contact');
    contact.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="parallax" id="parallax">
      <div className="parallax__container">
        <h4 className="parallax__title">
          Are you wanna work with me.You can hire me
        </h4>
        <button className="parallax__btn" onClick={hireMeHandler}>
          Hire Me
        </button>
      </div>
    </div>
  );
};
export default parallax;

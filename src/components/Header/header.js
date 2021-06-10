import Icons from './Icons/Icons';

const header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-text">
          <h2 className="heading-2">Hi,I am</h2>
          <h1 className="heading-1">Phan Nguyễn Thành Tài</h1>
          <h2 className="heading-2">
            I am a <span>Front End Developer</span>
          </h2>
        </div>
        <div className="header__container-btn move-in-bottom">
          <Icons />
        </div>

        <button className="btn-detail">Detail</button>
      </div>
    </header>
  );
};
export default header;

import images from '../../image/exportImage';

const footer = () => {
  return (
    <footer className="footer">
      <img src={images.logo} alt="logo" className="footer__img" />
      <p className="normal-text footer__coppyright">
        © Copyright 2021 by{' '}
        <span style={{ textDecoration: 'underline' }}>ThanhTai</span>
        .Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
      <p className="footer__coppyright"></p>
    </footer>
  );
};
export default footer;

import { BiMap } from 'react-icons/bi';
const address = () => {
  return (
    <div className="contact__container-address">
      <BiMap className="address__icon" />
      <h4 className="address__title">Contact Address</h4>
      <p className="normal-text">
        119/49A Nguyen Hong Dao Street, Ward 14, Tan Binh District,Ho Chi Minh
        City
      </p>
      <p className="normal-text vertical-top-small">
        Email:thanhtailk96@gmail.com
      </p>
      <p className="normal-text">Phone:0965143263</p>
    </div>
  );
};
export default address;

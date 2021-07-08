import { BiMap } from 'react-icons/bi';

const address = props => {
  return (
    <div className="contact__container-address">
      <BiMap className="address__icon" />
      <h4 className="address__title">{props.title}</h4>
      <p className="normal-text address__text">{props.address}</p>
      <p className="normal-text address__text">{props.email}</p>
      <p className="normal-text">{props.phone}</p>
    </div>
  );
};
export default address;

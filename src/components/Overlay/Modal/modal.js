import { FaWindowClose, FaCheck, FaTimes } from 'react-icons/fa';

const modal = props => {
  let modal = (
    <div className="modal">
      <FaWindowClose className="modal__btn" onClick={props.clicked} />
      <div className="modal__block success">
        <FaCheck className="modal__icon" />
      </div>

      <p className="modal__title">Congratulation!</p>
      <p className="modal__content normal-text">Email sent successfully.</p>
    </div>
  );
  if (props.error)
    modal = (
      <div className="modal">
        <FaWindowClose className="modal__btn" onClick={props.clicked} />
        <div className="modal__block error">
          <FaTimes className="modal__icon" />
        </div>

        <p className="modal__title">Error!</p>
        <p className="modal__content">something went wrong!</p>
      </div>
    );
  return modal;
};
export default modal;

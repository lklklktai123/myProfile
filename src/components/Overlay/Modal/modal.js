import { useContext } from 'react';
import { FaWindowClose, FaCheck, FaTimes } from 'react-icons/fa';
import { ErrorContext } from '../../../Context/error-context';
const Modal = props => {
  const errorCtx = useContext(ErrorContext);
  const closeModalHandler = () => {
    props.closeModal();
    window.location.reload();
  };
  let modal = (
    <div className="modal">
      <FaWindowClose className="modal__btn" onClick={closeModalHandler} />
      <div className="modal__block success">
        <FaCheck className="modal__icon" />
      </div>

      <p className="modal__title">Congratulation!</p>
      <p className="modal__content normal-text">Email sent successfully.</p>
    </div>
  );
  if (errorCtx.error)
    modal = (
      <div className="modal">
        <FaWindowClose className="modal__btn" onClick={closeModalHandler} />
        <div className="modal__block error">
          <FaTimes className="modal__icon" />
        </div>

        <p className="modal__title">Error!</p>
        <p className="modal__content">something went wrong!</p>
      </div>
    );
  return modal;
};
export default Modal;

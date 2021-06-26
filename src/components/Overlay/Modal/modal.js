import { useContext } from 'react';
import { FaWindowClose, FaCheck, FaTimes } from 'react-icons/fa';
import { ErrorContext } from '../../../Context/error-context';
import { closeModal } from '../../../shared/utilities/helper';
const Modal = () => {
  const errorCtx = useContext(ErrorContext);
  let modal = (
    <div className="modal hidden">
      <FaWindowClose className="modal__btn" onClick={closeModal} />
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
        <FaWindowClose className="modal__btn" onClick={closeModal} />
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

import Modal from './Modal/modal';
import { useContext } from 'react';
import { ErrorContext } from '../../Context/error-context';
const Overlay = props => {
  const errorCtx = useContext(ErrorContext);
  const closeModal = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('hidden');
    window.location.reload();
  };

  return (
    <div className="overlay hidden">
      <Modal clicked={closeModal} error={errorCtx.error} />
    </div>
  );
};
export default Overlay;

import { closeModal } from '../../shared/utilities/helper';
const Overlay = () => {
  return <div className="overlay hidden" onClick={closeModal}></div>;
};
export default Overlay;

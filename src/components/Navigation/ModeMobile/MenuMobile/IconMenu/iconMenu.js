import { useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { ErrorContext } from '../../../../../Context/error-context';
const IconMenu = props => {
  // const errCtx = useContext(ErrorContext);
  const labelRef = useRef();
  const icon = props.check ? (
    <AiOutlineMenu className="mode-mobile__icon" />
  ) : (
    <AiOutlineClose className="mode-mobile__icon" />
  );
  const toggleHandler = () => {
    // console.log(props.check);
    // labelRef.current.checked = false;
    props.clicked();
    // errCtx.toggleIcon(true);
  };
  return (
    <label
      htmlFor="navi-toggle"
      className="mode-mobile__button"
      onClick={toggleHandler}
      ref={labelRef}
    >
      {icon}
    </label>
  );
};
export default IconMenu;

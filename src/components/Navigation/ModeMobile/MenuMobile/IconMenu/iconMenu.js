import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const iconMenu = props => {
  const icon = props.check ? (
    <AiOutlineMenu className="mode-mobile__icon" />
  ) : (
    <AiOutlineClose className="mode-mobile__icon" />
  );
  return (
    <label
      htmlFor="navi-toggle"
      className="mode-mobile__button"
      onClick={props.clicked}
    >
      {icon}
    </label>
  );
};
export default iconMenu;

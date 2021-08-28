import { useRef } from 'react';
import Logo from './Logo/Logo';
import Menu from './Menus/Menus';
const Navigation = props => {
  const navigationRef = useRef();
  return (
    <div className="navigation hidden" ref={navigationRef}>
      <Logo />
      <Menu />
    </div>
  );
};
export default Navigation;

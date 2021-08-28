import { useRef } from 'react';
import { ScrollToHandler } from '../../../../shared/utilities/helper';
const Menu = props => {
  const linkRef = useRef();
  return (
    <li id={props.idMenu}>
      <a
        href={`#${props.link}`}
        onClick={e => ScrollToHandler(e, linkRef.current.getAttribute('href'))}
        ref={linkRef}
      >
        {props.name}
      </a>
    </li>
  );
};
export default Menu;

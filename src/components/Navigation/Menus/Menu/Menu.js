const menu = props => {
  return (
    <li id={props.idMenu}>
      <a href={`#${props.link}`} onClick={props.clicked}>
        {props.name}
      </a>
    </li>
  );
};
export default menu;

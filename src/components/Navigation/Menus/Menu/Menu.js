const menu = props => {
  return (
    <li>
      <a href={`#${props.link}`} onClick={props.clicked}>
        {props.name}
      </a>
    </li>
  );
};
export default menu;

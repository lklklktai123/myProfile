import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
const BackDrop = props => {
  return <div className="overlay" onClick={props.onConfirm}></div>;
};
const Overlay = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.closeModal} />,
        document.getElementById('backdrop-root')
      )}
    </Fragment>
  );
};
export default Overlay;

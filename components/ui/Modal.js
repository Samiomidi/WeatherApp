import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Backdrop from "./Backdrop";
function Modal(props) {
  const [showModal, setShowModal] = useState(props.showModal);
  function toggleModalHandler() {
    setShowModal(!showModal);
  }
  return (
    <Fragment>
      {showModal && <Backdrop onClick={toggleModalHandler} />}
      {showModal &&
        ReactDOM.createPortal(
          <div className={classes.back}>
            <div
              className={`${props.className} ${classes.div}`}
              style={props.style}
            >
              <AiFillCloseCircle
                className={`${classes.icon} ${props.iconClassName}`}
                style={props.iconStyle}
                onClick={toggleModalHandler}
              />
              {props.children}
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </Fragment>
  );
}

export default Modal;

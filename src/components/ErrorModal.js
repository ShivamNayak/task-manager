import React from "react";
import ReactDOM from "react-dom";
import "./Button";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";

import Player from "./Player";

const ErrorModal = (props) => {
  const clickHandler = (event) => {
    props.onConfirm();
  };
  const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header>
          <h2 className={classes.header}>{props.errHeader}</h2>
        </header>
        <div className={classes.content}>{props.errMessage}</div>
        <footer className={classes.action}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {/* <div className={classes.backdrop} onClick={props.onConfirm}></div> */}
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          errHeader={props.errHeader}
          errMessage={props.errMessage}
        />,
        document.getElementById("modalOverlay")
      )}
    </>
  );
};

export default ErrorModal;

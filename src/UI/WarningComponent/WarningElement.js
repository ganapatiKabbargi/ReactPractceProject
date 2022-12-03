import React from "react";
import ReactDOM from "react-dom";
import ButtonElement from "../ButtonComponent/ButtonElement";
import Card from "../CardComponent/Card";
import "./WarningElement.css";

const WarningElement = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className="modal">
        <div className="header">
          <h2>{props.title}</h2>
        </div>
        <div className="content">{props.message}</div>

        <div className="actions">
          <ButtonElement className="btn" onClick={props.onConfirm}>
            Okay
          </ButtonElement>
        </div>
      </Card>
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default WarningElement;

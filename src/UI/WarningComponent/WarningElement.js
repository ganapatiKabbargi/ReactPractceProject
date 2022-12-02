import React from "react";
import ButtonElement from "../ButtonComponent/ButtonElement";
import Card from "../CardComponent/Card";
import "./WarningElement.css";

const WarningElement = (props) => {
  //   const clickHandler = () => {
  //     props.onClicking();
  //   };
  return (
    <div className="backdrop" onClick={props.onConfirm}>
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
    </div>
  );
};

export default WarningElement;

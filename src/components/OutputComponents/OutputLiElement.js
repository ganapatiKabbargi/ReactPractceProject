import React from "react";
import "./OutputLiElement.css";

const OutputLiElement = (props) => {
  return (
    <li className="user">
      {props.name} {`(${props.age} years Old)`}
    </li>
  );
};

export default OutputLiElement;

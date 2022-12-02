import React from "react";
import OutputLiElement from "./OutputLiElement";
import Card from "../../UI/CardComponent/Card";
import "./OutputUlElement.css";

const OutputUIElement = (props) => {
  return (
    <Card className="userList">
      {props.userList.map((user) => {
        return (
          <OutputLiElement
            key={Math.random()}
            name={user.name}
            age={user.age}
          ></OutputLiElement>
        );
      })}
    </Card>
  );
};

export default OutputUIElement;

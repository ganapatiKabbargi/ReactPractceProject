import React from "react";
import InputForm from "./InputForm";
import "./InputElement.css";

const InputElement = (props) => {
  const userDetailHandler = (userDetails) => {
    props.onAddDetails(userDetails);
  };
  return (
    <div className="inputEl">
      <InputForm onAdd={userDetailHandler}></InputForm>
    </div>
  );
};

export default InputElement;

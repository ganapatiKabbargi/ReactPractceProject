import React from "react";
import InputForm from "./InputForm";
import Wrapper from "../Helpers/Wrapper";
import "./InputElement.css";

const InputElement = (props) => {
  const userDetailHandler = (userDetails) => {
    props.onAddDetails(userDetails);
  };
  return (
    <Wrapper>
      <div className="inputEl">
        <InputForm onAdd={userDetailHandler}></InputForm>
      </div>
    </Wrapper>
  );
};

export default InputElement;

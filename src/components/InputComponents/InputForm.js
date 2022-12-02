import React, { useState } from "react";
import ButtonElement from "../../UI/ButtonComponent/ButtonElement";
import Card from "../../UI/CardComponent/Card";
import WarningElement from "../../UI/WarningComponent/WarningElement";
import "./InputForm.css";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [notValid, setnotValid] = useState();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setnotValid({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
      return;
    }

    if (+enteredAge < 1) {
      setnotValid({
        title: "Invalid Age",
        message: "Please enter valid age (age>0)",
      });
      return;
    }

    const userDetails = {
      name: enteredName,
      age: enteredAge,
    };
    props.onAdd(userDetails);
    setEnteredName("");
    setEnteredAge("");
  };

  const removeErrorHandler = () => {
    setnotValid(null);
  };
  return (
    <Card>
      {notValid && (
        <WarningElement
          title={notValid.title}
          message={notValid.message}
          onConfirm={removeErrorHandler}
        ></WarningElement>
      )}
      <form onSubmit={submitHandler}>
        <div className="main-div">
          <div className="username-div">
            <label>Username</label>
            <input
              value={enteredName}
              type="text"
              onChange={nameChangeHandler}
            />
          </div>
          <div className="age-div">
            <label>Age(years)</label>
            <input
              value={enteredAge}
              type="number"
              step="1"
              onChange={ageChangeHandler}
            />
          </div>
          <ButtonElement className="btn" type="submit">
            Add user
          </ButtonElement>
        </div>
      </form>
    </Card>
  );
};

export default InputForm;

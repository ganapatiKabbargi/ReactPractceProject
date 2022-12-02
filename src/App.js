import React, { useState } from "react";
import InputElement from "./components/InputComponents/InputElement";
import OutputUIElement from "./components/OutputComponents/OutputUlElement";
import "./App.css";

function App() {
  const [enteredDetails, setEnteredDetails] = useState([]);

  const userDetailValueHandler = (userDetails) => {
    setEnteredDetails((previousDetails) => {
      let updatedDetails = [...previousDetails, userDetails];
      return updatedDetails;
    });
  };

  return (
    <div>
      <section className="inputElement">
        <InputElement onAddDetails={userDetailValueHandler}></InputElement>
      </section>
      <section className="useListSection">
        <OutputUIElement userList={enteredDetails}></OutputUIElement>
      </section>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./addUsers.module.css";

function AddUsers(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandeler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setError({
        title: "Invalid Name",
        message: "Enter valid username",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Plz Enter a valid username (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameChangeHandeler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandeler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandeler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandeler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            placeholder="Username"
            onChange={userNameChangeHandeler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            placeholder="Age"
            onChange={userAgeChangeHandeler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUsers;

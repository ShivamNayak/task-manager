import react, { useState } from "react";
import "./CourseAdd.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const CourseAdd = (props) => {
  const [newTaskObject, setNewTaskObject] = useState("");
  const [error, setError] = useState();
  const taskChangeHandler = (event) => {
    setNewTaskObject({ id: props.items + 1, name: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(event);
    event.target[0].value = "";
    if (newTaskObject) props.adderFunction(newTaskObject);
    else {
      // alert("Please enter a task first");
      setError({
        errHeader: "No input",
        errContent: "Please enter a task first",
      });
    }
    setNewTaskObject("");
  };
  const resetError = () => {
    setError("");
  };

  return (
    <div className="goal-adder">
      {error && (
        <ErrorModal
          errHeader={error.errHeader}
          errMessage={error.errContent}
          onConfirm={resetError}
        />
      )}
      <h2 className="header">Set your Goals</h2>
      <form onSubmit={submitHandler} className="form">
        <input className="placeholder" onChange={taskChangeHandler}></input>
        <Button type="submit">Add a task</Button>
      </form>
    </div>
  );
};
export default CourseAdd;

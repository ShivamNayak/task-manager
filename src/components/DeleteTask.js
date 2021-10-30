import react, { useState } from "react";
import "./ListCourse.css";
const DeleteTask = (props) => {
  //   const [taskToDel, setTaskToDel] = useState("");
  const clickHandler = (event) => {
    props.takeTaskId(props.items.id);

    // setTaskToDel(props.items.id);
  };
  // console.log(props.toRender);
  if (props.toRender)
    return (
      <div className="task anime-fade-in" onClick={clickHandler}>
        <p className="taskContent">{props.items.name}</p>
      </div>
    );
  else
    return (
      <div className="task anime-fade-out" onClick={clickHandler}>
        <p className="taskContent">{props.items.name}</p>
      </div>
    );
  // <div className="task anime-fade-in" onClick={clickHandler}>
  //   <p className="taskContent">{props.items.name}</p>
  // </div>
};
export default DeleteTask;

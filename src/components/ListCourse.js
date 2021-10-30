import react from "react";
import "./DeleteTask";
import DeleteTask from "./DeleteTask";
import "./ListCourse.css";
import "./Congrats.css";
import { useState } from "react/cjs/react.development";

const ListCourse = (props) => {
  //   const [deleteItem, setDelItem] = useState("");
  const taskToDel = (idToDel) => {
    props.delTaskFunction(idToDel);

    const itemToDel = props.items.filter((x) => x.id === idToDel);
    props.setDelItemToFade(itemToDel);
    // setDelItem(
    //   props.items.filter((x) => {
    //     x.id = id;
    //   })
    // );
    // console.log("del item" + deleteItem);
  };
  //   console.log(props.length);
  //   console.log("bool: " + props.toRender + " type: " + typeof props.toRender);
  //   console.log(props.toRender && true);

  //   if (props.items.length === 0 && props.toRender)
  //   if (props.toRender === "1")
  if (props.items.length == 0)
    return (
      <div className="finisher-container anime">
        <p className="finisher-text">
          Congratulations on completing all your tasks!
        </p>
      </div>
    );
  else
    return props.items.map((x) => (
      // {/* DeleteTask components doesn't deletes, it renders existing task and take the id of task to be deleted*/}
      <DeleteTask
        items={x}
        key={x.id}
        takeTaskId={taskToDel}
        toRender={props.toRender}
        // setDelItemToFade={setDelItem}
      />
      // {/* <p className="taskContent">{x.name}</p> */}
    ));
  //   <DeleteTask items={y} key={y.id} fadeTask={true} />;
  // return (
  //   (props.items.length === 0 && props.toRender && (
  //     <div className="finisher-container anime">
  //       <p className="finisher-text">
  //         Congratulations on completing all your tasks!
  //       </p>
  //     </div>
  //   )) ||
  //   props.items.map((x) => (
  //     // {/* DeleteTask components doesn't deletes, it renders existing task and take the id of task to be deleted*/}
  //     <DeleteTask
  //       items={x}
  //       key={x.id}
  //       takeTaskId={taskToDel}
  //       toRender={props.toRender}
  //       // setDelItemToFade={setDelItem}
  //     />
  //     // {/* <p className="taskContent">{x.name}</p> */}
  //   ))
  // );
};
export default ListCourse;

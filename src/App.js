import "./App.css";
import { useState } from "react";
import CourseAdd from "./components/CourseAdd";
import ListCourse from "./components/ListCourse";

function App() {
  const [existingTasks, setExistingTasks] = useState([
    { id: 1, name: "Click on me if you have finished" },
  ]);
  const [deleteItem, setDelItem] = useState("");

  const TasktoDel = (taskId) => {
    const newTaskSet = existingTasks.filter((element, index, arr) => {
      return element.id !== taskId;
    });

    setExistingTasks(newTaskSet);
    // if (deleteItem.length !== 0)
    //   console.log(
    //     "del item id: " + deleteItem[0].id + ", name: " + deleteItem[0].name
    //   );
    //helloworlds
  };

  const newTaskAdder = (newTask) => {
    setExistingTasks((previousState) => [...previousState, newTask]);
  };

  return (
    <div className="App">
      <CourseAdd adderFunction={newTaskAdder} items={existingTasks.length} />
      <ListCourse
        items={existingTasks}
        delTaskFunction={TasktoDel}
        setDelItemToFade={setDelItem}
        toRender={true}
      />
      {/* <ListCourse
        items={existingTasks}
        delTaskFunction={TasktoDel}
        setDelItemToFade={setDelItem}
        toRender={true}
      />
      {true && (
        <ListCourse
          items={deleteItem}
          // delTaskFunction={TasktoDel}
          // setDelItemToFade={setDelItem}
          toRender={false}
        /> */}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Heaber from "./Heaber";
import Form from "./Form";
import TasksList from "./TasksList";
import "./Add.css";

const Add = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Heaber />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        </div>
        <div>
          <TasksList
            tasks={tasks}
            setTasks={setTasks}
            setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Add;

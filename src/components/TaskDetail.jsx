import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  // console.log(tasks);

  const { id } = useParams();

  console.log("id==>", typeof id);

  const { tasks } = useContext(TaskContext);

  console.log(tasks);

  const task = tasks.find((task)=> task.id === Number(id))

  console.log(task)

  return (
    <div>
     {task && `Task ${task?.name} ${task?.completed ? "(Completed)" : "(Pending)"}`}
     {!task && `No data found`}
    </div>
  );
};

export default React.memo(TaskDetail);

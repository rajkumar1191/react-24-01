const TaskList = ({ title, tasks, deleteTask, markTask }) => {
  console.log(tasks);

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            Task {index + 1}: {task.name}{" "}
            {task.completed ? "(Completed)" : "(Pending)"}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => markTask(index)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

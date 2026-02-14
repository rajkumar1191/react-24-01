import React, { useContext, useReducer, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

const initialState = {
  name: "",
  // id: "",
  // completed: false,
  error: "",
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value, error: "" };
    case "SET_ERROR":
      return { ...state, error: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const AddTask = () => {
  const nameRef = useRef();
  // const idRef = useRef();

  const { addTask } = useContext(TaskContext)

  // const [taskName, setTaskName] = useState("");
  const [state, dispatch] = useReducer(reducerFn, initialState);
  // const id = useId();

  // console.log("Generated ID Add Task:", id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name.trim()) {
      dispatch({ type: "SET_ERROR", value: "Task name cannot be empty" });
      nameRef.current.focus();
      return;
    }

    // if (!state.id.trim()) {
    //   dispatch({ type: "SET_ERROR", value: "Task ID cannot be empty" });
    //   idRef.current.focus();
    //   return;
    // }

    // if (state.completed === "") {
    //   dispatch({
    //     type: "SET_ERROR",
    //     value: "Please specify if the task is completed or not",
    //   });
    //   return;
    // }

    addTask(state.name);
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
          placeholder="Task Name"
          ref={nameRef}
        />

        {/* <input
          type="text"
          value={state.id}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "id",
              value: e.target.value,
            })
          }
          placeholder="Task ID"
          ref={idRef}
        />

        <label>
          Completed:
          <input
            type="checkbox"
            checked={state.completed}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "completed",
                value: e.target.value,
              })
            }

            // ref={ref}
          />
        </label> */}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default React.memo(AddTask);

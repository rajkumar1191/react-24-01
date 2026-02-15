import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TaskProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </Provider>
  </StrictMode>,
);

/*

ES6 Features are used in React codebase
1. Variables (let, const)
2. Arrow Functions
  function add(a, b) {
    return a + b;
  }
  // can be written as
  const add = (a, b) => {
    return a + b
    };
3. Template Literals 
  const name = "John";
  const greeting = `Hello, ${name}!`;

4. Destructuring Assignment
  const obj = {
    a:1,
    b:2,
    c:3,
    d:4
  }

  const { c } = obj;

  console.log(c);

  const arr = [1,2,3,4,5];

  const [a,b,d] = arr;

  console.log(a,b,d)

5. Default Parameters
  
  function displayName(name="Guest"){
    console.log(`hello ${name}`)
  }

  displayName('Raj');
  displayName()

6. Spread and Rest Operators
  //Spread Operator
  const arr1 = [1,2,3];
  const arr2 = [...arr1,4,5,6];
  console.log(arr2);

  const obj1 = {
    name: "Raj",
    loc: "Chennai"
  }

  const obj2 = {
    ...obj1,
    phone:8508585743
  }

  console.log(obj2)

  //Rest Operator
  function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum(1,2,3,4,5));

7. Array Methods (map, filter, reduce)
  const numbers = [1,2,3,4,5];

  const doubled = numbers.map(num => num * 2);
  console.log(doubled);

  const numbers = [
{
    name: "Raj",
    loc: "Chennai"
  },
{
    name: "Raj",
    loc: "Chennai"
  },
{
    name: "Raj",
    loc: "Chennai"
  },
{
    name: "Raj",
    loc: "Chennai"
  }];

  const doubled = numbers.map((num, index) => {
    return {...num, id: index+1}
  });
  console.log(doubled);
  
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log(evenNumbers);

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

8. Modules (import, export)
  //math.js
  export function add(a,b){
    return a + b;
  }
    
  export function subtract(a,b){
    return a - b;
  }

  //main.js
  import { add, subtract } from './math.js';

  console.log(add(5,3));
  console.log(subtract(5,3));


  Task Manager Application
  1. Showing a list of tasks 
  2. Adding a new task 
  3. Deleting a task
  4. Marking a task as completed
  5. Filtering tasks based on their status (all, completed, pending)
  6. Storing tasks in local storage to persist data across page reloads


  Reconciliation Algorithm in React
  1. When the state of a component changes, React creates a new Virtual DOM tree.
  2. It then compares this new tree with the previous Virtual DOM tree using a diffing algorithm.
  3. React identifies the differences (or "diffs") between the two trees.
  4. Based on these differences, React determines the minimal set of changes needed to update the actual DOM.
  5. Finally, React applies these changes to the real DOM in an efficient manner, minimizing reflows and repaints.


  Hooks in React
  1. useState: Allows you to add state to functional components.
  2. useEffect: Lets you perform side effects in functional components, such as fetching data or subscribing to events.
      eg: useEffect(() => {
        // Code to run on component mount or when dependencies change
      },[dependencies]);
  3. useContext: Provides a way to pass data through the component tree without having to pass props down manually at every level.
  4. useReducer: An alternative to useState for managing more complex state logic.
  5. useRef: Allows you to create a mutable object that persists for the lifetime of the component, often used for accessing DOM elements directly. 
  6. useMemo: Memoizes a computed value, preventing expensive calculations on every render.
  7. useCallback: Memoizes a function, preventing unnecessary re-creations of functions on every render.
  13. useId: Generates a unique ID that can be used for accessibility attributes or other purposes, ensuring consistency across server and client renders.
  18. useNavigate: A hook provided by React Router for programmatically navigating between routes in a React application.
  19. useParams: A hook provided by React Router for accessing URL parameters in a React component.
  20. useLocation: A hook provided by React Router for accessing the current location object, which contains information about the URL and navigation state.
  21. useDispatch: A hook provided by Redux for dispatching actions to the Redux store from a React component.
  22. useSelector: A hook provided by Redux for selecting state from the Redux store in a React component.

  8. useLayoutEffect: Similar to useEffect but fires synchronously after all DOM mutations, useful for reading layout from the DOM and synchronously re-rendering.
  9. useImperativeHandle: Customizes the instance value that is exposed to parent components when using ref.
  10. useDebugValue: Used to display a label for custom hooks in React DevTools for easier debugging.
  11. useTransition: Allows you to mark updates as non-urgent, enabling smoother user experiences during state transitions.
  12. useDeferredValue: Lets you defer re-rendering a component until the browser is idle, improving performance for expensive computations or large lists.
  
  14. useSyncExternalStore: Provides a way to subscribe to external stores and ensure that the component updates in sync with the store's state changes.
  15. useInsertionEffect: Similar to useLayoutEffect but fires before any DOM mutations, useful for injecting styles or performing other side effects that need to happen before the DOM is updated.
  16. useEvent: A hook for handling events in a way that avoids issues with stale closures, ensuring that event handlers always have access to the latest state and props.
  17. useOpaqueIdentifier: Generates a unique identifier that can be used for accessibility attributes or other purposes, ensuring consistency across server and client renders while preventing potential conflicts with other IDs in the application.
  


  parent component -> child component -> grandchild component -> great-grandchild component -> prop drilling
*/

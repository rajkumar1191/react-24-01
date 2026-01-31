import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
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

*/

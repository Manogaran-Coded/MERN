/* 

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\

npm install -g create-react-appt-app

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\front-end\react.js

npx create-react-app todolist 

*/


import './App.css';
import React from 'react';
import logo from "./logo.svg";
import TodoList from "./TodoList";
import AddTodo from './AddTodo';
import {useState} from "react";

function App() {
  const [count, setCount]=useState(0);
  const [a,setA]=useState(0);
  const b=5;
  const c=a*b;
  const [todos, setTodos]=React.useState([
    {id: 1, text: "Wash dishes", done: false},
    {id: 1, text: "Do laundry", done: false},
    {id: 1, text: "Take shower", done: false},
  ]);


  return(
<div className="App">
  
  <img src={logo} className="App-logo" alt="logo"></img>
  <p>You Clicked {count} times</p>
  <p>{c}={a}*{b}</p>
  <button onClick={() => setCount(count + 1)}> Click me</button>
  <button onClick={()=> setA(a+1)}> Next</button>
    <TodoList todos={todos} setTodos={setTodos} />
  <AddTodo setTodos={setTodos} />
  </div>
  );
}


export default App;
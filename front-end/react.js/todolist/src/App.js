/* 

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\

npm install -g create-react-appt-app

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\front-end\react.js

npx create-react-app todolist 

*/


import './App.css';
import logo from "./logo.svg";
import {useState} from "react";
function App() {
  const [count, setCount]=useState(0);
  const [a,setA]=useState(0);
  const b=5;
  const c=a*b;


  return(
<div className="App">
  
  <img src={logo} className="App-logo" alt="logo"></img>
  <h1>To Do List</h1>
  <p>You Clicked {count} times</p>
  <p>{c}={a}*{b}</p>
  <button onClick={() => setCount(count + 1)}> Click me</button>
  <button onClick={()=> setA(a+1)}> Next</button>
  </div>
  );
}

export default App;
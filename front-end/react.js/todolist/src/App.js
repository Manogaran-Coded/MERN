/* 

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\

npm install -g create-react-appt-app

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\front-end\react.js

npx create-react-app todolist 

npm install react-router
npm install -S react-router-dom

*/


import './App.css';
//import React from 'react';
import logo from "./logo.svg";
import TodoList from "./TodoList";
import AddTodo from './AddTodo';
import {useState} from "react";

import Welcome from './Welcome';
import SearchFilterDemo from './SearchFilterDemo';
import CounterWithNameAndSideEffect from './CounterWithNameAndSideEffect';
import {Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount]=useState(0);
  const [a,setA]=useState(0);
  const b=5;
  const c=a*b;
  const [todos, setTodos]=useState([
    {id: 1, text: "Wash dishes", done: false},
    {id: 2, text: "Do laundry", done: true},
    {id: 3, text: "Take shower", done: false},
  ]);




    return(
      <div className="App">
      <img src={logo} className="App-logo" alt="logo"></img>
        <Routes>
          <Route exact path="/" elements={<Welcome user={"Mano"} />}/> 
          

          <Route exact path="search" element={<SearchFilterDemo />}/>
              
          

          <Route exact path="/counter"
          element={
            <><div className="App">
              <p>You Clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}> Click me</button>
            


                <p>You Clicked {count} times</p>
                <p>{c}={a}*{b}</p>
                <button onClick={() => setCount(count + 1)}> Click me</button>
                <button onClick={() => setA(a + 1)}> Next</button>
                <TodoList todos={todos} setTodos={setTodos} />
                <AddTodo setTodos={setTodos} />
              </div></>
          }
          />
          

          <Route exact path="/counterWithNameAndSideEffect"
          element={<CounterWithNameAndSideEffect user={"Mano Meghna"} />}>

          </Route>

          <Route exact path="/todos" element={ 
          <>
             <TodoList todos={todos} setTodos={setTodos} />
              <AddTodo setTodos={setTodos} />
              </> }>
          </Route>
        </Routes>
        </div>
        );
        }


        export default App;
    

        
/* 

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\

npm install -g create-react-appt-app

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\front-end\react.js

npx create-react-app todolist 

*/


import './App.css';
function TodoList({todos, setTodos}) {
    return(
<div>
  <h1>Todo List</h1>
    <ul>
    {todos.map((todo) =>(
        <li key={todo.id}>{todo.text}</li>
    ))}
        
    </ul>
  
      </div>
  );
}

export default TodoList;
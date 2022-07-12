/* 

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\

npm install -g create-react-appt-app

\TCS\MERN-BOOTCAMP\Mongo DB\Project\Sample Queries\front-end\react.js

npx create-react-app todolist 

*/


import './App.css';
function TodoList({todos, setTodos}) {
    function handleToggleTodo(todo){
        const updatedTodos = todos.map((t)=> 
        t.id===todo.id
        ? {
            ...t,
            done: !t.done,
        }
        :t
        );
    }
    return(
<div>
  <h1>Todo List</h1>
    <ul>
    {todos.map((todo) =>(
        <li 
        onClick={()=> handleToggleTodo(todo)}
        style={{
            textDecoration:todo.done ? "line-through":"",
        }}
        key={todo.id}
        >
        {todo.text}
        </li>
    ))}
        
    </ul>
  
      </div>
  );
}

export default TodoList;
import React from "react";
import './App.css';
const {useEffect, useState}=React;

function CounterWithNameAndSideEffect ({ user }) {
    const[count,setCount]=useState(0);
    useEffect(()=> {
        console.log(`Hi ${user}You clicked ${count} times`);
    }, [user,count]);
/*
    return (
        <div className="App">
            <p>You clicked ${count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
        </div>
    );*/

    return (
        <>
            <p>You clicked ${count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me</button>
        </>
    );

};
export default CounterWithNameAndSideEffect;


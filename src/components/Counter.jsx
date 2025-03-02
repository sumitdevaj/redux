import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/actions/Counter.action'
import { addTodo, deleteTodo } from '../redux/actions/Todo.actions'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const todos = useSelector((state)=>state.todo.todos)
    console.log(todos);
    const [newTodo,setNewTodo] = useState('');
    const dispatch = useDispatch();
  return (
    <>
    <div>Counter {count}</div>
    <button onClick={()=>dispatch(increment())}>inc</button>
    <button onClick={()=>dispatch(decrement())}>dec</button>
    <h1>todo </h1>
    <input type='text' placeholder='enter todo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}></input>
    <button onClick={()=>{dispatch(addTodo(newTodo));setNewTodo("")}}>ADD</button>
    {todos && todos.map((todo,i)=>{return (<><h1>{todo}</h1>
      <button onClick={()=>dispatch(deleteTodo(i))}> del</button>
      </>
    )})}
    </>
  )
}

export default Counter
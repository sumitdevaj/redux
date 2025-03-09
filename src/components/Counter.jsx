import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/Counter.action'
import { addTodo, deleteTodo } from '../redux/actions/Todo.actions'
import { setProduct } from '../redux/actions/Product.action'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const todos = useSelector((state)=>state.todo.todos)
    const products = useSelector((state)=>state.product.products[0].products)
    const [newTodo,setNewTodo] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
      const fetchData =async ()=>{
        try{
          const response = await fetch('https://dummyjson.com/products')
          const data = await response.json()
          dispatch(setProduct(data))

        }
        catch(err){
          console.log(err);
          
        }
      }
      fetchData()
    },[dispatch])
  return (
    <>
    <div>Counter {count}</div>
    <button onClick={()=>dispatch(increment())}>inc</button>
    <button onClick={()=>dispatch(decrement())}>dec</button>
    <button onClick={()=>dispatch(reset())}>reset</button>
    <h1>todo </h1>
    <input type='text' placeholder='enter todo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}></input>
    <button onClick={()=>{dispatch(addTodo(newTodo));setNewTodo("")}}>ADD</button>
    {todos && todos.map((todo,i)=>{return (<><h1>{todo}</h1>
      <button onClick={()=>dispatch(deleteTodo(i))}> del</button>
      </>
    )})}
      {products && products.length && products.map((val)=>{
        return (<>
        <h1>{val.title}</h1>
        </>)})}
    </>
  )
}

export default Counter
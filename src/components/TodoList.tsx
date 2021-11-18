import React from 'react'
import { TodoModel } from '../models/todo'
import { deleteTodo } from '../store/modules/todo';
import { useAppDispatch } from './../store/hooks';

interface TodoListProps{
  items: TodoModel[],
}

const TodoList: React.FC<TodoListProps> = props => {
  const dispatch =  useAppDispatch()
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={()=> dispatch(deleteTodo({id:todo.id}))}>delete</button>
        </li>
      ))}
    </ul>
  )
}


export default TodoList
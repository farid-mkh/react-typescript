import React, { useRef } from 'react'
// store
import { useAppDispatch } from '../store/hooks'
import { addTodo } from '../store/modules/todo';
//

const NewTodo: React.FC = props => {
  // store
  const dispatch = useAppDispatch()
  //
  const textInputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    const inputText = textInputRef.current!.value;
    // store
    dispatch(addTodo({text:inputText}))
    //
    textInputRef.current!.value = '';
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input ref={textInputRef} type="text" id="todo-text" />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NewTodo
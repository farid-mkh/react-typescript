import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
// store
import { useAppSelector } from './store/hooks'

const App: React.FC = () => {
  // store
  const todoStore = useAppSelector(state => state.todos.todos)
  
  //
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todoStore}/>
    </div>
  );
}

export default App;
